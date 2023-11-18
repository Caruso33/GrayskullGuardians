import { AbiCoder } from 'ethers';
import { DeployFunction } from 'hardhat-deploy/types';
import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { NO_EXPIRATION, ZERO_ADDRESS, ZERO_BYTES32 } from '../../utils/Constants';
import { execute, InstanceName, setDeploymentMetadata } from '../../utils/Deploy';
import { getSchemaUID } from '../../utils/EAS';
import Logger from '../../utils/Logger';
import { SCHEMAS } from './000003-register-initial-schemas';

// const NAME_SCHEMA_UID = getSchemaUID('string worldId,address withdrawalAddress,address walletAddress,uint64 timestamp', ZERO_ADDRESS, false);
const NAME_SCHEMA_UID = getSchemaUID('string x', ZERO_ADDRESS, false);

const func: DeployFunction = async ({ getNamedAccounts }: HardhatRuntimeEnvironment) => {
  const { deployer } = await getNamedAccounts();

  for (const { schema, name } of SCHEMAS) {
    const schemaId = getSchemaUID(schema, ZERO_ADDRESS, false);

    console.log('schemaId', schemaId)

    const worldId = "worldId"
    // const withdrawalAddress = ZERO_ADDRESS
    // const walletAddress = ZERO_ADDRESS
    // const timestamp = 0

    await execute({
      name: InstanceName.EAS,
      methodName: 'attest',
      args: [
        {
          schema: NAME_SCHEMA_UID,
          data: {
            recipient: ZERO_ADDRESS,
            expirationTime: NO_EXPIRATION,
            revocable: true,
            refUID: ZERO_BYTES32,
            // data: AbiCoder.defaultAbiCoder().encode(['string', 'address', 'address', 'uint64'], [worldId,withdrawalAddress,walletAddress,timestamp]),
            data: AbiCoder.defaultAbiCoder().encode(['string'], [worldId]),
            value: 0
          }
        }
      ],
      from: deployer
    });

    Logger.log(`Named schema ${JSON.stringify(schema, null, 2)} as "${name}"`);
  }

  return true;
};

export default setDeploymentMetadata(__filename, func);
