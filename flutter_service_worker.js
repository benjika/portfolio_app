'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

<<<<<<< HEAD
const RESOURCES = {".git/COMMIT_EDITMSG": "6a90f4195d60e8d294ee92166c9272c4",
".git/config": "44c1d40d68abd8edbcea6b166f95d017",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "7fa8b5e677014adce4734b673779c2fb",
=======
const RESOURCES = {".git/AUTO_MERGE": "bc7da6ff3bc31bdef66424f31c8a87dc",
".git/COMMIT_EDITMSG": "bd7cb9cc6484046c9e71a81522a3ab91",
".git/config": "b90493b254ed89cbb65741cb3ab4721d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "8c91e0df495b8a646cb3bbdf3ae6e0c4",
>>>>>>> 1759a3f499da98d43c6de0b61219900abc00b464
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
<<<<<<< HEAD
".git/index": "c610b704e93e5f7f7b5fc8da5e6da116",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9dab3c5d5f96c69e5a1b93c1f07f6c39",
".git/logs/refs/heads/main": "7affa64c8c6a5ea3a2c28e0c83af7de6",
".git/logs/refs/remotes/origin/main": "0b2e5ab25faa6c5b85ac27f8eebc8b0e",
".git/logs/refs/remotes/origin/master": "d825ddb9af7ab7e4dd0ff35e194c02ca",
".git/objects/02/be9cf8f86f1ea9a257cc5b91a0386d6b3674a6": "4c009cd0706785cb8221bc107ca89292",
".git/objects/02/f3de5dbfc558f8404b8b4ed664472acc993ca3": "7e435aa77e40cddab19ec10fc883246e",
".git/objects/03/9d34c09fe522c84d363a2d313b3c7582be2e9f": "66acc55b596d1919d90b28806f0794db",
".git/objects/05/ed1de89f0978139f421dc154b0e5d8bae55aeb": "0d4cad72fe8519c76cef4d983ee03c5b",
".git/objects/06/9338bbdaabf0b9fc23d9146e4040254df53391": "f6fd8290a4232e76fa3ecdd8b2e53771",
".git/objects/07/14681d63275f74424d380f673514d186d1905e": "f401d336c5e58e31bed616d33fc9765e",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/17/59a3f499da98d43c6de0b61219900abc00b464": "67470572496ee0ccde134d6e1c8ce86b",
=======
".git/index": "db33eb30b1ee8db59a11c816322b8e14",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3020cc10fa0c0e123e9c24337bbdd714",
".git/logs/refs/heads/main": "cbb5c8e73b59e5e4b36d3f1cd4ac859c",
".git/logs/refs/remotes/origin/main": "8bc01b5016084d46fd46621de2eecefb",
".git/objects/03/9d34c09fe522c84d363a2d313b3c7582be2e9f": "66acc55b596d1919d90b28806f0794db",
".git/objects/05/ed1de89f0978139f421dc154b0e5d8bae55aeb": "0d4cad72fe8519c76cef4d983ee03c5b",
".git/objects/06/9338bbdaabf0b9fc23d9146e4040254df53391": "f6fd8290a4232e76fa3ecdd8b2e53771",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
>>>>>>> 1759a3f499da98d43c6de0b61219900abc00b464
".git/objects/17/8a4753a99a56c682fd380966e68a43e34a64df": "e02bf60dfeaa1e5537577f748e020bda",
".git/objects/1a/d5b6692a370499b4163773e7279a3f60532868": "96a9434610a3bb80aafbbbad050a5d20",
".git/objects/1c/8d32253d134939f21c3e2eea1b7296457e0937": "6e1e3ccce0bdfe32f84d33eb53f1bff4",
".git/objects/1d/d3818e561e4328bc0c90ce89c8edd12a338461": "370ff53660b57caae040b909c99d2740",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/21/4974a7af0c96e1be0b04e5ca76c5b6908e5e9e": "4b4f1ff4d4139e3c5a2ca8a1827ed58e",
".git/objects/21/6717d4773f177a2d2742e0c3ae2de783c9e2b2": "e970e6e3181d5f657d916395ac25b1ca",
<<<<<<< HEAD
".git/objects/23/23f495eb16ca60f10a14c8ed84a98d8ece7f8e": "ce18e9aed6ce7eb62d744bf4d4103147",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/26/36b6caef72a9d4638816e4f879b8d897292b26": "b075e9f5b8aaf44aa5922cb08c67b774",
".git/objects/2a/afe051a14164c533a2d4246404bb2e321fb38a": "fc4d21f3de0a4ec4c2df4397edc8ca0b",
".git/objects/2c/6443d8423be382c8a414dd2f54190089107913": "43199c8a4d790f364f2c53162155b3ac",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/33/ea59f8d7152cbfb51f309196d671a5a9b83282": "35ec36793cebc02048db0ab4151b5f6e",
".git/objects/34/564e669f6cb6ae0190c50e536ecfd0da3c178f": "cf89ec43026e13124a444f90eaec11f4",
".git/objects/35/c663b5d5dfa513b4a2eacd1bbfaccfb99be9ba": "8b56f52be67d8be6496e5f4e6e42a92f",
=======
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/2a/afe051a14164c533a2d4246404bb2e321fb38a": "fc4d21f3de0a4ec4c2df4397edc8ca0b",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/34/564e669f6cb6ae0190c50e536ecfd0da3c178f": "cf89ec43026e13124a444f90eaec11f4",
".git/objects/35/8f345b6c4e362ec2cdb2b91b4750ffcdfae0fd": "7ad3a4a0f8c1af43563ca260f57cc820",
>>>>>>> 1759a3f499da98d43c6de0b61219900abc00b464
".git/objects/3a/50bcf246953eac45889af16d2b3677deda2eba": "8088ab04e577ee09b6b83d07fe7586ee",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3a/adfba161c7b4dcf04b7f366731141eb220b24d": "fb6c06342564ed56f4ce32978f508b35",
".git/objects/3b/4811bc173de6f74c1daf1a58cc4186d82f726a": "f960029afd78b9c46876448eecfa3686",
<<<<<<< HEAD
".git/objects/3d/935d657bb043eeb54a11b5a87389498ba985b5": "97b9536bfc181e556c3b786cb237ca50",
".git/objects/3f/8214c932a5f50abb8046aab63921f1de5627f8": "86f6adb1f3413785e89233a79f9484a9",
=======
>>>>>>> 1759a3f499da98d43c6de0b61219900abc00b464
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/40/a83c891bbe2d7e49b06463599eb21082321853": "c513e955dae8d9a1007f9df470546a6b",
".git/objects/42/60fa2fd8a090e5337c7d3221cbc1beecd78166": "de6a978c1d44716408aa32cb10231f7e",
".git/objects/42/7a3aa78bdcac460f18d356b9a68661c60cd5d9": "68d9ed3bda32bfda62d2c73c03f5702f",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/47/96c6a793ab951356f8a703e1552ae3d26cbb1c": "ac97a692d4d26d0211ed3a6e9ce003c8",
".git/objects/49/6548554e937fb2d95112d2b04791a0aa7d4dfe": "e82b8f83bf9123ce4bcb6cc30ea5c373",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4e/ef6be448c7490e34038e863ad0060812f9124a": "a2366bf9f66102e2fbdd7d191dc60205",
".git/objects/4f/a0258a5d65fca083be0734ce68e84949c58499": "cf1ca9b191ba2bac1eb476b8caaf01a2",
".git/objects/50/97bee7a13fe07fd464e7ed4c4e0153ccd27dba": "d9ec16b567535c562bff0d63abee8c36",
<<<<<<< HEAD
".git/objects/52/24c1e5b5959d31c093ce7757884efb6a3e6084": "32f9534ba5c73de9229b9850a6fda572",
".git/objects/54/41880072d1bf3126e32a6dcd4650651ce40a75": "442b685a1a9b73762f301e19603de5bd",
".git/objects/5a/10f435d5ec4ce4281bb3043578fae867472ea2": "7b388e61b3d7031891a922e0bd06bbab",
".git/objects/5a/755188eaeb786cf0c006f52161c80e927e370f": "3935a164361ef9b8abffaa29c87c3de9",
".git/objects/5e/20852e1a725bd3f46a9ae5efd9a0e7e772d758": "91d245879b8167324e663afc0780f7fe",
".git/objects/5e/fabe7d5be977c591e36d94ce00b040f0190fc5": "1aa6913655111a960f0c85510b144aa4",
".git/objects/63/b22d5849e714530c3d41c0af50756940484630": "c749b948b8fd1642f45c484f898d7d65",
".git/objects/65/b6ed5433a09b4c6b37055358358a46079214b8": "054d4a42b9568208fb7b3695576ae2dc",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/78/784dfcf442678fb957c96df46ede8a20ccedb5": "3a278c07836fc87b87a84ffc143dbf48",
".git/objects/7a/49203ef753b2665b51b6e4c759d20640db032f": "7deb9315d22d6f60de17ba27dbd7c36b",
".git/objects/7a/bed450797b1799155ddbcf607b2e7cfd90f633": "54985fb1d8c5bd1785cbc7e2554f951f",
".git/objects/7f/4903ef28fa5d1ec10e63568713c4282a77a2e3": "785c75ff6e4b9164b4d4e7e1e377d068",
".git/objects/7f/c4bbc5f4b2fbb28b89ca1df8b4951bfcd6189e": "1cabee0765aa555d908720e2eaeb27eb",
".git/objects/80/80712ce255f839b5a8c490d2cfc8a57617fb16": "1f472d783918e4f7c95404aea99914d1",
=======
".git/objects/54/41880072d1bf3126e32a6dcd4650651ce40a75": "442b685a1a9b73762f301e19603de5bd",
".git/objects/5e/20852e1a725bd3f46a9ae5efd9a0e7e772d758": "91d245879b8167324e663afc0780f7fe",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/78/784dfcf442678fb957c96df46ede8a20ccedb5": "3a278c07836fc87b87a84ffc143dbf48",
".git/objects/7a/bed450797b1799155ddbcf607b2e7cfd90f633": "54985fb1d8c5bd1785cbc7e2554f951f",
".git/objects/7d/f5306a60538e91a3d52cb79ed8cf31518af224": "daefe6cfe4a26ce6c48ef0bc56ddf172",
".git/objects/7f/4903ef28fa5d1ec10e63568713c4282a77a2e3": "785c75ff6e4b9164b4d4e7e1e377d068",
".git/objects/7f/c4bbc5f4b2fbb28b89ca1df8b4951bfcd6189e": "1cabee0765aa555d908720e2eaeb27eb",
>>>>>>> 1759a3f499da98d43c6de0b61219900abc00b464
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/84/a9b46237403de60545754b24575b00a891f179": "e18cb33d0e0b198c51447471385c3522",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/398cc455c2e9a626c19cd5590568e1bdf5b083": "11fd86aa7bd8cd5cefc3931558cec552",
<<<<<<< HEAD
".git/objects/86/d5cd6ef597d750db62b1abbaa5a14ad83531a1": "fc8d11fc2c2918161e7ac99beb7c7f5f",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/843295bbba924e029c84ff9afd1ecdc0489043": "2a8620b80e973c150d4a932f26653aee",
".git/objects/8c/45bdd294073ee9d1d652ca99da289123964bc3": "0a4296a72cdcbd049b9ff1d0a21d4ff1",
".git/objects/8c/c348517458135641c17abe903b47be5f6c0162": "23e30c9e733563abd5683ab39de9f6f2",
".git/objects/8f/b34bcc8ae5ceb1d06c0f611b6578ae79fb3a47": "ac2a607d271dacf2460c7bf724bc9d2a",
=======
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/843295bbba924e029c84ff9afd1ecdc0489043": "2a8620b80e973c150d4a932f26653aee",
".git/objects/88/85494909573bc84d0439b0f1ddefbc16795717": "cd48de84d9b2660acc356b30a7c2f2b7",
".git/objects/8c/45bdd294073ee9d1d652ca99da289123964bc3": "0a4296a72cdcbd049b9ff1d0a21d4ff1",
".git/objects/8c/c348517458135641c17abe903b47be5f6c0162": "23e30c9e733563abd5683ab39de9f6f2",
>>>>>>> 1759a3f499da98d43c6de0b61219900abc00b464
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/92/25dd5134542b677d59b16503da0048072b8c42": "0bd87253a4fcbd68ee2f71d649d3d13d",
".git/objects/93/662e9c8fd8621c50bca4d32ddf8d45fa88cee2": "d08a24897c194d739d8b1737ea634d7b",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9a/ba80f7775c93f4e0662311fa4913810889156a": "7f85f35a47e61812265ab1ef79b97172",
".git/objects/9a/c22e653e62f344d8edf2451adfd17b30f71583": "f8ad729387c026d860eb29411a360d36",
<<<<<<< HEAD
".git/objects/9c/5486c6be39c5e5059684541ba25cd3d5de42c5": "3206d60a40258d911be5f069dd8eaee9",
".git/objects/9c/9af8518b3b918c5e1ce017d3356569afe7e7b4": "40f75adef98ab992b891a770de926a53",
".git/objects/9d/8db0005301f0d14660bc48c974e9bc4c4ce3ec": "d5c6560d7e54e690c49387a360a51c09",
".git/objects/9f/36d759f8d07fc8f8e422174a36265c03a8ee2d": "67594a4bd6d809967a67d1a3b9a37d55",
".git/objects/9f/4d65734562dfb59d1b9179dbe5e9a70dae04b4": "addf6ca1a880b930b4c74739f6be9e20",
".git/objects/a1/aeb81c56cfd324962249ee0c179adcbac64665": "53a72625c971634e4c5a2ef703cf4d40",
".git/objects/ab/4b5c8da7d8231309a8333494f30f86ebab22f4": "6ac2f41dc4a2d0d11627ec2181a5aea1",
".git/objects/af/80fcdbd3b447c79378ffaf8cee924317f18c21": "e64d653a2eb4a07b6fef711da64c2c7e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b3/709e8b587e74dd69c441aa7e1f5c010920ed89": "d25a0099ddf0ba40e005b29e40f8690e",
".git/objects/b7/d78d97bd39fc59502a447176cb505f5034c5e8": "fce8012eaa98d98aa9d7e8f052b29b44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bf/bf8e1b38e0fe6439bb9f91426a1db54732cdaf": "f9291daeb58f3d81a3ed594ae2b3a51d",
=======
".git/objects/9c/03a7801c4505f79dfe4bd3a2c3e0fff9ec1a1f": "bed0984f4f17f715b0c0830ba6c2b137",
".git/objects/9c/5486c6be39c5e5059684541ba25cd3d5de42c5": "3206d60a40258d911be5f069dd8eaee9",
".git/objects/9c/9af8518b3b918c5e1ce017d3356569afe7e7b4": "40f75adef98ab992b891a770de926a53",
".git/objects/9f/4d65734562dfb59d1b9179dbe5e9a70dae04b4": "addf6ca1a880b930b4c74739f6be9e20",
".git/objects/a1/aeb81c56cfd324962249ee0c179adcbac64665": "53a72625c971634e4c5a2ef703cf4d40",
".git/objects/af/80fcdbd3b447c79378ffaf8cee924317f18c21": "e64d653a2eb4a07b6fef711da64c2c7e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c4/200eaa96dcbc5496ac671e9cd882b7ceaf1ecd": "d3ff8b9d8dd609705a078e054f7d07f4",
>>>>>>> 1759a3f499da98d43c6de0b61219900abc00b464
".git/objects/c5/402056f9d0d83c5f17fbacfb73eb10be5afd29": "04100bb30bc8ea65abb065a39e6b6376",
".git/objects/c9/bd203ff8ba9a9ca061ce398a1cb2b5fa9fea8c": "df74312041d081f50d57c7ee4e01efde",
".git/objects/cb/c151fb44fafa5fb7d239b29ced158c03597f60": "07fce3c2e3ebb2584a0ffec31f0589f9",
".git/objects/cc/cb9ec448ff8208b74db811de2ec8d27b4031a3": "0b3c565330736bd3caeb933b50f65839",
<<<<<<< HEAD
".git/objects/ce/842ee1d8f7ef0ca8aacdcd70a6d04b13fbcccf": "d396879fc22bcc11a59ea8aa799e7888",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d1/d7d1f83955b49fa166a0e56ede8dcf5bfa5cb8": "8206c3eccfba2431147a9c553287accd",
".git/objects/d3/91ea0cde06b70ac06096794356b6a5e238f18a": "345612a126e6541eef8d672febb85552",
=======
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d1/d7d1f83955b49fa166a0e56ede8dcf5bfa5cb8": "8206c3eccfba2431147a9c553287accd",
>>>>>>> 1759a3f499da98d43c6de0b61219900abc00b464
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d9/5d20739047a0f4a2d9744efd33d74e51cf4bc7": "7d61469f154fe8d4608e7e6fccc1e0fb",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
<<<<<<< HEAD
".git/objects/db/242080fb08aea2fdf03954b0caccfbef1cfe48": "ac758e3c4a6589ce5df851dc1b850235",
=======
>>>>>>> 1759a3f499da98d43c6de0b61219900abc00b464
".git/objects/db/78dca1906714d2e95221ee960735062ef4863c": "3b8c942dbbf6654707bf704fd083d785",
".git/objects/db/e14db69002d66081b7f18750f7367a96f4b637": "cb53e2ef5debf56494a8e908454f7ef7",
".git/objects/dc/739117ed73e665478c04482c56c68f35a9d7f3": "c1e05fb514fe0e663610258239b47381",
".git/objects/dc/a80ca40af1811ca7ae9b12d5d8904a1669ac4e": "ff8037b56414e0728a0788726a513561",
<<<<<<< HEAD
".git/objects/e1/157cc2b89d256abe4417bbe14a8a0811a1ed40": "da6779501897e26fcb2fb68e291a0aa4",
".git/objects/e3/8a08f536c73bdde4b322dc188c9255ce2f5826": "5b15aa5d23ac15d4a50c3429a79816f9",
".git/objects/e3/ebc03aad5aa1a1be9cc70c69482aa0c3746768": "0953f4d9f4207d3db4118069b933d984",
".git/objects/e8/41ae9d8808c4a94d6464887faa538a10d1f370": "e153995aed65d9af1f0533522020ef4b",
".git/objects/e9/ff674fb34ad059dff5f4baadad1a1cfe67bccd": "b9adb7ec8799dd1adeea59a7ec31168b",
".git/objects/ed/063a5c5207caa6d427cc20d0878252303bb84e": "c5c604845bdc630af06d3e9268512c9a",
".git/objects/f1/214280b545806fe4cc8a0f3fcd4275882402fc": "0da928a177fdf3993f2ac98c29817f90",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f7/c8c66e815ac3f8d7d4d9f8834f116a785e43ea": "f51f81f54eb11ad32fdf02e5baa2a219",
".git/objects/fa/f3158535e7b119d1dcb17f426cbcb08488e597": "6b9f38a900c5394fc51d32390586bf15",
".git/objects/fe/eb7593f363b48ff0383864c646b818740e3bd0": "6b2823b70d02ab36736cc3942026e3c9",
".git/refs/heads/main": "a71dc806e18830a7e73f344435a8b2c7",
".git/refs/remotes/origin/main": "a3f81fcc5257392d91039e8f92b0c0fe",
".git/refs/remotes/origin/master": "a71dc806e18830a7e73f344435a8b2c7",
"assets/AssetManifest.bin": "9746de577d9ce58999c896c2f89b8261",
"assets/AssetManifest.bin.json": "ec417345f8dd7d7592568a5b8d70df69",
"assets/AssetManifest.json": "7cd986ff06f4613014208010bec9f05e",
=======
".git/objects/e3/8a08f536c73bdde4b322dc188c9255ce2f5826": "5b15aa5d23ac15d4a50c3429a79816f9",
".git/objects/e8/41ae9d8808c4a94d6464887faa538a10d1f370": "e153995aed65d9af1f0533522020ef4b",
".git/objects/e9/ff674fb34ad059dff5f4baadad1a1cfe67bccd": "b9adb7ec8799dd1adeea59a7ec31168b",
".git/objects/ec/cd7905e68782b1f8054e838fb6280c363d461e": "a91a3f94f5339e053587460eb967a81b",
".git/objects/ed/063a5c5207caa6d427cc20d0878252303bb84e": "c5c604845bdc630af06d3e9268512c9a",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fa/f3158535e7b119d1dcb17f426cbcb08488e597": "6b9f38a900c5394fc51d32390586bf15",
".git/objects/fe/eb7593f363b48ff0383864c646b818740e3bd0": "6b2823b70d02ab36736cc3942026e3c9",
".git/ORIG_HEAD": "b05884d85744c42f525eddad172cba8d",
".git/refs/heads/main": "03d502ef77ff3fb848a8a58876597b61",
".git/refs/remotes/origin/main": "03d502ef77ff3fb848a8a58876597b61",
"assets/AssetManifest.bin": "373234d664ffe656d0fb4039a86ad513",
"assets/AssetManifest.bin.json": "4446c963dde6091a6b6de4cb1ae02947",
"assets/AssetManifest.json": "801125fca546f506babac9af4ec061ba",
>>>>>>> 1759a3f499da98d43c6de0b61219900abc00b464
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "4728f33e61ae7d16518ec96ce9b92b81",
"assets/images/1home.webp": "c2fe73100d38e38b08f2c876998a1940",
"assets/images/2about.webp": "684416a041ee38856d9f8382fa479ac6",
"assets/images/3showcase.webp": "34c77afb930afadb041a91c77110025b",
<<<<<<< HEAD
"assets/images/4art.webp": "1e76291dc0b34e5c0ed8192c86921434",
"assets/images/5litrature.webp": "777a0cc932f3014f4cc3869c05ccc56d",
"assets/images/6contact.webp": "12de702a40022e430bd4debd50b17b5f",
"assets/images/7misc.webp": "a450ad608a256ede72a667691fd28061",
"assets/images/home-bg.webp": "7ab71afc27a1c7afe990e94edc18246e",
"assets/images/man.png": "777a978fc77f5b57c9d0cbd1c2fc7ad9",
=======
"assets/images/6contact.webp": "12de702a40022e430bd4debd50b17b5f",
>>>>>>> 1759a3f499da98d43c6de0b61219900abc00b464
"assets/NOTICES": "c9b0ba717079e3ed15aa5d01dacce913",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "93f0cf11d7f76e4a703108419d444f76",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "3e719c81e434ea8d0bb1fd0e97bfe71f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "4e20632f836550987249a73b1b16feb6",
"flutter.js": "f393d3c16b631f36852323de8e583132",
<<<<<<< HEAD
"flutter_bootstrap.js": "a5845a019db700f930a00bc02ed9417d",
=======
"flutter_bootstrap.js": "101b0d7819234e960617a794afd413b9",
>>>>>>> 1759a3f499da98d43c6de0b61219900abc00b464
"icons/Icon-192.png": "a5384242bd06bc9eee8b1f6b7df19d84",
"icons/Icon-512.png": "6c8b4d75ff312ec751778f8c14092c84",
"icons/Icon-maskable-512.png": "6c8b4d75ff312ec751778f8c14092c84",
"icons/icon_maskable_192.png": "a5384242bd06bc9eee8b1f6b7df19d84",
"index.html": "893a29b10d00bd54ce1e3eb05870107c",
"/": "893a29b10d00bd54ce1e3eb05870107c",
<<<<<<< HEAD
"main.dart.js": "44a15a50efa7837b5f592b5b1eb240c2",
"manifest.json": "9489fd5631ba1e20b033acee24aa6a18",
=======
"main.dart.js": "65f868f6ef07ee4cbf4c9df6d157a82b",
"manifest.json": "9489fd5631ba1e20b033acee24aa6a18",
"README.md": "664bbc354355240b008a9d395772caca",
>>>>>>> 1759a3f499da98d43c6de0b61219900abc00b464
"version.json": "fb8d4678888024cd5f83d8522bb3a722"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
