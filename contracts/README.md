# GrayskullGuardians

## EAS

```shell
deployer 0x4bFC74983D6338D3395A00118546614bB78472c2
deploying SchemaRegistry
constructor params: []
deploying "SchemaRegistry" (tx: 0x2298caeba4f21a8b76e2524a54585499368d27abe04a37d770c272315e98d766)...: deployed at 0x39e2a2Ef2265446C13Ddc0E492e610030347971C with 631718 gas
deploying EAS
constructor params:
registry (address): 0x39e2a2Ef2265446C13Ddc0E492e610030347971C
deploying "EAS" (tx: 0x4623b585b2c2c30d2dc12b14df2c2877ab19e95b297a6298e30425872c7cdb62)...: deployed at 0x663930fEBAD365ABC3E6388C6063829cCB1abedA with 4149084 gas
executing SchemaRegistry.register (0x39e2a2Ef2265446C13Ddc0E492e610030347971C)
register params:
schema (string): bytes32 schemaId,string name
resolver (address): 0x0000000000000000000000000000000000000000
revocable (bool): true
executing SchemaRegistry.register (tx: 0x10bc06b3b97c06d2bdb10d3ef7762cbab60e645b11acc7e0aae5b9c8b8bbe86a) ...: performed with 94190 gas
Registered schema bytes32 schemaId,string name with UID 0x44d562ac1d7cd77e232978687fea027ace48f719cf1d58c7888e509663bb87fc
executing SchemaRegistry.register (0x39e2a2Ef2265446C13Ddc0E492e610030347971C)
register params:
schema (string): bool like
resolver (address): 0x0000000000000000000000000000000000000000
revocable (bool): true
executing SchemaRegistry.register (tx: 0xa91e003ff4b1e03564a287f3147f15b21d5f567d699a813be327cbc249c0a4e3) ...: performed with 93953 gas
Registered schema bool like with UID 0x33e9094830a5cba5554d1954310e4fbed2ef5f859ec1404619adea4207f391fd
executing SchemaRegistry.register (0x39e2a2Ef2265446C13Ddc0E492e610030347971C)
register params:
schema (string): address contractAddress,bool trusted
resolver (address): 0x0000000000000000000000000000000000000000
revocable (bool): true
executing SchemaRegistry.register (tx: 0xd480547c309c577af405a90eacd3dd102842e624f65c0fdbcb770db06baf1fed) ...: performed with 139188 gas
Registered schema address contractAddress,bool trusted with UID 0x55101a1628875a053dcaf713b1ef2c92392e7544227c153206d904fee6b2f46a
executing SchemaRegistry.register (0x39e2a2Ef2265446C13Ddc0E492e610030347971C)
register params:
schema (string): bytes32 eventId,uint8 ticketType,uint32 ticketNum
resolver (address): 0x0000000000000000000000000000000000000000
revocable (bool): true
executing SchemaRegistry.register (tx: 0x54030f2185571b760d51d8c66215ddc4882acdf246602396a661895a02eb002a) ...: performed with 139354 gas
Registered schema bytes32 eventId,uint8 ticketType,uint32 ticketNum with UID 0x9e30695f05ad280a1caf4ec15621dde07cd22aa8cf834e58b84b816c2ccfb6ac
executing SchemaRegistry.register (0x39e2a2Ef2265446C13Ddc0E492e610030347971C)
register params:
schema (string): bool isHuman
resolver (address): 0x0000000000000000000000000000000000000000
revocable (bool): true
executing SchemaRegistry.register (tx: 0xd3beae36a2978fbb2d9ed2b53d542d22814fa6cd0227a5e2074eabd35a718f9e) ...: performed with 93995 gas
Registered schema bool isHuman with UID 0x8af15e65888f2e3b487e536a4922e277dcfe85b4b18187b0cf9afdb802ba6bb6
executing SchemaRegistry.register (0x39e2a2Ef2265446C13Ddc0E492e610030347971C)
register params:
schema (string): bytes32 name
resolver (address): 0x0000000000000000000000000000000000000000
revocable (bool): true
executing SchemaRegistry.register (tx: 0x3fe328883b385e8659dd01a0421629f8c3e8d8ffe27d660afd5f7f7e0f31fd54) ...: performed with 93995 gas
Registered schema bytes32 name with UID 0x7058fe5d1216b6144f54a4afd5874a7692b417fa03af6db5fec0f23cd3597193
executing SchemaRegistry.register (0x39e2a2Ef2265446C13Ddc0E492e610030347971C)
register params:
schema (string): string message
resolver (address): 0x0000000000000000000000000000000000000000
revocable (bool): true
executing SchemaRegistry.register (tx: 0x779b00811f4f162ca20af4c1ed8d5398f3d742ee26476e80fb36befa19277f7c) ...: performed with 94019 gas
Registered schema string message with UID 0x3969bb076acfb992af54d51274c5c868641ca5344e1aacd0b1f5e4f80ac0822f
executing SchemaRegistry.register (0x39e2a2Ef2265446C13Ddc0E492e610030347971C)
register params:
schema (string): string statement
resolver (address): 0x0000000000000000000000000000000000000000
revocable (bool): true
executing SchemaRegistry.register (tx: 0x71810322a0f2a9770d379f49ec1c3b68f4dd98df6a1b6c9d3d29a011ca334c8f) ...: performed with 94043 gas
Registered schema string statement with UID 0xf58b8b212ef75ee8cd7e8d803c37c03e0519890502d5e99ee2412aae1456cafe
executing SchemaRegistry.register (0x39e2a2Ef2265446C13Ddc0E492e610030347971C)
register params:
schema (string): bytes32 username
resolver (address): 0x0000000000000000000000000000000000000000
revocable (bool): true
executing SchemaRegistry.register (tx: 0x74e6f0558b59e68abf5dfc07fa8aef8128c963d9959a9600a8c91923264f0a1a) ...: performed with 94043 gas
Registered schema bytes32 username with UID 0x1c12bac4f230477c87449a101f5f9d6ca1c492866355c0a5e27026753e5ebf40
executing SchemaRegistry.register (0x39e2a2Ef2265446C13Ddc0E492e610030347971C)
register params:
schema (string): bool isFriend
resolver (address): 0x0000000000000000000000000000000000000000
revocable (bool): true
executing SchemaRegistry.register (tx: 0xa2ee6524ad4bafff0258ad3e91808677d0e60577bcacf7c716a65cfd08fc0418) ...: performed with 94007 gas
Registered schema bool isFriend with UID 0x27d06e3659317e9a4f8154d1e849eb53d43d91fb4f219884d1684f86d797804a
executing SchemaRegistry.register (0x39e2a2Ef2265446C13Ddc0E492e610030347971C)
register params:
schema (string): bool hasPhoneNumber,bytes32 phoneHash
resolver (address): 0x0000000000000000000000000000000000000000
revocable (bool): true
executing SchemaRegistry.register (tx: 0x88dafdea10aadb227ccdd7b85cc529e6d0014a5d3a0f36b0be5fdcb9a7cfd929) ...: performed with 139200 gas
Registered schema bool hasPhoneNumber,bytes32 phoneHash with UID 0xb7a45c9772f2fada6c02b9084b3e75217aa01a610e724eecd36aeb1a654a4c7e
executing SchemaRegistry.register (0x39e2a2Ef2265446C13Ddc0E492e610030347971C)
register params:
schema (string): uint256 eventId,uint8 voteIndex
resolver (address): 0x0000000000000000000000000000000000000000
revocable (bool): true
executing SchemaRegistry.register (tx: 0x8a28b025f465e164c3b6e9b30c13cb4e2e4db96b48b116b93cab595f06d86dd5) ...: performed with 94226 gas
Registered schema uint256 eventId,uint8 voteIndex with UID 0x424041413f6893c2f2e3e0e91ce9e26763840795b9c7fbb3866502e8d5c94677
executing SchemaRegistry.register (0x39e2a2Ef2265446C13Ddc0E492e610030347971C)
register params:
schema (string): bool hasPassedKYC
resolver (address): 0x0000000000000000000000000000000000000000
revocable (bool): true
executing SchemaRegistry.register (tx: 0xf623769965ea7ab3059f17527d702fa0ab1bcf2db452778d4c3fd208631989cd) ...: performed with 94055 gas
Registered schema bool hasPassedKYC with UID 0xc8c8be26e2082ff59e0f1725b2b85322adc80648c7c4084441ba67ee46ad0127
executing SchemaRegistry.register (0x39e2a2Ef2265446C13Ddc0E492e610030347971C)
register params:
schema (string): bool isAccreditedInvestor
resolver (address): 0x0000000000000000000000000000000000000000
revocable (bool): true
executing SchemaRegistry.register (tx: 0x5c181e67595377847f2e46084fb5a8666808b116d2364e8e6373c3b9193deb52) ...: performed with 94154 gas
Registered schema bool isAccreditedInvestor with UID 0x080b936de73075fc93150909d2e0fb26eb7a4090ca027f071cbb0af23ae73f19
executing SchemaRegistry.register (0x39e2a2Ef2265446C13Ddc0E492e610030347971C)
register params:
schema (string): bytes32 hashOfDocument,string note
resolver (address): 0x0000000000000000000000000000000000000000
revocable (bool): true
executing SchemaRegistry.register (tx: 0x2e97800f8e320b611e37b1ea4dc30441ce7c931d402bafe08350f660bb49be39) ...: performed with 139164 gas
Registered schema bytes32 hashOfDocument,string note with UID 0xd3f24e873e8df2d9bb9af6f08ea1ddf61f65754d023f3ea761081e3e6a226a80
executing SchemaRegistry.register (0x39e2a2Ef2265446C13Ddc0E492e610030347971C)
register params:
schema (string): bytes32 contentHash
resolver (address): 0x0000000000000000000000000000000000000000
revocable (bool): true
executing SchemaRegistry.register (tx: 0x9a0f85c69f82213ca98a14059d25c72836707d98cf1d63e938ba978638a6cd84) ...: performed with 94079 gas
Registered schema bytes32 contentHash with UID 0xdf4c41ea0f6263c72aa385580124f41f2898d3613e86c50519fc3cfd7ff13ad4
executing SchemaRegistry.register (0x39e2a2Ef2265446C13Ddc0E492e610030347971C)
register params:
schema (string): uint8 holdType,uint8 useType,uint64 expiration,int40[2][] polygonArea
resolver (address): 0x0000000000000000000000000000000000000000
revocable (bool): true
executing SchemaRegistry.register (tx: 0xcd661c7fe61e2c1d43be3f27a367146ce3d1c7b1295f4b029e2479e1dabdc484) ...: performed with 162306 gas
Registered schema uint8 holdType,uint8 useType,uint64 expiration,int40[2][] polygonArea with UID 0x0081196516957509db14e998fa4191dd2d7e0c9a21377214806b3fbb8566f4c1
executing SchemaRegistry.register (0x39e2a2Ef2265446C13Ddc0E492e610030347971C)
register params:
schema (string): string productName,bytes32 productSKU,string origin,string manufacturer,uint64 productionDate,uint64 expirationDate,bytes32 rawMaterialHash,address certifier
resolver (address): 0x0000000000000000000000000000000000000000
revocable (bool): true
executing SchemaRegistry.register (tx: 0x320debd67ac57f02e78: performed with 208817 gas
Registered schema string productName,bytes32 productSKU,string origin,string manufacturer,uint64 productionDate,uint64 expirationDate,bytes32 rawMaterialHash,address certifier with UID 0x255401d26748199ff0c3f5826964c06f2bc6ebd6ca15a12fb3d499e23ab2a991
executing SchemaRegistry.register (0x39e2a2Ef2265446C13Ddc0E492e610030347971C)
register params:
schema (string): bytes32 productId,string productName,address producerAddress,bytes32 batchId,uint64 productionDate,uint64 expirationDate
resolver (address): 0x0000000000000000000000000000000000000000
revocable (bool): true
executing SchemaRegistry.register (tx: 0xcd8e1bafd6c4b2813c5: performed with 185651 gas
Registered schema bytes32 productId,string productName,address producerAddress,bytes32 batchId,uint64 productionDate,uint64 expirationDate with UID 0xa18f97dfff3f61f3577d9019d0af390b2375d315555482fe379256b504e6d5e4
executing SchemaRegistry.register (0x39e2a2Ef2265446C13Ddc0E492e610030347971C)
register params:
schema (string): string assetName,string assetTicker,uint64 futureDate,uint256 price
resolver (address): 0x0000000000000000000000000000000000000000
revocable (bool): true
executing SchemaRegistry.register (tx: 0x5015f07e2bfec3b410ed306066675208b877d23f2c8dcd941f89791410714e8c) ...: performed with 162282 gas
Registered schema string assetName,string assetTicker,uint64 futureDate,uint256 price with UID 0x24d65fd9da1abb92d838b7f4f9ac939c88f8ba00282f64329d8a7496cf7bc1ae
executing SchemaRegistry.register (0x39e2a2Ef2265446C13Ddc0E492e610030347971C)
register params:
schema (string): string assetName,string assetTicker,uint64 timestamp,uint256 price
resolver (address): 0x0000000000000000000000000000000000000000
revocable (bool): true
executing SchemaRegistry.register (tx: 0x2f5a322f03b21777ae3ffd5ba9677583eac3334af6fc5d9f07a1940c969ca4c6) ...: performed with 162270 gas
Registered schema string assetName,string assetTicker,uint64 timestamp,uint256 price with UID 0x0f711236d20dce7f7870ec2bb57899fe5bb3117a45610f50d29c63cce666b5e0
executing SchemaRegistry.register (0x39e2a2Ef2265446C13Ddc0E492e610030347971C)
register params:
schema (string): bytes32 documentHash,bytes32 notaryCertificate,uint64 notarizationTime
resolver (address): 0x0000000000000000000000000000000000000000
revocable (bool): true
executing SchemaRegistry.register (tx: 0xf516943012d870a3fc640ff09b3aab2511f42820cad41d21a2a6aff91d3f314b) ...: performed with 162321 gas
Registered schema bytes32 documentHash,bytes32 notaryCertificate,uint64 notarizationTime with UID 0xf5e3c5dd9ed54b59bdacceb0def073061e680939f7cff07d9521dc3e87336111
executing SchemaRegistry.register (0x39e2a2Ef2265446C13Ddc0E492e610030347971C)
register params:
schema (string): bytes32 passportHash,uint64 expirationDate
resolver (address): 0x0000000000000000000000000000000000000000
revocable (bool): true
executing SchemaRegistry.register (tx: 0x9aa821e0d3684b7ace6b012c57bb189a4762d9387a4bf21d66533c8b543d42a4) ...: performed with 139264 gas
Registered schema bytes32 passportHash,uint64 expirationDate with UID 0xf4ff1791c06f4830fcb5f71fcbaa26cfee5c21a7f3114a28ea3d835ae22b8a85
executing SchemaRegistry.register (0x39e2a2Ef2265446C13Ddc0E492e610030347971C)
register params:
schema (string): string projectName,string description,address beneficiary,uint256 amountRequested,uint64 submittedTime,bytes32 proposalHash
resolver (address): 0x0000000000000000000000000000000000000000
revocable (bool): true
executing SchemaRegistry.register (tx: 0xf2da5a3b683ea846b313 adafdfd533c47c9d0a84512cd7f56b8335e40b4d1fd4) ...: performed with 185687 gas
Registered schema string projectName,string description,address beneficiary,uint256 amountRequested,uint64 submittedTime,bytes32 proposalHash with UID 0x332cf20c2f6cdd178666f5c8c683c549a0587d23d9b6faa28bc5eac5217a1970
executing SchemaRegistry.register (0x39e2a2Ef2265446C13Ddc0E492e610030347971C)
register params:
schema (string): bytes32 projectId,bytes32 milestoneId,uint256 amount,bool isCompleted
resolver (address): 0x0000000000000000000000000000000000000000
revocable (bool): true
executing SchemaRegistry.register (tx: 0x3b1a1b8beb06f466e54e06c15a88fd847d872a16613794cb602fc774d27cd9ba) ...: performed with 162306 gas
Registered schema bytes32 projectId,bytes32 milestoneId,uint256 amount,bool isCompleted with UID 0x09e2b234d5f7ecdb0bfc2b1d4e4550577e2a685630a7fe1162dd66e7ebf9092e
executing SchemaRegistry.register (0x39e2a2Ef2265446C13Ddc0E492e610030347971C)
register params:
schema (string): bytes32 projectId,uint256 amountPaid,string memo
resolver (address): 0x0000000000000000000000000000000000000000
revocable (bool): true
executing SchemaRegistry.register (tx: 0xd28cbe9bace8d67392a89d127e73b6b4406fc8577d80ad948d8d3c0cd279279c) ...: performed with 139342 gas
Registered schema bytes32 projectId,uint256 amountPaid,string memo with UID 0xd37edb912b5cce1d151b0c38390fd9a0463a95050d3024686821a9d942f0695c
executing SchemaRegistry.register (0x39e2a2Ef2265446C13Ddc0E492e610030347971C)
register params:
schema (string): string hackathonName,string hackathonId,string projectName,string description,address[] team,uint64 submittedDate
resolver (address): 0x0000000000000000000000000000000000000000
revocable (bool): true
executing SchemaRegistry.register (tx: 0xff6d7ebdeab340389e5fc2fbb43216822a902f1c16163279b4073b04ecc58d16) ...: performed with 185564 gas
Registered schema string hackathonName,string hackathonId,string projectName,string description,address[] team,uint64 submittedDate with UID 0x8b3c71744dc4c55e76b63c7224fb704a6aec919bb87af30fc0ac3c13d4d3c5b9
executing SchemaRegistry.register (0x39e2a2Ef2265446C13Ddc0E492e610030347971C)
register params:
schema (string): bytes32 projectId,string projectName,address winnerAddress,uint256 prizeAmount,string projectDescription
resolver (address): 0x0000000000000000000000000000000000000000
revocable (bool): true
executing SchemaRegistry.register (tx: 0x33f1cbb4a39e73de72e130332583c586d37b85cb835343195cb0b9755ad1330f) ...: performed with 185450 gas
Registered schema bytes32 projectId,string projectName,address winnerAddress,uint256 prizeAmount,string projectDescription with UID 0xa60de34b1a7d7b90ea41bfa16136928c53e51301b7b47c7c8d23d204c60cbfda
executing SchemaRegistry.register (0x39e2a2Ef2265446C13Ddc0E492e610030347971C)
register params:
schema (string): bytes32 productName,string review,uint8 rating
resolver (address): 0x0000000000000000000000000000000000000000
revocable (bool): true
executing SchemaRegistry.register (tx: 0x5cbff04f1bec18bf79a1f01df948c6cbc52c9fec87d0693468e05141f02d1fa6) ...: performed with 139318 gas
Registered schema bytes32 productName,string review,uint8 rating with UID 0xeae0ff58b769be065ba9d54f4dd9b88c07de93a00e1e3b889a7099de02dd5549
executing SchemaRegistry.register (0x39e2a2Ef2265446C13Ddc0E492e610030347971C)
register params:
schema (string): uint64 dateOfProof,uint256 amount,bool hasFunds,bytes32 evidenceHash
resolver (address): 0x0000000000000000000000000000000000000000
revocable (bool): true
executing SchemaRegistry.register (tx: 0x3dcee1de2a72e88affe5534d3f18f7c14ecd243a6259de1baa510821f233d766) ...: performed with 162294 gas
Registered schema uint64 dateOfProof,uint256 amount,bool hasFunds,bytes32 evidenceHash with UID 0x85ffcbe250bde4a1908318f7df7a6f5f8b175442f2bc040a18b44ef56430ca40
executing SchemaRegistry.register (0x39e2a2Ef2265446C13Ddc0E492e610030347971C)
register params:
schema (string): string assetName,bool activeHolding,string note
resolver (address): 0x0000000000000000000000000000000000000000
revocable (bool): true
executing SchemaRegistry.register (tx: 0x5ba53c83a2f55678578e6bcfd3555e47443c120a79553e92f650c8174319670c) ...: performed with 139330 gas
Registered schema string assetName,bool activeHolding,string note with UID 0xf2a90c180aeb3f7da551d8972633ea49c657c084146875e848312d0dbf9dcdb7
executing SchemaRegistry.register (0x39e2a2Ef2265446C13Ddc0E492e610030347971C)
register params:
schema (string): string websiteUrl
resolver (address): 0x0000000000000000000000000000000000000000
revocable (bool): true
executing SchemaRegistry.register (tx: 0x40e75ff6fd85b8937614e188eb5eb1db0b9ebbb5750bfa251afe3d70282aa6a2) ...: performed with 94055 gas
Registered schema string websiteUrl with UID 0xf209dfc21472d0e774ddfa207a444edad4dec5f96a9a848620717010df0996a7
executing SchemaRegistry.register (0x39e2a2Ef2265446C13Ddc0E492e610030347971C)
register params:
schema (string): string twitterHandle
resolver (address): 0x0000000000000000000000000000000000000000
revocable (bool): true
executing SchemaRegistry.register (tx: 0x35e592da08233e33b140abe7821917e63a24294cfc61e996f0d0e95657c8779f) ...: performed with 94091 gas
Registered schema string twitterHandle with UID 0xd41255b9888874f05cb79bae8c5d6f702c51b9f69fb797c3767d2dd06e67fbcb
executing SchemaRegistry.register (0x39e2a2Ef2265446C13Ddc0E492e610030347971C)
register params:
schema (string): string youtubeChannel
resolver (address): 0x0000000000000000000000000000000000000000
revocable (bool): true
executing SchemaRegistry.register (tx: 0x0b2f32c27d9f62c584af24a8484286672b19af778c37e5e555e1b112a63567ab) ...: performed with 94103 gas
Registered schema string youtubeChannel with UID 0x85b1195206119c34014e8d8c6a721ad0ee34c837afd4292f67a4b3c87ab77c19
executing SchemaRegistry.register (0x39e2a2Ef2265446C13Ddc0E492e610030347971C)
register params:
schema (string): string githubUrl
resolver (address): 0x0000000000000000000000000000000000000000
revocable (bool): true
executing SchemaRegistry.register (tx: 0x9087499c826f1f5082b011598e8697d168ece55e473c804e8c8259c35d823b81) ...: performed with 94043 gas
Registered schema string githubUrl with UID 0xed904085b3b88a244dadef36963683fec869690f273cf1e18619b5346690c742
executing SchemaRegistry.register (0x39e2a2Ef2265446C13Ddc0E492e610030347971C)
register params:
schema (string): string telegramUsername
resolver (address): 0x0000000000000000000000000000000000000000
revocable (bool): true
executing SchemaRegistry.register (tx: 0x3af9ffe344ac95802ff6ea69521e4f592464c60c23cefe8623e7276611d0fa70) ...: performed with 94130 gas
Registered schema string telegramUsername with UID 0xfc11b014da820ed8ca4ae02700821702656cc978e6646f5c80a3ab7dbf6e2177
executing SchemaRegistry.register (0x39e2a2Ef2265446C13Ddc0E492e610030347971C)
register params:
schema (string): string eventName,string eventLocation,bytes32 eventID,uint64 checkInTime,bytes32 ticketID
resolver (address): 0x0000000000000000000000000000000000000000
revocable (bool): true
executing SchemaRegistry.register (tx: 0x70fe78869b31cf387f9bff59ebbee96e68668bf71f2764675440a7f6ce85c77e) ...: performed with 162558 gas
Registered schema string eventName,string eventLocation,bytes32 eventID,uint64 checkInTime,bytes32 ticketID with UID 0xef1b64c8b49daf8ba1832fc590798e0af6f9a81cc345bfb2f2f44598b74d01f5
executing SchemaRegistry.register (0x39e2a2Ef2265446C13Ddc0E492e610030347971C)
register params:
schema (string): string institutionName,string degreeName,uint64 graduationDate,bytes32 transcriptHash,address issuerAddress
resolver (address): 0x0000000000000000000000000000000000000000
revocable (bool): true
executing SchemaRegistry.register (tx: 0x400861b410686521d489baece6829c78590463aea2dec87a1426c98a1b842cd7) ...: performed with 185486 gas
Registered schema string institutionName,string degreeName,uint64 graduationDate,bytes32 transcriptHash,address issuerAddress with UID 0xb39a7d8a6487eb2d6b908833a8f44e92473095278e5954e93ab5bd8a35cb8007
executing SchemaRegistry.register (0x39e2a2Ef2265446C13Ddc0E492e610030347971C)
register params:
schema (string): string companyName,string role,uint64 startDate,uint64 endDate
resolver (address): 0x0000000000000000000000000000000000000000
revocable (bool): true
executing SchemaRegistry.register (tx: 0x7867d1209cff7d2fdbab9bb470f53e8cbee5ec350a36f8706e6020865e0b45c4) ...: performed with 139513 gas
Registered schema string companyName,string role,uint64 startDate,uint64 endDate with UID 0xf546ed76a0fbff471a4738db7560dc4aea4c44a9a2748b5a428905b6c58712b7
executing SchemaRegistry.register (0x39e2a2Ef2265446C13Ddc0E492e610030347971C)
register params:
schema (string): bytes32 roleId,string role,bytes32[] authorizations
resolver (address): 0x0000000000000000000000000000000000000000
revocable (bool): true
executing SchemaRegistry.register (tx: 0xa0627bd829d0d96b073902048250c4248b4a4a0a166d170db868c7be080683bb) ...: performed with 139378 gas
Registered schema bytes32 roleId,string role,bytes32[] authorizations with UID 0x7713f5acbbc0382d43eeff9d349a41c686dd2fd67c9642775cf72477ab72006b
executing SchemaRegistry.register (0x39e2a2Ef2265446C13Ddc0E492e610030347971C)
register params:
schema (string): bool passedAudit
resolver (address): 0x0000000000000000000000000000000000000000
revocable (bool): true
executing SchemaRegistry.register (tx: 0x6a4a480c92112524fea197b04a5d22ab735d8f2d9b40e3b9205cea44aeabaf62) ...: performed with 94043 gas
Registered schema bool passedAudit with UID 0x11933b6d371190079d1b4e1f1d53c0969d1ed56035bf1f1517e5c6853c289a90
executing SchemaRegistry.register (0x39e2a2Ef2265446C13Ddc0E492e610030347971C)
register params:
schema (string): bool metIRL
resolver (address): 0x0000000000000000000000000000000000000000
revocable (bool): true
executing SchemaRegistry.register (tx: 0x68af447d91ae2b1b926d46eecac9fa65b0f1d4b9a6e981c79c1fde3b93a0414b) ...: performed with 93977 gas
Registered schema bool metIRL with UID 0xc59265615401143689cbfe73046a922c975c99d97e4c248070435b1104b2dea7
executing SchemaRegistry.register (0x39e2a2Ef2265446C13Ddc0E492e610030347971C)
register params:
schema (string): bytes32 privateData
resolver (address): 0x0000000000000000000000000000000000000000
revocable (bool): true
executing SchemaRegistry.register (tx: 0x2cad0cd7c6c80f05d03c5a508baa415c73a19e6736a48e69a99013ef9423ca5a) ...: performed with 94079 gas
Registered schema bytes32 privateData with UID 0x20351f973fdec1478924c89dfa533d8f872defa108d9c3c6512267d7e7e5dbc2
executing SchemaRegistry.register (0x39e2a2Ef2265446C13Ddc0E492e610030347971C)
register params:
schema (string): bool isTrue
resolver (address): 0x0000000000000000000000000000000000000000
revocable (bool): true
executing SchemaRegistry.register (tx: 0x7df337d6bee1f3b3455b5c109cf031176505e3d052e78256a22bfd81d44e96a6) ...: performed with 93977 gas
Registered schema bool isTrue with UID 0x4eb603f49d68888d7f8b1fadd351b35a252f287ba465408ceb2b1e1e1efd90d5
executing SchemaRegistry.register (0x39e2a2Ef2265446C13Ddc0E492e610030347971C)
register params:
schema (string): string post
resolver (address): 0x0000000000000000000000000000000000000000
revocable (bool): true
executing SchemaRegistry.register (tx: 0x6ca52260da5274f7d04dabf3e247d913ba20c2458912b23b2bc13aa16f86a01b) ...: performed with 93977 gas
Registered schema string post with UID 0xbbea47804168571b26f0ea2962bfbd1b11184bc0a438724c890151201eb60128
executing SchemaRegistry.register (0x39e2a2Ef2265446C13Ddc0E492e610030347971C)
register params:
schema (string): bool gm
resolver (address): 0x0000000000000000000000000000000000000000
revocable (bool): true
executing SchemaRegistry.register (tx: 0xcb3fd23aa7beb20b63fd07c2075150d895b23a4581ee260fea714cd4cc11170f) ...: performed with 93929 gas
Registered schema bool gm with UID 0x85500e806cf1e74844d51a20a6d893fe1ed6f6b0738b50e43d774827d08eca61
executing EAS.attest (0x663930fEBAD365ABC3E6388C6063829cCB1abedA)
attest params:
request (tuple): [object Object]
executing EAS.attest (tx: 0xa31fd8737ad20e5e6dd2cffa276cce15229bc995b0dab01b18ddef1ac5837d69) ...: performed with 247535 gas
Named schema bytes32 schemaId,string name as "Name a Schema"
executing EAS.attest (0x663930fEBAD365ABC3E6388C6063829cCB1abedA)
attest params:
request (tuple): [object Object]
executing EAS.attest (tx: 0x28c90e292c518b68fa078a0124c20c41bc31457994bb43f6833ccd34a1ea1987) ...: performed with 247427 gas
Named schema bool like as "Like"
executing EAS.attest (0x663930fEBAD365ABC3E6388C6063829cCB1abedA)
attest params:
request (tuple): [object Object]
executing EAS.attest (tx: 0xdd40b6c234a0f2fa5655d3e6b2b7978dcac9f3677e5fe622f52de677420c0c99) ...: performed with 247571 gas
Named schema address contractAddress,bool trusted as "Trust a Contract"
executing EAS.attest (0x663930fEBAD365ABC3E6388C6063829cCB1abedA)
attest params:
request (tuple): [object Object]
executing EAS.attest (tx: 0x5bdc1e2af14085d3697ed8f7cd0e454bfa22c78e43626a92747103e2639424e3) ...: performed with 247607 gas
Named schema bytes32 eventId,uint8 ticketType,uint32 ticketNum as "Create Event Ticket"
executing EAS.attest (0x663930fEBAD365ABC3E6388C6063829cCB1abedA)
attest params:
request (tuple): [object Object]
executing EAS.attest (tx: 0x90882a63347df6b06d6f8eaf226fdfa7f17f1c797e8e4eadd59038733710dea8) ...: performed with 247499 gas
Named schema bool isHuman as "Is a Human"
executing EAS.attest (0x663930fEBAD365ABC3E6388C6063829cCB1abedA)
attest params:
request (tuple): [object Object]
executing EAS.attest (tx: 0x57cb6de4385afa6b6a8b8c6ba14613e5e9b548fe0475d3716ff01a1d2256cc3a) ...: performed with 247547 gas
Named schema bytes32 name as "Name Something"
executing EAS.attest (0x663930fEBAD365ABC3E6388C6063829cCB1abedA)
attest params:
request (tuple): [object Object]
executing EAS.attest (tx: 0xb098842dfe00dca10562290df39e0ce4171f08dcc00165ab1bbbbf18ee3679b2) ...: performed with 247559 gas
Named schema string message as "Write a Message"
executing EAS.attest (0x663930fEBAD365ABC3E6388C6063829cCB1abedA)
attest params:
request (tuple): [object Object]
executing EAS.attest (tx: 0xe16b733a7f8ace8d275a6391781b11cb14beda944cb34981797687aab309b58e) ...: performed with 247571 gas
Named schema string statement as "Make a Statement"
executing EAS.attest (0x663930fEBAD365ABC3E6388C6063829cCB1abedA)
attest params:
request (tuple): [object Object]
executing EAS.attest (tx: 0xe39afc9dbdd0230ccad7d76f729111788c87a4ec564fece5b5bdae3583330add) ...: performed with 247475 gas
Named schema bytes32 username as "Username"
executing EAS.attest (0x663930fEBAD365ABC3E6388C6063829cCB1abedA)
attest params:
request (tuple): [object Object]
executing EAS.attest (tx: 0x4131f373b3a0fc50f4758413f08d5b1686dc45669d961e707576f32f23c68c59) ...: performed with 247511 gas
Named schema bool isFriend as "Is a Friend"
executing EAS.attest (0x663930fEBAD365ABC3E6388C6063829cCB1abedA)
attest params:
request (tuple): [object Object]
executing EAS.attest (tx: 0x850d1af41cc035d9f06238ec110c7f4b55573ed88a2ed92cc0ffd0f2df988a7f) ...: performed with 247571 gas
Named schema bool hasPhoneNumber,bytes32 phoneHash as "Has Phone Number"
executing EAS.attest (0x663930fEBAD365ABC3E6388C6063829cCB1abedA)
attest params:
request (tuple): [object Object]
executing EAS.attest (tx: 0x6c035a0de0109c0ae8e21202e2d4895e969d9ad049b1a3dc03bc0c08148915d2) ...: performed with 247427 gas
Named schema uint256 eventId,uint8 voteIndex as "Vote"
executing EAS.attest (0x663930fEBAD365ABC3E6388C6063829cCB1abedA)
attest params:
request (tuple): [object Object]
executing EAS.attest (tx: 0xd91efe3ecda5e68c0425b5024af9e73c6ac172cf2ef9e6c9635e17f2cee631be) ...: performed with 247499 gas
Named schema bool hasPassedKYC as "Passed KYC"
executing EAS.attest (0x663930fEBAD365ABC3E6388C6063829cCB1abedA)
attest params:
request (tuple): [object Object]
executing EAS.attest (tx: 0xdf94bb88c58b5d88769b99140b51e5cdeae06f93345c494d2d217ea698a77780) ...: performed with 247679 gas
Named schema bool isAccreditedInvestor as "Is an Accredited Investor"
executing EAS.attest (0x663930fEBAD365ABC3E6388C6063829cCB1abedA)
attest params:
request (tuple): [object Object]
executing EAS.attest (tx: 0xf388628582af1e2e30e4125c957bd112230d45361cc35ba9f7174ce6aec18fcb) ...: performed with 247535 gas
Named schema bytes32 hashOfDocument,string note as "Sign Document"
executing EAS.attest (0x663930fEBAD365ABC3E6388C6063829cCB1abedA)
attest params:
request (tuple): [object Object]
executing EAS.attest (tx: 0xe99b3c3a565402ace17dce2a3a7ee7043c87af81b518a9f12cbf6bb9760a6d89) ...: performed with 247523 gas
Named schema bytes32 contentHash as "Content Hash"
executing EAS.attest (0x663930fEBAD365ABC3E6388C6063829cCB1abedA)
attest params:
request (tuple): [object Object]
executing EAS.attest (tx: 0xe345fe27278989e40bda8a04d36a9979ccb36c0a6d103e2c15c395137ad1f512) ...: performed with 247523 gas
Named schema uint8 holdType,uint8 useType,uint64 expiration,int40[2][] polygonArea as "Land Registry"
executing EAS.attest (0x663930fEBAD365ABC3E6388C6063829cCB1abedA)
attest params:
request (tuple): [object Object]
executing EAS.attest (tx: 0x4d15ea98d2de0d3eaf5a11f4e93098dabe5d2e42ecdfb8b557696c1fbfd10fad) ...: performed with 247547 gas
Named schema string productName,bytes32 productSKU,string origin,string manufacturer,uint64 productionDate,uint64 expirationDate,bytes32 rawMaterialHash,address certifier as "Product Origin"
executing EAS.attest (0x663930fEBAD365ABC3E6388C6063829cCB1abedA)
attest params:
request (tuple): [object Object]
executing EAS.attest (tx: 0xf78d22d41a358bae95b1ecf3fe635c1a64f0f41639151683fd9ce3a310fae9cc) ...: performed with 247595 gas
Named schema bytes32 productId,string productName,address producerAddress,bytes32 batchId,uint64 productionDate,uint64 expirationDate as "Product Provenance"
executing EAS.attest (0x663930fEBAD365ABC3E6388C6063829cCB1abedA)
attest params:
request (tuple): [object Object]
executing EAS.attest (tx: 0x64fd890e9db3469d399e96d32c68f80da493a3c738c0e33b04715e04fd5646f8) ...: performed with 247559 gas
Named schema string assetName,string assetTicker,uint64 futureDate,uint256 price as "Price Prediction"
executing EAS.attest (0x663930fEBAD365ABC3E6388C6063829cCB1abedA)
attest params:
request (tuple): [object Object]
executing EAS.attest (tx: 0x46d6be189f26ca393c2a965350cbb58379114923e24fde4b643a8dd51d306107) ...: performed with 247499 gas
Named schema string assetName,string assetTicker,uint64 timestamp,uint256 price as "Price Feed"
executing EAS.attest (0x663930fEBAD365ABC3E6388C6063829cCB1abedA)
attest params:
request (tuple): [object Object]
executing EAS.attest (tx: 0xec614ed091f0b97ff29cfb90a2fafd3f5c10d436a5b627e22fc1d41e0436ccb4) ...: performed with 247547 gas
Named schema bytes32 documentHash,bytes32 notaryCertificate,uint64 notarizationTime as "Digital Notary"
executing EAS.attest (0x663930fEBAD365ABC3E6388C6063829cCB1abedA)
attest params:
request (tuple): [object Object]
executing EAS.attest (tx: 0x64ba53784955b05947b2a43ed93c374e8df2923e4e1d9585705f33bfbd20e4af) ...: performed with 247475 gas
Named schema bytes32 passportHash,uint64 expirationDate as "Passport"
executing EAS.attest (0x663930fEBAD365ABC3E6388C6063829cCB1abedA)
attest params:
request (tuple): [object Object]
executing EAS.attest (tx: 0x668b6398bfb0943ff433ad0202c7c74c7f584392f628a976c6ca7c48a993bfd3) ...: performed with 247643 gas
Named schema string projectName,string description,address beneficiary,uint256 amountRequested,uint64 submittedTime,bytes32 proposalHash as "Grant Proposal Request"
executing EAS.attest (0x663930fEBAD365ABC3E6388C6063829cCB1abedA)
attest params:
request (tuple): [object Object]
executing EAS.attest (tx: 0x1982712d1492d8995556c94764ba3cc3aecc61fdbcdf7b50f4e7a3cd56c1674e) ...: performed with 247559 gas
Named schema bytes32 projectId,bytes32 milestoneId,uint256 amount,bool isCompleted as "Grant Milestone"
executing EAS.attest (0x663930fEBAD365ABC3E6388C6063829cCB1abedA)
attest params:
request (tuple): [object Object]
executing EAS.attest (tx: 0xbac5c50ac99ba9010c9045fb2a5ebfedf062d839f20fa5257b53e30f89938359) ...: performed with 247535 gas
Named schema bytes32 projectId,uint256 amountPaid,string memo as "Grant Payment"
executing EAS.attest (0x663930fEBAD365ABC3E6388C6063829cCB1abedA)
attest params:
request (tuple): [object Object]
executing EAS.attest (tx: 0x0fe3370e160f26a900d0f94d3636da01fe2308f78b67d38e301af4abff29324c) ...: performed with 247619 gas
Named schema string hackathonName,string hackathonId,string projectName,string description,address[] team,uint64 submittedDate as "Hackathon Submission"
executing EAS.attest (0x663930fEBAD365ABC3E6388C6063829cCB1abedA)
attest params:
request (tuple): [object Object]
executing EAS.attest (tx: 0x199cc8205bf295a160445c235fb1831aa293992a402e4ddbaef5715c7306ce38) ...: performed with 247571 gas
Named schema bytes32 projectId,string projectName,address winnerAddress,uint256 prizeAmount,string projectDescription as "Hackathon Winner"
executing EAS.attest (0x663930fEBAD365ABC3E6388C6063829cCB1abedA)
attest params:
request (tuple): [object Object]
executing EAS.attest (tx: 0xb9d46fcca0287a501be852d6e88fdc2ea23bffd99c7b5499e56364b6be3d13ba) ...: performed with 247547 gas
Named schema bytes32 productName,string review,uint8 rating as "Product Review"
executing EAS.attest (0x663930fEBAD365ABC3E6388C6063829cCB1abedA)
attest params:
request (tuple): [object Object]
executing EAS.attest (tx: 0x09aa3036b1ac38a469ee1b2181dbc7a62b8dfed6980e30b100b0728234241287) ...: performed with 247547 gas
Named schema uint64 dateOfProof,uint256 amount,bool hasFunds,bytes32 evidenceHash as "Proof of Funds"
executing EAS.attest (0x663930fEBAD365ABC3E6388C6063829cCB1abedA)
attest params:
request (tuple): [object Object]
executing EAS.attest (tx: 0xac37875dca8b15c6b00f13536e89cf61e2054314a5f861664d7d1da06fe3c6db) ...: performed with 247571 gas
Named schema string assetName,bool activeHolding,string note as "Asset Disclosure"
executing EAS.attest (0x663930fEBAD365ABC3E6388C6063829cCB1abedA)
attest params:
request (tuple): [object Object]
executing EAS.attest (tx: 0x4409f298269f99ed25ab7e2a2933f5801b520e60e13270578907e7c43d500c73) ...: performed with 247511 gas
Named schema string websiteUrl as "Website URL"
executing EAS.attest (0x663930fEBAD365ABC3E6388C6063829cCB1abedA)
attest params:
request (tuple): [object Object]
executing EAS.attest (tx: 0xf6e72abca0344b76962e4e9ff68f85cee2d72a4753cebc728154081807c5eb31) ...: performed with 247547 gas
Named schema string twitterHandle as "Twitter Handle"
executing EAS.attest (0x663930fEBAD365ABC3E6388C6063829cCB1abedA)
attest params:
request (tuple): [object Object]
executing EAS.attest (tx: 0xfcfa96c721095077d73c1471bbec555b84dbbd9ef7d0aaa263234fd7c6ad735f) ...: performed with 247559 gas
Named schema string youtubeChannel as "YouTube Channel"
executing EAS.attest (0x663930fEBAD365ABC3E6388C6063829cCB1abedA)
attest params:
request (tuple): [object Object]
executing EAS.attest (tx: 0xbe2002469fbb218b4aece66832315d068615ec10213ff740c0e4e5b02fbe3622) ...: performed with 247559 gas
Named schema string githubUrl as "GitHub Username"
executing EAS.attest (0x663930fEBAD365ABC3E6388C6063829cCB1abedA)
attest params:
request (tuple): [object Object]
executing EAS.attest (tx: 0x090d9e8ad450b3732fb76c11573bf235f9597e966bdcd2bb58036b1db2601027) ...: performed with 247571 gas
Named schema string telegramUsername as "Telegram Username"
executing EAS.attest (0x663930fEBAD365ABC3E6388C6063829cCB1abedA)
attest params:
request (tuple): [object Object]
executing EAS.attest (tx: 0x1fc0f7a431fc3ffe747587b780d327badd4294b7bd8cb74c35ccb222a9f730a0) ...: performed with 247571 gas
Named schema string eventName,string eventLocation,bytes32 eventID,uint64 checkInTime,bytes32 ticketID as "Event Attendance"
executing EAS.attest (0x663930fEBAD365ABC3E6388C6063829cCB1abedA)
attest params:
request (tuple): [object Object]
executing EAS.attest (tx: 0xa8e5927b2f11fb4b58fcc0f642e01ca5f05534994f158464198e664d8a1373e6) ...: performed with 247619 gas
Named schema string institutionName,string degreeName,uint64 graduationDate,bytes32 transcriptHash,address issuerAddress as "Academic Credentials"
executing EAS.attest (0x663930fEBAD365ABC3E6388C6063829cCB1abedA)
attest params:
request (tuple): [object Object]
executing EAS.attest (tx: 0xad6fef09cdfbbcca70f776d5fcde8807960abc351965d9c1654b2379bd88f495) ...: performed with 247655 gas
Named schema string companyName,string role,uint64 startDate,uint64 endDate as "Employment Verification"
executing EAS.attest (0x663930fEBAD365ABC3E6388C6063829cCB1abedA)
attest params:
request (tuple): [object Object]
executing EAS.attest (tx: 0x80d20b089f96632af4d6275615d625e7a4f37b2ac315ab3e5c59fc505ac408fa) ...: performed with 247643 gas
Named schema bytes32 roleId,string role,bytes32[] authorizations as "Community Authorization"
executing EAS.attest (0x663930fEBAD365ABC3E6388C6063829cCB1abedA)
attest params:
request (tuple): [object Object]
executing EAS.attest (tx: 0xa430a231c9710a2e80fd60ac5ded0d5812113ad8827a4b0543634a0b4d04c6d9) ...: performed with 247547 gas
Named schema bool passedAudit as "Contract Audit"
executing EAS.attest (0x663930fEBAD365ABC3E6388C6063829cCB1abedA)
attest params:
request (tuple): [object Object]
executing EAS.attest (tx: 0x22d3bff8c653078f1b66543fb56a5c47854cbd2491061de993e0df6ed56f477d) ...: performed with 247571 gas
Named schema bool metIRL as "Met in Real Life"
executing EAS.attest (0x663930fEBAD365ABC3E6388C6063829cCB1abedA)
attest params:
request (tuple): [object Object]
executing EAS.attest (tx: 0xd4ce237b9d7e52916cc96dd916a96699009274d09494d15ec855e64ca80ab550) ...: performed with 247523 gas
Named schema bytes32 privateData as "Private Data"
executing EAS.attest (0x663930fEBAD365ABC3E6388C6063829cCB1abedA)
attest params:
request (tuple): [object Object]
executing EAS.attest (tx: 0x1d2972b74c6f37026824e33140bdf5bd202cef6b8856557da6f19d34d1149d0f) ...: performed with 247427 gas
Named schema bool isTrue as "True"
executing EAS.attest (0x663930fEBAD365ABC3E6388C6063829cCB1abedA)
attest params:
request (tuple): [object Object]
executing EAS.attest (tx: 0x80b7479cd8d49b3abe97b6d828476f4f0ae09b7c88aeb6e07f7a15dca3dbf31e) ...: performed with 247427 gas
Named schema string post as "Post"
executing EAS.attest (0x663930fEBAD365ABC3E6388C6063829cCB1abedA)
attest params:
request (tuple): [object Object]
executing EAS.attest (tx: 0x83b3ff6ea8a5d4e1081dfb1fb90a399aae8f4d982af05e477f90c7c3136a179e) ...: performed with 247403 gas
Named schema bool gm as "GM"
deploying EIP712Proxy
constructor params:
eas (address): 0x663930fEBAD365ABC3E6388C6063829cCB1abedA
name (string): EIP712Proxy
deploying "EIP712Proxy" (tx: 0x2e89e909f92a21ffa0aa7bdb7168ad5f5bd124bf35f9a29be3dd50f191cfa202)...: deployed at 0x4d8569b7c99646D399C5F4a1977D21BFEb52c16D with 2310047 gas
deploying Indexer
constructor params:
eas (address): 0x663930fEBAD365ABC3E6388C6063829cCB1abedA
deploying "Indexer" (tx: 0xef874af74aece94d4080f519669e530fb6e028d5369c09b89ac0f5cfeecc6b92)...: deployed at 0xcf771671471384b713a02F7917F55e3A122462DA with 981051 gas
```
