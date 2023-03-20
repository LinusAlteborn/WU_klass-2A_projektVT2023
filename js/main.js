/*
Hitta ett sätt att göra koden finare. byter man sort-by ska den ladda om thumbnailsen. 
*/
// Data för alla mina spel // WARNING, den är massiv
var games = [
    {
        "name": "8 Ball Pool (Update) New difficulty",
        "created": "2019-12-15T10:02:57.000Z",
        "updated": "2022-08-31T18:24:39.000Z",
        "shared": "2022-08-31T18:24:39.000Z",
        "images": {
            "big": "https://cdn2.scratch.mit.edu/get_image/project/353994505_480x360.png",
            "medium": "https://cdn2.scratch.mit.edu/get_image/project/353994505_282x218.png?v=1661970279",
            "small": "https://cdn2.scratch.mit.edu/get_image/project/353994505_200x200.png?v=1661970279"
        },
        "link": "https://scratch.mit.edu/projects/353994505"
    },
    {
        "name": "Candy Clicker 2",
        "created": "2019-09-27T04:48:15.000Z",
        "updated": "2022-07-26T11:20:09.000Z",
        "shared": "2022-07-21T18:39:14.000Z",
        "images": {
            "big": "https://cdn2.scratch.mit.edu/get_image/project/332026728_480x360.png",
            "medium": "https://cdn2.scratch.mit.edu/get_image/project/332026728_282x218.png?v=1658834409",
            "small": "https://cdn2.scratch.mit.edu/get_image/project/332026728_200x200.png?v=1658834409"
        },
        "link": "https://scratch.mit.edu/projects/332026728"
    },
    {
        "name": "Flying Gorilla 3D",
        "created": "2022-03-18T08:28:09.000Z",
        "updated": "2022-04-06T18:05:03.000Z",
        "shared": "2022-04-01T19:49:57.000Z",
        "images": {
            "big": "https://cdn2.scratch.mit.edu/get_image/project/661914879_480x360.png",
            "medium": "https://cdn2.scratch.mit.edu/get_image/project/661914879_282x218.png?v=1649268303",
            "small": "https://cdn2.scratch.mit.edu/get_image/project/661914879_200x200.png?v=1649268303"
        },
        "link": "https://scratch.mit.edu/projects/661914879"
    },
    {
        "name": "\u2601 Super Auto Scratch v0.22 !Warning! scuffed",
        "created": "2022-03-21T09:38:22.000Z",
        "updated": "2022-03-31T15:05:36.000Z",
        "shared": "2022-03-21T20:47:54.000Z",
        "images": {
            "big": "https://cdn2.scratch.mit.edu/get_image/project/663115790_480x360.png",
            "medium": "https://cdn2.scratch.mit.edu/get_image/project/663115790_282x218.png?v=1648739136",
            "small": "https://cdn2.scratch.mit.edu/get_image/project/663115790_200x200.png?v=1648739136"
        },
        "link": "https://scratch.mit.edu/projects/663115790"
    },
    {
        "name": "Miner Cat 4 (Scratch version)",
        "created": "2021-02-13T11:05:17.000Z",
        "updated": "2022-07-17T20:40:27.000Z",
        "shared": "2022-01-25T17:50:22.000Z",
        "images": {
            "big": "https://cdn2.scratch.mit.edu/get_image/project/487580583_480x360.png",
            "medium": "https://cdn2.scratch.mit.edu/get_image/project/487580583_282x218.png?v=1658090427",
            "small": "https://cdn2.scratch.mit.edu/get_image/project/487580583_200x200.png?v=1658090427"
        },
        "link": "https://scratch.mit.edu/projects/487580583"
    },
    {
        "name": "\u2601 Brawl.io v0.26",
        "created": "2021-07-28T12:00:30.000Z",
        "updated": "2022-03-23T11:44:40.000Z",
        "shared": "2021-08-03T21:11:29.000Z",
        "images": {
            "big": "https://cdn2.scratch.mit.edu/get_image/project/556451127_480x360.png",
            "medium": "https://cdn2.scratch.mit.edu/get_image/project/556451127_282x218.png?v=1648035880",
            "small": "https://cdn2.scratch.mit.edu/get_image/project/556451127_200x200.png?v=1648035880"
        },
        "link": "https://scratch.mit.edu/projects/556451127"
    },
    {
        "name": "Tunnel Runner 3D",
        "created": "2021-07-16T19:50:47.000Z",
        "updated": "2021-07-22T20:44:35.000Z",
        "shared": "2021-07-20T16:26:55.000Z",
        "images": {
            "big": "https://cdn2.scratch.mit.edu/get_image/project/553825577_480x360.png",
            "medium": "https://cdn2.scratch.mit.edu/get_image/project/553825577_282x218.png?v=1626986675",
            "small": "https://cdn2.scratch.mit.edu/get_image/project/553825577_200x200.png?v=1626986675"
        },
        "link": "https://scratch.mit.edu/projects/553825577"
    },
    {
        "name": "8 Ball Pool",
        "created": "2020-02-27T15:43:35.000Z",
        "updated": "2022-07-17T20:33:30.000Z",
        "shared": "2021-07-14T12:55:11.000Z",
        "images": {
            "big": "https://cdn2.scratch.mit.edu/get_image/project/371668558_480x360.png",
            "medium": "https://cdn2.scratch.mit.edu/get_image/project/371668558_282x218.png?v=1658090010",
            "small": "https://cdn2.scratch.mit.edu/get_image/project/371668558_200x200.png?v=1658090010"
        },
        "link": "https://scratch.mit.edu/projects/371668558"
    },
    {
        "name": "Would You Rather?",
        "created": "2020-04-03T09:49:45.000Z",
        "updated": "2020-04-09T17:09:55.000Z",
        "shared": "2020-04-03T20:30:56.000Z",
        "images": {
            "big": "https://cdn2.scratch.mit.edu/get_image/project/382349361_480x360.png",
            "medium": "https://cdn2.scratch.mit.edu/get_image/project/382349361_282x218.png?v=1586452195",
            "small": "https://cdn2.scratch.mit.edu/get_image/project/382349361_200x200.png?v=1586452195"
        },
        "link": "https://scratch.mit.edu/projects/382349361"
    },
    {
        "name": "Planet Clicker",
        "created": "2020-03-19T19:36:04.000Z",
        "updated": "2021-01-12T12:37:40.000Z",
        "shared": "2020-03-28T17:01:18.000Z",
        "images": {
            "big": "https://cdn2.scratch.mit.edu/get_image/project/377874630_480x360.png",
            "medium": "https://cdn2.scratch.mit.edu/get_image/project/377874630_282x218.png?v=1610455060",
            "small": "https://cdn2.scratch.mit.edu/get_image/project/377874630_200x200.png?v=1610455060"
        },
        "link": "https://scratch.mit.edu/projects/377874630"
    },
    {
        "name": "Tap-tap Shots",
        "created": "2020-03-05T18:09:12.000Z",
        "updated": "2020-03-29T12:16:25.000Z",
        "shared": "2020-03-09T08:28:30.000Z",
        "images": {
            "big": "https://cdn2.scratch.mit.edu/get_image/project/373884927_480x360.png",
            "medium": "https://cdn2.scratch.mit.edu/get_image/project/373884927_282x218.png?v=1585484185",
            "small": "https://cdn2.scratch.mit.edu/get_image/project/373884927_200x200.png?v=1585484185"
        },
        "link": "https://scratch.mit.edu/projects/373884927"
    },
    {
        "name": "5000! Followers",
        "created": "2020-02-02T14:30:25.000Z",
        "updated": "2020-04-05T09:26:07.000Z",
        "shared": "2020-03-05T17:58:17.000Z",
        "images": {
            "big": "https://cdn2.scratch.mit.edu/get_image/project/364504142_480x360.png",
            "medium": "https://cdn2.scratch.mit.edu/get_image/project/364504142_282x218.png?v=1586078767",
            "small": "https://cdn2.scratch.mit.edu/get_image/project/364504142_200x200.png?v=1586078767"
        },
        "link": "https://scratch.mit.edu/projects/364504142"
    },
    {
        "name": "CUBETALE - scrolling platformer",
        "created": "2020-02-10T09:38:09.000Z",
        "updated": "2020-02-24T14:44:10.000Z",
        "shared": "2020-02-23T17:41:20.000Z",
        "images": {
            "big": "https://cdn2.scratch.mit.edu/get_image/project/366671186_480x360.png",
            "medium": "https://cdn2.scratch.mit.edu/get_image/project/366671186_282x218.png?v=1582555450",
            "small": "https://cdn2.scratch.mit.edu/get_image/project/366671186_200x200.png?v=1582555450"
        },
        "link": "https://scratch.mit.edu/projects/366671186"
    },
    {
        "name": "Miner Cat 3 - the return of the cat",
        "created": "2020-01-18T21:19:04.000Z",
        "updated": "2021-03-29T20:49:33.000Z",
        "shared": "2020-02-01T09:00:47.000Z",
        "images": {
            "big": "https://cdn2.scratch.mit.edu/get_image/project/360719210_480x360.png",
            "medium": "https://cdn2.scratch.mit.edu/get_image/project/360719210_282x218.png?v=1617050973",
            "small": "https://cdn2.scratch.mit.edu/get_image/project/360719210_200x200.png?v=1617050973"
        },
        "link": "https://scratch.mit.edu/projects/360719210"
    },
    {
        "name": "Candy Clicker",
        "created": "2020-01-07T15:46:36.000Z",
        "updated": "2022-01-25T12:02:10.000Z",
        "shared": "2020-01-12T21:06:44.000Z",
        "images": {
            "big": "https://cdn2.scratch.mit.edu/get_image/project/357587400_480x360.png",
            "medium": "https://cdn2.scratch.mit.edu/get_image/project/357587400_282x218.png?v=1643112130",
            "small": "https://cdn2.scratch.mit.edu/get_image/project/357587400_200x200.png?v=1643112130"
        },
        "link": "https://scratch.mit.edu/projects/357587400"
    },
    {
        "name": "GOLF BATTLE",
        "created": "2019-12-18T08:34:16.000Z",
        "updated": "2020-01-13T07:01:46.000Z",
        "shared": "2020-01-01T02:02:59.000Z",
        "images": {
            "big": "https://cdn2.scratch.mit.edu/get_image/project/354826256_480x360.png",
            "medium": "https://cdn2.scratch.mit.edu/get_image/project/354826256_282x218.png?v=1578898906",
            "small": "https://cdn2.scratch.mit.edu/get_image/project/354826256_200x200.png?v=1578898906"
        },
        "link": "https://scratch.mit.edu/projects/354826256"
    },
    {
        "name": "Miner Cat 2",
        "created": "2019-12-08T09:12:17.000Z",
        "updated": "2022-01-25T10:52:19.000Z",
        "shared": "2019-12-14T16:16:13.000Z",
        "images": {
            "big": "https://cdn2.scratch.mit.edu/get_image/project/351793769_480x360.png",
            "medium": "https://cdn2.scratch.mit.edu/get_image/project/351793769_282x218.png?v=1643107939",
            "small": "https://cdn2.scratch.mit.edu/get_image/project/351793769_200x200.png?v=1643107939"
        },
        "link": "https://scratch.mit.edu/projects/351793769"
    },
    {
        "name": "Cubes Adventures -  Game",
        "created": "2019-12-01T09:59:14.000Z",
        "updated": "2019-12-14T16:27:05.000Z",
        "shared": "2019-12-06T18:39:08.000Z",
        "images": {
            "big": "https://cdn2.scratch.mit.edu/get_image/project/349679464_480x360.png",
            "medium": "https://cdn2.scratch.mit.edu/get_image/project/349679464_282x218.png?v=1576340825",
            "small": "https://cdn2.scratch.mit.edu/get_image/project/349679464_200x200.png?v=1576340825"
        },
        "link": "https://scratch.mit.edu/projects/349679464"
    },
    {
        "name": "ORE Tycoon",
        "created": "2019-11-24T18:32:26.000Z",
        "updated": "2019-12-08T20:22:41.000Z",
        "shared": "2019-11-27T19:59:12.000Z",
        "images": {
            "big": "https://cdn2.scratch.mit.edu/get_image/project/348002364_480x360.png",
            "medium": "https://cdn2.scratch.mit.edu/get_image/project/348002364_282x218.png?v=1575836561",
            "small": "https://cdn2.scratch.mit.edu/get_image/project/348002364_200x200.png?v=1575836561"
        },
        "link": "https://scratch.mit.edu/projects/348002364"
    },
    {
        "name": "PixelOS v1.0",
        "created": "2019-11-18T07:14:51.000Z",
        "updated": "2019-11-28T13:23:41.000Z",
        "shared": "2019-11-23T23:14:48.000Z",
        "images": {
            "big": "https://cdn2.scratch.mit.edu/get_image/project/345884499_480x360.png",
            "medium": "https://cdn2.scratch.mit.edu/get_image/project/345884499_282x218.png?v=1574947421",
            "small": "https://cdn2.scratch.mit.edu/get_image/project/345884499_200x200.png?v=1574947421"
        },
        "link": "https://scratch.mit.edu/projects/345884499"
    },
    {
        "name": "Agar.io Online second server",
        "created": "2019-11-19T16:38:53.000Z",
        "updated": "2019-11-19T16:43:01.000Z",
        "shared": "2019-11-19T16:43:01.000Z",
        "images": {
            "big": "https://cdn2.scratch.mit.edu/get_image/project/346432020_480x360.png",
            "medium": "https://cdn2.scratch.mit.edu/get_image/project/346432020_282x218.png?v=1574181781",
            "small": "https://cdn2.scratch.mit.edu/get_image/project/346432020_200x200.png?v=1574181781"
        },
        "link": "https://scratch.mit.edu/projects/346432020"
    },
    {
        "name": "Agar.io Online v0.3",
        "created": "2019-11-13T12:56:24.000Z",
        "updated": "2019-11-27T19:59:55.000Z",
        "shared": "2019-11-15T14:14:51.000Z",
        "images": {
            "big": "https://cdn2.scratch.mit.edu/get_image/project/344536121_480x360.png",
            "medium": "https://cdn2.scratch.mit.edu/get_image/project/344536121_282x218.png?v=1574884795",
            "small": "https://cdn2.scratch.mit.edu/get_image/project/344536121_200x200.png?v=1574884795"
        },
        "link": "https://scratch.mit.edu/projects/344536121"
    },
    {
        "name": "1000 followers!",
        "created": "2019-11-12T15:57:40.000Z",
        "updated": "2019-11-16T16:08:11.000Z",
        "shared": "2019-11-12T17:47:45.000Z",
        "images": {
            "big": "https://cdn2.scratch.mit.edu/get_image/project/344215544_480x360.png",
            "medium": "https://cdn2.scratch.mit.edu/get_image/project/344215544_282x218.png?v=1573920491",
            "small": "https://cdn2.scratch.mit.edu/get_image/project/344215544_200x200.png?v=1573920491"
        },
        "link": "https://scratch.mit.edu/projects/344215544"
    },
    {
        "name": "Mario Cube - Scrolling Platformer",
        "created": "2019-11-02T21:26:33.000Z",
        "updated": "2019-11-15T14:46:17.000Z",
        "shared": "2019-11-07T21:19:00.000Z",
        "images": {
            "big": "https://cdn2.scratch.mit.edu/get_image/project/341445230_480x360.png",
            "medium": "https://cdn2.scratch.mit.edu/get_image/project/341445230_282x218.png?v=1573829177",
            "small": "https://cdn2.scratch.mit.edu/get_image/project/341445230_200x200.png?v=1573829177"
        },
        "link": "https://scratch.mit.edu/projects/341445230"
    },
    {
        "name": "HALLOWEEN RUN - Game",
        "created": "2019-10-25T14:47:07.000Z",
        "updated": "2019-11-07T21:19:18.000Z",
        "shared": "2019-10-27T10:57:04.000Z",
        "images": {
            "big": "https://cdn2.scratch.mit.edu/get_image/project/339374129_480x360.png",
            "medium": "https://cdn2.scratch.mit.edu/get_image/project/339374129_282x218.png?v=1573161558",
            "small": "https://cdn2.scratch.mit.edu/get_image/project/339374129_200x200.png?v=1573161558"
        },
        "link": "https://scratch.mit.edu/projects/339374129"
    },
    {
        "name": "Miner cat - Game",
        "created": "2019-10-15T05:51:17.000Z",
        "updated": "2020-01-29T06:22:25.000Z",
        "shared": "2019-10-18T18:10:56.000Z",
        "images": {
            "big": "https://cdn2.scratch.mit.edu/get_image/project/336338957_480x360.png",
            "medium": "https://cdn2.scratch.mit.edu/get_image/project/336338957_282x218.png?v=1580278945",
            "small": "https://cdn2.scratch.mit.edu/get_image/project/336338957_200x200.png?v=1580278945"
        },
        "link": "https://scratch.mit.edu/projects/336338957"
    },
    {
        "name": "Scratch cat's adventure",
        "created": "2019-10-02T15:43:31.000Z",
        "updated": "2019-10-18T18:11:51.000Z",
        "shared": "2019-10-08T19:35:05.000Z",
        "images": {
            "big": "https://cdn2.scratch.mit.edu/get_image/project/333315197_480x360.png",
            "medium": "https://cdn2.scratch.mit.edu/get_image/project/333315197_282x218.png?v=1571422311",
            "small": "https://cdn2.scratch.mit.edu/get_image/project/333315197_200x200.png?v=1571422311"
        },
        "link": "https://scratch.mit.edu/projects/333315197"
    },
    {
        "name": "Boat Dash",
        "created": "2019-09-29T07:16:57.000Z",
        "updated": "2019-11-24T18:35:26.000Z",
        "shared": "2019-09-30T15:54:59.000Z",
        "images": {
            "big": "https://cdn2.scratch.mit.edu/get_image/project/332428837_480x360.png",
            "medium": "https://cdn2.scratch.mit.edu/get_image/project/332428837_282x218.png?v=1574620526",
            "small": "https://cdn2.scratch.mit.edu/get_image/project/332428837_200x200.png?v=1574620526"
        },
        "link": "https://scratch.mit.edu/projects/332428837"
    },
    {
        "name": "Breakfast - Platformer",
        "created": "2019-09-28T10:10:25.000Z",
        "updated": "2019-09-28T14:53:27.000Z",
        "shared": "2019-09-28T14:50:38.000Z",
        "images": {
            "big": "https://cdn2.scratch.mit.edu/get_image/project/332330724_480x360.png",
            "medium": "https://cdn2.scratch.mit.edu/get_image/project/332330724_282x218.png?v=1569682407",
            "small": "https://cdn2.scratch.mit.edu/get_image/project/332330724_200x200.png?v=1569682407"
        },
        "link": "https://scratch.mit.edu/projects/332330724"
    },
    {
        "name": "Theme Park Tycoon V1.6",
        "created": "2019-09-23T19:11:48.000Z",
        "updated": "2019-10-19T10:15:43.000Z",
        "shared": "2019-09-26T19:48:21.000Z",
        "images": {
            "big": "https://cdn2.scratch.mit.edu/get_image/project/330964314_480x360.png",
            "medium": "https://cdn2.scratch.mit.edu/get_image/project/330964314_282x218.png?v=1571480143",
            "small": "https://cdn2.scratch.mit.edu/get_image/project/330964314_200x200.png?v=1571480143"
        },
        "link": "https://scratch.mit.edu/projects/330964314"
    },
    {
        "name": "Runner man - platformer",
        "created": "2019-09-21T07:50:33.000Z",
        "updated": "2020-01-29T06:00:17.000Z",
        "shared": "2019-09-22T18:07:58.000Z",
        "images": {
            "big": "https://cdn2.scratch.mit.edu/get_image/project/330541646_480x360.png",
            "medium": "https://cdn2.scratch.mit.edu/get_image/project/330541646_282x218.png?v=1580277617",
            "small": "https://cdn2.scratch.mit.edu/get_image/project/330541646_200x200.png?v=1580277617"
        },
        "link": "https://scratch.mit.edu/projects/330541646"
    },
    {
        "name": "AFRAID - Platformer",
        "created": "2019-09-20T18:25:51.000Z",
        "updated": "2019-09-20T18:34:29.000Z",
        "shared": "2019-09-20T18:34:29.000Z",
        "images": {
            "big": "https://cdn2.scratch.mit.edu/get_image/project/330452556_480x360.png",
            "medium": "https://cdn2.scratch.mit.edu/get_image/project/330452556_282x218.png?v=1569004469",
            "small": "https://cdn2.scratch.mit.edu/get_image/project/330452556_200x200.png?v=1569004469"
        },
        "link": "https://scratch.mit.edu/projects/330452556"
    },
    {
        "name": "NEON Chaos",
        "created": "2019-09-14T17:18:03.000Z",
        "updated": "2019-09-18T05:18:17.000Z",
        "shared": "2019-09-15T19:56:24.000Z",
        "images": {
            "big": "https://cdn2.scratch.mit.edu/get_image/project/328964366_480x360.png",
            "medium": "https://cdn2.scratch.mit.edu/get_image/project/328964366_282x218.png?v=1568783897",
            "small": "https://cdn2.scratch.mit.edu/get_image/project/328964366_200x200.png?v=1568783897"
        },
        "link": "https://scratch.mit.edu/projects/328964366"
    },
    {
        "name": "Jumper Cat - Infinite jumper",
        "created": "2019-09-08T13:58:10.000Z",
        "updated": "2019-09-14T10:18:39.000Z",
        "shared": "2019-09-14T10:18:39.000Z",
        "images": {
            "big": "https://cdn2.scratch.mit.edu/get_image/project/327611695_480x360.png",
            "medium": "https://cdn2.scratch.mit.edu/get_image/project/327611695_282x218.png?v=1568456319",
            "small": "https://cdn2.scratch.mit.edu/get_image/project/327611695_200x200.png?v=1568456319"
        },
        "link": "https://scratch.mit.edu/projects/327611695"
    },
    {
        "name": "NEON Pong",
        "created": "2019-09-10T15:45:51.000Z",
        "updated": "2019-09-12T05:04:27.000Z",
        "shared": "2019-09-11T20:12:21.000Z",
        "images": {
            "big": "https://cdn2.scratch.mit.edu/get_image/project/328033215_480x360.png",
            "medium": "https://cdn2.scratch.mit.edu/get_image/project/328033215_282x218.png?v=1568264667",
            "small": "https://cdn2.scratch.mit.edu/get_image/project/328033215_200x200.png?v=1568264667"
        },
        "link": "https://scratch.mit.edu/projects/328033215"
    },
    {
        "name": "NEON - Platformer",
        "created": "2019-09-07T09:47:50.000Z",
        "updated": "2019-09-28T06:15:53.000Z",
        "shared": "2019-09-07T15:53:03.000Z",
        "images": {
            "big": "https://cdn2.scratch.mit.edu/get_image/project/327503586_480x360.png",
            "medium": "https://cdn2.scratch.mit.edu/get_image/project/327503586_282x218.png?v=1569651353",
            "small": "https://cdn2.scratch.mit.edu/get_image/project/327503586_200x200.png?v=1569651353"
        },
        "link": "https://scratch.mit.edu/projects/327503586"
    }
]

function time_since(date) {
    const seconds = Math.floor((new Date() - new Date(date)) / 1000);
    const intervals = [
        { label: 'year',   seconds: 31536000 },
        { label: 'month',  seconds: 2592000 },
        { label: 'week',   seconds: 604800 },
        { label: 'day',    seconds: 86400 },
        { label: 'hour',   seconds: 3600 },
        { label: 'minute', seconds: 60 },
        { label: 'second', seconds: 1 }
    ];
    
    for (let i = 0; i < intervals.length; i++) {
        const interval = intervals[i];
        const count = Math.floor(seconds / interval.seconds);
        if (count >= 1) {
            return count + ' ' + interval.label + (count > 1 ? 's' : '') + ' ago';
        }
    }
    
    return 'just now';
}  

function sort(by){
    if (by == "oldest"){
        games.sort(function(a, b) { return a.date - b.date; });
    }
    if (by == "latest"){
        games.sort(function(a, b) { return b.date - a.date; });
    }
}

// Mina html templates som jag placerar i html sidor (jag använder semikolon för att kunna gömma dem templates jag inte använder)
var templates ={
    "header":(
    '<nav id="nav-links">' +
    '   <h2><a href="about.html">About</a></h2>' +
    '   <h2><a href="#">Contact</a></h2>' +
    '   <h2><a href="#">Forum</a></h2>' +
    '</nav>' +
    '<div id="burger">' +
    '   <div></div>' +
    '   <div></div>' +
    '   <div></div>' +
    '</div>' +
    '<h1><a href="index.html"><img src="img/icons/logo.png" alt="Binus Spelus"></a></h1>' +
    '<a href="login.html" id="nav-links-login"><img src="img/icons/account.svg" alt="login"></a>'
    ),

    "footer":(
    '<hr>' +
    '<p>Binus© 2023</p>'
    )
}

// Funktioner som jag kommer använda senare
function load_header_and_footer(){
    document.getElementsByTagName("header")[0].innerHTML = templates.header;
    document.getElementsByTagName("footer")[0].innerHTML = templates.footer;
    document.getElementById('burger').addEventListener('click', burger_menu);
}

// Här är alla funktioner som ändrar sidan när den startar (ändrar spel texter, ändrar användarnamns texter osv)
function load_site(name){
    if (name === "index"){
        load_more_games(4);
        sort("latest"); // sorterar nyast spelen först. Vet inte hur den fungerar... men den fungerar perfekt!
        document.getElementById("sort-by").addEventListener("change", sort_by);
    }
    if (name === "game"){
        document.getElementById("game").src = "games/" + game_id + "/index.html";
        document.getElementById("game_info_name").innerHTML = games[game_id].name;
        document.getElementById("game_info_engine").innerHTML = "Made in " + games[game_id].engine;
    }
    if (name === "login" || name === "register"){
        form.addEventListener('submit', handleForm);
        eye.addEventListener('click', showPassword);
    }
    if (name === "account"){
        document.getElementById("account-name").innerHTML = sessionStorage.getItem('username');
    }
    // visar din profil bild och byter länk till account sidan om du är inloggad
    if (sessionStorage.getItem('loggedin') == "true"){
        document.getElementById("nav-links-login").children[0].src = "img/profile/pfp.avif";
        document.getElementById("nav-links-login").href = "account.html";
        document.getElementById("nav-links-login").id = "bruh";
    }
}

function burger_menu(){
    document.getElementById('burger').classList.toggle('burger-toggle');
    document.getElementById('nav-links').classList.toggle('nav-active');
}

function sort_by(event){
    const currentValue = event.target.value;
    if (currentValue == ""){
        
    }
}

function add_game(game_id){
    const game = games[game_id]
    var elapsed = time_since(game.shared);
    var new_game = Object.assign(document.createElement('a'), {href:`game.html?${game_id}`, classList:"game"});
    new_game.appendChild(Object.assign(document.createElement('img'), {src:game.images.big, alt:game.name}));
    new_game.appendChild(Object.assign(document.createElement('h2'), {innerHTML:game.name}));
    new_game.appendChild(Object.assign(document.createElement('p'), {innerHTML:elapsed}));

    document.getElementById("binder").appendChild(new_game);
    sort("latest");
}

function load_more_games(amount){
    var start = document.getElementById("binder").childElementCount - 1;
    for(var i = start; i < start + amount; i++){
        add_game(i);
        if (i >= games.length - 1){
            document.getElementById("load-more").remove();
            return
        }
    }
    document.getElementById("binder").appendChild(document.getElementById("load-more"));
}

function handleForm(event) {
    event.preventDefault();
    submitter = event.submitter.value;
    if (submitter === "login"){ login(); }
    if (submitter === "register"){ register(); }
}

function login() {
    if (usernameField.value == sessionStorage.getItem('username') && passwordField.value == sessionStorage.getItem('password')){
        sessionStorage.setItem('loggedin', true);
        window.location.assign('account.html');
        return
    }
    logout();
}
function logout(){
    sessionStorage.setItem('loggedin', false);
    window.location.assign('login.html');
}
function register(){
    sessionStorage.setItem('username', usernameField.value);
    sessionStorage.setItem('password', passwordField.value);
    window.location.assign('login.html');
}
function showPassword() {
    if (passwordField.type == "password") {
        passwordField.type = "text";
        eye.src = "img/icons/hide.svg";
    } else {
        passwordField.type = "password";
        eye.src = "img/icons/view.svg";
    }
}


const usernameField = document.getElementById("username-field")
const passwordField = document.getElementById("password-field")
const eye = document.getElementsByClassName("eye")[0]
const form = document.getElementsByTagName("form")[0]
const site_name = window.location.pathname.split("/").pop().split(".")[0]
const game_id = location.search.substring(1)
load_header_and_footer()
load_site(site_name)