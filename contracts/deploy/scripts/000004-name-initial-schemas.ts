import { AbiCoder } from 'ethers';
import { DeployFunction } from 'hardhat-deploy/types';
import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { NO_EXPIRATION, ZERO_ADDRESS, ZERO_BYTES32 } from '../../utils/Constants';
import { execute, InstanceName, setDeploymentMetadata } from '../../utils/Deploy';
import { getSchemaUID } from '../../utils/EAS';
import Logger from '../../utils/Logger';
import { SCHEMAS } from '../../deploy/scripts/000003-register-initial-schemas';

const NAME_SCHEMA_UID = getSchemaUID('string worldId,address withdrawalAddress,address walletAddress', ZERO_ADDRESS, false);
// const NAME_SCHEMA_UID = getSchemaUID('string x', ZERO_ADDRESS, false);
// const NAME_SCHEMA_UID = getSchemaUID('uints x', ZERO_ADDRESS, false);

const func: DeployFunction = async ({ getNamedAccounts }: HardhatRuntimeEnvironment) => {
  const { deployer } = await getNamedAccounts();

  for (const { schema, name } of SCHEMAS) {

    const revocable = false

    const schemaId = getSchemaUID(schema, ZERO_ADDRESS, revocable);

    console.log('schemaId', schemaId)

    const worldId = "worldId"
    const withdrawalAddress = ZERO_ADDRESS
    const walletAddress = ZERO_ADDRESS

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
            data: AbiCoder.defaultAbiCoder().encode(['string', 'address', 'address'], [worldId,withdrawalAddress,walletAddress]),
            // data: AbiCoder.defaultAbiCoder().encode(['uints'], [888]),
            value: 0
          }
        }
      ],
      from: deployer
    });

    Logger.log(`Named schema ${schema} as "${name}"`);
  }

  return true;
};

export default setDeploymentMetadata(__filename, func);
