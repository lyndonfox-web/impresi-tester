import Impresi from "impresi";
let isCreateByConfig = true;

  createByConfig();


function createByConfig() {
  // let config = {
  //   resources: [
  //     {
  //       id: "b1",
  //       type: "background",
  //       options: {
  //         backgroundColor: "#333"
  //       }
  //     },
  //     {
  //       id: "b1h1",
  //       type: "heading",
  //       text: "Heading 1",
  //       options: {
  //         fontSize: 3,
  //         x: 10,
  //         y: 15
  //       }
  //     },
  //     {
  //       id: "b1b1",
  //       type: "blurb",
  //       text: "Blurb",
  //       options: {
  //         width: 100,
  //         x: 10,
  //         y: 30
  //       }
  //     },
  //     {
  //       id: "b1i1",
  //       type: "image",
  //       src:
  //         "https://uploads.codesandbox.io/uploads/user/fb7343ed-58b4-4220-b73d-9c46dd5128c4/u4Qp-Christchurch_Art_Gallery.jpg",
  //       options: {
  //         x: 40,
  //         y: 10
  //       }
  //     },
  //     {
  //       id: "b2",
  //       type: "background",
  //       options: {
  //         imageUrl:
  //           "https://uploads.codesandbox.io/uploads/user/fb7343ed-58b4-4220-b73d-9c46dd5128c4/RlKT-docs.jpg"
  //       }
  //     },
  //     {
  //       id: "b2h1",
  //       type: "heading",
  //       text: "Heading 2"
  //     },
  //     {
  //       id: "b2b1",
  //       type: "blurb",
  //       text: "Blurb",
  //       options: {
  //         x: 50,
  //         y: 10
  //       }
  //     },
  //     {
  //       id: "b2b2",
  //       type: "blurb",
  //       text: "Blurb",
  //       options: {
  //         x: 50,
  //         y: 28
  //       }
  //     },
  //     {
  //       id: "b2b3",
  //       type: "blurb",
  //       text: "Blurb",
  //       options: {
  //         x: 50,
  //         y: 46
  //       }
  //     },
  //     {
  //       id: "b3",
  //       type: "background",
  //       options: {
  //         imageUrl:
  //           "https://uploads.codesandbox.io/uploads/user/fb7343ed-58b4-4220-b73d-9c46dd5128c4/nocD-Image%20from%20iOS.jpg"
  //       }
  //     },
  //     {
  //       id: "b3h1",
  //       type: "heading",
  //       text: "Heading 3"
  //     },
  //     {
  //       id: "b3b1",
  //       type: "blurb",
  //       text: "Blurb",
  //       options: {
  //         x: 50,
  //         y: 10
  //       }
  //     },
  //     {
  //       id: "b4",
  //       type: "background",
  //       options: {
  //         imageUrl:
  //           "https://uploads.codesandbox.io/uploads/user/fb7343ed-58b4-4220-b73d-9c46dd5128c4/dFOr-51947642_1046963988839118_7189620218069516288_n.jpg"
  //       }
  //     },
  //     {
  //       id: "b4b1",
  //       type: "blurb",
  //       text: "Blurb",
  //       options: {
  //         x: 50,
  //         y: 28
  //       }
  //     },
  //     {
  //       id: "b5",
  //       type: "background",
  //       options: {
  //         imageUrl:
  //           "https://uploads.codesandbox.io/uploads/user/fb7343ed-58b4-4220-b73d-9c46dd5128c4/1jfM-nzma.jpg"
  //       }
  //     },
  //     {
  //       id: "b5b1",
  //       type: "blurb",
  //       text: "Blurb",
  //       options: {
  //         x: 50,
  //         y: 46
  //       }
  //     },
  //     {
  //       id: "b6",
  //       type: "background",
  //       options: {
  //         backgroundColor: "#d4e3fc"
  //       }
  //     },

  //     {
  //       id: "b6h1",
  //       type: "heading",
  //       text: "Thank You :)",
  //       options: {
  //         x: 44,
  //         y: 20
  //       }
  //     }
  //   ],
  //   actions: [
  //     { in: ["b1", "b1h1", "b1b1", "b1i1"] },
  //     {
  //       out: ["b1", "b1h1", "b1b1", "b1i1"],
  //       in: ["b2", "b2h1", "b2b1", "b2b2", "b2b3"]
  //     },
  //     {
  //       out: ["b2", "b2h1", "b2b1", "b2b2", "b2b3"],
  //       in: ["b3", "b3h1", "b3b1"]
  //     },
  //     {
  //       out: ["b3"],
  //       in: ["b4", "b4b1"]
  //     },
  //     {
  //       out: ["b4"],
  //       in: ["b5", "b5b1"]
  //     },
  //     {
  //       out: ["b5", "b3h1", "b3b1", "b4b1", "b5b1"],
  //       in: ["b6", "b6h1"]
  //     }
  //   ]
  // };

  // impresi = new Impresi("board", config);


  let fbData = {
    screens: {
      s1: {
        in: {
          b1: {
            type: "background",
            options: { backgroundColor: "#d4e3fc" }
          },
          b1h1: {
            type: "heading",
            text: "Heading 1",
            options: { fontSize: 3, x: 10, y: 15 }
          },
          b1b1: {
            type: "blurb",
            text: "Blurb",
            options: { width: 100, fontSize: 30, x: 30, y: 15 }
          }
        }
      }
    }
  };

  let data = {
    screens: [
      { id: "s1",
        in: [
          {
            id: "b1",
            type: "background",
            options: { backgroundColor: "#d4e3fc" }
          },
          { id: "b1h1",
            type: "heading",
            text: "Heading 1",
            options: { fontSize: 3, x: 10, y: 15 }
          },
          {
            id: "b1b1",
            type: "blurb",
            text: "Blurb",
            options: { width: 100, fontSize: 30, x: 30, y: 15 }
          }
        ]
      },
      { id: "s2",
        in: [
          {
            id: "b2",
            type: "background",
            options: { backgroundColor: "#d4e3fc" }
          },
          { id: "b2h1",
            type: "heading",
            text: "Heading 2",
            options: { fontSize: 3, x: 10, y: 15 }
          },
          {
            id: "b2b1",
            type: "blurb",
            text: "Blurb",
            options: { width: 100, fontSize: 30, x: 30, y: 15 }
          }
        ]
      }
    ]
  };


  let config = {};
  config.data = data;
//config.firebaseConfig = fbData;

var fbConfig = {
  apiKey: "AIzaSyCCBjfvjBGp8Yd09lv1GEI46S2FjnfXuso",
  authDomain: "impresi-93d55.firebaseapp.com",
  databaseURL: "https://impresi-93d55.firebaseio.com",
  projectId: "impresi-93d55",
  storageBucket: "impresi-93d55.appspot.com",
  messagingSenderId: "83130091195"
};
config.fbConfig = fbConfig;

let impresi = new Impresi('board', config);
// firebase.initializeApp(fbConfig);
// async function getData() {
//   const snapshot = await firebase.firestore().collection('screens').get();

//   await firebase.firestore().collection("appState").doc("currentScreen")
//     .onSnapshot(function (doc) {
//       console.log("Current data: ", doc.data());
//     });
//   console.log('init fb 2')
//   // await firebase.firestore().collection('appState').doc("currentScreen").add({screen: '1'});
//   console.log('init fb 3')
//   firebase.firestore().collection("appState").doc("currentScreen").set({
//     index: 0
//   })
//     .then(function () {
//       console.log("Document successfully written!");
//     })
//     .catch(function (error) {
//       console.error("Error writing document: ", error);
//     });


//   return snapshot.docs.map(doc => doc.data());
// }
// getData().then(function (data) {
//   console.log(data)
// });
  impresi.start();
}