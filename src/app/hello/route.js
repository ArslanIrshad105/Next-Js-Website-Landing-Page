import { NextResponse } from "next/server";

export async function GET(req, res) {
  return NextResponse.json(
    {
      SERVICES: [
        {
          title: "AI/ML/CV/ChatGPT",
          serviceIcon:
            "./assets/artifical_intelligence_90f20b3a10_067474d59a.png",
          Description:
            "Automate business operations with our tailor-made AI/ML/ChatGPT solutions to save time, reduce errors and improve efficiency — freeing up your resources to focus on profit-making decisions while enjoying increased accuracy & productivity.",
          languagesIcon: [
            {
              icon: "./assets/servicesIcons/AIMLCVChatGPT/Python_fa5a8c0173.svg",
              altText: "Python",
            },
            {
              icon: "./assets/servicesIcons/AIMLCVChatGPT/tensorflow_20cb2dcc68.svg",
              altText: "Tensorflow",
            },
            {
              icon: "./assets/servicesIcons/AIMLCVChatGPT/numpy_c461beada5.svg",
              altText: "Numpy",
            },
            {
              icon: "./assets/servicesIcons/AIMLCVChatGPT/pytorch_98f10a7132.svg",
              altText: "Pytorch",
            },
            {
              icon: "./assets/servicesIcons/AIMLCVChatGPT/chatgpt_0a6ff0d0bc.svg",
              altText: "ChatGPT",
            },
            {
              icon: "./assets/servicesIcons/AIMLCVChatGPT/keras_b298a3d4fb.svg",
              altText: "Keras",
            },
            {
              icon: "./assets/servicesIcons/AIMLCVChatGPT/opencv_4e1882e118.svg",
              altText: "OpenCV",
            },
            {
              icon: "./assets/servicesIcons/AIMLCVChatGPT/scikit_learn_2098e14006_a0e091c669.png",
              altText: "Scikit Learn",
            },
            {
              icon: "./assets/servicesIcons/AIMLCVChatGPT/pandas_810c9f6830.svg",
              altText: "Pandas",
            },
            {
              icon: "./assets/servicesIcons/AIMLCVChatGPT/scripy_8951adbac3.jpg",
              altText: "Scripy",
            },
          ],
          link: "#",
        },
        {
          title: "Web Application Development",
          serviceIcon: "./assets/website_13f3a50b68.svg",
          Description:
            "Scalable web product development at any stage and ongoing support after launch.",
          languagesIcon: [
            {
              icon: "./assets/servicesIcons/WebApp/nodejs_f1ad2a2c65.svg",
              altText: "Node JS",
            },
            {
              icon: "./assets/servicesIcons/WebApp/Laravel_beeb3d1325.svg",
              altText: "Laravel",
            },
            {
              icon: "./assets/servicesIcons/WebApp/Python_fa5a8c0173.svg",
              altText: "Python",
            },
            {
              icon: "./assets/servicesIcons/WebApp/react_js_58286b2d76.svg",
              altText: "React JS",
            },
            {
              icon: "./assets/servicesIcons/WebApp/angular_85636a7085.svg",
              altText: "Angular",
            },
            {
              icon: "./assets/servicesIcons/WebApp/Ruby_0f6804a8f2_02850a2352.png",
              altText: "Ruby",
            },
            {
              icon: "./assets/servicesIcons/WebApp/Elixir_c097615cfc_ab119165c5.png",
              altText: "Elixir",
            },
            {
              icon: "./assets/servicesIcons/WebApp/microsoft_net_543a4a8355_47ea8d7cbb.png",
              altText: "Microsoft Net",
            },
            {
              icon: "./assets/servicesIcons/WebApp/gatsby_405ad4bb09.svg",
              altText: "Gatsby",
            },
            {
              icon: "./assets/servicesIcons/WebApp/golang_4653fe95d3.svg",
              altText: "GOlang",
            },
            {
              icon: "./assets/servicesIcons/WebApp/html5_bf38e2c0fb.svg",
              altText: "HTML5",
            },
            {
              icon: "./assets/servicesIcons/WebApp/java_54f81a1404.svg",
              altText: "Java",
            },
            {
              icon: "./assets/servicesIcons/WebApp/javascript_6815655da5.svg",
              altText: "Javascript",
            },
            {
              icon: "./assets/servicesIcons/WebApp/rust_f907e0df85_d92536094d.png",
              altText: "Rust",
            },
            {
              icon: "./assets/servicesIcons/WebApp/vue_js_15825e0ee8.svg",
              altText: "Vue JS",
            },
            {
              icon: "./assets/servicesIcons/WebApp/firebase_db5cedd361.svg",
              altText: "Firebase",
            },
            {
              icon: "./assets/servicesIcons/WebApp/postgres_b9aaa14d73_7e3cac3991.png",
              altText: "PostgresSQL",
            },
            {
              icon: "./assets/servicesIcons/WebApp/bubble_io_323be9c22b.svg",
              altText: "Bubble.io",
            },
            {
              icon: "./assets/servicesIcons/WebApp/zoho_f2206d8116.svg",
              altText: "Zoho",
            },
            {
              icon: "./assets/servicesIcons/WebApp/shopify_2634b929db.svg",
              altText: "Shopify",
            },
          ],
          link: "#",
        },
        {
          title: "Mobile App Development",
          serviceIcon: "./assets/mobile_9ed69a3cce.svg",
          Description:
            "Consultation on updating existing mobile applications and development of apps that look and perform great on both iOS and Android.",
          languagesIcon: [
            {
              icon: "./assets/servicesIcons/MobileApp/Swift_b7f99a9faa.svg",
              altText: "Swift",
            },
            {
              icon: "./assets/servicesIcons/MobileApp/Kotlin_3cc0c4fdc5.svg",
              altText: "Kotlin",
            },
            {
              icon: "./assets/servicesIcons/MobileApp/Objective_C_e3281638b1.svg",
              altText: "Objective C",
            },
            {
              icon: "./assets/servicesIcons/MobileApp/react_native_dd0e31fd65.svg",
              altText: "React Native",
            },
            {
              icon: "./assets/servicesIcons/MobileApp/flutter_logo_1_e332f5bea4.svg",
              altText: "Flutter",
            },
            {
              icon: "./assets/servicesIcons/MobileApp/ionic_8a4a0f560f.svg",
              altText: "Ionic",
            },
            {
              icon: "./assets/servicesIcons/MobileApp/Android_Studioa_cd0e18e11c_a3c7b4ce5a.png",
              altText: "Android Studio",
            },
            {
              icon: "./assets/servicesIcons/MobileApp/vscodea_28a0d43a77.svg",
              altText: "Visual Studio",
            },
            {
              icon: "./assets/servicesIcons/MobileApp/xcode_d913881b42_f136112764.png",
              altText: "XCode",
            },
          ],
          link: "#",
        },
        {
          title: "Cloud Services",
          Description:
            "Open your digital path using the best DevOps services like Azure, AWS, Kubernetes, Google Cloud, and much more. Taking advantage of our expertise on developing creative cloud solutions, InvoZone provides personalized assistance you need to design a reliable technical infrastructure for your projects.",
          serviceIcon: "./assets/CloudServices_a7e2d7c04e_50e526b04c.png",
          languagesIcon: [
            {
              icon: "./assets/servicesIcons/cloudServices/aws_0f1334e2da.svg",
              altText: "AWS",
            },
            {
              icon: "./assets/servicesIcons/cloudServices/azure_26c403c42c.svg",
              altText: "Azure",
            },
            {
              icon: "./assets/servicesIcons/cloudServices/digital_ocean_b77e2516f1.svg",
              altText: "Digital Ocean",
            },
            {
              icon: "./assets/servicesIcons/cloudServices/google_cloud_211d606a19.svg",
              altText: "Google Cloud",
            },
            {
              icon: "./assets/servicesIcons/cloudServices/jenkins_2ab3319064_3098679743.png",
              altText: "Jenkins",
            },
            {
              icon: "./assets/servicesIcons/cloudServices/kubernetes_f01a38c46d_c07d4beab5.png",
              altText: "Kuberbetes",
            },
            {
              icon: "./assets/servicesIcons/cloudServices/terraform_4b79d902e6.svg",
              altText: "Teraform",
            },
          ],
          link: "#",
        },
        {
          title: "Game/Metaverse Development",
          serviceIcon: "./assets/GAME_945a9b6409.svg",
          Description:
            "Developing a conceptual game is a maverick's job, and game developers at InvoZone clearly know the art of creating magical products that match your players’ vision and preferences. Are you ready to launch powerful gameplays?",
          languagesIcon: [
            {
              icon: "./assets/servicesIcons/Game/Unreal_Engine_c852ecdca2.svg",
              altText: "Unreal Engine",
            },
            {
              icon: "./assets/servicesIcons/Game/meta_1_1_414e362315.svg",
              altText: "Meta",
            },
            {
              icon: "./assets/servicesIcons/Game/Unity_26990ed77e.svg",
              altText: "Unity",
            },
            {
              icon: "./assets/servicesIcons/Game/Autodesk_3ds_1e26f15ca0.svg",
              altText: "Autodesk 3ds",
            },
            {
              icon: "./assets/servicesIcons/Game/Maya_ad674fa777.svg",
              altText: "Maya",
            },
            {
              icon: "./assets/servicesIcons/Game/Substance_d52fb098eb.svg",
              altText: "Substance",
            },
            {
              icon: "./assets/servicesIcons/Game/adobe_after_effects_735b7b835b.svg",
              altText: "Adobe After Effects",
            },
            {
              icon: "./assets/servicesIcons/Game/adobe_illustrator_0ea2bd922b.svg",
              altText: "Adobe Illustrator",
            },
            {
              icon: "./assets/servicesIcons/Game/adobe_photoshop_1547fdd1f5.svg",
              altText: "Adobe Photoshop",
            },
            {
              icon: "./assets/servicesIcons/Game/blender_211db2ae89.svg",
              altText: "Blender",
            },
            {
              icon: "./assets/servicesIcons/Game/Roblox_79bed4b3c0_502d56147d.png",
              altText: "Roblox",
            },
            {
              icon: "./assets/servicesIcons/Game/Spine_Pro_035f3a1efa.svg",
              altText: "Spine Pro",
            },
            {
              icon: "./assets/servicesIcons/Game/Vision_Pro_84fb720329_39a2eaadbe.png",
              altText: "Vision Pro",
            },
            {
              icon: "./assets/servicesIcons/Game/Chain_Safe_6f37e4bb45_aadfd4a453.png",
              altText: "Chain Safe",
            },
            {
              icon: "./assets/servicesIcons/Game/metamask_1_befdede448_7dd793627f.png",
              altText: "Metamask",
            },
            {
              icon: "./assets/servicesIcons/Game/Moralis_Logo_1_5b7720c7a0.svg",
              altText: "Moralis",
            },
            {
              icon: "./assets/servicesIcons/Game/Nakama_0158e49515.svg",
              altText: "Nakama",
            },
            {
              icon: "./assets/servicesIcons/Game/substance_painter_2_1_4d21e31b0b.svg",
              altText: "Substance Painter",
            },
            {
              icon: "./assets/servicesIcons/Game/spine_pro_8417d6708d.svg",
              altText: "Spine Pro",
            },
            {
              icon: "./assets/servicesIcons/Game/Meta_Human_389560d5da.svg",
              altText: "MetaHuman",
            },
          ],
          link: "#",
        },
        {
          title: "Blockchain Development",
          serviceIcon: "./assets/Blockchain_92c9b044c4.svg",
          Description:
            "Become a part of a trustless and borderless distributed network with InvoBlox’s real-world blockchain consultancy and development services. ",
          languagesIcon: [
            {
              icon: "./assets/servicesIcons/Blockchain/Ethereum_e911828052.svg",
              altText: "Ethereum",
            },
            {
              icon: "./assets/servicesIcons/Blockchain/polygon_04373a698c_88d38415a1.png",
              altText: "Polygon",
            },
            {
              icon: "./assets/servicesIcons/Blockchain/binance_e8c42f5ff0.svg",
              altText: "Binance",
            },
            {
              icon: "./assets/servicesIcons/Blockchain/Celo_8994929348.svg",
              altText: "Celo",
            },
            {
              icon: "./assets/servicesIcons/Blockchain/Solana_3df015fdb7.svg",
              altText: "Solana",
            },
            {
              icon: "./assets/servicesIcons/Blockchain/Algorand_7fe5868978.svg",
              altText: "Algorand",
            },
            {
              icon: "./assets/servicesIcons/Blockchain/Cardano_5cceb8093c_e4725d28bf.png",
              altText: "Cardano",
            },
            {
              icon: "./assets/servicesIcons/Blockchain/Substrate_94cbc4a482.jpg",
              altText: "Subtrate",
            },
            {
              icon: "./assets/servicesIcons/Blockchain/Polkadot_220cb68a28.svg",
              altText: "Polkadot",
            },
            {
              icon: "./assets/servicesIcons/Blockchain/Cosmos_1b46984110.svg",
              altText: "Cosmos",
            },
            {
              icon: "./assets/servicesIcons/Blockchain/stellar_svgrepo_com_1_d4005c55af.svg",
              altText: "Stellar",
            },
          ],
          link: "#",
        },
      ],
      PORTFOLIO: [
        {
          id: 0,
          image: "./assets/Portfolio/Homepie_47c90a2ecd.png",
          title: "Home Pie",
          descritpion:
            "A free marketplace for homebuyers & sellers. Instantly list your properties, chat with buyers/sellers, close deals, and more.",
          buttonlink: "#",
        },
        {
          id: 1,
          image: "./assets/Portfolio/Anakeed_Mart_2594aedbb.png",
          title: "Anakeed Mart",
          descritpion:
            "An online grocery shopping platform based in Saudi Arabia for providing high-quality, organic products such as fruits and vegetables straight to your doorstep.",
          buttonlink: "#",
        },
        {
          id: 2,
          image: "./assets/Portfolio/Column_c4c1033c7.png",
          title: "Column",
          descritpion:
            "A collaborative public notice platform helping journalists, governments, and legal entities to distribute public interest information.",
          buttonlink: "#",
        },
        {
          id: 3,
          image: "./assets/Portfolio/Tunevu_e92f113f301.png",
          title: "Tunevu",
          descritpion:
            "Tunevu is an online podcasting platform providing an engaging interactive experience.",
          buttonlink: "#",
        },
        {
          id: 4,
          image: "./assets/Portfolio/Stitch_f52ead7eea.png",
          title: "Stitch.Health",
          descritpion:
            "A care coordination platform for healthcare teams. Send messages, share files and stay in sync across multiple devices.",
          buttonlink: "#",
        },
        {
          id: 5,
          image: "./assets/Portfolio/Stakester_060098de90.png",
          title: "Stakester",
          descritpion:
            "Challenge your mates on this online gaming platform and put your talents to the test! Play games like Overwatch, FIFA 20, League of Legends, and Rocket League for serious merch & money.",
          buttonlink: "#",
        },
        {
          id: 6,
          image: "./assets/Portfolio/Shieldrepublic_42888b8bf4.png",
          title: "Shield Republic",
          descritpion:
            "eCommerce platform for an American patriot brand. Find thousands of the most creative and fresh apparel & merchandise items that embody American pride.",
          buttonlink: "#",
        },
        {
          id: 7,
          image: "./assets/Portfolio/Meridio_ffbffbd75a.png",
          title: "Meridio",
          descritpion:
            "A blockchain-based real estate platform that converts individual properties into digital shares, seamlessly connecting diverse investors and asset owners to invest and trade.",
          buttonlink: "#",
        },
        {
          id: 8,
          image: "./assets/Portfolio/Global_Reader_735f3a97f.png",
          title: "Global Reader",
          descritpion:
            "A comprehensive production data exchange software solution that gives you real-time information on your production capacity.",
          buttonlink: "#",
        },
        {
          id: 9,
          image: "./assets/Portfolio/Curriki_66e0324a0.png",
          title: "Curriki",
          descritpion:
            "Online educational content creation platform for individuals and organizations.",
          buttonlink: "#",
        },
      ],
      GALLERY01: [
        {
          image: "assets/media/gallery-01/spring.jpg",
          altText: "Spring",
        },
        {
          image: "assets/media/gallery-01/summer.jpg",
          altText: "Summer",
        },
        {
          image: "assets/media/gallery-01/autumn.jpg",
          altText: "Autumn",
        },
        {
          image: "assets/media/gallery-01/winter.jpg",
          altText: "Winter",
        },
      ],
      GALLERY02: [
        {
          image: "assets/media/gallery-02/forest.jpg",
          altText: "Forest",
        },
        {
          image: "assets/media/gallery-02/forest-mountain.jpg",
          altText: "Forest mountain",
        },
        {
          image: "assets/media/gallery-02/lavender-field.jpg",
          altText: "Lavender Field",
        },
        {
          image: "assets/media/gallery-02/wooden-bridge.jpg",
          altText: "Wooden Bridge",
        },
      ],
      GALLERY03: [
        {
          frontImage: "assets/media/gallery-03/image-01.jpg",
          altTextFrontImage: "Universe 01",
          backImage: "assets/media/gallery-03/image-02.jpg",
          altTextBackImage: "Universe 02",
        },
        {
          frontImage: "assets/media/gallery-03/image-03.jpg",
          altTextFrontImage: "Universe 03",
          backImage: "assets/media/gallery-03/image-04.jpg",
          altTextBackImage: "Universe 04",
        },
        {
          frontImage: "assets/media/gallery-03/image-05.jpg",
          altTextFrontImage: "Universe 05",
          backImage: "assets/media/gallery-03/image-06.jpg",
          altTextBackImage: "Universe 06",
        },
      ],
      GALLERY04: [
        {
          image: "assets/media/gallery-02/forest.jpg",
          text: "Forest",
        },
        {
          image: "assets/media/gallery-02/lavender-field.jpg",
          text: "Lavender Field",
        },
        {
          image: "assets/media/gallery-02/wooden-bridge.jpg",
          text: "Wooden Bridge",
        },
        {
          image: "assets/media/gallery-02/forest-mountain.jpg",
          text: "Forest Mountain",
        },
      ],
      GALLERY05: [
        {
          image: "assets/media/gallery-02/forest.jpg",
          altText: "Forest",
        },
        {
          image: "assets/media/gallery-02/lavender-field.jpg",
          altText: "Lavender Field",
        },
        {
          image: "assets/media/gallery-02/wooden-bridge.jpg",
          altText: "Wooden Bridge",
        },
        {
          image: "assets/media/gallery-02/forest-mountain.jpg",
          altText: "Forest Mountain",
        },
        {
          image: "assets/media/gallery-02/snow-scenery.jpg",
          altText: "Snow Scenery",
        },
      ],
      GALLERY06: [
        {
          image: "assets/media/gallery-06/lakeview-elegance.png",
          altText: "Lakeview Elegance",
        },
        {
          image: "assets/media/gallery-06/skyline-oasis.png",
          altText: "Skyline Oasis ",
        },
        {
          image: "assets/media/gallery-06/vista-paradiso.png",
          altText: "Vista Paradiso",
        },
        {
          image: "assets/media/gallery-06/villa-verde.png",
          altText: "Villa Verde",
        },
      ],
    },
    { status: 200 }
  );
}
