(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 518:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
;// CONCATENATED MODULE: external "next/router"
var router_namespaceObject = require("next/router");;
;// CONCATENATED MODULE: external "axios"
var external_axios_namespaceObject = require("axios");;
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
;// CONCATENATED MODULE: ./request/request.ts
const imdbData = {
  top250Movies: {
    "title": "Top 250 Movies",
    "url": `https://imdb-api.com/en/API/Top250Movies/${process.env.IMDB_APIKEY}`
  },
  top250TVs: {
    "title": "Top 250 TVs",
    "url": `https://imdb-api.com/en/API/Top250TVs/${process.env.IMDB_APIKEY}`
  },
  mostPopularMovies: {
    "title": "Most Popular Movies",
    "url": `https://imdb-api.com/en/API/MostPopularMovies/${process.env.IMDB_APIKEY}`
  },
  mostPopularTVs: {
    "title": "Most Popular TVs",
    "url": `https://imdb-api.com/en/API/MostPopularTVs/${process.env.IMDB_APIKEY}`
  },
  inTheaters: {
    "title": "In Theaters",
    "url": `https://imdb-api.com/en/API/InTheaters/${process.env.IMDB_APIKEY}`
  },
  comingSoon: {
    "title": "Coming Soon",
    "url": `https://imdb-api.com/en/API/ComingSoon/${process.env.IMDB_APIKEY}`
  },
  boxOffice: {
    "title": "Box Office",
    "url": `https://imdb-api.com/en/API/BoxOffice/${process.env.IMDB_APIKEY}`
  },
  boxOfficeAllTime: {
    "title": "Box Office All Time",
    "url": `https://imdb-api.com/en/API/BoxOfficeAllTime/${process.env.IMDB_APIKEY}`
  }
};
/* harmony default export */ var request = (imdbData);
;// CONCATENATED MODULE: external "next/head"
var head_namespaceObject = require("next/head");;
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
;// CONCATENATED MODULE: ./components/HeaderItem.tsx



const HeaderItem = ({
  name,
  Icon,
  handleURI
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    onClick: handleURI,
    className: "group text-center text-gray-300 hover:text-white cursor-pointer flex items-center justify-center flex-col sm:w-18 md:w-20",
    children: [/*#__PURE__*/jsx_runtime_.jsx(Icon, {
      className: "w-6 h-6 group-hover:animate-bounce"
    }), /*#__PURE__*/jsx_runtime_.jsx("small", {
      className: "opacity-0 text-xs tracking-wide sm:tracking-widest group-hover:opacity-100 duration-150",
      children: name
    })]
  });
};

/* harmony default export */ var components_HeaderItem = (HeaderItem);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/outline/esm/index.js + 230 modules
var esm = __webpack_require__(49);
;// CONCATENATED MODULE: ./components/Header.tsx







const Header = () => {
  const router = (0,router_namespaceObject.useRouter)();

  const handleToHome = name => {
    if (name === 'HOME') return router.replace('/');
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex items-center m-0 w-full flex-col-reverse justify-center sm:justify-between sm:items-center sm:flex-row",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex items-center justify-center",
      children: [/*#__PURE__*/jsx_runtime_.jsx(components_HeaderItem, {
        handleURI: handleToHome,
        name: "HOME",
        Icon: esm/* HomeIcon */.tvw
      }), /*#__PURE__*/jsx_runtime_.jsx(components_HeaderItem, {
        name: "TRENDING",
        Icon: esm/* LightningBoltIcon */.YGl
      }), /*#__PURE__*/jsx_runtime_.jsx(components_HeaderItem, {
        name: "VERIFIED",
        Icon: esm/* BadgeCheckIcon */.js$
      }), /*#__PURE__*/jsx_runtime_.jsx(components_HeaderItem, {
        name: "COLLECTION",
        Icon: esm/* CollectionIcon */.wZP
      }), /*#__PURE__*/jsx_runtime_.jsx(components_HeaderItem, {
        name: "SEARCH",
        Icon: esm/* SearchIcon */.W1M
      }), /*#__PURE__*/jsx_runtime_.jsx(components_HeaderItem, {
        name: "ACCOUNT",
        Icon: esm/* UserCircleIcon */.lMe
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      onClick: () => handleToHome('HOME'),
      className: "cursor-pointer",
      children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        src: "https://drive.google.com/uc?export=view&id=1H9r6XSLc6P7jEOFjfJnUcEnVe7o1W3aK",
        width: 170,
        height: 90
      })
    })]
  });
};

/* harmony default export */ var components_Header = (Header);
;// CONCATENATED MODULE: ./components/HeaderTitle.tsx





const HeaderTitle = () => {
  const router = (0,router_namespaceObject.useRouter)();

  const handleToType = type => {
    return router.push(`/?type=${type}`);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex items-center",
    children: [/*#__PURE__*/jsx_runtime_.jsx("ul", {
      className: "list-none p-0 m-0 scrollbar-hide space-x-5 flex items-center overflow-y-hidden overflow-x-auto xs:px-2 text-white last:pr-5 whitespace-nowrap",
      children: Object.entries(request).map(([type, {
        title
      }], key) => /*#__PURE__*/jsx_runtime_.jsx("li", {
        onClick: () => handleToType(type),
        className: "cursor-pointer transform text-gray-300 hover:text-white hover:scale-105 transition duration-100 font-thin hover:font-bold",
        children: title
      }, key))
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "block bg-gradient-to-l from-black to-transparent xs:w-20 lg:hidden"
    })]
  });
};

/* harmony default export */ var components_HeaderTitle = (HeaderTitle);
;// CONCATENATED MODULE: ./components/Card.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const Card = ({
  movie
}) => {
  const {
    0: movieDetail,
    1: setMovieDetail
  } = (0,external_react_.useState)({
    id: '',
    fullTitle: '',
    image: 'https://image.freepik.com/free-photo/vintage-wallpaper-background_53876-25244.jpg',
    imDbRating: '',
    imDbRatingVotes: '',
    awards: ''
  });
  (0,external_react_.useEffect)(() => {
    const fetchDetailMovie = async () => {
      const {
        data
      } = await external_axios_default().get(`https://imdb-api.com/en/API/Title/k_pem2x658/${movie.id}`);
      return data;
    };

    fetchDetailMovie().then(res => setMovieDetail(_objectSpread(_objectSpread({}, movieDetail), {}, {
      id: res.id,
      fullTitle: res.fullTitle,
      image: res.image,
      imDbRating: res.imDbRating,
      imDbRatingVotes: res.imDbRatingVotes,
      awards: res.awards
    }))).catch(err => console.log(err));
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "group cursor-pointer sm:hover:scale-105 duration-150 transform hover:z-50",
    children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
      src: movieDetail === null || movieDetail === void 0 ? void 0 : movieDetail.image,
      width: 1920,
      height: 1080,
      layout: "responsive",
      className: "object-cover"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "text-gray-300 group-hover:text-white group-hover:font-semibold",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
        className: "font-bold",
        children: movieDetail === null || movieDetail === void 0 ? void 0 : movieDetail.fullTitle
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        className: "text-sm flex items-center",
        children: ["Rating: ", movieDetail === null || movieDetail === void 0 ? void 0 : movieDetail.imDbRating, /*#__PURE__*/jsx_runtime_.jsx(esm/* StarIcon */.r7p, {
          className: "w-3 h-3 ml-1 mr-2"
        }), " from ", movieDetail === null || movieDetail === void 0 ? void 0 : movieDetail.imDbRatingVotes.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'), " users"]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h5", {
        className: "text-xs opacity-0 group-hover:opacity-100 transition-all duration-100",
        children: ["Crew: ", movieDetail === null || movieDetail === void 0 ? void 0 : movieDetail.awards]
      })]
    })]
  }, movieDetail === null || movieDetail === void 0 ? void 0 : movieDetail.id);
};

/* harmony default export */ var components_Card = (Card);
;// CONCATENATED MODULE: ./components/Cards.tsx



const Cards = ({
  movies
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "sm:grid sm:grid-cols-2 sm:gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4 py-5",
    children: movies ? movies.map((x, key) => /*#__PURE__*/jsx_runtime_.jsx(components_Card, {
      movie: x
    }, key)) : /*#__PURE__*/jsx_runtime_.jsx("h1", {
      className: "text-white font-bold",
      children: "No Movies found!"
    })
  });
};

/* harmony default export */ var components_Cards = (Cards);
;// CONCATENATED MODULE: ./components/Search.tsx




const Search = ({
  handleOnChange,
  value
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex rounded text-gray-500 border border-gray-100 mb-3 p-3 py-2 items-center justify-between w-full group hover:shadow-md",
    children: [/*#__PURE__*/jsx_runtime_.jsx(esm/* SearchIcon */.W1M, {
      className: "w-5 h-5 mr-3"
    }), /*#__PURE__*/jsx_runtime_.jsx("input", {
      style: {
        background: 'none'
      },
      value: value,
      onChange: handleOnChange,
      className: "text-gray-300 flex-grow rounded-lg bg-none bg-opacity-0 outline-none border-none",
      placeholder: "Search anything..."
    })]
  });
};

/* harmony default export */ var components_Search = (Search);
;// CONCATENATED MODULE: ./components/Message.tsx




const Message = ({
  message,
  variant,
  handleClose
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: `absolute flex items-center duration-150 transition-all opacity-0 p-2 ${message ? 'opacity-100' : 'opacity-0'} px-5  ${variant === 'error' ? 'bg-red-600' : 'bg-green-600'} text-white rounded-sm shadow-sm bottom-7 left-8`,
    children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
      className: "text-white text-sm mr-3",
      children: message
    }), /*#__PURE__*/jsx_runtime_.jsx(esm/* XIcon */.b0D, {
      className: "w-4 h-4 text-white cursor-pointer hover:rotate-45 transition-all duration-150",
      onClick: () => handleClose('clear')
    })]
  });
};

/* harmony default export */ var components_Message = (Message);
;// CONCATENATED MODULE: ./pages/index.tsx



function pages_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function pages_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { pages_ownKeys(Object(source), true).forEach(function (key) { pages_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { pages_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function pages_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





 // Components







const Home = ({
  movies,
  message,
  query
}) => {
  const router = (0,router_namespaceObject.useRouter)();
  const {
    0: incomeMessage,
    1: setIncomeMessage
  } = (0,external_react_.useState)(message);
  const {
    0: searchValue,
    1: setSearchValue
  } = (0,external_react_.useState)(query === null || query === void 0 ? void 0 : query.search);

  const handleChangeSearchValue = e => {
    setSearchValue(e.target.value);
    return setTimeout(() => router.push({
      pathname: '/',
      query: {
        search: searchValue
      }
    }), 1500);
  };

  const handleClearMessage = () => {
    return setIncomeMessage(pages_objectSpread(pages_objectSpread({}, incomeMessage), {}, {
      desc: '',
      type: ''
    }));
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "bg-primary min-h-screen w-full py-12 xs:py-8",
    children: [/*#__PURE__*/jsx_runtime_.jsx(components_Message, {
      message: incomeMessage.desc,
      variant: incomeMessage.type,
      handleClose: handleClearMessage
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Hulu Clone"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: "Started project for NextJs, tailwind, and typescript"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        href: "/favicon.ico"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(components_Header, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "header px-10 sm:px-3 md:px-10 xs:px-2 mb-5",
      children: [/*#__PURE__*/jsx_runtime_.jsx(components_Search, {
        handleOnChange: handleChangeSearchValue,
        value: searchValue
      }), /*#__PURE__*/jsx_runtime_.jsx(components_HeaderTitle, {})]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "content w-full px-2 md:px-12",
      children: /*#__PURE__*/jsx_runtime_.jsx(components_Cards, {
        movies: movies
      })
    })]
  });
};

async function getServerSideProps({
  query
}) {
  const type = query === null || query === void 0 ? void 0 : query.type;
  const querySearch = query === null || query === void 0 ? void 0 : query.search;
  let response;
  const fetchURL = Object.entries(request).map(([genre, {
    url
  }]) => genre === type ? url : '').filter(x => x !== '')[0];
  const homeURL = `https://imdb-api.com/en/API/Top250Movies/${process.env.IMDB_APIKEY}`;

  if (!(type || querySearch)) {
    const {
      data
    } = await external_axios_default().get(homeURL);
    response = data;
    if (response.errorMessage) return {
      props: {
        movies: response.items,
        message: {
          desc: response.errorMessage,
          type: 'error'
        },
        query
      }
    };
    return {
      props: {
        movies: response.items,
        error: null,
        query
      }
    };
  }

  if (querySearch) {
    const {
      data
    } = await external_axios_default().get(`https://imdb-api.com/en/API/Search/${process.env.IMDB_APIKEY}/${encodeURI(querySearch)}`);
    response = data;
    if (response.errorMessage) return {
      props: {
        movies: null,
        message: {
          desc: response.errorMessage,
          type: 'error'
        },
        query
      }
    };
    return {
      props: {
        movies: response.results,
        message: {
          desc: response.errorMessage,
          type: 'error'
        },
        query
      }
    };
  }

  const {
    data
  } = await external_axios_default().get(fetchURL);
  response = data;
  if (response.errorMessage) return {
    props: {
      movies: response.items,
      message: {
        desc: response.errorMessage,
        type: 'error'
      },
      query
    }
  };
  return {
    props: {
      movies: response.items,
      message: {
        desc: response.errorMessage,
        type: 'error'
      },
      query
    }
  };
}
/* harmony default export */ var pages = (Home);

/***/ }),

/***/ 273:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ 519:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ 444:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ 297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [821,383], function() { return __webpack_exec__(518); });
module.exports = __webpack_exports__;

})();