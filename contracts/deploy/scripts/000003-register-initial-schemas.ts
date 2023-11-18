import { DeployFunction } from 'hardhat-deploy/types';
import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { ZERO_ADDRESS } from '../../utils/Constants';
import { execute, InstanceName, setDeploymentMetadata } from '../../utils/Deploy';
import { getSchemaUID } from '../../utils/EAS';
import Logger from '../../utils/Logger';

export const SCHEMAS = [
  {schema: 'string worldId,address withdrawalAddress,address walletAddress,uint64 timestamp', name: "GrayskullGuardiansSmoothiePool"}
]

const func: DeployFunction = async ({ getNamedAccounts }: HardhatRuntimeEnvironment) => {
  const { deployer } = await getNamedAccounts();

  const revocable = false

  for (const { schema } of SCHEMAS) {
    await execute({
      name: InstanceName.SchemaRegistry,
      methodName: 'register',
      args: [schema, ZERO_ADDRESS, revocable],
      from: deployer
    });

    Logger.log(`Registered schema ${schema} with UID ${getSchemaUID(schema, ZERO_ADDRESS, true)}`);
  }

  return true;
};

export default setDeploymentMetadata(__filename, func);

// export const tags  = ['schemas']