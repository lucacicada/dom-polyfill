// used in Attr to signal changes
const CHANGED = Symbol('changed');

// used in Element to setup once classList
const CLASS_LIST = Symbol('classList');

// used in Document to attach once customElements
const CUSTOM_ELEMENTS = Symbol('CustomElements');

// used in HTMLTemplateElement
const CONTENT = Symbol('content');

// used in Element for data attributes
const DATASET = Symbol('dataset');

// used in Document to attach the DocType
const DOCTYPE = Symbol('doctype');

// used in parser and Document to attach once a DOMParser
const DOM_PARSER = Symbol('DOMParser');

// used to reference an end node
const END = Symbol('end');

// used in Document to make the globalThis an event target
const EVENT_TARGET = Symbol('EventTarget');

// used to augment a created document defaultView
const GLOBALS = Symbol('globals');

// used in both Canvas and Document to provide images
const IMAGE = Symbol('image');

// used to define Document mime type
const MIME = Symbol('mime');

// used in Document to attach once MutationObserver
const MUTATION_OBSERVER = Symbol('MutationObserver');

// used to define next node reference
const NEXT = Symbol('next');

// used to define Attr owner elements
const OWNER_ELEMENT = Symbol('ownerElement');

// used to define previous node reference
const PREV = Symbol('prev');

// used to define various "private" properties
const PRIVATE = Symbol('private');

// used to define the CSSStyleSheet.sheet
const SHEET = Symbol('sheet');

// used to define start node reference
const START = Symbol('start');

// used to define special CSS style attribute
const STYLE = Symbol('style');

// used to upgrade Custom Elements
const UPGRADE = Symbol('upgrade');

// used to define generic values
const VALUE = Symbol('value');

// Generated using scripts/write-decode-map.ts
var htmlDecodeTree = new Uint16Array(
// prettier-ignore
"\u1d41<\xd5\u0131\u028a\u049d\u057b\u05d0\u0675\u06de\u07a2\u07d6\u080f\u0a4a\u0a91\u0da1\u0e6d\u0f09\u0f26\u10ca\u1228\u12e1\u1415\u149d\u14c3\u14df\u1525\0\0\0\0\0\0\u156b\u16cd\u198d\u1c12\u1ddd\u1f7e\u2060\u21b0\u228d\u23c0\u23fb\u2442\u2824\u2912\u2d08\u2e48\u2fce\u3016\u32ba\u3639\u37ac\u38fe\u3a28\u3a71\u3ae0\u3b2e\u0800EMabcfglmnoprstu\\bfms\x7f\x84\x8b\x90\x95\x98\xa6\xb3\xb9\xc8\xcflig\u803b\xc6\u40c6P\u803b&\u4026cute\u803b\xc1\u40c1reve;\u4102\u0100iyx}rc\u803b\xc2\u40c2;\u4410r;\uc000\ud835\udd04rave\u803b\xc0\u40c0pha;\u4391acr;\u4100d;\u6a53\u0100gp\x9d\xa1on;\u4104f;\uc000\ud835\udd38plyFunction;\u6061ing\u803b\xc5\u40c5\u0100cs\xbe\xc3r;\uc000\ud835\udc9cign;\u6254ilde\u803b\xc3\u40c3ml\u803b\xc4\u40c4\u0400aceforsu\xe5\xfb\xfe\u0117\u011c\u0122\u0127\u012a\u0100cr\xea\xf2kslash;\u6216\u0176\xf6\xf8;\u6ae7ed;\u6306y;\u4411\u0180crt\u0105\u010b\u0114ause;\u6235noullis;\u612ca;\u4392r;\uc000\ud835\udd05pf;\uc000\ud835\udd39eve;\u42d8c\xf2\u0113mpeq;\u624e\u0700HOacdefhilorsu\u014d\u0151\u0156\u0180\u019e\u01a2\u01b5\u01b7\u01ba\u01dc\u0215\u0273\u0278\u027ecy;\u4427PY\u803b\xa9\u40a9\u0180cpy\u015d\u0162\u017aute;\u4106\u0100;i\u0167\u0168\u62d2talDifferentialD;\u6145leys;\u612d\u0200aeio\u0189\u018e\u0194\u0198ron;\u410cdil\u803b\xc7\u40c7rc;\u4108nint;\u6230ot;\u410a\u0100dn\u01a7\u01adilla;\u40b8terDot;\u40b7\xf2\u017fi;\u43a7rcle\u0200DMPT\u01c7\u01cb\u01d1\u01d6ot;\u6299inus;\u6296lus;\u6295imes;\u6297o\u0100cs\u01e2\u01f8kwiseContourIntegral;\u6232eCurly\u0100DQ\u0203\u020foubleQuote;\u601duote;\u6019\u0200lnpu\u021e\u0228\u0247\u0255on\u0100;e\u0225\u0226\u6237;\u6a74\u0180git\u022f\u0236\u023aruent;\u6261nt;\u622fourIntegral;\u622e\u0100fr\u024c\u024e;\u6102oduct;\u6210nterClockwiseContourIntegral;\u6233oss;\u6a2fcr;\uc000\ud835\udc9ep\u0100;C\u0284\u0285\u62d3ap;\u624d\u0580DJSZacefios\u02a0\u02ac\u02b0\u02b4\u02b8\u02cb\u02d7\u02e1\u02e6\u0333\u048d\u0100;o\u0179\u02a5trahd;\u6911cy;\u4402cy;\u4405cy;\u440f\u0180grs\u02bf\u02c4\u02c7ger;\u6021r;\u61a1hv;\u6ae4\u0100ay\u02d0\u02d5ron;\u410e;\u4414l\u0100;t\u02dd\u02de\u6207a;\u4394r;\uc000\ud835\udd07\u0100af\u02eb\u0327\u0100cm\u02f0\u0322ritical\u0200ADGT\u0300\u0306\u0316\u031ccute;\u40b4o\u0174\u030b\u030d;\u42d9bleAcute;\u42ddrave;\u4060ilde;\u42dcond;\u62c4ferentialD;\u6146\u0470\u033d\0\0\0\u0342\u0354\0\u0405f;\uc000\ud835\udd3b\u0180;DE\u0348\u0349\u034d\u40a8ot;\u60dcqual;\u6250ble\u0300CDLRUV\u0363\u0372\u0382\u03cf\u03e2\u03f8ontourIntegra\xec\u0239o\u0274\u0379\0\0\u037b\xbb\u0349nArrow;\u61d3\u0100eo\u0387\u03a4ft\u0180ART\u0390\u0396\u03a1rrow;\u61d0ightArrow;\u61d4e\xe5\u02cang\u0100LR\u03ab\u03c4eft\u0100AR\u03b3\u03b9rrow;\u67f8ightArrow;\u67faightArrow;\u67f9ight\u0100AT\u03d8\u03derrow;\u61d2ee;\u62a8p\u0241\u03e9\0\0\u03efrrow;\u61d1ownArrow;\u61d5erticalBar;\u6225n\u0300ABLRTa\u0412\u042a\u0430\u045e\u047f\u037crrow\u0180;BU\u041d\u041e\u0422\u6193ar;\u6913pArrow;\u61f5reve;\u4311eft\u02d2\u043a\0\u0446\0\u0450ightVector;\u6950eeVector;\u695eector\u0100;B\u0459\u045a\u61bdar;\u6956ight\u01d4\u0467\0\u0471eeVector;\u695fector\u0100;B\u047a\u047b\u61c1ar;\u6957ee\u0100;A\u0486\u0487\u62a4rrow;\u61a7\u0100ct\u0492\u0497r;\uc000\ud835\udc9frok;\u4110\u0800NTacdfglmopqstux\u04bd\u04c0\u04c4\u04cb\u04de\u04e2\u04e7\u04ee\u04f5\u0521\u052f\u0536\u0552\u055d\u0560\u0565G;\u414aH\u803b\xd0\u40d0cute\u803b\xc9\u40c9\u0180aiy\u04d2\u04d7\u04dcron;\u411arc\u803b\xca\u40ca;\u442dot;\u4116r;\uc000\ud835\udd08rave\u803b\xc8\u40c8ement;\u6208\u0100ap\u04fa\u04fecr;\u4112ty\u0253\u0506\0\0\u0512mallSquare;\u65fberySmallSquare;\u65ab\u0100gp\u0526\u052aon;\u4118f;\uc000\ud835\udd3csilon;\u4395u\u0100ai\u053c\u0549l\u0100;T\u0542\u0543\u6a75ilde;\u6242librium;\u61cc\u0100ci\u0557\u055ar;\u6130m;\u6a73a;\u4397ml\u803b\xcb\u40cb\u0100ip\u056a\u056fsts;\u6203onentialE;\u6147\u0280cfios\u0585\u0588\u058d\u05b2\u05ccy;\u4424r;\uc000\ud835\udd09lled\u0253\u0597\0\0\u05a3mallSquare;\u65fcerySmallSquare;\u65aa\u0370\u05ba\0\u05bf\0\0\u05c4f;\uc000\ud835\udd3dAll;\u6200riertrf;\u6131c\xf2\u05cb\u0600JTabcdfgorst\u05e8\u05ec\u05ef\u05fa\u0600\u0612\u0616\u061b\u061d\u0623\u066c\u0672cy;\u4403\u803b>\u403emma\u0100;d\u05f7\u05f8\u4393;\u43dcreve;\u411e\u0180eiy\u0607\u060c\u0610dil;\u4122rc;\u411c;\u4413ot;\u4120r;\uc000\ud835\udd0a;\u62d9pf;\uc000\ud835\udd3eeater\u0300EFGLST\u0635\u0644\u064e\u0656\u065b\u0666qual\u0100;L\u063e\u063f\u6265ess;\u62dbullEqual;\u6267reater;\u6aa2ess;\u6277lantEqual;\u6a7eilde;\u6273cr;\uc000\ud835\udca2;\u626b\u0400Aacfiosu\u0685\u068b\u0696\u069b\u069e\u06aa\u06be\u06caRDcy;\u442a\u0100ct\u0690\u0694ek;\u42c7;\u405eirc;\u4124r;\u610clbertSpace;\u610b\u01f0\u06af\0\u06b2f;\u610dizontalLine;\u6500\u0100ct\u06c3\u06c5\xf2\u06a9rok;\u4126mp\u0144\u06d0\u06d8ownHum\xf0\u012fqual;\u624f\u0700EJOacdfgmnostu\u06fa\u06fe\u0703\u0707\u070e\u071a\u071e\u0721\u0728\u0744\u0778\u078b\u078f\u0795cy;\u4415lig;\u4132cy;\u4401cute\u803b\xcd\u40cd\u0100iy\u0713\u0718rc\u803b\xce\u40ce;\u4418ot;\u4130r;\u6111rave\u803b\xcc\u40cc\u0180;ap\u0720\u072f\u073f\u0100cg\u0734\u0737r;\u412ainaryI;\u6148lie\xf3\u03dd\u01f4\u0749\0\u0762\u0100;e\u074d\u074e\u622c\u0100gr\u0753\u0758ral;\u622bsection;\u62c2isible\u0100CT\u076c\u0772omma;\u6063imes;\u6062\u0180gpt\u077f\u0783\u0788on;\u412ef;\uc000\ud835\udd40a;\u4399cr;\u6110ilde;\u4128\u01eb\u079a\0\u079ecy;\u4406l\u803b\xcf\u40cf\u0280cfosu\u07ac\u07b7\u07bc\u07c2\u07d0\u0100iy\u07b1\u07b5rc;\u4134;\u4419r;\uc000\ud835\udd0dpf;\uc000\ud835\udd41\u01e3\u07c7\0\u07ccr;\uc000\ud835\udca5rcy;\u4408kcy;\u4404\u0380HJacfos\u07e4\u07e8\u07ec\u07f1\u07fd\u0802\u0808cy;\u4425cy;\u440cppa;\u439a\u0100ey\u07f6\u07fbdil;\u4136;\u441ar;\uc000\ud835\udd0epf;\uc000\ud835\udd42cr;\uc000\ud835\udca6\u0580JTaceflmost\u0825\u0829\u082c\u0850\u0863\u09b3\u09b8\u09c7\u09cd\u0a37\u0a47cy;\u4409\u803b<\u403c\u0280cmnpr\u0837\u083c\u0841\u0844\u084dute;\u4139bda;\u439bg;\u67ealacetrf;\u6112r;\u619e\u0180aey\u0857\u085c\u0861ron;\u413ddil;\u413b;\u441b\u0100fs\u0868\u0970t\u0500ACDFRTUVar\u087e\u08a9\u08b1\u08e0\u08e6\u08fc\u092f\u095b\u0390\u096a\u0100nr\u0883\u088fgleBracket;\u67e8row\u0180;BR\u0899\u089a\u089e\u6190ar;\u61e4ightArrow;\u61c6eiling;\u6308o\u01f5\u08b7\0\u08c3bleBracket;\u67e6n\u01d4\u08c8\0\u08d2eeVector;\u6961ector\u0100;B\u08db\u08dc\u61c3ar;\u6959loor;\u630aight\u0100AV\u08ef\u08f5rrow;\u6194ector;\u694e\u0100er\u0901\u0917e\u0180;AV\u0909\u090a\u0910\u62a3rrow;\u61a4ector;\u695aiangle\u0180;BE\u0924\u0925\u0929\u62b2ar;\u69cfqual;\u62b4p\u0180DTV\u0937\u0942\u094cownVector;\u6951eeVector;\u6960ector\u0100;B\u0956\u0957\u61bfar;\u6958ector\u0100;B\u0965\u0966\u61bcar;\u6952ight\xe1\u039cs\u0300EFGLST\u097e\u098b\u0995\u099d\u09a2\u09adqualGreater;\u62daullEqual;\u6266reater;\u6276ess;\u6aa1lantEqual;\u6a7dilde;\u6272r;\uc000\ud835\udd0f\u0100;e\u09bd\u09be\u62d8ftarrow;\u61daidot;\u413f\u0180npw\u09d4\u0a16\u0a1bg\u0200LRlr\u09de\u09f7\u0a02\u0a10eft\u0100AR\u09e6\u09ecrrow;\u67f5ightArrow;\u67f7ightArrow;\u67f6eft\u0100ar\u03b3\u0a0aight\xe1\u03bfight\xe1\u03caf;\uc000\ud835\udd43er\u0100LR\u0a22\u0a2ceftArrow;\u6199ightArrow;\u6198\u0180cht\u0a3e\u0a40\u0a42\xf2\u084c;\u61b0rok;\u4141;\u626a\u0400acefiosu\u0a5a\u0a5d\u0a60\u0a77\u0a7c\u0a85\u0a8b\u0a8ep;\u6905y;\u441c\u0100dl\u0a65\u0a6fiumSpace;\u605flintrf;\u6133r;\uc000\ud835\udd10nusPlus;\u6213pf;\uc000\ud835\udd44c\xf2\u0a76;\u439c\u0480Jacefostu\u0aa3\u0aa7\u0aad\u0ac0\u0b14\u0b19\u0d91\u0d97\u0d9ecy;\u440acute;\u4143\u0180aey\u0ab4\u0ab9\u0aberon;\u4147dil;\u4145;\u441d\u0180gsw\u0ac7\u0af0\u0b0eative\u0180MTV\u0ad3\u0adf\u0ae8ediumSpace;\u600bhi\u0100cn\u0ae6\u0ad8\xeb\u0ad9eryThi\xee\u0ad9ted\u0100GL\u0af8\u0b06reaterGreate\xf2\u0673essLes\xf3\u0a48Line;\u400ar;\uc000\ud835\udd11\u0200Bnpt\u0b22\u0b28\u0b37\u0b3areak;\u6060BreakingSpace;\u40a0f;\u6115\u0680;CDEGHLNPRSTV\u0b55\u0b56\u0b6a\u0b7c\u0ba1\u0beb\u0c04\u0c5e\u0c84\u0ca6\u0cd8\u0d61\u0d85\u6aec\u0100ou\u0b5b\u0b64ngruent;\u6262pCap;\u626doubleVerticalBar;\u6226\u0180lqx\u0b83\u0b8a\u0b9bement;\u6209ual\u0100;T\u0b92\u0b93\u6260ilde;\uc000\u2242\u0338ists;\u6204reater\u0380;EFGLST\u0bb6\u0bb7\u0bbd\u0bc9\u0bd3\u0bd8\u0be5\u626fqual;\u6271ullEqual;\uc000\u2267\u0338reater;\uc000\u226b\u0338ess;\u6279lantEqual;\uc000\u2a7e\u0338ilde;\u6275ump\u0144\u0bf2\u0bfdownHump;\uc000\u224e\u0338qual;\uc000\u224f\u0338e\u0100fs\u0c0a\u0c27tTriangle\u0180;BE\u0c1a\u0c1b\u0c21\u62eaar;\uc000\u29cf\u0338qual;\u62ecs\u0300;EGLST\u0c35\u0c36\u0c3c\u0c44\u0c4b\u0c58\u626equal;\u6270reater;\u6278ess;\uc000\u226a\u0338lantEqual;\uc000\u2a7d\u0338ilde;\u6274ested\u0100GL\u0c68\u0c79reaterGreater;\uc000\u2aa2\u0338essLess;\uc000\u2aa1\u0338recedes\u0180;ES\u0c92\u0c93\u0c9b\u6280qual;\uc000\u2aaf\u0338lantEqual;\u62e0\u0100ei\u0cab\u0cb9verseElement;\u620cghtTriangle\u0180;BE\u0ccb\u0ccc\u0cd2\u62ebar;\uc000\u29d0\u0338qual;\u62ed\u0100qu\u0cdd\u0d0cuareSu\u0100bp\u0ce8\u0cf9set\u0100;E\u0cf0\u0cf3\uc000\u228f\u0338qual;\u62e2erset\u0100;E\u0d03\u0d06\uc000\u2290\u0338qual;\u62e3\u0180bcp\u0d13\u0d24\u0d4eset\u0100;E\u0d1b\u0d1e\uc000\u2282\u20d2qual;\u6288ceeds\u0200;EST\u0d32\u0d33\u0d3b\u0d46\u6281qual;\uc000\u2ab0\u0338lantEqual;\u62e1ilde;\uc000\u227f\u0338erset\u0100;E\u0d58\u0d5b\uc000\u2283\u20d2qual;\u6289ilde\u0200;EFT\u0d6e\u0d6f\u0d75\u0d7f\u6241qual;\u6244ullEqual;\u6247ilde;\u6249erticalBar;\u6224cr;\uc000\ud835\udca9ilde\u803b\xd1\u40d1;\u439d\u0700Eacdfgmoprstuv\u0dbd\u0dc2\u0dc9\u0dd5\u0ddb\u0de0\u0de7\u0dfc\u0e02\u0e20\u0e22\u0e32\u0e3f\u0e44lig;\u4152cute\u803b\xd3\u40d3\u0100iy\u0dce\u0dd3rc\u803b\xd4\u40d4;\u441eblac;\u4150r;\uc000\ud835\udd12rave\u803b\xd2\u40d2\u0180aei\u0dee\u0df2\u0df6cr;\u414cga;\u43a9cron;\u439fpf;\uc000\ud835\udd46enCurly\u0100DQ\u0e0e\u0e1aoubleQuote;\u601cuote;\u6018;\u6a54\u0100cl\u0e27\u0e2cr;\uc000\ud835\udcaaash\u803b\xd8\u40d8i\u016c\u0e37\u0e3cde\u803b\xd5\u40d5es;\u6a37ml\u803b\xd6\u40d6er\u0100BP\u0e4b\u0e60\u0100ar\u0e50\u0e53r;\u603eac\u0100ek\u0e5a\u0e5c;\u63deet;\u63b4arenthesis;\u63dc\u0480acfhilors\u0e7f\u0e87\u0e8a\u0e8f\u0e92\u0e94\u0e9d\u0eb0\u0efcrtialD;\u6202y;\u441fr;\uc000\ud835\udd13i;\u43a6;\u43a0usMinus;\u40b1\u0100ip\u0ea2\u0eadncareplan\xe5\u069df;\u6119\u0200;eio\u0eb9\u0eba\u0ee0\u0ee4\u6abbcedes\u0200;EST\u0ec8\u0ec9\u0ecf\u0eda\u627aqual;\u6aaflantEqual;\u627cilde;\u627eme;\u6033\u0100dp\u0ee9\u0eeeuct;\u620fortion\u0100;a\u0225\u0ef9l;\u621d\u0100ci\u0f01\u0f06r;\uc000\ud835\udcab;\u43a8\u0200Ufos\u0f11\u0f16\u0f1b\u0f1fOT\u803b\"\u4022r;\uc000\ud835\udd14pf;\u611acr;\uc000\ud835\udcac\u0600BEacefhiorsu\u0f3e\u0f43\u0f47\u0f60\u0f73\u0fa7\u0faa\u0fad\u1096\u10a9\u10b4\u10bearr;\u6910G\u803b\xae\u40ae\u0180cnr\u0f4e\u0f53\u0f56ute;\u4154g;\u67ebr\u0100;t\u0f5c\u0f5d\u61a0l;\u6916\u0180aey\u0f67\u0f6c\u0f71ron;\u4158dil;\u4156;\u4420\u0100;v\u0f78\u0f79\u611cerse\u0100EU\u0f82\u0f99\u0100lq\u0f87\u0f8eement;\u620builibrium;\u61cbpEquilibrium;\u696fr\xbb\u0f79o;\u43a1ght\u0400ACDFTUVa\u0fc1\u0feb\u0ff3\u1022\u1028\u105b\u1087\u03d8\u0100nr\u0fc6\u0fd2gleBracket;\u67e9row\u0180;BL\u0fdc\u0fdd\u0fe1\u6192ar;\u61e5eftArrow;\u61c4eiling;\u6309o\u01f5\u0ff9\0\u1005bleBracket;\u67e7n\u01d4\u100a\0\u1014eeVector;\u695dector\u0100;B\u101d\u101e\u61c2ar;\u6955loor;\u630b\u0100er\u102d\u1043e\u0180;AV\u1035\u1036\u103c\u62a2rrow;\u61a6ector;\u695biangle\u0180;BE\u1050\u1051\u1055\u62b3ar;\u69d0qual;\u62b5p\u0180DTV\u1063\u106e\u1078ownVector;\u694feeVector;\u695cector\u0100;B\u1082\u1083\u61bear;\u6954ector\u0100;B\u1091\u1092\u61c0ar;\u6953\u0100pu\u109b\u109ef;\u611dndImplies;\u6970ightarrow;\u61db\u0100ch\u10b9\u10bcr;\u611b;\u61b1leDelayed;\u69f4\u0680HOacfhimoqstu\u10e4\u10f1\u10f7\u10fd\u1119\u111e\u1151\u1156\u1161\u1167\u11b5\u11bb\u11bf\u0100Cc\u10e9\u10eeHcy;\u4429y;\u4428FTcy;\u442ccute;\u415a\u0280;aeiy\u1108\u1109\u110e\u1113\u1117\u6abcron;\u4160dil;\u415erc;\u415c;\u4421r;\uc000\ud835\udd16ort\u0200DLRU\u112a\u1134\u113e\u1149ownArrow\xbb\u041eeftArrow\xbb\u089aightArrow\xbb\u0fddpArrow;\u6191gma;\u43a3allCircle;\u6218pf;\uc000\ud835\udd4a\u0272\u116d\0\0\u1170t;\u621aare\u0200;ISU\u117b\u117c\u1189\u11af\u65a1ntersection;\u6293u\u0100bp\u118f\u119eset\u0100;E\u1197\u1198\u628fqual;\u6291erset\u0100;E\u11a8\u11a9\u6290qual;\u6292nion;\u6294cr;\uc000\ud835\udcaear;\u62c6\u0200bcmp\u11c8\u11db\u1209\u120b\u0100;s\u11cd\u11ce\u62d0et\u0100;E\u11cd\u11d5qual;\u6286\u0100ch\u11e0\u1205eeds\u0200;EST\u11ed\u11ee\u11f4\u11ff\u627bqual;\u6ab0lantEqual;\u627dilde;\u627fTh\xe1\u0f8c;\u6211\u0180;es\u1212\u1213\u1223\u62d1rset\u0100;E\u121c\u121d\u6283qual;\u6287et\xbb\u1213\u0580HRSacfhiors\u123e\u1244\u1249\u1255\u125e\u1271\u1276\u129f\u12c2\u12c8\u12d1ORN\u803b\xde\u40deADE;\u6122\u0100Hc\u124e\u1252cy;\u440by;\u4426\u0100bu\u125a\u125c;\u4009;\u43a4\u0180aey\u1265\u126a\u126fron;\u4164dil;\u4162;\u4422r;\uc000\ud835\udd17\u0100ei\u127b\u1289\u01f2\u1280\0\u1287efore;\u6234a;\u4398\u0100cn\u128e\u1298kSpace;\uc000\u205f\u200aSpace;\u6009lde\u0200;EFT\u12ab\u12ac\u12b2\u12bc\u623cqual;\u6243ullEqual;\u6245ilde;\u6248pf;\uc000\ud835\udd4bipleDot;\u60db\u0100ct\u12d6\u12dbr;\uc000\ud835\udcafrok;\u4166\u0ae1\u12f7\u130e\u131a\u1326\0\u132c\u1331\0\0\0\0\0\u1338\u133d\u1377\u1385\0\u13ff\u1404\u140a\u1410\u0100cr\u12fb\u1301ute\u803b\xda\u40dar\u0100;o\u1307\u1308\u619fcir;\u6949r\u01e3\u1313\0\u1316y;\u440eve;\u416c\u0100iy\u131e\u1323rc\u803b\xdb\u40db;\u4423blac;\u4170r;\uc000\ud835\udd18rave\u803b\xd9\u40d9acr;\u416a\u0100di\u1341\u1369er\u0100BP\u1348\u135d\u0100ar\u134d\u1350r;\u405fac\u0100ek\u1357\u1359;\u63dfet;\u63b5arenthesis;\u63ddon\u0100;P\u1370\u1371\u62c3lus;\u628e\u0100gp\u137b\u137fon;\u4172f;\uc000\ud835\udd4c\u0400ADETadps\u1395\u13ae\u13b8\u13c4\u03e8\u13d2\u13d7\u13f3rrow\u0180;BD\u1150\u13a0\u13a4ar;\u6912ownArrow;\u61c5ownArrow;\u6195quilibrium;\u696eee\u0100;A\u13cb\u13cc\u62a5rrow;\u61a5own\xe1\u03f3er\u0100LR\u13de\u13e8eftArrow;\u6196ightArrow;\u6197i\u0100;l\u13f9\u13fa\u43d2on;\u43a5ing;\u416ecr;\uc000\ud835\udcb0ilde;\u4168ml\u803b\xdc\u40dc\u0480Dbcdefosv\u1427\u142c\u1430\u1433\u143e\u1485\u148a\u1490\u1496ash;\u62abar;\u6aeby;\u4412ash\u0100;l\u143b\u143c\u62a9;\u6ae6\u0100er\u1443\u1445;\u62c1\u0180bty\u144c\u1450\u147aar;\u6016\u0100;i\u144f\u1455cal\u0200BLST\u1461\u1465\u146a\u1474ar;\u6223ine;\u407ceparator;\u6758ilde;\u6240ThinSpace;\u600ar;\uc000\ud835\udd19pf;\uc000\ud835\udd4dcr;\uc000\ud835\udcb1dash;\u62aa\u0280cefos\u14a7\u14ac\u14b1\u14b6\u14bcirc;\u4174dge;\u62c0r;\uc000\ud835\udd1apf;\uc000\ud835\udd4ecr;\uc000\ud835\udcb2\u0200fios\u14cb\u14d0\u14d2\u14d8r;\uc000\ud835\udd1b;\u439epf;\uc000\ud835\udd4fcr;\uc000\ud835\udcb3\u0480AIUacfosu\u14f1\u14f5\u14f9\u14fd\u1504\u150f\u1514\u151a\u1520cy;\u442fcy;\u4407cy;\u442ecute\u803b\xdd\u40dd\u0100iy\u1509\u150drc;\u4176;\u442br;\uc000\ud835\udd1cpf;\uc000\ud835\udd50cr;\uc000\ud835\udcb4ml;\u4178\u0400Hacdefos\u1535\u1539\u153f\u154b\u154f\u155d\u1560\u1564cy;\u4416cute;\u4179\u0100ay\u1544\u1549ron;\u417d;\u4417ot;\u417b\u01f2\u1554\0\u155boWidt\xe8\u0ad9a;\u4396r;\u6128pf;\u6124cr;\uc000\ud835\udcb5\u0be1\u1583\u158a\u1590\0\u15b0\u15b6\u15bf\0\0\0\0\u15c6\u15db\u15eb\u165f\u166d\0\u1695\u169b\u16b2\u16b9\0\u16becute\u803b\xe1\u40e1reve;\u4103\u0300;Ediuy\u159c\u159d\u15a1\u15a3\u15a8\u15ad\u623e;\uc000\u223e\u0333;\u623frc\u803b\xe2\u40e2te\u80bb\xb4\u0306;\u4430lig\u803b\xe6\u40e6\u0100;r\xb2\u15ba;\uc000\ud835\udd1erave\u803b\xe0\u40e0\u0100ep\u15ca\u15d6\u0100fp\u15cf\u15d4sym;\u6135\xe8\u15d3ha;\u43b1\u0100ap\u15dfc\u0100cl\u15e4\u15e7r;\u4101g;\u6a3f\u0264\u15f0\0\0\u160a\u0280;adsv\u15fa\u15fb\u15ff\u1601\u1607\u6227nd;\u6a55;\u6a5clope;\u6a58;\u6a5a\u0380;elmrsz\u1618\u1619\u161b\u161e\u163f\u164f\u1659\u6220;\u69a4e\xbb\u1619sd\u0100;a\u1625\u1626\u6221\u0461\u1630\u1632\u1634\u1636\u1638\u163a\u163c\u163e;\u69a8;\u69a9;\u69aa;\u69ab;\u69ac;\u69ad;\u69ae;\u69aft\u0100;v\u1645\u1646\u621fb\u0100;d\u164c\u164d\u62be;\u699d\u0100pt\u1654\u1657h;\u6222\xbb\xb9arr;\u637c\u0100gp\u1663\u1667on;\u4105f;\uc000\ud835\udd52\u0380;Eaeiop\u12c1\u167b\u167d\u1682\u1684\u1687\u168a;\u6a70cir;\u6a6f;\u624ad;\u624bs;\u4027rox\u0100;e\u12c1\u1692\xf1\u1683ing\u803b\xe5\u40e5\u0180cty\u16a1\u16a6\u16a8r;\uc000\ud835\udcb6;\u402amp\u0100;e\u12c1\u16af\xf1\u0288ilde\u803b\xe3\u40e3ml\u803b\xe4\u40e4\u0100ci\u16c2\u16c8onin\xf4\u0272nt;\u6a11\u0800Nabcdefiklnoprsu\u16ed\u16f1\u1730\u173c\u1743\u1748\u1778\u177d\u17e0\u17e6\u1839\u1850\u170d\u193d\u1948\u1970ot;\u6aed\u0100cr\u16f6\u171ek\u0200ceps\u1700\u1705\u170d\u1713ong;\u624cpsilon;\u43f6rime;\u6035im\u0100;e\u171a\u171b\u623dq;\u62cd\u0176\u1722\u1726ee;\u62bded\u0100;g\u172c\u172d\u6305e\xbb\u172drk\u0100;t\u135c\u1737brk;\u63b6\u0100oy\u1701\u1741;\u4431quo;\u601e\u0280cmprt\u1753\u175b\u1761\u1764\u1768aus\u0100;e\u010a\u0109ptyv;\u69b0s\xe9\u170cno\xf5\u0113\u0180ahw\u176f\u1771\u1773;\u43b2;\u6136een;\u626cr;\uc000\ud835\udd1fg\u0380costuvw\u178d\u179d\u17b3\u17c1\u17d5\u17db\u17de\u0180aiu\u1794\u1796\u179a\xf0\u0760rc;\u65efp\xbb\u1371\u0180dpt\u17a4\u17a8\u17adot;\u6a00lus;\u6a01imes;\u6a02\u0271\u17b9\0\0\u17becup;\u6a06ar;\u6605riangle\u0100du\u17cd\u17d2own;\u65bdp;\u65b3plus;\u6a04e\xe5\u1444\xe5\u14adarow;\u690d\u0180ako\u17ed\u1826\u1835\u0100cn\u17f2\u1823k\u0180lst\u17fa\u05ab\u1802ozenge;\u69ebriangle\u0200;dlr\u1812\u1813\u1818\u181d\u65b4own;\u65beeft;\u65c2ight;\u65b8k;\u6423\u01b1\u182b\0\u1833\u01b2\u182f\0\u1831;\u6592;\u65914;\u6593ck;\u6588\u0100eo\u183e\u184d\u0100;q\u1843\u1846\uc000=\u20e5uiv;\uc000\u2261\u20e5t;\u6310\u0200ptwx\u1859\u185e\u1867\u186cf;\uc000\ud835\udd53\u0100;t\u13cb\u1863om\xbb\u13cctie;\u62c8\u0600DHUVbdhmptuv\u1885\u1896\u18aa\u18bb\u18d7\u18db\u18ec\u18ff\u1905\u190a\u1910\u1921\u0200LRlr\u188e\u1890\u1892\u1894;\u6557;\u6554;\u6556;\u6553\u0280;DUdu\u18a1\u18a2\u18a4\u18a6\u18a8\u6550;\u6566;\u6569;\u6564;\u6567\u0200LRlr\u18b3\u18b5\u18b7\u18b9;\u655d;\u655a;\u655c;\u6559\u0380;HLRhlr\u18ca\u18cb\u18cd\u18cf\u18d1\u18d3\u18d5\u6551;\u656c;\u6563;\u6560;\u656b;\u6562;\u655fox;\u69c9\u0200LRlr\u18e4\u18e6\u18e8\u18ea;\u6555;\u6552;\u6510;\u650c\u0280;DUdu\u06bd\u18f7\u18f9\u18fb\u18fd;\u6565;\u6568;\u652c;\u6534inus;\u629flus;\u629eimes;\u62a0\u0200LRlr\u1919\u191b\u191d\u191f;\u655b;\u6558;\u6518;\u6514\u0380;HLRhlr\u1930\u1931\u1933\u1935\u1937\u1939\u193b\u6502;\u656a;\u6561;\u655e;\u653c;\u6524;\u651c\u0100ev\u0123\u1942bar\u803b\xa6\u40a6\u0200ceio\u1951\u1956\u195a\u1960r;\uc000\ud835\udcb7mi;\u604fm\u0100;e\u171a\u171cl\u0180;bh\u1968\u1969\u196b\u405c;\u69c5sub;\u67c8\u016c\u1974\u197el\u0100;e\u1979\u197a\u6022t\xbb\u197ap\u0180;Ee\u012f\u1985\u1987;\u6aae\u0100;q\u06dc\u06db\u0ce1\u19a7\0\u19e8\u1a11\u1a15\u1a32\0\u1a37\u1a50\0\0\u1ab4\0\0\u1ac1\0\0\u1b21\u1b2e\u1b4d\u1b52\0\u1bfd\0\u1c0c\u0180cpr\u19ad\u19b2\u19ddute;\u4107\u0300;abcds\u19bf\u19c0\u19c4\u19ca\u19d5\u19d9\u6229nd;\u6a44rcup;\u6a49\u0100au\u19cf\u19d2p;\u6a4bp;\u6a47ot;\u6a40;\uc000\u2229\ufe00\u0100eo\u19e2\u19e5t;\u6041\xee\u0693\u0200aeiu\u19f0\u19fb\u1a01\u1a05\u01f0\u19f5\0\u19f8s;\u6a4don;\u410ddil\u803b\xe7\u40e7rc;\u4109ps\u0100;s\u1a0c\u1a0d\u6a4cm;\u6a50ot;\u410b\u0180dmn\u1a1b\u1a20\u1a26il\u80bb\xb8\u01adptyv;\u69b2t\u8100\xa2;e\u1a2d\u1a2e\u40a2r\xe4\u01b2r;\uc000\ud835\udd20\u0180cei\u1a3d\u1a40\u1a4dy;\u4447ck\u0100;m\u1a47\u1a48\u6713ark\xbb\u1a48;\u43c7r\u0380;Ecefms\u1a5f\u1a60\u1a62\u1a6b\u1aa4\u1aaa\u1aae\u65cb;\u69c3\u0180;el\u1a69\u1a6a\u1a6d\u42c6q;\u6257e\u0261\u1a74\0\0\u1a88rrow\u0100lr\u1a7c\u1a81eft;\u61baight;\u61bb\u0280RSacd\u1a92\u1a94\u1a96\u1a9a\u1a9f\xbb\u0f47;\u64c8st;\u629birc;\u629aash;\u629dnint;\u6a10id;\u6aefcir;\u69c2ubs\u0100;u\u1abb\u1abc\u6663it\xbb\u1abc\u02ec\u1ac7\u1ad4\u1afa\0\u1b0aon\u0100;e\u1acd\u1ace\u403a\u0100;q\xc7\xc6\u026d\u1ad9\0\0\u1ae2a\u0100;t\u1ade\u1adf\u402c;\u4040\u0180;fl\u1ae8\u1ae9\u1aeb\u6201\xee\u1160e\u0100mx\u1af1\u1af6ent\xbb\u1ae9e\xf3\u024d\u01e7\u1afe\0\u1b07\u0100;d\u12bb\u1b02ot;\u6a6dn\xf4\u0246\u0180fry\u1b10\u1b14\u1b17;\uc000\ud835\udd54o\xe4\u0254\u8100\xa9;s\u0155\u1b1dr;\u6117\u0100ao\u1b25\u1b29rr;\u61b5ss;\u6717\u0100cu\u1b32\u1b37r;\uc000\ud835\udcb8\u0100bp\u1b3c\u1b44\u0100;e\u1b41\u1b42\u6acf;\u6ad1\u0100;e\u1b49\u1b4a\u6ad0;\u6ad2dot;\u62ef\u0380delprvw\u1b60\u1b6c\u1b77\u1b82\u1bac\u1bd4\u1bf9arr\u0100lr\u1b68\u1b6a;\u6938;\u6935\u0270\u1b72\0\0\u1b75r;\u62dec;\u62dfarr\u0100;p\u1b7f\u1b80\u61b6;\u693d\u0300;bcdos\u1b8f\u1b90\u1b96\u1ba1\u1ba5\u1ba8\u622arcap;\u6a48\u0100au\u1b9b\u1b9ep;\u6a46p;\u6a4aot;\u628dr;\u6a45;\uc000\u222a\ufe00\u0200alrv\u1bb5\u1bbf\u1bde\u1be3rr\u0100;m\u1bbc\u1bbd\u61b7;\u693cy\u0180evw\u1bc7\u1bd4\u1bd8q\u0270\u1bce\0\0\u1bd2re\xe3\u1b73u\xe3\u1b75ee;\u62ceedge;\u62cfen\u803b\xa4\u40a4earrow\u0100lr\u1bee\u1bf3eft\xbb\u1b80ight\xbb\u1bbde\xe4\u1bdd\u0100ci\u1c01\u1c07onin\xf4\u01f7nt;\u6231lcty;\u632d\u0980AHabcdefhijlorstuwz\u1c38\u1c3b\u1c3f\u1c5d\u1c69\u1c75\u1c8a\u1c9e\u1cac\u1cb7\u1cfb\u1cff\u1d0d\u1d7b\u1d91\u1dab\u1dbb\u1dc6\u1dcdr\xf2\u0381ar;\u6965\u0200glrs\u1c48\u1c4d\u1c52\u1c54ger;\u6020eth;\u6138\xf2\u1133h\u0100;v\u1c5a\u1c5b\u6010\xbb\u090a\u016b\u1c61\u1c67arow;\u690fa\xe3\u0315\u0100ay\u1c6e\u1c73ron;\u410f;\u4434\u0180;ao\u0332\u1c7c\u1c84\u0100gr\u02bf\u1c81r;\u61catseq;\u6a77\u0180glm\u1c91\u1c94\u1c98\u803b\xb0\u40b0ta;\u43b4ptyv;\u69b1\u0100ir\u1ca3\u1ca8sht;\u697f;\uc000\ud835\udd21ar\u0100lr\u1cb3\u1cb5\xbb\u08dc\xbb\u101e\u0280aegsv\u1cc2\u0378\u1cd6\u1cdc\u1ce0m\u0180;os\u0326\u1cca\u1cd4nd\u0100;s\u0326\u1cd1uit;\u6666amma;\u43ddin;\u62f2\u0180;io\u1ce7\u1ce8\u1cf8\u40f7de\u8100\xf7;o\u1ce7\u1cf0ntimes;\u62c7n\xf8\u1cf7cy;\u4452c\u026f\u1d06\0\0\u1d0arn;\u631eop;\u630d\u0280lptuw\u1d18\u1d1d\u1d22\u1d49\u1d55lar;\u4024f;\uc000\ud835\udd55\u0280;emps\u030b\u1d2d\u1d37\u1d3d\u1d42q\u0100;d\u0352\u1d33ot;\u6251inus;\u6238lus;\u6214quare;\u62a1blebarwedg\xe5\xfan\u0180adh\u112e\u1d5d\u1d67ownarrow\xf3\u1c83arpoon\u0100lr\u1d72\u1d76ef\xf4\u1cb4igh\xf4\u1cb6\u0162\u1d7f\u1d85karo\xf7\u0f42\u026f\u1d8a\0\0\u1d8ern;\u631fop;\u630c\u0180cot\u1d98\u1da3\u1da6\u0100ry\u1d9d\u1da1;\uc000\ud835\udcb9;\u4455l;\u69f6rok;\u4111\u0100dr\u1db0\u1db4ot;\u62f1i\u0100;f\u1dba\u1816\u65bf\u0100ah\u1dc0\u1dc3r\xf2\u0429a\xf2\u0fa6angle;\u69a6\u0100ci\u1dd2\u1dd5y;\u445fgrarr;\u67ff\u0900Dacdefglmnopqrstux\u1e01\u1e09\u1e19\u1e38\u0578\u1e3c\u1e49\u1e61\u1e7e\u1ea5\u1eaf\u1ebd\u1ee1\u1f2a\u1f37\u1f44\u1f4e\u1f5a\u0100Do\u1e06\u1d34o\xf4\u1c89\u0100cs\u1e0e\u1e14ute\u803b\xe9\u40e9ter;\u6a6e\u0200aioy\u1e22\u1e27\u1e31\u1e36ron;\u411br\u0100;c\u1e2d\u1e2e\u6256\u803b\xea\u40ealon;\u6255;\u444dot;\u4117\u0100Dr\u1e41\u1e45ot;\u6252;\uc000\ud835\udd22\u0180;rs\u1e50\u1e51\u1e57\u6a9aave\u803b\xe8\u40e8\u0100;d\u1e5c\u1e5d\u6a96ot;\u6a98\u0200;ils\u1e6a\u1e6b\u1e72\u1e74\u6a99nters;\u63e7;\u6113\u0100;d\u1e79\u1e7a\u6a95ot;\u6a97\u0180aps\u1e85\u1e89\u1e97cr;\u4113ty\u0180;sv\u1e92\u1e93\u1e95\u6205et\xbb\u1e93p\u01001;\u1e9d\u1ea4\u0133\u1ea1\u1ea3;\u6004;\u6005\u6003\u0100gs\u1eaa\u1eac;\u414bp;\u6002\u0100gp\u1eb4\u1eb8on;\u4119f;\uc000\ud835\udd56\u0180als\u1ec4\u1ece\u1ed2r\u0100;s\u1eca\u1ecb\u62d5l;\u69e3us;\u6a71i\u0180;lv\u1eda\u1edb\u1edf\u43b5on\xbb\u1edb;\u43f5\u0200csuv\u1eea\u1ef3\u1f0b\u1f23\u0100io\u1eef\u1e31rc\xbb\u1e2e\u0269\u1ef9\0\0\u1efb\xed\u0548ant\u0100gl\u1f02\u1f06tr\xbb\u1e5dess\xbb\u1e7a\u0180aei\u1f12\u1f16\u1f1als;\u403dst;\u625fv\u0100;D\u0235\u1f20D;\u6a78parsl;\u69e5\u0100Da\u1f2f\u1f33ot;\u6253rr;\u6971\u0180cdi\u1f3e\u1f41\u1ef8r;\u612fo\xf4\u0352\u0100ah\u1f49\u1f4b;\u43b7\u803b\xf0\u40f0\u0100mr\u1f53\u1f57l\u803b\xeb\u40ebo;\u60ac\u0180cip\u1f61\u1f64\u1f67l;\u4021s\xf4\u056e\u0100eo\u1f6c\u1f74ctatio\xee\u0559nential\xe5\u0579\u09e1\u1f92\0\u1f9e\0\u1fa1\u1fa7\0\0\u1fc6\u1fcc\0\u1fd3\0\u1fe6\u1fea\u2000\0\u2008\u205allingdotse\xf1\u1e44y;\u4444male;\u6640\u0180ilr\u1fad\u1fb3\u1fc1lig;\u8000\ufb03\u0269\u1fb9\0\0\u1fbdg;\u8000\ufb00ig;\u8000\ufb04;\uc000\ud835\udd23lig;\u8000\ufb01lig;\uc000fj\u0180alt\u1fd9\u1fdc\u1fe1t;\u666dig;\u8000\ufb02ns;\u65b1of;\u4192\u01f0\u1fee\0\u1ff3f;\uc000\ud835\udd57\u0100ak\u05bf\u1ff7\u0100;v\u1ffc\u1ffd\u62d4;\u6ad9artint;\u6a0d\u0100ao\u200c\u2055\u0100cs\u2011\u2052\u03b1\u201a\u2030\u2038\u2045\u2048\0\u2050\u03b2\u2022\u2025\u2027\u202a\u202c\0\u202e\u803b\xbd\u40bd;\u6153\u803b\xbc\u40bc;\u6155;\u6159;\u615b\u01b3\u2034\0\u2036;\u6154;\u6156\u02b4\u203e\u2041\0\0\u2043\u803b\xbe\u40be;\u6157;\u615c5;\u6158\u01b6\u204c\0\u204e;\u615a;\u615d8;\u615el;\u6044wn;\u6322cr;\uc000\ud835\udcbb\u0880Eabcdefgijlnorstv\u2082\u2089\u209f\u20a5\u20b0\u20b4\u20f0\u20f5\u20fa\u20ff\u2103\u2112\u2138\u0317\u213e\u2152\u219e\u0100;l\u064d\u2087;\u6a8c\u0180cmp\u2090\u2095\u209dute;\u41f5ma\u0100;d\u209c\u1cda\u43b3;\u6a86reve;\u411f\u0100iy\u20aa\u20aerc;\u411d;\u4433ot;\u4121\u0200;lqs\u063e\u0642\u20bd\u20c9\u0180;qs\u063e\u064c\u20c4lan\xf4\u0665\u0200;cdl\u0665\u20d2\u20d5\u20e5c;\u6aa9ot\u0100;o\u20dc\u20dd\u6a80\u0100;l\u20e2\u20e3\u6a82;\u6a84\u0100;e\u20ea\u20ed\uc000\u22db\ufe00s;\u6a94r;\uc000\ud835\udd24\u0100;g\u0673\u061bmel;\u6137cy;\u4453\u0200;Eaj\u065a\u210c\u210e\u2110;\u6a92;\u6aa5;\u6aa4\u0200Eaes\u211b\u211d\u2129\u2134;\u6269p\u0100;p\u2123\u2124\u6a8arox\xbb\u2124\u0100;q\u212e\u212f\u6a88\u0100;q\u212e\u211bim;\u62e7pf;\uc000\ud835\udd58\u0100ci\u2143\u2146r;\u610am\u0180;el\u066b\u214e\u2150;\u6a8e;\u6a90\u8300>;cdlqr\u05ee\u2160\u216a\u216e\u2173\u2179\u0100ci\u2165\u2167;\u6aa7r;\u6a7aot;\u62d7Par;\u6995uest;\u6a7c\u0280adels\u2184\u216a\u2190\u0656\u219b\u01f0\u2189\0\u218epro\xf8\u209er;\u6978q\u0100lq\u063f\u2196les\xf3\u2088i\xed\u066b\u0100en\u21a3\u21adrtneqq;\uc000\u2269\ufe00\xc5\u21aa\u0500Aabcefkosy\u21c4\u21c7\u21f1\u21f5\u21fa\u2218\u221d\u222f\u2268\u227dr\xf2\u03a0\u0200ilmr\u21d0\u21d4\u21d7\u21dbrs\xf0\u1484f\xbb\u2024il\xf4\u06a9\u0100dr\u21e0\u21e4cy;\u444a\u0180;cw\u08f4\u21eb\u21efir;\u6948;\u61adar;\u610firc;\u4125\u0180alr\u2201\u220e\u2213rts\u0100;u\u2209\u220a\u6665it\xbb\u220alip;\u6026con;\u62b9r;\uc000\ud835\udd25s\u0100ew\u2223\u2229arow;\u6925arow;\u6926\u0280amopr\u223a\u223e\u2243\u225e\u2263rr;\u61fftht;\u623bk\u0100lr\u2249\u2253eftarrow;\u61a9ightarrow;\u61aaf;\uc000\ud835\udd59bar;\u6015\u0180clt\u226f\u2274\u2278r;\uc000\ud835\udcbdas\xe8\u21f4rok;\u4127\u0100bp\u2282\u2287ull;\u6043hen\xbb\u1c5b\u0ae1\u22a3\0\u22aa\0\u22b8\u22c5\u22ce\0\u22d5\u22f3\0\0\u22f8\u2322\u2367\u2362\u237f\0\u2386\u23aa\u23b4cute\u803b\xed\u40ed\u0180;iy\u0771\u22b0\u22b5rc\u803b\xee\u40ee;\u4438\u0100cx\u22bc\u22bfy;\u4435cl\u803b\xa1\u40a1\u0100fr\u039f\u22c9;\uc000\ud835\udd26rave\u803b\xec\u40ec\u0200;ino\u073e\u22dd\u22e9\u22ee\u0100in\u22e2\u22e6nt;\u6a0ct;\u622dfin;\u69dcta;\u6129lig;\u4133\u0180aop\u22fe\u231a\u231d\u0180cgt\u2305\u2308\u2317r;\u412b\u0180elp\u071f\u230f\u2313in\xe5\u078ear\xf4\u0720h;\u4131f;\u62b7ed;\u41b5\u0280;cfot\u04f4\u232c\u2331\u233d\u2341are;\u6105in\u0100;t\u2338\u2339\u621eie;\u69dddo\xf4\u2319\u0280;celp\u0757\u234c\u2350\u235b\u2361al;\u62ba\u0100gr\u2355\u2359er\xf3\u1563\xe3\u234darhk;\u6a17rod;\u6a3c\u0200cgpt\u236f\u2372\u2376\u237by;\u4451on;\u412ff;\uc000\ud835\udd5aa;\u43b9uest\u803b\xbf\u40bf\u0100ci\u238a\u238fr;\uc000\ud835\udcben\u0280;Edsv\u04f4\u239b\u239d\u23a1\u04f3;\u62f9ot;\u62f5\u0100;v\u23a6\u23a7\u62f4;\u62f3\u0100;i\u0777\u23aelde;\u4129\u01eb\u23b8\0\u23bccy;\u4456l\u803b\xef\u40ef\u0300cfmosu\u23cc\u23d7\u23dc\u23e1\u23e7\u23f5\u0100iy\u23d1\u23d5rc;\u4135;\u4439r;\uc000\ud835\udd27ath;\u4237pf;\uc000\ud835\udd5b\u01e3\u23ec\0\u23f1r;\uc000\ud835\udcbfrcy;\u4458kcy;\u4454\u0400acfghjos\u240b\u2416\u2422\u2427\u242d\u2431\u2435\u243bppa\u0100;v\u2413\u2414\u43ba;\u43f0\u0100ey\u241b\u2420dil;\u4137;\u443ar;\uc000\ud835\udd28reen;\u4138cy;\u4445cy;\u445cpf;\uc000\ud835\udd5ccr;\uc000\ud835\udcc0\u0b80ABEHabcdefghjlmnoprstuv\u2470\u2481\u2486\u248d\u2491\u250e\u253d\u255a\u2580\u264e\u265e\u2665\u2679\u267d\u269a\u26b2\u26d8\u275d\u2768\u278b\u27c0\u2801\u2812\u0180art\u2477\u247a\u247cr\xf2\u09c6\xf2\u0395ail;\u691barr;\u690e\u0100;g\u0994\u248b;\u6a8bar;\u6962\u0963\u24a5\0\u24aa\0\u24b1\0\0\0\0\0\u24b5\u24ba\0\u24c6\u24c8\u24cd\0\u24f9ute;\u413amptyv;\u69b4ra\xee\u084cbda;\u43bbg\u0180;dl\u088e\u24c1\u24c3;\u6991\xe5\u088e;\u6a85uo\u803b\xab\u40abr\u0400;bfhlpst\u0899\u24de\u24e6\u24e9\u24eb\u24ee\u24f1\u24f5\u0100;f\u089d\u24e3s;\u691fs;\u691d\xeb\u2252p;\u61abl;\u6939im;\u6973l;\u61a2\u0180;ae\u24ff\u2500\u2504\u6aabil;\u6919\u0100;s\u2509\u250a\u6aad;\uc000\u2aad\ufe00\u0180abr\u2515\u2519\u251drr;\u690crk;\u6772\u0100ak\u2522\u252cc\u0100ek\u2528\u252a;\u407b;\u405b\u0100es\u2531\u2533;\u698bl\u0100du\u2539\u253b;\u698f;\u698d\u0200aeuy\u2546\u254b\u2556\u2558ron;\u413e\u0100di\u2550\u2554il;\u413c\xec\u08b0\xe2\u2529;\u443b\u0200cqrs\u2563\u2566\u256d\u257da;\u6936uo\u0100;r\u0e19\u1746\u0100du\u2572\u2577har;\u6967shar;\u694bh;\u61b2\u0280;fgqs\u258b\u258c\u0989\u25f3\u25ff\u6264t\u0280ahlrt\u2598\u25a4\u25b7\u25c2\u25e8rrow\u0100;t\u0899\u25a1a\xe9\u24f6arpoon\u0100du\u25af\u25b4own\xbb\u045ap\xbb\u0966eftarrows;\u61c7ight\u0180ahs\u25cd\u25d6\u25derrow\u0100;s\u08f4\u08a7arpoon\xf3\u0f98quigarro\xf7\u21f0hreetimes;\u62cb\u0180;qs\u258b\u0993\u25falan\xf4\u09ac\u0280;cdgs\u09ac\u260a\u260d\u261d\u2628c;\u6aa8ot\u0100;o\u2614\u2615\u6a7f\u0100;r\u261a\u261b\u6a81;\u6a83\u0100;e\u2622\u2625\uc000\u22da\ufe00s;\u6a93\u0280adegs\u2633\u2639\u263d\u2649\u264bppro\xf8\u24c6ot;\u62d6q\u0100gq\u2643\u2645\xf4\u0989gt\xf2\u248c\xf4\u099bi\xed\u09b2\u0180ilr\u2655\u08e1\u265asht;\u697c;\uc000\ud835\udd29\u0100;E\u099c\u2663;\u6a91\u0161\u2669\u2676r\u0100du\u25b2\u266e\u0100;l\u0965\u2673;\u696alk;\u6584cy;\u4459\u0280;acht\u0a48\u2688\u268b\u2691\u2696r\xf2\u25c1orne\xf2\u1d08ard;\u696bri;\u65fa\u0100io\u269f\u26a4dot;\u4140ust\u0100;a\u26ac\u26ad\u63b0che\xbb\u26ad\u0200Eaes\u26bb\u26bd\u26c9\u26d4;\u6268p\u0100;p\u26c3\u26c4\u6a89rox\xbb\u26c4\u0100;q\u26ce\u26cf\u6a87\u0100;q\u26ce\u26bbim;\u62e6\u0400abnoptwz\u26e9\u26f4\u26f7\u271a\u272f\u2741\u2747\u2750\u0100nr\u26ee\u26f1g;\u67ecr;\u61fdr\xeb\u08c1g\u0180lmr\u26ff\u270d\u2714eft\u0100ar\u09e6\u2707ight\xe1\u09f2apsto;\u67fcight\xe1\u09fdparrow\u0100lr\u2725\u2729ef\xf4\u24edight;\u61ac\u0180afl\u2736\u2739\u273dr;\u6985;\uc000\ud835\udd5dus;\u6a2dimes;\u6a34\u0161\u274b\u274fst;\u6217\xe1\u134e\u0180;ef\u2757\u2758\u1800\u65cange\xbb\u2758ar\u0100;l\u2764\u2765\u4028t;\u6993\u0280achmt\u2773\u2776\u277c\u2785\u2787r\xf2\u08a8orne\xf2\u1d8car\u0100;d\u0f98\u2783;\u696d;\u600eri;\u62bf\u0300achiqt\u2798\u279d\u0a40\u27a2\u27ae\u27bbquo;\u6039r;\uc000\ud835\udcc1m\u0180;eg\u09b2\u27aa\u27ac;\u6a8d;\u6a8f\u0100bu\u252a\u27b3o\u0100;r\u0e1f\u27b9;\u601arok;\u4142\u8400<;cdhilqr\u082b\u27d2\u2639\u27dc\u27e0\u27e5\u27ea\u27f0\u0100ci\u27d7\u27d9;\u6aa6r;\u6a79re\xe5\u25f2mes;\u62c9arr;\u6976uest;\u6a7b\u0100Pi\u27f5\u27f9ar;\u6996\u0180;ef\u2800\u092d\u181b\u65c3r\u0100du\u2807\u280dshar;\u694ahar;\u6966\u0100en\u2817\u2821rtneqq;\uc000\u2268\ufe00\xc5\u281e\u0700Dacdefhilnopsu\u2840\u2845\u2882\u288e\u2893\u28a0\u28a5\u28a8\u28da\u28e2\u28e4\u0a83\u28f3\u2902Dot;\u623a\u0200clpr\u284e\u2852\u2863\u287dr\u803b\xaf\u40af\u0100et\u2857\u2859;\u6642\u0100;e\u285e\u285f\u6720se\xbb\u285f\u0100;s\u103b\u2868to\u0200;dlu\u103b\u2873\u2877\u287bow\xee\u048cef\xf4\u090f\xf0\u13d1ker;\u65ae\u0100oy\u2887\u288cmma;\u6a29;\u443cash;\u6014asuredangle\xbb\u1626r;\uc000\ud835\udd2ao;\u6127\u0180cdn\u28af\u28b4\u28c9ro\u803b\xb5\u40b5\u0200;acd\u1464\u28bd\u28c0\u28c4s\xf4\u16a7ir;\u6af0ot\u80bb\xb7\u01b5us\u0180;bd\u28d2\u1903\u28d3\u6212\u0100;u\u1d3c\u28d8;\u6a2a\u0163\u28de\u28e1p;\u6adb\xf2\u2212\xf0\u0a81\u0100dp\u28e9\u28eeels;\u62a7f;\uc000\ud835\udd5e\u0100ct\u28f8\u28fdr;\uc000\ud835\udcc2pos\xbb\u159d\u0180;lm\u2909\u290a\u290d\u43bctimap;\u62b8\u0c00GLRVabcdefghijlmoprstuvw\u2942\u2953\u297e\u2989\u2998\u29da\u29e9\u2a15\u2a1a\u2a58\u2a5d\u2a83\u2a95\u2aa4\u2aa8\u2b04\u2b07\u2b44\u2b7f\u2bae\u2c34\u2c67\u2c7c\u2ce9\u0100gt\u2947\u294b;\uc000\u22d9\u0338\u0100;v\u2950\u0bcf\uc000\u226b\u20d2\u0180elt\u295a\u2972\u2976ft\u0100ar\u2961\u2967rrow;\u61cdightarrow;\u61ce;\uc000\u22d8\u0338\u0100;v\u297b\u0c47\uc000\u226a\u20d2ightarrow;\u61cf\u0100Dd\u298e\u2993ash;\u62afash;\u62ae\u0280bcnpt\u29a3\u29a7\u29ac\u29b1\u29ccla\xbb\u02deute;\u4144g;\uc000\u2220\u20d2\u0280;Eiop\u0d84\u29bc\u29c0\u29c5\u29c8;\uc000\u2a70\u0338d;\uc000\u224b\u0338s;\u4149ro\xf8\u0d84ur\u0100;a\u29d3\u29d4\u666el\u0100;s\u29d3\u0b38\u01f3\u29df\0\u29e3p\u80bb\xa0\u0b37mp\u0100;e\u0bf9\u0c00\u0280aeouy\u29f4\u29fe\u2a03\u2a10\u2a13\u01f0\u29f9\0\u29fb;\u6a43on;\u4148dil;\u4146ng\u0100;d\u0d7e\u2a0aot;\uc000\u2a6d\u0338p;\u6a42;\u443dash;\u6013\u0380;Aadqsx\u0b92\u2a29\u2a2d\u2a3b\u2a41\u2a45\u2a50rr;\u61d7r\u0100hr\u2a33\u2a36k;\u6924\u0100;o\u13f2\u13f0ot;\uc000\u2250\u0338ui\xf6\u0b63\u0100ei\u2a4a\u2a4ear;\u6928\xed\u0b98ist\u0100;s\u0ba0\u0b9fr;\uc000\ud835\udd2b\u0200Eest\u0bc5\u2a66\u2a79\u2a7c\u0180;qs\u0bbc\u2a6d\u0be1\u0180;qs\u0bbc\u0bc5\u2a74lan\xf4\u0be2i\xed\u0bea\u0100;r\u0bb6\u2a81\xbb\u0bb7\u0180Aap\u2a8a\u2a8d\u2a91r\xf2\u2971rr;\u61aear;\u6af2\u0180;sv\u0f8d\u2a9c\u0f8c\u0100;d\u2aa1\u2aa2\u62fc;\u62facy;\u445a\u0380AEadest\u2ab7\u2aba\u2abe\u2ac2\u2ac5\u2af6\u2af9r\xf2\u2966;\uc000\u2266\u0338rr;\u619ar;\u6025\u0200;fqs\u0c3b\u2ace\u2ae3\u2aeft\u0100ar\u2ad4\u2ad9rro\xf7\u2ac1ightarro\xf7\u2a90\u0180;qs\u0c3b\u2aba\u2aealan\xf4\u0c55\u0100;s\u0c55\u2af4\xbb\u0c36i\xed\u0c5d\u0100;r\u0c35\u2afei\u0100;e\u0c1a\u0c25i\xe4\u0d90\u0100pt\u2b0c\u2b11f;\uc000\ud835\udd5f\u8180\xac;in\u2b19\u2b1a\u2b36\u40acn\u0200;Edv\u0b89\u2b24\u2b28\u2b2e;\uc000\u22f9\u0338ot;\uc000\u22f5\u0338\u01e1\u0b89\u2b33\u2b35;\u62f7;\u62f6i\u0100;v\u0cb8\u2b3c\u01e1\u0cb8\u2b41\u2b43;\u62fe;\u62fd\u0180aor\u2b4b\u2b63\u2b69r\u0200;ast\u0b7b\u2b55\u2b5a\u2b5flle\xec\u0b7bl;\uc000\u2afd\u20e5;\uc000\u2202\u0338lint;\u6a14\u0180;ce\u0c92\u2b70\u2b73u\xe5\u0ca5\u0100;c\u0c98\u2b78\u0100;e\u0c92\u2b7d\xf1\u0c98\u0200Aait\u2b88\u2b8b\u2b9d\u2ba7r\xf2\u2988rr\u0180;cw\u2b94\u2b95\u2b99\u619b;\uc000\u2933\u0338;\uc000\u219d\u0338ghtarrow\xbb\u2b95ri\u0100;e\u0ccb\u0cd6\u0380chimpqu\u2bbd\u2bcd\u2bd9\u2b04\u0b78\u2be4\u2bef\u0200;cer\u0d32\u2bc6\u0d37\u2bc9u\xe5\u0d45;\uc000\ud835\udcc3ort\u026d\u2b05\0\0\u2bd6ar\xe1\u2b56m\u0100;e\u0d6e\u2bdf\u0100;q\u0d74\u0d73su\u0100bp\u2beb\u2bed\xe5\u0cf8\xe5\u0d0b\u0180bcp\u2bf6\u2c11\u2c19\u0200;Ees\u2bff\u2c00\u0d22\u2c04\u6284;\uc000\u2ac5\u0338et\u0100;e\u0d1b\u2c0bq\u0100;q\u0d23\u2c00c\u0100;e\u0d32\u2c17\xf1\u0d38\u0200;Ees\u2c22\u2c23\u0d5f\u2c27\u6285;\uc000\u2ac6\u0338et\u0100;e\u0d58\u2c2eq\u0100;q\u0d60\u2c23\u0200gilr\u2c3d\u2c3f\u2c45\u2c47\xec\u0bd7lde\u803b\xf1\u40f1\xe7\u0c43iangle\u0100lr\u2c52\u2c5ceft\u0100;e\u0c1a\u2c5a\xf1\u0c26ight\u0100;e\u0ccb\u2c65\xf1\u0cd7\u0100;m\u2c6c\u2c6d\u43bd\u0180;es\u2c74\u2c75\u2c79\u4023ro;\u6116p;\u6007\u0480DHadgilrs\u2c8f\u2c94\u2c99\u2c9e\u2ca3\u2cb0\u2cb6\u2cd3\u2ce3ash;\u62adarr;\u6904p;\uc000\u224d\u20d2ash;\u62ac\u0100et\u2ca8\u2cac;\uc000\u2265\u20d2;\uc000>\u20d2nfin;\u69de\u0180Aet\u2cbd\u2cc1\u2cc5rr;\u6902;\uc000\u2264\u20d2\u0100;r\u2cca\u2ccd\uc000<\u20d2ie;\uc000\u22b4\u20d2\u0100At\u2cd8\u2cdcrr;\u6903rie;\uc000\u22b5\u20d2im;\uc000\u223c\u20d2\u0180Aan\u2cf0\u2cf4\u2d02rr;\u61d6r\u0100hr\u2cfa\u2cfdk;\u6923\u0100;o\u13e7\u13e5ear;\u6927\u1253\u1a95\0\0\0\0\0\0\0\0\0\0\0\0\0\u2d2d\0\u2d38\u2d48\u2d60\u2d65\u2d72\u2d84\u1b07\0\0\u2d8d\u2dab\0\u2dc8\u2dce\0\u2ddc\u2e19\u2e2b\u2e3e\u2e43\u0100cs\u2d31\u1a97ute\u803b\xf3\u40f3\u0100iy\u2d3c\u2d45r\u0100;c\u1a9e\u2d42\u803b\xf4\u40f4;\u443e\u0280abios\u1aa0\u2d52\u2d57\u01c8\u2d5alac;\u4151v;\u6a38old;\u69bclig;\u4153\u0100cr\u2d69\u2d6dir;\u69bf;\uc000\ud835\udd2c\u036f\u2d79\0\0\u2d7c\0\u2d82n;\u42dbave\u803b\xf2\u40f2;\u69c1\u0100bm\u2d88\u0df4ar;\u69b5\u0200acit\u2d95\u2d98\u2da5\u2da8r\xf2\u1a80\u0100ir\u2d9d\u2da0r;\u69beoss;\u69bbn\xe5\u0e52;\u69c0\u0180aei\u2db1\u2db5\u2db9cr;\u414dga;\u43c9\u0180cdn\u2dc0\u2dc5\u01cdron;\u43bf;\u69b6pf;\uc000\ud835\udd60\u0180ael\u2dd4\u2dd7\u01d2r;\u69b7rp;\u69b9\u0380;adiosv\u2dea\u2deb\u2dee\u2e08\u2e0d\u2e10\u2e16\u6228r\xf2\u1a86\u0200;efm\u2df7\u2df8\u2e02\u2e05\u6a5dr\u0100;o\u2dfe\u2dff\u6134f\xbb\u2dff\u803b\xaa\u40aa\u803b\xba\u40bagof;\u62b6r;\u6a56lope;\u6a57;\u6a5b\u0180clo\u2e1f\u2e21\u2e27\xf2\u2e01ash\u803b\xf8\u40f8l;\u6298i\u016c\u2e2f\u2e34de\u803b\xf5\u40f5es\u0100;a\u01db\u2e3as;\u6a36ml\u803b\xf6\u40f6bar;\u633d\u0ae1\u2e5e\0\u2e7d\0\u2e80\u2e9d\0\u2ea2\u2eb9\0\0\u2ecb\u0e9c\0\u2f13\0\0\u2f2b\u2fbc\0\u2fc8r\u0200;ast\u0403\u2e67\u2e72\u0e85\u8100\xb6;l\u2e6d\u2e6e\u40b6le\xec\u0403\u0269\u2e78\0\0\u2e7bm;\u6af3;\u6afdy;\u443fr\u0280cimpt\u2e8b\u2e8f\u2e93\u1865\u2e97nt;\u4025od;\u402eil;\u6030enk;\u6031r;\uc000\ud835\udd2d\u0180imo\u2ea8\u2eb0\u2eb4\u0100;v\u2ead\u2eae\u43c6;\u43d5ma\xf4\u0a76ne;\u660e\u0180;tv\u2ebf\u2ec0\u2ec8\u43c0chfork\xbb\u1ffd;\u43d6\u0100au\u2ecf\u2edfn\u0100ck\u2ed5\u2eddk\u0100;h\u21f4\u2edb;\u610e\xf6\u21f4s\u0480;abcdemst\u2ef3\u2ef4\u1908\u2ef9\u2efd\u2f04\u2f06\u2f0a\u2f0e\u402bcir;\u6a23ir;\u6a22\u0100ou\u1d40\u2f02;\u6a25;\u6a72n\u80bb\xb1\u0e9dim;\u6a26wo;\u6a27\u0180ipu\u2f19\u2f20\u2f25ntint;\u6a15f;\uc000\ud835\udd61nd\u803b\xa3\u40a3\u0500;Eaceinosu\u0ec8\u2f3f\u2f41\u2f44\u2f47\u2f81\u2f89\u2f92\u2f7e\u2fb6;\u6ab3p;\u6ab7u\xe5\u0ed9\u0100;c\u0ece\u2f4c\u0300;acens\u0ec8\u2f59\u2f5f\u2f66\u2f68\u2f7eppro\xf8\u2f43urlye\xf1\u0ed9\xf1\u0ece\u0180aes\u2f6f\u2f76\u2f7approx;\u6ab9qq;\u6ab5im;\u62e8i\xed\u0edfme\u0100;s\u2f88\u0eae\u6032\u0180Eas\u2f78\u2f90\u2f7a\xf0\u2f75\u0180dfp\u0eec\u2f99\u2faf\u0180als\u2fa0\u2fa5\u2faalar;\u632eine;\u6312urf;\u6313\u0100;t\u0efb\u2fb4\xef\u0efbrel;\u62b0\u0100ci\u2fc0\u2fc5r;\uc000\ud835\udcc5;\u43c8ncsp;\u6008\u0300fiopsu\u2fda\u22e2\u2fdf\u2fe5\u2feb\u2ff1r;\uc000\ud835\udd2epf;\uc000\ud835\udd62rime;\u6057cr;\uc000\ud835\udcc6\u0180aeo\u2ff8\u3009\u3013t\u0100ei\u2ffe\u3005rnion\xf3\u06b0nt;\u6a16st\u0100;e\u3010\u3011\u403f\xf1\u1f19\xf4\u0f14\u0a80ABHabcdefhilmnoprstux\u3040\u3051\u3055\u3059\u30e0\u310e\u312b\u3147\u3162\u3172\u318e\u3206\u3215\u3224\u3229\u3258\u326e\u3272\u3290\u32b0\u32b7\u0180art\u3047\u304a\u304cr\xf2\u10b3\xf2\u03ddail;\u691car\xf2\u1c65ar;\u6964\u0380cdenqrt\u3068\u3075\u3078\u307f\u308f\u3094\u30cc\u0100eu\u306d\u3071;\uc000\u223d\u0331te;\u4155i\xe3\u116emptyv;\u69b3g\u0200;del\u0fd1\u3089\u308b\u308d;\u6992;\u69a5\xe5\u0fd1uo\u803b\xbb\u40bbr\u0580;abcfhlpstw\u0fdc\u30ac\u30af\u30b7\u30b9\u30bc\u30be\u30c0\u30c3\u30c7\u30cap;\u6975\u0100;f\u0fe0\u30b4s;\u6920;\u6933s;\u691e\xeb\u225d\xf0\u272el;\u6945im;\u6974l;\u61a3;\u619d\u0100ai\u30d1\u30d5il;\u691ao\u0100;n\u30db\u30dc\u6236al\xf3\u0f1e\u0180abr\u30e7\u30ea\u30eer\xf2\u17e5rk;\u6773\u0100ak\u30f3\u30fdc\u0100ek\u30f9\u30fb;\u407d;\u405d\u0100es\u3102\u3104;\u698cl\u0100du\u310a\u310c;\u698e;\u6990\u0200aeuy\u3117\u311c\u3127\u3129ron;\u4159\u0100di\u3121\u3125il;\u4157\xec\u0ff2\xe2\u30fa;\u4440\u0200clqs\u3134\u3137\u313d\u3144a;\u6937dhar;\u6969uo\u0100;r\u020e\u020dh;\u61b3\u0180acg\u314e\u315f\u0f44l\u0200;ips\u0f78\u3158\u315b\u109cn\xe5\u10bbar\xf4\u0fa9t;\u65ad\u0180ilr\u3169\u1023\u316esht;\u697d;\uc000\ud835\udd2f\u0100ao\u3177\u3186r\u0100du\u317d\u317f\xbb\u047b\u0100;l\u1091\u3184;\u696c\u0100;v\u318b\u318c\u43c1;\u43f1\u0180gns\u3195\u31f9\u31fcht\u0300ahlrst\u31a4\u31b0\u31c2\u31d8\u31e4\u31eerrow\u0100;t\u0fdc\u31ada\xe9\u30c8arpoon\u0100du\u31bb\u31bfow\xee\u317ep\xbb\u1092eft\u0100ah\u31ca\u31d0rrow\xf3\u0feaarpoon\xf3\u0551ightarrows;\u61c9quigarro\xf7\u30cbhreetimes;\u62ccg;\u42daingdotse\xf1\u1f32\u0180ahm\u320d\u3210\u3213r\xf2\u0feaa\xf2\u0551;\u600foust\u0100;a\u321e\u321f\u63b1che\xbb\u321fmid;\u6aee\u0200abpt\u3232\u323d\u3240\u3252\u0100nr\u3237\u323ag;\u67edr;\u61fer\xeb\u1003\u0180afl\u3247\u324a\u324er;\u6986;\uc000\ud835\udd63us;\u6a2eimes;\u6a35\u0100ap\u325d\u3267r\u0100;g\u3263\u3264\u4029t;\u6994olint;\u6a12ar\xf2\u31e3\u0200achq\u327b\u3280\u10bc\u3285quo;\u603ar;\uc000\ud835\udcc7\u0100bu\u30fb\u328ao\u0100;r\u0214\u0213\u0180hir\u3297\u329b\u32a0re\xe5\u31f8mes;\u62cai\u0200;efl\u32aa\u1059\u1821\u32ab\u65b9tri;\u69celuhar;\u6968;\u611e\u0d61\u32d5\u32db\u32df\u332c\u3338\u3371\0\u337a\u33a4\0\0\u33ec\u33f0\0\u3428\u3448\u345a\u34ad\u34b1\u34ca\u34f1\0\u3616\0\0\u3633cute;\u415bqu\xef\u27ba\u0500;Eaceinpsy\u11ed\u32f3\u32f5\u32ff\u3302\u330b\u330f\u331f\u3326\u3329;\u6ab4\u01f0\u32fa\0\u32fc;\u6ab8on;\u4161u\xe5\u11fe\u0100;d\u11f3\u3307il;\u415frc;\u415d\u0180Eas\u3316\u3318\u331b;\u6ab6p;\u6abaim;\u62e9olint;\u6a13i\xed\u1204;\u4441ot\u0180;be\u3334\u1d47\u3335\u62c5;\u6a66\u0380Aacmstx\u3346\u334a\u3357\u335b\u335e\u3363\u336drr;\u61d8r\u0100hr\u3350\u3352\xeb\u2228\u0100;o\u0a36\u0a34t\u803b\xa7\u40a7i;\u403bwar;\u6929m\u0100in\u3369\xf0nu\xf3\xf1t;\u6736r\u0100;o\u3376\u2055\uc000\ud835\udd30\u0200acoy\u3382\u3386\u3391\u33a0rp;\u666f\u0100hy\u338b\u338fcy;\u4449;\u4448rt\u026d\u3399\0\0\u339ci\xe4\u1464ara\xec\u2e6f\u803b\xad\u40ad\u0100gm\u33a8\u33b4ma\u0180;fv\u33b1\u33b2\u33b2\u43c3;\u43c2\u0400;deglnpr\u12ab\u33c5\u33c9\u33ce\u33d6\u33de\u33e1\u33e6ot;\u6a6a\u0100;q\u12b1\u12b0\u0100;E\u33d3\u33d4\u6a9e;\u6aa0\u0100;E\u33db\u33dc\u6a9d;\u6a9fe;\u6246lus;\u6a24arr;\u6972ar\xf2\u113d\u0200aeit\u33f8\u3408\u340f\u3417\u0100ls\u33fd\u3404lsetm\xe9\u336ahp;\u6a33parsl;\u69e4\u0100dl\u1463\u3414e;\u6323\u0100;e\u341c\u341d\u6aaa\u0100;s\u3422\u3423\u6aac;\uc000\u2aac\ufe00\u0180flp\u342e\u3433\u3442tcy;\u444c\u0100;b\u3438\u3439\u402f\u0100;a\u343e\u343f\u69c4r;\u633ff;\uc000\ud835\udd64a\u0100dr\u344d\u0402es\u0100;u\u3454\u3455\u6660it\xbb\u3455\u0180csu\u3460\u3479\u349f\u0100au\u3465\u346fp\u0100;s\u1188\u346b;\uc000\u2293\ufe00p\u0100;s\u11b4\u3475;\uc000\u2294\ufe00u\u0100bp\u347f\u348f\u0180;es\u1197\u119c\u3486et\u0100;e\u1197\u348d\xf1\u119d\u0180;es\u11a8\u11ad\u3496et\u0100;e\u11a8\u349d\xf1\u11ae\u0180;af\u117b\u34a6\u05b0r\u0165\u34ab\u05b1\xbb\u117car\xf2\u1148\u0200cemt\u34b9\u34be\u34c2\u34c5r;\uc000\ud835\udcc8tm\xee\xf1i\xec\u3415ar\xe6\u11be\u0100ar\u34ce\u34d5r\u0100;f\u34d4\u17bf\u6606\u0100an\u34da\u34edight\u0100ep\u34e3\u34eapsilo\xee\u1ee0h\xe9\u2eafs\xbb\u2852\u0280bcmnp\u34fb\u355e\u1209\u358b\u358e\u0480;Edemnprs\u350e\u350f\u3511\u3515\u351e\u3523\u352c\u3531\u3536\u6282;\u6ac5ot;\u6abd\u0100;d\u11da\u351aot;\u6ac3ult;\u6ac1\u0100Ee\u3528\u352a;\u6acb;\u628alus;\u6abfarr;\u6979\u0180eiu\u353d\u3552\u3555t\u0180;en\u350e\u3545\u354bq\u0100;q\u11da\u350feq\u0100;q\u352b\u3528m;\u6ac7\u0100bp\u355a\u355c;\u6ad5;\u6ad3c\u0300;acens\u11ed\u356c\u3572\u3579\u357b\u3326ppro\xf8\u32faurlye\xf1\u11fe\xf1\u11f3\u0180aes\u3582\u3588\u331bppro\xf8\u331aq\xf1\u3317g;\u666a\u0680123;Edehlmnps\u35a9\u35ac\u35af\u121c\u35b2\u35b4\u35c0\u35c9\u35d5\u35da\u35df\u35e8\u35ed\u803b\xb9\u40b9\u803b\xb2\u40b2\u803b\xb3\u40b3;\u6ac6\u0100os\u35b9\u35bct;\u6abeub;\u6ad8\u0100;d\u1222\u35c5ot;\u6ac4s\u0100ou\u35cf\u35d2l;\u67c9b;\u6ad7arr;\u697bult;\u6ac2\u0100Ee\u35e4\u35e6;\u6acc;\u628blus;\u6ac0\u0180eiu\u35f4\u3609\u360ct\u0180;en\u121c\u35fc\u3602q\u0100;q\u1222\u35b2eq\u0100;q\u35e7\u35e4m;\u6ac8\u0100bp\u3611\u3613;\u6ad4;\u6ad6\u0180Aan\u361c\u3620\u362drr;\u61d9r\u0100hr\u3626\u3628\xeb\u222e\u0100;o\u0a2b\u0a29war;\u692alig\u803b\xdf\u40df\u0be1\u3651\u365d\u3660\u12ce\u3673\u3679\0\u367e\u36c2\0\0\0\0\0\u36db\u3703\0\u3709\u376c\0\0\0\u3787\u0272\u3656\0\0\u365bget;\u6316;\u43c4r\xeb\u0e5f\u0180aey\u3666\u366b\u3670ron;\u4165dil;\u4163;\u4442lrec;\u6315r;\uc000\ud835\udd31\u0200eiko\u3686\u369d\u36b5\u36bc\u01f2\u368b\0\u3691e\u01004f\u1284\u1281a\u0180;sv\u3698\u3699\u369b\u43b8ym;\u43d1\u0100cn\u36a2\u36b2k\u0100as\u36a8\u36aeppro\xf8\u12c1im\xbb\u12acs\xf0\u129e\u0100as\u36ba\u36ae\xf0\u12c1rn\u803b\xfe\u40fe\u01ec\u031f\u36c6\u22e7es\u8180\xd7;bd\u36cf\u36d0\u36d8\u40d7\u0100;a\u190f\u36d5r;\u6a31;\u6a30\u0180eps\u36e1\u36e3\u3700\xe1\u2a4d\u0200;bcf\u0486\u36ec\u36f0\u36f4ot;\u6336ir;\u6af1\u0100;o\u36f9\u36fc\uc000\ud835\udd65rk;\u6ada\xe1\u3362rime;\u6034\u0180aip\u370f\u3712\u3764d\xe5\u1248\u0380adempst\u3721\u374d\u3740\u3751\u3757\u375c\u375fngle\u0280;dlqr\u3730\u3731\u3736\u3740\u3742\u65b5own\xbb\u1dbbeft\u0100;e\u2800\u373e\xf1\u092e;\u625cight\u0100;e\u32aa\u374b\xf1\u105aot;\u65ecinus;\u6a3alus;\u6a39b;\u69cdime;\u6a3bezium;\u63e2\u0180cht\u3772\u377d\u3781\u0100ry\u3777\u377b;\uc000\ud835\udcc9;\u4446cy;\u445brok;\u4167\u0100io\u378b\u378ex\xf4\u1777head\u0100lr\u3797\u37a0eftarro\xf7\u084fightarrow\xbb\u0f5d\u0900AHabcdfghlmoprstuw\u37d0\u37d3\u37d7\u37e4\u37f0\u37fc\u380e\u381c\u3823\u3834\u3851\u385d\u386b\u38a9\u38cc\u38d2\u38ea\u38f6r\xf2\u03edar;\u6963\u0100cr\u37dc\u37e2ute\u803b\xfa\u40fa\xf2\u1150r\u01e3\u37ea\0\u37edy;\u445eve;\u416d\u0100iy\u37f5\u37farc\u803b\xfb\u40fb;\u4443\u0180abh\u3803\u3806\u380br\xf2\u13adlac;\u4171a\xf2\u13c3\u0100ir\u3813\u3818sht;\u697e;\uc000\ud835\udd32rave\u803b\xf9\u40f9\u0161\u3827\u3831r\u0100lr\u382c\u382e\xbb\u0957\xbb\u1083lk;\u6580\u0100ct\u3839\u384d\u026f\u383f\0\0\u384arn\u0100;e\u3845\u3846\u631cr\xbb\u3846op;\u630fri;\u65f8\u0100al\u3856\u385acr;\u416b\u80bb\xa8\u0349\u0100gp\u3862\u3866on;\u4173f;\uc000\ud835\udd66\u0300adhlsu\u114b\u3878\u387d\u1372\u3891\u38a0own\xe1\u13b3arpoon\u0100lr\u3888\u388cef\xf4\u382digh\xf4\u382fi\u0180;hl\u3899\u389a\u389c\u43c5\xbb\u13faon\xbb\u389aparrows;\u61c8\u0180cit\u38b0\u38c4\u38c8\u026f\u38b6\0\0\u38c1rn\u0100;e\u38bc\u38bd\u631dr\xbb\u38bdop;\u630eng;\u416fri;\u65f9cr;\uc000\ud835\udcca\u0180dir\u38d9\u38dd\u38e2ot;\u62f0lde;\u4169i\u0100;f\u3730\u38e8\xbb\u1813\u0100am\u38ef\u38f2r\xf2\u38a8l\u803b\xfc\u40fcangle;\u69a7\u0780ABDacdeflnoprsz\u391c\u391f\u3929\u392d\u39b5\u39b8\u39bd\u39df\u39e4\u39e8\u39f3\u39f9\u39fd\u3a01\u3a20r\xf2\u03f7ar\u0100;v\u3926\u3927\u6ae8;\u6ae9as\xe8\u03e1\u0100nr\u3932\u3937grt;\u699c\u0380eknprst\u34e3\u3946\u394b\u3952\u395d\u3964\u3996app\xe1\u2415othin\xe7\u1e96\u0180hir\u34eb\u2ec8\u3959op\xf4\u2fb5\u0100;h\u13b7\u3962\xef\u318d\u0100iu\u3969\u396dgm\xe1\u33b3\u0100bp\u3972\u3984setneq\u0100;q\u397d\u3980\uc000\u228a\ufe00;\uc000\u2acb\ufe00setneq\u0100;q\u398f\u3992\uc000\u228b\ufe00;\uc000\u2acc\ufe00\u0100hr\u399b\u399fet\xe1\u369ciangle\u0100lr\u39aa\u39afeft\xbb\u0925ight\xbb\u1051y;\u4432ash\xbb\u1036\u0180elr\u39c4\u39d2\u39d7\u0180;be\u2dea\u39cb\u39cfar;\u62bbq;\u625alip;\u62ee\u0100bt\u39dc\u1468a\xf2\u1469r;\uc000\ud835\udd33tr\xe9\u39aesu\u0100bp\u39ef\u39f1\xbb\u0d1c\xbb\u0d59pf;\uc000\ud835\udd67ro\xf0\u0efbtr\xe9\u39b4\u0100cu\u3a06\u3a0br;\uc000\ud835\udccb\u0100bp\u3a10\u3a18n\u0100Ee\u3980\u3a16\xbb\u397en\u0100Ee\u3992\u3a1e\xbb\u3990igzag;\u699a\u0380cefoprs\u3a36\u3a3b\u3a56\u3a5b\u3a54\u3a61\u3a6airc;\u4175\u0100di\u3a40\u3a51\u0100bg\u3a45\u3a49ar;\u6a5fe\u0100;q\u15fa\u3a4f;\u6259erp;\u6118r;\uc000\ud835\udd34pf;\uc000\ud835\udd68\u0100;e\u1479\u3a66at\xe8\u1479cr;\uc000\ud835\udccc\u0ae3\u178e\u3a87\0\u3a8b\0\u3a90\u3a9b\0\0\u3a9d\u3aa8\u3aab\u3aaf\0\0\u3ac3\u3ace\0\u3ad8\u17dc\u17dftr\xe9\u17d1r;\uc000\ud835\udd35\u0100Aa\u3a94\u3a97r\xf2\u03c3r\xf2\u09f6;\u43be\u0100Aa\u3aa1\u3aa4r\xf2\u03b8r\xf2\u09eba\xf0\u2713is;\u62fb\u0180dpt\u17a4\u3ab5\u3abe\u0100fl\u3aba\u17a9;\uc000\ud835\udd69im\xe5\u17b2\u0100Aa\u3ac7\u3acar\xf2\u03cer\xf2\u0a01\u0100cq\u3ad2\u17b8r;\uc000\ud835\udccd\u0100pt\u17d6\u3adcr\xe9\u17d4\u0400acefiosu\u3af0\u3afd\u3b08\u3b0c\u3b11\u3b15\u3b1b\u3b21c\u0100uy\u3af6\u3afbte\u803b\xfd\u40fd;\u444f\u0100iy\u3b02\u3b06rc;\u4177;\u444bn\u803b\xa5\u40a5r;\uc000\ud835\udd36cy;\u4457pf;\uc000\ud835\udd6acr;\uc000\ud835\udcce\u0100cm\u3b26\u3b29y;\u444el\u803b\xff\u40ff\u0500acdefhiosw\u3b42\u3b48\u3b54\u3b58\u3b64\u3b69\u3b6d\u3b74\u3b7a\u3b80cute;\u417a\u0100ay\u3b4d\u3b52ron;\u417e;\u4437ot;\u417c\u0100et\u3b5d\u3b61tr\xe6\u155fa;\u43b6r;\uc000\ud835\udd37cy;\u4436grarr;\u61ddpf;\uc000\ud835\udd6bcr;\uc000\ud835\udccf\u0100jn\u3b85\u3b87;\u600dj;\u600c"
    .split("")
    .map((c) => c.charCodeAt(0)));

// Generated using scripts/write-decode-map.ts
var xmlDecodeTree = new Uint16Array(
// prettier-ignore
"\u0200aglq\t\x15\x18\x1b\u026d\x0f\0\0\x12p;\u4026os;\u4027t;\u403et;\u403cuot;\u4022"
    .split("")
    .map((c) => c.charCodeAt(0)));

// Adapted from https://github.com/mathiasbynens/he/blob/36afe179392226cf1b6ccdb16ebbb7a5a844d93a/src/he.js#L106-L134
var _a$1;
const decodeMap = new Map([
    [0, 65533],
    // C1 Unicode control character reference replacements
    [128, 8364],
    [130, 8218],
    [131, 402],
    [132, 8222],
    [133, 8230],
    [134, 8224],
    [135, 8225],
    [136, 710],
    [137, 8240],
    [138, 352],
    [139, 8249],
    [140, 338],
    [142, 381],
    [145, 8216],
    [146, 8217],
    [147, 8220],
    [148, 8221],
    [149, 8226],
    [150, 8211],
    [151, 8212],
    [152, 732],
    [153, 8482],
    [154, 353],
    [155, 8250],
    [156, 339],
    [158, 382],
    [159, 376],
]);
/**
 * Polyfill for `String.fromCodePoint`. It is used to create a string from a Unicode code point.
 */
const fromCodePoint = 
// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
(_a$1 = String.fromCodePoint) !== null && _a$1 !== void 0 ? _a$1 : function (codePoint) {
    let output = "";
    if (codePoint > 0xffff) {
        codePoint -= 0x10000;
        output += String.fromCharCode(((codePoint >>> 10) & 0x3ff) | 0xd800);
        codePoint = 0xdc00 | (codePoint & 0x3ff);
    }
    output += String.fromCharCode(codePoint);
    return output;
};
/**
 * Replace the given code point with a replacement character if it is a
 * surrogate or is outside the valid range. Otherwise return the code
 * point unchanged.
 */
function replaceCodePoint(codePoint) {
    var _a;
    if ((codePoint >= 0xd800 && codePoint <= 0xdfff) || codePoint > 0x10ffff) {
        return 0xfffd;
    }
    return (_a = decodeMap.get(codePoint)) !== null && _a !== void 0 ? _a : codePoint;
}

var CharCodes$1;
(function (CharCodes) {
    CharCodes[CharCodes["NUM"] = 35] = "NUM";
    CharCodes[CharCodes["SEMI"] = 59] = "SEMI";
    CharCodes[CharCodes["EQUALS"] = 61] = "EQUALS";
    CharCodes[CharCodes["ZERO"] = 48] = "ZERO";
    CharCodes[CharCodes["NINE"] = 57] = "NINE";
    CharCodes[CharCodes["LOWER_A"] = 97] = "LOWER_A";
    CharCodes[CharCodes["LOWER_F"] = 102] = "LOWER_F";
    CharCodes[CharCodes["LOWER_X"] = 120] = "LOWER_X";
    CharCodes[CharCodes["LOWER_Z"] = 122] = "LOWER_Z";
    CharCodes[CharCodes["UPPER_A"] = 65] = "UPPER_A";
    CharCodes[CharCodes["UPPER_F"] = 70] = "UPPER_F";
    CharCodes[CharCodes["UPPER_Z"] = 90] = "UPPER_Z";
})(CharCodes$1 || (CharCodes$1 = {}));
/** Bit that needs to be set to convert an upper case ASCII character to lower case */
const TO_LOWER_BIT = 0b100000;
var BinTrieFlags;
(function (BinTrieFlags) {
    BinTrieFlags[BinTrieFlags["VALUE_LENGTH"] = 49152] = "VALUE_LENGTH";
    BinTrieFlags[BinTrieFlags["BRANCH_LENGTH"] = 16256] = "BRANCH_LENGTH";
    BinTrieFlags[BinTrieFlags["JUMP_TABLE"] = 127] = "JUMP_TABLE";
})(BinTrieFlags || (BinTrieFlags = {}));
function isNumber(code) {
    return code >= CharCodes$1.ZERO && code <= CharCodes$1.NINE;
}
function isHexadecimalCharacter(code) {
    return ((code >= CharCodes$1.UPPER_A && code <= CharCodes$1.UPPER_F) ||
        (code >= CharCodes$1.LOWER_A && code <= CharCodes$1.LOWER_F));
}
function isAsciiAlphaNumeric(code) {
    return ((code >= CharCodes$1.UPPER_A && code <= CharCodes$1.UPPER_Z) ||
        (code >= CharCodes$1.LOWER_A && code <= CharCodes$1.LOWER_Z) ||
        isNumber(code));
}
/**
 * Checks if the given character is a valid end character for an entity in an attribute.
 *
 * Attribute values that aren't terminated properly aren't parsed, and shouldn't lead to a parser error.
 * See the example in https://html.spec.whatwg.org/multipage/parsing.html#named-character-reference-state
 */
function isEntityInAttributeInvalidEnd(code) {
    return code === CharCodes$1.EQUALS || isAsciiAlphaNumeric(code);
}
var EntityDecoderState;
(function (EntityDecoderState) {
    EntityDecoderState[EntityDecoderState["EntityStart"] = 0] = "EntityStart";
    EntityDecoderState[EntityDecoderState["NumericStart"] = 1] = "NumericStart";
    EntityDecoderState[EntityDecoderState["NumericDecimal"] = 2] = "NumericDecimal";
    EntityDecoderState[EntityDecoderState["NumericHex"] = 3] = "NumericHex";
    EntityDecoderState[EntityDecoderState["NamedEntity"] = 4] = "NamedEntity";
})(EntityDecoderState || (EntityDecoderState = {}));
var DecodingMode;
(function (DecodingMode) {
    /** Entities in text nodes that can end with any character. */
    DecodingMode[DecodingMode["Legacy"] = 0] = "Legacy";
    /** Only allow entities terminated with a semicolon. */
    DecodingMode[DecodingMode["Strict"] = 1] = "Strict";
    /** Entities in attributes have limitations on ending characters. */
    DecodingMode[DecodingMode["Attribute"] = 2] = "Attribute";
})(DecodingMode || (DecodingMode = {}));
/**
 * Token decoder with support of writing partial entities.
 */
class EntityDecoder {
    constructor(
    /** The tree used to decode entities. */
    decodeTree, 
    /**
     * The function that is called when a codepoint is decoded.
     *
     * For multi-byte named entities, this will be called multiple times,
     * with the second codepoint, and the same `consumed` value.
     *
     * @param codepoint The decoded codepoint.
     * @param consumed The number of bytes consumed by the decoder.
     */
    emitCodePoint, 
    /** An object that is used to produce errors. */
    errors) {
        this.decodeTree = decodeTree;
        this.emitCodePoint = emitCodePoint;
        this.errors = errors;
        /** The current state of the decoder. */
        this.state = EntityDecoderState.EntityStart;
        /** Characters that were consumed while parsing an entity. */
        this.consumed = 1;
        /**
         * The result of the entity.
         *
         * Either the result index of a numeric entity, or the codepoint of a
         * numeric entity.
         */
        this.result = 0;
        /** The current index in the decode tree. */
        this.treeIndex = 0;
        /** The number of characters that were consumed in excess. */
        this.excess = 1;
        /** The mode in which the decoder is operating. */
        this.decodeMode = DecodingMode.Strict;
    }
    /** Resets the instance to make it reusable. */
    startEntity(decodeMode) {
        this.decodeMode = decodeMode;
        this.state = EntityDecoderState.EntityStart;
        this.result = 0;
        this.treeIndex = 0;
        this.excess = 1;
        this.consumed = 1;
    }
    /**
     * Write an entity to the decoder. This can be called multiple times with partial entities.
     * If the entity is incomplete, the decoder will return -1.
     *
     * Mirrors the implementation of `getDecoder`, but with the ability to stop decoding if the
     * entity is incomplete, and resume when the next string is written.
     *
     * @param string The string containing the entity (or a continuation of the entity).
     * @param offset The offset at which the entity begins. Should be 0 if this is not the first call.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */
    write(str, offset) {
        switch (this.state) {
            case EntityDecoderState.EntityStart: {
                if (str.charCodeAt(offset) === CharCodes$1.NUM) {
                    this.state = EntityDecoderState.NumericStart;
                    this.consumed += 1;
                    return this.stateNumericStart(str, offset + 1);
                }
                this.state = EntityDecoderState.NamedEntity;
                return this.stateNamedEntity(str, offset);
            }
            case EntityDecoderState.NumericStart: {
                return this.stateNumericStart(str, offset);
            }
            case EntityDecoderState.NumericDecimal: {
                return this.stateNumericDecimal(str, offset);
            }
            case EntityDecoderState.NumericHex: {
                return this.stateNumericHex(str, offset);
            }
            case EntityDecoderState.NamedEntity: {
                return this.stateNamedEntity(str, offset);
            }
        }
    }
    /**
     * Switches between the numeric decimal and hexadecimal states.
     *
     * Equivalent to the `Numeric character reference state` in the HTML spec.
     *
     * @param str The string containing the entity (or a continuation of the entity).
     * @param offset The current offset.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */
    stateNumericStart(str, offset) {
        if (offset >= str.length) {
            return -1;
        }
        if ((str.charCodeAt(offset) | TO_LOWER_BIT) === CharCodes$1.LOWER_X) {
            this.state = EntityDecoderState.NumericHex;
            this.consumed += 1;
            return this.stateNumericHex(str, offset + 1);
        }
        this.state = EntityDecoderState.NumericDecimal;
        return this.stateNumericDecimal(str, offset);
    }
    addToNumericResult(str, start, end, base) {
        if (start !== end) {
            const digitCount = end - start;
            this.result =
                this.result * Math.pow(base, digitCount) +
                    parseInt(str.substr(start, digitCount), base);
            this.consumed += digitCount;
        }
    }
    /**
     * Parses a hexadecimal numeric entity.
     *
     * Equivalent to the `Hexademical character reference state` in the HTML spec.
     *
     * @param str The string containing the entity (or a continuation of the entity).
     * @param offset The current offset.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */
    stateNumericHex(str, offset) {
        const startIdx = offset;
        while (offset < str.length) {
            const char = str.charCodeAt(offset);
            if (isNumber(char) || isHexadecimalCharacter(char)) {
                offset += 1;
            }
            else {
                this.addToNumericResult(str, startIdx, offset, 16);
                return this.emitNumericEntity(char, 3);
            }
        }
        this.addToNumericResult(str, startIdx, offset, 16);
        return -1;
    }
    /**
     * Parses a decimal numeric entity.
     *
     * Equivalent to the `Decimal character reference state` in the HTML spec.
     *
     * @param str The string containing the entity (or a continuation of the entity).
     * @param offset The current offset.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */
    stateNumericDecimal(str, offset) {
        const startIdx = offset;
        while (offset < str.length) {
            const char = str.charCodeAt(offset);
            if (isNumber(char)) {
                offset += 1;
            }
            else {
                this.addToNumericResult(str, startIdx, offset, 10);
                return this.emitNumericEntity(char, 2);
            }
        }
        this.addToNumericResult(str, startIdx, offset, 10);
        return -1;
    }
    /**
     * Validate and emit a numeric entity.
     *
     * Implements the logic from the `Hexademical character reference start
     * state` and `Numeric character reference end state` in the HTML spec.
     *
     * @param lastCp The last code point of the entity. Used to see if the
     *               entity was terminated with a semicolon.
     * @param expectedLength The minimum number of characters that should be
     *                       consumed. Used to validate that at least one digit
     *                       was consumed.
     * @returns The number of characters that were consumed.
     */
    emitNumericEntity(lastCp, expectedLength) {
        var _a;
        // Ensure we consumed at least one digit.
        if (this.consumed <= expectedLength) {
            (_a = this.errors) === null || _a === void 0 ? void 0 : _a.absenceOfDigitsInNumericCharacterReference(this.consumed);
            return 0;
        }
        // Figure out if this is a legit end of the entity
        if (lastCp === CharCodes$1.SEMI) {
            this.consumed += 1;
        }
        else if (this.decodeMode === DecodingMode.Strict) {
            return 0;
        }
        this.emitCodePoint(replaceCodePoint(this.result), this.consumed);
        if (this.errors) {
            if (lastCp !== CharCodes$1.SEMI) {
                this.errors.missingSemicolonAfterCharacterReference();
            }
            this.errors.validateNumericCharacterReference(this.result);
        }
        return this.consumed;
    }
    /**
     * Parses a named entity.
     *
     * Equivalent to the `Named character reference state` in the HTML spec.
     *
     * @param str The string containing the entity (or a continuation of the entity).
     * @param offset The current offset.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */
    stateNamedEntity(str, offset) {
        const { decodeTree } = this;
        let current = decodeTree[this.treeIndex];
        // The mask is the number of bytes of the value, including the current byte.
        let valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
        for (; offset < str.length; offset++, this.excess++) {
            const char = str.charCodeAt(offset);
            this.treeIndex = determineBranch(decodeTree, current, this.treeIndex + Math.max(1, valueLength), char);
            if (this.treeIndex < 0) {
                return this.result === 0 ||
                    // If we are parsing an attribute
                    (this.decodeMode === DecodingMode.Attribute &&
                        // We shouldn't have consumed any characters after the entity,
                        (valueLength === 0 ||
                            // And there should be no invalid characters.
                            isEntityInAttributeInvalidEnd(char)))
                    ? 0
                    : this.emitNotTerminatedNamedEntity();
            }
            current = decodeTree[this.treeIndex];
            valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
            // If the branch is a value, store it and continue
            if (valueLength !== 0) {
                // If the entity is terminated by a semicolon, we are done.
                if (char === CharCodes$1.SEMI) {
                    return this.emitNamedEntityData(this.treeIndex, valueLength, this.consumed + this.excess);
                }
                // If we encounter a non-terminated (legacy) entity while parsing strictly, then ignore it.
                if (this.decodeMode !== DecodingMode.Strict) {
                    this.result = this.treeIndex;
                    this.consumed += this.excess;
                    this.excess = 0;
                }
            }
        }
        return -1;
    }
    /**
     * Emit a named entity that was not terminated with a semicolon.
     *
     * @returns The number of characters consumed.
     */
    emitNotTerminatedNamedEntity() {
        var _a;
        const { result, decodeTree } = this;
        const valueLength = (decodeTree[result] & BinTrieFlags.VALUE_LENGTH) >> 14;
        this.emitNamedEntityData(result, valueLength, this.consumed);
        (_a = this.errors) === null || _a === void 0 ? void 0 : _a.missingSemicolonAfterCharacterReference();
        return this.consumed;
    }
    /**
     * Emit a named entity.
     *
     * @param result The index of the entity in the decode tree.
     * @param valueLength The number of bytes in the entity.
     * @param consumed The number of characters consumed.
     *
     * @returns The number of characters consumed.
     */
    emitNamedEntityData(result, valueLength, consumed) {
        const { decodeTree } = this;
        this.emitCodePoint(valueLength === 1
            ? decodeTree[result] & ~BinTrieFlags.VALUE_LENGTH
            : decodeTree[result + 1], consumed);
        if (valueLength === 3) {
            // For multi-byte values, we need to emit the second byte.
            this.emitCodePoint(decodeTree[result + 2], consumed);
        }
        return consumed;
    }
    /**
     * Signal to the parser that the end of the input was reached.
     *
     * Remaining data will be emitted and relevant errors will be produced.
     *
     * @returns The number of characters consumed.
     */
    end() {
        var _a;
        switch (this.state) {
            case EntityDecoderState.NamedEntity: {
                // Emit a named entity if we have one.
                return this.result !== 0 &&
                    (this.decodeMode !== DecodingMode.Attribute ||
                        this.result === this.treeIndex)
                    ? this.emitNotTerminatedNamedEntity()
                    : 0;
            }
            // Otherwise, emit a numeric entity if we have one.
            case EntityDecoderState.NumericDecimal: {
                return this.emitNumericEntity(0, 2);
            }
            case EntityDecoderState.NumericHex: {
                return this.emitNumericEntity(0, 3);
            }
            case EntityDecoderState.NumericStart: {
                (_a = this.errors) === null || _a === void 0 ? void 0 : _a.absenceOfDigitsInNumericCharacterReference(this.consumed);
                return 0;
            }
            case EntityDecoderState.EntityStart: {
                // Return 0 if we have no entity.
                return 0;
            }
        }
    }
}
/**
 * Creates a function that decodes entities in a string.
 *
 * @param decodeTree The decode tree.
 * @returns A function that decodes entities in a string.
 */
function getDecoder(decodeTree) {
    let ret = "";
    const decoder = new EntityDecoder(decodeTree, (str) => (ret += fromCodePoint(str)));
    return function decodeWithTrie(str, decodeMode) {
        let lastIndex = 0;
        let offset = 0;
        while ((offset = str.indexOf("&", offset)) >= 0) {
            ret += str.slice(lastIndex, offset);
            decoder.startEntity(decodeMode);
            const len = decoder.write(str, 
            // Skip the "&"
            offset + 1);
            if (len < 0) {
                lastIndex = offset + decoder.end();
                break;
            }
            lastIndex = offset + len;
            // If `len` is 0, skip the current `&` and continue.
            offset = len === 0 ? lastIndex + 1 : lastIndex;
        }
        const result = ret + str.slice(lastIndex);
        // Make sure we don't keep a reference to the final string.
        ret = "";
        return result;
    };
}
/**
 * Determines the branch of the current node that is taken given the current
 * character. This function is used to traverse the trie.
 *
 * @param decodeTree The trie.
 * @param current The current node.
 * @param nodeIdx The index right after the current node and its value.
 * @param char The current character.
 * @returns The index of the next node, or -1 if no branch is taken.
 */
function determineBranch(decodeTree, current, nodeIdx, char) {
    const branchCount = (current & BinTrieFlags.BRANCH_LENGTH) >> 7;
    const jumpOffset = current & BinTrieFlags.JUMP_TABLE;
    // Case 1: Single branch encoded in jump offset
    if (branchCount === 0) {
        return jumpOffset !== 0 && char === jumpOffset ? nodeIdx : -1;
    }
    // Case 2: Multiple branches encoded in jump table
    if (jumpOffset) {
        const value = char - jumpOffset;
        return value < 0 || value >= branchCount
            ? -1
            : decodeTree[nodeIdx + value] - 1;
    }
    // Case 3: Multiple branches encoded in dictionary
    // Binary search for the character.
    let lo = nodeIdx;
    let hi = lo + branchCount - 1;
    while (lo <= hi) {
        const mid = (lo + hi) >>> 1;
        const midVal = decodeTree[mid];
        if (midVal < char) {
            lo = mid + 1;
        }
        else if (midVal > char) {
            hi = mid - 1;
        }
        else {
            return decodeTree[mid + branchCount];
        }
    }
    return -1;
}
getDecoder(htmlDecodeTree);
getDecoder(xmlDecodeTree);

var CharCodes;
(function (CharCodes) {
    CharCodes[CharCodes["Tab"] = 9] = "Tab";
    CharCodes[CharCodes["NewLine"] = 10] = "NewLine";
    CharCodes[CharCodes["FormFeed"] = 12] = "FormFeed";
    CharCodes[CharCodes["CarriageReturn"] = 13] = "CarriageReturn";
    CharCodes[CharCodes["Space"] = 32] = "Space";
    CharCodes[CharCodes["ExclamationMark"] = 33] = "ExclamationMark";
    CharCodes[CharCodes["Number"] = 35] = "Number";
    CharCodes[CharCodes["Amp"] = 38] = "Amp";
    CharCodes[CharCodes["SingleQuote"] = 39] = "SingleQuote";
    CharCodes[CharCodes["DoubleQuote"] = 34] = "DoubleQuote";
    CharCodes[CharCodes["Dash"] = 45] = "Dash";
    CharCodes[CharCodes["Slash"] = 47] = "Slash";
    CharCodes[CharCodes["Zero"] = 48] = "Zero";
    CharCodes[CharCodes["Nine"] = 57] = "Nine";
    CharCodes[CharCodes["Semi"] = 59] = "Semi";
    CharCodes[CharCodes["Lt"] = 60] = "Lt";
    CharCodes[CharCodes["Eq"] = 61] = "Eq";
    CharCodes[CharCodes["Gt"] = 62] = "Gt";
    CharCodes[CharCodes["Questionmark"] = 63] = "Questionmark";
    CharCodes[CharCodes["UpperA"] = 65] = "UpperA";
    CharCodes[CharCodes["LowerA"] = 97] = "LowerA";
    CharCodes[CharCodes["UpperF"] = 70] = "UpperF";
    CharCodes[CharCodes["LowerF"] = 102] = "LowerF";
    CharCodes[CharCodes["UpperZ"] = 90] = "UpperZ";
    CharCodes[CharCodes["LowerZ"] = 122] = "LowerZ";
    CharCodes[CharCodes["LowerX"] = 120] = "LowerX";
    CharCodes[CharCodes["OpeningSquareBracket"] = 91] = "OpeningSquareBracket";
})(CharCodes || (CharCodes = {}));
/** All the states the tokenizer can be in. */
var State;
(function (State) {
    State[State["Text"] = 1] = "Text";
    State[State["BeforeTagName"] = 2] = "BeforeTagName";
    State[State["InTagName"] = 3] = "InTagName";
    State[State["InSelfClosingTag"] = 4] = "InSelfClosingTag";
    State[State["BeforeClosingTagName"] = 5] = "BeforeClosingTagName";
    State[State["InClosingTagName"] = 6] = "InClosingTagName";
    State[State["AfterClosingTagName"] = 7] = "AfterClosingTagName";
    // Attributes
    State[State["BeforeAttributeName"] = 8] = "BeforeAttributeName";
    State[State["InAttributeName"] = 9] = "InAttributeName";
    State[State["AfterAttributeName"] = 10] = "AfterAttributeName";
    State[State["BeforeAttributeValue"] = 11] = "BeforeAttributeValue";
    State[State["InAttributeValueDq"] = 12] = "InAttributeValueDq";
    State[State["InAttributeValueSq"] = 13] = "InAttributeValueSq";
    State[State["InAttributeValueNq"] = 14] = "InAttributeValueNq";
    // Declarations
    State[State["BeforeDeclaration"] = 15] = "BeforeDeclaration";
    State[State["InDeclaration"] = 16] = "InDeclaration";
    // Processing instructions
    State[State["InProcessingInstruction"] = 17] = "InProcessingInstruction";
    // Comments & CDATA
    State[State["BeforeComment"] = 18] = "BeforeComment";
    State[State["CDATASequence"] = 19] = "CDATASequence";
    State[State["InSpecialComment"] = 20] = "InSpecialComment";
    State[State["InCommentLike"] = 21] = "InCommentLike";
    // Special tags
    State[State["BeforeSpecialS"] = 22] = "BeforeSpecialS";
    State[State["BeforeSpecialT"] = 23] = "BeforeSpecialT";
    State[State["SpecialStartSequence"] = 24] = "SpecialStartSequence";
    State[State["InSpecialTag"] = 25] = "InSpecialTag";
    State[State["InEntity"] = 26] = "InEntity";
})(State || (State = {}));
function isWhitespace$1(c) {
    return (c === CharCodes.Space ||
        c === CharCodes.NewLine ||
        c === CharCodes.Tab ||
        c === CharCodes.FormFeed ||
        c === CharCodes.CarriageReturn);
}
function isEndOfTagSection(c) {
    return c === CharCodes.Slash || c === CharCodes.Gt || isWhitespace$1(c);
}
function isASCIIAlpha(c) {
    return ((c >= CharCodes.LowerA && c <= CharCodes.LowerZ) ||
        (c >= CharCodes.UpperA && c <= CharCodes.UpperZ));
}
var QuoteType;
(function (QuoteType) {
    QuoteType[QuoteType["NoValue"] = 0] = "NoValue";
    QuoteType[QuoteType["Unquoted"] = 1] = "Unquoted";
    QuoteType[QuoteType["Single"] = 2] = "Single";
    QuoteType[QuoteType["Double"] = 3] = "Double";
})(QuoteType || (QuoteType = {}));
/**
 * Sequences used to match longer strings.
 *
 * We don't have `Script`, `Style`, or `Title` here. Instead, we re-use the *End
 * sequences with an increased offset.
 */
const Sequences = {
    Cdata: new Uint8Array([0x43, 0x44, 0x41, 0x54, 0x41, 0x5b]), // CDATA[
    CdataEnd: new Uint8Array([0x5d, 0x5d, 0x3e]), // ]]>
    CommentEnd: new Uint8Array([0x2d, 0x2d, 0x3e]), // `-->`
    ScriptEnd: new Uint8Array([0x3c, 0x2f, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74]), // `</script`
    StyleEnd: new Uint8Array([0x3c, 0x2f, 0x73, 0x74, 0x79, 0x6c, 0x65]), // `</style`
    TitleEnd: new Uint8Array([0x3c, 0x2f, 0x74, 0x69, 0x74, 0x6c, 0x65]), // `</title`
    TextareaEnd: new Uint8Array([
        0x3c, 0x2f, 0x74, 0x65, 0x78, 0x74, 0x61, 0x72, 0x65, 0x61,
    ]), // `</textarea`
};
class Tokenizer {
    constructor({ xmlMode = false, decodeEntities = true, }, cbs) {
        this.cbs = cbs;
        /** The current state the tokenizer is in. */
        this.state = State.Text;
        /** The read buffer. */
        this.buffer = "";
        /** The beginning of the section that is currently being read. */
        this.sectionStart = 0;
        /** The index within the buffer that we are currently looking at. */
        this.index = 0;
        /** The start of the last entity. */
        this.entityStart = 0;
        /** Some behavior, eg. when decoding entities, is done while we are in another state. This keeps track of the other state type. */
        this.baseState = State.Text;
        /** For special parsing behavior inside of script and style tags. */
        this.isSpecial = false;
        /** Indicates whether the tokenizer has been paused. */
        this.running = true;
        /** The offset of the current buffer. */
        this.offset = 0;
        this.currentSequence = undefined;
        this.sequenceIndex = 0;
        this.xmlMode = xmlMode;
        this.decodeEntities = decodeEntities;
        this.entityDecoder = new EntityDecoder(xmlMode ? xmlDecodeTree : htmlDecodeTree, (cp, consumed) => this.emitCodePoint(cp, consumed));
    }
    reset() {
        this.state = State.Text;
        this.buffer = "";
        this.sectionStart = 0;
        this.index = 0;
        this.baseState = State.Text;
        this.currentSequence = undefined;
        this.running = true;
        this.offset = 0;
    }
    write(chunk) {
        this.offset += this.buffer.length;
        this.buffer = chunk;
        this.parse();
    }
    end() {
        if (this.running)
            this.finish();
    }
    pause() {
        this.running = false;
    }
    resume() {
        this.running = true;
        if (this.index < this.buffer.length + this.offset) {
            this.parse();
        }
    }
    stateText(c) {
        if (c === CharCodes.Lt ||
            (!this.decodeEntities && this.fastForwardTo(CharCodes.Lt))) {
            if (this.index > this.sectionStart) {
                this.cbs.ontext(this.sectionStart, this.index);
            }
            this.state = State.BeforeTagName;
            this.sectionStart = this.index;
        }
        else if (this.decodeEntities && c === CharCodes.Amp) {
            this.startEntity();
        }
    }
    stateSpecialStartSequence(c) {
        const isEnd = this.sequenceIndex === this.currentSequence.length;
        const isMatch = isEnd
            ? // If we are at the end of the sequence, make sure the tag name has ended
                isEndOfTagSection(c)
            : // Otherwise, do a case-insensitive comparison
                (c | 0x20) === this.currentSequence[this.sequenceIndex];
        if (!isMatch) {
            this.isSpecial = false;
        }
        else if (!isEnd) {
            this.sequenceIndex++;
            return;
        }
        this.sequenceIndex = 0;
        this.state = State.InTagName;
        this.stateInTagName(c);
    }
    /** Look for an end tag. For <title> tags, also decode entities. */
    stateInSpecialTag(c) {
        if (this.sequenceIndex === this.currentSequence.length) {
            if (c === CharCodes.Gt || isWhitespace$1(c)) {
                const endOfText = this.index - this.currentSequence.length;
                if (this.sectionStart < endOfText) {
                    // Spoof the index so that reported locations match up.
                    const actualIndex = this.index;
                    this.index = endOfText;
                    this.cbs.ontext(this.sectionStart, endOfText);
                    this.index = actualIndex;
                }
                this.isSpecial = false;
                this.sectionStart = endOfText + 2; // Skip over the `</`
                this.stateInClosingTagName(c);
                return; // We are done; skip the rest of the function.
            }
            this.sequenceIndex = 0;
        }
        if ((c | 0x20) === this.currentSequence[this.sequenceIndex]) {
            this.sequenceIndex += 1;
        }
        else if (this.sequenceIndex === 0) {
            if (this.currentSequence === Sequences.TitleEnd) {
                // We have to parse entities in <title> tags.
                if (this.decodeEntities && c === CharCodes.Amp) {
                    this.startEntity();
                }
            }
            else if (this.fastForwardTo(CharCodes.Lt)) {
                // Outside of <title> tags, we can fast-forward.
                this.sequenceIndex = 1;
            }
        }
        else {
            // If we see a `<`, set the sequence index to 1; useful for eg. `<</script>`.
            this.sequenceIndex = Number(c === CharCodes.Lt);
        }
    }
    stateCDATASequence(c) {
        if (c === Sequences.Cdata[this.sequenceIndex]) {
            if (++this.sequenceIndex === Sequences.Cdata.length) {
                this.state = State.InCommentLike;
                this.currentSequence = Sequences.CdataEnd;
                this.sequenceIndex = 0;
                this.sectionStart = this.index + 1;
            }
        }
        else {
            this.sequenceIndex = 0;
            this.state = State.InDeclaration;
            this.stateInDeclaration(c); // Reconsume the character
        }
    }
    /**
     * When we wait for one specific character, we can speed things up
     * by skipping through the buffer until we find it.
     *
     * @returns Whether the character was found.
     */
    fastForwardTo(c) {
        while (++this.index < this.buffer.length + this.offset) {
            if (this.buffer.charCodeAt(this.index - this.offset) === c) {
                return true;
            }
        }
        /*
         * We increment the index at the end of the `parse` loop,
         * so set it to `buffer.length - 1` here.
         *
         * TODO: Refactor `parse` to increment index before calling states.
         */
        this.index = this.buffer.length + this.offset - 1;
        return false;
    }
    /**
     * Comments and CDATA end with `-->` and `]]>`.
     *
     * Their common qualities are:
     * - Their end sequences have a distinct character they start with.
     * - That character is then repeated, so we have to check multiple repeats.
     * - All characters but the start character of the sequence can be skipped.
     */
    stateInCommentLike(c) {
        if (c === this.currentSequence[this.sequenceIndex]) {
            if (++this.sequenceIndex === this.currentSequence.length) {
                if (this.currentSequence === Sequences.CdataEnd) {
                    this.cbs.oncdata(this.sectionStart, this.index, 2);
                }
                else {
                    this.cbs.oncomment(this.sectionStart, this.index, 2);
                }
                this.sequenceIndex = 0;
                this.sectionStart = this.index + 1;
                this.state = State.Text;
            }
        }
        else if (this.sequenceIndex === 0) {
            // Fast-forward to the first character of the sequence
            if (this.fastForwardTo(this.currentSequence[0])) {
                this.sequenceIndex = 1;
            }
        }
        else if (c !== this.currentSequence[this.sequenceIndex - 1]) {
            // Allow long sequences, eg. --->, ]]]>
            this.sequenceIndex = 0;
        }
    }
    /**
     * HTML only allows ASCII alpha characters (a-z and A-Z) at the beginning of a tag name.
     *
     * XML allows a lot more characters here (@see https://www.w3.org/TR/REC-xml/#NT-NameStartChar).
     * We allow anything that wouldn't end the tag.
     */
    isTagStartChar(c) {
        return this.xmlMode ? !isEndOfTagSection(c) : isASCIIAlpha(c);
    }
    startSpecial(sequence, offset) {
        this.isSpecial = true;
        this.currentSequence = sequence;
        this.sequenceIndex = offset;
        this.state = State.SpecialStartSequence;
    }
    stateBeforeTagName(c) {
        if (c === CharCodes.ExclamationMark) {
            this.state = State.BeforeDeclaration;
            this.sectionStart = this.index + 1;
        }
        else if (c === CharCodes.Questionmark) {
            this.state = State.InProcessingInstruction;
            this.sectionStart = this.index + 1;
        }
        else if (this.isTagStartChar(c)) {
            const lower = c | 0x20;
            this.sectionStart = this.index;
            if (this.xmlMode) {
                this.state = State.InTagName;
            }
            else if (lower === Sequences.ScriptEnd[2]) {
                this.state = State.BeforeSpecialS;
            }
            else if (lower === Sequences.TitleEnd[2]) {
                this.state = State.BeforeSpecialT;
            }
            else {
                this.state = State.InTagName;
            }
        }
        else if (c === CharCodes.Slash) {
            this.state = State.BeforeClosingTagName;
        }
        else {
            this.state = State.Text;
            this.stateText(c);
        }
    }
    stateInTagName(c) {
        if (isEndOfTagSection(c)) {
            this.cbs.onopentagname(this.sectionStart, this.index);
            this.sectionStart = -1;
            this.state = State.BeforeAttributeName;
            this.stateBeforeAttributeName(c);
        }
    }
    stateBeforeClosingTagName(c) {
        if (isWhitespace$1(c)) ;
        else if (c === CharCodes.Gt) {
            this.state = State.Text;
        }
        else {
            this.state = this.isTagStartChar(c)
                ? State.InClosingTagName
                : State.InSpecialComment;
            this.sectionStart = this.index;
        }
    }
    stateInClosingTagName(c) {
        if (c === CharCodes.Gt || isWhitespace$1(c)) {
            this.cbs.onclosetag(this.sectionStart, this.index);
            this.sectionStart = -1;
            this.state = State.AfterClosingTagName;
            this.stateAfterClosingTagName(c);
        }
    }
    stateAfterClosingTagName(c) {
        // Skip everything until ">"
        if (c === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
            this.state = State.Text;
            this.sectionStart = this.index + 1;
        }
    }
    stateBeforeAttributeName(c) {
        if (c === CharCodes.Gt) {
            this.cbs.onopentagend(this.index);
            if (this.isSpecial) {
                this.state = State.InSpecialTag;
                this.sequenceIndex = 0;
            }
            else {
                this.state = State.Text;
            }
            this.sectionStart = this.index + 1;
        }
        else if (c === CharCodes.Slash) {
            this.state = State.InSelfClosingTag;
        }
        else if (!isWhitespace$1(c)) {
            this.state = State.InAttributeName;
            this.sectionStart = this.index;
        }
    }
    stateInSelfClosingTag(c) {
        if (c === CharCodes.Gt) {
            this.cbs.onselfclosingtag(this.index);
            this.state = State.Text;
            this.sectionStart = this.index + 1;
            this.isSpecial = false; // Reset special state, in case of self-closing special tags
        }
        else if (!isWhitespace$1(c)) {
            this.state = State.BeforeAttributeName;
            this.stateBeforeAttributeName(c);
        }
    }
    stateInAttributeName(c) {
        if (c === CharCodes.Eq || isEndOfTagSection(c)) {
            this.cbs.onattribname(this.sectionStart, this.index);
            this.sectionStart = this.index;
            this.state = State.AfterAttributeName;
            this.stateAfterAttributeName(c);
        }
    }
    stateAfterAttributeName(c) {
        if (c === CharCodes.Eq) {
            this.state = State.BeforeAttributeValue;
        }
        else if (c === CharCodes.Slash || c === CharCodes.Gt) {
            this.cbs.onattribend(QuoteType.NoValue, this.sectionStart);
            this.sectionStart = -1;
            this.state = State.BeforeAttributeName;
            this.stateBeforeAttributeName(c);
        }
        else if (!isWhitespace$1(c)) {
            this.cbs.onattribend(QuoteType.NoValue, this.sectionStart);
            this.state = State.InAttributeName;
            this.sectionStart = this.index;
        }
    }
    stateBeforeAttributeValue(c) {
        if (c === CharCodes.DoubleQuote) {
            this.state = State.InAttributeValueDq;
            this.sectionStart = this.index + 1;
        }
        else if (c === CharCodes.SingleQuote) {
            this.state = State.InAttributeValueSq;
            this.sectionStart = this.index + 1;
        }
        else if (!isWhitespace$1(c)) {
            this.sectionStart = this.index;
            this.state = State.InAttributeValueNq;
            this.stateInAttributeValueNoQuotes(c); // Reconsume token
        }
    }
    handleInAttributeValue(c, quote) {
        if (c === quote ||
            (!this.decodeEntities && this.fastForwardTo(quote))) {
            this.cbs.onattribdata(this.sectionStart, this.index);
            this.sectionStart = -1;
            this.cbs.onattribend(quote === CharCodes.DoubleQuote
                ? QuoteType.Double
                : QuoteType.Single, this.index + 1);
            this.state = State.BeforeAttributeName;
        }
        else if (this.decodeEntities && c === CharCodes.Amp) {
            this.startEntity();
        }
    }
    stateInAttributeValueDoubleQuotes(c) {
        this.handleInAttributeValue(c, CharCodes.DoubleQuote);
    }
    stateInAttributeValueSingleQuotes(c) {
        this.handleInAttributeValue(c, CharCodes.SingleQuote);
    }
    stateInAttributeValueNoQuotes(c) {
        if (isWhitespace$1(c) || c === CharCodes.Gt) {
            this.cbs.onattribdata(this.sectionStart, this.index);
            this.sectionStart = -1;
            this.cbs.onattribend(QuoteType.Unquoted, this.index);
            this.state = State.BeforeAttributeName;
            this.stateBeforeAttributeName(c);
        }
        else if (this.decodeEntities && c === CharCodes.Amp) {
            this.startEntity();
        }
    }
    stateBeforeDeclaration(c) {
        if (c === CharCodes.OpeningSquareBracket) {
            this.state = State.CDATASequence;
            this.sequenceIndex = 0;
        }
        else {
            this.state =
                c === CharCodes.Dash
                    ? State.BeforeComment
                    : State.InDeclaration;
        }
    }
    stateInDeclaration(c) {
        if (c === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
            this.cbs.ondeclaration(this.sectionStart, this.index);
            this.state = State.Text;
            this.sectionStart = this.index + 1;
        }
    }
    stateInProcessingInstruction(c) {
        if (c === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
            this.cbs.onprocessinginstruction(this.sectionStart, this.index);
            this.state = State.Text;
            this.sectionStart = this.index + 1;
        }
    }
    stateBeforeComment(c) {
        if (c === CharCodes.Dash) {
            this.state = State.InCommentLike;
            this.currentSequence = Sequences.CommentEnd;
            // Allow short comments (eg. <!-->)
            this.sequenceIndex = 2;
            this.sectionStart = this.index + 1;
        }
        else {
            this.state = State.InDeclaration;
        }
    }
    stateInSpecialComment(c) {
        if (c === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
            this.cbs.oncomment(this.sectionStart, this.index, 0);
            this.state = State.Text;
            this.sectionStart = this.index + 1;
        }
    }
    stateBeforeSpecialS(c) {
        const lower = c | 0x20;
        if (lower === Sequences.ScriptEnd[3]) {
            this.startSpecial(Sequences.ScriptEnd, 4);
        }
        else if (lower === Sequences.StyleEnd[3]) {
            this.startSpecial(Sequences.StyleEnd, 4);
        }
        else {
            this.state = State.InTagName;
            this.stateInTagName(c); // Consume the token again
        }
    }
    stateBeforeSpecialT(c) {
        const lower = c | 0x20;
        if (lower === Sequences.TitleEnd[3]) {
            this.startSpecial(Sequences.TitleEnd, 4);
        }
        else if (lower === Sequences.TextareaEnd[3]) {
            this.startSpecial(Sequences.TextareaEnd, 4);
        }
        else {
            this.state = State.InTagName;
            this.stateInTagName(c); // Consume the token again
        }
    }
    startEntity() {
        this.baseState = this.state;
        this.state = State.InEntity;
        this.entityStart = this.index;
        this.entityDecoder.startEntity(this.xmlMode
            ? DecodingMode.Strict
            : this.baseState === State.Text ||
                this.baseState === State.InSpecialTag
                ? DecodingMode.Legacy
                : DecodingMode.Attribute);
    }
    stateInEntity() {
        const length = this.entityDecoder.write(this.buffer, this.index - this.offset);
        // If `length` is positive, we are done with the entity.
        if (length >= 0) {
            this.state = this.baseState;
            if (length === 0) {
                this.index = this.entityStart;
            }
        }
        else {
            // Mark buffer as consumed.
            this.index = this.offset + this.buffer.length - 1;
        }
    }
    /**
     * Remove data that has already been consumed from the buffer.
     */
    cleanup() {
        // If we are inside of text or attributes, emit what we already have.
        if (this.running && this.sectionStart !== this.index) {
            if (this.state === State.Text ||
                (this.state === State.InSpecialTag && this.sequenceIndex === 0)) {
                this.cbs.ontext(this.sectionStart, this.index);
                this.sectionStart = this.index;
            }
            else if (this.state === State.InAttributeValueDq ||
                this.state === State.InAttributeValueSq ||
                this.state === State.InAttributeValueNq) {
                this.cbs.onattribdata(this.sectionStart, this.index);
                this.sectionStart = this.index;
            }
        }
    }
    shouldContinue() {
        return this.index < this.buffer.length + this.offset && this.running;
    }
    /**
     * Iterates through the buffer, calling the function corresponding to the current state.
     *
     * States that are more likely to be hit are higher up, as a performance improvement.
     */
    parse() {
        while (this.shouldContinue()) {
            const c = this.buffer.charCodeAt(this.index - this.offset);
            switch (this.state) {
                case State.Text: {
                    this.stateText(c);
                    break;
                }
                case State.SpecialStartSequence: {
                    this.stateSpecialStartSequence(c);
                    break;
                }
                case State.InSpecialTag: {
                    this.stateInSpecialTag(c);
                    break;
                }
                case State.CDATASequence: {
                    this.stateCDATASequence(c);
                    break;
                }
                case State.InAttributeValueDq: {
                    this.stateInAttributeValueDoubleQuotes(c);
                    break;
                }
                case State.InAttributeName: {
                    this.stateInAttributeName(c);
                    break;
                }
                case State.InCommentLike: {
                    this.stateInCommentLike(c);
                    break;
                }
                case State.InSpecialComment: {
                    this.stateInSpecialComment(c);
                    break;
                }
                case State.BeforeAttributeName: {
                    this.stateBeforeAttributeName(c);
                    break;
                }
                case State.InTagName: {
                    this.stateInTagName(c);
                    break;
                }
                case State.InClosingTagName: {
                    this.stateInClosingTagName(c);
                    break;
                }
                case State.BeforeTagName: {
                    this.stateBeforeTagName(c);
                    break;
                }
                case State.AfterAttributeName: {
                    this.stateAfterAttributeName(c);
                    break;
                }
                case State.InAttributeValueSq: {
                    this.stateInAttributeValueSingleQuotes(c);
                    break;
                }
                case State.BeforeAttributeValue: {
                    this.stateBeforeAttributeValue(c);
                    break;
                }
                case State.BeforeClosingTagName: {
                    this.stateBeforeClosingTagName(c);
                    break;
                }
                case State.AfterClosingTagName: {
                    this.stateAfterClosingTagName(c);
                    break;
                }
                case State.BeforeSpecialS: {
                    this.stateBeforeSpecialS(c);
                    break;
                }
                case State.BeforeSpecialT: {
                    this.stateBeforeSpecialT(c);
                    break;
                }
                case State.InAttributeValueNq: {
                    this.stateInAttributeValueNoQuotes(c);
                    break;
                }
                case State.InSelfClosingTag: {
                    this.stateInSelfClosingTag(c);
                    break;
                }
                case State.InDeclaration: {
                    this.stateInDeclaration(c);
                    break;
                }
                case State.BeforeDeclaration: {
                    this.stateBeforeDeclaration(c);
                    break;
                }
                case State.BeforeComment: {
                    this.stateBeforeComment(c);
                    break;
                }
                case State.InProcessingInstruction: {
                    this.stateInProcessingInstruction(c);
                    break;
                }
                case State.InEntity: {
                    this.stateInEntity();
                    break;
                }
            }
            this.index++;
        }
        this.cleanup();
    }
    finish() {
        if (this.state === State.InEntity) {
            this.entityDecoder.end();
            this.state = this.baseState;
        }
        this.handleTrailingData();
        this.cbs.onend();
    }
    /** Handle any trailing data. */
    handleTrailingData() {
        const endIndex = this.buffer.length + this.offset;
        // If there is no remaining data, we are done.
        if (this.sectionStart >= endIndex) {
            return;
        }
        if (this.state === State.InCommentLike) {
            if (this.currentSequence === Sequences.CdataEnd) {
                this.cbs.oncdata(this.sectionStart, endIndex, 0);
            }
            else {
                this.cbs.oncomment(this.sectionStart, endIndex, 0);
            }
        }
        else if (this.state === State.InTagName ||
            this.state === State.BeforeAttributeName ||
            this.state === State.BeforeAttributeValue ||
            this.state === State.AfterAttributeName ||
            this.state === State.InAttributeName ||
            this.state === State.InAttributeValueSq ||
            this.state === State.InAttributeValueDq ||
            this.state === State.InAttributeValueNq ||
            this.state === State.InClosingTagName) ;
        else {
            this.cbs.ontext(this.sectionStart, endIndex);
        }
    }
    emitCodePoint(cp, consumed) {
        if (this.baseState !== State.Text &&
            this.baseState !== State.InSpecialTag) {
            if (this.sectionStart < this.entityStart) {
                this.cbs.onattribdata(this.sectionStart, this.entityStart);
            }
            this.sectionStart = this.entityStart + consumed;
            this.index = this.sectionStart - 1;
            this.cbs.onattribentity(cp);
        }
        else {
            if (this.sectionStart < this.entityStart) {
                this.cbs.ontext(this.sectionStart, this.entityStart);
            }
            this.sectionStart = this.entityStart + consumed;
            this.index = this.sectionStart - 1;
            this.cbs.ontextentity(cp, this.sectionStart);
        }
    }
}

const formTags = new Set([
    "input",
    "option",
    "optgroup",
    "select",
    "button",
    "datalist",
    "textarea",
]);
const pTag = new Set(["p"]);
const tableSectionTags = new Set(["thead", "tbody"]);
const ddtTags = new Set(["dd", "dt"]);
const rtpTags = new Set(["rt", "rp"]);
const openImpliesClose = new Map([
    ["tr", new Set(["tr", "th", "td"])],
    ["th", new Set(["th"])],
    ["td", new Set(["thead", "th", "td"])],
    ["body", new Set(["head", "link", "script"])],
    ["li", new Set(["li"])],
    ["p", pTag],
    ["h1", pTag],
    ["h2", pTag],
    ["h3", pTag],
    ["h4", pTag],
    ["h5", pTag],
    ["h6", pTag],
    ["select", formTags],
    ["input", formTags],
    ["output", formTags],
    ["button", formTags],
    ["datalist", formTags],
    ["textarea", formTags],
    ["option", new Set(["option"])],
    ["optgroup", new Set(["optgroup", "option"])],
    ["dd", ddtTags],
    ["dt", ddtTags],
    ["address", pTag],
    ["article", pTag],
    ["aside", pTag],
    ["blockquote", pTag],
    ["details", pTag],
    ["div", pTag],
    ["dl", pTag],
    ["fieldset", pTag],
    ["figcaption", pTag],
    ["figure", pTag],
    ["footer", pTag],
    ["form", pTag],
    ["header", pTag],
    ["hr", pTag],
    ["main", pTag],
    ["nav", pTag],
    ["ol", pTag],
    ["pre", pTag],
    ["section", pTag],
    ["table", pTag],
    ["ul", pTag],
    ["rt", rtpTags],
    ["rp", rtpTags],
    ["tbody", tableSectionTags],
    ["tfoot", tableSectionTags],
]);
const voidElements$1 = new Set([
    "area",
    "base",
    "basefont",
    "br",
    "col",
    "command",
    "embed",
    "frame",
    "hr",
    "img",
    "input",
    "isindex",
    "keygen",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr",
]);
const foreignContextElements = new Set(["math", "svg"]);
const htmlIntegrationElements = new Set([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext",
    "annotation-xml",
    "foreignobject",
    "desc",
    "title",
]);
const reNameEnd = /\s|\//;
let Parser$1 = class Parser {
    constructor(cbs, options = {}) {
        var _a, _b, _c, _d, _e, _f;
        this.options = options;
        /** The start index of the last event. */
        this.startIndex = 0;
        /** The end index of the last event. */
        this.endIndex = 0;
        /**
         * Store the start index of the current open tag,
         * so we can update the start index for attributes.
         */
        this.openTagStart = 0;
        this.tagname = "";
        this.attribname = "";
        this.attribvalue = "";
        this.attribs = null;
        this.stack = [];
        this.buffers = [];
        this.bufferOffset = 0;
        /** The index of the last written buffer. Used when resuming after a `pause()`. */
        this.writeIndex = 0;
        /** Indicates whether the parser has finished running / `.end` has been called. */
        this.ended = false;
        this.cbs = cbs !== null && cbs !== void 0 ? cbs : {};
        this.htmlMode = !this.options.xmlMode;
        this.lowerCaseTagNames = (_a = options.lowerCaseTags) !== null && _a !== void 0 ? _a : this.htmlMode;
        this.lowerCaseAttributeNames =
            (_b = options.lowerCaseAttributeNames) !== null && _b !== void 0 ? _b : this.htmlMode;
        this.recognizeSelfClosing =
            (_c = options.recognizeSelfClosing) !== null && _c !== void 0 ? _c : !this.htmlMode;
        this.tokenizer = new ((_d = options.Tokenizer) !== null && _d !== void 0 ? _d : Tokenizer)(this.options, this);
        this.foreignContext = [!this.htmlMode];
        (_f = (_e = this.cbs).onparserinit) === null || _f === void 0 ? void 0 : _f.call(_e, this);
    }
    // Tokenizer event handlers
    /** @internal */
    ontext(start, endIndex) {
        var _a, _b;
        const data = this.getSlice(start, endIndex);
        this.endIndex = endIndex - 1;
        (_b = (_a = this.cbs).ontext) === null || _b === void 0 ? void 0 : _b.call(_a, data);
        this.startIndex = endIndex;
    }
    /** @internal */
    ontextentity(cp, endIndex) {
        var _a, _b;
        this.endIndex = endIndex - 1;
        (_b = (_a = this.cbs).ontext) === null || _b === void 0 ? void 0 : _b.call(_a, fromCodePoint(cp));
        this.startIndex = endIndex;
    }
    /**
     * Checks if the current tag is a void element. Override this if you want
     * to specify your own additional void elements.
     */
    isVoidElement(name) {
        return this.htmlMode && voidElements$1.has(name);
    }
    /** @internal */
    onopentagname(start, endIndex) {
        this.endIndex = endIndex;
        let name = this.getSlice(start, endIndex);
        if (this.lowerCaseTagNames) {
            name = name.toLowerCase();
        }
        this.emitOpenTag(name);
    }
    emitOpenTag(name) {
        var _a, _b, _c, _d;
        this.openTagStart = this.startIndex;
        this.tagname = name;
        const impliesClose = this.htmlMode && openImpliesClose.get(name);
        if (impliesClose) {
            while (this.stack.length > 0 && impliesClose.has(this.stack[0])) {
                const element = this.stack.shift();
                (_b = (_a = this.cbs).onclosetag) === null || _b === void 0 ? void 0 : _b.call(_a, element, true);
            }
        }
        if (!this.isVoidElement(name)) {
            this.stack.unshift(name);
            if (this.htmlMode) {
                if (foreignContextElements.has(name)) {
                    this.foreignContext.unshift(true);
                }
                else if (htmlIntegrationElements.has(name)) {
                    this.foreignContext.unshift(false);
                }
            }
        }
        (_d = (_c = this.cbs).onopentagname) === null || _d === void 0 ? void 0 : _d.call(_c, name);
        if (this.cbs.onopentag)
            this.attribs = {};
    }
    endOpenTag(isImplied) {
        var _a, _b;
        this.startIndex = this.openTagStart;
        if (this.attribs) {
            (_b = (_a = this.cbs).onopentag) === null || _b === void 0 ? void 0 : _b.call(_a, this.tagname, this.attribs, isImplied);
            this.attribs = null;
        }
        if (this.cbs.onclosetag && this.isVoidElement(this.tagname)) {
            this.cbs.onclosetag(this.tagname, true);
        }
        this.tagname = "";
    }
    /** @internal */
    onopentagend(endIndex) {
        this.endIndex = endIndex;
        this.endOpenTag(false);
        // Set `startIndex` for next node
        this.startIndex = endIndex + 1;
    }
    /** @internal */
    onclosetag(start, endIndex) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        this.endIndex = endIndex;
        let name = this.getSlice(start, endIndex);
        if (this.lowerCaseTagNames) {
            name = name.toLowerCase();
        }
        if (this.htmlMode &&
            (foreignContextElements.has(name) ||
                htmlIntegrationElements.has(name))) {
            this.foreignContext.shift();
        }
        if (!this.isVoidElement(name)) {
            const pos = this.stack.indexOf(name);
            if (pos !== -1) {
                for (let index = 0; index <= pos; index++) {
                    const element = this.stack.shift();
                    // We know the stack has sufficient elements.
                    (_b = (_a = this.cbs).onclosetag) === null || _b === void 0 ? void 0 : _b.call(_a, element, index !== pos);
                }
            }
            else if (this.htmlMode && name === "p") {
                // Implicit open before close
                this.emitOpenTag("p");
                this.closeCurrentTag(true);
            }
        }
        else if (this.htmlMode && name === "br") {
            // We can't use `emitOpenTag` for implicit open, as `br` would be implicitly closed.
            (_d = (_c = this.cbs).onopentagname) === null || _d === void 0 ? void 0 : _d.call(_c, "br");
            (_f = (_e = this.cbs).onopentag) === null || _f === void 0 ? void 0 : _f.call(_e, "br", {}, true);
            (_h = (_g = this.cbs).onclosetag) === null || _h === void 0 ? void 0 : _h.call(_g, "br", false);
        }
        // Set `startIndex` for next node
        this.startIndex = endIndex + 1;
    }
    /** @internal */
    onselfclosingtag(endIndex) {
        this.endIndex = endIndex;
        if (this.recognizeSelfClosing || this.foreignContext[0]) {
            this.closeCurrentTag(false);
            // Set `startIndex` for next node
            this.startIndex = endIndex + 1;
        }
        else {
            // Ignore the fact that the tag is self-closing.
            this.onopentagend(endIndex);
        }
    }
    closeCurrentTag(isOpenImplied) {
        var _a, _b;
        const name = this.tagname;
        this.endOpenTag(isOpenImplied);
        // Self-closing tags will be on the top of the stack
        if (this.stack[0] === name) {
            // If the opening tag isn't implied, the closing tag has to be implied.
            (_b = (_a = this.cbs).onclosetag) === null || _b === void 0 ? void 0 : _b.call(_a, name, !isOpenImplied);
            this.stack.shift();
        }
    }
    /** @internal */
    onattribname(start, endIndex) {
        this.startIndex = start;
        const name = this.getSlice(start, endIndex);
        this.attribname = this.lowerCaseAttributeNames
            ? name.toLowerCase()
            : name;
    }
    /** @internal */
    onattribdata(start, endIndex) {
        this.attribvalue += this.getSlice(start, endIndex);
    }
    /** @internal */
    onattribentity(cp) {
        this.attribvalue += fromCodePoint(cp);
    }
    /** @internal */
    onattribend(quote, endIndex) {
        var _a, _b;
        this.endIndex = endIndex;
        (_b = (_a = this.cbs).onattribute) === null || _b === void 0 ? void 0 : _b.call(_a, this.attribname, this.attribvalue, quote === QuoteType.Double
            ? '"'
            : quote === QuoteType.Single
                ? "'"
                : quote === QuoteType.NoValue
                    ? undefined
                    : null);
        if (this.attribs &&
            !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname)) {
            this.attribs[this.attribname] = this.attribvalue;
        }
        this.attribvalue = "";
    }
    getInstructionName(value) {
        const index = value.search(reNameEnd);
        let name = index < 0 ? value : value.substr(0, index);
        if (this.lowerCaseTagNames) {
            name = name.toLowerCase();
        }
        return name;
    }
    /** @internal */
    ondeclaration(start, endIndex) {
        this.endIndex = endIndex;
        const value = this.getSlice(start, endIndex);
        if (this.cbs.onprocessinginstruction) {
            const name = this.getInstructionName(value);
            this.cbs.onprocessinginstruction(`!${name}`, `!${value}`);
        }
        // Set `startIndex` for next node
        this.startIndex = endIndex + 1;
    }
    /** @internal */
    onprocessinginstruction(start, endIndex) {
        this.endIndex = endIndex;
        const value = this.getSlice(start, endIndex);
        if (this.cbs.onprocessinginstruction) {
            const name = this.getInstructionName(value);
            this.cbs.onprocessinginstruction(`?${name}`, `?${value}`);
        }
        // Set `startIndex` for next node
        this.startIndex = endIndex + 1;
    }
    /** @internal */
    oncomment(start, endIndex, offset) {
        var _a, _b, _c, _d;
        this.endIndex = endIndex;
        (_b = (_a = this.cbs).oncomment) === null || _b === void 0 ? void 0 : _b.call(_a, this.getSlice(start, endIndex - offset));
        (_d = (_c = this.cbs).oncommentend) === null || _d === void 0 ? void 0 : _d.call(_c);
        // Set `startIndex` for next node
        this.startIndex = endIndex + 1;
    }
    /** @internal */
    oncdata(start, endIndex, offset) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        this.endIndex = endIndex;
        const value = this.getSlice(start, endIndex - offset);
        if (!this.htmlMode || this.options.recognizeCDATA) {
            (_b = (_a = this.cbs).oncdatastart) === null || _b === void 0 ? void 0 : _b.call(_a);
            (_d = (_c = this.cbs).ontext) === null || _d === void 0 ? void 0 : _d.call(_c, value);
            (_f = (_e = this.cbs).oncdataend) === null || _f === void 0 ? void 0 : _f.call(_e);
        }
        else {
            (_h = (_g = this.cbs).oncomment) === null || _h === void 0 ? void 0 : _h.call(_g, `[CDATA[${value}]]`);
            (_k = (_j = this.cbs).oncommentend) === null || _k === void 0 ? void 0 : _k.call(_j);
        }
        // Set `startIndex` for next node
        this.startIndex = endIndex + 1;
    }
    /** @internal */
    onend() {
        var _a, _b;
        if (this.cbs.onclosetag) {
            // Set the end index for all remaining tags
            this.endIndex = this.startIndex;
            for (let index = 0; index < this.stack.length; index++) {
                this.cbs.onclosetag(this.stack[index], true);
            }
        }
        (_b = (_a = this.cbs).onend) === null || _b === void 0 ? void 0 : _b.call(_a);
    }
    /**
     * Resets the parser to a blank state, ready to parse a new HTML document
     */
    reset() {
        var _a, _b, _c, _d;
        (_b = (_a = this.cbs).onreset) === null || _b === void 0 ? void 0 : _b.call(_a);
        this.tokenizer.reset();
        this.tagname = "";
        this.attribname = "";
        this.attribs = null;
        this.stack.length = 0;
        this.startIndex = 0;
        this.endIndex = 0;
        (_d = (_c = this.cbs).onparserinit) === null || _d === void 0 ? void 0 : _d.call(_c, this);
        this.buffers.length = 0;
        this.foreignContext.length = 0;
        this.foreignContext.unshift(!this.htmlMode);
        this.bufferOffset = 0;
        this.writeIndex = 0;
        this.ended = false;
    }
    /**
     * Resets the parser, then parses a complete document and
     * pushes it to the handler.
     *
     * @param data Document to parse.
     */
    parseComplete(data) {
        this.reset();
        this.end(data);
    }
    getSlice(start, end) {
        while (start - this.bufferOffset >= this.buffers[0].length) {
            this.shiftBuffer();
        }
        let slice = this.buffers[0].slice(start - this.bufferOffset, end - this.bufferOffset);
        while (end - this.bufferOffset > this.buffers[0].length) {
            this.shiftBuffer();
            slice += this.buffers[0].slice(0, end - this.bufferOffset);
        }
        return slice;
    }
    shiftBuffer() {
        this.bufferOffset += this.buffers[0].length;
        this.writeIndex--;
        this.buffers.shift();
    }
    /**
     * Parses a chunk of data and calls the corresponding callbacks.
     *
     * @param chunk Chunk to parse.
     */
    write(chunk) {
        var _a, _b;
        if (this.ended) {
            (_b = (_a = this.cbs).onerror) === null || _b === void 0 ? void 0 : _b.call(_a, new Error(".write() after done!"));
            return;
        }
        this.buffers.push(chunk);
        if (this.tokenizer.running) {
            this.tokenizer.write(chunk);
            this.writeIndex++;
        }
    }
    /**
     * Parses the end of the buffer and clears the stack, calls onend.
     *
     * @param chunk Optional final chunk to parse.
     */
    end(chunk) {
        var _a, _b;
        if (this.ended) {
            (_b = (_a = this.cbs).onerror) === null || _b === void 0 ? void 0 : _b.call(_a, new Error(".end() after done!"));
            return;
        }
        if (chunk)
            this.write(chunk);
        this.ended = true;
        this.tokenizer.end();
    }
    /**
     * Pauses parsing. The parser won't emit events until `resume` is called.
     */
    pause() {
        this.tokenizer.pause();
    }
    /**
     * Resumes parsing after `pause` was called.
     */
    resume() {
        this.tokenizer.resume();
        while (this.tokenizer.running &&
            this.writeIndex < this.buffers.length) {
            this.tokenizer.write(this.buffers[this.writeIndex++]);
        }
        if (this.ended)
            this.tokenizer.end();
    }
    /**
     * Alias of `write`, for backwards compatibility.
     *
     * @param chunk Chunk to parse.
     * @deprecated
     */
    parseChunk(chunk) {
        this.write(chunk);
    }
    /**
     * Alias of `end`, for backwards compatibility.
     *
     * @param chunk Optional final chunk to parse.
     * @deprecated
     */
    done(chunk) {
        this.end(chunk);
    }
};

/** Types of elements found in htmlparser2's DOM */
var ElementType;
(function (ElementType) {
    /** Type for the root element of a document */
    ElementType["Root"] = "root";
    /** Type for Text */
    ElementType["Text"] = "text";
    /** Type for <? ... ?> */
    ElementType["Directive"] = "directive";
    /** Type for <!-- ... --> */
    ElementType["Comment"] = "comment";
    /** Type for <script> tags */
    ElementType["Script"] = "script";
    /** Type for <style> tags */
    ElementType["Style"] = "style";
    /** Type for Any tag */
    ElementType["Tag"] = "tag";
    /** Type for <![CDATA[ ... ]]> */
    ElementType["CDATA"] = "cdata";
    /** Type for <!doctype ...> */
    ElementType["Doctype"] = "doctype";
})(ElementType || (ElementType = {}));
/**
 * Tests whether an element is a tag or not.
 *
 * @param elem Element to test
 */
function isTag$2(elem) {
    return (elem.type === ElementType.Tag ||
        elem.type === ElementType.Script ||
        elem.type === ElementType.Style);
}
// Exports for backwards compatibility
/** Type for the root element of a document */
const Root = ElementType.Root;
/** Type for Text */
const Text$3 = ElementType.Text;
/** Type for <? ... ?> */
const Directive = ElementType.Directive;
/** Type for <!-- ... --> */
const Comment$3 = ElementType.Comment;
/** Type for <script> tags */
const Script = ElementType.Script;
/** Type for <style> tags */
const Style = ElementType.Style;
/** Type for Any tag */
const Tag = ElementType.Tag;
/** Type for <![CDATA[ ... ]]> */
const CDATA$1 = ElementType.CDATA;
/** Type for <!doctype ...> */
const Doctype = ElementType.Doctype;

var index = /*#__PURE__*/Object.freeze({
    __proto__: null,
    CDATA: CDATA$1,
    Comment: Comment$3,
    Directive: Directive,
    Doctype: Doctype,
    get ElementType () { return ElementType; },
    Root: Root,
    Script: Script,
    Style: Style,
    Tag: Tag,
    Text: Text$3,
    isTag: isTag$2
});

/**
 * This object will be used as the prototype for Nodes when creating a
 * DOM-Level-1-compliant structure.
 */
let Node$2 = class Node {
    constructor() {
        /** Parent of the node */
        this.parent = null;
        /** Previous sibling */
        this.prev = null;
        /** Next sibling */
        this.next = null;
        /** The start index of the node. Requires `withStartIndices` on the handler to be `true. */
        this.startIndex = null;
        /** The end index of the node. Requires `withEndIndices` on the handler to be `true. */
        this.endIndex = null;
    }
    // Read-write aliases for properties
    /**
     * Same as {@link parent}.
     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */
    get parentNode() {
        return this.parent;
    }
    set parentNode(parent) {
        this.parent = parent;
    }
    /**
     * Same as {@link prev}.
     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */
    get previousSibling() {
        return this.prev;
    }
    set previousSibling(prev) {
        this.prev = prev;
    }
    /**
     * Same as {@link next}.
     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */
    get nextSibling() {
        return this.next;
    }
    set nextSibling(next) {
        this.next = next;
    }
    /**
     * Clone this node, and optionally its children.
     *
     * @param recursive Clone child nodes as well.
     * @returns A clone of the node.
     */
    cloneNode(recursive = false) {
        return cloneNode(this, recursive);
    }
};
/**
 * A node that contains some data.
 */
class DataNode extends Node$2 {
    /**
     * @param data The content of the data node
     */
    constructor(data) {
        super();
        this.data = data;
    }
    /**
     * Same as {@link data}.
     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */
    get nodeValue() {
        return this.data;
    }
    set nodeValue(data) {
        this.data = data;
    }
}
/**
 * Text within the document.
 */
let Text$2 = class Text extends DataNode {
    constructor() {
        super(...arguments);
        this.type = ElementType.Text;
    }
    get nodeType() {
        return 3;
    }
};
/**
 * Comments within the document.
 */
let Comment$2 = class Comment extends DataNode {
    constructor() {
        super(...arguments);
        this.type = ElementType.Comment;
    }
    get nodeType() {
        return 8;
    }
};
/**
 * Processing instructions, including doc types.
 */
class ProcessingInstruction extends DataNode {
    constructor(name, data) {
        super(data);
        this.name = name;
        this.type = ElementType.Directive;
    }
    get nodeType() {
        return 1;
    }
}
/**
 * A `Node` that can have children.
 */
class NodeWithChildren extends Node$2 {
    /**
     * @param children Children of the node. Only certain node types can have children.
     */
    constructor(children) {
        super();
        this.children = children;
    }
    // Aliases
    /** First child of the node. */
    get firstChild() {
        var _a;
        return (_a = this.children[0]) !== null && _a !== void 0 ? _a : null;
    }
    /** Last child of the node. */
    get lastChild() {
        return this.children.length > 0
            ? this.children[this.children.length - 1]
            : null;
    }
    /**
     * Same as {@link children}.
     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */
    get childNodes() {
        return this.children;
    }
    set childNodes(children) {
        this.children = children;
    }
}
class CDATA extends NodeWithChildren {
    constructor() {
        super(...arguments);
        this.type = ElementType.CDATA;
    }
    get nodeType() {
        return 4;
    }
}
/**
 * The root node of the document.
 */
let Document$2 = class Document extends NodeWithChildren {
    constructor() {
        super(...arguments);
        this.type = ElementType.Root;
    }
    get nodeType() {
        return 9;
    }
};
/**
 * An element within the DOM.
 */
let Element$2 = class Element extends NodeWithChildren {
    /**
     * @param name Name of the tag, eg. `div`, `span`.
     * @param attribs Object mapping attribute names to attribute values.
     * @param children Children of the node.
     */
    constructor(name, attribs, children = [], type = name === "script"
        ? ElementType.Script
        : name === "style"
            ? ElementType.Style
            : ElementType.Tag) {
        super(children);
        this.name = name;
        this.attribs = attribs;
        this.type = type;
    }
    get nodeType() {
        return 1;
    }
    // DOM Level 1 aliases
    /**
     * Same as {@link name}.
     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */
    get tagName() {
        return this.name;
    }
    set tagName(name) {
        this.name = name;
    }
    get attributes() {
        return Object.keys(this.attribs).map((name) => {
            var _a, _b;
            return ({
                name,
                value: this.attribs[name],
                namespace: (_a = this["x-attribsNamespace"]) === null || _a === void 0 ? void 0 : _a[name],
                prefix: (_b = this["x-attribsPrefix"]) === null || _b === void 0 ? void 0 : _b[name],
            });
        });
    }
};
/**
 * @param node Node to check.
 * @returns `true` if the node is a `Element`, `false` otherwise.
 */
function isTag$1(node) {
    return isTag$2(node);
}
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `CDATA`, `false` otherwise.
 */
function isCDATA(node) {
    return node.type === ElementType.CDATA;
}
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `Text`, `false` otherwise.
 */
function isText(node) {
    return node.type === ElementType.Text;
}
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `Comment`, `false` otherwise.
 */
function isComment(node) {
    return node.type === ElementType.Comment;
}
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `ProcessingInstruction`, `false` otherwise.
 */
function isDirective(node) {
    return node.type === ElementType.Directive;
}
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `ProcessingInstruction`, `false` otherwise.
 */
function isDocument(node) {
    return node.type === ElementType.Root;
}
/**
 * @param node Node to check.
 * @returns `true` if the node has children, `false` otherwise.
 */
function hasChildren(node) {
    return Object.prototype.hasOwnProperty.call(node, "children");
}
/**
 * Clone a node, and optionally its children.
 *
 * @param recursive Clone child nodes as well.
 * @returns A clone of the node.
 */
function cloneNode(node, recursive = false) {
    let result;
    if (isText(node)) {
        result = new Text$2(node.data);
    }
    else if (isComment(node)) {
        result = new Comment$2(node.data);
    }
    else if (isTag$1(node)) {
        const children = recursive ? cloneChildren(node.children) : [];
        const clone = new Element$2(node.name, { ...node.attribs }, children);
        children.forEach((child) => (child.parent = clone));
        if (node.namespace != null) {
            clone.namespace = node.namespace;
        }
        if (node["x-attribsNamespace"]) {
            clone["x-attribsNamespace"] = { ...node["x-attribsNamespace"] };
        }
        if (node["x-attribsPrefix"]) {
            clone["x-attribsPrefix"] = { ...node["x-attribsPrefix"] };
        }
        result = clone;
    }
    else if (isCDATA(node)) {
        const children = recursive ? cloneChildren(node.children) : [];
        const clone = new CDATA(children);
        children.forEach((child) => (child.parent = clone));
        result = clone;
    }
    else if (isDocument(node)) {
        const children = recursive ? cloneChildren(node.children) : [];
        const clone = new Document$2(children);
        children.forEach((child) => (child.parent = clone));
        if (node["x-mode"]) {
            clone["x-mode"] = node["x-mode"];
        }
        result = clone;
    }
    else if (isDirective(node)) {
        const instruction = new ProcessingInstruction(node.name, node.data);
        if (node["x-name"] != null) {
            instruction["x-name"] = node["x-name"];
            instruction["x-publicId"] = node["x-publicId"];
            instruction["x-systemId"] = node["x-systemId"];
        }
        result = instruction;
    }
    else {
        throw new Error(`Not implemented yet: ${node.type}`);
    }
    result.startIndex = node.startIndex;
    result.endIndex = node.endIndex;
    if (node.sourceCodeLocation != null) {
        result.sourceCodeLocation = node.sourceCodeLocation;
    }
    return result;
}
function cloneChildren(childs) {
    const children = childs.map((child) => cloneNode(child, true));
    for (let i = 1; i < children.length; i++) {
        children[i].prev = children[i - 1];
        children[i - 1].next = children[i];
    }
    return children;
}

// Default options
const defaultOpts = {
    withStartIndices: false,
    withEndIndices: false,
    xmlMode: false,
};
class DomHandler {
    /**
     * @param callback Called once parsing has completed.
     * @param options Settings for the handler.
     * @param elementCB Callback whenever a tag is closed.
     */
    constructor(callback, options, elementCB) {
        /** The elements of the DOM */
        this.dom = [];
        /** The root element for the DOM */
        this.root = new Document$2(this.dom);
        /** Indicated whether parsing has been completed. */
        this.done = false;
        /** Stack of open tags. */
        this.tagStack = [this.root];
        /** A data node that is still being written to. */
        this.lastNode = null;
        /** Reference to the parser instance. Used for location information. */
        this.parser = null;
        // Make it possible to skip arguments, for backwards-compatibility
        if (typeof options === "function") {
            elementCB = options;
            options = defaultOpts;
        }
        if (typeof callback === "object") {
            options = callback;
            callback = undefined;
        }
        this.callback = callback !== null && callback !== void 0 ? callback : null;
        this.options = options !== null && options !== void 0 ? options : defaultOpts;
        this.elementCB = elementCB !== null && elementCB !== void 0 ? elementCB : null;
    }
    onparserinit(parser) {
        this.parser = parser;
    }
    // Resets the handler back to starting state
    onreset() {
        this.dom = [];
        this.root = new Document$2(this.dom);
        this.done = false;
        this.tagStack = [this.root];
        this.lastNode = null;
        this.parser = null;
    }
    // Signals the handler that parsing is done
    onend() {
        if (this.done)
            return;
        this.done = true;
        this.parser = null;
        this.handleCallback(null);
    }
    onerror(error) {
        this.handleCallback(error);
    }
    onclosetag() {
        this.lastNode = null;
        const elem = this.tagStack.pop();
        if (this.options.withEndIndices) {
            elem.endIndex = this.parser.endIndex;
        }
        if (this.elementCB)
            this.elementCB(elem);
    }
    onopentag(name, attribs) {
        const type = this.options.xmlMode ? ElementType.Tag : undefined;
        const element = new Element$2(name, attribs, undefined, type);
        this.addNode(element);
        this.tagStack.push(element);
    }
    ontext(data) {
        const { lastNode } = this;
        if (lastNode && lastNode.type === ElementType.Text) {
            lastNode.data += data;
            if (this.options.withEndIndices) {
                lastNode.endIndex = this.parser.endIndex;
            }
        }
        else {
            const node = new Text$2(data);
            this.addNode(node);
            this.lastNode = node;
        }
    }
    oncomment(data) {
        if (this.lastNode && this.lastNode.type === ElementType.Comment) {
            this.lastNode.data += data;
            return;
        }
        const node = new Comment$2(data);
        this.addNode(node);
        this.lastNode = node;
    }
    oncommentend() {
        this.lastNode = null;
    }
    oncdatastart() {
        const text = new Text$2("");
        const node = new CDATA([text]);
        this.addNode(node);
        text.parent = node;
        this.lastNode = text;
    }
    oncdataend() {
        this.lastNode = null;
    }
    onprocessinginstruction(name, data) {
        const node = new ProcessingInstruction(name, data);
        this.addNode(node);
    }
    handleCallback(error) {
        if (typeof this.callback === "function") {
            this.callback(error, this.dom);
        }
        else if (error) {
            throw error;
        }
    }
    addNode(node) {
        const parent = this.tagStack[this.tagStack.length - 1];
        const previousSibling = parent.children[parent.children.length - 1];
        if (this.options.withStartIndices) {
            node.startIndex = this.parser.startIndex;
        }
        if (this.options.withEndIndices) {
            node.endIndex = this.parser.endIndex;
        }
        parent.children.push(node);
        if (previousSibling) {
            node.prev = previousSibling;
            previousSibling.next = node;
        }
        node.parent = parent;
        this.lastNode = null;
    }
}

const xmlReplacer = /["&'<>$\x80-\uFFFF]/g;
const xmlCodeMap = new Map([
    [34, "&quot;"],
    [38, "&amp;"],
    [39, "&apos;"],
    [60, "&lt;"],
    [62, "&gt;"],
]);
// For compatibility with node < 4, we wrap `codePointAt`
const getCodePoint = 
// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
String.prototype.codePointAt != null
    ? (str, index) => str.codePointAt(index)
    : // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
        (c, index) => (c.charCodeAt(index) & 0xfc00) === 0xd800
            ? (c.charCodeAt(index) - 0xd800) * 0x400 +
                c.charCodeAt(index + 1) -
                0xdc00 +
                0x10000
            : c.charCodeAt(index);
/**
 * Encodes all non-ASCII characters, as well as characters not valid in XML
 * documents using XML entities.
 *
 * If a character has no equivalent entity, a
 * numeric hexadecimal reference (eg. `&#xfc;`) will be used.
 */
function encodeXML(str) {
    let ret = "";
    let lastIdx = 0;
    let match;
    while ((match = xmlReplacer.exec(str)) !== null) {
        const i = match.index;
        const char = str.charCodeAt(i);
        const next = xmlCodeMap.get(char);
        if (next !== undefined) {
            ret += str.substring(lastIdx, i) + next;
            lastIdx = i + 1;
        }
        else {
            ret += `${str.substring(lastIdx, i)}&#x${getCodePoint(str, i).toString(16)};`;
            // Increase by 1 if we have a surrogate pair
            lastIdx = xmlReplacer.lastIndex += Number((char & 0xfc00) === 0xd800);
        }
    }
    return ret + str.substr(lastIdx);
}
/**
 * Creates a function that escapes all characters matched by the given regular
 * expression using the given map of characters to escape to their entities.
 *
 * @param regex Regular expression to match characters to escape.
 * @param map Map of characters to escape to their entities.
 *
 * @returns Function that escapes all characters matched by the given regular
 * expression using the given map of characters to escape to their entities.
 */
function getEscaper(regex, map) {
    return function escape(data) {
        let match;
        let lastIdx = 0;
        let result = "";
        while ((match = regex.exec(data))) {
            if (lastIdx !== match.index) {
                result += data.substring(lastIdx, match.index);
            }
            // We know that this character will be in the map.
            result += map.get(match[0].charCodeAt(0));
            // Every match will be of length 1
            lastIdx = match.index + 1;
        }
        return result + data.substring(lastIdx);
    };
}
/**
 * Encodes all characters that have to be escaped in HTML attributes,
 * following {@link https://html.spec.whatwg.org/multipage/parsing.html#escapingString}.
 *
 * @param data String to escape.
 */
const escapeAttribute = getEscaper(/["&\u00A0]/g, new Map([
    [34, "&quot;"],
    [38, "&amp;"],
    [160, "&nbsp;"],
]));
/**
 * Encodes all characters that have to be escaped in HTML text,
 * following {@link https://html.spec.whatwg.org/multipage/parsing.html#escapingString}.
 *
 * @param data String to escape.
 */
const escapeText = getEscaper(/[&<>\u00A0]/g, new Map([
    [38, "&amp;"],
    [60, "&lt;"],
    [62, "&gt;"],
    [160, "&nbsp;"],
]));

const elementNames = new Map([
    "altGlyph",
    "altGlyphDef",
    "altGlyphItem",
    "animateColor",
    "animateMotion",
    "animateTransform",
    "clipPath",
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feDropShadow",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
    "foreignObject",
    "glyphRef",
    "linearGradient",
    "radialGradient",
    "textPath",
].map((val) => [val.toLowerCase(), val]));
const attributeNames = new Map([
    "definitionURL",
    "attributeName",
    "attributeType",
    "baseFrequency",
    "baseProfile",
    "calcMode",
    "clipPathUnits",
    "diffuseConstant",
    "edgeMode",
    "filterUnits",
    "glyphRef",
    "gradientTransform",
    "gradientUnits",
    "kernelMatrix",
    "kernelUnitLength",
    "keyPoints",
    "keySplines",
    "keyTimes",
    "lengthAdjust",
    "limitingConeAngle",
    "markerHeight",
    "markerUnits",
    "markerWidth",
    "maskContentUnits",
    "maskUnits",
    "numOctaves",
    "pathLength",
    "patternContentUnits",
    "patternTransform",
    "patternUnits",
    "pointsAtX",
    "pointsAtY",
    "pointsAtZ",
    "preserveAlpha",
    "preserveAspectRatio",
    "primitiveUnits",
    "refX",
    "refY",
    "repeatCount",
    "repeatDur",
    "requiredExtensions",
    "requiredFeatures",
    "specularConstant",
    "specularExponent",
    "spreadMethod",
    "startOffset",
    "stdDeviation",
    "stitchTiles",
    "surfaceScale",
    "systemLanguage",
    "tableValues",
    "targetX",
    "targetY",
    "textLength",
    "viewBox",
    "viewTarget",
    "xChannelSelector",
    "yChannelSelector",
    "zoomAndPan",
].map((val) => [val.toLowerCase(), val]));

/*
 * Module dependencies
 */
const unencodedElements = new Set([
    "style",
    "script",
    "xmp",
    "iframe",
    "noembed",
    "noframes",
    "plaintext",
    "noscript",
]);
function replaceQuotes(value) {
    return value.replace(/"/g, "&quot;");
}
/**
 * Format attributes
 */
function formatAttributes(attributes, opts) {
    var _a;
    if (!attributes)
        return;
    const encode = ((_a = opts.encodeEntities) !== null && _a !== void 0 ? _a : opts.decodeEntities) === false
        ? replaceQuotes
        : opts.xmlMode || opts.encodeEntities !== "utf8"
            ? encodeXML
            : escapeAttribute;
    return Object.keys(attributes)
        .map((key) => {
        var _a, _b;
        const value = (_a = attributes[key]) !== null && _a !== void 0 ? _a : "";
        if (opts.xmlMode === "foreign") {
            /* Fix up mixed-case attribute names */
            key = (_b = attributeNames.get(key)) !== null && _b !== void 0 ? _b : key;
        }
        if (!opts.emptyAttrs && !opts.xmlMode && value === "") {
            return key;
        }
        return `${key}="${encode(value)}"`;
    })
        .join(" ");
}
/**
 * Self-enclosing tags
 */
const singleTag = new Set([
    "area",
    "base",
    "basefont",
    "br",
    "col",
    "command",
    "embed",
    "frame",
    "hr",
    "img",
    "input",
    "isindex",
    "keygen",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr",
]);
/**
 * Renders a DOM node or an array of DOM nodes to a string.
 *
 * Can be thought of as the equivalent of the `outerHTML` of the passed node(s).
 *
 * @param node Node to be rendered.
 * @param options Changes serialization behavior
 */
function render(node, options = {}) {
    const nodes = "length" in node ? node : [node];
    let output = "";
    for (let i = 0; i < nodes.length; i++) {
        output += renderNode(nodes[i], options);
    }
    return output;
}
function renderNode(node, options) {
    switch (node.type) {
        case Root:
            return render(node.children, options);
        // @ts-expect-error We don't use `Doctype` yet
        case Doctype:
        case Directive:
            return renderDirective(node);
        case Comment$3:
            return renderComment(node);
        case CDATA$1:
            return renderCdata(node);
        case Script:
        case Style:
        case Tag:
            return renderTag(node, options);
        case Text$3:
            return renderText(node, options);
    }
}
const foreignModeIntegrationPoints = new Set([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext",
    "annotation-xml",
    "foreignObject",
    "desc",
    "title",
]);
const foreignElements = new Set(["svg", "math"]);
function renderTag(elem, opts) {
    var _a;
    // Handle SVG / MathML in HTML
    if (opts.xmlMode === "foreign") {
        /* Fix up mixed-case element names */
        elem.name = (_a = elementNames.get(elem.name)) !== null && _a !== void 0 ? _a : elem.name;
        /* Exit foreign mode at integration points */
        if (elem.parent &&
            foreignModeIntegrationPoints.has(elem.parent.name)) {
            opts = { ...opts, xmlMode: false };
        }
    }
    if (!opts.xmlMode && foreignElements.has(elem.name)) {
        opts = { ...opts, xmlMode: "foreign" };
    }
    let tag = `<${elem.name}`;
    const attribs = formatAttributes(elem.attribs, opts);
    if (attribs) {
        tag += ` ${attribs}`;
    }
    if (elem.children.length === 0 &&
        (opts.xmlMode
            ? // In XML mode or foreign mode, and user hasn't explicitly turned off self-closing tags
                opts.selfClosingTags !== false
            : // User explicitly asked for self-closing tags, even in HTML mode
                opts.selfClosingTags && singleTag.has(elem.name))) {
        if (!opts.xmlMode)
            tag += " ";
        tag += "/>";
    }
    else {
        tag += ">";
        if (elem.children.length > 0) {
            tag += render(elem.children, opts);
        }
        if (opts.xmlMode || !singleTag.has(elem.name)) {
            tag += `</${elem.name}>`;
        }
    }
    return tag;
}
function renderDirective(elem) {
    return `<${elem.data}>`;
}
function renderText(elem, opts) {
    var _a;
    let data = elem.data || "";
    // If entities weren't decoded, no need to encode them back
    if (((_a = opts.encodeEntities) !== null && _a !== void 0 ? _a : opts.decodeEntities) !== false &&
        !(!opts.xmlMode &&
            elem.parent &&
            unencodedElements.has(elem.parent.name))) {
        data =
            opts.xmlMode || opts.encodeEntities !== "utf8"
                ? encodeXML(data)
                : escapeText(data);
    }
    return data;
}
function renderCdata(elem) {
    return `<![CDATA[${elem.children[0].data}]]>`;
}
function renderComment(elem) {
    return `<!--${elem.data}-->`;
}

/**
 * @category Stringify
 * @deprecated Use the `dom-serializer` module directly.
 * @param node Node to get the outer HTML of.
 * @param options Options for serialization.
 * @returns `node`'s outer HTML.
 */
function getOuterHTML(node, options) {
    return render(node, options);
}
/**
 * @category Stringify
 * @deprecated Use the `dom-serializer` module directly.
 * @param node Node to get the inner HTML of.
 * @param options Options for serialization.
 * @returns `node`'s inner HTML.
 */
function getInnerHTML(node, options) {
    return hasChildren(node)
        ? node.children.map((node) => getOuterHTML(node, options)).join("")
        : "";
}
/**
 * Get a node's inner text. Same as `textContent`, but inserts newlines for `<br>` tags. Ignores comments.
 *
 * @category Stringify
 * @deprecated Use `textContent` instead.
 * @param node Node to get the inner text of.
 * @returns `node`'s inner text.
 */
function getText$1(node) {
    if (Array.isArray(node))
        return node.map(getText$1).join("");
    if (isTag$1(node))
        return node.name === "br" ? "\n" : getText$1(node.children);
    if (isCDATA(node))
        return getText$1(node.children);
    if (isText(node))
        return node.data;
    return "";
}
/**
 * Get a node's text content. Ignores comments.
 *
 * @category Stringify
 * @param node Node to get the text content of.
 * @returns `node`'s text content.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent}
 */
function textContent(node) {
    if (Array.isArray(node))
        return node.map(textContent).join("");
    if (hasChildren(node) && !isComment(node)) {
        return textContent(node.children);
    }
    if (isText(node))
        return node.data;
    return "";
}
/**
 * Get a node's inner text, ignoring `<script>` and `<style>` tags. Ignores comments.
 *
 * @category Stringify
 * @param node Node to get the inner text of.
 * @returns `node`'s inner text.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Node/innerText}
 */
function innerText(node) {
    if (Array.isArray(node))
        return node.map(innerText).join("");
    if (hasChildren(node) && (node.type === ElementType.Tag || isCDATA(node))) {
        return innerText(node.children);
    }
    if (isText(node))
        return node.data;
    return "";
}

/**
 * Get a node's children.
 *
 * @category Traversal
 * @param elem Node to get the children of.
 * @returns `elem`'s children, or an empty array.
 */
function getChildren$1(elem) {
    return hasChildren(elem) ? elem.children : [];
}
/**
 * Get a node's parent.
 *
 * @category Traversal
 * @param elem Node to get the parent of.
 * @returns `elem`'s parent node, or `null` if `elem` is a root node.
 */
function getParent$1(elem) {
    return elem.parent || null;
}
/**
 * Gets an elements siblings, including the element itself.
 *
 * Attempts to get the children through the element's parent first. If we don't
 * have a parent (the element is a root node), we walk the element's `prev` &
 * `next` to get all remaining nodes.
 *
 * @category Traversal
 * @param elem Element to get the siblings of.
 * @returns `elem`'s siblings, including `elem`.
 */
function getSiblings$1(elem) {
    const parent = getParent$1(elem);
    if (parent != null)
        return getChildren$1(parent);
    const siblings = [elem];
    let { prev, next } = elem;
    while (prev != null) {
        siblings.unshift(prev);
        ({ prev } = prev);
    }
    while (next != null) {
        siblings.push(next);
        ({ next } = next);
    }
    return siblings;
}
/**
 * Gets an attribute from an element.
 *
 * @category Traversal
 * @param elem Element to check.
 * @param name Attribute name to retrieve.
 * @returns The element's attribute value, or `undefined`.
 */
function getAttributeValue$1(elem, name) {
    var _a;
    return (_a = elem.attribs) === null || _a === void 0 ? void 0 : _a[name];
}
/**
 * Checks whether an element has an attribute.
 *
 * @category Traversal
 * @param elem Element to check.
 * @param name Attribute name to look for.
 * @returns Returns whether `elem` has the attribute `name`.
 */
function hasAttrib$1(elem, name) {
    return (elem.attribs != null &&
        Object.prototype.hasOwnProperty.call(elem.attribs, name) &&
        elem.attribs[name] != null);
}
/**
 * Get the tag name of an element.
 *
 * @category Traversal
 * @param elem The element to get the name for.
 * @returns The tag name of `elem`.
 */
function getName$1(elem) {
    return elem.name;
}
/**
 * Returns the next element sibling of a node.
 *
 * @category Traversal
 * @param elem The element to get the next sibling of.
 * @returns `elem`'s next sibling that is a tag, or `null` if there is no next
 * sibling.
 */
function nextElementSibling$1(elem) {
    let { next } = elem;
    while (next !== null && !isTag$1(next))
        ({ next } = next);
    return next;
}
/**
 * Returns the previous element sibling of a node.
 *
 * @category Traversal
 * @param elem The element to get the previous sibling of.
 * @returns `elem`'s previous sibling that is a tag, or `null` if there is no
 * previous sibling.
 */
function prevElementSibling(elem) {
    let { prev } = elem;
    while (prev !== null && !isTag$1(prev))
        ({ prev } = prev);
    return prev;
}

/**
 * Remove an element from the dom
 *
 * @category Manipulation
 * @param elem The element to be removed
 */
function removeElement(elem) {
    if (elem.prev)
        elem.prev.next = elem.next;
    if (elem.next)
        elem.next.prev = elem.prev;
    if (elem.parent) {
        const childs = elem.parent.children;
        const childsIndex = childs.lastIndexOf(elem);
        if (childsIndex >= 0) {
            childs.splice(childsIndex, 1);
        }
    }
    elem.next = null;
    elem.prev = null;
    elem.parent = null;
}
/**
 * Replace an element in the dom
 *
 * @category Manipulation
 * @param elem The element to be replaced
 * @param replacement The element to be added
 */
function replaceElement(elem, replacement) {
    const prev = (replacement.prev = elem.prev);
    if (prev) {
        prev.next = replacement;
    }
    const next = (replacement.next = elem.next);
    if (next) {
        next.prev = replacement;
    }
    const parent = (replacement.parent = elem.parent);
    if (parent) {
        const childs = parent.children;
        childs[childs.lastIndexOf(elem)] = replacement;
        elem.parent = null;
    }
}
/**
 * Append a child to an element.
 *
 * @category Manipulation
 * @param parent The element to append to.
 * @param child The element to be added as a child.
 */
function appendChild(parent, child) {
    removeElement(child);
    child.next = null;
    child.parent = parent;
    if (parent.children.push(child) > 1) {
        const sibling = parent.children[parent.children.length - 2];
        sibling.next = child;
        child.prev = sibling;
    }
    else {
        child.prev = null;
    }
}
/**
 * Append an element after another.
 *
 * @category Manipulation
 * @param elem The element to append after.
 * @param next The element be added.
 */
function append$1(elem, next) {
    removeElement(next);
    const { parent } = elem;
    const currNext = elem.next;
    next.next = currNext;
    next.prev = elem;
    elem.next = next;
    next.parent = parent;
    if (currNext) {
        currNext.prev = next;
        if (parent) {
            const childs = parent.children;
            childs.splice(childs.lastIndexOf(currNext), 0, next);
        }
    }
    else if (parent) {
        parent.children.push(next);
    }
}
/**
 * Prepend a child to an element.
 *
 * @category Manipulation
 * @param parent The element to prepend before.
 * @param child The element to be added as a child.
 */
function prependChild(parent, child) {
    removeElement(child);
    child.parent = parent;
    child.prev = null;
    if (parent.children.unshift(child) !== 1) {
        const sibling = parent.children[1];
        sibling.prev = child;
        child.next = sibling;
    }
    else {
        child.next = null;
    }
}
/**
 * Prepend an element before another.
 *
 * @category Manipulation
 * @param elem The element to prepend before.
 * @param prev The element be added.
 */
function prepend(elem, prev) {
    removeElement(prev);
    const { parent } = elem;
    if (parent) {
        const childs = parent.children;
        childs.splice(childs.indexOf(elem), 0, prev);
    }
    if (elem.prev) {
        elem.prev.next = prev;
    }
    prev.parent = parent;
    prev.prev = elem.prev;
    prev.next = elem;
    elem.prev = prev;
}

/**
 * Search a node and its children for nodes passing a test function. If `node` is not an array, it will be wrapped in one.
 *
 * @category Querying
 * @param test Function to test nodes on.
 * @param node Node to search. Will be included in the result set if it matches.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes passing `test`.
 */
function filter(test, node, recurse = true, limit = Infinity) {
    return find(test, Array.isArray(node) ? node : [node], recurse, limit);
}
/**
 * Search an array of nodes and their children for nodes passing a test function.
 *
 * @category Querying
 * @param test Function to test nodes on.
 * @param nodes Array of nodes to search.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes passing `test`.
 */
function find(test, nodes, recurse, limit) {
    const result = [];
    /** Stack of the arrays we are looking at. */
    const nodeStack = [Array.isArray(nodes) ? nodes : [nodes]];
    /** Stack of the indices within the arrays. */
    const indexStack = [0];
    for (;;) {
        // First, check if the current array has any more elements to look at.
        if (indexStack[0] >= nodeStack[0].length) {
            // If we have no more arrays to look at, we are done.
            if (indexStack.length === 1) {
                return result;
            }
            // Otherwise, remove the current array from the stack.
            nodeStack.shift();
            indexStack.shift();
            // Loop back to the start to continue with the next array.
            continue;
        }
        const elem = nodeStack[0][indexStack[0]++];
        if (test(elem)) {
            result.push(elem);
            if (--limit <= 0)
                return result;
        }
        if (recurse && hasChildren(elem) && elem.children.length > 0) {
            /*
             * Add the children to the stack. We are depth-first, so this is
             * the next array we look at.
             */
            indexStack.unshift(0);
            nodeStack.unshift(elem.children);
        }
    }
}
/**
 * Finds the first element inside of an array that matches a test function. This is an alias for `Array.prototype.find`.
 *
 * @category Querying
 * @param test Function to test nodes on.
 * @param nodes Array of nodes to search.
 * @returns The first node in the array that passes `test`.
 * @deprecated Use `Array.prototype.find` directly.
 */
function findOneChild(test, nodes) {
    return nodes.find(test);
}
/**
 * Finds one element in a tree that passes a test.
 *
 * @category Querying
 * @param test Function to test nodes on.
 * @param nodes Node or array of nodes to search.
 * @param recurse Also consider child nodes.
 * @returns The first node that passes `test`.
 */
function findOne$1(test, nodes, recurse = true) {
    const searchedNodes = Array.isArray(nodes) ? nodes : [nodes];
    for (let i = 0; i < searchedNodes.length; i++) {
        const node = searchedNodes[i];
        if (isTag$1(node) && test(node)) {
            return node;
        }
        if (recurse && hasChildren(node) && node.children.length > 0) {
            return findOne$1(test, node.children, true);
        }
    }
    return null;
}
/**
 * Checks if a tree of nodes contains at least one node passing a test.
 *
 * @category Querying
 * @param test Function to test nodes on.
 * @param nodes Array of nodes to search.
 * @returns Whether a tree of nodes contains at least one node passing the test.
 */
function existsOne$1(test, nodes) {
    return (Array.isArray(nodes) ? nodes : [nodes]).some((node) => (isTag$1(node) && test(node)) ||
        (hasChildren(node) && existsOne$1(test, node.children)));
}
/**
 * Search an array of nodes and their children for elements passing a test function.
 *
 * Same as `find`, but limited to elements and with less options, leading to reduced complexity.
 *
 * @category Querying
 * @param test Function to test nodes on.
 * @param nodes Array of nodes to search.
 * @returns All nodes passing `test`.
 */
function findAll$1(test, nodes) {
    const result = [];
    const nodeStack = [Array.isArray(nodes) ? nodes : [nodes]];
    const indexStack = [0];
    for (;;) {
        if (indexStack[0] >= nodeStack[0].length) {
            if (nodeStack.length === 1) {
                return result;
            }
            // Otherwise, remove the current array from the stack.
            nodeStack.shift();
            indexStack.shift();
            // Loop back to the start to continue with the next array.
            continue;
        }
        const elem = nodeStack[0][indexStack[0]++];
        if (isTag$1(elem) && test(elem))
            result.push(elem);
        if (hasChildren(elem) && elem.children.length > 0) {
            indexStack.unshift(0);
            nodeStack.unshift(elem.children);
        }
    }
}

/**
 * A map of functions to check nodes against.
 */
const Checks = {
    tag_name(name) {
        if (typeof name === "function") {
            return (elem) => isTag$1(elem) && name(elem.name);
        }
        else if (name === "*") {
            return isTag$1;
        }
        return (elem) => isTag$1(elem) && elem.name === name;
    },
    tag_type(type) {
        if (typeof type === "function") {
            return (elem) => type(elem.type);
        }
        return (elem) => elem.type === type;
    },
    tag_contains(data) {
        if (typeof data === "function") {
            return (elem) => isText(elem) && data(elem.data);
        }
        return (elem) => isText(elem) && elem.data === data;
    },
};
/**
 * Returns a function to check whether a node has an attribute with a particular
 * value.
 *
 * @param attrib Attribute to check.
 * @param value Attribute value to look for.
 * @returns A function to check whether the a node has an attribute with a
 *   particular value.
 */
function getAttribCheck(attrib, value) {
    if (typeof value === "function") {
        return (elem) => isTag$1(elem) && value(elem.attribs[attrib]);
    }
    return (elem) => isTag$1(elem) && elem.attribs[attrib] === value;
}
/**
 * Returns a function that returns `true` if either of the input functions
 * returns `true` for a node.
 *
 * @param a First function to combine.
 * @param b Second function to combine.
 * @returns A function taking a node and returning `true` if either of the input
 *   functions returns `true` for the node.
 */
function combineFuncs(a, b) {
    return (elem) => a(elem) || b(elem);
}
/**
 * Returns a function that executes all checks in `options` and returns `true`
 * if any of them match a node.
 *
 * @param options An object describing nodes to look for.
 * @returns A function that executes all checks in `options` and returns `true`
 *   if any of them match a node.
 */
function compileTest(options) {
    const funcs = Object.keys(options).map((key) => {
        const value = options[key];
        return Object.prototype.hasOwnProperty.call(Checks, key)
            ? Checks[key](value)
            : getAttribCheck(key, value);
    });
    return funcs.length === 0 ? null : funcs.reduce(combineFuncs);
}
/**
 * Checks whether a node matches the description in `options`.
 *
 * @category Legacy Query Functions
 * @param options An object describing nodes to look for.
 * @param node The element to test.
 * @returns Whether the element matches the description in `options`.
 */
function testElement(options, node) {
    const test = compileTest(options);
    return test ? test(node) : true;
}
/**
 * Returns all nodes that match `options`.
 *
 * @category Legacy Query Functions
 * @param options An object describing nodes to look for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes that match `options`.
 */
function getElements(options, nodes, recurse, limit = Infinity) {
    const test = compileTest(options);
    return test ? filter(test, nodes, recurse, limit) : [];
}
/**
 * Returns the node with the supplied ID.
 *
 * @category Legacy Query Functions
 * @param id The unique ID attribute value to look for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @returns The node with the supplied ID.
 */
function getElementById(id, nodes, recurse = true) {
    if (!Array.isArray(nodes))
        nodes = [nodes];
    return findOne$1(getAttribCheck("id", id), nodes, recurse);
}
/**
 * Returns all nodes with the supplied `tagName`.
 *
 * @category Legacy Query Functions
 * @param tagName Tag name to search for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes with the supplied `tagName`.
 */
function getElementsByTagName(tagName, nodes, recurse = true, limit = Infinity) {
    return filter(Checks["tag_name"](tagName), nodes, recurse, limit);
}
/**
 * Returns all nodes with the supplied `className`.
 *
 * @category Legacy Query Functions
 * @param className Class name to search for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes with the supplied `className`.
 */
function getElementsByClassName(className, nodes, recurse = true, limit = Infinity) {
    return filter(getAttribCheck("class", className), nodes, recurse, limit);
}
/**
 * Returns all nodes with the supplied `type`.
 *
 * @category Legacy Query Functions
 * @param type Element type to look for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes with the supplied `type`.
 */
function getElementsByTagType(type, nodes, recurse = true, limit = Infinity) {
    return filter(Checks["tag_type"](type), nodes, recurse, limit);
}

/**
 * Given an array of nodes, remove any member that is contained by another
 * member.
 *
 * @category Helpers
 * @param nodes Nodes to filter.
 * @returns Remaining nodes that aren't contained by other nodes.
 */
function removeSubsets$1(nodes) {
    let idx = nodes.length;
    /*
     * Check if each node (or one of its ancestors) is already contained in the
     * array.
     */
    while (--idx >= 0) {
        const node = nodes[idx];
        /*
         * Remove the node if it is not unique.
         * We are going through the array from the end, so we only
         * have to check nodes that preceed the node under consideration in the array.
         */
        if (idx > 0 && nodes.lastIndexOf(node, idx - 1) >= 0) {
            nodes.splice(idx, 1);
            continue;
        }
        for (let ancestor = node.parent; ancestor; ancestor = ancestor.parent) {
            if (nodes.includes(ancestor)) {
                nodes.splice(idx, 1);
                break;
            }
        }
    }
    return nodes;
}
/**
 * @category Helpers
 * @see {@link http://dom.spec.whatwg.org/#dom-node-comparedocumentposition}
 */
var DocumentPosition;
(function (DocumentPosition) {
    DocumentPosition[DocumentPosition["DISCONNECTED"] = 1] = "DISCONNECTED";
    DocumentPosition[DocumentPosition["PRECEDING"] = 2] = "PRECEDING";
    DocumentPosition[DocumentPosition["FOLLOWING"] = 4] = "FOLLOWING";
    DocumentPosition[DocumentPosition["CONTAINS"] = 8] = "CONTAINS";
    DocumentPosition[DocumentPosition["CONTAINED_BY"] = 16] = "CONTAINED_BY";
})(DocumentPosition || (DocumentPosition = {}));
/**
 * Compare the position of one node against another node in any other document,
 * returning a bitmask with the values from {@link DocumentPosition}.
 *
 * Document order:
 * > There is an ordering, document order, defined on all the nodes in the
 * > document corresponding to the order in which the first character of the
 * > XML representation of each node occurs in the XML representation of the
 * > document after expansion of general entities. Thus, the document element
 * > node will be the first node. Element nodes occur before their children.
 * > Thus, document order orders element nodes in order of the occurrence of
 * > their start-tag in the XML (after expansion of entities). The attribute
 * > nodes of an element occur after the element and before its children. The
 * > relative order of attribute nodes is implementation-dependent.
 *
 * Source:
 * http://www.w3.org/TR/DOM-Level-3-Core/glossary.html#dt-document-order
 *
 * @category Helpers
 * @param nodeA The first node to use in the comparison
 * @param nodeB The second node to use in the comparison
 * @returns A bitmask describing the input nodes' relative position.
 *
 * See http://dom.spec.whatwg.org/#dom-node-comparedocumentposition for
 * a description of these values.
 */
function compareDocumentPosition(nodeA, nodeB) {
    const aParents = [];
    const bParents = [];
    if (nodeA === nodeB) {
        return 0;
    }
    let current = hasChildren(nodeA) ? nodeA : nodeA.parent;
    while (current) {
        aParents.unshift(current);
        current = current.parent;
    }
    current = hasChildren(nodeB) ? nodeB : nodeB.parent;
    while (current) {
        bParents.unshift(current);
        current = current.parent;
    }
    const maxIdx = Math.min(aParents.length, bParents.length);
    let idx = 0;
    while (idx < maxIdx && aParents[idx] === bParents[idx]) {
        idx++;
    }
    if (idx === 0) {
        return DocumentPosition.DISCONNECTED;
    }
    const sharedParent = aParents[idx - 1];
    const siblings = sharedParent.children;
    const aSibling = aParents[idx];
    const bSibling = bParents[idx];
    if (siblings.indexOf(aSibling) > siblings.indexOf(bSibling)) {
        if (sharedParent === nodeB) {
            return DocumentPosition.FOLLOWING | DocumentPosition.CONTAINED_BY;
        }
        return DocumentPosition.FOLLOWING;
    }
    if (sharedParent === nodeA) {
        return DocumentPosition.PRECEDING | DocumentPosition.CONTAINS;
    }
    return DocumentPosition.PRECEDING;
}
/**
 * Sort an array of nodes based on their relative position in the document,
 * removing any duplicate nodes. If the array contains nodes that do not belong
 * to the same document, sort order is unspecified.
 *
 * @category Helpers
 * @param nodes Array of DOM nodes.
 * @returns Collection of unique nodes, sorted in document order.
 */
function uniqueSort(nodes) {
    nodes = nodes.filter((node, i, arr) => !arr.includes(node, i + 1));
    nodes.sort((a, b) => {
        const relative = compareDocumentPosition(a, b);
        if (relative & DocumentPosition.PRECEDING) {
            return -1;
        }
        else if (relative & DocumentPosition.FOLLOWING) {
            return 1;
        }
        return 0;
    });
    return nodes;
}

/**
 * Get the feed object from the root of a DOM tree.
 *
 * @category Feeds
 * @param doc - The DOM to to extract the feed from.
 * @returns The feed.
 */
function getFeed(doc) {
    const feedRoot = getOneElement(isValidFeed, doc);
    return !feedRoot
        ? null
        : feedRoot.name === "feed"
            ? getAtomFeed(feedRoot)
            : getRssFeed(feedRoot);
}
/**
 * Parse an Atom feed.
 *
 * @param feedRoot The root of the feed.
 * @returns The parsed feed.
 */
function getAtomFeed(feedRoot) {
    var _a;
    const childs = feedRoot.children;
    const feed = {
        type: "atom",
        items: getElementsByTagName("entry", childs).map((item) => {
            var _a;
            const { children } = item;
            const entry = { media: getMediaElements(children) };
            addConditionally(entry, "id", "id", children);
            addConditionally(entry, "title", "title", children);
            const href = (_a = getOneElement("link", children)) === null || _a === void 0 ? void 0 : _a.attribs["href"];
            if (href) {
                entry.link = href;
            }
            const description = fetch("summary", children) || fetch("content", children);
            if (description) {
                entry.description = description;
            }
            const pubDate = fetch("updated", children);
            if (pubDate) {
                entry.pubDate = new Date(pubDate);
            }
            return entry;
        }),
    };
    addConditionally(feed, "id", "id", childs);
    addConditionally(feed, "title", "title", childs);
    const href = (_a = getOneElement("link", childs)) === null || _a === void 0 ? void 0 : _a.attribs["href"];
    if (href) {
        feed.link = href;
    }
    addConditionally(feed, "description", "subtitle", childs);
    const updated = fetch("updated", childs);
    if (updated) {
        feed.updated = new Date(updated);
    }
    addConditionally(feed, "author", "email", childs, true);
    return feed;
}
/**
 * Parse a RSS feed.
 *
 * @param feedRoot The root of the feed.
 * @returns The parsed feed.
 */
function getRssFeed(feedRoot) {
    var _a, _b;
    const childs = (_b = (_a = getOneElement("channel", feedRoot.children)) === null || _a === void 0 ? void 0 : _a.children) !== null && _b !== void 0 ? _b : [];
    const feed = {
        type: feedRoot.name.substr(0, 3),
        id: "",
        items: getElementsByTagName("item", feedRoot.children).map((item) => {
            const { children } = item;
            const entry = { media: getMediaElements(children) };
            addConditionally(entry, "id", "guid", children);
            addConditionally(entry, "title", "title", children);
            addConditionally(entry, "link", "link", children);
            addConditionally(entry, "description", "description", children);
            const pubDate = fetch("pubDate", children) || fetch("dc:date", children);
            if (pubDate)
                entry.pubDate = new Date(pubDate);
            return entry;
        }),
    };
    addConditionally(feed, "title", "title", childs);
    addConditionally(feed, "link", "link", childs);
    addConditionally(feed, "description", "description", childs);
    const updated = fetch("lastBuildDate", childs);
    if (updated) {
        feed.updated = new Date(updated);
    }
    addConditionally(feed, "author", "managingEditor", childs, true);
    return feed;
}
const MEDIA_KEYS_STRING = ["url", "type", "lang"];
const MEDIA_KEYS_INT = [
    "fileSize",
    "bitrate",
    "framerate",
    "samplingrate",
    "channels",
    "duration",
    "height",
    "width",
];
/**
 * Get all media elements of a feed item.
 *
 * @param where Nodes to search in.
 * @returns Media elements.
 */
function getMediaElements(where) {
    return getElementsByTagName("media:content", where).map((elem) => {
        const { attribs } = elem;
        const media = {
            medium: attribs["medium"],
            isDefault: !!attribs["isDefault"],
        };
        for (const attrib of MEDIA_KEYS_STRING) {
            if (attribs[attrib]) {
                media[attrib] = attribs[attrib];
            }
        }
        for (const attrib of MEDIA_KEYS_INT) {
            if (attribs[attrib]) {
                media[attrib] = parseInt(attribs[attrib], 10);
            }
        }
        if (attribs["expression"]) {
            media.expression = attribs["expression"];
        }
        return media;
    });
}
/**
 * Get one element by tag name.
 *
 * @param tagName Tag name to look for
 * @param node Node to search in
 * @returns The element or null
 */
function getOneElement(tagName, node) {
    return getElementsByTagName(tagName, node, true, 1)[0];
}
/**
 * Get the text content of an element with a certain tag name.
 *
 * @param tagName Tag name to look for.
 * @param where Node to search in.
 * @param recurse Whether to recurse into child nodes.
 * @returns The text content of the element.
 */
function fetch(tagName, where, recurse = false) {
    return textContent(getElementsByTagName(tagName, where, recurse, 1)).trim();
}
/**
 * Adds a property to an object if it has a value.
 *
 * @param obj Object to be extended
 * @param prop Property name
 * @param tagName Tag name that contains the conditionally added property
 * @param where Element to search for the property
 * @param recurse Whether to recurse into child nodes.
 */
function addConditionally(obj, prop, tagName, where, recurse = false) {
    const val = fetch(tagName, where, recurse);
    if (val)
        obj[prop] = val;
}
/**
 * Checks if an element is a feed root node.
 *
 * @param value The name of the element to check.
 * @returns Whether an element is a feed root node.
 */
function isValidFeed(value) {
    return value === "rss" || value === "feed" || value === "rdf:RDF";
}

var DomUtils = /*#__PURE__*/Object.freeze({
    __proto__: null,
    get DocumentPosition () { return DocumentPosition; },
    append: append$1,
    appendChild: appendChild,
    compareDocumentPosition: compareDocumentPosition,
    existsOne: existsOne$1,
    filter: filter,
    find: find,
    findAll: findAll$1,
    findOne: findOne$1,
    findOneChild: findOneChild,
    getAttributeValue: getAttributeValue$1,
    getChildren: getChildren$1,
    getElementById: getElementById,
    getElements: getElements,
    getElementsByClassName: getElementsByClassName,
    getElementsByTagName: getElementsByTagName,
    getElementsByTagType: getElementsByTagType,
    getFeed: getFeed,
    getInnerHTML: getInnerHTML,
    getName: getName$1,
    getOuterHTML: getOuterHTML,
    getParent: getParent$1,
    getSiblings: getSiblings$1,
    getText: getText$1,
    hasAttrib: hasAttrib$1,
    hasChildren: hasChildren,
    innerText: innerText,
    isCDATA: isCDATA,
    isComment: isComment,
    isDocument: isDocument,
    isTag: isTag$1,
    isText: isText,
    nextElementSibling: nextElementSibling$1,
    prepend: prepend,
    prependChild: prependChild,
    prevElementSibling: prevElementSibling,
    removeElement: removeElement,
    removeSubsets: removeSubsets$1,
    replaceElement: replaceElement,
    testElement: testElement,
    textContent: textContent,
    uniqueSort: uniqueSort
});

// Helper methods
/**
 * Parses the data, returns the resulting document.
 *
 * @param data The data that should be parsed.
 * @param options Optional options for the parser and DOM handler.
 */
function parseDocument(data, options) {
    const handler = new DomHandler(undefined, options);
    new Parser$1(handler, options).end(data);
    return handler.root;
}
/**
 * Parses data, returns an array of the root nodes.
 *
 * Note that the root nodes still have a `Document` node as their parent.
 * Use `parseDocument` to get the `Document` node instead.
 *
 * @param data The data that should be parsed.
 * @param options Optional options for the parser and DOM handler.
 * @deprecated Use `parseDocument` instead.
 */
function parseDOM(data, options) {
    return parseDocument(data, options).children;
}
/**
 * Creates a parser instance, with an attached DOM handler.
 *
 * @param callback A callback that will be called once parsing has been completed, with the resulting document.
 * @param options Optional options for the parser and DOM handler.
 * @param elementCallback An optional callback that will be called every time a tag has been completed inside of the DOM.
 */
function createDocumentStream(callback, options, elementCallback) {
    const handler = new DomHandler((error) => callback(error, handler.root), options, elementCallback);
    return new Parser$1(handler, options);
}
/**
 * Creates a parser instance, with an attached DOM handler.
 *
 * @param callback A callback that will be called once parsing has been completed, with an array of root nodes.
 * @param options Optional options for the parser and DOM handler.
 * @param elementCallback An optional callback that will be called every time a tag has been completed inside of the DOM.
 * @deprecated Use `createDocumentStream` instead.
 */
function createDomStream(callback, options, elementCallback) {
    const handler = new DomHandler(callback, options, elementCallback);
    return new Parser$1(handler, options);
}
const parseFeedDefaultOptions = { xmlMode: true };
/**
 * Parse a feed.
 *
 * @param feed The feed that should be parsed, as a string.
 * @param options Optionally, options for parsing. When using this, you should set `xmlMode` to `true`.
 */
function parseFeed(feed, options = parseFeedDefaultOptions) {
    return getFeed(parseDOM(feed, options));
}

var HTMLParser2 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    DefaultHandler: DomHandler,
    DomHandler: DomHandler,
    DomUtils: DomUtils,
    ElementType: index,
    Parser: Parser$1,
    get QuoteType () { return QuoteType; },
    Tokenizer: Tokenizer,
    createDocumentStream: createDocumentStream,
    createDomStream: createDomStream,
    getFeed: getFeed,
    parseDOM: parseDOM,
    parseDocument: parseDocument,
    parseFeed: parseFeed
});

// Internal
const NODE_END = -1;

// Node
const ELEMENT_NODE = 1;
const ATTRIBUTE_NODE = 2;
const TEXT_NODE = 3;
const CDATA_SECTION_NODE = 4;
const COMMENT_NODE = 8;
const DOCUMENT_NODE = 9;
const DOCUMENT_TYPE_NODE = 10;
const DOCUMENT_FRAGMENT_NODE = 11;

// Elements
const BLOCK_ELEMENTS = new Set(['ARTICLE', 'ASIDE', 'BLOCKQUOTE', 'BODY', 'BR', 'BUTTON', 'CANVAS', 'CAPTION', 'COL', 'COLGROUP', 'DD', 'DIV', 'DL', 'DT', 'EMBED', 'FIELDSET', 'FIGCAPTION', 'FIGURE', 'FOOTER', 'FORM', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'LI', 'UL', 'OL', 'P']);

// TreeWalker
const SHOW_ALL = -1;
const SHOW_ELEMENT = 1;
const SHOW_TEXT = 4;
const SHOW_CDATA_SECTION = 8;
const SHOW_COMMENT = 128;

// Document position
const DOCUMENT_POSITION_DISCONNECTED = 0x01;
const DOCUMENT_POSITION_PRECEDING = 0x02;
const DOCUMENT_POSITION_FOLLOWING = 0x04;
const DOCUMENT_POSITION_CONTAINS = 0x08;
const DOCUMENT_POSITION_CONTAINED_BY = 0x10;
const DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC = 0x20;

// SVG
const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';

const {
  assign,
  create: create$1,
  defineProperties,
  entries,
  getOwnPropertyDescriptors,
  keys,
  setPrototypeOf
} = Object;

const $String = String;

const getEnd = node => node.nodeType === ELEMENT_NODE ? node[END] : node;

const ignoreCase = ({ownerDocument}) => ownerDocument[MIME].ignoreCase;

const knownAdjacent = (prev, next) => {
  prev[NEXT] = next;
  next[PREV] = prev;
};

const knownBoundaries = (prev, current, next) => {
  knownAdjacent(prev, current);
  knownAdjacent(getEnd(current), next);
};

const knownSegment = (prev, start, end, next) => {
  knownAdjacent(prev, start);
  knownAdjacent(getEnd(end), next);
};

const knownSiblings = (prev, current, next) => {
  knownAdjacent(prev, current);
  knownAdjacent(current, next);
};

const localCase = ({localName, ownerDocument}) => {
  return ownerDocument[MIME].ignoreCase ? localName.toUpperCase() : localName;
};

const setAdjacent = (prev, next) => {
  if (prev)
    prev[NEXT] = next;
  if (next)
    next[PREV] = prev;
};

const shadowRoots = new WeakMap;

let reactive = false;

const Classes = new WeakMap;

const customElements = new WeakMap;

const attributeChangedCallback$1 = (element, attributeName, oldValue, newValue) => {
  if (
    reactive &&
    customElements.has(element) &&
    element.attributeChangedCallback &&
    element.constructor.observedAttributes.includes(attributeName)
  ) {
    element.attributeChangedCallback(attributeName, oldValue, newValue);
  }
};

const createTrigger = (method, isConnected) => element => {
  if (customElements.has(element)) {
    const info = customElements.get(element);
    if (info.connected !== isConnected && element.isConnected === isConnected) {
      info.connected = isConnected;
      if (method in element)
        element[method]();
    }
  }
};

const triggerConnected = createTrigger('connectedCallback', true);
const connectedCallback = element => {
  if (reactive) {
    triggerConnected(element);
    if (shadowRoots.has(element))
      element = shadowRoots.get(element).shadowRoot;
    let {[NEXT]: next, [END]: end} = element;
    while (next !== end) {
      if (next.nodeType === ELEMENT_NODE)
        triggerConnected(next);
      next = next[NEXT];
    }
  }
};

const triggerDisconnected = createTrigger('disconnectedCallback', false);
const disconnectedCallback = element => {
  if (reactive) {
    triggerDisconnected(element);
    if (shadowRoots.has(element))
      element = shadowRoots.get(element).shadowRoot;
    let {[NEXT]: next, [END]: end} = element;
    while (next !== end) {
      if (next.nodeType === ELEMENT_NODE)
        triggerDisconnected(next);
      next = next[NEXT];
    }
  }
};

/**
 * @implements globalThis.CustomElementRegistry
 */
class CustomElementRegistry {

  /**
   * @param {Document} ownerDocument
   */
  constructor(ownerDocument) {
    /**
     * @private
     */
    this.ownerDocument = ownerDocument;

    /**
     * @private
     */
    this.registry = new Map;

    /**
     * @private
     */
    this.waiting = new Map;

    /**
     * @private
     */
    this.active = false;
  }

  /**
   * @param {string} localName the custom element definition name
   * @param {Function} Class the custom element **Class** definition
   * @param {object?} options the optional object with an `extends` property
   */
  define(localName, Class, options = {}) {
    const {ownerDocument, registry, waiting} = this;

    if (registry.has(localName))
      throw new Error('unable to redefine ' + localName);

    if (Classes.has(Class))
      throw new Error('unable to redefine the same class: ' + Class);

    this.active = (reactive = true);

    const {extends: extend} = options;

    Classes.set(Class, {
      ownerDocument,
      options: {is: extend ? localName : ''},
      localName: extend || localName
    });

    const check = extend ?
      element => {
        return element.localName === extend &&
               element.getAttribute('is') === localName;
      } :
      element => element.localName === localName;
    registry.set(localName, {Class, check});
    if (waiting.has(localName)) {
      for (const resolve of waiting.get(localName))
        resolve(Class);
      waiting.delete(localName);
    }
    ownerDocument.querySelectorAll(
      extend ? `${extend}[is="${localName}"]` : localName
    ).forEach(this.upgrade, this);
  }

  /**
   * @param {Element} element
   */
  upgrade(element) {
    if (customElements.has(element))
      return;
    const {ownerDocument, registry} = this;
    const ce = element.getAttribute('is') || element.localName;
    if (registry.has(ce)) {
      const {Class, check} = registry.get(ce);
      if (check(element)) {
        const {attributes, isConnected} = element;
        for (const attr of attributes)
          element.removeAttributeNode(attr);

        const values = entries(element);
        for (const [key] of values)
          delete element[key];

        setPrototypeOf(element, Class.prototype);
        ownerDocument[UPGRADE] = {element, values};
        new Class(ownerDocument, ce);

        customElements.set(element, {connected: isConnected});

        for (const attr of attributes)
          element.setAttributeNode(attr);

        if (isConnected && element.connectedCallback)
          element.connectedCallback();
      }
    }
  }

  /**
   * @param {string} localName the custom element definition name
   */
  whenDefined(localName) {
    const {registry, waiting} = this;
    return new Promise(resolve => {
      if (registry.has(localName))
        resolve(registry.get(localName).Class);
      else {
        if (!waiting.has(localName))
          waiting.set(localName, []);
        waiting.get(localName).push(resolve);
      }
    });
  }

  /**
   * @param {string} localName the custom element definition name
   * @returns {Function?} the custom element **Class**, if any
   */
  get(localName) {
    const info = this.registry.get(localName);
    return info && info.Class;
  }

  /**
   * @param {Function} Class **Class** of custom element
   * @returns {string?} found tag name or null
   */
  getName(Class) {
    if (Classes.has(Class)) {
      const { localName } = Classes.get(Class);
      return localName;
    }
    return null;
  }
}

const {Parser} = HTMLParser2;

const append = (self, node, active) => {
  const end = self[END];
  node.parentNode = self;
  knownBoundaries(end[PREV], node, end);
  if (active && node.nodeType === ELEMENT_NODE)
    connectedCallback(node);
  return node;
};

const attribute = (element, end, attribute, value, active) => {
  attribute[VALUE] = value;
  attribute.ownerElement = element;
  knownSiblings(end[PREV], attribute, end);
  if (attribute.name === 'class')
    element.className = value;
  if (active)
    attributeChangedCallback$1(element, attribute.name, null, value);
};

const parseFromString = (document, isHTML, markupLanguage) => {
  const {active, registry} = document[CUSTOM_ELEMENTS];

  let node = document;
  let ownerSVGElement = null;
  let parsingCData = false;

  const content = new Parser({
    // <!DOCTYPE ...>
    onprocessinginstruction(name, data) {
      if (name.toLowerCase() === '!doctype')
        document.doctype = data.slice(name.length).trim();
    },

    // <tagName>
    onopentag(name, attributes) {
      let create = true;
      if (isHTML) {
        if (ownerSVGElement) {
          node = append(node, document.createElementNS(SVG_NAMESPACE, name), active);
          node.ownerSVGElement = ownerSVGElement;
          create = false;
        }
        else if (name === 'svg' || name === 'SVG') {
          ownerSVGElement = document.createElementNS(SVG_NAMESPACE, name);
          node = append(node, ownerSVGElement, active);
          create = false;
        }
        else if (active) {
          const ce = name.includes('-') ? name : (attributes.is || '');
          if (ce && registry.has(ce)) {
            const {Class} = registry.get(ce);
            node = append(node, new Class, active);
            delete attributes.is;
            create = false;
          }
        }
      }

      if (create)
        node = append(node, document.createElement(name), false);

      let end = node[END];
      for (const name of keys(attributes))
        attribute(node, end, document.createAttribute(name), attributes[name], active);
    },

    // #text, #comment
    oncomment(data) { append(node, document.createComment(data), active); },
    ontext(text) {
      if (parsingCData) {
        append(node, document.createCDATASection(text), active);
      } else {
        append(node, document.createTextNode(text), active);
      }
    },

    // #cdata
    oncdatastart() { parsingCData = true; },
    oncdataend() { parsingCData = false; },

    // </tagName>
    onclosetag() {
      if (isHTML && node === ownerSVGElement)
        ownerSVGElement = null;
      node = node.parentNode;
    }
  }, {
    lowerCaseAttributeNames: false,
    decodeEntities: true,
    xmlMode: !isHTML
  });

  content.write(markupLanguage);
  content.end();

  return document;
};

const htmlClasses = new Map;

const registerHTMLClass = (names, Class) => {
  for (const name of [].concat(names)) {
    htmlClasses.set(name, Class);
    htmlClasses.set(name.toUpperCase(), Class);
  }
};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function getAugmentedNamespace(n) {
  if (n.__esModule) return n;
  var f = n.default;
	if (typeof f == "function") {
		var a = function a () {
			if (this instanceof a) {
        return Reflect.construct(f, arguments, this.constructor);
			}
			return f.apply(this, arguments);
		};
		a.prototype = f.prototype;
  } else a = {};
  Object.defineProperty(a, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

var perf_hooks = {};

/* c8 ignore start */

var hasRequiredPerf_hooks;

function requirePerf_hooks () {
	if (hasRequiredPerf_hooks) return perf_hooks;
	hasRequiredPerf_hooks = 1;
	try {
	  const {performance} = require('perf_hooks');
	  perf_hooks.performance = performance;
	}
	catch (fallback) {
	  perf_hooks.performance = {now() { return +new Date; }};
	}
	/* c8 ignore stop */
	return perf_hooks;
}

var perf_hooksExports = requirePerf_hooks();

const loopSegment = ({[NEXT]: next, [END]: end}, json) => {
  while (next !== end) {
    switch (next.nodeType) {
      case ATTRIBUTE_NODE:
        attrAsJSON(next, json);
        break;
      case TEXT_NODE:
      case COMMENT_NODE:
      case CDATA_SECTION_NODE:
        characterDataAsJSON(next, json);
        break;
      case ELEMENT_NODE:
        elementAsJSON(next, json);
        next = getEnd(next);
        break;
      case DOCUMENT_TYPE_NODE:
        documentTypeAsJSON(next, json);
        break;
    }
    next = next[NEXT];
  }
  const last = json.length - 1;
  const value = json[last];
  if (typeof value === 'number' && value < 0)
    json[last] += NODE_END;
  else
    json.push(NODE_END);
};

const attrAsJSON = (attr, json) => {
  json.push(ATTRIBUTE_NODE, attr.name);
  const value = attr[VALUE].trim();
  if (value)
    json.push(value);
};

const characterDataAsJSON = (node, json) => {
  const value = node[VALUE];
  if (value.trim())
    json.push(node.nodeType, value);
};

const nonElementAsJSON = (node, json) => {
  json.push(node.nodeType);
  loopSegment(node, json);
};

const documentTypeAsJSON = ({name, publicId, systemId}, json) => {
  json.push(DOCUMENT_TYPE_NODE, name);
  if (publicId)
    json.push(publicId);
  if (systemId)
    json.push(systemId);
};

const elementAsJSON = (element, json) => {
  json.push(ELEMENT_NODE, element.localName);
  loopSegment(element, json);
};

const createRecord =
  (type, target, addedNodes, removedNodes, attributeName, oldValue) =>
 ({type, target, addedNodes, removedNodes, attributeName, oldValue});

const queueAttribute = (
  observer, target, attributeName, attributeFilter, attributeOldValue, oldValue
) => {
  if ((!attributeFilter || attributeFilter.includes(attributeName))) {
    const {callback, records, scheduled} = observer;
    records.push(createRecord(
      'attributes', target,
      [], [],
      attributeName, attributeOldValue ? oldValue : void 0
    ));
    if (!scheduled) {
      observer.scheduled = true;
      Promise.resolve().then(() => {
        observer.scheduled = false;
        callback(records.splice(0), observer);
      });
    }
  }
};

const attributeChangedCallback = (element, attributeName, oldValue) => {
  const {ownerDocument} = element;
  const {active, observers} = ownerDocument[MUTATION_OBSERVER];
  if (active) {
    for (const observer of observers) {
      for (const [
        target,
        {
          childList,
          subtree,
          attributes,
          attributeFilter,
          attributeOldValue
        }
      ] of observer.nodes) {
        if (childList) {
          if (
            (subtree && (target === ownerDocument || target.contains(element))) ||
            (!subtree && target.children.includes(element))
          ) {
            queueAttribute(
              observer, element,
              attributeName, attributeFilter, attributeOldValue, oldValue
            );
            break;
          }
        }
        else if (
          attributes &&
          target === element
        ) {
          queueAttribute(
            observer, element,
            attributeName, attributeFilter, attributeOldValue, oldValue
          );
          break;
        }
      }
    }
  }
};

const moCallback = (element, parentNode) => {
  const {ownerDocument} = element;
  const {active, observers} = ownerDocument[MUTATION_OBSERVER];
  if (active) {
    for (const observer of observers) {
      for (const [target, {subtree, childList, characterData}] of observer.nodes) {
        if (childList) {
          if (
            (parentNode && (target === parentNode || /* c8 ignore next */(subtree && target.contains(parentNode)))) ||
            (!parentNode && ((subtree && (target === ownerDocument || /* c8 ignore next */target.contains(element))) ||
                            (!subtree && target[characterData ? 'childNodes' : 'children'].includes(element))))
          ) {
            const {callback, records, scheduled} = observer;
            records.push(createRecord(
              'childList', target,
              parentNode ? [] : [element], parentNode ? [element] : []
            ));
            if (!scheduled) {
              observer.scheduled = true;
              Promise.resolve().then(() => {
                observer.scheduled = false;
                callback(records.splice(0), observer);
              });
            }
            break;
          }
        }
      }
    }
  }
};

class MutationObserverClass {
  constructor(ownerDocument) {
    const observers = new Set;
    this.observers = observers;
    this.active = false;

    /**
     * @implements globalThis.MutationObserver
     */
    this.class = class MutationObserver {

      constructor(callback) {
        /**
         * @private
         */
        this.callback = callback;

        /**
         * @private
         */
        this.nodes = new Map;

        /**
         * @private
         */
        this.records = [];

        /**
         * @private
         */
        this.scheduled = false;
      }

      disconnect() {
        this.records.splice(0);
        this.nodes.clear();
        observers.delete(this);
        ownerDocument[MUTATION_OBSERVER].active = !!observers.size;
      }

      /**
       * @param {Element} target
       * @param {MutationObserverInit} options
       */
      observe(target, options = {
        subtree: false,
        childList: false,
        attributes: false,
        attributeFilter: null,
        attributeOldValue: false,
        characterData: false,
        // TODO: not implemented yet
        // characterDataOldValue: false
      }) {
        if (('attributeOldValue' in options) || ('attributeFilter' in options))
          options.attributes = true;
        // if ('characterDataOldValue' in options)
        //   options.characterData = true;
        options.childList = !!options.childList;
        options.subtree = !!options.subtree;
        this.nodes.set(target, options);
        observers.add(this);
        ownerDocument[MUTATION_OBSERVER].active = true;
      }

      /**
       * @returns {MutationRecord[]}
       */
      takeRecords() { return this.records.splice(0); }
    };
  }
}

const emptyAttributes = new Set([
  'allowfullscreen',
  'allowpaymentrequest',
  'async',
  'autofocus',
  'autoplay',
  'checked',
  'class',
  'contenteditable',
  'controls',
  'default',
  'defer',
  'disabled',
  'draggable',
  'formnovalidate',
  'hidden',
  'id',
  'ismap',
  'itemscope',
  'loop',
  'multiple',
  'muted',
  'nomodule',
  'novalidate',
  'open',
  'playsinline',
  'readonly',
  'required',
  'reversed',
  'selected',
  'style',
  'truespeed'
]);

const setAttribute = (element, attribute) => {
  const {[VALUE]: value, name} = attribute;
  attribute.ownerElement = element;
  knownSiblings(element, attribute, element[NEXT]);
  if (name === 'class')
    element.className = value;
  attributeChangedCallback(element, name, null);
  attributeChangedCallback$1(element, name, null, value);
};

const removeAttribute = (element, attribute) => {
  const {[VALUE]: value, name} = attribute;
  knownAdjacent(attribute[PREV], attribute[NEXT]);
  attribute.ownerElement = attribute[PREV] = attribute[NEXT] = null;
  if (name === 'class')
    element[CLASS_LIST] = null;
  attributeChangedCallback(element, name, value);
  attributeChangedCallback$1(element, name, value, null);
};

const booleanAttribute = {
  get(element, name) {
    return element.hasAttribute(name);
  },
  set(element, name, value) {
    if (value)
      element.setAttribute(name, '');
    else
      element.removeAttribute(name);
  }
};

const numericAttribute = {
  get(element, name) {
    return parseFloat(element.getAttribute(name) || 0);
  },
  set(element, name, value) {
    element.setAttribute(name, value);
  }
};

const stringAttribute = {
  get(element, name) {
    return element.getAttribute(name) || '';
  },
  set(element, name, value) {
    element.setAttribute(name, value);
  }
};

/* oddly enough, this apparently is not a thing
export const nullableAttribute = {
  get(element, name) {
    return element.getAttribute(name);
  },
  set(element, name, value) {
    if (value === null)
      element.removeAttribute(name);
    else
      element.setAttribute(name, value);
  }
};
*/

// https://dom.spec.whatwg.org/#interface-eventtarget

const wm = new WeakMap();

function dispatch(event, listener) {
  if (typeof listener === 'function')
    listener.call(event.target, event);
  else
    listener.handleEvent(event);
  return event._stopImmediatePropagationFlag;
}

function invokeListeners({currentTarget, target}) {
  const map = wm.get(currentTarget);
  if (map && map.has(this.type)) {
    const listeners = map.get(this.type);
    if (currentTarget === target) {
      this.eventPhase = this.AT_TARGET;
    } else {
      this.eventPhase = this.BUBBLING_PHASE;
    }

    this.currentTarget = currentTarget;
    this.target = target;
    for (const [listener, options] of listeners) {
      if (options && options.once)
        listeners.delete(listener);
      if (dispatch(this, listener))
        break;
    }
    delete this.currentTarget;
    delete this.target;
    return this.cancelBubble;
  }
}


/**
 * @implements globalThis.EventTarget
 */
class DOMEventTarget {

  constructor() {
    wm.set(this, new Map);
  }

  /**
   * @protected
   */
  _getParent() {
    return null;
  }

  addEventListener(type, listener, options) {
    const map = wm.get(this);
    if (!map.has(type)) 
      map.set(type, new Map);
    map.get(type).set(listener, options);
  }

  removeEventListener(type, listener) {
    const map = wm.get(this);
    if (map.has(type)) {
      const listeners = map.get(type);
      if (listeners.delete(listener) && !listeners.size)
        map.delete(type);
    }
  }

  dispatchEvent(event) {
    let node = this;
    event.eventPhase = event.CAPTURING_PHASE;

    // intentionally simplified, specs imply way more code: https://dom.spec.whatwg.org/#event-path
    while (node) {
      if (node.dispatchEvent)
        event._path.push({currentTarget: node, target: this});
      node = event.bubbles && node._getParent && node._getParent();
    }
    event._path.some(invokeListeners, event);
    event._path = [];
    event.eventPhase = event.NONE;
    return !event.defaultPrevented;
  }

}

// https://dom.spec.whatwg.org/#interface-nodelist

/**
 * @implements globalThis.NodeList
 */
class NodeList extends Array {
  item(i) { return i < this.length ? this[i] : null; }
}

// https://dom.spec.whatwg.org/#node


const getParentNodeCount = ({parentNode}) => {
  let count = 0;
  while (parentNode) {
    count++;
    parentNode = parentNode.parentNode;
  }
  return count;
};

/**
 * @implements globalThis.Node
 */
let Node$1 = class Node extends DOMEventTarget {

  static get ELEMENT_NODE() { return ELEMENT_NODE; }
  static get ATTRIBUTE_NODE() { return ATTRIBUTE_NODE; }
  static get TEXT_NODE() { return TEXT_NODE; }
  static get CDATA_SECTION_NODE() { return CDATA_SECTION_NODE; }
  static get COMMENT_NODE() { return COMMENT_NODE; }
  static get DOCUMENT_NODE() { return DOCUMENT_NODE; }
  static get DOCUMENT_FRAGMENT_NODE() { return DOCUMENT_FRAGMENT_NODE; }
  static get DOCUMENT_TYPE_NODE() { return DOCUMENT_TYPE_NODE; }

  constructor(ownerDocument, localName, nodeType) {
    super();
    this.ownerDocument = ownerDocument;
    this.localName = localName;
    this.nodeType = nodeType;
    this.parentNode = null;
    this[NEXT] = null;
    this[PREV] = null;
  }

  get ELEMENT_NODE() { return ELEMENT_NODE; }
  get ATTRIBUTE_NODE() { return ATTRIBUTE_NODE; }
  get TEXT_NODE() { return TEXT_NODE; }
  get CDATA_SECTION_NODE() { return CDATA_SECTION_NODE; }
  get COMMENT_NODE() { return COMMENT_NODE; }
  get DOCUMENT_NODE() { return DOCUMENT_NODE; }
  get DOCUMENT_FRAGMENT_NODE() { return DOCUMENT_FRAGMENT_NODE; }
  get DOCUMENT_TYPE_NODE() { return DOCUMENT_TYPE_NODE; }

  get baseURI() {
    const ownerDocument = this.nodeType === DOCUMENT_NODE ?
                            this : this.ownerDocument;
    if (ownerDocument) {
      const base = ownerDocument.querySelector('base');
      if (base)
        return base.getAttribute('href');

      const {location} = ownerDocument.defaultView;
      if (location)
        return location.href;
    }

    return null;
  }

  /* c8 ignore start */
  // mixin: node
  get isConnected() { return false; }
  get nodeName() { return this.localName; }
  get parentElement() { return null; }
  get previousSibling() { return null; }
  get previousElementSibling() { return null; }
  get nextSibling() { return null; }
  get nextElementSibling() { return null; }
  get childNodes() { return new NodeList; }
  get firstChild() { return null; }
  get lastChild() { return null; }

  // default values
  get nodeValue() { return null; }
  set nodeValue(value) {}
  get textContent() { return null; }
  set textContent(value) {}
  normalize() {}
  cloneNode() { return null; }
  contains() { return false; }
  /**
   * Inserts a node before a reference node as a child of this parent node.
   * @param {Node} newNode The node to be inserted.
   * @param {Node} referenceNode The node before which newNode is inserted. If this is null, then newNode is inserted at the end of node's child nodes.
   * @returns The added child
   */
  // eslint-disable-next-line no-unused-vars
  insertBefore(newNode, referenceNode) { return newNode }
  /**
   * Adds a node to the end of the list of children of this node.
   * @param {Node} child The node to append to the given parent node.
   * @returns The appended child.
   */
  appendChild(child) { return child }
  /**
   * Replaces a child node within this node
   * @param {Node} newChild The new node to replace oldChild.
   * @param {Node} oldChild The child to be replaced.
   * @returns The replaced Node. This is the same node as oldChild.
   */
  replaceChild(newChild, oldChild) { return oldChild }
  /**
   * Removes a child node from the DOM.
   * @param {Node} child A Node that is the child node to be removed from the DOM.
   * @returns The removed node.
   */
  removeChild(child) { return child }
  toString() { return ''; }
  /* c8 ignore stop */

  hasChildNodes() { return !!this.lastChild; }
  isSameNode(node) { return this === node; }

  // TODO: attributes?
  compareDocumentPosition(target) {
    let result = 0;
    if (this !== target) {
      let self = getParentNodeCount(this);
      let other = getParentNodeCount(target);
      if (self < other) {
        result += DOCUMENT_POSITION_FOLLOWING;
        if (this.contains(target))
          result += DOCUMENT_POSITION_CONTAINED_BY;
      }
      else if (other < self) {
        result += DOCUMENT_POSITION_PRECEDING;
        if (target.contains(this))
          result += DOCUMENT_POSITION_CONTAINS;
      }
      else if (self && other) {
        const {childNodes} = this.parentNode;
        if (childNodes.indexOf(this) < childNodes.indexOf(target))
          result += DOCUMENT_POSITION_FOLLOWING;
        else
          result += DOCUMENT_POSITION_PRECEDING;
      }
      if (!self || !other) {
        result += DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
        result += DOCUMENT_POSITION_DISCONNECTED;
      }
    }
    return result;
  }

  isEqualNode(node) {
    if (this === node)
      return true;
    if (this.nodeType === node.nodeType) {
      switch (this.nodeType) {
        case DOCUMENT_NODE:
        case DOCUMENT_FRAGMENT_NODE: {
          const aNodes = this.childNodes;
          const bNodes = node.childNodes;
          return aNodes.length === bNodes.length && aNodes.every((node, i) => node.isEqualNode(bNodes[i]));
        }
      }
      return this.toString() === node.toString();
    }
    return false;
  }

  /**
   * @protected
   */
  _getParent() {
    return this.parentNode;
  }

  /**
   * Calling it on an element inside a standard web page will return an HTMLDocument object representing the entire page (or <iframe>).
   * Calling it on an element inside a shadow DOM will return the associated ShadowRoot.
   * @return {ShadowRoot | HTMLDocument}
   */
  getRootNode() {
    let root = this;
    while (root.parentNode)
      root = root.parentNode;
    return root;
  }
};

const {replace} = '';

// escape
const ca = /[<>&\xA0]/g;

const esca = {
  '\xA0': '&#160;',
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;'
};

const pe = m => esca[m];

/**
 * Safely escape HTML entities such as `&`, `<`, `>` only.
 * @param {string} es the input to safely escape
 * @returns {string} the escaped input, and it **throws** an error if
 *  the input type is unexpected, except for boolean and numbers,
 *  converted as string.
 */
const escape = es => replace.call(es, ca, pe);

const QUOTE = /"/g;

/**
 * @implements globalThis.Attr
 */
let Attr$1 = class Attr extends Node$1 {
  constructor(ownerDocument, name, value = '') {
    super(ownerDocument, name, ATTRIBUTE_NODE);
    this.ownerElement = null;
    this.name = $String(name);
    this[VALUE] = $String(value);
    this[CHANGED] = false;
  }

  get value() { return this[VALUE]; }
  set value(newValue) {
    const {[VALUE]: oldValue, name, ownerElement} = this;
    this[VALUE] = $String(newValue);
    this[CHANGED] = true;
    if (ownerElement) {
      attributeChangedCallback(ownerElement, name, oldValue);
      attributeChangedCallback$1(ownerElement, name, oldValue, this[VALUE]);
    }
  }

  cloneNode() {
    const {ownerDocument, name, [VALUE]: value} = this;
    return new Attr(ownerDocument, name, value);
  }

  toString() {
    const {name, [VALUE]: value} = this;
    if (emptyAttributes.has(name) && !value) {
      return ignoreCase(this) ? name : `${name}=""`;
    }
    const escapedValue = (ignoreCase(this) ? value : escape(value)).replace(QUOTE, '&quot;');
    return `${name}="${escapedValue}"`;
  }

  toJSON() {
    const json = [];
    attrAsJSON(this, json);
    return json;
  }
};

const isConnected = ({ownerDocument, parentNode}) => {
  while (parentNode) {
    if (parentNode === ownerDocument)
      return true;
    parentNode = parentNode.parentNode || parentNode.host;
  }
  return false;
};

const parentElement = ({parentNode}) => {
  if (parentNode) {
    switch (parentNode.nodeType) {
      case DOCUMENT_NODE:
      case DOCUMENT_FRAGMENT_NODE:
        return null;
    }
  }
  return parentNode;
};

const previousSibling = ({[PREV]: prev}) => {
  switch (prev ? prev.nodeType : 0) {
    case NODE_END:
      return prev[START];
    case TEXT_NODE:
    case COMMENT_NODE:
    case CDATA_SECTION_NODE:
      return prev;
  }
  return null;
};

const nextSibling = node => {
  const next = getEnd(node)[NEXT];
  return next && (next.nodeType === NODE_END ? null : next);
};

// https://dom.spec.whatwg.org/#nondocumenttypechildnode
// CharacterData, Element


const nextElementSibling = node => {
  let next = nextSibling(node);
  while (next && next.nodeType !== ELEMENT_NODE)
    next = nextSibling(next);
  return next;
};

const previousElementSibling = node => {
  let prev = previousSibling(node);
  while (prev && prev.nodeType !== ELEMENT_NODE)
    prev = previousSibling(prev);
  return prev;
};

// https://dom.spec.whatwg.org/#childnode
// CharacterData, DocumentType, Element


const asFragment = (ownerDocument, nodes) => {
  const fragment = ownerDocument.createDocumentFragment();
  fragment.append(...nodes);
  return fragment;
};

const before = (node, nodes) => {
  const {ownerDocument, parentNode} = node;
  if (parentNode)
    parentNode.insertBefore(
      asFragment(ownerDocument, nodes),
      node
    );
};

const after = (node, nodes) => {
  const {ownerDocument, parentNode} = node;
  if (parentNode)
    parentNode.insertBefore(
      asFragment(ownerDocument, nodes),
      getEnd(node)[NEXT]
    );
};

const replaceWith = (node, nodes) => {
  const {ownerDocument, parentNode} = node;
  if (parentNode) {
    if (nodes.includes(node))
      replaceWith(node, [node = node.cloneNode()]);
    parentNode.insertBefore(
      asFragment(ownerDocument, nodes),
      node
    );
    node.remove();
  }
};

const remove = (prev, current, next) => {
  const {parentNode, nodeType} = current;
  if (prev || next) {
    setAdjacent(prev, next);
    current[PREV] = null;
    getEnd(current)[NEXT] = null;
  }
  if (parentNode) {
    current.parentNode = null;
    moCallback(current, parentNode);
    if (nodeType === ELEMENT_NODE)
      disconnectedCallback(current);
  }
};

// https://dom.spec.whatwg.org/#interface-characterdata


/**
 * @implements globalThis.CharacterData
 */
let CharacterData$1 = class CharacterData extends Node$1 {

  constructor(ownerDocument, localName, nodeType, data) {
    super(ownerDocument, localName, nodeType);
    this[VALUE] = $String(data);
  }

  // <Mixins>
  get isConnected() { return isConnected(this); }
  get parentElement() { return parentElement(this); }
  get previousSibling() { return previousSibling(this); }
  get nextSibling() { return nextSibling(this); }

  get previousElementSibling() { return previousElementSibling(this); }
  get nextElementSibling() { return nextElementSibling(this); }

  before(...nodes) { before(this, nodes); }
  after(...nodes) { after(this, nodes); }
  replaceWith(...nodes) { replaceWith(this, nodes); }
  remove() { remove(this[PREV], this, this[NEXT]); }
  // </Mixins>

  // CharacterData only
  /* c8 ignore start */
  get data() { return this[VALUE]; }
  set data(value) {
    this[VALUE] = $String(value);
    moCallback(this, this.parentNode);
  }

  get nodeValue() { return this.data; }
  set nodeValue(value) { this.data = value; }

  get textContent() { return this.data; }
  set textContent(value) { this.data = value; }

  get length() { return this.data.length; }

  substringData(offset, count) {
    return this.data.substr(offset, count);
  }

  appendData(data) {
    this.data += data;
  }

  insertData(offset, data) {
    const {data: t} = this;
    this.data = t.slice(0, offset) + data + t.slice(offset);
  }

  deleteData(offset, count) {
    const {data: t} = this;
    this.data = t.slice(0, offset) + t.slice(offset + count);
  }

  replaceData(offset, count, data) {
    const {data: t} = this;
    this.data = t.slice(0, offset) + data + t.slice(offset + count);
  }
  /* c8 ignore stop */

  toJSON() {
    const json = [];
    characterDataAsJSON(this, json);
    return json;
  }
};

/**
 * @implements globalThis.CDATASection
 */
let CDATASection$1 = class CDATASection extends CharacterData$1 {
  constructor(ownerDocument, data = '') {
    super(ownerDocument, '#cdatasection', CDATA_SECTION_NODE, data);
  }

  cloneNode() {
    const {ownerDocument, [VALUE]: data} = this;
    return new CDATASection(ownerDocument, data);
  }

  toString() { return `<![CDATA[${this[VALUE]}]]>`; }
};

/**
 * @implements globalThis.Comment
 */
let Comment$1 = class Comment extends CharacterData$1 {
  constructor(ownerDocument, data = '') {
    super(ownerDocument, '#comment', COMMENT_NODE, data);
  }

  cloneNode() {
    const {ownerDocument, [VALUE]: data} = this;
    return new Comment(ownerDocument, data);
  }

  toString() { return `<!--${this[VALUE]}-->`; }
};

var boolbase$1;
var hasRequiredBoolbase;

function requireBoolbase () {
	if (hasRequiredBoolbase) return boolbase$1;
	hasRequiredBoolbase = 1;
	boolbase$1 = {
		trueFunc: function trueFunc(){
			return true;
		},
		falseFunc: function falseFunc(){
			return false;
		}
	};
	return boolbase$1;
}

var boolbaseExports = requireBoolbase();
var boolbase = /*@__PURE__*/getDefaultExportFromCjs(boolbaseExports);

var SelectorType;
(function (SelectorType) {
    SelectorType["Attribute"] = "attribute";
    SelectorType["Pseudo"] = "pseudo";
    SelectorType["PseudoElement"] = "pseudo-element";
    SelectorType["Tag"] = "tag";
    SelectorType["Universal"] = "universal";
    // Traversals
    SelectorType["Adjacent"] = "adjacent";
    SelectorType["Child"] = "child";
    SelectorType["Descendant"] = "descendant";
    SelectorType["Parent"] = "parent";
    SelectorType["Sibling"] = "sibling";
    SelectorType["ColumnCombinator"] = "column-combinator";
})(SelectorType || (SelectorType = {}));
var AttributeAction;
(function (AttributeAction) {
    AttributeAction["Any"] = "any";
    AttributeAction["Element"] = "element";
    AttributeAction["End"] = "end";
    AttributeAction["Equals"] = "equals";
    AttributeAction["Exists"] = "exists";
    AttributeAction["Hyphen"] = "hyphen";
    AttributeAction["Not"] = "not";
    AttributeAction["Start"] = "start";
})(AttributeAction || (AttributeAction = {}));

const reName = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/;
const reEscape = /\\([\da-f]{1,6}\s?|(\s)|.)/gi;
const actionTypes = new Map([
    [126 /* Tilde */, AttributeAction.Element],
    [94 /* Circumflex */, AttributeAction.Start],
    [36 /* Dollar */, AttributeAction.End],
    [42 /* Asterisk */, AttributeAction.Any],
    [33 /* ExclamationMark */, AttributeAction.Not],
    [124 /* Pipe */, AttributeAction.Hyphen],
]);
// Pseudos, whose data property is parsed as well.
const unpackPseudos = new Set([
    "has",
    "not",
    "matches",
    "is",
    "where",
    "host",
    "host-context",
]);
/**
 * Checks whether a specific selector is a traversal.
 * This is useful eg. in swapping the order of elements that
 * are not traversals.
 *
 * @param selector Selector to check.
 */
function isTraversal$1(selector) {
    switch (selector.type) {
        case SelectorType.Adjacent:
        case SelectorType.Child:
        case SelectorType.Descendant:
        case SelectorType.Parent:
        case SelectorType.Sibling:
        case SelectorType.ColumnCombinator:
            return true;
        default:
            return false;
    }
}
const stripQuotesFromPseudos = new Set(["contains", "icontains"]);
// Unescape function taken from https://github.com/jquery/sizzle/blob/master/src/sizzle.js#L152
function funescape(_, escaped, escapedWhitespace) {
    const high = parseInt(escaped, 16) - 0x10000;
    // NaN means non-codepoint
    return high !== high || escapedWhitespace
        ? escaped
        : high < 0
            ? // BMP codepoint
                String.fromCharCode(high + 0x10000)
            : // Supplemental Plane codepoint (surrogate pair)
                String.fromCharCode((high >> 10) | 0xd800, (high & 0x3ff) | 0xdc00);
}
function unescapeCSS(str) {
    return str.replace(reEscape, funescape);
}
function isQuote(c) {
    return c === 39 /* SingleQuote */ || c === 34 /* DoubleQuote */;
}
function isWhitespace(c) {
    return (c === 32 /* Space */ ||
        c === 9 /* Tab */ ||
        c === 10 /* NewLine */ ||
        c === 12 /* FormFeed */ ||
        c === 13 /* CarriageReturn */);
}
/**
 * Parses `selector`, optionally with the passed `options`.
 *
 * @param selector Selector to parse.
 * @param options Options for parsing.
 * @returns Returns a two-dimensional array.
 * The first dimension represents selectors separated by commas (eg. `sub1, sub2`),
 * the second contains the relevant tokens for that selector.
 */
function parse$2(selector) {
    const subselects = [];
    const endIndex = parseSelector(subselects, `${selector}`, 0);
    if (endIndex < selector.length) {
        throw new Error(`Unmatched selector: ${selector.slice(endIndex)}`);
    }
    return subselects;
}
function parseSelector(subselects, selector, selectorIndex) {
    let tokens = [];
    function getName(offset) {
        const match = selector.slice(selectorIndex + offset).match(reName);
        if (!match) {
            throw new Error(`Expected name, found ${selector.slice(selectorIndex)}`);
        }
        const [name] = match;
        selectorIndex += offset + name.length;
        return unescapeCSS(name);
    }
    function stripWhitespace(offset) {
        selectorIndex += offset;
        while (selectorIndex < selector.length &&
            isWhitespace(selector.charCodeAt(selectorIndex))) {
            selectorIndex++;
        }
    }
    function readValueWithParenthesis() {
        selectorIndex += 1;
        const start = selectorIndex;
        let counter = 1;
        for (; counter > 0 && selectorIndex < selector.length; selectorIndex++) {
            if (selector.charCodeAt(selectorIndex) ===
                40 /* LeftParenthesis */ &&
                !isEscaped(selectorIndex)) {
                counter++;
            }
            else if (selector.charCodeAt(selectorIndex) ===
                41 /* RightParenthesis */ &&
                !isEscaped(selectorIndex)) {
                counter--;
            }
        }
        if (counter) {
            throw new Error("Parenthesis not matched");
        }
        return unescapeCSS(selector.slice(start, selectorIndex - 1));
    }
    function isEscaped(pos) {
        let slashCount = 0;
        while (selector.charCodeAt(--pos) === 92 /* BackSlash */)
            slashCount++;
        return (slashCount & 1) === 1;
    }
    function ensureNotTraversal() {
        if (tokens.length > 0 && isTraversal$1(tokens[tokens.length - 1])) {
            throw new Error("Did not expect successive traversals.");
        }
    }
    function addTraversal(type) {
        if (tokens.length > 0 &&
            tokens[tokens.length - 1].type === SelectorType.Descendant) {
            tokens[tokens.length - 1].type = type;
            return;
        }
        ensureNotTraversal();
        tokens.push({ type });
    }
    function addSpecialAttribute(name, action) {
        tokens.push({
            type: SelectorType.Attribute,
            name,
            action,
            value: getName(1),
            namespace: null,
            ignoreCase: "quirks",
        });
    }
    /**
     * We have finished parsing the current part of the selector.
     *
     * Remove descendant tokens at the end if they exist,
     * and return the last index, so that parsing can be
     * picked up from here.
     */
    function finalizeSubselector() {
        if (tokens.length &&
            tokens[tokens.length - 1].type === SelectorType.Descendant) {
            tokens.pop();
        }
        if (tokens.length === 0) {
            throw new Error("Empty sub-selector");
        }
        subselects.push(tokens);
    }
    stripWhitespace(0);
    if (selector.length === selectorIndex) {
        return selectorIndex;
    }
    loop: while (selectorIndex < selector.length) {
        const firstChar = selector.charCodeAt(selectorIndex);
        switch (firstChar) {
            // Whitespace
            case 32 /* Space */:
            case 9 /* Tab */:
            case 10 /* NewLine */:
            case 12 /* FormFeed */:
            case 13 /* CarriageReturn */: {
                if (tokens.length === 0 ||
                    tokens[0].type !== SelectorType.Descendant) {
                    ensureNotTraversal();
                    tokens.push({ type: SelectorType.Descendant });
                }
                stripWhitespace(1);
                break;
            }
            // Traversals
            case 62 /* GreaterThan */: {
                addTraversal(SelectorType.Child);
                stripWhitespace(1);
                break;
            }
            case 60 /* LessThan */: {
                addTraversal(SelectorType.Parent);
                stripWhitespace(1);
                break;
            }
            case 126 /* Tilde */: {
                addTraversal(SelectorType.Sibling);
                stripWhitespace(1);
                break;
            }
            case 43 /* Plus */: {
                addTraversal(SelectorType.Adjacent);
                stripWhitespace(1);
                break;
            }
            // Special attribute selectors: .class, #id
            case 46 /* Period */: {
                addSpecialAttribute("class", AttributeAction.Element);
                break;
            }
            case 35 /* Hash */: {
                addSpecialAttribute("id", AttributeAction.Equals);
                break;
            }
            case 91 /* LeftSquareBracket */: {
                stripWhitespace(1);
                // Determine attribute name and namespace
                let name;
                let namespace = null;
                if (selector.charCodeAt(selectorIndex) === 124 /* Pipe */) {
                    // Equivalent to no namespace
                    name = getName(1);
                }
                else if (selector.startsWith("*|", selectorIndex)) {
                    namespace = "*";
                    name = getName(2);
                }
                else {
                    name = getName(0);
                    if (selector.charCodeAt(selectorIndex) === 124 /* Pipe */ &&
                        selector.charCodeAt(selectorIndex + 1) !==
                            61 /* Equal */) {
                        namespace = name;
                        name = getName(1);
                    }
                }
                stripWhitespace(0);
                // Determine comparison operation
                let action = AttributeAction.Exists;
                const possibleAction = actionTypes.get(selector.charCodeAt(selectorIndex));
                if (possibleAction) {
                    action = possibleAction;
                    if (selector.charCodeAt(selectorIndex + 1) !==
                        61 /* Equal */) {
                        throw new Error("Expected `=`");
                    }
                    stripWhitespace(2);
                }
                else if (selector.charCodeAt(selectorIndex) === 61 /* Equal */) {
                    action = AttributeAction.Equals;
                    stripWhitespace(1);
                }
                // Determine value
                let value = "";
                let ignoreCase = null;
                if (action !== "exists") {
                    if (isQuote(selector.charCodeAt(selectorIndex))) {
                        const quote = selector.charCodeAt(selectorIndex);
                        let sectionEnd = selectorIndex + 1;
                        while (sectionEnd < selector.length &&
                            (selector.charCodeAt(sectionEnd) !== quote ||
                                isEscaped(sectionEnd))) {
                            sectionEnd += 1;
                        }
                        if (selector.charCodeAt(sectionEnd) !== quote) {
                            throw new Error("Attribute value didn't end");
                        }
                        value = unescapeCSS(selector.slice(selectorIndex + 1, sectionEnd));
                        selectorIndex = sectionEnd + 1;
                    }
                    else {
                        const valueStart = selectorIndex;
                        while (selectorIndex < selector.length &&
                            ((!isWhitespace(selector.charCodeAt(selectorIndex)) &&
                                selector.charCodeAt(selectorIndex) !==
                                    93 /* RightSquareBracket */) ||
                                isEscaped(selectorIndex))) {
                            selectorIndex += 1;
                        }
                        value = unescapeCSS(selector.slice(valueStart, selectorIndex));
                    }
                    stripWhitespace(0);
                    // See if we have a force ignore flag
                    const forceIgnore = selector.charCodeAt(selectorIndex) | 0x20;
                    // If the forceIgnore flag is set (either `i` or `s`), use that value
                    if (forceIgnore === 115 /* LowerS */) {
                        ignoreCase = false;
                        stripWhitespace(1);
                    }
                    else if (forceIgnore === 105 /* LowerI */) {
                        ignoreCase = true;
                        stripWhitespace(1);
                    }
                }
                if (selector.charCodeAt(selectorIndex) !==
                    93 /* RightSquareBracket */) {
                    throw new Error("Attribute selector didn't terminate");
                }
                selectorIndex += 1;
                const attributeSelector = {
                    type: SelectorType.Attribute,
                    name,
                    action,
                    value,
                    namespace,
                    ignoreCase,
                };
                tokens.push(attributeSelector);
                break;
            }
            case 58 /* Colon */: {
                if (selector.charCodeAt(selectorIndex + 1) === 58 /* Colon */) {
                    tokens.push({
                        type: SelectorType.PseudoElement,
                        name: getName(2).toLowerCase(),
                        data: selector.charCodeAt(selectorIndex) ===
                            40 /* LeftParenthesis */
                            ? readValueWithParenthesis()
                            : null,
                    });
                    continue;
                }
                const name = getName(1).toLowerCase();
                let data = null;
                if (selector.charCodeAt(selectorIndex) ===
                    40 /* LeftParenthesis */) {
                    if (unpackPseudos.has(name)) {
                        if (isQuote(selector.charCodeAt(selectorIndex + 1))) {
                            throw new Error(`Pseudo-selector ${name} cannot be quoted`);
                        }
                        data = [];
                        selectorIndex = parseSelector(data, selector, selectorIndex + 1);
                        if (selector.charCodeAt(selectorIndex) !==
                            41 /* RightParenthesis */) {
                            throw new Error(`Missing closing parenthesis in :${name} (${selector})`);
                        }
                        selectorIndex += 1;
                    }
                    else {
                        data = readValueWithParenthesis();
                        if (stripQuotesFromPseudos.has(name)) {
                            const quot = data.charCodeAt(0);
                            if (quot === data.charCodeAt(data.length - 1) &&
                                isQuote(quot)) {
                                data = data.slice(1, -1);
                            }
                        }
                        data = unescapeCSS(data);
                    }
                }
                tokens.push({ type: SelectorType.Pseudo, name, data });
                break;
            }
            case 44 /* Comma */: {
                finalizeSubselector();
                tokens = [];
                stripWhitespace(1);
                break;
            }
            default: {
                if (selector.startsWith("/*", selectorIndex)) {
                    const endIndex = selector.indexOf("*/", selectorIndex + 2);
                    if (endIndex < 0) {
                        throw new Error("Comment was not terminated");
                    }
                    selectorIndex = endIndex + 2;
                    // Remove leading whitespace
                    if (tokens.length === 0) {
                        stripWhitespace(0);
                    }
                    break;
                }
                let namespace = null;
                let name;
                if (firstChar === 42 /* Asterisk */) {
                    selectorIndex += 1;
                    name = "*";
                }
                else if (firstChar === 124 /* Pipe */) {
                    name = "";
                    if (selector.charCodeAt(selectorIndex + 1) === 124 /* Pipe */) {
                        addTraversal(SelectorType.ColumnCombinator);
                        stripWhitespace(2);
                        break;
                    }
                }
                else if (reName.test(selector.slice(selectorIndex))) {
                    name = getName(0);
                }
                else {
                    break loop;
                }
                if (selector.charCodeAt(selectorIndex) === 124 /* Pipe */ &&
                    selector.charCodeAt(selectorIndex + 1) !== 124 /* Pipe */) {
                    namespace = name;
                    if (selector.charCodeAt(selectorIndex + 1) ===
                        42 /* Asterisk */) {
                        name = "*";
                        selectorIndex += 2;
                    }
                    else {
                        name = getName(1);
                    }
                }
                tokens.push(name === "*"
                    ? { type: SelectorType.Universal, namespace }
                    : { type: SelectorType.Tag, name, namespace });
            }
        }
    }
    finalizeSubselector();
    return selectorIndex;
}

const procedure = new Map([
    [SelectorType.Universal, 50],
    [SelectorType.Tag, 30],
    [SelectorType.Attribute, 1],
    [SelectorType.Pseudo, 0],
]);
function isTraversal(token) {
    return !procedure.has(token.type);
}
const attributes = new Map([
    [AttributeAction.Exists, 10],
    [AttributeAction.Equals, 8],
    [AttributeAction.Not, 7],
    [AttributeAction.Start, 6],
    [AttributeAction.End, 6],
    [AttributeAction.Any, 5],
]);
/**
 * Sort the parts of the passed selector,
 * as there is potential for optimization
 * (some types of selectors are faster than others)
 *
 * @param arr Selector to sort
 */
function sortByProcedure(arr) {
    const procs = arr.map(getProcedure);
    for (let i = 1; i < arr.length; i++) {
        const procNew = procs[i];
        if (procNew < 0)
            continue;
        for (let j = i - 1; j >= 0 && procNew < procs[j]; j--) {
            const token = arr[j + 1];
            arr[j + 1] = arr[j];
            arr[j] = token;
            procs[j + 1] = procs[j];
            procs[j] = procNew;
        }
    }
}
function getProcedure(token) {
    var _a, _b;
    let proc = (_a = procedure.get(token.type)) !== null && _a !== void 0 ? _a : -1;
    if (token.type === SelectorType.Attribute) {
        proc = (_b = attributes.get(token.action)) !== null && _b !== void 0 ? _b : 4;
        if (token.action === AttributeAction.Equals && token.name === "id") {
            // Prefer ID selectors (eg. #ID)
            proc = 9;
        }
        if (token.ignoreCase) {
            /*
             * IgnoreCase adds some overhead, prefer "normal" token
             * this is a binary operation, to ensure it's still an int
             */
            proc >>= 1;
        }
    }
    else if (token.type === SelectorType.Pseudo) {
        if (!token.data) {
            proc = 3;
        }
        else if (token.name === "has" || token.name === "contains") {
            proc = 0; // Expensive in any case
        }
        else if (Array.isArray(token.data)) {
            // Eg. :matches, :not
            proc = Math.min(...token.data.map((d) => Math.min(...d.map(getProcedure))));
            // If we have traversals, try to avoid executing this selector
            if (proc < 0) {
                proc = 0;
            }
        }
        else {
            proc = 2;
        }
    }
    return proc;
}

/**
 * All reserved characters in a regex, used for escaping.
 *
 * Taken from XRegExp, (c) 2007-2020 Steven Levithan under the MIT license
 * https://github.com/slevithan/xregexp/blob/95eeebeb8fac8754d54eafe2b4743661ac1cf028/src/xregexp.js#L794
 */
const reChars = /[-[\]{}()*+?.,\\^$|#\s]/g;
function escapeRegex(value) {
    return value.replace(reChars, "\\$&");
}
/**
 * Attributes that are case-insensitive in HTML.
 *
 * @private
 * @see https://html.spec.whatwg.org/multipage/semantics-other.html#case-sensitivity-of-selectors
 */
const caseInsensitiveAttributes = new Set([
    "accept",
    "accept-charset",
    "align",
    "alink",
    "axis",
    "bgcolor",
    "charset",
    "checked",
    "clear",
    "codetype",
    "color",
    "compact",
    "declare",
    "defer",
    "dir",
    "direction",
    "disabled",
    "enctype",
    "face",
    "frame",
    "hreflang",
    "http-equiv",
    "lang",
    "language",
    "link",
    "media",
    "method",
    "multiple",
    "nohref",
    "noresize",
    "noshade",
    "nowrap",
    "readonly",
    "rel",
    "rev",
    "rules",
    "scope",
    "scrolling",
    "selected",
    "shape",
    "target",
    "text",
    "type",
    "valign",
    "valuetype",
    "vlink",
]);
function shouldIgnoreCase(selector, options) {
    return typeof selector.ignoreCase === "boolean"
        ? selector.ignoreCase
        : selector.ignoreCase === "quirks"
            ? !!options.quirksMode
            : !options.xmlMode && caseInsensitiveAttributes.has(selector.name);
}
/**
 * Attribute selectors
 */
const attributeRules = {
    equals(next, data, options) {
        const { adapter } = options;
        const { name } = data;
        let { value } = data;
        if (shouldIgnoreCase(data, options)) {
            value = value.toLowerCase();
            return (elem) => {
                const attr = adapter.getAttributeValue(elem, name);
                return (attr != null &&
                    attr.length === value.length &&
                    attr.toLowerCase() === value &&
                    next(elem));
            };
        }
        return (elem) => adapter.getAttributeValue(elem, name) === value && next(elem);
    },
    hyphen(next, data, options) {
        const { adapter } = options;
        const { name } = data;
        let { value } = data;
        const len = value.length;
        if (shouldIgnoreCase(data, options)) {
            value = value.toLowerCase();
            return function hyphenIC(elem) {
                const attr = adapter.getAttributeValue(elem, name);
                return (attr != null &&
                    (attr.length === len || attr.charAt(len) === "-") &&
                    attr.substr(0, len).toLowerCase() === value &&
                    next(elem));
            };
        }
        return function hyphen(elem) {
            const attr = adapter.getAttributeValue(elem, name);
            return (attr != null &&
                (attr.length === len || attr.charAt(len) === "-") &&
                attr.substr(0, len) === value &&
                next(elem));
        };
    },
    element(next, data, options) {
        const { adapter } = options;
        const { name, value } = data;
        if (/\s/.test(value)) {
            return boolbase.falseFunc;
        }
        const regex = new RegExp(`(?:^|\\s)${escapeRegex(value)}(?:$|\\s)`, shouldIgnoreCase(data, options) ? "i" : "");
        return function element(elem) {
            const attr = adapter.getAttributeValue(elem, name);
            return (attr != null &&
                attr.length >= value.length &&
                regex.test(attr) &&
                next(elem));
        };
    },
    exists(next, { name }, { adapter }) {
        return (elem) => adapter.hasAttrib(elem, name) && next(elem);
    },
    start(next, data, options) {
        const { adapter } = options;
        const { name } = data;
        let { value } = data;
        const len = value.length;
        if (len === 0) {
            return boolbase.falseFunc;
        }
        if (shouldIgnoreCase(data, options)) {
            value = value.toLowerCase();
            return (elem) => {
                const attr = adapter.getAttributeValue(elem, name);
                return (attr != null &&
                    attr.length >= len &&
                    attr.substr(0, len).toLowerCase() === value &&
                    next(elem));
            };
        }
        return (elem) => {
            var _a;
            return !!((_a = adapter.getAttributeValue(elem, name)) === null || _a === void 0 ? void 0 : _a.startsWith(value)) &&
                next(elem);
        };
    },
    end(next, data, options) {
        const { adapter } = options;
        const { name } = data;
        let { value } = data;
        const len = -value.length;
        if (len === 0) {
            return boolbase.falseFunc;
        }
        if (shouldIgnoreCase(data, options)) {
            value = value.toLowerCase();
            return (elem) => {
                var _a;
                return ((_a = adapter
                    .getAttributeValue(elem, name)) === null || _a === void 0 ? void 0 : _a.substr(len).toLowerCase()) === value && next(elem);
            };
        }
        return (elem) => {
            var _a;
            return !!((_a = adapter.getAttributeValue(elem, name)) === null || _a === void 0 ? void 0 : _a.endsWith(value)) &&
                next(elem);
        };
    },
    any(next, data, options) {
        const { adapter } = options;
        const { name, value } = data;
        if (value === "") {
            return boolbase.falseFunc;
        }
        if (shouldIgnoreCase(data, options)) {
            const regex = new RegExp(escapeRegex(value), "i");
            return function anyIC(elem) {
                const attr = adapter.getAttributeValue(elem, name);
                return (attr != null &&
                    attr.length >= value.length &&
                    regex.test(attr) &&
                    next(elem));
            };
        }
        return (elem) => {
            var _a;
            return !!((_a = adapter.getAttributeValue(elem, name)) === null || _a === void 0 ? void 0 : _a.includes(value)) &&
                next(elem);
        };
    },
    not(next, data, options) {
        const { adapter } = options;
        const { name } = data;
        let { value } = data;
        if (value === "") {
            return (elem) => !!adapter.getAttributeValue(elem, name) && next(elem);
        }
        else if (shouldIgnoreCase(data, options)) {
            value = value.toLowerCase();
            return (elem) => {
                const attr = adapter.getAttributeValue(elem, name);
                return ((attr == null ||
                    attr.length !== value.length ||
                    attr.toLowerCase() !== value) &&
                    next(elem));
            };
        }
        return (elem) => adapter.getAttributeValue(elem, name) !== value && next(elem);
    },
};

// Following http://www.w3.org/TR/css3-selectors/#nth-child-pseudo
// Whitespace as per https://www.w3.org/TR/selectors-3/#lex is " \t\r\n\f"
const whitespace = new Set([9, 10, 12, 13, 32]);
const ZERO = "0".charCodeAt(0);
const NINE = "9".charCodeAt(0);
/**
 * Parses an expression.
 *
 * @throws An `Error` if parsing fails.
 * @returns An array containing the integer step size and the integer offset of the nth rule.
 * @example nthCheck.parse("2n+3"); // returns [2, 3]
 */
function parse$1(formula) {
    formula = formula.trim().toLowerCase();
    if (formula === "even") {
        return [2, 0];
    }
    else if (formula === "odd") {
        return [2, 1];
    }
    // Parse [ ['-'|'+']? INTEGER? {N} [ S* ['-'|'+'] S* INTEGER ]?
    let idx = 0;
    let a = 0;
    let sign = readSign();
    let number = readNumber();
    if (idx < formula.length && formula.charAt(idx) === "n") {
        idx++;
        a = sign * (number !== null && number !== void 0 ? number : 1);
        skipWhitespace();
        if (idx < formula.length) {
            sign = readSign();
            skipWhitespace();
            number = readNumber();
        }
        else {
            sign = number = 0;
        }
    }
    // Throw if there is anything else
    if (number === null || idx < formula.length) {
        throw new Error(`n-th rule couldn't be parsed ('${formula}')`);
    }
    return [a, sign * number];
    function readSign() {
        if (formula.charAt(idx) === "-") {
            idx++;
            return -1;
        }
        if (formula.charAt(idx) === "+") {
            idx++;
        }
        return 1;
    }
    function readNumber() {
        const start = idx;
        let value = 0;
        while (idx < formula.length &&
            formula.charCodeAt(idx) >= ZERO &&
            formula.charCodeAt(idx) <= NINE) {
            value = value * 10 + (formula.charCodeAt(idx) - ZERO);
            idx++;
        }
        // Return `null` if we didn't read anything.
        return idx === start ? null : value;
    }
    function skipWhitespace() {
        while (idx < formula.length &&
            whitespace.has(formula.charCodeAt(idx))) {
            idx++;
        }
    }
}

/**
 * Returns a function that checks if an elements index matches the given rule
 * highly optimized to return the fastest solution.
 *
 * @param parsed A tuple [a, b], as returned by `parse`.
 * @returns A highly optimized function that returns whether an index matches the nth-check.
 * @example
 *
 * ```js
 * const check = nthCheck.compile([2, 3]);
 *
 * check(0); // `false`
 * check(1); // `false`
 * check(2); // `true`
 * check(3); // `false`
 * check(4); // `true`
 * check(5); // `false`
 * check(6); // `true`
 * ```
 */
function compile$2(parsed) {
    const a = parsed[0];
    // Subtract 1 from `b`, to convert from one- to zero-indexed.
    const b = parsed[1] - 1;
    /*
     * When `b <= 0`, `a * n` won't be lead to any matches for `a < 0`.
     * Besides, the specification states that no elements are
     * matched when `a` and `b` are 0.
     *
     * `b < 0` here as we subtracted 1 from `b` above.
     */
    if (b < 0 && a <= 0)
        return boolbase.falseFunc;
    // When `a` is in the range -1..1, it matches any element (so only `b` is checked).
    if (a === -1)
        return (index) => index <= b;
    if (a === 0)
        return (index) => index === b;
    // When `b <= 0` and `a === 1`, they match any element.
    if (a === 1)
        return b < 0 ? boolbase.trueFunc : (index) => index >= b;
    /*
     * Otherwise, modulo can be used to check if there is a match.
     *
     * Modulo doesn't care about the sign, so let's use `a`s absolute value.
     */
    const absA = Math.abs(a);
    // Get `b mod a`, + a if this is negative.
    const bMod = ((b % absA) + absA) % absA;
    return a > 1
        ? (index) => index >= b && index % absA === bMod
        : (index) => index <= b && index % absA === bMod;
}

/**
 * Parses and compiles a formula to a highly optimized function.
 * Combination of {@link parse} and {@link compile}.
 *
 * If the formula doesn't match any elements,
 * it returns [`boolbase`](https://github.com/fb55/boolbase)'s `falseFunc`.
 * Otherwise, a function accepting an _index_ is returned, which returns
 * whether or not the passed _index_ matches the formula.
 *
 * Note: The nth-rule starts counting at `1`, the returned function at `0`.
 *
 * @param formula The formula to compile.
 * @example
 * const check = nthCheck("2n+3");
 *
 * check(0); // `false`
 * check(1); // `false`
 * check(2); // `true`
 * check(3); // `false`
 * check(4); // `true`
 * check(5); // `false`
 * check(6); // `true`
 */
function nthCheck(formula) {
    return compile$2(parse$1(formula));
}

function getChildFunc(next, adapter) {
    return (elem) => {
        const parent = adapter.getParent(elem);
        return parent != null && adapter.isTag(parent) && next(elem);
    };
}
const filters = {
    contains(next, text, { adapter }) {
        return function contains(elem) {
            return next(elem) && adapter.getText(elem).includes(text);
        };
    },
    icontains(next, text, { adapter }) {
        const itext = text.toLowerCase();
        return function icontains(elem) {
            return (next(elem) &&
                adapter.getText(elem).toLowerCase().includes(itext));
        };
    },
    // Location specific methods
    "nth-child"(next, rule, { adapter, equals }) {
        const func = nthCheck(rule);
        if (func === boolbase.falseFunc)
            return boolbase.falseFunc;
        if (func === boolbase.trueFunc)
            return getChildFunc(next, adapter);
        return function nthChild(elem) {
            const siblings = adapter.getSiblings(elem);
            let pos = 0;
            for (let i = 0; i < siblings.length; i++) {
                if (equals(elem, siblings[i]))
                    break;
                if (adapter.isTag(siblings[i])) {
                    pos++;
                }
            }
            return func(pos) && next(elem);
        };
    },
    "nth-last-child"(next, rule, { adapter, equals }) {
        const func = nthCheck(rule);
        if (func === boolbase.falseFunc)
            return boolbase.falseFunc;
        if (func === boolbase.trueFunc)
            return getChildFunc(next, adapter);
        return function nthLastChild(elem) {
            const siblings = adapter.getSiblings(elem);
            let pos = 0;
            for (let i = siblings.length - 1; i >= 0; i--) {
                if (equals(elem, siblings[i]))
                    break;
                if (adapter.isTag(siblings[i])) {
                    pos++;
                }
            }
            return func(pos) && next(elem);
        };
    },
    "nth-of-type"(next, rule, { adapter, equals }) {
        const func = nthCheck(rule);
        if (func === boolbase.falseFunc)
            return boolbase.falseFunc;
        if (func === boolbase.trueFunc)
            return getChildFunc(next, adapter);
        return function nthOfType(elem) {
            const siblings = adapter.getSiblings(elem);
            let pos = 0;
            for (let i = 0; i < siblings.length; i++) {
                const currentSibling = siblings[i];
                if (equals(elem, currentSibling))
                    break;
                if (adapter.isTag(currentSibling) &&
                    adapter.getName(currentSibling) === adapter.getName(elem)) {
                    pos++;
                }
            }
            return func(pos) && next(elem);
        };
    },
    "nth-last-of-type"(next, rule, { adapter, equals }) {
        const func = nthCheck(rule);
        if (func === boolbase.falseFunc)
            return boolbase.falseFunc;
        if (func === boolbase.trueFunc)
            return getChildFunc(next, adapter);
        return function nthLastOfType(elem) {
            const siblings = adapter.getSiblings(elem);
            let pos = 0;
            for (let i = siblings.length - 1; i >= 0; i--) {
                const currentSibling = siblings[i];
                if (equals(elem, currentSibling))
                    break;
                if (adapter.isTag(currentSibling) &&
                    adapter.getName(currentSibling) === adapter.getName(elem)) {
                    pos++;
                }
            }
            return func(pos) && next(elem);
        };
    },
    // TODO determine the actual root element
    root(next, _rule, { adapter }) {
        return (elem) => {
            const parent = adapter.getParent(elem);
            return (parent == null || !adapter.isTag(parent)) && next(elem);
        };
    },
    scope(next, rule, options, context) {
        const { equals } = options;
        if (!context || context.length === 0) {
            // Equivalent to :root
            return filters["root"](next, rule, options);
        }
        if (context.length === 1) {
            // NOTE: can't be unpacked, as :has uses this for side-effects
            return (elem) => equals(context[0], elem) && next(elem);
        }
        return (elem) => context.includes(elem) && next(elem);
    },
    hover: dynamicStatePseudo("isHovered"),
    visited: dynamicStatePseudo("isVisited"),
    active: dynamicStatePseudo("isActive"),
};
/**
 * Dynamic state pseudos. These depend on optional Adapter methods.
 *
 * @param name The name of the adapter method to call.
 * @returns Pseudo for the `filters` object.
 */
function dynamicStatePseudo(name) {
    return function dynamicPseudo(next, _rule, { adapter }) {
        const func = adapter[name];
        if (typeof func !== "function") {
            return boolbase.falseFunc;
        }
        return function active(elem) {
            return func(elem) && next(elem);
        };
    };
}

// While filters are precompiled, pseudos get called when they are needed
const pseudos = {
    empty(elem, { adapter }) {
        return !adapter.getChildren(elem).some((elem) => 
        // FIXME: `getText` call is potentially expensive.
        adapter.isTag(elem) || adapter.getText(elem) !== "");
    },
    "first-child"(elem, { adapter, equals }) {
        if (adapter.prevElementSibling) {
            return adapter.prevElementSibling(elem) == null;
        }
        const firstChild = adapter
            .getSiblings(elem)
            .find((elem) => adapter.isTag(elem));
        return firstChild != null && equals(elem, firstChild);
    },
    "last-child"(elem, { adapter, equals }) {
        const siblings = adapter.getSiblings(elem);
        for (let i = siblings.length - 1; i >= 0; i--) {
            if (equals(elem, siblings[i]))
                return true;
            if (adapter.isTag(siblings[i]))
                break;
        }
        return false;
    },
    "first-of-type"(elem, { adapter, equals }) {
        const siblings = adapter.getSiblings(elem);
        const elemName = adapter.getName(elem);
        for (let i = 0; i < siblings.length; i++) {
            const currentSibling = siblings[i];
            if (equals(elem, currentSibling))
                return true;
            if (adapter.isTag(currentSibling) &&
                adapter.getName(currentSibling) === elemName) {
                break;
            }
        }
        return false;
    },
    "last-of-type"(elem, { adapter, equals }) {
        const siblings = adapter.getSiblings(elem);
        const elemName = adapter.getName(elem);
        for (let i = siblings.length - 1; i >= 0; i--) {
            const currentSibling = siblings[i];
            if (equals(elem, currentSibling))
                return true;
            if (adapter.isTag(currentSibling) &&
                adapter.getName(currentSibling) === elemName) {
                break;
            }
        }
        return false;
    },
    "only-of-type"(elem, { adapter, equals }) {
        const elemName = adapter.getName(elem);
        return adapter
            .getSiblings(elem)
            .every((sibling) => equals(elem, sibling) ||
            !adapter.isTag(sibling) ||
            adapter.getName(sibling) !== elemName);
    },
    "only-child"(elem, { adapter, equals }) {
        return adapter
            .getSiblings(elem)
            .every((sibling) => equals(elem, sibling) || !adapter.isTag(sibling));
    },
};
function verifyPseudoArgs(func, name, subselect, argIndex) {
    if (subselect === null) {
        if (func.length > argIndex) {
            throw new Error(`Pseudo-class :${name} requires an argument`);
        }
    }
    else if (func.length === argIndex) {
        throw new Error(`Pseudo-class :${name} doesn't have any arguments`);
    }
}

/**
 * Aliases are pseudos that are expressed as selectors.
 */
const aliases = {
    // Links
    "any-link": ":is(a, area, link)[href]",
    link: ":any-link:not(:visited)",
    // Forms
    // https://html.spec.whatwg.org/multipage/scripting.html#disabled-elements
    disabled: `:is(
        :is(button, input, select, textarea, optgroup, option)[disabled],
        optgroup[disabled] > option,
        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)
    )`,
    enabled: ":not(:disabled)",
    checked: ":is(:is(input[type=radio], input[type=checkbox])[checked], option:selected)",
    required: ":is(input, select, textarea)[required]",
    optional: ":is(input, select, textarea):not([required])",
    // JQuery extensions
    // https://html.spec.whatwg.org/multipage/form-elements.html#concept-option-selectedness
    selected: "option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)",
    checkbox: "[type=checkbox]",
    file: "[type=file]",
    password: "[type=password]",
    radio: "[type=radio]",
    reset: "[type=reset]",
    image: "[type=image]",
    submit: "[type=submit]",
    parent: ":not(:empty)",
    header: ":is(h1, h2, h3, h4, h5, h6)",
    button: ":is(button, input[type=button])",
    input: ":is(input, textarea, select, button)",
    text: "input:is(:not([type!='']), [type=text])",
};

/** Used as a placeholder for :has. Will be replaced with the actual element. */
const PLACEHOLDER_ELEMENT = {};
function ensureIsTag(next, adapter) {
    if (next === boolbase.falseFunc)
        return boolbase.falseFunc;
    return (elem) => adapter.isTag(elem) && next(elem);
}
function getNextSiblings(elem, adapter) {
    const siblings = adapter.getSiblings(elem);
    if (siblings.length <= 1)
        return [];
    const elemIndex = siblings.indexOf(elem);
    if (elemIndex < 0 || elemIndex === siblings.length - 1)
        return [];
    return siblings.slice(elemIndex + 1).filter(adapter.isTag);
}
function copyOptions(options) {
    // Not copied: context, rootFunc
    return {
        xmlMode: !!options.xmlMode,
        lowerCaseAttributeNames: !!options.lowerCaseAttributeNames,
        lowerCaseTags: !!options.lowerCaseTags,
        quirksMode: !!options.quirksMode,
        cacheResults: !!options.cacheResults,
        pseudos: options.pseudos,
        adapter: options.adapter,
        equals: options.equals,
    };
}
const is$1 = (next, token, options, context, compileToken) => {
    const func = compileToken(token, copyOptions(options), context);
    return func === boolbase.trueFunc
        ? next
        : func === boolbase.falseFunc
            ? boolbase.falseFunc
            : (elem) => func(elem) && next(elem);
};
/*
 * :not, :has, :is, :matches and :where have to compile selectors
 * doing this in src/pseudos.ts would lead to circular dependencies,
 * so we add them here
 */
const subselects = {
    is: is$1,
    /**
     * `:matches` and `:where` are aliases for `:is`.
     */
    matches: is$1,
    where: is$1,
    not(next, token, options, context, compileToken) {
        const func = compileToken(token, copyOptions(options), context);
        return func === boolbase.falseFunc
            ? next
            : func === boolbase.trueFunc
                ? boolbase.falseFunc
                : (elem) => !func(elem) && next(elem);
    },
    has(next, subselect, options, _context, compileToken) {
        const { adapter } = options;
        const opts = copyOptions(options);
        opts.relativeSelector = true;
        const context = subselect.some((s) => s.some(isTraversal))
            ? // Used as a placeholder. Will be replaced with the actual element.
                [PLACEHOLDER_ELEMENT]
            : undefined;
        const compiled = compileToken(subselect, opts, context);
        if (compiled === boolbase.falseFunc)
            return boolbase.falseFunc;
        const hasElement = ensureIsTag(compiled, adapter);
        // If `compiled` is `trueFunc`, we can skip this.
        if (context && compiled !== boolbase.trueFunc) {
            /*
             * `shouldTestNextSiblings` will only be true if the query starts with
             * a traversal (sibling or adjacent). That means we will always have a context.
             */
            const { shouldTestNextSiblings = false } = compiled;
            return (elem) => {
                if (!next(elem))
                    return false;
                context[0] = elem;
                const childs = adapter.getChildren(elem);
                const nextElements = shouldTestNextSiblings
                    ? [...childs, ...getNextSiblings(elem, adapter)]
                    : childs;
                return adapter.existsOne(hasElement, nextElements);
            };
        }
        return (elem) => next(elem) &&
            adapter.existsOne(hasElement, adapter.getChildren(elem));
    },
};

function compilePseudoSelector(next, selector, options, context, compileToken) {
    var _a;
    const { name, data } = selector;
    if (Array.isArray(data)) {
        if (!(name in subselects)) {
            throw new Error(`Unknown pseudo-class :${name}(${data})`);
        }
        return subselects[name](next, data, options, context, compileToken);
    }
    const userPseudo = (_a = options.pseudos) === null || _a === void 0 ? void 0 : _a[name];
    const stringPseudo = typeof userPseudo === "string" ? userPseudo : aliases[name];
    if (typeof stringPseudo === "string") {
        if (data != null) {
            throw new Error(`Pseudo ${name} doesn't have any arguments`);
        }
        // The alias has to be parsed here, to make sure options are respected.
        const alias = parse$2(stringPseudo);
        return subselects["is"](next, alias, options, context, compileToken);
    }
    if (typeof userPseudo === "function") {
        verifyPseudoArgs(userPseudo, name, data, 1);
        return (elem) => userPseudo(elem, data) && next(elem);
    }
    if (name in filters) {
        return filters[name](next, data, options, context);
    }
    if (name in pseudos) {
        const pseudo = pseudos[name];
        verifyPseudoArgs(pseudo, name, data, 2);
        return (elem) => pseudo(elem, options, data) && next(elem);
    }
    throw new Error(`Unknown pseudo-class :${name}`);
}

function getElementParent(node, adapter) {
    const parent = adapter.getParent(node);
    if (parent && adapter.isTag(parent)) {
        return parent;
    }
    return null;
}
/*
 * All available rules
 */
function compileGeneralSelector(next, selector, options, context, compileToken) {
    const { adapter, equals } = options;
    switch (selector.type) {
        case SelectorType.PseudoElement: {
            throw new Error("Pseudo-elements are not supported by css-select");
        }
        case SelectorType.ColumnCombinator: {
            throw new Error("Column combinators are not yet supported by css-select");
        }
        case SelectorType.Attribute: {
            if (selector.namespace != null) {
                throw new Error("Namespaced attributes are not yet supported by css-select");
            }
            if (!options.xmlMode || options.lowerCaseAttributeNames) {
                selector.name = selector.name.toLowerCase();
            }
            return attributeRules[selector.action](next, selector, options);
        }
        case SelectorType.Pseudo: {
            return compilePseudoSelector(next, selector, options, context, compileToken);
        }
        // Tags
        case SelectorType.Tag: {
            if (selector.namespace != null) {
                throw new Error("Namespaced tag names are not yet supported by css-select");
            }
            let { name } = selector;
            if (!options.xmlMode || options.lowerCaseTags) {
                name = name.toLowerCase();
            }
            return function tag(elem) {
                return adapter.getName(elem) === name && next(elem);
            };
        }
        // Traversal
        case SelectorType.Descendant: {
            if (options.cacheResults === false ||
                typeof WeakSet === "undefined") {
                return function descendant(elem) {
                    let current = elem;
                    while ((current = getElementParent(current, adapter))) {
                        if (next(current)) {
                            return true;
                        }
                    }
                    return false;
                };
            }
            // @ts-expect-error `ElementNode` is not extending object
            const isFalseCache = new WeakSet();
            return function cachedDescendant(elem) {
                let current = elem;
                while ((current = getElementParent(current, adapter))) {
                    if (!isFalseCache.has(current)) {
                        if (adapter.isTag(current) && next(current)) {
                            return true;
                        }
                        isFalseCache.add(current);
                    }
                }
                return false;
            };
        }
        case "_flexibleDescendant": {
            // Include element itself, only used while querying an array
            return function flexibleDescendant(elem) {
                let current = elem;
                do {
                    if (next(current))
                        return true;
                } while ((current = getElementParent(current, adapter)));
                return false;
            };
        }
        case SelectorType.Parent: {
            return function parent(elem) {
                return adapter
                    .getChildren(elem)
                    .some((elem) => adapter.isTag(elem) && next(elem));
            };
        }
        case SelectorType.Child: {
            return function child(elem) {
                const parent = adapter.getParent(elem);
                return parent != null && adapter.isTag(parent) && next(parent);
            };
        }
        case SelectorType.Sibling: {
            return function sibling(elem) {
                const siblings = adapter.getSiblings(elem);
                for (let i = 0; i < siblings.length; i++) {
                    const currentSibling = siblings[i];
                    if (equals(elem, currentSibling))
                        break;
                    if (adapter.isTag(currentSibling) && next(currentSibling)) {
                        return true;
                    }
                }
                return false;
            };
        }
        case SelectorType.Adjacent: {
            if (adapter.prevElementSibling) {
                return function adjacent(elem) {
                    const previous = adapter.prevElementSibling(elem);
                    return previous != null && next(previous);
                };
            }
            return function adjacent(elem) {
                const siblings = adapter.getSiblings(elem);
                let lastElement;
                for (let i = 0; i < siblings.length; i++) {
                    const currentSibling = siblings[i];
                    if (equals(elem, currentSibling))
                        break;
                    if (adapter.isTag(currentSibling)) {
                        lastElement = currentSibling;
                    }
                }
                return !!lastElement && next(lastElement);
            };
        }
        case SelectorType.Universal: {
            if (selector.namespace != null && selector.namespace !== "*") {
                throw new Error("Namespaced universal selectors are not yet supported by css-select");
            }
            return next;
        }
    }
}

/**
 * Compiles a selector to an executable function.
 *
 * @param selector Selector to compile.
 * @param options Compilation options.
 * @param context Optional context for the selector.
 */
function compile$1(selector, options, context) {
    const next = compileUnsafe(selector, options, context);
    return ensureIsTag(next, options.adapter);
}
function compileUnsafe(selector, options, context) {
    const token = typeof selector === "string" ? parse$2(selector) : selector;
    return compileToken(token, options, context);
}
function includesScopePseudo(t) {
    return (t.type === SelectorType.Pseudo &&
        (t.name === "scope" ||
            (Array.isArray(t.data) &&
                t.data.some((data) => data.some(includesScopePseudo)))));
}
const DESCENDANT_TOKEN = { type: SelectorType.Descendant };
const FLEXIBLE_DESCENDANT_TOKEN = {
    type: "_flexibleDescendant",
};
const SCOPE_TOKEN = {
    type: SelectorType.Pseudo,
    name: "scope",
    data: null,
};
/*
 * CSS 4 Spec (Draft): 3.4.1. Absolutizing a Relative Selector
 * http://www.w3.org/TR/selectors4/#absolutizing
 */
function absolutize(token, { adapter }, context) {
    // TODO Use better check if the context is a document
    const hasContext = !!(context === null || context === void 0 ? void 0 : context.every((e) => {
        const parent = adapter.isTag(e) && adapter.getParent(e);
        return e === PLACEHOLDER_ELEMENT || (parent && adapter.isTag(parent));
    }));
    for (const t of token) {
        if (t.length > 0 &&
            isTraversal(t[0]) &&
            t[0].type !== SelectorType.Descendant) ;
        else if (hasContext && !t.some(includesScopePseudo)) {
            t.unshift(DESCENDANT_TOKEN);
        }
        else {
            continue;
        }
        t.unshift(SCOPE_TOKEN);
    }
}
function compileToken(token, options, context) {
    var _a;
    token.forEach(sortByProcedure);
    context = (_a = options.context) !== null && _a !== void 0 ? _a : context;
    const isArrayContext = Array.isArray(context);
    const finalContext = context && (Array.isArray(context) ? context : [context]);
    // Check if the selector is relative
    if (options.relativeSelector !== false) {
        absolutize(token, options, finalContext);
    }
    else if (token.some((t) => t.length > 0 && isTraversal(t[0]))) {
        throw new Error("Relative selectors are not allowed when the `relativeSelector` option is disabled");
    }
    let shouldTestNextSiblings = false;
    const query = token
        .map((rules) => {
        if (rules.length >= 2) {
            const [first, second] = rules;
            if (first.type !== SelectorType.Pseudo ||
                first.name !== "scope") ;
            else if (isArrayContext &&
                second.type === SelectorType.Descendant) {
                rules[1] = FLEXIBLE_DESCENDANT_TOKEN;
            }
            else if (second.type === SelectorType.Adjacent ||
                second.type === SelectorType.Sibling) {
                shouldTestNextSiblings = true;
            }
        }
        return compileRules(rules, options, finalContext);
    })
        .reduce(reduceRules, boolbase.falseFunc);
    query.shouldTestNextSiblings = shouldTestNextSiblings;
    return query;
}
function compileRules(rules, options, context) {
    var _a;
    return rules.reduce((previous, rule) => previous === boolbase.falseFunc
        ? boolbase.falseFunc
        : compileGeneralSelector(previous, rule, options, context, compileToken), (_a = options.rootFunc) !== null && _a !== void 0 ? _a : boolbase.trueFunc);
}
function reduceRules(a, b) {
    if (b === boolbase.falseFunc || a === boolbase.trueFunc) {
        return a;
    }
    if (a === boolbase.falseFunc || b === boolbase.trueFunc) {
        return b;
    }
    return function combine(elem) {
        return a(elem) || b(elem);
    };
}

const defaultEquals = (a, b) => a === b;
const defaultOptions = {
    adapter: DomUtils,
    equals: defaultEquals,
};
function convertOptionFormats(options) {
    var _a, _b, _c, _d;
    /*
     * We force one format of options to the other one.
     */
    // @ts-expect-error Default options may have incompatible `Node` / `ElementNode`.
    const opts = options !== null && options !== void 0 ? options : defaultOptions;
    // @ts-expect-error Same as above.
    (_a = opts.adapter) !== null && _a !== void 0 ? _a : (opts.adapter = DomUtils);
    // @ts-expect-error `equals` does not exist on `Options`
    (_b = opts.equals) !== null && _b !== void 0 ? _b : (opts.equals = (_d = (_c = opts.adapter) === null || _c === void 0 ? void 0 : _c.equals) !== null && _d !== void 0 ? _d : defaultEquals);
    return opts;
}
function wrapCompile(func) {
    return function addAdapter(selector, options, context) {
        const opts = convertOptionFormats(options);
        return func(selector, opts, context);
    };
}
/**
 * Compiles the query, returns a function.
 */
const compile = wrapCompile(compile$1);
/**
 * Tests whether or not an element is matched by query.
 *
 * @template Node The generic Node type for the DOM adapter being used.
 * @template ElementNode The Node type for elements for the DOM adapter being used.
 * @param elem The element to test if it matches the query.
 * @param query can be either a CSS selector string or a compiled query function.
 * @param [options] options for querying the document.
 * @see compile for supported selector queries.
 * @returns
 */
function is(elem, query, options) {
    const opts = convertOptionFormats(options);
    return (typeof query === "function" ? query : compile$1(query, opts))(elem);
}

const {isArray} = Array;

/* c8 ignore start */
const isTag = ({nodeType}) => nodeType === ELEMENT_NODE;

const existsOne = (test, elements) => elements.some(
  element => isTag(element) && (
    test(element) ||
    existsOne(test, getChildren(element))
  )
);

const getAttributeValue = (element, name) => name === 'class' ?
                            element.classList.value : element.getAttribute(name);

const getChildren = ({childNodes}) => childNodes;

const getName = (element) => {
  const {localName} = element;
  return ignoreCase(element) ? localName.toLowerCase() : localName;
};

const getParent = ({parentNode}) => parentNode;

const getSiblings = element => {
  const {parentNode} = element;
  return parentNode ? getChildren(parentNode) : element;
};

const getText = node => {
  if (isArray(node))
    return node.map(getText).join('');
  if (isTag(node))
    return getText(getChildren(node));
  if (node.nodeType === TEXT_NODE)
    return node.data;
  return '';
};

const hasAttrib = (element, name) => element.hasAttribute(name);

const removeSubsets = nodes => {
  let {length} = nodes;
  while (length--) {
    const node = nodes[length];
    if (length && -1 < nodes.lastIndexOf(node, length - 1)) {
      nodes.splice(length, 1);
      continue;
    }
    for (let {parentNode} = node; parentNode; parentNode = parentNode.parentNode) {
      if (nodes.includes(parentNode)) {
        nodes.splice(length, 1);
        break;
      }
    }
  }
  return nodes;
};

const findAll = (test, nodes) => {
  const matches = [];
  for (const node of nodes) {
    if (isTag(node)) {
      if (test(node))
        matches.push(node);
      matches.push(...findAll(test, getChildren(node)));
    }
  }
  return matches;
};

const findOne = (test, nodes) => {
  for (let node of nodes)
    if (test(node) || (node = findOne(test, getChildren(node))))
      return node;
  return null;
};
/* c8 ignore stop */

const adapter = {
  isTag,
  existsOne,
  getAttributeValue,
  getChildren,
  getName,
  getParent,
  getSiblings,
  getText,
  hasAttrib,
  removeSubsets,
  findAll,
  findOne
};

const prepareMatch = (element, selectors) => compile(
  selectors,
  {
    context: selectors.includes(':scope') ? element : void 0,
    xmlMode: !ignoreCase(element),
    adapter
  }
);

const matches = (element, selectors) => is(
  element,
  selectors,
  {
    strict: true,
    context: selectors.includes(':scope') ? element : void 0,
    xmlMode: !ignoreCase(element),
    adapter
  }
);

/**
 * @implements globalThis.Text
 */
let Text$1 = class Text extends CharacterData$1 {
  constructor(ownerDocument, data = '') {
    super(ownerDocument, '#text', TEXT_NODE, data);
  }

  get wholeText() {
    const text = [];
    let {previousSibling, nextSibling} = this;
    while (previousSibling) {
      if (previousSibling.nodeType === TEXT_NODE)
        text.unshift(previousSibling[VALUE]);
      else
        break;
      previousSibling = previousSibling.previousSibling;
    }
    text.push(this[VALUE]);
    while (nextSibling) {
      if (nextSibling.nodeType === TEXT_NODE)
        text.push(nextSibling[VALUE]);
      else
        break;
      nextSibling = nextSibling.nextSibling;
    }
    return text.join('');
  }

  cloneNode() {
    const {ownerDocument, [VALUE]: data} = this;
    return new Text(ownerDocument, data);
  }

  toString() { return escape(this[VALUE]); }
};

// https://dom.spec.whatwg.org/#interface-parentnode
// Document, DocumentFragment, Element


const isNode = node => node instanceof Node$1;

const insert = (parentNode, child, nodes) => {
  const {ownerDocument} = parentNode;
  for (const node of nodes)
    parentNode.insertBefore(
      isNode(node) ? node : new Text$1(ownerDocument, node),
      child
    );
};

/** @typedef { import('../interface/element.js').Element & {
    [typeof NEXT]: NodeStruct,
    [typeof PREV]: NodeStruct,
    [typeof START]: NodeStruct,
    nodeType: typeof ATTRIBUTE_NODE | typeof DOCUMENT_FRAGMENT_NODE | typeof ELEMENT_NODE | typeof TEXT_NODE | typeof NODE_END | typeof COMMENT_NODE | typeof CDATA_SECTION_NODE,
    ownerDocument: Document,
    parentNode: ParentNode,
}} NodeStruct */

class ParentNode extends Node$1 {
  constructor(ownerDocument, localName, nodeType) {
    super(ownerDocument, localName, nodeType);
    this[PRIVATE] = null;
    /** @type {NodeStruct} */
    this[NEXT] = this[END] = {
      [NEXT]: null,
      [PREV]: this,
      [START]: this,
      nodeType: NODE_END,
      ownerDocument: this.ownerDocument,
      parentNode: null
    };
  }

  get childNodes() {
    const childNodes = new NodeList;
    let {firstChild} = this;
    while (firstChild) {
      childNodes.push(firstChild);
      firstChild = nextSibling(firstChild);
    }
    return childNodes;
  }

  get children() {
    const children = new NodeList;
    let {firstElementChild} = this;
    while (firstElementChild) {
      children.push(firstElementChild);
      firstElementChild = nextElementSibling(firstElementChild);
    }
    return children;
  }

  /**
   * @returns {NodeStruct | null}
   */
  get firstChild() {
    let {[NEXT]: next, [END]: end} = this;
    while (next.nodeType === ATTRIBUTE_NODE)
      next = next[NEXT];
    return next === end ? null : next;
  }

  /**
   * @returns {NodeStruct | null}
   */
  get firstElementChild() {
    let {firstChild} = this;
    while (firstChild) {
      if (firstChild.nodeType === ELEMENT_NODE)
        return firstChild;
      firstChild = nextSibling(firstChild);
    }
    return null;
  }

  get lastChild() {
    const prev = this[END][PREV];
    switch (prev.nodeType) {
      case NODE_END:
        return prev[START];
      case ATTRIBUTE_NODE:
        return null;
    }
    return prev === this ? null : prev;
  }

  get lastElementChild() {
    let {lastChild} = this;
    while (lastChild) {
      if (lastChild.nodeType === ELEMENT_NODE)
        return lastChild;
      lastChild = previousSibling(lastChild);
    }
    return null;
  }

  get childElementCount() {
    return this.children.length;
  }

  prepend(...nodes) {
    insert(this, this.firstChild, nodes);
  }

  append(...nodes) {
    insert(this, this[END], nodes);
  }

  replaceChildren(...nodes) {
    let {[NEXT]: next, [END]: end} = this;
    while (next !== end && next.nodeType === ATTRIBUTE_NODE)
      next = next[NEXT];
    while (next !== end) {
      const after = getEnd(next)[NEXT];
      next.remove();
      next = after;
    }
    if (nodes.length)
      insert(this, end, nodes);
  }

  getElementsByClassName(className) {
    const elements = new NodeList;
    let {[NEXT]: next, [END]: end} = this;
    while (next !== end) {
      if (
        next.nodeType === ELEMENT_NODE &&
        next.hasAttribute('class') &&
        next.classList.has(className)
      )
        elements.push(next);
      next = next[NEXT];
    }
    return elements;
  }

  getElementsByTagName(tagName) {
    const elements = new NodeList;
    let {[NEXT]: next, [END]: end} = this;
    while (next !== end) {
      if (next.nodeType === ELEMENT_NODE && (
        next.localName === tagName ||
        localCase(next) === tagName
      ))
        elements.push(next);
      next = next[NEXT];
    }
    return elements;
  }

  querySelector(selectors) {
    const matches = prepareMatch(this, selectors);
    let {[NEXT]: next, [END]: end} = this;
    while (next !== end) {
      if (next.nodeType === ELEMENT_NODE && matches(next))
        return next;
      next = next.nodeType === ELEMENT_NODE && next.localName === 'template' ? next[END] : next[NEXT];
    }
    return null;
  }

  querySelectorAll(selectors) {
    const matches = prepareMatch(this, selectors);
    const elements = new NodeList;
    let {[NEXT]: next, [END]: end} = this;
    while (next !== end) {
      if (next.nodeType === ELEMENT_NODE && matches(next))
        elements.push(next);
      next = next.nodeType === ELEMENT_NODE && next.localName === 'template' ? next[END] : next[NEXT];
    }
    return elements;
  }

  appendChild(node) {
    return this.insertBefore(node, this[END]);
  }

  contains(node) {
    let parentNode = node;
    while (parentNode && parentNode !== this)
      parentNode = parentNode.parentNode;
    return parentNode === this;
  }

  insertBefore(node, before = null) {
    if (node === before)
      return node;
    if (node === this)
      throw new Error('unable to append a node to itself');
    const next = before || this[END];
    switch (node.nodeType) {
      case ELEMENT_NODE:
        node.remove();
        node.parentNode = this;
        knownBoundaries(next[PREV], node, next);
        moCallback(node, null);
        connectedCallback(node);
        break;
      case DOCUMENT_FRAGMENT_NODE: {
        let {[PRIVATE]: parentNode, firstChild, lastChild} = node;
        if (firstChild) {
          knownSegment(next[PREV], firstChild, lastChild, next);
          knownAdjacent(node, node[END]);
          if (parentNode)
            parentNode.replaceChildren();
          do {
            firstChild.parentNode = this;
            moCallback(firstChild, null);
            if (firstChild.nodeType === ELEMENT_NODE)
              connectedCallback(firstChild);
          } while (
            firstChild !== lastChild &&
            (firstChild = nextSibling(firstChild))
          );
        }
        break;
      }
      case TEXT_NODE:
      case COMMENT_NODE:
      case CDATA_SECTION_NODE:
        node.remove();
      /* eslint no-fallthrough:0 */
      // this covers DOCUMENT_TYPE_NODE too
      default:
        node.parentNode = this;
        knownSiblings(next[PREV], node, next);
        moCallback(node, null);
        break;
    }
    return node;
  }

  normalize() {
    let {[NEXT]: next, [END]: end} = this;
    while (next !== end) {
      const {[NEXT]: $next, [PREV]: $prev, nodeType} = next;
      if (nodeType === TEXT_NODE) {
        if (!next[VALUE])
          next.remove();
        else if ($prev && $prev.nodeType === TEXT_NODE) {
          $prev.textContent += next.textContent;
          next.remove();
        }
      }
      next = $next;
    }
  }

  removeChild(node) {
    if (node.parentNode !== this)
      throw new Error('node is not a child');
    node.remove();
    return node;
  }

  replaceChild(node, replaced) {
    const next = getEnd(replaced)[NEXT];
    replaced.remove();
    this.insertBefore(node, next);
    return replaced;
  }
}

// https://dom.spec.whatwg.org/#interface-nonelementparentnode
// Document, DocumentFragment


class NonElementParentNode extends ParentNode {
  getElementById(id) {
    let {[NEXT]: next, [END]: end} = this;
    while (next !== end) {
      if (next.nodeType === ELEMENT_NODE && next.id === id)
        return next;
      next = next[NEXT];
    }
    return null;
  }

  cloneNode(deep) {
    const {ownerDocument, constructor} = this;
    const nonEPN = new constructor(ownerDocument);
    if (deep) {
      const {[END]: end} = nonEPN;
      for (const node of this.childNodes)
        nonEPN.insertBefore(node.cloneNode(deep), end);
    }
    return nonEPN; 
  }

  toString() {
    const {childNodes, localName} = this;
    return `<${localName}>${childNodes.join('')}</${localName}>`;
  }

  toJSON() {
    const json = [];
    nonElementAsJSON(this, json);
    return json;
  }
}

/**
 * @implements globalThis.DocumentFragment
 */
let DocumentFragment$1 = class DocumentFragment extends NonElementParentNode {
  constructor(ownerDocument) {
    super(ownerDocument, '#document-fragment', DOCUMENT_FRAGMENT_NODE);
  }
};

/**
 * @implements globalThis.DocumentType
 */
let DocumentType$1 = class DocumentType extends Node$1 {
  constructor(ownerDocument, name, publicId = '', systemId = '') {
    super(ownerDocument, '#document-type', DOCUMENT_TYPE_NODE);
    this.name = name;
    this.publicId = publicId;
    this.systemId = systemId;
  }

  cloneNode() {
    const {ownerDocument, name, publicId, systemId} = this;
    return new DocumentType(ownerDocument, name, publicId, systemId);
  }

  toString() {
    const {name, publicId, systemId} = this;
    const hasPublic = 0 < publicId.length;
    const str = [name];
    if (hasPublic)
      str.push('PUBLIC', `"${publicId}"`);
    if (systemId.length) {
      if (!hasPublic)
        str.push('SYSTEM');
      str.push(`"${systemId}"`);
    }
    return `<!DOCTYPE ${str.join(' ')}>`;
  }

  toJSON() {
    const json = [];
    documentTypeAsJSON(this, json);
    return json;
  }
};

/**
 * @param {Node} node
 * @returns {String}
 */
const getInnerHtml = node => node.childNodes.join('');

/**
 * @param {Node} node
 * @param {String} html
 */
const setInnerHtml = (node, html) => {
  const {ownerDocument} = node;
  const {constructor} = ownerDocument;
  const document = new constructor;
  document[CUSTOM_ELEMENTS] = ownerDocument[CUSTOM_ELEMENTS];
  const {childNodes} = parseFromString(document, ignoreCase(node), html);

  node.replaceChildren(...childNodes.map(setOwnerDocument, ownerDocument));
};

function setOwnerDocument(node) {
  node.ownerDocument = this;
  switch (node.nodeType) {
    case ELEMENT_NODE:
    case DOCUMENT_FRAGMENT_NODE:
      node.childNodes.forEach(setOwnerDocument, this);
      break;
  }
  return node;
}

var uhyphen = camel => camel.replace(/(([A-Z0-9])([A-Z0-9][a-z]))|(([a-z0-9]+)([A-Z]))/g, '$2$5-$3$6')
                             .toLowerCase();

const refs$1 = new WeakMap;

const key = name => `data-${uhyphen(name)}`;
const prop = name => name.slice(5).replace(/-([a-z])/g, (_, $1) => $1.toUpperCase());

const handler$2 = {
  get(dataset, name) {
    if (name in dataset)
      return refs$1.get(dataset).getAttribute(key(name));
  },

  set(dataset, name, value) {
    dataset[name] = value;
    refs$1.get(dataset).setAttribute(key(name), value);
    return true;
  },

  deleteProperty(dataset, name) {
    if (name in dataset)
      refs$1.get(dataset).removeAttribute(key(name));
    return delete dataset[name];
  }
};

/**
 * @implements globalThis.DOMStringMap
 */
class DOMStringMap {
  /**
   * @param {Element} ref
   */
  constructor(ref) {
    for (const {name, value} of ref.attributes) {
      if (/^data-/.test(name))
        this[prop(name)] = value;
    }
    refs$1.set(this, ref);
    return new Proxy(this, handler$2);
  }
}

setPrototypeOf(DOMStringMap.prototype, null);

const {add} = Set.prototype;
const addTokens = (self, tokens) => {
  for (const token of tokens) {
    if (token)
      add.call(self, token);
  }
};

const update = ({[OWNER_ELEMENT]: ownerElement, value}) => {
  const attribute = ownerElement.getAttributeNode('class');
  if (attribute)
    attribute.value = value;
  else
    setAttribute(
      ownerElement,
      new Attr$1(ownerElement.ownerDocument, 'class', value)
    );
};

/**
 * @implements globalThis.DOMTokenList
 */
class DOMTokenList extends Set {

  constructor(ownerElement) {
    super();
    this[OWNER_ELEMENT] = ownerElement;
    const attribute = ownerElement.getAttributeNode('class');
    if (attribute)
      addTokens(this, attribute.value.split(/\s+/));
  }

  get length() { return this.size; }

  get value() { return [...this].join(' '); }

  /**
   * @param  {...string} tokens
   */
  add(...tokens) {
    addTokens(this, tokens);
    update(this);
  }

  /**
   * @param {string} token
   */
  contains(token) { return this.has(token); }

  /**
   * @param  {...string} tokens
   */
  remove(...tokens) {
    for (const token of tokens)
      this.delete(token);
    update(this);
  }

  /**
   * @param {string} token
   * @param {boolean?} force
   */
  toggle(token, force) {
    if (this.has(token)) {
      if (force)
        return true;
      this.delete(token);
      update(this);
    }
    else if (force || arguments.length === 1) {
      super.add(token);
      update(this);
      return true;
    }
    return false;
  }

  /**
   * @param {string} token
   * @param {string} newToken
   */
  replace(token, newToken) {
    if (this.has(token)) {
      this.delete(token);
      super.add(newToken);
      update(this);
      return true;
    }
    return false;
  }

  /**
   * @param {string} token
   */
  supports() { return true; }
}

const refs = new WeakMap;

const getKeys = style => [...style.keys()].filter(key => key !== PRIVATE);

const updateKeys = style => {
  const attr = refs.get(style).getAttributeNode('style');
  if (!attr || attr[CHANGED] || style.get(PRIVATE) !== attr) {
    style.clear();
    if (attr) {
      style.set(PRIVATE, attr);
      for (const rule of attr[VALUE].split(/\s*;\s*/)) {
        let [key, ...rest] = rule.split(':');
        if (rest.length > 0) {
          key = key.trim();
          const value = rest.join(':').trim();
          if (key && value)
            style.set(key, value);
        }
      }
    }
  }
  return attr;
};

const handler$1 = {
  get(style, name) {
    if (name in prototype)
      return style[name];
    updateKeys(style);
    if (name === 'length')
      return getKeys(style).length;
    if (/^\d+$/.test(name))
      return getKeys(style)[name];
    return style.get(uhyphen(name));
  },

  set(style, name, value) {
    if (name === 'cssText')
      style[name] = value;
    else {
      let attr = updateKeys(style);
      if (value == null)
        style.delete(uhyphen(name));
      else
        style.set(uhyphen(name), value);
      if (!attr) {
        const element = refs.get(style);
        attr = element.ownerDocument.createAttribute('style');
        element.setAttributeNode(attr);
        style.set(PRIVATE, attr);
      }
      attr[CHANGED] = false;
      attr[VALUE] = style.toString();
    }
    return true;
  }
};

/**
 * @implements globalThis.CSSStyleDeclaration
 */
let CSSStyleDeclaration$1 = class CSSStyleDeclaration extends Map {
  constructor(element) {
    super();
    refs.set(this, element);
    /* c8 ignore start */
    return new Proxy(this, handler$1);
    /* c8 ignore stop */
  }

  get cssText() {
    return this.toString();
  }

  set cssText(value) {
    refs.get(this).setAttribute('style', value);
  }

  getPropertyValue(name) {
    const self = this[PRIVATE];
    return handler$1.get(self, name);
  }

  setProperty(name, value) {
    const self = this[PRIVATE];
    handler$1.set(self, name, value);
  }

  removeProperty(name) {
    const self = this[PRIVATE];
    handler$1.set(self, name, null);
  }

  [Symbol.iterator]() {
    const self = this[PRIVATE];
    updateKeys(self);
    const keys = getKeys(self);
    const {length} = keys;
    let i = 0;
    return {
      next() {
        const done = i === length;
        return {done, value: done ? null : keys[i++]};
      }
    };
  }

  get[PRIVATE]() { return this; }

  toString() {
    const self = this[PRIVATE];
    updateKeys(self);
    const cssText = [];
    self.forEach(push, cssText);
    return cssText.join(';');
  }
};

const {prototype} = CSSStyleDeclaration$1;

function push(value, key) {
  if (key !== PRIVATE)
    this.push(`${key}:${value}`);
}

// https://dom.spec.whatwg.org/#interface-event

/* c8 ignore start */

// Node 15 has Event but 14 and 12 don't
const BUBBLING_PHASE = 3;
const AT_TARGET = 2;
const CAPTURING_PHASE = 1;
const NONE = 0;

function getCurrentTarget(ev) {
  return ev.currentTarget;
}

/**
 * @implements globalThis.Event
 */
class GlobalEvent {
    static get BUBBLING_PHASE() { return BUBBLING_PHASE; }
    static get AT_TARGET() { return AT_TARGET; }
    static get CAPTURING_PHASE() { return CAPTURING_PHASE; }
    static get NONE() { return NONE; }

    constructor(type, eventInitDict = {}) {
      this.type = type;
      this.bubbles = !!eventInitDict.bubbles;
      this.cancelBubble = false;
      this._stopImmediatePropagationFlag = false;
      this.cancelable = !!eventInitDict.cancelable;
      this.eventPhase = this.NONE;
      this.timeStamp = Date.now();
      this.defaultPrevented = false;
      this.originalTarget = null;
      this.returnValue = null;
      this.srcElement = null;
      this.target = null;
      this._path = [];
    }

    get BUBBLING_PHASE() { return BUBBLING_PHASE; }
    get AT_TARGET() { return AT_TARGET; }
    get CAPTURING_PHASE() { return CAPTURING_PHASE; }
    get NONE() { return NONE; }

    preventDefault() { this.defaultPrevented = true; }

    // simplified implementation, should be https://dom.spec.whatwg.org/#dom-event-composedpath
    composedPath() {
      return this._path.map(getCurrentTarget);
    }

    stopPropagation() {
      this.cancelBubble = true;
    }
    
    stopImmediatePropagation() {
      this.stopPropagation();
      this._stopImmediatePropagationFlag = true;
    }
  }

/* c8 ignore stop */

/**
 * @implements globalThis.NamedNodeMap
 */
class NamedNodeMap extends Array {
  constructor(ownerElement) {
    super();
    this.ownerElement = ownerElement;
  }

  getNamedItem(name) {
    return this.ownerElement.getAttributeNode(name);
  }

  setNamedItem(attr) {
    this.ownerElement.setAttributeNode(attr);
    this.unshift(attr);
  }

  removeNamedItem(name) {
    const item = this.getNamedItem(name);
    this.ownerElement.removeAttribute(name);
    this.splice(this.indexOf(item), 1);
  }

  item(index) {
    return index < this.length ? this[index] : null;
  }

  /* c8 ignore start */
  getNamedItemNS(_, name) {
    return this.getNamedItem(name);
  }

  setNamedItemNS(_, attr) {
    return this.setNamedItem(attr);
  }

  removeNamedItemNS(_, name) {
    return this.removeNamedItem(name);
  }
  /* c8 ignore stop */
}

/**
 * @implements globalThis.ShadowRoot
 */
let ShadowRoot$1 = class ShadowRoot extends NonElementParentNode {
  constructor(host) {
    super(host.ownerDocument, '#shadow-root', DOCUMENT_FRAGMENT_NODE);
    this.host = host;
  }

  get innerHTML() {
    return getInnerHtml(this);
  }
  set innerHTML(html) {
    setInnerHtml(this, html);
  }
};

// https://dom.spec.whatwg.org/#interface-element


// <utils>
const attributesHandler = {
  get(target, key) {
    return key in target ? target[key] : target.find(({name}) => name === key);
  }
};

const create = (ownerDocument, element, localName)  => {
  if ('ownerSVGElement' in element) {
    const svg = ownerDocument.createElementNS(SVG_NAMESPACE, localName);
    svg.ownerSVGElement = element.ownerSVGElement;
    return svg;
  }
  return ownerDocument.createElement(localName);
};

const isVoid = ({localName, ownerDocument}) => {
  return ownerDocument[MIME].voidElements.test(localName);
};

// </utils>

/**
 * @implements globalThis.Element
 */
let Element$1 = class Element extends ParentNode {
  constructor(ownerDocument, localName) {
    super(ownerDocument, localName, ELEMENT_NODE);
    this[CLASS_LIST] = null;
    this[DATASET] = null;
    this[STYLE] = null;
  }

  // <Mixins>
  get isConnected() { return isConnected(this); }
  get parentElement() { return parentElement(this); }
  get previousSibling() { return previousSibling(this); }
  get nextSibling() { return nextSibling(this); }
  get namespaceURI() {
    return 'http://www.w3.org/1999/xhtml';
  }

  get previousElementSibling() { return previousElementSibling(this); }
  get nextElementSibling() { return nextElementSibling(this); }

  before(...nodes) { before(this, nodes); }
  after(...nodes) { after(this, nodes); }
  replaceWith(...nodes) { replaceWith(this, nodes); }
  remove() { remove(this[PREV], this, this[END][NEXT]); }
  // </Mixins>

  // <specialGetters>
  get id() { return stringAttribute.get(this, 'id'); }
  set id(value) { stringAttribute.set(this, 'id', value); }

  get className() { return this.classList.value; }
  set className(value) {
    const {classList} = this;
    classList.clear();
    classList.add(...($String(value).split(/\s+/)));
  }

  get nodeName() { return localCase(this); }
  get tagName() { return localCase(this); }

  get classList() {
    return this[CLASS_LIST] || (
      this[CLASS_LIST] = new DOMTokenList(this)
    );
  }

  get dataset() {
    return this[DATASET] || (
      this[DATASET] = new DOMStringMap(this)
    );
  }

  getBoundingClientRect() {
    return {
      x: 0,
      y: 0,
      bottom: 0,
      height: 0,
      left: 0,
      right: 0,
      top: 0,
      width: 0
    };
  }

  get nonce() { return stringAttribute.get(this, 'nonce'); }
  set nonce(value) { stringAttribute.set(this, 'nonce', value); }

  get style() {
    return this[STYLE] || (
      this[STYLE] = new CSSStyleDeclaration$1(this)
    );
  }

  get tabIndex() { return numericAttribute.get(this, 'tabindex') || -1; }
  set tabIndex(value) { numericAttribute.set(this, 'tabindex', value); }

  get slot() { return stringAttribute.get(this, 'slot'); }
  set slot(value) { stringAttribute.set(this, 'slot', value); }
  // </specialGetters>


  // <contentRelated>
  get innerText() {
    const text = [];
    let {[NEXT]: next, [END]: end} = this;
    while (next !== end) {
      if (next.nodeType === TEXT_NODE) {
        text.push(next.textContent.replace(/\s+/g, ' '));
      } else if(
        text.length && next[NEXT] != end &&
        BLOCK_ELEMENTS.has(next.tagName)
      ) {
        text.push('\n');
      }
      next = next[NEXT];
    }
    return text.join('');
  }

  /**
   * @returns {String}
   */
  get textContent() {
    const text = [];
    let {[NEXT]: next, [END]: end} = this;
    while (next !== end) {
      if (next.nodeType === TEXT_NODE)
        text.push(next.textContent);
      next = next[NEXT];
    }
    return text.join('');
  }

  set textContent(text) {
    this.replaceChildren();
    if (text != null && text !== '')
      this.appendChild(new Text$1(this.ownerDocument, text));
  }

  get innerHTML() {
    return getInnerHtml(this);
  }
  set innerHTML(html) {
    setInnerHtml(this, html);
  }

  get outerHTML() { return this.toString(); }
  set outerHTML(html) {
    const template = this.ownerDocument.createElement('');
    template.innerHTML = html;
    this.replaceWith(...template.childNodes);
  }
  // </contentRelated>

  // <attributes>
  get attributes() {
    const attributes = new NamedNodeMap(this);
    let next = this[NEXT];
    while (next.nodeType === ATTRIBUTE_NODE) {
      attributes.push(next);
      next = next[NEXT];
    }
    return new Proxy(attributes, attributesHandler);
  }

  focus() { this.dispatchEvent(new GlobalEvent('focus')); }

  getAttribute(name) {
    if (name === 'class')
      return this.className;
    const attribute = this.getAttributeNode(name);
    return attribute && (ignoreCase(this) ? attribute.value : escape(attribute.value));
  }

  getAttributeNode(name) {
    let next = this[NEXT];
    while (next.nodeType === ATTRIBUTE_NODE) {
      if (next.name === name)
        return next;
      next = next[NEXT];
    }
    return null;
  }

  getAttributeNames() {
    const attributes = new NodeList;
    let next = this[NEXT];
    while (next.nodeType === ATTRIBUTE_NODE) {
      attributes.push(next.name);
      next = next[NEXT];
    }
    return attributes;
  }

  hasAttribute(name) { return !!this.getAttributeNode(name); }
  hasAttributes() { return this[NEXT].nodeType === ATTRIBUTE_NODE; }

  removeAttribute(name) {
    if (name === 'class' && this[CLASS_LIST])
        this[CLASS_LIST].clear();
    let next = this[NEXT];
    while (next.nodeType === ATTRIBUTE_NODE) {
      if (next.name === name) {
        removeAttribute(this, next);
        return;
      }
      next = next[NEXT];
    }
  }

  removeAttributeNode(attribute) {
    let next = this[NEXT];
    while (next.nodeType === ATTRIBUTE_NODE) {
      if (next === attribute) {
        removeAttribute(this, next);
        return;
      }
      next = next[NEXT];
    }
  }

  setAttribute(name, value) {
    if (name === 'class')
      this.className = value;
    else {
      const attribute = this.getAttributeNode(name);
      if (attribute)
        attribute.value = value;
      else
        setAttribute(this, new Attr$1(this.ownerDocument, name, value));
    }
  }

  setAttributeNode(attribute) {
    const {name} = attribute;
    const previously = this.getAttributeNode(name);
    if (previously !== attribute) {
      if (previously)
        this.removeAttributeNode(previously);
      const {ownerElement} = attribute;
      if (ownerElement)
        ownerElement.removeAttributeNode(attribute);
      setAttribute(this, attribute);
    }
    return previously;
  }

  toggleAttribute(name, force) {
    if (this.hasAttribute(name)) {
      if (!force) {
        this.removeAttribute(name);
        return false;
      }
      return true;
    }
    else if (force || arguments.length === 1) {
      this.setAttribute(name, '');
      return true;
    }
    return false;
  }
  // </attributes>

  // <ShadowDOM>
  get shadowRoot() {
    if (shadowRoots.has(this)) {
      const {mode, shadowRoot} = shadowRoots.get(this);
      if (mode === 'open')
        return shadowRoot;
    }
    return null;
  }

  attachShadow(init) {
    if (shadowRoots.has(this))
      throw new Error('operation not supported');
    // TODO: shadowRoot should be likely a specialized class that extends DocumentFragment
    //       but until DSD is out, I am not sure I should spend time on this.
    const shadowRoot = new ShadowRoot$1(this);
    shadowRoots.set(this, {
      mode: init.mode,
      shadowRoot
    });
    return shadowRoot;
  }
  // </ShadowDOM>

  // <selectors>
  matches(selectors) { return matches(this, selectors); }
  closest(selectors) {
    let parentElement = this;
    const matches = prepareMatch(parentElement, selectors);
    while (parentElement && !matches(parentElement))
      parentElement = parentElement.parentElement;
    return parentElement;
  }
  // </selectors>

  // <insertAdjacent>
  insertAdjacentElement(position, element) {
    const {parentElement} = this;
    switch (position) {
      case 'beforebegin':
        if (parentElement) {
          parentElement.insertBefore(element, this);
          break;
        }
        return null;
      case 'afterbegin':
        this.insertBefore(element, this.firstChild);
        break;
      case 'beforeend':
        this.insertBefore(element, null);
        break;
      case 'afterend':
        if (parentElement) {
          parentElement.insertBefore(element, this.nextSibling);
          break;
        }
        return null;
    }
    return element;
  }

  insertAdjacentHTML(position, html) {
    const template = this.ownerDocument.createElement('template');
    template.innerHTML = html;
    this.insertAdjacentElement(position, template.content);
  }

  insertAdjacentText(position, text) {
    const node = this.ownerDocument.createTextNode(text);
    this.insertAdjacentElement(position, node);
  }
  // </insertAdjacent>

  cloneNode(deep = false) {
    const {ownerDocument, localName} = this;
    const addNext = next => {
      next.parentNode = parentNode;
      knownAdjacent($next, next);
      $next = next;
    };
    const clone = create(ownerDocument, this, localName);
    let parentNode = clone, $next = clone;
    let {[NEXT]: next, [END]: prev} = this;
    while (next !== prev && (deep || next.nodeType === ATTRIBUTE_NODE)) {
      switch (next.nodeType) {
        case NODE_END:
          knownAdjacent($next, parentNode[END]);
          $next = parentNode[END];
          parentNode = parentNode.parentNode;
          break;
        case ELEMENT_NODE: {
          const node = create(ownerDocument, next, next.localName);
          addNext(node);
          parentNode = node;
          break;
        }
        case ATTRIBUTE_NODE: {
          const attr = next.cloneNode(deep);
          attr.ownerElement = parentNode;
          addNext(attr);
          break;
        }
        case TEXT_NODE:
        case COMMENT_NODE:
        case CDATA_SECTION_NODE:
          addNext(next.cloneNode(deep));
          break;
      }
      next = next[NEXT];
    }
    knownAdjacent($next, clone[END]);
    return clone;
  }

  // <custom>
  toString() {
    const out = [];
    const {[END]: end} = this;
    let next = {[NEXT]: this};
    let isOpened = false;
    do {
      next = next[NEXT];
      switch (next.nodeType) {
        case ATTRIBUTE_NODE: {
          const attr = ' ' + next;
          switch (attr) {
            case ' id':
            case ' class':
            case ' style':
              break;
            default:
              out.push(attr);
          }
          break;
        }
        case NODE_END: {
          const start = next[START];
          if (isOpened) {
            if ('ownerSVGElement' in start)
              out.push(' />');
            else if (isVoid(start))
              out.push(ignoreCase(start) ? '>' : ' />');
            else
              out.push(`></${start.localName}>`);
            isOpened = false;
          }
          else
            out.push(`</${start.localName}>`);
          break;
        }
        case ELEMENT_NODE:
          if (isOpened)
            out.push('>');
          if (next.toString !== this.toString) {
            out.push(next.toString());
            next = next[END];
            isOpened = false;
          }
          else {
            out.push(`<${next.localName}`);
            isOpened = true;
          }
          break;
        case TEXT_NODE:
        case COMMENT_NODE:
        case CDATA_SECTION_NODE:
          out.push((isOpened ? '>' : '') + next);
          isOpened = false;
          break;
      }
    } while (next !== end);
    return out.join('');
  }

  toJSON() {
    const json = [];
    elementAsJSON(this, json);
    return json;
  }
  // </custom>


  /* c8 ignore start */
  getAttributeNS(_, name) { return this.getAttribute(name); }
  getElementsByTagNameNS(_, name) { return this.getElementsByTagName(name); }
  hasAttributeNS(_, name) { return this.hasAttribute(name); }
  removeAttributeNS(_, name) { this.removeAttribute(name); }
  setAttributeNS(_, name, value) { this.setAttribute(name, value); }
  setAttributeNodeNS(attr) { return this.setAttributeNode(attr); }
  /* c8 ignore stop */
};

const classNames = new WeakMap;

const handler = {
  get(target, name) {
    return target[name];
  },
  set(target, name, value) {
    target[name] = value;
    return true;
  }
};

/**
 * @implements globalThis.SVGElement
 */
let SVGElement$1 = class SVGElement extends Element$1 {
  constructor(ownerDocument, localName, ownerSVGElement = null) {
    super(ownerDocument, localName);
    this.ownerSVGElement = ownerSVGElement;
  }

  get className() {
    if (!classNames.has(this))
      classNames.set(this, new Proxy({baseVal: '', animVal: ''}, handler));
    return classNames.get(this);
  }

  /* c8 ignore start */
  set className(value) {
    const {classList} = this;
    classList.clear();
    classList.add(...($String(value).split(/\s+/)));
  }
  /* c8 ignore stop */

  get namespaceURI() {
    return 'http://www.w3.org/2000/svg';
  }

  getAttribute(name) {
    return name === 'class' ?
      [...this.classList].join(' ') :
      super.getAttribute(name);
  }

  setAttribute(name, value) {
    if (name === 'class')
      this.className = value;
    else if (name === 'style') {
      const {className} = this;
      className.baseVal = className.animVal = value;
    }
    super.setAttribute(name, value);
  }
};

/* c8 ignore start */
const illegalConstructor = () => {
  throw new TypeError('Illegal constructor');
};

function Attr() { illegalConstructor(); }
setPrototypeOf(Attr, Attr$1);
Attr.prototype = Attr$1.prototype;

function CDATASection() { illegalConstructor(); }
setPrototypeOf(CDATASection, CDATASection$1);
CDATASection.prototype = CDATASection$1.prototype;

function CharacterData() { illegalConstructor(); }
setPrototypeOf(CharacterData, CharacterData$1);
CharacterData.prototype = CharacterData$1.prototype;

function Comment() { illegalConstructor(); }
setPrototypeOf(Comment, Comment$1);
Comment.prototype = Comment$1.prototype;

function DocumentFragment() { illegalConstructor(); }
setPrototypeOf(DocumentFragment, DocumentFragment$1);
DocumentFragment.prototype = DocumentFragment$1.prototype;

function DocumentType() { illegalConstructor(); }
setPrototypeOf(DocumentType, DocumentType$1);
DocumentType.prototype = DocumentType$1.prototype;

function Element() { illegalConstructor(); }
setPrototypeOf(Element, Element$1);
Element.prototype = Element$1.prototype;

function Node() { illegalConstructor(); }
setPrototypeOf(Node, Node$1);
Node.prototype = Node$1.prototype;

function ShadowRoot() { illegalConstructor(); }
setPrototypeOf(ShadowRoot, ShadowRoot$1);
ShadowRoot.prototype = ShadowRoot$1.prototype;

function Text() { illegalConstructor(); }
setPrototypeOf(Text, Text$1);
Text.prototype = Text$1.prototype;

function SVGElement() { illegalConstructor(); }
setPrototypeOf(SVGElement, SVGElement$1);
SVGElement.prototype = SVGElement$1.prototype;
/* c8 ignore stop */

const Facades = {
  Attr,
  CDATASection,
  CharacterData,
  Comment,
  DocumentFragment,
  DocumentType,
  Element,
  Node,
  ShadowRoot,
  Text,
  SVGElement
};

const Level0 = new WeakMap;
const level0 = {
  get(element, name) {
    return Level0.has(element) && Level0.get(element)[name] || null;
  },
  set(element, name, value) {
    if (!Level0.has(element))
      Level0.set(element, {});
    const handlers = Level0.get(element);
    const type = name.slice(2);
    if (handlers[name])
      element.removeEventListener(type, handlers[name], false);
    if ((handlers[name] = value))
      element.addEventListener(type, value, false);
  }
};

/**
 * @implements globalThis.HTMLElement
 */
class HTMLElement extends Element$1 {

  static get observedAttributes() { return []; }

  constructor(ownerDocument = null, localName = '') {
    super(ownerDocument, localName);

    const ownerLess = !ownerDocument;
    let options;

    if (ownerLess) {
      const {constructor: Class} = this;
      if (!Classes.has(Class))
        throw new Error('unable to initialize this Custom Element');
      ({ownerDocument, localName, options} = Classes.get(Class));
    }

    if (ownerDocument[UPGRADE]) {
      const {element, values} = ownerDocument[UPGRADE];
      ownerDocument[UPGRADE] = null;
      for (const [key, value] of values)
        element[key] = value;
      return element;
    }

    if (ownerLess) {
      this.ownerDocument = this[END].ownerDocument = ownerDocument;
      this.localName = localName;
      customElements.set(this, {connected: false});
      if (options.is)
        this.setAttribute('is', options.is);
    }
  }

  /* c8 ignore start */

  /* TODO: what about these?
  offsetHeight
  offsetLeft
  offsetParent
  offsetTop
  offsetWidth
  */

  blur() { this.dispatchEvent(new GlobalEvent('blur')); }
  click() {
    const clickEvent = new GlobalEvent('click', {bubbles: true, cancelable: true});
    clickEvent.button = 0;

    this.dispatchEvent(clickEvent);
  }

  // Boolean getters
  get accessKeyLabel() {
    const {accessKey} = this;
    return accessKey && `Alt+Shift+${accessKey}`;
  }
  get isContentEditable() { return this.hasAttribute('contenteditable'); }

  // Boolean Accessors
  get contentEditable() { return booleanAttribute.get(this, 'contenteditable'); }
  set contentEditable(value) { booleanAttribute.set(this, 'contenteditable', value); }
  get draggable() { return booleanAttribute.get(this, 'draggable'); }
  set draggable(value) { booleanAttribute.set(this, 'draggable', value); }
  get hidden() { return booleanAttribute.get(this, 'hidden'); }
  set hidden(value) { booleanAttribute.set(this, 'hidden', value); }
  get spellcheck() { return booleanAttribute.get(this, 'spellcheck'); }
  set spellcheck(value) { booleanAttribute.set(this, 'spellcheck', value); }

  // String Accessors
  get accessKey() { return stringAttribute.get(this, 'accesskey'); }
  set accessKey(value) { stringAttribute.set(this, 'accesskey', value); }
  get dir() { return stringAttribute.get(this, 'dir'); }
  set dir(value) { stringAttribute.set(this, 'dir', value); }
  get lang() { return stringAttribute.get(this, 'lang'); }
  set lang(value) { stringAttribute.set(this, 'lang', value); }
  get title() { return stringAttribute.get(this, 'title'); }
  set title(value) { stringAttribute.set(this, 'title', value); }

  // DOM Level 0
  get onabort() { return level0.get(this, 'onabort'); }
  set onabort(value) { level0.set(this, 'onabort', value); }

  get onblur() { return level0.get(this, 'onblur'); }
  set onblur(value) { level0.set(this, 'onblur', value); }

  get oncancel() { return level0.get(this, 'oncancel'); }
  set oncancel(value) { level0.set(this, 'oncancel', value); }

  get oncanplay() { return level0.get(this, 'oncanplay'); }
  set oncanplay(value) { level0.set(this, 'oncanplay', value); }

  get oncanplaythrough() { return level0.get(this, 'oncanplaythrough'); }
  set oncanplaythrough(value) { level0.set(this, 'oncanplaythrough', value); }

  get onchange() { return level0.get(this, 'onchange'); }
  set onchange(value) { level0.set(this, 'onchange', value); }

  get onclick() { return level0.get(this, 'onclick'); }
  set onclick(value) { level0.set(this, 'onclick', value); }

  get onclose() { return level0.get(this, 'onclose'); }
  set onclose(value) { level0.set(this, 'onclose', value); }

  get oncontextmenu() { return level0.get(this, 'oncontextmenu'); }
  set oncontextmenu(value) { level0.set(this, 'oncontextmenu', value); }

  get oncuechange() { return level0.get(this, 'oncuechange'); }
  set oncuechange(value) { level0.set(this, 'oncuechange', value); }

  get ondblclick() { return level0.get(this, 'ondblclick'); }
  set ondblclick(value) { level0.set(this, 'ondblclick', value); }

  get ondrag() { return level0.get(this, 'ondrag'); }
  set ondrag(value) { level0.set(this, 'ondrag', value); }

  get ondragend() { return level0.get(this, 'ondragend'); }
  set ondragend(value) { level0.set(this, 'ondragend', value); }

  get ondragenter() { return level0.get(this, 'ondragenter'); }
  set ondragenter(value) { level0.set(this, 'ondragenter', value); }

  get ondragleave() { return level0.get(this, 'ondragleave'); }
  set ondragleave(value) { level0.set(this, 'ondragleave', value); }

  get ondragover() { return level0.get(this, 'ondragover'); }
  set ondragover(value) { level0.set(this, 'ondragover', value); }

  get ondragstart() { return level0.get(this, 'ondragstart'); }
  set ondragstart(value) { level0.set(this, 'ondragstart', value); }

  get ondrop() { return level0.get(this, 'ondrop'); }
  set ondrop(value) { level0.set(this, 'ondrop', value); }

  get ondurationchange() { return level0.get(this, 'ondurationchange'); }
  set ondurationchange(value) { level0.set(this, 'ondurationchange', value); }

  get onemptied() { return level0.get(this, 'onemptied'); }
  set onemptied(value) { level0.set(this, 'onemptied', value); }

  get onended() { return level0.get(this, 'onended'); }
  set onended(value) { level0.set(this, 'onended', value); }

  get onerror() { return level0.get(this, 'onerror'); }
  set onerror(value) { level0.set(this, 'onerror', value); }

  get onfocus() { return level0.get(this, 'onfocus'); }
  set onfocus(value) { level0.set(this, 'onfocus', value); }

  get oninput() { return level0.get(this, 'oninput'); }
  set oninput(value) { level0.set(this, 'oninput', value); }

  get oninvalid() { return level0.get(this, 'oninvalid'); }
  set oninvalid(value) { level0.set(this, 'oninvalid', value); }

  get onkeydown() { return level0.get(this, 'onkeydown'); }
  set onkeydown(value) { level0.set(this, 'onkeydown', value); }

  get onkeypress() { return level0.get(this, 'onkeypress'); }
  set onkeypress(value) { level0.set(this, 'onkeypress', value); }

  get onkeyup() { return level0.get(this, 'onkeyup'); }
  set onkeyup(value) { level0.set(this, 'onkeyup', value); }

  get onload() { return level0.get(this, 'onload'); }
  set onload(value) { level0.set(this, 'onload', value); }

  get onloadeddata() { return level0.get(this, 'onloadeddata'); }
  set onloadeddata(value) { level0.set(this, 'onloadeddata', value); }

  get onloadedmetadata() { return level0.get(this, 'onloadedmetadata'); }
  set onloadedmetadata(value) { level0.set(this, 'onloadedmetadata', value); }

  get onloadstart() { return level0.get(this, 'onloadstart'); }
  set onloadstart(value) { level0.set(this, 'onloadstart', value); }

  get onmousedown() { return level0.get(this, 'onmousedown'); }
  set onmousedown(value) { level0.set(this, 'onmousedown', value); }

  get onmouseenter() { return level0.get(this, 'onmouseenter'); }
  set onmouseenter(value) { level0.set(this, 'onmouseenter', value); }

  get onmouseleave() { return level0.get(this, 'onmouseleave'); }
  set onmouseleave(value) { level0.set(this, 'onmouseleave', value); }

  get onmousemove() { return level0.get(this, 'onmousemove'); }
  set onmousemove(value) { level0.set(this, 'onmousemove', value); }

  get onmouseout() { return level0.get(this, 'onmouseout'); }
  set onmouseout(value) { level0.set(this, 'onmouseout', value); }

  get onmouseover() { return level0.get(this, 'onmouseover'); }
  set onmouseover(value) { level0.set(this, 'onmouseover', value); }

  get onmouseup() { return level0.get(this, 'onmouseup'); }
  set onmouseup(value) { level0.set(this, 'onmouseup', value); }

  get onmousewheel() { return level0.get(this, 'onmousewheel'); }
  set onmousewheel(value) { level0.set(this, 'onmousewheel', value); }

  get onpause() { return level0.get(this, 'onpause'); }
  set onpause(value) { level0.set(this, 'onpause', value); }

  get onplay() { return level0.get(this, 'onplay'); }
  set onplay(value) { level0.set(this, 'onplay', value); }

  get onplaying() { return level0.get(this, 'onplaying'); }
  set onplaying(value) { level0.set(this, 'onplaying', value); }

  get onprogress() { return level0.get(this, 'onprogress'); }
  set onprogress(value) { level0.set(this, 'onprogress', value); }

  get onratechange() { return level0.get(this, 'onratechange'); }
  set onratechange(value) { level0.set(this, 'onratechange', value); }

  get onreset() { return level0.get(this, 'onreset'); }
  set onreset(value) { level0.set(this, 'onreset', value); }

  get onresize() { return level0.get(this, 'onresize'); }
  set onresize(value) { level0.set(this, 'onresize', value); }

  get onscroll() { return level0.get(this, 'onscroll'); }
  set onscroll(value) { level0.set(this, 'onscroll', value); }

  get onseeked() { return level0.get(this, 'onseeked'); }
  set onseeked(value) { level0.set(this, 'onseeked', value); }

  get onseeking() { return level0.get(this, 'onseeking'); }
  set onseeking(value) { level0.set(this, 'onseeking', value); }

  get onselect() { return level0.get(this, 'onselect'); }
  set onselect(value) { level0.set(this, 'onselect', value); }

  get onshow() { return level0.get(this, 'onshow'); }
  set onshow(value) { level0.set(this, 'onshow', value); }

  get onstalled() { return level0.get(this, 'onstalled'); }
  set onstalled(value) { level0.set(this, 'onstalled', value); }

  get onsubmit() { return level0.get(this, 'onsubmit'); }
  set onsubmit(value) { level0.set(this, 'onsubmit', value); }

  get onsuspend() { return level0.get(this, 'onsuspend'); }
  set onsuspend(value) { level0.set(this, 'onsuspend', value); }

  get ontimeupdate() { return level0.get(this, 'ontimeupdate'); }
  set ontimeupdate(value) { level0.set(this, 'ontimeupdate', value); }

  get ontoggle() { return level0.get(this, 'ontoggle'); }
  set ontoggle(value) { level0.set(this, 'ontoggle', value); }

  get onvolumechange() { return level0.get(this, 'onvolumechange'); }
  set onvolumechange(value) { level0.set(this, 'onvolumechange', value); }

  get onwaiting() { return level0.get(this, 'onwaiting'); }
  set onwaiting(value) { level0.set(this, 'onwaiting', value); }

  get onauxclick() { return level0.get(this, 'onauxclick'); }
  set onauxclick(value) { level0.set(this, 'onauxclick', value); }

  get ongotpointercapture() { return level0.get(this, 'ongotpointercapture'); }
  set ongotpointercapture(value) { level0.set(this, 'ongotpointercapture', value); }

  get onlostpointercapture() { return level0.get(this, 'onlostpointercapture'); }
  set onlostpointercapture(value) { level0.set(this, 'onlostpointercapture', value); }

  get onpointercancel() { return level0.get(this, 'onpointercancel'); }
  set onpointercancel(value) { level0.set(this, 'onpointercancel', value); }

  get onpointerdown() { return level0.get(this, 'onpointerdown'); }
  set onpointerdown(value) { level0.set(this, 'onpointerdown', value); }

  get onpointerenter() { return level0.get(this, 'onpointerenter'); }
  set onpointerenter(value) { level0.set(this, 'onpointerenter', value); }

  get onpointerleave() { return level0.get(this, 'onpointerleave'); }
  set onpointerleave(value) { level0.set(this, 'onpointerleave', value); }

  get onpointermove() { return level0.get(this, 'onpointermove'); }
  set onpointermove(value) { level0.set(this, 'onpointermove', value); }

  get onpointerout() { return level0.get(this, 'onpointerout'); }
  set onpointerout(value) { level0.set(this, 'onpointerout', value); }

  get onpointerover() { return level0.get(this, 'onpointerover'); }
  set onpointerover(value) { level0.set(this, 'onpointerover', value); }

  get onpointerup() { return level0.get(this, 'onpointerup'); }
  set onpointerup(value) { level0.set(this, 'onpointerup', value); }
  /* c8 ignore stop */

}

const tagName$h = 'template';

/**
 * @implements globalThis.HTMLTemplateElement
 */
class HTMLTemplateElement extends HTMLElement {
  constructor(ownerDocument) {
    super(ownerDocument, tagName$h);
    const content = this.ownerDocument.createDocumentFragment();
    (this[CONTENT] = content)[PRIVATE] = this;
  }

  get content() {
    if (this.hasChildNodes() && !this[CONTENT].hasChildNodes()) {
      for (const node of this.childNodes)
        this[CONTENT].appendChild(node.cloneNode(true));
    }
    return this[CONTENT];
  }
}

registerHTMLClass(tagName$h, HTMLTemplateElement);

/**
 * @implements globalThis.HTMLHtmlElement
 */
class HTMLHtmlElement extends HTMLElement {
  constructor(ownerDocument, localName = 'html') {
    super(ownerDocument, localName);
  }
}

const {toString} = HTMLElement.prototype;

class TextElement extends HTMLElement {

  get innerHTML() { return this.textContent; }
  set innerHTML(html) { this.textContent = html; }

  toString() {
    const outerHTML = toString.call(this.cloneNode());
    return outerHTML.replace('><', () => `>${this.textContent}<`);
  }
}

const tagName$g = 'script';

/**
 * @implements globalThis.HTMLScriptElement
 */
class HTMLScriptElement extends TextElement {
  constructor(ownerDocument, localName = tagName$g) {
    super(ownerDocument, localName);
  }

  get type() {
    return stringAttribute.get(this, 'type');
  }
  set type(value) {
    stringAttribute.set(this, 'type', value);
  }

  get src() {
    return stringAttribute.get(this, 'src');
  }
  set src(value) {
    stringAttribute.set(this, 'src', value);
  }

  get defer() {
    return booleanAttribute.get(this, 'defer');
  }

  set defer(value) {
    booleanAttribute.set(this, 'defer', value);
  }

  get crossOrigin() {
    return stringAttribute.get(this, 'crossorigin');
  }
  set crossOrigin(value) {
    stringAttribute.set(this, 'crossorigin', value);
  }

  get nomodule() {
    return booleanAttribute.get(this, 'nomodule');
  }
  set nomodule(value) {
    booleanAttribute.set(this, 'nomodule', value);
  }

  get referrerPolicy() {
    return stringAttribute.get(this, 'referrerpolicy');
  }
  set referrerPolicy(value) {
    stringAttribute.set(this, 'referrerpolicy', value);
  }

  get nonce() {
    return stringAttribute.get(this, 'nonce');
  }
  set nonce(value) {
    stringAttribute.set(this, 'nonce', value);
  }

  get async() {
    return booleanAttribute.get(this, 'async');
  }
  set async(value) {
    booleanAttribute.set(this, 'async', value);
  }

  get text() { return this.textContent; }
  set text(content) { this.textContent = content; }
}

registerHTMLClass(tagName$g, HTMLScriptElement);

/**
 * @implements globalThis.HTMLFrameElement
 */
class HTMLFrameElement extends HTMLElement {
  constructor(ownerDocument, localName = 'frame') {
    super(ownerDocument, localName);
  }
}

const tagName$f = 'iframe';

/**
 * @implements globalThis.HTMLIFrameElement
 */
class HTMLIFrameElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName$f) {
    super(ownerDocument, localName);
  }

  /* c8 ignore start */
  get src() { return stringAttribute.get(this, 'src'); }
  set src(value) { stringAttribute.set(this, 'src', value); }

  get srcdoc() { return stringAttribute.get(this, "srcdoc"); }
  set srcdoc(value) { stringAttribute.set(this, "srcdoc", value); }

  get name() { return stringAttribute.get(this, "name"); }
  set name(value) { stringAttribute.set(this, "name", value); }

  get allow() { return stringAttribute.get(this, "allow"); }
  set allow(value) { stringAttribute.set(this, "allow", value); }

  get allowFullscreen() { return booleanAttribute.get(this, "allowfullscreen"); }
  set allowFullscreen(value) { booleanAttribute.set(this, "allowfullscreen", value); }
  
  get referrerPolicy() { return stringAttribute.get(this, "referrerpolicy"); }
  set referrerPolicy(value) { stringAttribute.set(this, "referrerpolicy", value); }
  
  get loading() { return stringAttribute.get(this, "loading"); }
  set loading(value) { stringAttribute.set(this, "loading", value); }
  /* c8 ignore stop */
}

registerHTMLClass(tagName$f, HTMLIFrameElement);

/**
 * @implements globalThis.HTMLObjectElement
 */
class HTMLObjectElement extends HTMLElement {
  constructor(ownerDocument, localName = 'object') {
    super(ownerDocument, localName);
  }
}

/**
 * @implements globalThis.HTMLHeadElement
 */
class HTMLHeadElement extends HTMLElement {
  constructor(ownerDocument, localName = 'head') {
    super(ownerDocument, localName);
  }
}

/**
 * @implements globalThis.HTMLBodyElement
 */
class HTMLBodyElement extends HTMLElement {
  constructor(ownerDocument, localName = 'body') {
    super(ownerDocument, localName);
  }
}

var lib$1 = {};

var CSSStyleDeclaration = {};

var parse = {};

var CSSStyleSheet = {};

var StyleSheet = {};

var hasRequiredStyleSheet;

function requireStyleSheet () {
	if (hasRequiredStyleSheet) return StyleSheet;
	hasRequiredStyleSheet = 1;
	//.CommonJS
	var CSSOM = {};
	///CommonJS


	/**
	 * @constructor
	 * @see http://dev.w3.org/csswg/cssom/#the-stylesheet-interface
	 */
	CSSOM.StyleSheet = function StyleSheet() {
		this.parentStyleSheet = null;
	};


	//.CommonJS
	StyleSheet.StyleSheet = CSSOM.StyleSheet;
	///CommonJS
	return StyleSheet;
}

var CSSStyleRule = {};

var CSSRule = {};

var hasRequiredCSSRule;

function requireCSSRule () {
	if (hasRequiredCSSRule) return CSSRule;
	hasRequiredCSSRule = 1;
	//.CommonJS
	var CSSOM = {};
	///CommonJS


	/**
	 * @constructor
	 * @see http://dev.w3.org/csswg/cssom/#the-cssrule-interface
	 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSRule
	 */
	CSSOM.CSSRule = function CSSRule() {
		this.parentRule = null;
		this.parentStyleSheet = null;
	};

	CSSOM.CSSRule.UNKNOWN_RULE = 0;                 // obsolete
	CSSOM.CSSRule.STYLE_RULE = 1;
	CSSOM.CSSRule.CHARSET_RULE = 2;                 // obsolete
	CSSOM.CSSRule.IMPORT_RULE = 3;
	CSSOM.CSSRule.MEDIA_RULE = 4;
	CSSOM.CSSRule.FONT_FACE_RULE = 5;
	CSSOM.CSSRule.PAGE_RULE = 6;
	CSSOM.CSSRule.KEYFRAMES_RULE = 7;
	CSSOM.CSSRule.KEYFRAME_RULE = 8;
	CSSOM.CSSRule.MARGIN_RULE = 9;
	CSSOM.CSSRule.NAMESPACE_RULE = 10;
	CSSOM.CSSRule.COUNTER_STYLE_RULE = 11;
	CSSOM.CSSRule.SUPPORTS_RULE = 12;
	CSSOM.CSSRule.DOCUMENT_RULE = 13;
	CSSOM.CSSRule.FONT_FEATURE_VALUES_RULE = 14;
	CSSOM.CSSRule.VIEWPORT_RULE = 15;
	CSSOM.CSSRule.REGION_STYLE_RULE = 16;


	CSSOM.CSSRule.prototype = {
		constructor: CSSOM.CSSRule
		//FIXME
	};


	//.CommonJS
	CSSRule.CSSRule = CSSOM.CSSRule;
	///CommonJS
	return CSSRule;
}

var hasRequiredCSSStyleRule;

function requireCSSStyleRule () {
	if (hasRequiredCSSStyleRule) return CSSStyleRule;
	hasRequiredCSSStyleRule = 1;
	//.CommonJS
	var CSSOM = {
		CSSStyleDeclaration: requireCSSStyleDeclaration().CSSStyleDeclaration,
		CSSRule: requireCSSRule().CSSRule
	};
	///CommonJS


	/**
	 * @constructor
	 * @see http://dev.w3.org/csswg/cssom/#cssstylerule
	 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleRule
	 */
	CSSOM.CSSStyleRule = function CSSStyleRule() {
		CSSOM.CSSRule.call(this);
		this.selectorText = "";
		this.style = new CSSOM.CSSStyleDeclaration();
		this.style.parentRule = this;
	};

	CSSOM.CSSStyleRule.prototype = new CSSOM.CSSRule();
	CSSOM.CSSStyleRule.prototype.constructor = CSSOM.CSSStyleRule;
	CSSOM.CSSStyleRule.prototype.type = 1;

	Object.defineProperty(CSSOM.CSSStyleRule.prototype, "cssText", {
		get: function() {
			var text;
			if (this.selectorText) {
				text = this.selectorText + " {" + this.style.cssText + "}";
			} else {
				text = "";
			}
			return text;
		},
		set: function(cssText) {
			var rule = CSSOM.CSSStyleRule.parse(cssText);
			this.style = rule.style;
			this.selectorText = rule.selectorText;
		}
	});


	/**
	 * NON-STANDARD
	 * lightweight version of parse.js.
	 * @param {string} ruleText
	 * @return CSSStyleRule
	 */
	CSSOM.CSSStyleRule.parse = function(ruleText) {
		var i = 0;
		var state = "selector";
		var index;
		var j = i;
		var buffer = "";

		var SIGNIFICANT_WHITESPACE = {
			"selector": true,
			"value": true
		};

		var styleRule = new CSSOM.CSSStyleRule();
		var name, priority="";

		for (var character; (character = ruleText.charAt(i)); i++) {

			switch (character) {

			case " ":
			case "\t":
			case "\r":
			case "\n":
			case "\f":
				if (SIGNIFICANT_WHITESPACE[state]) {
					// Squash 2 or more white-spaces in the row into 1
					switch (ruleText.charAt(i - 1)) {
						case " ":
						case "\t":
						case "\r":
						case "\n":
						case "\f":
							break;
						default:
							buffer += " ";
							break;
					}
				}
				break;

			// String
			case '"':
				j = i + 1;
				index = ruleText.indexOf('"', j) + 1;
				if (!index) {
					throw '" is missing';
				}
				buffer += ruleText.slice(i, index);
				i = index - 1;
				break;

			case "'":
				j = i + 1;
				index = ruleText.indexOf("'", j) + 1;
				if (!index) {
					throw "' is missing";
				}
				buffer += ruleText.slice(i, index);
				i = index - 1;
				break;

			// Comment
			case "/":
				if (ruleText.charAt(i + 1) === "*") {
					i += 2;
					index = ruleText.indexOf("*/", i);
					if (index === -1) {
						throw new SyntaxError("Missing */");
					} else {
						i = index + 1;
					}
				} else {
					buffer += character;
				}
				break;

			case "{":
				if (state === "selector") {
					styleRule.selectorText = buffer.trim();
					buffer = "";
					state = "name";
				}
				break;

			case ":":
				if (state === "name") {
					name = buffer.trim();
					buffer = "";
					state = "value";
				} else {
					buffer += character;
				}
				break;

			case "!":
				if (state === "value" && ruleText.indexOf("!important", i) === i) {
					priority = "important";
					i += "important".length;
				} else {
					buffer += character;
				}
				break;

			case ";":
				if (state === "value") {
					styleRule.style.setProperty(name, buffer.trim(), priority);
					priority = "";
					buffer = "";
					state = "name";
				} else {
					buffer += character;
				}
				break;

			case "}":
				if (state === "value") {
					styleRule.style.setProperty(name, buffer.trim(), priority);
					priority = "";
					buffer = "";
				} else if (state === "name") {
					break;
				} else {
					buffer += character;
				}
				state = "selector";
				break;

			default:
				buffer += character;
				break;

			}
		}

		return styleRule;

	};


	//.CommonJS
	CSSStyleRule.CSSStyleRule = CSSOM.CSSStyleRule;
	///CommonJS
	return CSSStyleRule;
}

var hasRequiredCSSStyleSheet;

function requireCSSStyleSheet () {
	if (hasRequiredCSSStyleSheet) return CSSStyleSheet;
	hasRequiredCSSStyleSheet = 1;
	//.CommonJS
	var CSSOM = {
		StyleSheet: requireStyleSheet().StyleSheet,
		CSSStyleRule: requireCSSStyleRule().CSSStyleRule
	};
	///CommonJS


	/**
	 * @constructor
	 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleSheet
	 */
	CSSOM.CSSStyleSheet = function CSSStyleSheet() {
		CSSOM.StyleSheet.call(this);
		this.cssRules = [];
	};


	CSSOM.CSSStyleSheet.prototype = new CSSOM.StyleSheet();
	CSSOM.CSSStyleSheet.prototype.constructor = CSSOM.CSSStyleSheet;


	/**
	 * Used to insert a new rule into the style sheet. The new rule now becomes part of the cascade.
	 *
	 *   sheet = new Sheet("body {margin: 0}")
	 *   sheet.toString()
	 *   -> "body{margin:0;}"
	 *   sheet.insertRule("img {border: none}", 0)
	 *   -> 0
	 *   sheet.toString()
	 *   -> "img{border:none;}body{margin:0;}"
	 *
	 * @param {string} rule
	 * @param {number} index
	 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleSheet-insertRule
	 * @return {number} The index within the style sheet's rule collection of the newly inserted rule.
	 */
	CSSOM.CSSStyleSheet.prototype.insertRule = function(rule, index) {
		if (index < 0 || index > this.cssRules.length) {
			throw new RangeError("INDEX_SIZE_ERR");
		}
		var cssRule = CSSOM.parse(rule).cssRules[0];
		cssRule.parentStyleSheet = this;
		this.cssRules.splice(index, 0, cssRule);
		return index;
	};


	/**
	 * Used to delete a rule from the style sheet.
	 *
	 *   sheet = new Sheet("img{border:none} body{margin:0}")
	 *   sheet.toString()
	 *   -> "img{border:none;}body{margin:0;}"
	 *   sheet.deleteRule(0)
	 *   sheet.toString()
	 *   -> "body{margin:0;}"
	 *
	 * @param {number} index within the style sheet's rule list of the rule to remove.
	 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleSheet-deleteRule
	 */
	CSSOM.CSSStyleSheet.prototype.deleteRule = function(index) {
		if (index < 0 || index >= this.cssRules.length) {
			throw new RangeError("INDEX_SIZE_ERR");
		}
		this.cssRules.splice(index, 1);
	};


	/**
	 * NON-STANDARD
	 * @return {string} serialize stylesheet
	 */
	CSSOM.CSSStyleSheet.prototype.toString = function() {
		var result = "";
		var rules = this.cssRules;
		for (var i=0; i<rules.length; i++) {
			result += rules[i].cssText + "\n";
		}
		return result;
	};


	//.CommonJS
	CSSStyleSheet.CSSStyleSheet = CSSOM.CSSStyleSheet;
	CSSOM.parse = requireParse().parse; // Cannot be included sooner due to the mutual dependency between parse.js and CSSStyleSheet.js
	///CommonJS
	return CSSStyleSheet;
}

var CSSImportRule = {};

var MediaList = {};

var hasRequiredMediaList;

function requireMediaList () {
	if (hasRequiredMediaList) return MediaList;
	hasRequiredMediaList = 1;
	//.CommonJS
	var CSSOM = {};
	///CommonJS


	/**
	 * @constructor
	 * @see http://dev.w3.org/csswg/cssom/#the-medialist-interface
	 */
	CSSOM.MediaList = function MediaList(){
		this.length = 0;
	};

	CSSOM.MediaList.prototype = {

		constructor: CSSOM.MediaList,

		/**
		 * @return {string}
		 */
		get mediaText() {
			return Array.prototype.join.call(this, ", ");
		},

		/**
		 * @param {string} value
		 */
		set mediaText(value) {
			var values = value.split(",");
			var length = this.length = values.length;
			for (var i=0; i<length; i++) {
				this[i] = values[i].trim();
			}
		},

		/**
		 * @param {string} medium
		 */
		appendMedium: function(medium) {
			if (Array.prototype.indexOf.call(this, medium) === -1) {
				this[this.length] = medium;
				this.length++;
			}
		},

		/**
		 * @param {string} medium
		 */
		deleteMedium: function(medium) {
			var index = Array.prototype.indexOf.call(this, medium);
			if (index !== -1) {
				Array.prototype.splice.call(this, index, 1);
			}
		}

	};


	//.CommonJS
	MediaList.MediaList = CSSOM.MediaList;
	///CommonJS
	return MediaList;
}

var hasRequiredCSSImportRule;

function requireCSSImportRule () {
	if (hasRequiredCSSImportRule) return CSSImportRule;
	hasRequiredCSSImportRule = 1;
	//.CommonJS
	var CSSOM = {
		CSSRule: requireCSSRule().CSSRule,
		CSSStyleSheet: requireCSSStyleSheet().CSSStyleSheet,
		MediaList: requireMediaList().MediaList
	};
	///CommonJS


	/**
	 * @constructor
	 * @see http://dev.w3.org/csswg/cssom/#cssimportrule
	 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSImportRule
	 */
	CSSOM.CSSImportRule = function CSSImportRule() {
		CSSOM.CSSRule.call(this);
		this.href = "";
		this.media = new CSSOM.MediaList();
		this.styleSheet = new CSSOM.CSSStyleSheet();
	};

	CSSOM.CSSImportRule.prototype = new CSSOM.CSSRule();
	CSSOM.CSSImportRule.prototype.constructor = CSSOM.CSSImportRule;
	CSSOM.CSSImportRule.prototype.type = 3;

	Object.defineProperty(CSSOM.CSSImportRule.prototype, "cssText", {
	  get: function() {
	    var mediaText = this.media.mediaText;
	    return "@import url(" + this.href + ")" + (mediaText ? " " + mediaText : "") + ";";
	  },
	  set: function(cssText) {
	    var i = 0;

	    /**
	     * @import url(partial.css) screen, handheld;
	     *        ||               |
	     *        after-import     media
	     *         |
	     *         url
	     */
	    var state = '';

	    var buffer = '';
	    var index;
	    for (var character; (character = cssText.charAt(i)); i++) {

	      switch (character) {
	        case ' ':
	        case '\t':
	        case '\r':
	        case '\n':
	        case '\f':
	          if (state === 'after-import') {
	            state = 'url';
	          } else {
	            buffer += character;
	          }
	          break;

	        case '@':
	          if (!state && cssText.indexOf('@import', i) === i) {
	            state = 'after-import';
	            i += 'import'.length;
	            buffer = '';
	          }
	          break;

	        case 'u':
	          if (state === 'url' && cssText.indexOf('url(', i) === i) {
	            index = cssText.indexOf(')', i + 1);
	            if (index === -1) {
	              throw i + ': ")" not found';
	            }
	            i += 'url('.length;
	            var url = cssText.slice(i, index);
	            if (url[0] === url[url.length - 1]) {
	              if (url[0] === '"' || url[0] === "'") {
	                url = url.slice(1, -1);
	              }
	            }
	            this.href = url;
	            i = index;
	            state = 'media';
	          }
	          break;

	        case '"':
	          if (state === 'url') {
	            index = cssText.indexOf('"', i + 1);
	            if (!index) {
	              throw i + ": '\"' not found";
	            }
	            this.href = cssText.slice(i + 1, index);
	            i = index;
	            state = 'media';
	          }
	          break;

	        case "'":
	          if (state === 'url') {
	            index = cssText.indexOf("'", i + 1);
	            if (!index) {
	              throw i + ': "\'" not found';
	            }
	            this.href = cssText.slice(i + 1, index);
	            i = index;
	            state = 'media';
	          }
	          break;

	        case ';':
	          if (state === 'media') {
	            if (buffer) {
	              this.media.mediaText = buffer.trim();
	            }
	          }
	          break;

	        default:
	          if (state === 'media') {
	            buffer += character;
	          }
	          break;
	      }
	    }
	  }
	});


	//.CommonJS
	CSSImportRule.CSSImportRule = CSSOM.CSSImportRule;
	///CommonJS
	return CSSImportRule;
}

var CSSGroupingRule = {};

var hasRequiredCSSGroupingRule;

function requireCSSGroupingRule () {
	if (hasRequiredCSSGroupingRule) return CSSGroupingRule;
	hasRequiredCSSGroupingRule = 1;
	//.CommonJS
	var CSSOM = {
		CSSRule: requireCSSRule().CSSRule
	};
	///CommonJS


	/**
	 * @constructor
	 * @see https://drafts.csswg.org/cssom/#the-cssgroupingrule-interface
	 */
	CSSOM.CSSGroupingRule = function CSSGroupingRule() {
		CSSOM.CSSRule.call(this);
		this.cssRules = [];
	};

	CSSOM.CSSGroupingRule.prototype = new CSSOM.CSSRule();
	CSSOM.CSSGroupingRule.prototype.constructor = CSSOM.CSSGroupingRule;


	/**
	 * Used to insert a new CSS rule to a list of CSS rules.
	 *
	 * @example
	 *   cssGroupingRule.cssText
	 *   -> "body{margin:0;}"
	 *   cssGroupingRule.insertRule("img{border:none;}", 1)
	 *   -> 1
	 *   cssGroupingRule.cssText
	 *   -> "body{margin:0;}img{border:none;}"
	 *
	 * @param {string} rule
	 * @param {number} [index]
	 * @see https://www.w3.org/TR/cssom-1/#dom-cssgroupingrule-insertrule
	 * @return {number} The index within the grouping rule's collection of the newly inserted rule.
	 */
	 CSSOM.CSSGroupingRule.prototype.insertRule = function insertRule(rule, index) {
		if (index < 0 || index > this.cssRules.length) {
			throw new RangeError("INDEX_SIZE_ERR");
		}
		var cssRule = CSSOM.parse(rule).cssRules[0];
		cssRule.parentRule = this;
		this.cssRules.splice(index, 0, cssRule);
		return index;
	};

	/**
	 * Used to delete a rule from the grouping rule.
	 *
	 *   cssGroupingRule.cssText
	 *   -> "img{border:none;}body{margin:0;}"
	 *   cssGroupingRule.deleteRule(0)
	 *   cssGroupingRule.cssText
	 *   -> "body{margin:0;}"
	 *
	 * @param {number} index within the grouping rule's rule list of the rule to remove.
	 * @see https://www.w3.org/TR/cssom-1/#dom-cssgroupingrule-deleterule
	 */
	 CSSOM.CSSGroupingRule.prototype.deleteRule = function deleteRule(index) {
		if (index < 0 || index >= this.cssRules.length) {
			throw new RangeError("INDEX_SIZE_ERR");
		}
		this.cssRules.splice(index, 1)[0].parentRule = null;
	};

	//.CommonJS
	CSSGroupingRule.CSSGroupingRule = CSSOM.CSSGroupingRule;
	///CommonJS
	return CSSGroupingRule;
}

var CSSMediaRule = {};

var CSSConditionRule = {};

var hasRequiredCSSConditionRule;

function requireCSSConditionRule () {
	if (hasRequiredCSSConditionRule) return CSSConditionRule;
	hasRequiredCSSConditionRule = 1;
	//.CommonJS
	var CSSOM = {
	  CSSRule: requireCSSRule().CSSRule,
	  CSSGroupingRule: requireCSSGroupingRule().CSSGroupingRule
	};
	///CommonJS


	/**
	 * @constructor
	 * @see https://www.w3.org/TR/css-conditional-3/#the-cssconditionrule-interface
	 */
	CSSOM.CSSConditionRule = function CSSConditionRule() {
	  CSSOM.CSSGroupingRule.call(this);
	  this.cssRules = [];
	};

	CSSOM.CSSConditionRule.prototype = new CSSOM.CSSGroupingRule();
	CSSOM.CSSConditionRule.prototype.constructor = CSSOM.CSSConditionRule;
	CSSOM.CSSConditionRule.prototype.conditionText = '';
	CSSOM.CSSConditionRule.prototype.cssText = '';

	//.CommonJS
	CSSConditionRule.CSSConditionRule = CSSOM.CSSConditionRule;
	///CommonJS
	return CSSConditionRule;
}

var hasRequiredCSSMediaRule;

function requireCSSMediaRule () {
	if (hasRequiredCSSMediaRule) return CSSMediaRule;
	hasRequiredCSSMediaRule = 1;
	//.CommonJS
	var CSSOM = {
		CSSRule: requireCSSRule().CSSRule,
		CSSGroupingRule: requireCSSGroupingRule().CSSGroupingRule,
		CSSConditionRule: requireCSSConditionRule().CSSConditionRule,
		MediaList: requireMediaList().MediaList
	};
	///CommonJS


	/**
	 * @constructor
	 * @see http://dev.w3.org/csswg/cssom/#cssmediarule
	 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSMediaRule
	 */
	CSSOM.CSSMediaRule = function CSSMediaRule() {
		CSSOM.CSSConditionRule.call(this);
		this.media = new CSSOM.MediaList();
	};

	CSSOM.CSSMediaRule.prototype = new CSSOM.CSSConditionRule();
	CSSOM.CSSMediaRule.prototype.constructor = CSSOM.CSSMediaRule;
	CSSOM.CSSMediaRule.prototype.type = 4;

	// https://opensource.apple.com/source/WebCore/WebCore-7611.1.21.161.3/css/CSSMediaRule.cpp
	Object.defineProperties(CSSOM.CSSMediaRule.prototype, {
	  "conditionText": {
	    get: function() {
	      return this.media.mediaText;
	    },
	    set: function(value) {
	      this.media.mediaText = value;
	    },
	    configurable: true,
	    enumerable: true
	  },
	  "cssText": {
	    get: function() {
	      var cssTexts = [];
	      for (var i=0, length=this.cssRules.length; i < length; i++) {
	        cssTexts.push(this.cssRules[i].cssText);
	      }
	      return "@media " + this.media.mediaText + " {" + cssTexts.join("") + "}";
	    },
	    configurable: true,
	    enumerable: true
	  }
	});


	//.CommonJS
	CSSMediaRule.CSSMediaRule = CSSOM.CSSMediaRule;
	///CommonJS
	return CSSMediaRule;
}

var CSSSupportsRule = {};

var hasRequiredCSSSupportsRule;

function requireCSSSupportsRule () {
	if (hasRequiredCSSSupportsRule) return CSSSupportsRule;
	hasRequiredCSSSupportsRule = 1;
	//.CommonJS
	var CSSOM = {
	  CSSRule: requireCSSRule().CSSRule,
	  CSSGroupingRule: requireCSSGroupingRule().CSSGroupingRule,
	  CSSConditionRule: requireCSSConditionRule().CSSConditionRule
	};
	///CommonJS


	/**
	 * @constructor
	 * @see https://drafts.csswg.org/css-conditional-3/#the-csssupportsrule-interface
	 */
	CSSOM.CSSSupportsRule = function CSSSupportsRule() {
	  CSSOM.CSSConditionRule.call(this);
	};

	CSSOM.CSSSupportsRule.prototype = new CSSOM.CSSConditionRule();
	CSSOM.CSSSupportsRule.prototype.constructor = CSSOM.CSSSupportsRule;
	CSSOM.CSSSupportsRule.prototype.type = 12;

	Object.defineProperty(CSSOM.CSSSupportsRule.prototype, "cssText", {
	  get: function() {
	    var cssTexts = [];

	    for (var i = 0, length = this.cssRules.length; i < length; i++) {
	      cssTexts.push(this.cssRules[i].cssText);
	    }

	    return "@supports " + this.conditionText + " {" + cssTexts.join("") + "}";
	  }
	});

	//.CommonJS
	CSSSupportsRule.CSSSupportsRule = CSSOM.CSSSupportsRule;
	///CommonJS
	return CSSSupportsRule;
}

var CSSFontFaceRule = {};

var hasRequiredCSSFontFaceRule;

function requireCSSFontFaceRule () {
	if (hasRequiredCSSFontFaceRule) return CSSFontFaceRule;
	hasRequiredCSSFontFaceRule = 1;
	//.CommonJS
	var CSSOM = {
		CSSStyleDeclaration: requireCSSStyleDeclaration().CSSStyleDeclaration,
		CSSRule: requireCSSRule().CSSRule
	};
	///CommonJS


	/**
	 * @constructor
	 * @see http://dev.w3.org/csswg/cssom/#css-font-face-rule
	 */
	CSSOM.CSSFontFaceRule = function CSSFontFaceRule() {
		CSSOM.CSSRule.call(this);
		this.style = new CSSOM.CSSStyleDeclaration();
		this.style.parentRule = this;
	};

	CSSOM.CSSFontFaceRule.prototype = new CSSOM.CSSRule();
	CSSOM.CSSFontFaceRule.prototype.constructor = CSSOM.CSSFontFaceRule;
	CSSOM.CSSFontFaceRule.prototype.type = 5;
	//FIXME
	//CSSOM.CSSFontFaceRule.prototype.insertRule = CSSStyleSheet.prototype.insertRule;
	//CSSOM.CSSFontFaceRule.prototype.deleteRule = CSSStyleSheet.prototype.deleteRule;

	// http://www.opensource.apple.com/source/WebCore/WebCore-955.66.1/css/WebKitCSSFontFaceRule.cpp
	Object.defineProperty(CSSOM.CSSFontFaceRule.prototype, "cssText", {
	  get: function() {
	    return "@font-face {" + this.style.cssText + "}";
	  }
	});


	//.CommonJS
	CSSFontFaceRule.CSSFontFaceRule = CSSOM.CSSFontFaceRule;
	///CommonJS
	return CSSFontFaceRule;
}

var CSSHostRule = {};

var hasRequiredCSSHostRule;

function requireCSSHostRule () {
	if (hasRequiredCSSHostRule) return CSSHostRule;
	hasRequiredCSSHostRule = 1;
	//.CommonJS
	var CSSOM = {
		CSSRule: requireCSSRule().CSSRule
	};
	///CommonJS


	/**
	 * @constructor
	 * @see http://www.w3.org/TR/shadow-dom/#host-at-rule
	 */
	CSSOM.CSSHostRule = function CSSHostRule() {
		CSSOM.CSSRule.call(this);
		this.cssRules = [];
	};

	CSSOM.CSSHostRule.prototype = new CSSOM.CSSRule();
	CSSOM.CSSHostRule.prototype.constructor = CSSOM.CSSHostRule;
	CSSOM.CSSHostRule.prototype.type = 1001;
	//FIXME
	//CSSOM.CSSHostRule.prototype.insertRule = CSSStyleSheet.prototype.insertRule;
	//CSSOM.CSSHostRule.prototype.deleteRule = CSSStyleSheet.prototype.deleteRule;

	Object.defineProperty(CSSOM.CSSHostRule.prototype, "cssText", {
		get: function() {
			var cssTexts = [];
			for (var i=0, length=this.cssRules.length; i < length; i++) {
				cssTexts.push(this.cssRules[i].cssText);
			}
			return "@host {" + cssTexts.join("") + "}";
		}
	});


	//.CommonJS
	CSSHostRule.CSSHostRule = CSSOM.CSSHostRule;
	///CommonJS
	return CSSHostRule;
}

var CSSKeyframeRule = {};

var hasRequiredCSSKeyframeRule;

function requireCSSKeyframeRule () {
	if (hasRequiredCSSKeyframeRule) return CSSKeyframeRule;
	hasRequiredCSSKeyframeRule = 1;
	//.CommonJS
	var CSSOM = {
		CSSRule: requireCSSRule().CSSRule,
		CSSStyleDeclaration: requireCSSStyleDeclaration().CSSStyleDeclaration
	};
	///CommonJS


	/**
	 * @constructor
	 * @see http://www.w3.org/TR/css3-animations/#DOM-CSSKeyframeRule
	 */
	CSSOM.CSSKeyframeRule = function CSSKeyframeRule() {
		CSSOM.CSSRule.call(this);
		this.keyText = '';
		this.style = new CSSOM.CSSStyleDeclaration();
		this.style.parentRule = this;
	};

	CSSOM.CSSKeyframeRule.prototype = new CSSOM.CSSRule();
	CSSOM.CSSKeyframeRule.prototype.constructor = CSSOM.CSSKeyframeRule;
	CSSOM.CSSKeyframeRule.prototype.type = 8;
	//FIXME
	//CSSOM.CSSKeyframeRule.prototype.insertRule = CSSStyleSheet.prototype.insertRule;
	//CSSOM.CSSKeyframeRule.prototype.deleteRule = CSSStyleSheet.prototype.deleteRule;

	// http://www.opensource.apple.com/source/WebCore/WebCore-955.66.1/css/WebKitCSSKeyframeRule.cpp
	Object.defineProperty(CSSOM.CSSKeyframeRule.prototype, "cssText", {
	  get: function() {
	    return this.keyText + " {" + this.style.cssText + "} ";
	  }
	});


	//.CommonJS
	CSSKeyframeRule.CSSKeyframeRule = CSSOM.CSSKeyframeRule;
	///CommonJS
	return CSSKeyframeRule;
}

var CSSKeyframesRule = {};

var hasRequiredCSSKeyframesRule;

function requireCSSKeyframesRule () {
	if (hasRequiredCSSKeyframesRule) return CSSKeyframesRule;
	hasRequiredCSSKeyframesRule = 1;
	//.CommonJS
	var CSSOM = {
		CSSRule: requireCSSRule().CSSRule
	};
	///CommonJS


	/**
	 * @constructor
	 * @see http://www.w3.org/TR/css3-animations/#DOM-CSSKeyframesRule
	 */
	CSSOM.CSSKeyframesRule = function CSSKeyframesRule() {
		CSSOM.CSSRule.call(this);
		this.name = '';
		this.cssRules = [];
	};

	CSSOM.CSSKeyframesRule.prototype = new CSSOM.CSSRule();
	CSSOM.CSSKeyframesRule.prototype.constructor = CSSOM.CSSKeyframesRule;
	CSSOM.CSSKeyframesRule.prototype.type = 7;
	//FIXME
	//CSSOM.CSSKeyframesRule.prototype.insertRule = CSSStyleSheet.prototype.insertRule;
	//CSSOM.CSSKeyframesRule.prototype.deleteRule = CSSStyleSheet.prototype.deleteRule;

	// http://www.opensource.apple.com/source/WebCore/WebCore-955.66.1/css/WebKitCSSKeyframesRule.cpp
	Object.defineProperty(CSSOM.CSSKeyframesRule.prototype, "cssText", {
	  get: function() {
	    var cssTexts = [];
	    for (var i=0, length=this.cssRules.length; i < length; i++) {
	      cssTexts.push("  " + this.cssRules[i].cssText);
	    }
	    return "@" + (this._vendorPrefix || '') + "keyframes " + this.name + " { \n" + cssTexts.join("\n") + "\n}";
	  }
	});


	//.CommonJS
	CSSKeyframesRule.CSSKeyframesRule = CSSOM.CSSKeyframesRule;
	///CommonJS
	return CSSKeyframesRule;
}

var CSSValueExpression = {};

var CSSValue = {};

var hasRequiredCSSValue;

function requireCSSValue () {
	if (hasRequiredCSSValue) return CSSValue;
	hasRequiredCSSValue = 1;
	//.CommonJS
	var CSSOM = {};
	///CommonJS


	/**
	 * @constructor
	 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSValue
	 *
	 * TODO: add if needed
	 */
	CSSOM.CSSValue = function CSSValue() {
	};

	CSSOM.CSSValue.prototype = {
		constructor: CSSOM.CSSValue,

		// @see: http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSValue
		set cssText(text) {
			var name = this._getConstructorName();

			throw new Error('DOMException: property "cssText" of "' + name + '" is readonly and can not be replaced with "' + text + '"!');
		},

		get cssText() {
			var name = this._getConstructorName();

			throw new Error('getter "cssText" of "' + name + '" is not implemented!');
		},

		_getConstructorName: function() {
			var s = this.constructor.toString(),
					c = s.match(/function\s([^\(]+)/),
					name = c[1];

			return name;
		}
	};


	//.CommonJS
	CSSValue.CSSValue = CSSOM.CSSValue;
	///CommonJS
	return CSSValue;
}

var hasRequiredCSSValueExpression;

function requireCSSValueExpression () {
	if (hasRequiredCSSValueExpression) return CSSValueExpression;
	hasRequiredCSSValueExpression = 1;
	//.CommonJS
	var CSSOM = {
		CSSValue: requireCSSValue().CSSValue
	};
	///CommonJS


	/**
	 * @constructor
	 * @see http://msdn.microsoft.com/en-us/library/ms537634(v=vs.85).aspx
	 *
	 */
	CSSOM.CSSValueExpression = function CSSValueExpression(token, idx) {
		this._token = token;
		this._idx = idx;
	};

	CSSOM.CSSValueExpression.prototype = new CSSOM.CSSValue();
	CSSOM.CSSValueExpression.prototype.constructor = CSSOM.CSSValueExpression;

	/**
	 * parse css expression() value
	 *
	 * @return {Object}
	 *         - error:
	 *         or
	 *         - idx:
	 *         - expression:
	 *
	 * Example:
	 *
	 * .selector {
	 *		zoom: expression(documentElement.clientWidth > 1000 ? '1000px' : 'auto');
	 * }
	 */
	CSSOM.CSSValueExpression.prototype.parse = function() {
		var token = this._token,
				idx = this._idx;

		var character = '',
				expression = '',
				error = '',
				info,
				paren = [];


		for (; ; ++idx) {
			character = token.charAt(idx);

			// end of token
			if (character === '') {
				error = 'css expression error: unfinished expression!';
				break;
			}

			switch(character) {
				case '(':
					paren.push(character);
					expression += character;
					break;

				case ')':
					paren.pop(character);
					expression += character;
					break;

				case '/':
					if ((info = this._parseJSComment(token, idx))) { // comment?
						if (info.error) {
							error = 'css expression error: unfinished comment in expression!';
						} else {
							idx = info.idx;
							// ignore the comment
						}
					} else if ((info = this._parseJSRexExp(token, idx))) { // regexp
						idx = info.idx;
						expression += info.text;
					} else { // other
						expression += character;
					}
					break;

				case "'":
				case '"':
					info = this._parseJSString(token, idx, character);
					if (info) { // string
						idx = info.idx;
						expression += info.text;
					} else {
						expression += character;
					}
					break;

				default:
					expression += character;
					break;
			}

			if (error) {
				break;
			}

			// end of expression
			if (paren.length === 0) {
				break;
			}
		}

		var ret;
		if (error) {
			ret = {
				error: error
			};
		} else {
			ret = {
				idx: idx,
				expression: expression
			};
		}

		return ret;
	};


	/**
	 *
	 * @return {Object|false}
	 *          - idx:
	 *          - text:
	 *          or
	 *          - error:
	 *          or
	 *          false
	 *
	 */
	CSSOM.CSSValueExpression.prototype._parseJSComment = function(token, idx) {
		var nextChar = token.charAt(idx + 1),
				text;

		if (nextChar === '/' || nextChar === '*') {
			var startIdx = idx,
					endIdx,
					commentEndChar;

			if (nextChar === '/') { // line comment
				commentEndChar = '\n';
			} else if (nextChar === '*') { // block comment
				commentEndChar = '*/';
			}

			endIdx = token.indexOf(commentEndChar, startIdx + 1 + 1);
			if (endIdx !== -1) {
				endIdx = endIdx + commentEndChar.length - 1;
				text = token.substring(idx, endIdx + 1);
				return {
					idx: endIdx,
					text: text
				};
			} else {
				var error = 'css expression error: unfinished comment in expression!';
				return {
					error: error
				};
			}
		} else {
			return false;
		}
	};


	/**
	 *
	 * @return {Object|false}
	 *					- idx:
	 *					- text:
	 *					or 
	 *					false
	 *
	 */
	CSSOM.CSSValueExpression.prototype._parseJSString = function(token, idx, sep) {
		var endIdx = this._findMatchedIdx(token, idx, sep),
				text;

		if (endIdx === -1) {
			return false;
		} else {
			text = token.substring(idx, endIdx + sep.length);

			return {
				idx: endIdx,
				text: text
			};
		}
	};


	/**
	 * parse regexp in css expression
	 *
	 * @return {Object|false}
	 *				- idx:
	 *				- regExp:
	 *				or 
	 *				false
	 */

	/*

	all legal RegExp
	 
	/a/
	(/a/)
	[/a/]
	[12, /a/]

	!/a/

	+/a/
	-/a/
	* /a/
	/ /a/
	%/a/

	===/a/
	!==/a/
	==/a/
	!=/a/
	>/a/
	>=/a/
	</a/
	<=/a/

	&/a/
	|/a/
	^/a/
	~/a/
	<</a/
	>>/a/
	>>>/a/

	&&/a/
	||/a/
	?/a/
	=/a/
	,/a/

			delete /a/
					in /a/
	instanceof /a/
					new /a/
			typeof /a/
				void /a/

	*/
	CSSOM.CSSValueExpression.prototype._parseJSRexExp = function(token, idx) {
		var before = token.substring(0, idx).replace(/\s+$/, ""),
				legalRegx = [
					/^$/,
					/\($/,
					/\[$/,
					/\!$/,
					/\+$/,
					/\-$/,
					/\*$/,
					/\/\s+/,
					/\%$/,
					/\=$/,
					/\>$/,
					/<$/,
					/\&$/,
					/\|$/,
					/\^$/,
					/\~$/,
					/\?$/,
					/\,$/,
					/delete$/,
					/in$/,
					/instanceof$/,
					/new$/,
					/typeof$/,
					/void$/
				];

		var isLegal = legalRegx.some(function(reg) {
			return reg.test(before);
		});

		if (!isLegal) {
			return false;
		} else {
			var sep = '/';

			// same logic as string
			return this._parseJSString(token, idx, sep);
		}
	};


	/**
	 *
	 * find next sep(same line) index in `token`
	 *
	 * @return {Number}
	 *
	 */
	CSSOM.CSSValueExpression.prototype._findMatchedIdx = function(token, idx, sep) {
		var startIdx = idx,
				endIdx;

		var NOT_FOUND = -1;

		while(true) {
			endIdx = token.indexOf(sep, startIdx + 1);

			if (endIdx === -1) { // not found
				endIdx = NOT_FOUND;
				break;
			} else {
				var text = token.substring(idx + 1, endIdx),
						matched = text.match(/\\+$/);
				if (!matched || matched[0] % 2 === 0) { // not escaped
					break;
				} else {
					startIdx = endIdx;
				}
			}
		}

		// boundary must be in the same line(js sting or regexp)
		var nextNewLineIdx = token.indexOf('\n', idx + 1);
		if (nextNewLineIdx < endIdx) {
			endIdx = NOT_FOUND;
		}


		return endIdx;
	};




	//.CommonJS
	CSSValueExpression.CSSValueExpression = CSSOM.CSSValueExpression;
	///CommonJS
	return CSSValueExpression;
}

var CSSDocumentRule = {};

var MatcherList = {};

var hasRequiredMatcherList;

function requireMatcherList () {
	if (hasRequiredMatcherList) return MatcherList;
	hasRequiredMatcherList = 1;
	//.CommonJS
	var CSSOM = {};
	///CommonJS


	/**
	 * @constructor
	 * @see https://developer.mozilla.org/en/CSS/@-moz-document
	 */
	CSSOM.MatcherList = function MatcherList(){
	    this.length = 0;
	};

	CSSOM.MatcherList.prototype = {

	    constructor: CSSOM.MatcherList,

	    /**
	     * @return {string}
	     */
	    get matcherText() {
	        return Array.prototype.join.call(this, ", ");
	    },

	    /**
	     * @param {string} value
	     */
	    set matcherText(value) {
	        // just a temporary solution, actually it may be wrong by just split the value with ',', because a url can include ','.
	        var values = value.split(",");
	        var length = this.length = values.length;
	        for (var i=0; i<length; i++) {
	            this[i] = values[i].trim();
	        }
	    },

	    /**
	     * @param {string} matcher
	     */
	    appendMatcher: function(matcher) {
	        if (Array.prototype.indexOf.call(this, matcher) === -1) {
	            this[this.length] = matcher;
	            this.length++;
	        }
	    },

	    /**
	     * @param {string} matcher
	     */
	    deleteMatcher: function(matcher) {
	        var index = Array.prototype.indexOf.call(this, matcher);
	        if (index !== -1) {
	            Array.prototype.splice.call(this, index, 1);
	        }
	    }

	};


	//.CommonJS
	MatcherList.MatcherList = CSSOM.MatcherList;
	///CommonJS
	return MatcherList;
}

var hasRequiredCSSDocumentRule;

function requireCSSDocumentRule () {
	if (hasRequiredCSSDocumentRule) return CSSDocumentRule;
	hasRequiredCSSDocumentRule = 1;
	//.CommonJS
	var CSSOM = {
	    CSSRule: requireCSSRule().CSSRule,
	    MatcherList: requireMatcherList().MatcherList
	};
	///CommonJS


	/**
	 * @constructor
	 * @see https://developer.mozilla.org/en/CSS/@-moz-document
	 */
	CSSOM.CSSDocumentRule = function CSSDocumentRule() {
	    CSSOM.CSSRule.call(this);
	    this.matcher = new CSSOM.MatcherList();
	    this.cssRules = [];
	};

	CSSOM.CSSDocumentRule.prototype = new CSSOM.CSSRule();
	CSSOM.CSSDocumentRule.prototype.constructor = CSSOM.CSSDocumentRule;
	CSSOM.CSSDocumentRule.prototype.type = 10;
	//FIXME
	//CSSOM.CSSDocumentRule.prototype.insertRule = CSSStyleSheet.prototype.insertRule;
	//CSSOM.CSSDocumentRule.prototype.deleteRule = CSSStyleSheet.prototype.deleteRule;

	Object.defineProperty(CSSOM.CSSDocumentRule.prototype, "cssText", {
	  get: function() {
	    var cssTexts = [];
	    for (var i=0, length=this.cssRules.length; i < length; i++) {
	        cssTexts.push(this.cssRules[i].cssText);
	    }
	    return "@-moz-document " + this.matcher.matcherText + " {" + cssTexts.join("") + "}";
	  }
	});


	//.CommonJS
	CSSDocumentRule.CSSDocumentRule = CSSOM.CSSDocumentRule;
	///CommonJS
	return CSSDocumentRule;
}

var hasRequiredParse;

function requireParse () {
	if (hasRequiredParse) return parse;
	hasRequiredParse = 1;
	//.CommonJS
	var CSSOM = {};
	///CommonJS


	/**
	 * @param {string} token
	 */
	CSSOM.parse = function parse(token) {

		var i = 0;

		/**
			"before-selector" or
			"selector" or
			"atRule" or
			"atBlock" or
			"conditionBlock" or
			"before-name" or
			"name" or
			"before-value" or
			"value"
		*/
		var state = "before-selector";

		var index;
		var buffer = "";
		var valueParenthesisDepth = 0;

		var SIGNIFICANT_WHITESPACE = {
			"selector": true,
			"value": true,
			"value-parenthesis": true,
			"atRule": true,
			"importRule-begin": true,
			"importRule": true,
			"atBlock": true,
			"conditionBlock": true,
			'documentRule-begin': true
		};

		var styleSheet = new CSSOM.CSSStyleSheet();

		// @type CSSStyleSheet|CSSMediaRule|CSSSupportsRule|CSSFontFaceRule|CSSKeyframesRule|CSSDocumentRule
		var currentScope = styleSheet;

		// @type CSSMediaRule|CSSSupportsRule|CSSKeyframesRule|CSSDocumentRule
		var parentRule;

		var ancestorRules = [];
		var hasAncestors = false;
		var prevScope;

		var name, priority="", styleRule, mediaRule, supportsRule, importRule, fontFaceRule, keyframesRule, documentRule, hostRule;

		var atKeyframesRegExp = /@(-(?:\w+-)+)?keyframes/g;

		var parseError = function(message) {
			var lines = token.substring(0, i).split('\n');
			var lineCount = lines.length;
			var charCount = lines.pop().length + 1;
			var error = new Error(message + ' (line ' + lineCount + ', char ' + charCount + ')');
			error.line = lineCount;
			/* jshint sub : true */
			error['char'] = charCount;
			error.styleSheet = styleSheet;
			throw error;
		};

		for (var character; (character = token.charAt(i)); i++) {

			switch (character) {

			case " ":
			case "\t":
			case "\r":
			case "\n":
			case "\f":
				if (SIGNIFICANT_WHITESPACE[state]) {
					buffer += character;
				}
				break;

			// String
			case '"':
				index = i + 1;
				do {
					index = token.indexOf('"', index) + 1;
					if (!index) {
						parseError('Unmatched "');
					}
				} while (token[index - 2] === '\\');
				buffer += token.slice(i, index);
				i = index - 1;
				switch (state) {
					case 'before-value':
						state = 'value';
						break;
					case 'importRule-begin':
						state = 'importRule';
						break;
				}
				break;

			case "'":
				index = i + 1;
				do {
					index = token.indexOf("'", index) + 1;
					if (!index) {
						parseError("Unmatched '");
					}
				} while (token[index - 2] === '\\');
				buffer += token.slice(i, index);
				i = index - 1;
				switch (state) {
					case 'before-value':
						state = 'value';
						break;
					case 'importRule-begin':
						state = 'importRule';
						break;
				}
				break;

			// Comment
			case "/":
				if (token.charAt(i + 1) === "*") {
					i += 2;
					index = token.indexOf("*/", i);
					if (index === -1) {
						parseError("Missing */");
					} else {
						i = index + 1;
					}
				} else {
					buffer += character;
				}
				if (state === "importRule-begin") {
					buffer += " ";
					state = "importRule";
				}
				break;

			// At-rule
			case "@":
				if (token.indexOf("@-moz-document", i) === i) {
					state = "documentRule-begin";
					documentRule = new CSSOM.CSSDocumentRule();
					documentRule.__starts = i;
					i += "-moz-document".length;
					buffer = "";
					break;
				} else if (token.indexOf("@media", i) === i) {
					state = "atBlock";
					mediaRule = new CSSOM.CSSMediaRule();
					mediaRule.__starts = i;
					i += "media".length;
					buffer = "";
					break;
				} else if (token.indexOf("@supports", i) === i) {
					state = "conditionBlock";
					supportsRule = new CSSOM.CSSSupportsRule();
					supportsRule.__starts = i;
					i += "supports".length;
					buffer = "";
					break;
				} else if (token.indexOf("@host", i) === i) {
					state = "hostRule-begin";
					i += "host".length;
					hostRule = new CSSOM.CSSHostRule();
					hostRule.__starts = i;
					buffer = "";
					break;
				} else if (token.indexOf("@import", i) === i) {
					state = "importRule-begin";
					i += "import".length;
					buffer += "@import";
					break;
				} else if (token.indexOf("@font-face", i) === i) {
					state = "fontFaceRule-begin";
					i += "font-face".length;
					fontFaceRule = new CSSOM.CSSFontFaceRule();
					fontFaceRule.__starts = i;
					buffer = "";
					break;
				} else {
					atKeyframesRegExp.lastIndex = i;
					var matchKeyframes = atKeyframesRegExp.exec(token);
					if (matchKeyframes && matchKeyframes.index === i) {
						state = "keyframesRule-begin";
						keyframesRule = new CSSOM.CSSKeyframesRule();
						keyframesRule.__starts = i;
						keyframesRule._vendorPrefix = matchKeyframes[1]; // Will come out as undefined if no prefix was found
						i += matchKeyframes[0].length - 1;
						buffer = "";
						break;
					} else if (state === "selector") {
						state = "atRule";
					}
				}
				buffer += character;
				break;

			case "{":
				if (state === "selector" || state === "atRule") {
					styleRule.selectorText = buffer.trim();
					styleRule.style.__starts = i;
					buffer = "";
					state = "before-name";
				} else if (state === "atBlock") {
					mediaRule.media.mediaText = buffer.trim();

					if (parentRule) {
						ancestorRules.push(parentRule);
					}

					currentScope = parentRule = mediaRule;
					mediaRule.parentStyleSheet = styleSheet;
					buffer = "";
					state = "before-selector";
				} else if (state === "conditionBlock") {
					supportsRule.conditionText = buffer.trim();

					if (parentRule) {
						ancestorRules.push(parentRule);
					}

					currentScope = parentRule = supportsRule;
					supportsRule.parentStyleSheet = styleSheet;
					buffer = "";
					state = "before-selector";
				} else if (state === "hostRule-begin") {
					if (parentRule) {
						ancestorRules.push(parentRule);
					}

					currentScope = parentRule = hostRule;
					hostRule.parentStyleSheet = styleSheet;
					buffer = "";
					state = "before-selector";
				} else if (state === "fontFaceRule-begin") {
					if (parentRule) {
						fontFaceRule.parentRule = parentRule;
					}
					fontFaceRule.parentStyleSheet = styleSheet;
					styleRule = fontFaceRule;
					buffer = "";
					state = "before-name";
				} else if (state === "keyframesRule-begin") {
					keyframesRule.name = buffer.trim();
					if (parentRule) {
						ancestorRules.push(parentRule);
						keyframesRule.parentRule = parentRule;
					}
					keyframesRule.parentStyleSheet = styleSheet;
					currentScope = parentRule = keyframesRule;
					buffer = "";
					state = "keyframeRule-begin";
				} else if (state === "keyframeRule-begin") {
					styleRule = new CSSOM.CSSKeyframeRule();
					styleRule.keyText = buffer.trim();
					styleRule.__starts = i;
					buffer = "";
					state = "before-name";
				} else if (state === "documentRule-begin") {
					// FIXME: what if this '{' is in the url text of the match function?
					documentRule.matcher.matcherText = buffer.trim();
					if (parentRule) {
						ancestorRules.push(parentRule);
						documentRule.parentRule = parentRule;
					}
					currentScope = parentRule = documentRule;
					documentRule.parentStyleSheet = styleSheet;
					buffer = "";
					state = "before-selector";
				}
				break;

			case ":":
				if (state === "name") {
					name = buffer.trim();
					buffer = "";
					state = "before-value";
				} else {
					buffer += character;
				}
				break;

			case "(":
				if (state === 'value') {
					// ie css expression mode
					if (buffer.trim() === 'expression') {
						var info = (new CSSOM.CSSValueExpression(token, i)).parse();

						if (info.error) {
							parseError(info.error);
						} else {
							buffer += info.expression;
							i = info.idx;
						}
					} else {
						state = 'value-parenthesis';
						//always ensure this is reset to 1 on transition
						//from value to value-parenthesis
						valueParenthesisDepth = 1;
						buffer += character;
					}
				} else if (state === 'value-parenthesis') {
					valueParenthesisDepth++;
					buffer += character;
				} else {
					buffer += character;
				}
				break;

			case ")":
				if (state === 'value-parenthesis') {
					valueParenthesisDepth--;
					if (valueParenthesisDepth === 0) state = 'value';
				}
				buffer += character;
				break;

			case "!":
				if (state === "value" && token.indexOf("!important", i) === i) {
					priority = "important";
					i += "important".length;
				} else {
					buffer += character;
				}
				break;

			case ";":
				switch (state) {
					case "value":
						styleRule.style.setProperty(name, buffer.trim(), priority);
						priority = "";
						buffer = "";
						state = "before-name";
						break;
					case "atRule":
						buffer = "";
						state = "before-selector";
						break;
					case "importRule":
						importRule = new CSSOM.CSSImportRule();
						importRule.parentStyleSheet = importRule.styleSheet.parentStyleSheet = styleSheet;
						importRule.cssText = buffer + character;
						styleSheet.cssRules.push(importRule);
						buffer = "";
						state = "before-selector";
						break;
					default:
						buffer += character;
						break;
				}
				break;

			case "}":
				switch (state) {
					case "value":
						styleRule.style.setProperty(name, buffer.trim(), priority);
						priority = "";
						/* falls through */
					case "before-name":
					case "name":
						styleRule.__ends = i + 1;
						if (parentRule) {
							styleRule.parentRule = parentRule;
						}
						styleRule.parentStyleSheet = styleSheet;
						currentScope.cssRules.push(styleRule);
						buffer = "";
						if (currentScope.constructor === CSSOM.CSSKeyframesRule) {
							state = "keyframeRule-begin";
						} else {
							state = "before-selector";
						}
						break;
					case "keyframeRule-begin":
					case "before-selector":
					case "selector":
						// End of media/supports/document rule.
						if (!parentRule) {
							parseError("Unexpected }");
						}

						// Handle rules nested in @media or @supports
						hasAncestors = ancestorRules.length > 0;

						while (ancestorRules.length > 0) {
							parentRule = ancestorRules.pop();

							if (
								parentRule.constructor.name === "CSSMediaRule"
								|| parentRule.constructor.name === "CSSSupportsRule"
							) {
								prevScope = currentScope;
								currentScope = parentRule;
								currentScope.cssRules.push(prevScope);
								break;
							}

							if (ancestorRules.length === 0) {
								hasAncestors = false;
							}
						}
						
						if (!hasAncestors) {
							currentScope.__ends = i + 1;
							styleSheet.cssRules.push(currentScope);
							currentScope = styleSheet;
							parentRule = null;
						}

						buffer = "";
						state = "before-selector";
						break;
				}
				break;

			default:
				switch (state) {
					case "before-selector":
						state = "selector";
						styleRule = new CSSOM.CSSStyleRule();
						styleRule.__starts = i;
						break;
					case "before-name":
						state = "name";
						break;
					case "before-value":
						state = "value";
						break;
					case "importRule-begin":
						state = "importRule";
						break;
				}
				buffer += character;
				break;
			}
		}

		return styleSheet;
	};


	//.CommonJS
	parse.parse = CSSOM.parse;
	// The following modules cannot be included sooner due to the mutual dependency with parse.js
	CSSOM.CSSStyleSheet = requireCSSStyleSheet().CSSStyleSheet;
	CSSOM.CSSStyleRule = requireCSSStyleRule().CSSStyleRule;
	CSSOM.CSSImportRule = requireCSSImportRule().CSSImportRule;
	CSSOM.CSSGroupingRule = requireCSSGroupingRule().CSSGroupingRule;
	CSSOM.CSSMediaRule = requireCSSMediaRule().CSSMediaRule;
	CSSOM.CSSConditionRule = requireCSSConditionRule().CSSConditionRule;
	CSSOM.CSSSupportsRule = requireCSSSupportsRule().CSSSupportsRule;
	CSSOM.CSSFontFaceRule = requireCSSFontFaceRule().CSSFontFaceRule;
	CSSOM.CSSHostRule = requireCSSHostRule().CSSHostRule;
	CSSOM.CSSStyleDeclaration = requireCSSStyleDeclaration().CSSStyleDeclaration;
	CSSOM.CSSKeyframeRule = requireCSSKeyframeRule().CSSKeyframeRule;
	CSSOM.CSSKeyframesRule = requireCSSKeyframesRule().CSSKeyframesRule;
	CSSOM.CSSValueExpression = requireCSSValueExpression().CSSValueExpression;
	CSSOM.CSSDocumentRule = requireCSSDocumentRule().CSSDocumentRule;
	///CommonJS
	return parse;
}

var hasRequiredCSSStyleDeclaration;

function requireCSSStyleDeclaration () {
	if (hasRequiredCSSStyleDeclaration) return CSSStyleDeclaration;
	hasRequiredCSSStyleDeclaration = 1;
	//.CommonJS
	var CSSOM = {};
	///CommonJS


	/**
	 * @constructor
	 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleDeclaration
	 */
	CSSOM.CSSStyleDeclaration = function CSSStyleDeclaration(){
		this.length = 0;
		this.parentRule = null;

		// NON-STANDARD
		this._importants = {};
	};


	CSSOM.CSSStyleDeclaration.prototype = {

		constructor: CSSOM.CSSStyleDeclaration,

		/**
		 *
		 * @param {string} name
		 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleDeclaration-getPropertyValue
		 * @return {string} the value of the property if it has been explicitly set for this declaration block.
		 * Returns the empty string if the property has not been set.
		 */
		getPropertyValue: function(name) {
			return this[name] || "";
		},

		/**
		 *
		 * @param {string} name
		 * @param {string} value
		 * @param {string} [priority=null] "important" or null
		 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleDeclaration-setProperty
		 */
		setProperty: function(name, value, priority) {
			if (this[name]) {
				// Property already exist. Overwrite it.
				var index = Array.prototype.indexOf.call(this, name);
				if (index < 0) {
					this[this.length] = name;
					this.length++;
				}
			} else {
				// New property.
				this[this.length] = name;
				this.length++;
			}
			this[name] = value + "";
			this._importants[name] = priority;
		},

		/**
		 *
		 * @param {string} name
		 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleDeclaration-removeProperty
		 * @return {string} the value of the property if it has been explicitly set for this declaration block.
		 * Returns the empty string if the property has not been set or the property name does not correspond to a known CSS property.
		 */
		removeProperty: function(name) {
			if (!(name in this)) {
				return "";
			}
			var index = Array.prototype.indexOf.call(this, name);
			if (index < 0) {
				return "";
			}
			var prevValue = this[name];
			this[name] = "";

			// That's what WebKit and Opera do
			Array.prototype.splice.call(this, index, 1);

			// That's what Firefox does
			//this[index] = ""

			return prevValue;
		},

		getPropertyCSSValue: function() {
			//FIXME
		},

		/**
		 *
		 * @param {String} name
		 */
		getPropertyPriority: function(name) {
			return this._importants[name] || "";
		},


		/**
		 *   element.style.overflow = "auto"
		 *   element.style.getPropertyShorthand("overflow-x")
		 *   -> "overflow"
		 */
		getPropertyShorthand: function() {
			//FIXME
		},

		isPropertyImplicit: function() {
			//FIXME
		},

		// Doesn't work in IE < 9
		get cssText(){
			var properties = [];
			for (var i=0, length=this.length; i < length; ++i) {
				var name = this[i];
				var value = this.getPropertyValue(name);
				var priority = this.getPropertyPriority(name);
				if (priority) {
					priority = " !" + priority;
				}
				properties[i] = name + ": " + value + priority + ";";
			}
			return properties.join(" ");
		},

		set cssText(text){
			var i, name;
			for (i = this.length; i--;) {
				name = this[i];
				this[name] = "";
			}
			Array.prototype.splice.call(this, 0, this.length);
			this._importants = {};

			var dummyRule = CSSOM.parse('#bogus{' + text + '}').cssRules[0].style;
			var length = dummyRule.length;
			for (i = 0; i < length; ++i) {
				name = dummyRule[i];
				this.setProperty(dummyRule[i], dummyRule.getPropertyValue(name), dummyRule.getPropertyPriority(name));
			}
		}
	};


	//.CommonJS
	CSSStyleDeclaration.CSSStyleDeclaration = CSSOM.CSSStyleDeclaration;
	CSSOM.parse = requireParse().parse; // Cannot be included sooner due to the mutual dependency between parse.js and CSSStyleDeclaration.js
	///CommonJS
	return CSSStyleDeclaration;
}

var clone = {};

var hasRequiredClone;

function requireClone () {
	if (hasRequiredClone) return clone;
	hasRequiredClone = 1;
	//.CommonJS
	var CSSOM = {
		CSSStyleSheet: requireCSSStyleSheet().CSSStyleSheet,
		CSSRule: requireCSSRule().CSSRule,
		CSSStyleRule: requireCSSStyleRule().CSSStyleRule,
		CSSGroupingRule: requireCSSGroupingRule().CSSGroupingRule,
		CSSConditionRule: requireCSSConditionRule().CSSConditionRule,
		CSSMediaRule: requireCSSMediaRule().CSSMediaRule,
		CSSSupportsRule: requireCSSSupportsRule().CSSSupportsRule,
		CSSStyleDeclaration: requireCSSStyleDeclaration().CSSStyleDeclaration,
		CSSKeyframeRule: requireCSSKeyframeRule().CSSKeyframeRule,
		CSSKeyframesRule: requireCSSKeyframesRule().CSSKeyframesRule
	};
	///CommonJS


	/**
	 * Produces a deep copy of stylesheet — the instance variables of stylesheet are copied recursively.
	 * @param {CSSStyleSheet|CSSOM.CSSStyleSheet} stylesheet
	 * @nosideeffects
	 * @return {CSSOM.CSSStyleSheet}
	 */
	CSSOM.clone = function clone(stylesheet) {

		var cloned = new CSSOM.CSSStyleSheet();

		var rules = stylesheet.cssRules;
		if (!rules) {
			return cloned;
		}

		for (var i = 0, rulesLength = rules.length; i < rulesLength; i++) {
			var rule = rules[i];
			var ruleClone = cloned.cssRules[i] = new rule.constructor();

			var style = rule.style;
			if (style) {
				var styleClone = ruleClone.style = new CSSOM.CSSStyleDeclaration();
				for (var j = 0, styleLength = style.length; j < styleLength; j++) {
					var name = styleClone[j] = style[j];
					styleClone[name] = style[name];
					styleClone._importants[name] = style.getPropertyPriority(name);
				}
				styleClone.length = style.length;
			}

			if (rule.hasOwnProperty('keyText')) {
				ruleClone.keyText = rule.keyText;
			}

			if (rule.hasOwnProperty('selectorText')) {
				ruleClone.selectorText = rule.selectorText;
			}

			if (rule.hasOwnProperty('mediaText')) {
				ruleClone.mediaText = rule.mediaText;
			}

			if (rule.hasOwnProperty('conditionText')) {
				ruleClone.conditionText = rule.conditionText;
			}

			if (rule.hasOwnProperty('cssRules')) {
				ruleClone.cssRules = clone(rule).cssRules;
			}
		}

		return cloned;

	};

	//.CommonJS
	clone.clone = CSSOM.clone;
	///CommonJS
	return clone;
}

var hasRequiredLib$1;

function requireLib$1 () {
	if (hasRequiredLib$1) return lib$1;
	hasRequiredLib$1 = 1;

	lib$1.CSSStyleDeclaration = requireCSSStyleDeclaration().CSSStyleDeclaration;
	lib$1.CSSRule = requireCSSRule().CSSRule;
	lib$1.CSSGroupingRule = requireCSSGroupingRule().CSSGroupingRule;
	lib$1.CSSConditionRule = requireCSSConditionRule().CSSConditionRule;
	lib$1.CSSStyleRule = requireCSSStyleRule().CSSStyleRule;
	lib$1.MediaList = requireMediaList().MediaList;
	lib$1.CSSMediaRule = requireCSSMediaRule().CSSMediaRule;
	lib$1.CSSSupportsRule = requireCSSSupportsRule().CSSSupportsRule;
	lib$1.CSSImportRule = requireCSSImportRule().CSSImportRule;
	lib$1.CSSFontFaceRule = requireCSSFontFaceRule().CSSFontFaceRule;
	lib$1.CSSHostRule = requireCSSHostRule().CSSHostRule;
	lib$1.StyleSheet = requireStyleSheet().StyleSheet;
	lib$1.CSSStyleSheet = requireCSSStyleSheet().CSSStyleSheet;
	lib$1.CSSKeyframesRule = requireCSSKeyframesRule().CSSKeyframesRule;
	lib$1.CSSKeyframeRule = requireCSSKeyframeRule().CSSKeyframeRule;
	lib$1.MatcherList = requireMatcherList().MatcherList;
	lib$1.CSSDocumentRule = requireCSSDocumentRule().CSSDocumentRule;
	lib$1.CSSValue = requireCSSValue().CSSValue;
	lib$1.CSSValueExpression = requireCSSValueExpression().CSSValueExpression;
	lib$1.parse = requireParse().parse;
	lib$1.clone = requireClone().clone;
	return lib$1;
}

var libExports = requireLib$1();

const tagName$e = 'style';

/**
 * @implements globalThis.HTMLStyleElement
 */
class HTMLStyleElement extends TextElement {
  constructor(ownerDocument, localName = tagName$e) {
    super(ownerDocument, localName);
    this[SHEET] = null;
  }

  get sheet() {
    const sheet = this[SHEET];
    if (sheet !== null) {
      return sheet;
    }
    return this[SHEET] = libExports.parse(this.textContent);
  }

  get innerHTML() {
    return super.innerHTML || '';
  }
  set innerHTML(value) {
    super.textContent = value;
    this[SHEET] = null;
  }
  get innerText() {
    return super.innerText || '';
  }
  set innerText(value) {
    super.textContent = value;
    this[SHEET] = null;
  }
  get textContent() {
    return super.textContent || '';
  }
  set textContent(value) {
    super.textContent = value;
    this[SHEET] = null;
  }
}

registerHTMLClass(tagName$e, HTMLStyleElement);

/**
 * @implements globalThis.HTMLTimeElement
 */
class HTMLTimeElement extends HTMLElement {
  constructor(ownerDocument, localName = 'time') {
    super(ownerDocument, localName);
  }

  /**
   * @type {string}
   */
  get dateTime() { return stringAttribute.get(this, 'datetime'); }
  set dateTime(value) { stringAttribute.set(this, 'datetime', value); }
}

registerHTMLClass('time', HTMLTimeElement);

/**
 * @implements globalThis.HTMLFieldSetElement
 */
class HTMLFieldSetElement extends HTMLElement {
  constructor(ownerDocument, localName = 'fieldset') {
    super(ownerDocument, localName);
  }
}

/**
 * @implements globalThis.HTMLEmbedElement
 */
class HTMLEmbedElement extends HTMLElement {
  constructor(ownerDocument, localName = 'embed') {
    super(ownerDocument, localName);
  }
}

/**
 * @implements globalThis.HTMLHRElement
 */
class HTMLHRElement extends HTMLElement {
  constructor(ownerDocument, localName = 'hr') {
    super(ownerDocument, localName);
  }
}

/**
 * @implements globalThis.HTMLProgressElement
 */
class HTMLProgressElement extends HTMLElement {
  constructor(ownerDocument, localName = 'progress') {
    super(ownerDocument, localName);
  }
}

/**
 * @implements globalThis.HTMLParagraphElement
 */
class HTMLParagraphElement extends HTMLElement {
  constructor(ownerDocument, localName = 'p') {
    super(ownerDocument, localName);
  }
}

/**
 * @implements globalThis.HTMLTableElement
 */
class HTMLTableElement extends HTMLElement {
  constructor(ownerDocument, localName = 'table') {
    super(ownerDocument, localName);
  }
}

/**
 * @implements globalThis.HTMLFrameSetElement
 */
class HTMLFrameSetElement extends HTMLElement {
  constructor(ownerDocument, localName = 'frameset') {
    super(ownerDocument, localName);
  }
}

/**
 * @implements globalThis.HTMLLIElement
 */
class HTMLLIElement extends HTMLElement {
  constructor(ownerDocument, localName = 'li') {
    super(ownerDocument, localName);
  }
}

/**
 * @implements globalThis.HTMLBaseElement
 */
class HTMLBaseElement extends HTMLElement {
  constructor(ownerDocument, localName = 'base') {
    super(ownerDocument, localName);
  }
}

/**
 * @implements globalThis.HTMLDataListElement
 */
class HTMLDataListElement extends HTMLElement {
  constructor(ownerDocument, localName = 'datalist') {
    super(ownerDocument, localName);
  }
}

const tagName$d = 'input';

/**
 * @implements globalThis.HTMLInputElement
 */
class HTMLInputElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName$d) {
    super(ownerDocument, localName);
  }

  /* c8 ignore start */
  get autofocus() { return booleanAttribute.get(this, 'autofocus') || -1; }
  set autofocus(value) { booleanAttribute.set(this, 'autofocus', value); }

  get disabled() { return booleanAttribute.get(this, 'disabled'); }
  set disabled(value) { booleanAttribute.set(this, 'disabled', value); }

  get name() { return this.getAttribute('name'); }
  set name(value) { this.setAttribute('name', value); }

  get placeholder() { return this.getAttribute('placeholder'); }
  set placeholder(value) { this.setAttribute('placeholder', value); }

  get type() { return this.getAttribute('type'); }
  set type(value) { this.setAttribute('type', value); }

  get value() { return stringAttribute.get(this, 'value'); }
  set value(value) { stringAttribute.set(this, 'value', value); }
  /* c8 ignore stop */
}

registerHTMLClass(tagName$d, HTMLInputElement);

/**
 * @implements globalThis.HTMLParamElement
 */
class HTMLParamElement extends HTMLElement {
  constructor(ownerDocument, localName = 'param') {
    super(ownerDocument, localName);
  }
}

/**
 * @implements globalThis.HTMLMediaElement
 */
class HTMLMediaElement extends HTMLElement {
  constructor(ownerDocument, localName = 'media') {
    super(ownerDocument, localName);
  }
}

/**
 * @implements globalThis.HTMLAudioElement
 */
class HTMLAudioElement extends HTMLElement {
  constructor(ownerDocument, localName = 'audio') {
    super(ownerDocument, localName);
  }
}

const tagName$c = 'h1';

/**
 * @implements globalThis.HTMLHeadingElement
 */
class HTMLHeadingElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName$c) {
    super(ownerDocument, localName);
  }
}

registerHTMLClass([tagName$c, 'h2', 'h3', 'h4', 'h5', 'h6'], HTMLHeadingElement);

/**
 * @implements globalThis.HTMLDirectoryElement
 */
class HTMLDirectoryElement extends HTMLElement {
  constructor(ownerDocument, localName = 'dir') {
    super(ownerDocument, localName);
  }
}

/**
 * @implements globalThis.HTMLQuoteElement
 */
class HTMLQuoteElement extends HTMLElement {
  constructor(ownerDocument, localName = 'quote') {
    super(ownerDocument, localName);
  }
}

var canvas = {exports: {}};

var canvasShim;
var hasRequiredCanvasShim;

function requireCanvasShim () {
	if (hasRequiredCanvasShim) return canvasShim;
	hasRequiredCanvasShim = 1;
	class Canvas {
	  constructor(width, height) {
	    this.width = width;
	    this.height = height;
	  }
	  getContext() {
	    return null;
	  }
	  toDataURL() {
	    return '';
	  }
	}

	canvasShim = {
	  createCanvas: (width, height) => new Canvas(width, height),
	};
	return canvasShim;
}

/* c8 ignore start */

var hasRequiredCanvas;

function requireCanvas () {
	if (hasRequiredCanvas) return canvas.exports;
	hasRequiredCanvas = 1;
	try {
	  canvas.exports = require('canvas');
	} catch (fallback) {
	  canvas.exports = requireCanvasShim();
	}
	/* c8 ignore stop */
	return canvas.exports;
}

var canvasExports = requireCanvas();
var Canvas = /*@__PURE__*/getDefaultExportFromCjs(canvasExports);

const {createCanvas} = Canvas;

const tagName$b = 'canvas';

/**
 * @implements globalThis.HTMLCanvasElement
 */
class HTMLCanvasElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName$b) {
    super(ownerDocument, localName);
    this[IMAGE] = createCanvas(300, 150);
  }

  get width() {
    return this[IMAGE].width;
  }

  set width(value) {
    numericAttribute.set(this, 'width', value);
    this[IMAGE].width = value;
  }

  get height() {
    return this[IMAGE].height;
  }

  set height(value) {
    numericAttribute.set(this, 'height', value);
    this[IMAGE].height = value;
  }

  getContext(type) {
    return this[IMAGE].getContext(type);
  }

  toDataURL(...args) {
    return this[IMAGE].toDataURL(...args);
  }
}

registerHTMLClass(tagName$b, HTMLCanvasElement);

/**
 * @implements globalThis.HTMLLegendElement
 */
class HTMLLegendElement extends HTMLElement {
  constructor(ownerDocument, localName = 'legend') {
    super(ownerDocument, localName);
  }
}

const tagName$a = 'option';

/**
 * @implements globalThis.HTMLOptionElement
 */
class HTMLOptionElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName$a) {
    super(ownerDocument, localName);
  }

  /* c8 ignore start */
  get value() { return stringAttribute.get(this, 'value'); }
  set value(value) { stringAttribute.set(this, 'value', value); }
  /* c8 ignore stop */

  get selected() { return booleanAttribute.get(this, 'selected'); }
  set selected(value) {
    const option = this.parentElement?.querySelector('option[selected]');
    if (option && option !== this)
      option.selected = false;
    booleanAttribute.set(this, 'selected', value);
  }
}

registerHTMLClass(tagName$a, HTMLOptionElement);

/**
 * @implements globalThis.HTMLSpanElement
 */
class HTMLSpanElement extends HTMLElement {
  constructor(ownerDocument, localName = 'span') {
    super(ownerDocument, localName);
  }
}

/**
 * @implements globalThis.HTMLMeterElement
 */
class HTMLMeterElement extends HTMLElement {
  constructor(ownerDocument, localName = 'meter') {
    super(ownerDocument, localName);
  }
}

/**
 * @implements globalThis.HTMLVideoElement
 */
class HTMLVideoElement extends HTMLElement {
  constructor(ownerDocument, localName = 'video') {
    super(ownerDocument, localName);
  }
}

/**
 * @implements globalThis.HTMLTableCellElement
 */
class HTMLTableCellElement extends HTMLElement {
  constructor(ownerDocument, localName = 'td') {
    super(ownerDocument, localName);
  }
}

const tagName$9 = 'title';

/**
 * @implements globalThis.HTMLTitleElement
 */
class HTMLTitleElement extends TextElement {
  constructor(ownerDocument, localName = tagName$9) {
    super(ownerDocument, localName);
  }
}

registerHTMLClass(tagName$9, HTMLTitleElement);

/**
 * @implements globalThis.HTMLOutputElement
 */
class HTMLOutputElement extends HTMLElement {
  constructor(ownerDocument, localName = 'output') {
    super(ownerDocument, localName);
  }
}

/**
 * @implements globalThis.HTMLTableRowElement
 */
class HTMLTableRowElement extends HTMLElement {
  constructor(ownerDocument, localName = 'tr') {
    super(ownerDocument, localName);
  }
}

/**
 * @implements globalThis.HTMLDataElement
 */
class HTMLDataElement extends HTMLElement {
  constructor(ownerDocument, localName = 'data') {
    super(ownerDocument, localName);
  }
}

/**
 * @implements globalThis.HTMLMenuElement
 */
class HTMLMenuElement extends HTMLElement {
  constructor(ownerDocument, localName = 'menu') {
    super(ownerDocument, localName);
  }
}

const tagName$8 = 'select';

/**
 * @implements globalThis.HTMLSelectElement
 */
class HTMLSelectElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName$8) {
    super(ownerDocument, localName);
  }

  get options() {
    let children = new NodeList;
    let {firstElementChild} = this;
    while (firstElementChild) {
      if (firstElementChild.tagName === 'OPTGROUP')
        children.push(...firstElementChild.children);
      else
        children.push(firstElementChild);
      firstElementChild = firstElementChild.nextElementSibling;
    }
    return children;
  }

  /* c8 ignore start */
  get disabled() { return booleanAttribute.get(this, 'disabled'); }
  set disabled(value) { booleanAttribute.set(this, 'disabled', value); }

  get name() { return this.getAttribute('name'); }
  set name(value) { this.setAttribute('name', value); }
  /* c8 ignore stop */

  get value() { return this.querySelector('option[selected]')?.value; }
}

registerHTMLClass(tagName$8, HTMLSelectElement);

/**
 * @implements globalThis.HTMLBRElement
 */
class HTMLBRElement extends HTMLElement {
  constructor(ownerDocument, localName = 'br') {
    super(ownerDocument, localName);
  }
}

const tagName$7 = 'button';

/**
 * @implements globalThis.HTMLButtonElement
 */
class HTMLButtonElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName$7) {
    super(ownerDocument, localName);
  }

  /* c8 ignore start */
  get disabled() { return booleanAttribute.get(this, 'disabled'); }
  set disabled(value) { booleanAttribute.set(this, 'disabled', value); }

  get name() { return this.getAttribute('name'); }
  set name(value) { this.setAttribute('name', value); }

  get type() { return this.getAttribute('type'); }
  set type(value) { this.setAttribute('type', value); }
  /* c8 ignore stop */
}

registerHTMLClass(tagName$7, HTMLButtonElement);

/**
 * @implements globalThis.HTMLMapElement
 */
class HTMLMapElement extends HTMLElement {
  constructor(ownerDocument, localName = 'map') {
    super(ownerDocument, localName);
  }
}

/**
 * @implements globalThis.HTMLOptGroupElement
 */
class HTMLOptGroupElement extends HTMLElement {
  constructor(ownerDocument, localName = 'optgroup') {
    super(ownerDocument, localName);
  }
}

/**
 * @implements globalThis.HTMLDListElement
 */
class HTMLDListElement extends HTMLElement {
  constructor(ownerDocument, localName = 'dl') {
    super(ownerDocument, localName);
  }
}

const tagName$6 = 'textarea';

/**
 * @implements globalThis.HTMLTextAreaElement
 */
class HTMLTextAreaElement extends TextElement {
  constructor(ownerDocument, localName = tagName$6) {
    super(ownerDocument, localName);
  }

  /* c8 ignore start */
  get disabled() { return booleanAttribute.get(this, 'disabled'); }
  set disabled(value) { booleanAttribute.set(this, 'disabled', value); }

  get name() { return this.getAttribute('name'); }
  set name(value) { this.setAttribute('name', value); }

  get placeholder() { return this.getAttribute('placeholder'); }
  set placeholder(value) { this.setAttribute('placeholder', value); }

  get type() { return this.getAttribute('type'); }
  set type(value) { this.setAttribute('type', value); }

  get value() { return this.textContent; }
  set value(content) { this.textContent = content; }
  /* c8 ignore stop */
}

registerHTMLClass(tagName$6, HTMLTextAreaElement);

/**
 * @implements globalThis.HTMLFontElement
 */
class HTMLFontElement extends HTMLElement {
  constructor(ownerDocument, localName = 'font') {
    super(ownerDocument, localName);
  }
}

/**
 * @implements globalThis.HTMLDivElement
 */
class HTMLDivElement extends HTMLElement {
  constructor(ownerDocument, localName = 'div') {
    super(ownerDocument, localName);
  }
}

const tagName$5 = 'link';

/**
 * @implements globalThis.HTMLLinkElement
 */
class HTMLLinkElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName$5) {
    super(ownerDocument, localName);
  }

  /* c8 ignore start */ // copy paste from img.src, already covered
  get disabled() { return booleanAttribute.get(this, 'disabled'); }
  set disabled(value) { booleanAttribute.set(this, 'disabled', value); }

  get href() { return stringAttribute.get(this, 'href'); }
  set href(value) { stringAttribute.set(this, 'href', value); }

  get hreflang() { return stringAttribute.get(this, 'hreflang'); }
  set hreflang(value) { stringAttribute.set(this, 'hreflang', value); }

  get media() { return stringAttribute.get(this, 'media'); }
  set media(value) { stringAttribute.set(this, 'media', value); }

  get rel() { return stringAttribute.get(this, 'rel'); }
  set rel(value) { stringAttribute.set(this, 'rel', value); }

  get type() { return stringAttribute.get(this, 'type'); }
  set type(value) { stringAttribute.set(this, 'type', value); }
  /* c8 ignore stop */

}

registerHTMLClass(tagName$5, HTMLLinkElement);

const tagName$4 = 'slot';

/**
 * @implements globalThis.HTMLSlotElement
 */
class HTMLSlotElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName$4) {
    super(ownerDocument, localName);
  }

  /* c8 ignore start */
  get name() { return this.getAttribute('name'); }
  set name(value) { this.setAttribute('name', value); }

  assign() {}

  assignedNodes(options) {
    const isNamedSlot = !!this.name;
    const hostChildNodes = this.getRootNode().host?.childNodes ?? [];
    let slottables;

    if (isNamedSlot) {
      slottables = [...hostChildNodes].filter(node => node.slot === this.name);
    } else {
      slottables = [...hostChildNodes].filter(node => !node.slot);
    }

    if (options?.flatten) {
      const result = [];

      // Element and Text nodes are slottables. A slot can be a slottable.
      for (let slottable of slottables) {
        if (slottable.localName === 'slot') {
          result.push(...slottable.assignedNodes({ flatten: true }));
        } else {
          result.push(slottable);
        }
      }

      slottables = result;
    }

    // If no assigned nodes are found, it returns the slot's fallback content.
    return slottables.length ? slottables : [...this.childNodes];
  }

  assignedElements(options) {
    const slottables = this.assignedNodes(options).filter(n => n.nodeType === 1);

    // If no assigned elements are found, it returns the slot's fallback content.
    return slottables.length ? slottables : [...this.children];
  }
  /* c8 ignore stop */
}

registerHTMLClass(tagName$4, HTMLSlotElement);

/**
 * @implements globalThis.HTMLFormElement
 */
class HTMLFormElement extends HTMLElement {
  constructor(ownerDocument, localName = 'form') {
    super(ownerDocument, localName);
  }
}

const tagName$3 = 'img';

/**
 * @implements globalThis.HTMLImageElement
 */
class HTMLImageElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName$3) {
    super(ownerDocument, localName);
  }

  /* c8 ignore start */
  get alt() { return stringAttribute.get(this, 'alt'); }
  set alt(value) { stringAttribute.set(this, 'alt', value); }

  get sizes() { return stringAttribute.get(this, 'sizes'); }
  set sizes(value) { stringAttribute.set(this, 'sizes', value); }

  get src() { return stringAttribute.get(this, 'src'); }
  set src(value) { stringAttribute.set(this, 'src', value); }

  get srcset() { return stringAttribute.get(this, 'srcset'); }
  set srcset(value) { stringAttribute.set(this, 'srcset', value); }

  get title() { return stringAttribute.get(this, 'title'); }
  set title(value) { stringAttribute.set(this, 'title', value); }

  get width() { return numericAttribute.get(this, 'width'); }
  set width(value) { numericAttribute.set(this, 'width', value); }

  get height() { return numericAttribute.get(this, 'height'); }
  set height(value) { numericAttribute.set(this, 'height', value); }
  /* c8 ignore stop */
}

registerHTMLClass(tagName$3, HTMLImageElement);

/**
 * @implements globalThis.HTMLPreElement
 */
class HTMLPreElement extends HTMLElement {
  constructor(ownerDocument, localName = 'pre') {
    super(ownerDocument, localName);
  }
}

/**
 * @implements globalThis.HTMLUListElement
 */
class HTMLUListElement extends HTMLElement {
  constructor(ownerDocument, localName = 'ul') {
    super(ownerDocument, localName);
  }
}

const tagName$2 = 'meta';
/**
 * @implements globalThis.HTMLMetaElement
 */
class HTMLMetaElement extends HTMLElement {
  constructor(ownerDocument, localName =tagName$2) {
    super(ownerDocument, localName);
  }

  /* c8 ignore start */
  get name() { return stringAttribute.get(this, 'name'); }
  set name(value) { stringAttribute.set(this, 'name', value); }

  get httpEquiv() { return stringAttribute.get(this, 'http-equiv'); }
  set httpEquiv(value) { stringAttribute.set(this, 'http-equiv', value); }

  get content() { return stringAttribute.get(this, 'content'); }
  set content(value) { stringAttribute.set(this, 'content', value); }

  get charset() { return stringAttribute.get(this, 'charset'); }
  set charset(value) { stringAttribute.set(this, 'charset', value); }

  get media() { return stringAttribute.get(this, 'media'); }
  set media(value) { stringAttribute.set(this, 'media', value); }
  /* c8 ignore stop */

}

registerHTMLClass(tagName$2, HTMLMetaElement);

/**
 * @implements globalThis.HTMLPictureElement
 */
class HTMLPictureElement extends HTMLElement {
  constructor(ownerDocument, localName = 'picture') {
    super(ownerDocument, localName);
  }
}

/**
 * @implements globalThis.HTMLAreaElement
 */
class HTMLAreaElement extends HTMLElement {
  constructor(ownerDocument, localName = 'area') {
    super(ownerDocument, localName);
  }
}

/**
 * @implements globalThis.HTMLOListElement
 */
class HTMLOListElement extends HTMLElement {
  constructor(ownerDocument, localName = 'ol') {
    super(ownerDocument, localName);
  }
}

/**
 * @implements globalThis.HTMLTableCaptionElement
 */
class HTMLTableCaptionElement extends HTMLElement {
  constructor(ownerDocument, localName = 'caption') {
    super(ownerDocument, localName);
  }
}

const tagName$1 = 'a';

/**
 * @implements globalThis.HTMLAnchorElement
 */
class HTMLAnchorElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName$1) {
    super(ownerDocument, localName);
  }

  /* c8 ignore start */ // copy paste from img.src, already covered
  get href() { return encodeURI(decodeURI(stringAttribute.get(this, 'href'))); }
  set href(value) { stringAttribute.set(this, 'href', decodeURI(value)); }

  get download() { return encodeURI(decodeURI(stringAttribute.get(this, 'download'))); }
  set download(value) { stringAttribute.set(this, 'download', decodeURI(value)); }

  get target() { return stringAttribute.get(this, 'target'); }
  set target(value) { stringAttribute.set(this, 'target', value); }

  get type() { return stringAttribute.get(this, 'type'); }
  set type(value) { stringAttribute.set(this, 'type', value); }

  get rel() { return stringAttribute.get(this, 'rel'); }
  set rel(value) { stringAttribute.set(this, 'rel', value); }
  /* c8 ignore stop */

}

registerHTMLClass(tagName$1, HTMLAnchorElement);

/**
 * @implements globalThis.HTMLLabelElement
 */
class HTMLLabelElement extends HTMLElement {
  constructor(ownerDocument, localName = 'label') {
    super(ownerDocument, localName);
  }
}

/**
 * @implements globalThis.HTMLUnknownElement
 */
class HTMLUnknownElement extends HTMLElement {
  constructor(ownerDocument, localName = 'unknown') {
    super(ownerDocument, localName);
  }
}

/**
 * @implements globalThis.HTMLModElement
 */
class HTMLModElement extends HTMLElement {
  constructor(ownerDocument, localName = 'mod') {
    super(ownerDocument, localName);
  }
}

/**
 * @implements globalThis.HTMLDetailsElement
 */
class HTMLDetailsElement extends HTMLElement {
  constructor(ownerDocument, localName = 'details') {
    super(ownerDocument, localName);
  }
}

const tagName = 'source';

/**
 * @implements globalThis.HTMLSourceElement
 */
class HTMLSourceElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }

  /* c8 ignore start */
  get src() { return stringAttribute.get(this, 'src'); }
  set src(value) { stringAttribute.set(this, 'src', value); }

  get srcset() { return stringAttribute.get(this, 'srcset'); }
  set srcset(value) { stringAttribute.set(this, 'srcset', value); }

  get sizes() { return stringAttribute.get(this, 'sizes'); }
  set sizes(value) { stringAttribute.set(this, 'sizes', value); }

  get type() { return stringAttribute.get(this, 'type'); }
  set type(value) { stringAttribute.set(this, 'type', value); }
  /* c8 ignore stop */
}

registerHTMLClass(tagName, HTMLSourceElement);

/**
 * @implements globalThis.HTMLTrackElement
 */
class HTMLTrackElement extends HTMLElement {
  constructor(ownerDocument, localName = 'track') {
    super(ownerDocument, localName);
  }
}

/**
 * @implements globalThis.HTMLMarqueeElement
 */
class HTMLMarqueeElement extends HTMLElement {
  constructor(ownerDocument, localName = 'marquee') {
    super(ownerDocument, localName);
  }
}

const HTMLClasses = {
  HTMLElement,
  HTMLTemplateElement,
  HTMLHtmlElement,
  HTMLScriptElement,
  HTMLFrameElement,
  HTMLIFrameElement,
  HTMLObjectElement,
  HTMLHeadElement,
  HTMLBodyElement,
  HTMLStyleElement,
  HTMLTimeElement,
  HTMLFieldSetElement,
  HTMLEmbedElement,
  HTMLHRElement,
  HTMLProgressElement,
  HTMLParagraphElement,
  HTMLTableElement,
  HTMLFrameSetElement,
  HTMLLIElement,
  HTMLBaseElement,
  HTMLDataListElement,
  HTMLInputElement,
  HTMLParamElement,
  HTMLMediaElement,
  HTMLAudioElement,
  HTMLHeadingElement,
  HTMLDirectoryElement,
  HTMLQuoteElement,
  HTMLCanvasElement,
  HTMLLegendElement,
  HTMLOptionElement,
  HTMLSpanElement,
  HTMLMeterElement,
  HTMLVideoElement,
  HTMLTableCellElement,
  HTMLTitleElement,
  HTMLOutputElement,
  HTMLTableRowElement,
  HTMLDataElement,
  HTMLMenuElement,
  HTMLSelectElement,
  HTMLBRElement,
  HTMLButtonElement,
  HTMLMapElement,
  HTMLOptGroupElement,
  HTMLDListElement,
  HTMLTextAreaElement,
  HTMLFontElement,
  HTMLDivElement,
  HTMLLinkElement,
  HTMLSlotElement,
  HTMLFormElement,
  HTMLImageElement,
  HTMLPreElement,
  HTMLUListElement,
  HTMLMetaElement,
  HTMLPictureElement,
  HTMLAreaElement,
  HTMLOListElement,
  HTMLTableCaptionElement,
  HTMLAnchorElement,
  HTMLLabelElement,
  HTMLUnknownElement,
  HTMLModElement,
  HTMLDetailsElement,
  HTMLSourceElement,
  HTMLTrackElement,
  HTMLMarqueeElement
};

// TODO: ensure all these are text only
// /^(?:plaintext|script|style|textarea|title|xmp)$/i

const voidElements = {test: () => true};
const Mime = {
  'text/html': {
    docType: '<!DOCTYPE html>',
    ignoreCase: true,
    voidElements: /^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i
  },
  'image/svg+xml': {
    docType: '<?xml version="1.0" encoding="utf-8"?>',
    ignoreCase: false,
    voidElements
  },
  'text/xml': {
    docType: '<?xml version="1.0" encoding="utf-8"?>',
    ignoreCase: false,
    voidElements
  },
  'application/xml': {
    docType: '<?xml version="1.0" encoding="utf-8"?>',
    ignoreCase: false,
    voidElements
  },
  'application/xhtml+xml': {
    docType: '<?xml version="1.0" encoding="utf-8"?>',
    ignoreCase: false,
    voidElements
  }
};

// https://dom.spec.whatwg.org/#interface-customevent


/**
 * @implements globalThis.CustomEvent
 */
class CustomEvent extends GlobalEvent {
  constructor(type, eventInitDict = {}) {
    super(type, eventInitDict);
    this.detail = eventInitDict.detail;
  }
}

/* c8 ignore stop */

// https://dom.spec.whatwg.org/#interface-customevent


/**
 * @implements globalThis.InputEvent
 */
class InputEvent extends GlobalEvent {
  constructor(type, inputEventInit = {}) {
    super(type, inputEventInit);
    this.inputType = inputEventInit.inputType;
    this.data = inputEventInit.data;
    this.dataTransfer = inputEventInit.dataTransfer;
    this.isComposing = inputEventInit.isComposing || false;
    this.ranges = inputEventInit.ranges;
  }
}
/* c8 ignore stop */

const ImageClass = ownerDocument =>
/**
 * @implements globalThis.Image
 */
class Image extends HTMLImageElement {
  constructor(width, height) {
    super(ownerDocument);
    switch (arguments.length) {
      case 1:
        this.height = width;
        this.width = width;
        break;
      case 2:
        this.height = height;
        this.width = width;
        break;
    }
  }
};

// https://dom.spec.whatwg.org/#concept-live-range


const deleteContents = ({[START]: start, [END]: end}, fragment = null) => {
  setAdjacent(start[PREV], end[NEXT]);
  do {
    const after = getEnd(start);
    const next = after === end ? after : after[NEXT];
    if (fragment)
      fragment.insertBefore(start, fragment[END]);
    else
      start.remove();
    start = next;
  } while (start !== end);
};

/**
 * @implements globalThis.Range
 */
class Range {
  constructor() {
    this[START] = null;
    this[END] = null;
    this.commonAncestorContainer = null;
  }

  /* TODO: this is more complicated than it looks
  setStart(node, offset) {
    this[START] = node.childNodes[offset];
  }

  setEnd(node, offset) {
    this[END] = getEnd(node.childNodes[offset]);
  }
  //*/

  insertNode(newNode) {
    this[END].parentNode.insertBefore(newNode, this[START]);
  }

  selectNode(node) {
    this[START] = node;
    this[END] = getEnd(node);
  }

  // TODO: SVG elements should then create contextual fragments
  //       that return SVG nodes
  selectNodeContents(node) {
    this.selectNode(node);
    this.commonAncestorContainer = node;
  }

  surroundContents(parentNode) {
    parentNode.replaceChildren(this.extractContents());
  }

  setStartBefore(node) {
    this[START] = node;
  }

  setStartAfter(node) {
    this[START] = node.nextSibling;
  }

  setEndBefore(node) {
    this[END] = getEnd(node.previousSibling);
  }

  setEndAfter(node) {
    this[END] = getEnd(node);
  }

  cloneContents() {
    let {[START]: start, [END]: end} = this;
    const fragment = start.ownerDocument.createDocumentFragment();
    while (start !== end) {
      fragment.insertBefore(start.cloneNode(true), fragment[END]);
      start = getEnd(start);
      if (start !== end)
        start = start[NEXT];
    }
    return fragment;
  }

  deleteContents() {
    deleteContents(this);
  }

  extractContents() {
    const fragment = this[START].ownerDocument.createDocumentFragment();
    deleteContents(this, fragment);
    return fragment;
  }

  createContextualFragment(html) {
    const { commonAncestorContainer: doc } = this;
    const isSVG = 'ownerSVGElement' in doc;
    const document = isSVG ? doc.ownerDocument : doc;
    const template = document.createElement('template');
    template.innerHTML = html;
    let {content} = template;
    if (isSVG) {
      const childNodes = [...content.childNodes];
      content = document.createDocumentFragment();
      Object.setPrototypeOf(content, SVGElement$1.prototype);
      content.ownerSVGElement = document;
      for (const child of childNodes) {
        Object.setPrototypeOf(child, SVGElement$1.prototype);
        child.ownerSVGElement = document;
        content.appendChild(child);
      }
    }
    else
      this.selectNode(content);
    return content;
  }

  cloneRange() {
    const range = new Range;
    range[START] = this[START];
    range[END] = this[END];
    return range;
  }
}

const isOK = ({nodeType}, mask) => {
  switch (nodeType) {
    case ELEMENT_NODE:
      return mask & SHOW_ELEMENT;
    case TEXT_NODE:
      return mask & SHOW_TEXT;
    case COMMENT_NODE:
      return mask & SHOW_COMMENT;
    case CDATA_SECTION_NODE:
      return mask & SHOW_CDATA_SECTION;
  }
  return 0;
};

/**
 * @implements globalThis.TreeWalker
 */
class TreeWalker {
  constructor(root, whatToShow = SHOW_ALL) {
    this.root = root;
    this.currentNode = root;
    this.whatToShow = whatToShow;
    let {[NEXT]: next, [END]: end} = root;
    if (root.nodeType === DOCUMENT_NODE) {
      const {documentElement} = root;
      next = documentElement;
      end = documentElement[END];
    }
    const nodes = [];
    while (next && next !== end) {
      if (isOK(next, whatToShow))
        nodes.push(next);
      next = next[NEXT];
    }
    this[PRIVATE] = {i: 0, nodes};
  }

  nextNode() {
    const $ = this[PRIVATE];
    this.currentNode = $.i < $.nodes.length ? $.nodes[$.i++] : null;
    return this.currentNode;
  }
}

const query = (method, ownerDocument, selectors) => {
  let {[NEXT]: next, [END]: end} = ownerDocument;
  return method.call({ownerDocument, [NEXT]: next, [END]: end}, selectors);
};

const globalExports = assign(
  {},
  Facades,
  HTMLClasses,
  {
    CustomEvent,
    Event: GlobalEvent,
    EventTarget: DOMEventTarget,
    InputEvent,
    NamedNodeMap,
    NodeList
  }
);

const window = new WeakMap;

/**
 * @implements globalThis.Document
 */
let Document$1 = class Document extends NonElementParentNode {
  constructor(type) {
    super(null, '#document', DOCUMENT_NODE);
    this[CUSTOM_ELEMENTS] = {active: false, registry: null};
    this[MUTATION_OBSERVER] = {active: false, class: null};
    this[MIME] = Mime[type];
    /** @type {DocumentType} */
    this[DOCTYPE] = null;
    this[DOM_PARSER] = null;
    this[GLOBALS] = null;
    this[IMAGE] = null;
    this[UPGRADE] = null;
  }

  /**
   * @type {globalThis.Document['defaultView']}
   */
  get defaultView() {
    if (!window.has(this))
      window.set(this, new Proxy(globalThis, {
        set: (target, name, value) => {
          switch (name) {
            case 'addEventListener':
            case 'removeEventListener':
            case 'dispatchEvent':
              this[EVENT_TARGET][name] = value;
              break;
            default:
              target[name] = value;
              break;
          }
          return true;
        },
        get: (globalThis, name) => {
          switch (name) {
            case 'addEventListener':
            case 'removeEventListener':
            case 'dispatchEvent':
              if (!this[EVENT_TARGET]) {
                const et = this[EVENT_TARGET] = new DOMEventTarget;
                et.dispatchEvent = et.dispatchEvent.bind(et);
                et.addEventListener = et.addEventListener.bind(et);
                et.removeEventListener = et.removeEventListener.bind(et);
              }
              return this[EVENT_TARGET][name];
            case 'document':
              return this;
            /* c8 ignore start */
            case 'navigator':
              return {
                userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36'
              };
            /* c8 ignore stop */
            case 'window':
              return window.get(this);
            case 'customElements':
              if (!this[CUSTOM_ELEMENTS].registry)
                this[CUSTOM_ELEMENTS] = new CustomElementRegistry(this);
              return this[CUSTOM_ELEMENTS];
            case 'performance':
              return perf_hooksExports.performance;
            case 'DOMParser':
              return this[DOM_PARSER];
            case 'Image':
              if (!this[IMAGE])
                this[IMAGE] = ImageClass(this);
              return this[IMAGE];
            case 'MutationObserver':
              if (!this[MUTATION_OBSERVER].class)
                this[MUTATION_OBSERVER] = new MutationObserverClass(this);
              return this[MUTATION_OBSERVER].class;
          }
          return (this[GLOBALS] && this[GLOBALS][name]) ||
                  globalExports[name] ||
                  globalThis[name];
        }
      }));
    return window.get(this);
  }

  get doctype() {
    const docType = this[DOCTYPE];
    if (docType)
      return docType;
    const {firstChild} = this;
    if (firstChild && firstChild.nodeType === DOCUMENT_TYPE_NODE)
      return (this[DOCTYPE] = firstChild);
    return null;
  }

  set doctype(value) {
    if (/^([a-z:]+)(\s+system|\s+public(\s+"([^"]+)")?)?(\s+"([^"]+)")?/i.test(value)) {
      const {$1: name, $4: publicId, $6: systemId} = RegExp;
      this[DOCTYPE] = new DocumentType$1(this, name, publicId, systemId);
      knownSiblings(this, this[DOCTYPE], this[NEXT]);
    }
  }

  get documentElement() {
    return this.firstElementChild;
  }

  get isConnected() { return true; }

  /**
   * @protected
   */
   _getParent() {
    return this[EVENT_TARGET];
  }

  createAttribute(name) { return new Attr$1(this, name); }
  createCDATASection(data) { return new CDATASection$1(this, data); }
  createComment(textContent) { return new Comment$1(this, textContent); }
  createDocumentFragment() { return new DocumentFragment$1(this); }
  createDocumentType(name, publicId, systemId) { return new DocumentType$1(this, name, publicId, systemId); }
  createElement(localName) { return new Element$1(this, localName); }
  createRange() {
    const range = new Range;
    range.commonAncestorContainer = this;
    return range;
  }
  createTextNode(textContent) { return new Text$1(this, textContent); }
  createTreeWalker(root, whatToShow = -1) { return new TreeWalker(root, whatToShow); }
  createNodeIterator(root, whatToShow = -1) { return this.createTreeWalker(root, whatToShow); }

  createEvent(name) {
    const event = create$1(name === 'Event' ? new GlobalEvent('') : new CustomEvent(''));
    event.initEvent = event.initCustomEvent = (
      type,
      canBubble = false,
      cancelable = false,
      detail
    ) => {
      event.bubbles = !!canBubble;

      defineProperties(event, {
        type: {value: type},
        canBubble: {value: canBubble},
        cancelable: {value: cancelable},
        detail: {value: detail}
      });
    };
    return event;
  }

  cloneNode(deep = false) {
    const {
      constructor,
      [CUSTOM_ELEMENTS]: customElements,
      [DOCTYPE]: doctype
    } = this;
    const document = new constructor();
    document[CUSTOM_ELEMENTS] = customElements;
    if (deep) {
      const end = document[END];
      const {childNodes} = this;
      for (let {length} = childNodes, i = 0; i < length; i++)
        document.insertBefore(childNodes[i].cloneNode(true), end);
      if (doctype)
        document[DOCTYPE] = childNodes[0];
    }
    return document;
  }

  importNode(externalNode) {
    // important: keep the signature length as *one*
    // or it would behave like old IE or Edge with polyfills
    const deep = 1 < arguments.length && !!arguments[1];
    const node = externalNode.cloneNode(deep);
    const {[CUSTOM_ELEMENTS]: customElements} = this;
    const {active} = customElements;
    const upgrade = element => {
      const {ownerDocument, nodeType} = element;
      element.ownerDocument = this;
      if (active && ownerDocument !== this && nodeType === ELEMENT_NODE)
        customElements.upgrade(element);
    };
    upgrade(node);
    if (deep) {
      switch (node.nodeType) {
        case ELEMENT_NODE:
        case DOCUMENT_FRAGMENT_NODE: {
          let {[NEXT]: next, [END]: end} = node;
          while (next !== end) {
            if (next.nodeType === ELEMENT_NODE)
              upgrade(next);
            next = next[NEXT];
          }
          break;
        }
      }
    }
    return node;
  }

  toString() { return this.childNodes.join(''); }

  querySelector(selectors) {
    return query(super.querySelector, this, selectors);
  }

  querySelectorAll(selectors) {
    return query(super.querySelectorAll, this, selectors);
  }

  /* c8 ignore start */
  getElementsByTagNameNS(_, name) {
    return this.getElementsByTagName(name);
  }
  createAttributeNS(_, name) {
    return this.createAttribute(name);
  }
  createElementNS(nsp, localName, options) {
    return nsp === SVG_NAMESPACE ?
            new SVGElement$1(this, localName, null) :
            this.createElement(localName, options);
  }
  /* c8 ignore stop */
};

setPrototypeOf(
  globalExports.Document = function Document() {
    illegalConstructor();
  },
  Document$1
).prototype = Document$1.prototype;

const createHTMLElement = (ownerDocument, builtin, localName, options) => {
  if (!builtin && htmlClasses.has(localName)) {
    const Class = htmlClasses.get(localName);
    return new Class(ownerDocument, localName);
  }
  const {[CUSTOM_ELEMENTS]: {active, registry}} = ownerDocument;
  if (active) {
    const ce = builtin ? options.is : localName;
    if (registry.has(ce)) {
      const {Class} = registry.get(ce);
      const element = new Class(ownerDocument, localName);
      customElements.set(element, {connected: false});
      return element;
    }
  }
  return new HTMLElement(ownerDocument, localName);
};

/**
 * @implements globalThis.HTMLDocument
 */
class HTMLDocument extends Document$1 {
  constructor() { super('text/html'); }

  get all() {
    const nodeList = new NodeList;
    let {[NEXT]: next, [END]: end} = this;
    while (next !== end) {
      switch (next.nodeType) {
        case ELEMENT_NODE:
          nodeList.push(next);
          break;
      }
      next = next[NEXT];
    }
    return nodeList;
  }

  /**
   * @type HTMLHeadElement
   */
  get head() {
    const {documentElement} = this;
    let {firstElementChild} = documentElement;
    if (!firstElementChild || firstElementChild.tagName !== 'HEAD') {
      firstElementChild = this.createElement('head');
      documentElement.prepend(firstElementChild);
    }
    return firstElementChild;
  }

  /**
   * @type HTMLBodyElement
   */
  get body() {
    const {head} = this;
    let {nextElementSibling} = head;
    if (!nextElementSibling || nextElementSibling.tagName !== 'BODY') {
      nextElementSibling = this.createElement('body');
      head.after(nextElementSibling);
    }
    return nextElementSibling;
  }

  /**
   * @type HTMLTitleElement
   */
  get title() {
    const {head} = this;
    return head.getElementsByTagName('title').at(0)?.textContent || '';
  }

  set title(textContent) {
    const {head} = this;
    let title = head.getElementsByTagName('title').at(0);
    if (title)
      title.textContent = textContent;
    else {
      head.insertBefore(
        this.createElement('title'),
        head.firstChild
      ).textContent = textContent;
    }
  }

  createElement(localName, options) {
    const builtin = !!(options && options.is);
    const element = createHTMLElement(this, builtin, localName, options);
    if (builtin)
      element.setAttribute('is', options.is);
    return element;
  }
}

/**
 * @implements globalThis.Document
 */
class SVGDocument extends Document$1 {
  constructor() { super('image/svg+xml'); }
  toString() {
    return this[MIME].docType + super.toString();
  }
}

/**
 * @implements globalThis.XMLDocument
 */
class XMLDocument extends Document$1 {
  constructor() { super('text/xml'); }
  toString() {
    return this[MIME].docType + super.toString();
  }
}

/**
 * @implements globalThis.DOMParser
 */
class DOMParser {

  /** @typedef {{ "text/html": HTMLDocument, "image/svg+xml": SVGDocument, "text/xml": XMLDocument }} MimeToDoc */
  /**
   * @template {keyof MimeToDoc} MIME
   * @param {string} markupLanguage
   * @param {MIME} mimeType
   * @returns {MimeToDoc[MIME]}
   */
  parseFromString(markupLanguage, mimeType, globals = null) {
    let isHTML = false, document;
    if (mimeType === 'text/html') {
      isHTML = true;
      document = new HTMLDocument;
    }
    else if (mimeType === 'image/svg+xml')
      document = new SVGDocument;
    else
      document = new XMLDocument;
    document[DOM_PARSER] = DOMParser;
    if (globals)
      document[GLOBALS] = globals;
    if (isHTML && markupLanguage === '...')
      markupLanguage = '<!doctype html><html><head></head><body></body></html>';
    return markupLanguage ?
            parseFromString(document, isHTML, markupLanguage) :
            document;
  }
}

const parseHTML = (html, globals = null) => (new DOMParser).parseFromString(
  html, 'text/html', globals
).defaultView;

function Document() {
  illegalConstructor();
}

setPrototypeOf(Document, Document$1).prototype = Document$1.prototype;

// see: https://developer.mozilla.org/en-US/docs/Web/API/Document/parseHTMLUnsafe_static
Object.defineProperties(Document, {
    parseHTMLUnsafe: {
        value: parseHTML,
    },
});

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/set-cookie-parser/lib/set-cookie.js
var require_set_cookie = __commonJS({
  "node_modules/set-cookie-parser/lib/set-cookie.js"(exports, module) {
    var defaultParseOptions = {
      decodeValues: true,
      map: false,
      silent: false
    };
    function isNonEmptyString(str) {
      return typeof str === "string" && !!str.trim();
    }
    function parseString(setCookieValue, options) {
      var parts = setCookieValue.split(";").filter(isNonEmptyString);
      var nameValuePairStr = parts.shift();
      var parsed = parseNameValuePair(nameValuePairStr);
      var name = parsed.name;
      var value = parsed.value;
      options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
      try {
        value = options.decodeValues ? decodeURIComponent(value) : value;
      } catch (e) {
        console.error(
          "set-cookie-parser encountered an error while decoding a cookie with value '" + value + "'. Set options.decodeValues to false to disable this feature.",
          e
        );
      }
      var cookie = {
        name,
        value
      };
      parts.forEach(function(part) {
        var sides = part.split("=");
        var key = sides.shift().trimLeft().toLowerCase();
        var value2 = sides.join("=");
        if (key === "expires") {
          cookie.expires = new Date(value2);
        } else if (key === "max-age") {
          cookie.maxAge = parseInt(value2, 10);
        } else if (key === "secure") {
          cookie.secure = true;
        } else if (key === "httponly") {
          cookie.httpOnly = true;
        } else if (key === "samesite") {
          cookie.sameSite = value2;
        } else {
          cookie[key] = value2;
        }
      });
      return cookie;
    }
    function parseNameValuePair(nameValuePairStr) {
      var name = "";
      var value = "";
      var nameValueArr = nameValuePairStr.split("=");
      if (nameValueArr.length > 1) {
        name = nameValueArr.shift();
        value = nameValueArr.join("=");
      } else {
        value = nameValuePairStr;
      }
      return { name, value };
    }
    function parse(input, options) {
      options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
      if (!input) {
        if (!options.map) {
          return [];
        } else {
          return {};
        }
      }
      if (input.headers) {
        if (typeof input.headers.getSetCookie === "function") {
          input = input.headers.getSetCookie();
        } else if (input.headers["set-cookie"]) {
          input = input.headers["set-cookie"];
        } else {
          var sch = input.headers[Object.keys(input.headers).find(function(key) {
            return key.toLowerCase() === "set-cookie";
          })];
          if (!sch && input.headers.cookie && !options.silent) {
            console.warn(
              "Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."
            );
          }
          input = sch;
        }
      }
      if (!Array.isArray(input)) {
        input = [input];
      }
      options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
      if (!options.map) {
        return input.filter(isNonEmptyString).map(function(str) {
          return parseString(str, options);
        });
      } else {
        var cookies = {};
        return input.filter(isNonEmptyString).reduce(function(cookies2, str) {
          var cookie = parseString(str, options);
          cookies2[cookie.name] = cookie;
          return cookies2;
        }, cookies);
      }
    }
    function splitCookiesString2(cookiesString) {
      if (Array.isArray(cookiesString)) {
        return cookiesString;
      }
      if (typeof cookiesString !== "string") {
        return [];
      }
      var cookiesStrings = [];
      var pos = 0;
      var start;
      var ch;
      var lastComma;
      var nextStart;
      var cookiesSeparatorFound;
      function skipWhitespace() {
        while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
          pos += 1;
        }
        return pos < cookiesString.length;
      }
      function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
      }
      while (pos < cookiesString.length) {
        start = pos;
        cookiesSeparatorFound = false;
        while (skipWhitespace()) {
          ch = cookiesString.charAt(pos);
          if (ch === ",") {
            lastComma = pos;
            pos += 1;
            skipWhitespace();
            nextStart = pos;
            while (pos < cookiesString.length && notSpecialChar()) {
              pos += 1;
            }
            if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
              cookiesSeparatorFound = true;
              pos = nextStart;
              cookiesStrings.push(cookiesString.substring(start, lastComma));
              start = pos;
            } else {
              pos = lastComma + 1;
            }
          } else {
            pos += 1;
          }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
          cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
      }
      return cookiesStrings;
    }
    module.exports = parse;
    module.exports.parse = parse;
    module.exports.parseString = parseString;
    module.exports.splitCookiesString = splitCookiesString2;
  }
});

// src/Headers.ts
var import_set_cookie_parser = __toESM(require_set_cookie());

// src/utils/normalizeHeaderName.ts
var HEADERS_INVALID_CHARACTERS = /[^a-z0-9\-#$%&'*+.^_`|~]/i;
function normalizeHeaderName(name) {
  if (HEADERS_INVALID_CHARACTERS.test(name) || name.trim() === "") {
    throw new TypeError("Invalid character in header field name");
  }
  return name.trim().toLowerCase();
}

// src/utils/normalizeHeaderValue.ts
var charCodesToRemove = [
  String.fromCharCode(10),
  String.fromCharCode(13),
  String.fromCharCode(9),
  String.fromCharCode(32)
];
var HEADER_VALUE_REMOVE_REGEXP = new RegExp(
  `(^[${charCodesToRemove.join("")}]|$[${charCodesToRemove.join("")}])`,
  "g"
);
function normalizeHeaderValue(value) {
  const nextValue = value.replace(HEADER_VALUE_REMOVE_REGEXP, "");
  return nextValue;
}

// src/utils/isValidHeaderName.ts
function isValidHeaderName(value) {
  if (typeof value !== "string") {
    return false;
  }
  if (value.length === 0) {
    return false;
  }
  for (let i = 0; i < value.length; i++) {
    const character = value.charCodeAt(i);
    if (character > 127 || !isToken(character)) {
      return false;
    }
  }
  return true;
}
function isToken(value) {
  return ![
    127,
    32,
    "(",
    ")",
    "<",
    ">",
    "@",
    ",",
    ";",
    ":",
    "\\",
    '"',
    "/",
    "[",
    "]",
    "?",
    "=",
    "{",
    "}"
  ].includes(value);
}

// src/utils/isValidHeaderValue.ts
function isValidHeaderValue(value) {
  if (typeof value !== "string") {
    return false;
  }
  if (value.trim() !== value) {
    return false;
  }
  for (let i = 0; i < value.length; i++) {
    const character = value.charCodeAt(i);
    if (
      // NUL.
      character === 0 || // HTTP newline bytes.
      character === 10 || character === 13
    ) {
      return false;
    }
  }
  return true;
}

// src/Headers.ts
var NORMALIZED_HEADERS = Symbol("normalizedHeaders");
var RAW_HEADER_NAMES = Symbol("rawHeaderNames");
var HEADER_VALUE_DELIMITER = ", ";
var _a, _b, _c;
var Headers = class _Headers {
  constructor(init) {
    // Normalized header {"name":"a, b"} storage.
    this[_a] = {};
    // Keeps the mapping between the raw header name
    // and the normalized header name to ease the lookup.
    this[_b] = /* @__PURE__ */ new Map();
    this[_c] = "Headers";
    if (["Headers", "HeadersPolyfill"].includes(init?.constructor.name) || init instanceof _Headers || typeof globalThis.Headers !== "undefined" && init instanceof globalThis.Headers) {
      const initialHeaders = init;
      initialHeaders.forEach((value, name) => {
        this.append(name, value);
      }, this);
    } else if (Array.isArray(init)) {
      init.forEach(([name, value]) => {
        this.append(
          name,
          Array.isArray(value) ? value.join(HEADER_VALUE_DELIMITER) : value
        );
      });
    } else if (init) {
      Object.getOwnPropertyNames(init).forEach((name) => {
        const value = init[name];
        this.append(
          name,
          Array.isArray(value) ? value.join(HEADER_VALUE_DELIMITER) : value
        );
      });
    }
  }
  [(_a = NORMALIZED_HEADERS, _b = RAW_HEADER_NAMES, _c = Symbol.toStringTag, Symbol.iterator)]() {
    return this.entries();
  }
  *keys() {
    for (const [name] of this.entries()) {
      yield name;
    }
  }
  *values() {
    for (const [, value] of this.entries()) {
      yield value;
    }
  }
  *entries() {
    let sortedKeys = Object.keys(this[NORMALIZED_HEADERS]).sort(
      (a, b) => a.localeCompare(b)
    );
    for (const name of sortedKeys) {
      if (name === "set-cookie") {
        for (const value of this.getSetCookie()) {
          yield [name, value];
        }
      } else {
        yield [name, this.get(name)];
      }
    }
  }
  /**
   * Returns a boolean stating whether a `Headers` object contains a certain header.
   */
  has(name) {
    if (!isValidHeaderName(name)) {
      throw new TypeError(`Invalid header name "${name}"`);
    }
    return this[NORMALIZED_HEADERS].hasOwnProperty(normalizeHeaderName(name));
  }
  /**
   * Returns a `ByteString` sequence of all the values of a header with a given name.
   */
  get(name) {
    if (!isValidHeaderName(name)) {
      throw TypeError(`Invalid header name "${name}"`);
    }
    return this[NORMALIZED_HEADERS][normalizeHeaderName(name)] ?? null;
  }
  /**
   * Sets a new value for an existing header inside a `Headers` object, or adds the header if it does not already exist.
   */
  set(name, value) {
    if (!isValidHeaderName(name) || !isValidHeaderValue(value)) {
      return;
    }
    const normalizedName = normalizeHeaderName(name);
    const normalizedValue = normalizeHeaderValue(value);
    this[NORMALIZED_HEADERS][normalizedName] = normalizeHeaderValue(normalizedValue);
    this[RAW_HEADER_NAMES].set(normalizedName, name);
  }
  /**
   * Appends a new value onto an existing header inside a `Headers` object, or adds the header if it does not already exist.
   */
  append(name, value) {
    if (!isValidHeaderName(name) || !isValidHeaderValue(value)) {
      return;
    }
    const normalizedName = normalizeHeaderName(name);
    const normalizedValue = normalizeHeaderValue(value);
    let resolvedValue = this.has(normalizedName) ? `${this.get(normalizedName)}, ${normalizedValue}` : normalizedValue;
    this.set(name, resolvedValue);
  }
  /**
   * Deletes a header from the `Headers` object.
   */
  delete(name) {
    if (!isValidHeaderName(name)) {
      return;
    }
    if (!this.has(name)) {
      return;
    }
    const normalizedName = normalizeHeaderName(name);
    delete this[NORMALIZED_HEADERS][normalizedName];
    this[RAW_HEADER_NAMES].delete(normalizedName);
  }
  /**
   * Traverses the `Headers` object,
   * calling the given callback for each header.
   */
  forEach(callback, thisArg) {
    for (const [name, value] of this.entries()) {
      callback.call(thisArg, value, name, this);
    }
  }
  /**
   * Returns an array containing the values
   * of all Set-Cookie headers associated
   * with a response
   */
  getSetCookie() {
    const setCookieHeader = this.get("set-cookie");
    if (setCookieHeader === null) {
      return [];
    }
    if (setCookieHeader === "") {
      return [""];
    }
    return (0, import_set_cookie_parser.splitCookiesString)(setCookieHeader);
  }
};

var whatwgUrl = {};

var webidl2jsWrapper = {};

var URL = {};

var lib = {};

var hasRequiredLib;

function requireLib () {
	if (hasRequiredLib) return lib;
	hasRequiredLib = 1;
	(function (exports) {

		function makeException(ErrorType, message, options) {
		  if (options.globals) {
		    ErrorType = options.globals[ErrorType.name];
		  }
		  return new ErrorType(`${options.context ? options.context : "Value"} ${message}.`);
		}

		function toNumber(value, options) {
		  if (typeof value === "bigint") {
		    throw makeException(TypeError, "is a BigInt which cannot be converted to a number", options);
		  }
		  if (!options.globals) {
		    return Number(value);
		  }
		  return options.globals.Number(value);
		}

		// Round x to the nearest integer, choosing the even integer if it lies halfway between two.
		function evenRound(x) {
		  // There are four cases for numbers with fractional part being .5:
		  //
		  // case |     x     | floor(x) | round(x) | expected | x <> 0 | x % 1 | x & 1 |   example
		  //   1  |  2n + 0.5 |  2n      |  2n + 1  |  2n      |   >    |  0.5  |   0   |  0.5 ->  0
		  //   2  |  2n + 1.5 |  2n + 1  |  2n + 2  |  2n + 2  |   >    |  0.5  |   1   |  1.5 ->  2
		  //   3  | -2n - 0.5 | -2n - 1  | -2n      | -2n      |   <    | -0.5  |   0   | -0.5 ->  0
		  //   4  | -2n - 1.5 | -2n - 2  | -2n - 1  | -2n - 2  |   <    | -0.5  |   1   | -1.5 -> -2
		  // (where n is a non-negative integer)
		  //
		  // Branch here for cases 1 and 4
		  if ((x > 0 && (x % 1) === +0.5 && (x & 1) === 0) ||
		        (x < 0 && (x % 1) === -0.5 && (x & 1) === 1)) {
		    return censorNegativeZero(Math.floor(x));
		  }

		  return censorNegativeZero(Math.round(x));
		}

		function integerPart(n) {
		  return censorNegativeZero(Math.trunc(n));
		}

		function sign(x) {
		  return x < 0 ? -1 : 1;
		}

		function modulo(x, y) {
		  // https://tc39.github.io/ecma262/#eqn-modulo
		  // Note that http://stackoverflow.com/a/4467559/3191 does NOT work for large modulos
		  const signMightNotMatch = x % y;
		  if (sign(y) !== sign(signMightNotMatch)) {
		    return signMightNotMatch + y;
		  }
		  return signMightNotMatch;
		}

		function censorNegativeZero(x) {
		  return x === 0 ? 0 : x;
		}

		function createIntegerConversion(bitLength, { unsigned }) {
		  let lowerBound, upperBound;
		  if (unsigned) {
		    lowerBound = 0;
		    upperBound = 2 ** bitLength - 1;
		  } else {
		    lowerBound = -(2 ** (bitLength - 1));
		    upperBound = 2 ** (bitLength - 1) - 1;
		  }

		  const twoToTheBitLength = 2 ** bitLength;
		  const twoToOneLessThanTheBitLength = 2 ** (bitLength - 1);

		  return (value, options = {}) => {
		    let x = toNumber(value, options);
		    x = censorNegativeZero(x);

		    if (options.enforceRange) {
		      if (!Number.isFinite(x)) {
		        throw makeException(TypeError, "is not a finite number", options);
		      }

		      x = integerPart(x);

		      if (x < lowerBound || x > upperBound) {
		        throw makeException(
		          TypeError,
		          `is outside the accepted range of ${lowerBound} to ${upperBound}, inclusive`,
		          options
		        );
		      }

		      return x;
		    }

		    if (!Number.isNaN(x) && options.clamp) {
		      x = Math.min(Math.max(x, lowerBound), upperBound);
		      x = evenRound(x);
		      return x;
		    }

		    if (!Number.isFinite(x) || x === 0) {
		      return 0;
		    }
		    x = integerPart(x);

		    // Math.pow(2, 64) is not accurately representable in JavaScript, so try to avoid these per-spec operations if
		    // possible. Hopefully it's an optimization for the non-64-bitLength cases too.
		    if (x >= lowerBound && x <= upperBound) {
		      return x;
		    }

		    // These will not work great for bitLength of 64, but oh well. See the README for more details.
		    x = modulo(x, twoToTheBitLength);
		    if (!unsigned && x >= twoToOneLessThanTheBitLength) {
		      return x - twoToTheBitLength;
		    }
		    return x;
		  };
		}

		function createLongLongConversion(bitLength, { unsigned }) {
		  const upperBound = Number.MAX_SAFE_INTEGER;
		  const lowerBound = unsigned ? 0 : Number.MIN_SAFE_INTEGER;
		  const asBigIntN = unsigned ? BigInt.asUintN : BigInt.asIntN;

		  return (value, options = {}) => {
		    let x = toNumber(value, options);
		    x = censorNegativeZero(x);

		    if (options.enforceRange) {
		      if (!Number.isFinite(x)) {
		        throw makeException(TypeError, "is not a finite number", options);
		      }

		      x = integerPart(x);

		      if (x < lowerBound || x > upperBound) {
		        throw makeException(
		          TypeError,
		          `is outside the accepted range of ${lowerBound} to ${upperBound}, inclusive`,
		          options
		        );
		      }

		      return x;
		    }

		    if (!Number.isNaN(x) && options.clamp) {
		      x = Math.min(Math.max(x, lowerBound), upperBound);
		      x = evenRound(x);
		      return x;
		    }

		    if (!Number.isFinite(x) || x === 0) {
		      return 0;
		    }

		    let xBigInt = BigInt(integerPart(x));
		    xBigInt = asBigIntN(bitLength, xBigInt);
		    return Number(xBigInt);
		  };
		}

		exports.any = value => {
		  return value;
		};

		exports.undefined = () => {
		  return undefined;
		};

		exports.boolean = value => {
		  return Boolean(value);
		};

		exports.byte = createIntegerConversion(8, { unsigned: false });
		exports.octet = createIntegerConversion(8, { unsigned: true });

		exports.short = createIntegerConversion(16, { unsigned: false });
		exports["unsigned short"] = createIntegerConversion(16, { unsigned: true });

		exports.long = createIntegerConversion(32, { unsigned: false });
		exports["unsigned long"] = createIntegerConversion(32, { unsigned: true });

		exports["long long"] = createLongLongConversion(64, { unsigned: false });
		exports["unsigned long long"] = createLongLongConversion(64, { unsigned: true });

		exports.double = (value, options = {}) => {
		  const x = toNumber(value, options);

		  if (!Number.isFinite(x)) {
		    throw makeException(TypeError, "is not a finite floating-point value", options);
		  }

		  return x;
		};

		exports["unrestricted double"] = (value, options = {}) => {
		  const x = toNumber(value, options);

		  return x;
		};

		exports.float = (value, options = {}) => {
		  const x = toNumber(value, options);

		  if (!Number.isFinite(x)) {
		    throw makeException(TypeError, "is not a finite floating-point value", options);
		  }

		  if (Object.is(x, -0)) {
		    return x;
		  }

		  const y = Math.fround(x);

		  if (!Number.isFinite(y)) {
		    throw makeException(TypeError, "is outside the range of a single-precision floating-point value", options);
		  }

		  return y;
		};

		exports["unrestricted float"] = (value, options = {}) => {
		  const x = toNumber(value, options);

		  if (isNaN(x)) {
		    return x;
		  }

		  if (Object.is(x, -0)) {
		    return x;
		  }

		  return Math.fround(x);
		};

		exports.DOMString = (value, options = {}) => {
		  if (options.treatNullAsEmptyString && value === null) {
		    return "";
		  }

		  if (typeof value === "symbol") {
		    throw makeException(TypeError, "is a symbol, which cannot be converted to a string", options);
		  }

		  const StringCtor = options.globals ? options.globals.String : String;
		  return StringCtor(value);
		};

		exports.ByteString = (value, options = {}) => {
		  const x = exports.DOMString(value, options);
		  let c;
		  for (let i = 0; (c = x.codePointAt(i)) !== undefined; ++i) {
		    if (c > 255) {
		      throw makeException(TypeError, "is not a valid ByteString", options);
		    }
		  }

		  return x;
		};

		exports.USVString = (value, options = {}) => {
		  const S = exports.DOMString(value, options);
		  const n = S.length;
		  const U = [];
		  for (let i = 0; i < n; ++i) {
		    const c = S.charCodeAt(i);
		    if (c < 0xD800 || c > 0xDFFF) {
		      U.push(String.fromCodePoint(c));
		    } else if (0xDC00 <= c && c <= 0xDFFF) {
		      U.push(String.fromCodePoint(0xFFFD));
		    } else if (i === n - 1) {
		      U.push(String.fromCodePoint(0xFFFD));
		    } else {
		      const d = S.charCodeAt(i + 1);
		      if (0xDC00 <= d && d <= 0xDFFF) {
		        const a = c & 0x3FF;
		        const b = d & 0x3FF;
		        U.push(String.fromCodePoint((2 << 15) + ((2 << 9) * a) + b));
		        ++i;
		      } else {
		        U.push(String.fromCodePoint(0xFFFD));
		      }
		    }
		  }

		  return U.join("");
		};

		exports.object = (value, options = {}) => {
		  if (value === null || (typeof value !== "object" && typeof value !== "function")) {
		    throw makeException(TypeError, "is not an object", options);
		  }

		  return value;
		};

		const abByteLengthGetter =
		    Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, "byteLength").get;
		const sabByteLengthGetter =
		    typeof SharedArrayBuffer === "function" ?
		      Object.getOwnPropertyDescriptor(SharedArrayBuffer.prototype, "byteLength").get :
		      null;

		function isNonSharedArrayBuffer(value) {
		  try {
		    // This will throw on SharedArrayBuffers, but not detached ArrayBuffers.
		    // (The spec says it should throw, but the spec conflicts with implementations: https://github.com/tc39/ecma262/issues/678)
		    abByteLengthGetter.call(value);

		    return true;
		  } catch {
		    return false;
		  }
		}

		function isSharedArrayBuffer(value) {
		  try {
		    sabByteLengthGetter.call(value);
		    return true;
		  } catch {
		    return false;
		  }
		}

		function isArrayBufferDetached(value) {
		  try {
		    // eslint-disable-next-line no-new
		    new Uint8Array(value);
		    return false;
		  } catch {
		    return true;
		  }
		}

		exports.ArrayBuffer = (value, options = {}) => {
		  if (!isNonSharedArrayBuffer(value)) {
		    if (options.allowShared && !isSharedArrayBuffer(value)) {
		      throw makeException(TypeError, "is not an ArrayBuffer or SharedArrayBuffer", options);
		    }
		    throw makeException(TypeError, "is not an ArrayBuffer", options);
		  }
		  if (isArrayBufferDetached(value)) {
		    throw makeException(TypeError, "is a detached ArrayBuffer", options);
		  }

		  return value;
		};

		const dvByteLengthGetter =
		    Object.getOwnPropertyDescriptor(DataView.prototype, "byteLength").get;
		exports.DataView = (value, options = {}) => {
		  try {
		    dvByteLengthGetter.call(value);
		  } catch (e) {
		    throw makeException(TypeError, "is not a DataView", options);
		  }

		  if (!options.allowShared && isSharedArrayBuffer(value.buffer)) {
		    throw makeException(TypeError, "is backed by a SharedArrayBuffer, which is not allowed", options);
		  }
		  if (isArrayBufferDetached(value.buffer)) {
		    throw makeException(TypeError, "is backed by a detached ArrayBuffer", options);
		  }

		  return value;
		};

		// Returns the unforgeable `TypedArray` constructor name or `undefined`,
		// if the `this` value isn't a valid `TypedArray` object.
		//
		// https://tc39.es/ecma262/#sec-get-%typedarray%.prototype-@@tostringtag
		const typedArrayNameGetter = Object.getOwnPropertyDescriptor(
		  Object.getPrototypeOf(Uint8Array).prototype,
		  Symbol.toStringTag
		).get;
		[
		  Int8Array,
		  Int16Array,
		  Int32Array,
		  Uint8Array,
		  Uint16Array,
		  Uint32Array,
		  Uint8ClampedArray,
		  Float32Array,
		  Float64Array
		].forEach(func => {
		  const { name } = func;
		  const article = /^[AEIOU]/u.test(name) ? "an" : "a";
		  exports[name] = (value, options = {}) => {
		    if (!ArrayBuffer.isView(value) || typedArrayNameGetter.call(value) !== name) {
		      throw makeException(TypeError, `is not ${article} ${name} object`, options);
		    }
		    if (!options.allowShared && isSharedArrayBuffer(value.buffer)) {
		      throw makeException(TypeError, "is a view on a SharedArrayBuffer, which is not allowed", options);
		    }
		    if (isArrayBufferDetached(value.buffer)) {
		      throw makeException(TypeError, "is a view on a detached ArrayBuffer", options);
		    }

		    return value;
		  };
		});

		// Common definitions

		exports.ArrayBufferView = (value, options = {}) => {
		  if (!ArrayBuffer.isView(value)) {
		    throw makeException(TypeError, "is not a view on an ArrayBuffer or SharedArrayBuffer", options);
		  }

		  if (!options.allowShared && isSharedArrayBuffer(value.buffer)) {
		    throw makeException(TypeError, "is a view on a SharedArrayBuffer, which is not allowed", options);
		  }

		  if (isArrayBufferDetached(value.buffer)) {
		    throw makeException(TypeError, "is a view on a detached ArrayBuffer", options);
		  }
		  return value;
		};

		exports.BufferSource = (value, options = {}) => {
		  if (ArrayBuffer.isView(value)) {
		    if (!options.allowShared && isSharedArrayBuffer(value.buffer)) {
		      throw makeException(TypeError, "is a view on a SharedArrayBuffer, which is not allowed", options);
		    }

		    if (isArrayBufferDetached(value.buffer)) {
		      throw makeException(TypeError, "is a view on a detached ArrayBuffer", options);
		    }
		    return value;
		  }

		  if (!options.allowShared && !isNonSharedArrayBuffer(value)) {
		    throw makeException(TypeError, "is not an ArrayBuffer or a view on one", options);
		  }
		  if (options.allowShared && !isSharedArrayBuffer(value) && !isNonSharedArrayBuffer(value)) {
		    throw makeException(TypeError, "is not an ArrayBuffer, SharedArrayBuffer, or a view on one", options);
		  }
		  if (isArrayBufferDetached(value)) {
		    throw makeException(TypeError, "is a detached ArrayBuffer", options);
		  }

		  return value;
		};

		exports.DOMTimeStamp = exports["unsigned long long"]; 
	} (lib));
	return lib;
}

var utils = {exports: {}};

var hasRequiredUtils;

function requireUtils () {
	if (hasRequiredUtils) return utils.exports;
	hasRequiredUtils = 1;
	(function (module, exports) {

		// Returns "Type(value) is Object" in ES terminology.
		function isObject(value) {
		  return (typeof value === "object" && value !== null) || typeof value === "function";
		}

		const hasOwn = Function.prototype.call.bind(Object.prototype.hasOwnProperty);

		// Like `Object.assign`, but using `[[GetOwnProperty]]` and `[[DefineOwnProperty]]`
		// instead of `[[Get]]` and `[[Set]]` and only allowing objects
		function define(target, source) {
		  for (const key of Reflect.ownKeys(source)) {
		    const descriptor = Reflect.getOwnPropertyDescriptor(source, key);
		    if (descriptor && !Reflect.defineProperty(target, key, descriptor)) {
		      throw new TypeError(`Cannot redefine property: ${String(key)}`);
		    }
		  }
		}

		function newObjectInRealm(globalObject, object) {
		  const ctorRegistry = initCtorRegistry(globalObject);
		  return Object.defineProperties(
		    Object.create(ctorRegistry["%Object.prototype%"]),
		    Object.getOwnPropertyDescriptors(object)
		  );
		}

		const wrapperSymbol = Symbol("wrapper");
		const implSymbol = Symbol("impl");
		const sameObjectCaches = Symbol("SameObject caches");
		const ctorRegistrySymbol = Symbol.for("[webidl2js] constructor registry");

		const AsyncIteratorPrototype = Object.getPrototypeOf(Object.getPrototypeOf(async function* () {}).prototype);

		function initCtorRegistry(globalObject) {
		  if (hasOwn(globalObject, ctorRegistrySymbol)) {
		    return globalObject[ctorRegistrySymbol];
		  }

		  const ctorRegistry = Object.create(null);

		  // In addition to registering all the WebIDL2JS-generated types in the constructor registry,
		  // we also register a few intrinsics that we make use of in generated code, since they are not
		  // easy to grab from the globalObject variable.
		  ctorRegistry["%Object.prototype%"] = globalObject.Object.prototype;
		  ctorRegistry["%IteratorPrototype%"] = Object.getPrototypeOf(
		    Object.getPrototypeOf(new globalObject.Array()[Symbol.iterator]())
		  );

		  try {
		    ctorRegistry["%AsyncIteratorPrototype%"] = Object.getPrototypeOf(
		      Object.getPrototypeOf(
		        globalObject.eval("(async function* () {})").prototype
		      )
		    );
		  } catch {
		    ctorRegistry["%AsyncIteratorPrototype%"] = AsyncIteratorPrototype;
		  }

		  globalObject[ctorRegistrySymbol] = ctorRegistry;
		  return ctorRegistry;
		}

		function getSameObject(wrapper, prop, creator) {
		  if (!wrapper[sameObjectCaches]) {
		    wrapper[sameObjectCaches] = Object.create(null);
		  }

		  if (prop in wrapper[sameObjectCaches]) {
		    return wrapper[sameObjectCaches][prop];
		  }

		  wrapper[sameObjectCaches][prop] = creator();
		  return wrapper[sameObjectCaches][prop];
		}

		function wrapperForImpl(impl) {
		  return impl ? impl[wrapperSymbol] : null;
		}

		function implForWrapper(wrapper) {
		  return wrapper ? wrapper[implSymbol] : null;
		}

		function tryWrapperForImpl(impl) {
		  const wrapper = wrapperForImpl(impl);
		  return wrapper ? wrapper : impl;
		}

		function tryImplForWrapper(wrapper) {
		  const impl = implForWrapper(wrapper);
		  return impl ? impl : wrapper;
		}

		const iterInternalSymbol = Symbol("internal");

		function isArrayIndexPropName(P) {
		  if (typeof P !== "string") {
		    return false;
		  }
		  const i = P >>> 0;
		  if (i === 2 ** 32 - 1) {
		    return false;
		  }
		  const s = `${i}`;
		  if (P !== s) {
		    return false;
		  }
		  return true;
		}

		const byteLengthGetter =
		    Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, "byteLength").get;
		function isArrayBuffer(value) {
		  try {
		    byteLengthGetter.call(value);
		    return true;
		  } catch (e) {
		    return false;
		  }
		}

		function iteratorResult([key, value], kind) {
		  let result;
		  switch (kind) {
		    case "key":
		      result = key;
		      break;
		    case "value":
		      result = value;
		      break;
		    case "key+value":
		      result = [key, value];
		      break;
		  }
		  return { value: result, done: false };
		}

		const supportsPropertyIndex = Symbol("supports property index");
		const supportedPropertyIndices = Symbol("supported property indices");
		const supportsPropertyName = Symbol("supports property name");
		const supportedPropertyNames = Symbol("supported property names");
		const indexedGet = Symbol("indexed property get");
		const indexedSetNew = Symbol("indexed property set new");
		const indexedSetExisting = Symbol("indexed property set existing");
		const namedGet = Symbol("named property get");
		const namedSetNew = Symbol("named property set new");
		const namedSetExisting = Symbol("named property set existing");
		const namedDelete = Symbol("named property delete");

		const asyncIteratorNext = Symbol("async iterator get the next iteration result");
		const asyncIteratorReturn = Symbol("async iterator return steps");
		const asyncIteratorInit = Symbol("async iterator initialization steps");
		const asyncIteratorEOI = Symbol("async iterator end of iteration");

		module.exports = {
		  isObject,
		  hasOwn,
		  define,
		  newObjectInRealm,
		  wrapperSymbol,
		  implSymbol,
		  getSameObject,
		  ctorRegistrySymbol,
		  initCtorRegistry,
		  wrapperForImpl,
		  implForWrapper,
		  tryWrapperForImpl,
		  tryImplForWrapper,
		  iterInternalSymbol,
		  isArrayBuffer,
		  isArrayIndexPropName,
		  supportsPropertyIndex,
		  supportedPropertyIndices,
		  supportsPropertyName,
		  supportedPropertyNames,
		  indexedGet,
		  indexedSetNew,
		  indexedSetExisting,
		  namedGet,
		  namedSetNew,
		  namedSetExisting,
		  namedDelete,
		  asyncIteratorNext,
		  asyncIteratorReturn,
		  asyncIteratorInit,
		  asyncIteratorEOI,
		  iteratorResult
		}; 
	} (utils));
	return utils.exports;
}

var URLImpl = {};

var urlStateMachine = {exports: {}};

/** Highest positive signed 32-bit float value */
const maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1

/** Bootstring parameters */
const base = 36;
const tMin = 1;
const tMax = 26;
const skew = 38;
const damp = 700;
const initialBias = 72;
const initialN = 128; // 0x80
const delimiter = '-'; // '\x2D'

/** Regular expressions */
const regexPunycode = /^xn--/;
const regexNonASCII = /[^\0-\x7F]/; // Note: U+007F DEL is excluded too.
const regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g; // RFC 3490 separators

/** Error messages */
const errors = {
	'overflow': 'Overflow: input needs wider integers to process',
	'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
	'invalid-input': 'Invalid input'
};

/** Convenience shortcuts */
const baseMinusTMin = base - tMin;
const floor = Math.floor;
const stringFromCharCode = String.fromCharCode;

/*--------------------------------------------------------------------------*/

/**
 * A generic error utility function.
 * @private
 * @param {String} type The error type.
 * @returns {Error} Throws a `RangeError` with the applicable error message.
 */
function error(type) {
	throw new RangeError(errors[type]);
}

/**
 * A generic `Array#map` utility function.
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} callback The function that gets called for every array
 * item.
 * @returns {Array} A new array of values returned by the callback function.
 */
function map(array, callback) {
	const result = [];
	let length = array.length;
	while (length--) {
		result[length] = callback(array[length]);
	}
	return result;
}

/**
 * A simple `Array#map`-like wrapper to work with domain name strings or email
 * addresses.
 * @private
 * @param {String} domain The domain name or email address.
 * @param {Function} callback The function that gets called for every
 * character.
 * @returns {String} A new string of characters returned by the callback
 * function.
 */
function mapDomain(domain, callback) {
	const parts = domain.split('@');
	let result = '';
	if (parts.length > 1) {
		// In email addresses, only the domain name should be punycoded. Leave
		// the local part (i.e. everything up to `@`) intact.
		result = parts[0] + '@';
		domain = parts[1];
	}
	// Avoid `split(regex)` for IE8 compatibility. See #17.
	domain = domain.replace(regexSeparators, '\x2E');
	const labels = domain.split('.');
	const encoded = map(labels, callback).join('.');
	return result + encoded;
}

/**
 * Creates an array containing the numeric code points of each Unicode
 * character in the string. While JavaScript uses UCS-2 internally,
 * this function will convert a pair of surrogate halves (each of which
 * UCS-2 exposes as separate characters) into a single code point,
 * matching UTF-16.
 * @see `punycode.ucs2.encode`
 * @see <https://mathiasbynens.be/notes/javascript-encoding>
 * @memberOf punycode.ucs2
 * @name decode
 * @param {String} string The Unicode input string (UCS-2).
 * @returns {Array} The new array of code points.
 */
function ucs2decode(string) {
	const output = [];
	let counter = 0;
	const length = string.length;
	while (counter < length) {
		const value = string.charCodeAt(counter++);
		if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
			// It's a high surrogate, and there is a next character.
			const extra = string.charCodeAt(counter++);
			if ((extra & 0xFC00) == 0xDC00) { // Low surrogate.
				output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
			} else {
				// It's an unmatched surrogate; only append this code unit, in case the
				// next code unit is the high surrogate of a surrogate pair.
				output.push(value);
				counter--;
			}
		} else {
			output.push(value);
		}
	}
	return output;
}

/**
 * Creates a string based on an array of numeric code points.
 * @see `punycode.ucs2.decode`
 * @memberOf punycode.ucs2
 * @name encode
 * @param {Array} codePoints The array of numeric code points.
 * @returns {String} The new Unicode string (UCS-2).
 */
const ucs2encode = codePoints => String.fromCodePoint(...codePoints);

/**
 * Converts a basic code point into a digit/integer.
 * @see `digitToBasic()`
 * @private
 * @param {Number} codePoint The basic numeric code point value.
 * @returns {Number} The numeric value of a basic code point (for use in
 * representing integers) in the range `0` to `base - 1`, or `base` if
 * the code point does not represent a value.
 */
const basicToDigit = function(codePoint) {
	if (codePoint >= 0x30 && codePoint < 0x3A) {
		return 26 + (codePoint - 0x30);
	}
	if (codePoint >= 0x41 && codePoint < 0x5B) {
		return codePoint - 0x41;
	}
	if (codePoint >= 0x61 && codePoint < 0x7B) {
		return codePoint - 0x61;
	}
	return base;
};

/**
 * Converts a digit/integer into a basic code point.
 * @see `basicToDigit()`
 * @private
 * @param {Number} digit The numeric value of a basic code point.
 * @returns {Number} The basic code point whose value (when used for
 * representing integers) is `digit`, which needs to be in the range
 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
 * used; else, the lowercase form is used. The behavior is undefined
 * if `flag` is non-zero and `digit` has no uppercase form.
 */
const digitToBasic = function(digit, flag) {
	//  0..25 map to ASCII a..z or A..Z
	// 26..35 map to ASCII 0..9
	return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
};

/**
 * Bias adaptation function as per section 3.4 of RFC 3492.
 * https://tools.ietf.org/html/rfc3492#section-3.4
 * @private
 */
const adapt = function(delta, numPoints, firstTime) {
	let k = 0;
	delta = firstTime ? floor(delta / damp) : delta >> 1;
	delta += floor(delta / numPoints);
	for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
		delta = floor(delta / baseMinusTMin);
	}
	return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
};

/**
 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
 * symbols.
 * @memberOf punycode
 * @param {String} input The Punycode string of ASCII-only symbols.
 * @returns {String} The resulting string of Unicode symbols.
 */
const decode = function(input) {
	// Don't use UCS-2.
	const output = [];
	const inputLength = input.length;
	let i = 0;
	let n = initialN;
	let bias = initialBias;

	// Handle the basic code points: let `basic` be the number of input code
	// points before the last delimiter, or `0` if there is none, then copy
	// the first basic code points to the output.

	let basic = input.lastIndexOf(delimiter);
	if (basic < 0) {
		basic = 0;
	}

	for (let j = 0; j < basic; ++j) {
		// if it's not a basic code point
		if (input.charCodeAt(j) >= 0x80) {
			error('not-basic');
		}
		output.push(input.charCodeAt(j));
	}

	// Main decoding loop: start just after the last delimiter if any basic code
	// points were copied; start at the beginning otherwise.

	for (let index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

		// `index` is the index of the next character to be consumed.
		// Decode a generalized variable-length integer into `delta`,
		// which gets added to `i`. The overflow checking is easier
		// if we increase `i` as we go, then subtract off its starting
		// value at the end to obtain `delta`.
		const oldi = i;
		for (let w = 1, k = base; /* no condition */; k += base) {

			if (index >= inputLength) {
				error('invalid-input');
			}

			const digit = basicToDigit(input.charCodeAt(index++));

			if (digit >= base) {
				error('invalid-input');
			}
			if (digit > floor((maxInt - i) / w)) {
				error('overflow');
			}

			i += digit * w;
			const t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

			if (digit < t) {
				break;
			}

			const baseMinusT = base - t;
			if (w > floor(maxInt / baseMinusT)) {
				error('overflow');
			}

			w *= baseMinusT;

		}

		const out = output.length + 1;
		bias = adapt(i - oldi, out, oldi == 0);

		// `i` was supposed to wrap around from `out` to `0`,
		// incrementing `n` each time, so we'll fix that now:
		if (floor(i / out) > maxInt - n) {
			error('overflow');
		}

		n += floor(i / out);
		i %= out;

		// Insert `n` at position `i` of the output.
		output.splice(i++, 0, n);

	}

	return String.fromCodePoint(...output);
};

/**
 * Converts a string of Unicode symbols (e.g. a domain name label) to a
 * Punycode string of ASCII-only symbols.
 * @memberOf punycode
 * @param {String} input The string of Unicode symbols.
 * @returns {String} The resulting Punycode string of ASCII-only symbols.
 */
const encode = function(input) {
	const output = [];

	// Convert the input in UCS-2 to an array of Unicode code points.
	input = ucs2decode(input);

	// Cache the length.
	const inputLength = input.length;

	// Initialize the state.
	let n = initialN;
	let delta = 0;
	let bias = initialBias;

	// Handle the basic code points.
	for (const currentValue of input) {
		if (currentValue < 0x80) {
			output.push(stringFromCharCode(currentValue));
		}
	}

	const basicLength = output.length;
	let handledCPCount = basicLength;

	// `handledCPCount` is the number of code points that have been handled;
	// `basicLength` is the number of basic code points.

	// Finish the basic string with a delimiter unless it's empty.
	if (basicLength) {
		output.push(delimiter);
	}

	// Main encoding loop:
	while (handledCPCount < inputLength) {

		// All non-basic code points < n have been handled already. Find the next
		// larger one:
		let m = maxInt;
		for (const currentValue of input) {
			if (currentValue >= n && currentValue < m) {
				m = currentValue;
			}
		}

		// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
		// but guard against overflow.
		const handledCPCountPlusOne = handledCPCount + 1;
		if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
			error('overflow');
		}

		delta += (m - n) * handledCPCountPlusOne;
		n = m;

		for (const currentValue of input) {
			if (currentValue < n && ++delta > maxInt) {
				error('overflow');
			}
			if (currentValue === n) {
				// Represent delta as a generalized variable-length integer.
				let q = delta;
				for (let k = base; /* no condition */; k += base) {
					const t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
					if (q < t) {
						break;
					}
					const qMinusT = q - t;
					const baseMinusT = base - t;
					output.push(
						stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
					);
					q = floor(qMinusT / baseMinusT);
				}

				output.push(stringFromCharCode(digitToBasic(q, 0)));
				bias = adapt(delta, handledCPCountPlusOne, handledCPCount === basicLength);
				delta = 0;
				++handledCPCount;
			}
		}

		++delta;
		++n;

	}
	return output.join('');
};

/**
 * Converts a Punycode string representing a domain name or an email address
 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
 * it doesn't matter if you call it on a string that has already been
 * converted to Unicode.
 * @memberOf punycode
 * @param {String} input The Punycoded domain name or email address to
 * convert to Unicode.
 * @returns {String} The Unicode representation of the given Punycode
 * string.
 */
const toUnicode = function(input) {
	return mapDomain(input, function(string) {
		return regexPunycode.test(string)
			? decode(string.slice(4).toLowerCase())
			: string;
	});
};

/**
 * Converts a Unicode string representing a domain name or an email address to
 * Punycode. Only the non-ASCII parts of the domain name will be converted,
 * i.e. it doesn't matter if you call it with a domain that's already in
 * ASCII.
 * @memberOf punycode
 * @param {String} input The domain name or email address to convert, as a
 * Unicode string.
 * @returns {String} The Punycode representation of the given domain name or
 * email address.
 */
const toASCII = function(input) {
	return mapDomain(input, function(string) {
		return regexNonASCII.test(string)
			? 'xn--' + encode(string)
			: string;
	});
};

/*--------------------------------------------------------------------------*/

/** Define the public API */
const punycode = {
	/**
	 * A string representing the current Punycode.js version number.
	 * @memberOf punycode
	 * @type String
	 */
	'version': '2.3.1',
	/**
	 * An object of methods to convert from JavaScript's internal character
	 * representation (UCS-2) to Unicode code points, and back.
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode
	 * @type Object
	 */
	'ucs2': {
		'decode': ucs2decode,
		'encode': ucs2encode
	},
	'decode': decode,
	'encode': encode,
	'toASCII': toASCII,
	'toUnicode': toUnicode
};

var punycode_es6 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    decode: decode,
    default: punycode,
    encode: encode,
    toASCII: toASCII,
    toUnicode: toUnicode,
    ucs2decode: ucs2decode,
    ucs2encode: ucs2encode
});

var require$$0 = /*@__PURE__*/getAugmentedNamespace(punycode_es6);

var regexes;
var hasRequiredRegexes;

function requireRegexes () {
	if (hasRequiredRegexes) return regexes;
	hasRequiredRegexes = 1;

	const combiningMarks = /[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3C\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CF3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D81-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u180F\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ACE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA82C\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\u{101FD}\u{102E0}\u{10376}-\u{1037A}\u{10A01}-\u{10A03}\u{10A05}\u{10A06}\u{10A0C}-\u{10A0F}\u{10A38}-\u{10A3A}\u{10A3F}\u{10AE5}\u{10AE6}\u{10D24}-\u{10D27}\u{10EAB}\u{10EAC}\u{10EFD}-\u{10EFF}\u{10F46}-\u{10F50}\u{10F82}-\u{10F85}\u{11000}-\u{11002}\u{11038}-\u{11046}\u{11070}\u{11073}\u{11074}\u{1107F}-\u{11082}\u{110B0}-\u{110BA}\u{110C2}\u{11100}-\u{11102}\u{11127}-\u{11134}\u{11145}\u{11146}\u{11173}\u{11180}-\u{11182}\u{111B3}-\u{111C0}\u{111C9}-\u{111CC}\u{111CE}\u{111CF}\u{1122C}-\u{11237}\u{1123E}\u{11241}\u{112DF}-\u{112EA}\u{11300}-\u{11303}\u{1133B}\u{1133C}\u{1133E}-\u{11344}\u{11347}\u{11348}\u{1134B}-\u{1134D}\u{11357}\u{11362}\u{11363}\u{11366}-\u{1136C}\u{11370}-\u{11374}\u{11435}-\u{11446}\u{1145E}\u{114B0}-\u{114C3}\u{115AF}-\u{115B5}\u{115B8}-\u{115C0}\u{115DC}\u{115DD}\u{11630}-\u{11640}\u{116AB}-\u{116B7}\u{1171D}-\u{1172B}\u{1182C}-\u{1183A}\u{11930}-\u{11935}\u{11937}\u{11938}\u{1193B}-\u{1193E}\u{11940}\u{11942}\u{11943}\u{119D1}-\u{119D7}\u{119DA}-\u{119E0}\u{119E4}\u{11A01}-\u{11A0A}\u{11A33}-\u{11A39}\u{11A3B}-\u{11A3E}\u{11A47}\u{11A51}-\u{11A5B}\u{11A8A}-\u{11A99}\u{11C2F}-\u{11C36}\u{11C38}-\u{11C3F}\u{11C92}-\u{11CA7}\u{11CA9}-\u{11CB6}\u{11D31}-\u{11D36}\u{11D3A}\u{11D3C}\u{11D3D}\u{11D3F}-\u{11D45}\u{11D47}\u{11D8A}-\u{11D8E}\u{11D90}\u{11D91}\u{11D93}-\u{11D97}\u{11EF3}-\u{11EF6}\u{11F00}\u{11F01}\u{11F03}\u{11F34}-\u{11F3A}\u{11F3E}-\u{11F42}\u{13440}\u{13447}-\u{13455}\u{16AF0}-\u{16AF4}\u{16B30}-\u{16B36}\u{16F4F}\u{16F51}-\u{16F87}\u{16F8F}-\u{16F92}\u{16FE4}\u{16FF0}\u{16FF1}\u{1BC9D}\u{1BC9E}\u{1CF00}-\u{1CF2D}\u{1CF30}-\u{1CF46}\u{1D165}-\u{1D169}\u{1D16D}-\u{1D172}\u{1D17B}-\u{1D182}\u{1D185}-\u{1D18B}\u{1D1AA}-\u{1D1AD}\u{1D242}-\u{1D244}\u{1DA00}-\u{1DA36}\u{1DA3B}-\u{1DA6C}\u{1DA75}\u{1DA84}\u{1DA9B}-\u{1DA9F}\u{1DAA1}-\u{1DAAF}\u{1E000}-\u{1E006}\u{1E008}-\u{1E018}\u{1E01B}-\u{1E021}\u{1E023}\u{1E024}\u{1E026}-\u{1E02A}\u{1E08F}\u{1E130}-\u{1E136}\u{1E2AE}\u{1E2EC}-\u{1E2EF}\u{1E4EC}-\u{1E4EF}\u{1E8D0}-\u{1E8D6}\u{1E944}-\u{1E94A}\u{E0100}-\u{E01EF}]/u;
	const combiningClassVirama = /[\u094D\u09CD\u0A4D\u0ACD\u0B4D\u0BCD\u0C4D\u0CCD\u0D3B\u0D3C\u0D4D\u0DCA\u0E3A\u0EBA\u0F84\u1039\u103A\u1714\u1715\u1734\u17D2\u1A60\u1B44\u1BAA\u1BAB\u1BF2\u1BF3\u2D7F\uA806\uA82C\uA8C4\uA953\uA9C0\uAAF6\uABED\u{10A3F}\u{11046}\u{11070}\u{1107F}\u{110B9}\u{11133}\u{11134}\u{111C0}\u{11235}\u{112EA}\u{1134D}\u{11442}\u{114C2}\u{115BF}\u{1163F}\u{116B6}\u{1172B}\u{11839}\u{1193D}\u{1193E}\u{119E0}\u{11A34}\u{11A47}\u{11A99}\u{11C3F}\u{11D44}\u{11D45}\u{11D97}\u{11F41}\u{11F42}]/u;
	const validZWNJ = /[\u0620\u0626\u0628\u062A-\u062E\u0633-\u063F\u0641-\u0647\u0649\u064A\u066E\u066F\u0678-\u0687\u069A-\u06BF\u06C1\u06C2\u06CC\u06CE\u06D0\u06D1\u06FA-\u06FC\u06FF\u0712-\u0714\u071A-\u071D\u071F-\u0727\u0729\u072B\u072D\u072E\u074E-\u0758\u075C-\u076A\u076D-\u0770\u0772\u0775-\u0777\u077A-\u077F\u07CA-\u07EA\u0841-\u0845\u0848\u084A-\u0853\u0855\u0860\u0862-\u0865\u0868\u0886\u0889-\u088D\u08A0-\u08A9\u08AF\u08B0\u08B3-\u08B8\u08BA-\u08C8\u1807\u1820-\u1878\u1887-\u18A8\u18AA\uA840-\uA872\u{10AC0}-\u{10AC4}\u{10ACD}\u{10AD3}-\u{10ADC}\u{10ADE}-\u{10AE0}\u{10AEB}-\u{10AEE}\u{10B80}\u{10B82}\u{10B86}-\u{10B88}\u{10B8A}\u{10B8B}\u{10B8D}\u{10B90}\u{10BAD}\u{10BAE}\u{10D00}-\u{10D21}\u{10D23}\u{10F30}-\u{10F32}\u{10F34}-\u{10F44}\u{10F51}-\u{10F53}\u{10F70}-\u{10F73}\u{10F76}-\u{10F81}\u{10FB0}\u{10FB2}\u{10FB3}\u{10FB8}\u{10FBB}\u{10FBC}\u{10FBE}\u{10FBF}\u{10FC1}\u{10FC4}\u{10FCA}\u{10FCB}\u{1E900}-\u{1E943}][\xAD\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u061C\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u070F\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09C1-\u09C4\u09CD\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3F\u0B41-\u0B44\u0B4D\u0B55\u0B56\u0B62\u0B63\u0B82\u0BC0\u0BCD\u0C00\u0C04\u0C3C\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC6\u0CCC\u0CCD\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D41-\u0D44\u0D4D\u0D62\u0D63\u0D81\u0DCA\u0DD2-\u0DD4\u0DD6\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732\u1733\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u180F\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1ACE\u1B00-\u1B03\u1B34\u1B36-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DFF\u200B\u200E\u200F\u202A-\u202E\u2060-\u2064\u206A-\u206F\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302D\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFEFF\uFFF9-\uFFFB\u{101FD}\u{102E0}\u{10376}-\u{1037A}\u{10A01}-\u{10A03}\u{10A05}\u{10A06}\u{10A0C}-\u{10A0F}\u{10A38}-\u{10A3A}\u{10A3F}\u{10AE5}\u{10AE6}\u{10D24}-\u{10D27}\u{10EAB}\u{10EAC}\u{10EFD}-\u{10EFF}\u{10F46}-\u{10F50}\u{10F82}-\u{10F85}\u{11001}\u{11038}-\u{11046}\u{11070}\u{11073}\u{11074}\u{1107F}-\u{11081}\u{110B3}-\u{110B6}\u{110B9}\u{110BA}\u{110C2}\u{11100}-\u{11102}\u{11127}-\u{1112B}\u{1112D}-\u{11134}\u{11173}\u{11180}\u{11181}\u{111B6}-\u{111BE}\u{111C9}-\u{111CC}\u{111CF}\u{1122F}-\u{11231}\u{11234}\u{11236}\u{11237}\u{1123E}\u{11241}\u{112DF}\u{112E3}-\u{112EA}\u{11300}\u{11301}\u{1133B}\u{1133C}\u{11340}\u{11366}-\u{1136C}\u{11370}-\u{11374}\u{11438}-\u{1143F}\u{11442}-\u{11444}\u{11446}\u{1145E}\u{114B3}-\u{114B8}\u{114BA}\u{114BF}\u{114C0}\u{114C2}\u{114C3}\u{115B2}-\u{115B5}\u{115BC}\u{115BD}\u{115BF}\u{115C0}\u{115DC}\u{115DD}\u{11633}-\u{1163A}\u{1163D}\u{1163F}\u{11640}\u{116AB}\u{116AD}\u{116B0}-\u{116B5}\u{116B7}\u{1171D}-\u{1171F}\u{11722}-\u{11725}\u{11727}-\u{1172B}\u{1182F}-\u{11837}\u{11839}\u{1183A}\u{1193B}\u{1193C}\u{1193E}\u{11943}\u{119D4}-\u{119D7}\u{119DA}\u{119DB}\u{119E0}\u{11A01}-\u{11A0A}\u{11A33}-\u{11A38}\u{11A3B}-\u{11A3E}\u{11A47}\u{11A51}-\u{11A56}\u{11A59}-\u{11A5B}\u{11A8A}-\u{11A96}\u{11A98}\u{11A99}\u{11C30}-\u{11C36}\u{11C38}-\u{11C3D}\u{11C3F}\u{11C92}-\u{11CA7}\u{11CAA}-\u{11CB0}\u{11CB2}\u{11CB3}\u{11CB5}\u{11CB6}\u{11D31}-\u{11D36}\u{11D3A}\u{11D3C}\u{11D3D}\u{11D3F}-\u{11D45}\u{11D47}\u{11D90}\u{11D91}\u{11D95}\u{11D97}\u{11EF3}\u{11EF4}\u{11F00}\u{11F01}\u{11F36}-\u{11F3A}\u{11F40}\u{11F42}\u{13430}-\u{13440}\u{13447}-\u{13455}\u{16AF0}-\u{16AF4}\u{16B30}-\u{16B36}\u{16F4F}\u{16F8F}-\u{16F92}\u{16FE4}\u{1BC9D}\u{1BC9E}\u{1BCA0}-\u{1BCA3}\u{1CF00}-\u{1CF2D}\u{1CF30}-\u{1CF46}\u{1D167}-\u{1D169}\u{1D173}-\u{1D182}\u{1D185}-\u{1D18B}\u{1D1AA}-\u{1D1AD}\u{1D242}-\u{1D244}\u{1DA00}-\u{1DA36}\u{1DA3B}-\u{1DA6C}\u{1DA75}\u{1DA84}\u{1DA9B}-\u{1DA9F}\u{1DAA1}-\u{1DAAF}\u{1E000}-\u{1E006}\u{1E008}-\u{1E018}\u{1E01B}-\u{1E021}\u{1E023}\u{1E024}\u{1E026}-\u{1E02A}\u{1E08F}\u{1E130}-\u{1E136}\u{1E2AE}\u{1E2EC}-\u{1E2EF}\u{1E4EC}-\u{1E4EF}\u{1E8D0}-\u{1E8D6}\u{1E944}-\u{1E94B}\u{E0001}\u{E0020}-\u{E007F}\u{E0100}-\u{E01EF}]*\u200C[\xAD\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u061C\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u070F\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09C1-\u09C4\u09CD\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3F\u0B41-\u0B44\u0B4D\u0B55\u0B56\u0B62\u0B63\u0B82\u0BC0\u0BCD\u0C00\u0C04\u0C3C\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC6\u0CCC\u0CCD\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D41-\u0D44\u0D4D\u0D62\u0D63\u0D81\u0DCA\u0DD2-\u0DD4\u0DD6\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732\u1733\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u180F\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1ACE\u1B00-\u1B03\u1B34\u1B36-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DFF\u200B\u200E\u200F\u202A-\u202E\u2060-\u2064\u206A-\u206F\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302D\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFEFF\uFFF9-\uFFFB\u{101FD}\u{102E0}\u{10376}-\u{1037A}\u{10A01}-\u{10A03}\u{10A05}\u{10A06}\u{10A0C}-\u{10A0F}\u{10A38}-\u{10A3A}\u{10A3F}\u{10AE5}\u{10AE6}\u{10D24}-\u{10D27}\u{10EAB}\u{10EAC}\u{10EFD}-\u{10EFF}\u{10F46}-\u{10F50}\u{10F82}-\u{10F85}\u{11001}\u{11038}-\u{11046}\u{11070}\u{11073}\u{11074}\u{1107F}-\u{11081}\u{110B3}-\u{110B6}\u{110B9}\u{110BA}\u{110C2}\u{11100}-\u{11102}\u{11127}-\u{1112B}\u{1112D}-\u{11134}\u{11173}\u{11180}\u{11181}\u{111B6}-\u{111BE}\u{111C9}-\u{111CC}\u{111CF}\u{1122F}-\u{11231}\u{11234}\u{11236}\u{11237}\u{1123E}\u{11241}\u{112DF}\u{112E3}-\u{112EA}\u{11300}\u{11301}\u{1133B}\u{1133C}\u{11340}\u{11366}-\u{1136C}\u{11370}-\u{11374}\u{11438}-\u{1143F}\u{11442}-\u{11444}\u{11446}\u{1145E}\u{114B3}-\u{114B8}\u{114BA}\u{114BF}\u{114C0}\u{114C2}\u{114C3}\u{115B2}-\u{115B5}\u{115BC}\u{115BD}\u{115BF}\u{115C0}\u{115DC}\u{115DD}\u{11633}-\u{1163A}\u{1163D}\u{1163F}\u{11640}\u{116AB}\u{116AD}\u{116B0}-\u{116B5}\u{116B7}\u{1171D}-\u{1171F}\u{11722}-\u{11725}\u{11727}-\u{1172B}\u{1182F}-\u{11837}\u{11839}\u{1183A}\u{1193B}\u{1193C}\u{1193E}\u{11943}\u{119D4}-\u{119D7}\u{119DA}\u{119DB}\u{119E0}\u{11A01}-\u{11A0A}\u{11A33}-\u{11A38}\u{11A3B}-\u{11A3E}\u{11A47}\u{11A51}-\u{11A56}\u{11A59}-\u{11A5B}\u{11A8A}-\u{11A96}\u{11A98}\u{11A99}\u{11C30}-\u{11C36}\u{11C38}-\u{11C3D}\u{11C3F}\u{11C92}-\u{11CA7}\u{11CAA}-\u{11CB0}\u{11CB2}\u{11CB3}\u{11CB5}\u{11CB6}\u{11D31}-\u{11D36}\u{11D3A}\u{11D3C}\u{11D3D}\u{11D3F}-\u{11D45}\u{11D47}\u{11D90}\u{11D91}\u{11D95}\u{11D97}\u{11EF3}\u{11EF4}\u{11F00}\u{11F01}\u{11F36}-\u{11F3A}\u{11F40}\u{11F42}\u{13430}-\u{13440}\u{13447}-\u{13455}\u{16AF0}-\u{16AF4}\u{16B30}-\u{16B36}\u{16F4F}\u{16F8F}-\u{16F92}\u{16FE4}\u{1BC9D}\u{1BC9E}\u{1BCA0}-\u{1BCA3}\u{1CF00}-\u{1CF2D}\u{1CF30}-\u{1CF46}\u{1D167}-\u{1D169}\u{1D173}-\u{1D182}\u{1D185}-\u{1D18B}\u{1D1AA}-\u{1D1AD}\u{1D242}-\u{1D244}\u{1DA00}-\u{1DA36}\u{1DA3B}-\u{1DA6C}\u{1DA75}\u{1DA84}\u{1DA9B}-\u{1DA9F}\u{1DAA1}-\u{1DAAF}\u{1E000}-\u{1E006}\u{1E008}-\u{1E018}\u{1E01B}-\u{1E021}\u{1E023}\u{1E024}\u{1E026}-\u{1E02A}\u{1E08F}\u{1E130}-\u{1E136}\u{1E2AE}\u{1E2EC}-\u{1E2EF}\u{1E4EC}-\u{1E4EF}\u{1E8D0}-\u{1E8D6}\u{1E944}-\u{1E94B}\u{E0001}\u{E0020}-\u{E007F}\u{E0100}-\u{E01EF}]*[\u0620\u0622-\u063F\u0641-\u064A\u066E\u066F\u0671-\u0673\u0675-\u06D3\u06D5\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u077F\u07CA-\u07EA\u0840-\u0858\u0860\u0862-\u0865\u0867-\u086A\u0870-\u0882\u0886\u0889-\u088E\u08A0-\u08AC\u08AE-\u08C8\u1807\u1820-\u1878\u1887-\u18A8\u18AA\uA840-\uA871\u{10AC0}-\u{10AC5}\u{10AC7}\u{10AC9}\u{10ACA}\u{10ACE}-\u{10AD6}\u{10AD8}-\u{10AE1}\u{10AE4}\u{10AEB}-\u{10AEF}\u{10B80}-\u{10B91}\u{10BA9}-\u{10BAE}\u{10D01}-\u{10D23}\u{10F30}-\u{10F44}\u{10F51}-\u{10F54}\u{10F70}-\u{10F81}\u{10FB0}\u{10FB2}-\u{10FB6}\u{10FB8}-\u{10FBF}\u{10FC1}-\u{10FC4}\u{10FC9}\u{10FCA}\u{1E900}-\u{1E943}]/u;
	const bidiDomain = /[\u05BE\u05C0\u05C3\u05C6\u05D0-\u05EA\u05EF-\u05F4\u0600-\u0605\u0608\u060B\u060D\u061B-\u064A\u0660-\u0669\u066B-\u066F\u0671-\u06D5\u06DD\u06E5\u06E6\u06EE\u06EF\u06FA-\u070D\u070F\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u07FE-\u0815\u081A\u0824\u0828\u0830-\u083E\u0840-\u0858\u085E\u0860-\u086A\u0870-\u088E\u0890\u0891\u08A0-\u08C9\u08E2\u200F\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBC2\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFC\uFE70-\uFE74\uFE76-\uFEFC\u{10800}-\u{10805}\u{10808}\u{1080A}-\u{10835}\u{10837}\u{10838}\u{1083C}\u{1083F}-\u{10855}\u{10857}-\u{1089E}\u{108A7}-\u{108AF}\u{108E0}-\u{108F2}\u{108F4}\u{108F5}\u{108FB}-\u{1091B}\u{10920}-\u{10939}\u{1093F}\u{10980}-\u{109B7}\u{109BC}-\u{109CF}\u{109D2}-\u{10A00}\u{10A10}-\u{10A13}\u{10A15}-\u{10A17}\u{10A19}-\u{10A35}\u{10A40}-\u{10A48}\u{10A50}-\u{10A58}\u{10A60}-\u{10A9F}\u{10AC0}-\u{10AE4}\u{10AEB}-\u{10AF6}\u{10B00}-\u{10B35}\u{10B40}-\u{10B55}\u{10B58}-\u{10B72}\u{10B78}-\u{10B91}\u{10B99}-\u{10B9C}\u{10BA9}-\u{10BAF}\u{10C00}-\u{10C48}\u{10C80}-\u{10CB2}\u{10CC0}-\u{10CF2}\u{10CFA}-\u{10D23}\u{10D30}-\u{10D39}\u{10E60}-\u{10E7E}\u{10E80}-\u{10EA9}\u{10EAD}\u{10EB0}\u{10EB1}\u{10F00}-\u{10F27}\u{10F30}-\u{10F45}\u{10F51}-\u{10F59}\u{10F70}-\u{10F81}\u{10F86}-\u{10F89}\u{10FB0}-\u{10FCB}\u{10FE0}-\u{10FF6}\u{1E800}-\u{1E8C4}\u{1E8C7}-\u{1E8CF}\u{1E900}-\u{1E943}\u{1E94B}\u{1E950}-\u{1E959}\u{1E95E}\u{1E95F}\u{1EC71}-\u{1ECB4}\u{1ED01}-\u{1ED3D}\u{1EE00}-\u{1EE03}\u{1EE05}-\u{1EE1F}\u{1EE21}\u{1EE22}\u{1EE24}\u{1EE27}\u{1EE29}-\u{1EE32}\u{1EE34}-\u{1EE37}\u{1EE39}\u{1EE3B}\u{1EE42}\u{1EE47}\u{1EE49}\u{1EE4B}\u{1EE4D}-\u{1EE4F}\u{1EE51}\u{1EE52}\u{1EE54}\u{1EE57}\u{1EE59}\u{1EE5B}\u{1EE5D}\u{1EE5F}\u{1EE61}\u{1EE62}\u{1EE64}\u{1EE67}-\u{1EE6A}\u{1EE6C}-\u{1EE72}\u{1EE74}-\u{1EE77}\u{1EE79}-\u{1EE7C}\u{1EE7E}\u{1EE80}-\u{1EE89}\u{1EE8B}-\u{1EE9B}\u{1EEA1}-\u{1EEA3}\u{1EEA5}-\u{1EEA9}\u{1EEAB}-\u{1EEBB}]/u;
	const bidiS1LTR = /[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02B8\u02BB-\u02C1\u02D0\u02D1\u02E0-\u02E4\u02EE\u0370-\u0373\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0482\u048A-\u052F\u0531-\u0556\u0559-\u0589\u0903-\u0939\u093B\u093D-\u0940\u0949-\u094C\u094E-\u0950\u0958-\u0961\u0964-\u0980\u0982\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD-\u09C0\u09C7\u09C8\u09CB\u09CC\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09FA\u09FC\u09FD\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3E-\u0A40\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A76\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD-\u0AC0\u0AC9\u0ACB\u0ACC\u0AD0\u0AE0\u0AE1\u0AE6-\u0AF0\u0AF9\u0B02\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B3E\u0B40\u0B47\u0B48\u0B4B\u0B4C\u0B57\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE\u0BBF\u0BC1\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0BD0\u0BD7\u0BE6-\u0BF2\u0C01-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C41-\u0C44\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C66-\u0C6F\u0C77\u0C7F\u0C80\u0C82-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD-\u0CC4\u0CC6-\u0CC8\u0CCA\u0CCB\u0CD5\u0CD6\u0CDD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1-\u0CF3\u0D02-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D4E\u0D4F\u0D54-\u0D61\u0D66-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCF-\u0DD1\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2-\u0DF4\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E4F-\u0E5B\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00-\u0F17\u0F1A-\u0F34\u0F36\u0F38\u0F3E-\u0F47\u0F49-\u0F6C\u0F7F\u0F85\u0F88-\u0F8C\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE-\u0FDA\u1000-\u102C\u1031\u1038\u103B\u103C\u103F-\u1057\u105A-\u105D\u1061-\u1070\u1075-\u1081\u1083\u1084\u1087-\u108C\u108E-\u109C\u109E-\u10C5\u10C7\u10CD\u10D0-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1360-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u167F\u1681-\u169A\u16A0-\u16F8\u1700-\u1711\u1715\u171F-\u1731\u1734-\u1736\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17B6\u17BE-\u17C5\u17C7\u17C8\u17D4-\u17DA\u17DC\u17E0-\u17E9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1923-\u1926\u1929-\u192B\u1930\u1931\u1933-\u1938\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A19\u1A1A\u1A1E-\u1A55\u1A57\u1A61\u1A63\u1A64\u1A6D-\u1A72\u1A80-\u1A89\u1A90-\u1A99\u1AA0-\u1AAD\u1B04-\u1B33\u1B35\u1B3B\u1B3D-\u1B41\u1B43-\u1B4C\u1B50-\u1B6A\u1B74-\u1B7E\u1B82-\u1BA1\u1BA6\u1BA7\u1BAA\u1BAE-\u1BE5\u1BE7\u1BEA-\u1BEC\u1BEE\u1BF2\u1BF3\u1BFC-\u1C2B\u1C34\u1C35\u1C3B-\u1C49\u1C4D-\u1C88\u1C90-\u1CBA\u1CBD-\u1CC7\u1CD3\u1CE1\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5-\u1CF7\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200E\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u214F\u2160-\u2188\u2336-\u237A\u2395\u249C-\u24E9\u26AC\u2800-\u28FF\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D70\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u302E\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3190-\u31BF\u31F0-\u321C\u3220-\u324F\u3260-\u327B\u327F-\u32B0\u32C0-\u32CB\u32D0-\u3376\u337B-\u33DD\u33E0-\u33FE\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA60C\uA610-\uA62B\uA640-\uA66E\uA680-\uA69D\uA6A0-\uA6EF\uA6F2-\uA6F7\uA722-\uA787\uA789-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA824\uA827\uA830-\uA837\uA840-\uA873\uA880-\uA8C3\uA8CE-\uA8D9\uA8F2-\uA8FE\uA900-\uA925\uA92E-\uA946\uA952\uA953\uA95F-\uA97C\uA983-\uA9B2\uA9B4\uA9B5\uA9BA\uA9BB\uA9BE-\uA9CD\uA9CF-\uA9D9\uA9DE-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA2F\uAA30\uAA33\uAA34\uAA40-\uAA42\uAA44-\uAA4B\uAA4D\uAA50-\uAA59\uAA5C-\uAA7B\uAA7D-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAAEB\uAAEE-\uAAF5\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB69\uAB70-\uABE4\uABE6\uABE7\uABE9-\uABEC\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uD800-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u{10000}-\u{1000B}\u{1000D}-\u{10026}\u{10028}-\u{1003A}\u{1003C}\u{1003D}\u{1003F}-\u{1004D}\u{10050}-\u{1005D}\u{10080}-\u{100FA}\u{10100}\u{10102}\u{10107}-\u{10133}\u{10137}-\u{1013F}\u{1018D}\u{1018E}\u{101D0}-\u{101FC}\u{10280}-\u{1029C}\u{102A0}-\u{102D0}\u{10300}-\u{10323}\u{1032D}-\u{1034A}\u{10350}-\u{10375}\u{10380}-\u{1039D}\u{1039F}-\u{103C3}\u{103C8}-\u{103D5}\u{10400}-\u{1049D}\u{104A0}-\u{104A9}\u{104B0}-\u{104D3}\u{104D8}-\u{104FB}\u{10500}-\u{10527}\u{10530}-\u{10563}\u{1056F}-\u{1057A}\u{1057C}-\u{1058A}\u{1058C}-\u{10592}\u{10594}\u{10595}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10600}-\u{10736}\u{10740}-\u{10755}\u{10760}-\u{10767}\u{10780}-\u{10785}\u{10787}-\u{107B0}\u{107B2}-\u{107BA}\u{11000}\u{11002}-\u{11037}\u{11047}-\u{1104D}\u{11066}-\u{1106F}\u{11071}\u{11072}\u{11075}\u{11082}-\u{110B2}\u{110B7}\u{110B8}\u{110BB}-\u{110C1}\u{110CD}\u{110D0}-\u{110E8}\u{110F0}-\u{110F9}\u{11103}-\u{11126}\u{1112C}\u{11136}-\u{11147}\u{11150}-\u{11172}\u{11174}-\u{11176}\u{11182}-\u{111B5}\u{111BF}-\u{111C8}\u{111CD}\u{111CE}\u{111D0}-\u{111DF}\u{111E1}-\u{111F4}\u{11200}-\u{11211}\u{11213}-\u{1122E}\u{11232}\u{11233}\u{11235}\u{11238}-\u{1123D}\u{1123F}\u{11240}\u{11280}-\u{11286}\u{11288}\u{1128A}-\u{1128D}\u{1128F}-\u{1129D}\u{1129F}-\u{112A9}\u{112B0}-\u{112DE}\u{112E0}-\u{112E2}\u{112F0}-\u{112F9}\u{11302}\u{11303}\u{11305}-\u{1130C}\u{1130F}\u{11310}\u{11313}-\u{11328}\u{1132A}-\u{11330}\u{11332}\u{11333}\u{11335}-\u{11339}\u{1133D}-\u{1133F}\u{11341}-\u{11344}\u{11347}\u{11348}\u{1134B}-\u{1134D}\u{11350}\u{11357}\u{1135D}-\u{11363}\u{11400}-\u{11437}\u{11440}\u{11441}\u{11445}\u{11447}-\u{1145B}\u{1145D}\u{1145F}-\u{11461}\u{11480}-\u{114B2}\u{114B9}\u{114BB}-\u{114BE}\u{114C1}\u{114C4}-\u{114C7}\u{114D0}-\u{114D9}\u{11580}-\u{115B1}\u{115B8}-\u{115BB}\u{115BE}\u{115C1}-\u{115DB}\u{11600}-\u{11632}\u{1163B}\u{1163C}\u{1163E}\u{11641}-\u{11644}\u{11650}-\u{11659}\u{11680}-\u{116AA}\u{116AC}\u{116AE}\u{116AF}\u{116B6}\u{116B8}\u{116B9}\u{116C0}-\u{116C9}\u{11700}-\u{1171A}\u{11720}\u{11721}\u{11726}\u{11730}-\u{11746}\u{11800}-\u{1182E}\u{11838}\u{1183B}\u{118A0}-\u{118F2}\u{118FF}-\u{11906}\u{11909}\u{1190C}-\u{11913}\u{11915}\u{11916}\u{11918}-\u{11935}\u{11937}\u{11938}\u{1193D}\u{1193F}-\u{11942}\u{11944}-\u{11946}\u{11950}-\u{11959}\u{119A0}-\u{119A7}\u{119AA}-\u{119D3}\u{119DC}-\u{119DF}\u{119E1}-\u{119E4}\u{11A00}\u{11A07}\u{11A08}\u{11A0B}-\u{11A32}\u{11A39}\u{11A3A}\u{11A3F}-\u{11A46}\u{11A50}\u{11A57}\u{11A58}\u{11A5C}-\u{11A89}\u{11A97}\u{11A9A}-\u{11AA2}\u{11AB0}-\u{11AF8}\u{11B00}-\u{11B09}\u{11C00}-\u{11C08}\u{11C0A}-\u{11C2F}\u{11C3E}-\u{11C45}\u{11C50}-\u{11C6C}\u{11C70}-\u{11C8F}\u{11CA9}\u{11CB1}\u{11CB4}\u{11D00}-\u{11D06}\u{11D08}\u{11D09}\u{11D0B}-\u{11D30}\u{11D46}\u{11D50}-\u{11D59}\u{11D60}-\u{11D65}\u{11D67}\u{11D68}\u{11D6A}-\u{11D8E}\u{11D93}\u{11D94}\u{11D96}\u{11D98}\u{11DA0}-\u{11DA9}\u{11EE0}-\u{11EF2}\u{11EF5}-\u{11EF8}\u{11F02}-\u{11F10}\u{11F12}-\u{11F35}\u{11F3E}\u{11F3F}\u{11F41}\u{11F43}-\u{11F59}\u{11FB0}\u{11FC0}-\u{11FD4}\u{11FFF}-\u{12399}\u{12400}-\u{1246E}\u{12470}-\u{12474}\u{12480}-\u{12543}\u{12F90}-\u{12FF2}\u{13000}-\u{1343F}\u{13441}-\u{13446}\u{14400}-\u{14646}\u{16800}-\u{16A38}\u{16A40}-\u{16A5E}\u{16A60}-\u{16A69}\u{16A6E}-\u{16ABE}\u{16AC0}-\u{16AC9}\u{16AD0}-\u{16AED}\u{16AF5}\u{16B00}-\u{16B2F}\u{16B37}-\u{16B45}\u{16B50}-\u{16B59}\u{16B5B}-\u{16B61}\u{16B63}-\u{16B77}\u{16B7D}-\u{16B8F}\u{16E40}-\u{16E9A}\u{16F00}-\u{16F4A}\u{16F50}-\u{16F87}\u{16F93}-\u{16F9F}\u{16FE0}\u{16FE1}\u{16FE3}\u{16FF0}\u{16FF1}\u{17000}-\u{187F7}\u{18800}-\u{18CD5}\u{18D00}-\u{18D08}\u{1AFF0}-\u{1AFF3}\u{1AFF5}-\u{1AFFB}\u{1AFFD}\u{1AFFE}\u{1B000}-\u{1B122}\u{1B132}\u{1B150}-\u{1B152}\u{1B155}\u{1B164}-\u{1B167}\u{1B170}-\u{1B2FB}\u{1BC00}-\u{1BC6A}\u{1BC70}-\u{1BC7C}\u{1BC80}-\u{1BC88}\u{1BC90}-\u{1BC99}\u{1BC9C}\u{1BC9F}\u{1CF50}-\u{1CFC3}\u{1D000}-\u{1D0F5}\u{1D100}-\u{1D126}\u{1D129}-\u{1D166}\u{1D16A}-\u{1D172}\u{1D183}\u{1D184}\u{1D18C}-\u{1D1A9}\u{1D1AE}-\u{1D1E8}\u{1D2C0}-\u{1D2D3}\u{1D2E0}-\u{1D2F3}\u{1D360}-\u{1D378}\u{1D400}-\u{1D454}\u{1D456}-\u{1D49C}\u{1D49E}\u{1D49F}\u{1D4A2}\u{1D4A5}\u{1D4A6}\u{1D4A9}-\u{1D4AC}\u{1D4AE}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D505}\u{1D507}-\u{1D50A}\u{1D50D}-\u{1D514}\u{1D516}-\u{1D51C}\u{1D51E}-\u{1D539}\u{1D53B}-\u{1D53E}\u{1D540}-\u{1D544}\u{1D546}\u{1D54A}-\u{1D550}\u{1D552}-\u{1D6A5}\u{1D6A8}-\u{1D6DA}\u{1D6DC}-\u{1D714}\u{1D716}-\u{1D74E}\u{1D750}-\u{1D788}\u{1D78A}-\u{1D7C2}\u{1D7C4}-\u{1D7CB}\u{1D800}-\u{1D9FF}\u{1DA37}-\u{1DA3A}\u{1DA6D}-\u{1DA74}\u{1DA76}-\u{1DA83}\u{1DA85}-\u{1DA8B}\u{1DF00}-\u{1DF1E}\u{1DF25}-\u{1DF2A}\u{1E030}-\u{1E06D}\u{1E100}-\u{1E12C}\u{1E137}-\u{1E13D}\u{1E140}-\u{1E149}\u{1E14E}\u{1E14F}\u{1E290}-\u{1E2AD}\u{1E2C0}-\u{1E2EB}\u{1E2F0}-\u{1E2F9}\u{1E4D0}-\u{1E4EB}\u{1E4F0}-\u{1E4F9}\u{1E7E0}-\u{1E7E6}\u{1E7E8}-\u{1E7EB}\u{1E7ED}\u{1E7EE}\u{1E7F0}-\u{1E7FE}\u{1F110}-\u{1F12E}\u{1F130}-\u{1F169}\u{1F170}-\u{1F1AC}\u{1F1E6}-\u{1F202}\u{1F210}-\u{1F23B}\u{1F240}-\u{1F248}\u{1F250}\u{1F251}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B739}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2EBF0}-\u{2EE5D}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}\u{31350}-\u{323AF}\u{F0000}-\u{FFFFD}\u{100000}-\u{10FFFD}]/u;
	const bidiS1RTL = /[\u05BE\u05C0\u05C3\u05C6\u05D0-\u05EA\u05EF-\u05F4\u0608\u060B\u060D\u061B-\u064A\u066D-\u066F\u0671-\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u070D\u070F\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u07FE-\u0815\u081A\u0824\u0828\u0830-\u083E\u0840-\u0858\u085E\u0860-\u086A\u0870-\u088E\u08A0-\u08C9\u200F\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBC2\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFC\uFE70-\uFE74\uFE76-\uFEFC\u{10800}-\u{10805}\u{10808}\u{1080A}-\u{10835}\u{10837}\u{10838}\u{1083C}\u{1083F}-\u{10855}\u{10857}-\u{1089E}\u{108A7}-\u{108AF}\u{108E0}-\u{108F2}\u{108F4}\u{108F5}\u{108FB}-\u{1091B}\u{10920}-\u{10939}\u{1093F}\u{10980}-\u{109B7}\u{109BC}-\u{109CF}\u{109D2}-\u{10A00}\u{10A10}-\u{10A13}\u{10A15}-\u{10A17}\u{10A19}-\u{10A35}\u{10A40}-\u{10A48}\u{10A50}-\u{10A58}\u{10A60}-\u{10A9F}\u{10AC0}-\u{10AE4}\u{10AEB}-\u{10AF6}\u{10B00}-\u{10B35}\u{10B40}-\u{10B55}\u{10B58}-\u{10B72}\u{10B78}-\u{10B91}\u{10B99}-\u{10B9C}\u{10BA9}-\u{10BAF}\u{10C00}-\u{10C48}\u{10C80}-\u{10CB2}\u{10CC0}-\u{10CF2}\u{10CFA}-\u{10D23}\u{10E80}-\u{10EA9}\u{10EAD}\u{10EB0}\u{10EB1}\u{10F00}-\u{10F27}\u{10F30}-\u{10F45}\u{10F51}-\u{10F59}\u{10F70}-\u{10F81}\u{10F86}-\u{10F89}\u{10FB0}-\u{10FCB}\u{10FE0}-\u{10FF6}\u{1E800}-\u{1E8C4}\u{1E8C7}-\u{1E8CF}\u{1E900}-\u{1E943}\u{1E94B}\u{1E950}-\u{1E959}\u{1E95E}\u{1E95F}\u{1EC71}-\u{1ECB4}\u{1ED01}-\u{1ED3D}\u{1EE00}-\u{1EE03}\u{1EE05}-\u{1EE1F}\u{1EE21}\u{1EE22}\u{1EE24}\u{1EE27}\u{1EE29}-\u{1EE32}\u{1EE34}-\u{1EE37}\u{1EE39}\u{1EE3B}\u{1EE42}\u{1EE47}\u{1EE49}\u{1EE4B}\u{1EE4D}-\u{1EE4F}\u{1EE51}\u{1EE52}\u{1EE54}\u{1EE57}\u{1EE59}\u{1EE5B}\u{1EE5D}\u{1EE5F}\u{1EE61}\u{1EE62}\u{1EE64}\u{1EE67}-\u{1EE6A}\u{1EE6C}-\u{1EE72}\u{1EE74}-\u{1EE77}\u{1EE79}-\u{1EE7C}\u{1EE7E}\u{1EE80}-\u{1EE89}\u{1EE8B}-\u{1EE9B}\u{1EEA1}-\u{1EEA3}\u{1EEA5}-\u{1EEA9}\u{1EEAB}-\u{1EEBB}]/u;
	const bidiS2 = /^[\0-\x08\x0E-\x1B!-@\[-`\{-\x84\x86-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02B9\u02BA\u02C2-\u02CF\u02D2-\u02DF\u02E5-\u02ED\u02EF-\u036F\u0374\u0375\u037E\u0384\u0385\u0387\u03F6\u0483-\u0489\u058A\u058D-\u058F\u0591-\u05C7\u05D0-\u05EA\u05EF-\u05F4\u0600-\u070D\u070F-\u074A\u074D-\u07B1\u07C0-\u07FA\u07FD-\u082D\u0830-\u083E\u0840-\u085B\u085E\u0860-\u086A\u0870-\u088E\u0890\u0891\u0898-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09C1-\u09C4\u09CD\u09E2\u09E3\u09F2\u09F3\u09FB\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AF1\u0AFA-\u0AFF\u0B01\u0B3C\u0B3F\u0B41-\u0B44\u0B4D\u0B55\u0B56\u0B62\u0B63\u0B82\u0BC0\u0BCD\u0BF3-\u0BFA\u0C00\u0C04\u0C3C\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C78-\u0C7E\u0C81\u0CBC\u0CCC\u0CCD\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D41-\u0D44\u0D4D\u0D62\u0D63\u0D81\u0DCA\u0DD2-\u0DD4\u0DD6\u0E31\u0E34-\u0E3A\u0E3F\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0F18\u0F19\u0F35\u0F37\u0F39-\u0F3D\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1390-\u1399\u1400\u169B\u169C\u1712-\u1714\u1732\u1733\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DB\u17DD\u17F0-\u17F9\u1800-\u180F\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1940\u1944\u1945\u19DE-\u19FF\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1ACE\u1B00-\u1B03\u1B34\u1B36-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DFF\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u200B-\u200D\u200F-\u2027\u202F-\u205E\u2060-\u2064\u206A-\u2070\u2074-\u207E\u2080-\u208E\u20A0-\u20C0\u20D0-\u20F0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u2150-\u215F\u2189-\u218B\u2190-\u2335\u237B-\u2394\u2396-\u2426\u2440-\u244A\u2460-\u249B\u24EA-\u26AB\u26AD-\u27FF\u2900-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2CEF-\u2CF1\u2CF9-\u2CFF\u2D7F\u2DE0-\u2E5D\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3001-\u3004\u3008-\u3020\u302A-\u302D\u3030\u3036\u3037\u303D-\u303F\u3099-\u309C\u30A0\u30FB\u31C0-\u31E3\u31EF\u321D\u321E\u3250-\u325F\u327C-\u327E\u32B1-\u32BF\u32CC-\u32CF\u3377-\u337A\u33DE\u33DF\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA60D-\uA60F\uA66F-\uA67F\uA69E\uA69F\uA6F0\uA6F1\uA700-\uA721\uA788\uA802\uA806\uA80B\uA825\uA826\uA828-\uA82C\uA838\uA839\uA874-\uA877\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uAB6A\uAB6B\uABE5\uABE8\uABED\uFB1D-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBC2\uFBD3-\uFD8F\uFD92-\uFDC7\uFDCF\uFDF0-\uFE19\uFE20-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFE70-\uFE74\uFE76-\uFEFC\uFEFF\uFF01-\uFF20\uFF3B-\uFF40\uFF5B-\uFF65\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFF9-\uFFFD\u{10101}\u{10140}-\u{1018C}\u{10190}-\u{1019C}\u{101A0}\u{101FD}\u{102E0}-\u{102FB}\u{10376}-\u{1037A}\u{10800}-\u{10805}\u{10808}\u{1080A}-\u{10835}\u{10837}\u{10838}\u{1083C}\u{1083F}-\u{10855}\u{10857}-\u{1089E}\u{108A7}-\u{108AF}\u{108E0}-\u{108F2}\u{108F4}\u{108F5}\u{108FB}-\u{1091B}\u{1091F}-\u{10939}\u{1093F}\u{10980}-\u{109B7}\u{109BC}-\u{109CF}\u{109D2}-\u{10A03}\u{10A05}\u{10A06}\u{10A0C}-\u{10A13}\u{10A15}-\u{10A17}\u{10A19}-\u{10A35}\u{10A38}-\u{10A3A}\u{10A3F}-\u{10A48}\u{10A50}-\u{10A58}\u{10A60}-\u{10A9F}\u{10AC0}-\u{10AE6}\u{10AEB}-\u{10AF6}\u{10B00}-\u{10B35}\u{10B39}-\u{10B55}\u{10B58}-\u{10B72}\u{10B78}-\u{10B91}\u{10B99}-\u{10B9C}\u{10BA9}-\u{10BAF}\u{10C00}-\u{10C48}\u{10C80}-\u{10CB2}\u{10CC0}-\u{10CF2}\u{10CFA}-\u{10D27}\u{10D30}-\u{10D39}\u{10E60}-\u{10E7E}\u{10E80}-\u{10EA9}\u{10EAB}-\u{10EAD}\u{10EB0}\u{10EB1}\u{10EFD}-\u{10F27}\u{10F30}-\u{10F59}\u{10F70}-\u{10F89}\u{10FB0}-\u{10FCB}\u{10FE0}-\u{10FF6}\u{11001}\u{11038}-\u{11046}\u{11052}-\u{11065}\u{11070}\u{11073}\u{11074}\u{1107F}-\u{11081}\u{110B3}-\u{110B6}\u{110B9}\u{110BA}\u{110C2}\u{11100}-\u{11102}\u{11127}-\u{1112B}\u{1112D}-\u{11134}\u{11173}\u{11180}\u{11181}\u{111B6}-\u{111BE}\u{111C9}-\u{111CC}\u{111CF}\u{1122F}-\u{11231}\u{11234}\u{11236}\u{11237}\u{1123E}\u{11241}\u{112DF}\u{112E3}-\u{112EA}\u{11300}\u{11301}\u{1133B}\u{1133C}\u{11340}\u{11366}-\u{1136C}\u{11370}-\u{11374}\u{11438}-\u{1143F}\u{11442}-\u{11444}\u{11446}\u{1145E}\u{114B3}-\u{114B8}\u{114BA}\u{114BF}\u{114C0}\u{114C2}\u{114C3}\u{115B2}-\u{115B5}\u{115BC}\u{115BD}\u{115BF}\u{115C0}\u{115DC}\u{115DD}\u{11633}-\u{1163A}\u{1163D}\u{1163F}\u{11640}\u{11660}-\u{1166C}\u{116AB}\u{116AD}\u{116B0}-\u{116B5}\u{116B7}\u{1171D}-\u{1171F}\u{11722}-\u{11725}\u{11727}-\u{1172B}\u{1182F}-\u{11837}\u{11839}\u{1183A}\u{1193B}\u{1193C}\u{1193E}\u{11943}\u{119D4}-\u{119D7}\u{119DA}\u{119DB}\u{119E0}\u{11A01}-\u{11A06}\u{11A09}\u{11A0A}\u{11A33}-\u{11A38}\u{11A3B}-\u{11A3E}\u{11A47}\u{11A51}-\u{11A56}\u{11A59}-\u{11A5B}\u{11A8A}-\u{11A96}\u{11A98}\u{11A99}\u{11C30}-\u{11C36}\u{11C38}-\u{11C3D}\u{11C92}-\u{11CA7}\u{11CAA}-\u{11CB0}\u{11CB2}\u{11CB3}\u{11CB5}\u{11CB6}\u{11D31}-\u{11D36}\u{11D3A}\u{11D3C}\u{11D3D}\u{11D3F}-\u{11D45}\u{11D47}\u{11D90}\u{11D91}\u{11D95}\u{11D97}\u{11EF3}\u{11EF4}\u{11F00}\u{11F01}\u{11F36}-\u{11F3A}\u{11F40}\u{11F42}\u{11FD5}-\u{11FF1}\u{13440}\u{13447}-\u{13455}\u{16AF0}-\u{16AF4}\u{16B30}-\u{16B36}\u{16F4F}\u{16F8F}-\u{16F92}\u{16FE2}\u{16FE4}\u{1BC9D}\u{1BC9E}\u{1BCA0}-\u{1BCA3}\u{1CF00}-\u{1CF2D}\u{1CF30}-\u{1CF46}\u{1D167}-\u{1D169}\u{1D173}-\u{1D182}\u{1D185}-\u{1D18B}\u{1D1AA}-\u{1D1AD}\u{1D1E9}\u{1D1EA}\u{1D200}-\u{1D245}\u{1D300}-\u{1D356}\u{1D6DB}\u{1D715}\u{1D74F}\u{1D789}\u{1D7C3}\u{1D7CE}-\u{1D7FF}\u{1DA00}-\u{1DA36}\u{1DA3B}-\u{1DA6C}\u{1DA75}\u{1DA84}\u{1DA9B}-\u{1DA9F}\u{1DAA1}-\u{1DAAF}\u{1E000}-\u{1E006}\u{1E008}-\u{1E018}\u{1E01B}-\u{1E021}\u{1E023}\u{1E024}\u{1E026}-\u{1E02A}\u{1E08F}\u{1E130}-\u{1E136}\u{1E2AE}\u{1E2EC}-\u{1E2EF}\u{1E2FF}\u{1E4EC}-\u{1E4EF}\u{1E800}-\u{1E8C4}\u{1E8C7}-\u{1E8D6}\u{1E900}-\u{1E94B}\u{1E950}-\u{1E959}\u{1E95E}\u{1E95F}\u{1EC71}-\u{1ECB4}\u{1ED01}-\u{1ED3D}\u{1EE00}-\u{1EE03}\u{1EE05}-\u{1EE1F}\u{1EE21}\u{1EE22}\u{1EE24}\u{1EE27}\u{1EE29}-\u{1EE32}\u{1EE34}-\u{1EE37}\u{1EE39}\u{1EE3B}\u{1EE42}\u{1EE47}\u{1EE49}\u{1EE4B}\u{1EE4D}-\u{1EE4F}\u{1EE51}\u{1EE52}\u{1EE54}\u{1EE57}\u{1EE59}\u{1EE5B}\u{1EE5D}\u{1EE5F}\u{1EE61}\u{1EE62}\u{1EE64}\u{1EE67}-\u{1EE6A}\u{1EE6C}-\u{1EE72}\u{1EE74}-\u{1EE77}\u{1EE79}-\u{1EE7C}\u{1EE7E}\u{1EE80}-\u{1EE89}\u{1EE8B}-\u{1EE9B}\u{1EEA1}-\u{1EEA3}\u{1EEA5}-\u{1EEA9}\u{1EEAB}-\u{1EEBB}\u{1EEF0}\u{1EEF1}\u{1F000}-\u{1F02B}\u{1F030}-\u{1F093}\u{1F0A0}-\u{1F0AE}\u{1F0B1}-\u{1F0BF}\u{1F0C1}-\u{1F0CF}\u{1F0D1}-\u{1F0F5}\u{1F100}-\u{1F10F}\u{1F12F}\u{1F16A}-\u{1F16F}\u{1F1AD}\u{1F260}-\u{1F265}\u{1F300}-\u{1F6D7}\u{1F6DC}-\u{1F6EC}\u{1F6F0}-\u{1F6FC}\u{1F700}-\u{1F776}\u{1F77B}-\u{1F7D9}\u{1F7E0}-\u{1F7EB}\u{1F7F0}\u{1F800}-\u{1F80B}\u{1F810}-\u{1F847}\u{1F850}-\u{1F859}\u{1F860}-\u{1F887}\u{1F890}-\u{1F8AD}\u{1F8B0}\u{1F8B1}\u{1F900}-\u{1FA53}\u{1FA60}-\u{1FA6D}\u{1FA70}-\u{1FA7C}\u{1FA80}-\u{1FA88}\u{1FA90}-\u{1FABD}\u{1FABF}-\u{1FAC5}\u{1FACE}-\u{1FADB}\u{1FAE0}-\u{1FAE8}\u{1FAF0}-\u{1FAF8}\u{1FB00}-\u{1FB92}\u{1FB94}-\u{1FBCA}\u{1FBF0}-\u{1FBF9}\u{E0001}\u{E0020}-\u{E007F}\u{E0100}-\u{E01EF}]*$/u;
	const bidiS3 = /[0-9\xB2\xB3\xB9\u05BE\u05C0\u05C3\u05C6\u05D0-\u05EA\u05EF-\u05F4\u0600-\u0605\u0608\u060B\u060D\u061B-\u064A\u0660-\u0669\u066B-\u066F\u0671-\u06D5\u06DD\u06E5\u06E6\u06EE-\u070D\u070F\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u07FE-\u0815\u081A\u0824\u0828\u0830-\u083E\u0840-\u0858\u085E\u0860-\u086A\u0870-\u088E\u0890\u0891\u08A0-\u08C9\u08E2\u200F\u2070\u2074-\u2079\u2080-\u2089\u2488-\u249B\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBC2\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFC\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\u{102E1}-\u{102FB}\u{10800}-\u{10805}\u{10808}\u{1080A}-\u{10835}\u{10837}\u{10838}\u{1083C}\u{1083F}-\u{10855}\u{10857}-\u{1089E}\u{108A7}-\u{108AF}\u{108E0}-\u{108F2}\u{108F4}\u{108F5}\u{108FB}-\u{1091B}\u{10920}-\u{10939}\u{1093F}\u{10980}-\u{109B7}\u{109BC}-\u{109CF}\u{109D2}-\u{10A00}\u{10A10}-\u{10A13}\u{10A15}-\u{10A17}\u{10A19}-\u{10A35}\u{10A40}-\u{10A48}\u{10A50}-\u{10A58}\u{10A60}-\u{10A9F}\u{10AC0}-\u{10AE4}\u{10AEB}-\u{10AF6}\u{10B00}-\u{10B35}\u{10B40}-\u{10B55}\u{10B58}-\u{10B72}\u{10B78}-\u{10B91}\u{10B99}-\u{10B9C}\u{10BA9}-\u{10BAF}\u{10C00}-\u{10C48}\u{10C80}-\u{10CB2}\u{10CC0}-\u{10CF2}\u{10CFA}-\u{10D23}\u{10D30}-\u{10D39}\u{10E60}-\u{10E7E}\u{10E80}-\u{10EA9}\u{10EAD}\u{10EB0}\u{10EB1}\u{10F00}-\u{10F27}\u{10F30}-\u{10F45}\u{10F51}-\u{10F59}\u{10F70}-\u{10F81}\u{10F86}-\u{10F89}\u{10FB0}-\u{10FCB}\u{10FE0}-\u{10FF6}\u{1D7CE}-\u{1D7FF}\u{1E800}-\u{1E8C4}\u{1E8C7}-\u{1E8CF}\u{1E900}-\u{1E943}\u{1E94B}\u{1E950}-\u{1E959}\u{1E95E}\u{1E95F}\u{1EC71}-\u{1ECB4}\u{1ED01}-\u{1ED3D}\u{1EE00}-\u{1EE03}\u{1EE05}-\u{1EE1F}\u{1EE21}\u{1EE22}\u{1EE24}\u{1EE27}\u{1EE29}-\u{1EE32}\u{1EE34}-\u{1EE37}\u{1EE39}\u{1EE3B}\u{1EE42}\u{1EE47}\u{1EE49}\u{1EE4B}\u{1EE4D}-\u{1EE4F}\u{1EE51}\u{1EE52}\u{1EE54}\u{1EE57}\u{1EE59}\u{1EE5B}\u{1EE5D}\u{1EE5F}\u{1EE61}\u{1EE62}\u{1EE64}\u{1EE67}-\u{1EE6A}\u{1EE6C}-\u{1EE72}\u{1EE74}-\u{1EE77}\u{1EE79}-\u{1EE7C}\u{1EE7E}\u{1EE80}-\u{1EE89}\u{1EE8B}-\u{1EE9B}\u{1EEA1}-\u{1EEA3}\u{1EEA5}-\u{1EEA9}\u{1EEAB}-\u{1EEBB}\u{1F100}-\u{1F10A}\u{1FBF0}-\u{1FBF9}][\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09C1-\u09C4\u09CD\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3F\u0B41-\u0B44\u0B4D\u0B55\u0B56\u0B62\u0B63\u0B82\u0BC0\u0BCD\u0C00\u0C04\u0C3C\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CCC\u0CCD\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D41-\u0D44\u0D4D\u0D62\u0D63\u0D81\u0DCA\u0DD2-\u0DD4\u0DD6\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732\u1733\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u180F\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1ACE\u1B00-\u1B03\u1B34\u1B36-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302D\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\u{101FD}\u{102E0}\u{10376}-\u{1037A}\u{10A01}-\u{10A03}\u{10A05}\u{10A06}\u{10A0C}-\u{10A0F}\u{10A38}-\u{10A3A}\u{10A3F}\u{10AE5}\u{10AE6}\u{10D24}-\u{10D27}\u{10EAB}\u{10EAC}\u{10EFD}-\u{10EFF}\u{10F46}-\u{10F50}\u{10F82}-\u{10F85}\u{11001}\u{11038}-\u{11046}\u{11070}\u{11073}\u{11074}\u{1107F}-\u{11081}\u{110B3}-\u{110B6}\u{110B9}\u{110BA}\u{110C2}\u{11100}-\u{11102}\u{11127}-\u{1112B}\u{1112D}-\u{11134}\u{11173}\u{11180}\u{11181}\u{111B6}-\u{111BE}\u{111C9}-\u{111CC}\u{111CF}\u{1122F}-\u{11231}\u{11234}\u{11236}\u{11237}\u{1123E}\u{11241}\u{112DF}\u{112E3}-\u{112EA}\u{11300}\u{11301}\u{1133B}\u{1133C}\u{11340}\u{11366}-\u{1136C}\u{11370}-\u{11374}\u{11438}-\u{1143F}\u{11442}-\u{11444}\u{11446}\u{1145E}\u{114B3}-\u{114B8}\u{114BA}\u{114BF}\u{114C0}\u{114C2}\u{114C3}\u{115B2}-\u{115B5}\u{115BC}\u{115BD}\u{115BF}\u{115C0}\u{115DC}\u{115DD}\u{11633}-\u{1163A}\u{1163D}\u{1163F}\u{11640}\u{116AB}\u{116AD}\u{116B0}-\u{116B5}\u{116B7}\u{1171D}-\u{1171F}\u{11722}-\u{11725}\u{11727}-\u{1172B}\u{1182F}-\u{11837}\u{11839}\u{1183A}\u{1193B}\u{1193C}\u{1193E}\u{11943}\u{119D4}-\u{119D7}\u{119DA}\u{119DB}\u{119E0}\u{11A01}-\u{11A06}\u{11A09}\u{11A0A}\u{11A33}-\u{11A38}\u{11A3B}-\u{11A3E}\u{11A47}\u{11A51}-\u{11A56}\u{11A59}-\u{11A5B}\u{11A8A}-\u{11A96}\u{11A98}\u{11A99}\u{11C30}-\u{11C36}\u{11C38}-\u{11C3D}\u{11C92}-\u{11CA7}\u{11CAA}-\u{11CB0}\u{11CB2}\u{11CB3}\u{11CB5}\u{11CB6}\u{11D31}-\u{11D36}\u{11D3A}\u{11D3C}\u{11D3D}\u{11D3F}-\u{11D45}\u{11D47}\u{11D90}\u{11D91}\u{11D95}\u{11D97}\u{11EF3}\u{11EF4}\u{11F00}\u{11F01}\u{11F36}-\u{11F3A}\u{11F40}\u{11F42}\u{13440}\u{13447}-\u{13455}\u{16AF0}-\u{16AF4}\u{16B30}-\u{16B36}\u{16F4F}\u{16F8F}-\u{16F92}\u{16FE4}\u{1BC9D}\u{1BC9E}\u{1CF00}-\u{1CF2D}\u{1CF30}-\u{1CF46}\u{1D167}-\u{1D169}\u{1D17B}-\u{1D182}\u{1D185}-\u{1D18B}\u{1D1AA}-\u{1D1AD}\u{1D242}-\u{1D244}\u{1DA00}-\u{1DA36}\u{1DA3B}-\u{1DA6C}\u{1DA75}\u{1DA84}\u{1DA9B}-\u{1DA9F}\u{1DAA1}-\u{1DAAF}\u{1E000}-\u{1E006}\u{1E008}-\u{1E018}\u{1E01B}-\u{1E021}\u{1E023}\u{1E024}\u{1E026}-\u{1E02A}\u{1E08F}\u{1E130}-\u{1E136}\u{1E2AE}\u{1E2EC}-\u{1E2EF}\u{1E4EC}-\u{1E4EF}\u{1E8D0}-\u{1E8D6}\u{1E944}-\u{1E94A}\u{E0100}-\u{E01EF}]*$/u;
	const bidiS4EN = /[0-9\xB2\xB3\xB9\u06F0-\u06F9\u2070\u2074-\u2079\u2080-\u2089\u2488-\u249B\uFF10-\uFF19\u{102E1}-\u{102FB}\u{1D7CE}-\u{1D7FF}\u{1F100}-\u{1F10A}\u{1FBF0}-\u{1FBF9}]/u;
	const bidiS4AN = /[\u0600-\u0605\u0660-\u0669\u066B\u066C\u06DD\u0890\u0891\u08E2\u{10D30}-\u{10D39}\u{10E60}-\u{10E7E}]/u;
	const bidiS5 = /^[\0-\x08\x0E-\x1B!-\x84\x86-\u0377\u037A-\u037F\u0384-\u038A\u038C\u038E-\u03A1\u03A3-\u052F\u0531-\u0556\u0559-\u058A\u058D-\u058F\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0606\u0607\u0609\u060A\u060C\u060E-\u061A\u064B-\u065F\u066A\u0670\u06D6-\u06DC\u06DE-\u06E4\u06E7-\u06ED\u06F0-\u06F9\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07F6-\u07F9\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09FE\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A76\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AF1\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B77\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BFA\u0C00-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3C-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C5D\u0C60-\u0C63\u0C66-\u0C6F\u0C77-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDD\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1-\u0CF3\u0D00-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4F\u0D54-\u0D63\u0D66-\u0D7F\u0D81-\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2-\u0DF4\u0E01-\u0E3A\u0E3F-\u0E5B\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECE\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00-\u0F47\u0F49-\u0F6C\u0F71-\u0F97\u0F99-\u0FBC\u0FBE-\u0FCC\u0FCE-\u0FDA\u1000-\u10C5\u10C7\u10CD\u10D0-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u137C\u1380-\u1399\u13A0-\u13F5\u13F8-\u13FD\u1400-\u167F\u1681-\u169C\u16A0-\u16F8\u1700-\u1715\u171F-\u1736\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17DD\u17E0-\u17E9\u17F0-\u17F9\u1800-\u1819\u1820-\u1878\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1940\u1944-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u19DE-\u1A1B\u1A1E-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA0-\u1AAD\u1AB0-\u1ACE\u1B00-\u1B4C\u1B50-\u1B7E\u1B80-\u1BF3\u1BFC-\u1C37\u1C3B-\u1C49\u1C4D-\u1C88\u1C90-\u1CBA\u1CBD-\u1CC7\u1CD0-\u1CFA\u1D00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FC4\u1FC6-\u1FD3\u1FD6-\u1FDB\u1FDD-\u1FEF\u1FF2-\u1FF4\u1FF6-\u1FFE\u200B-\u200E\u2010-\u2027\u202F-\u205E\u2060-\u2064\u206A-\u2071\u2074-\u208E\u2090-\u209C\u20A0-\u20C0\u20D0-\u20F0\u2100-\u218B\u2190-\u2426\u2440-\u244A\u2460-\u2B73\u2B76-\u2B95\u2B97-\u2CF3\u2CF9-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D70\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2E5D\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3001-\u303F\u3041-\u3096\u3099-\u30FF\u3105-\u312F\u3131-\u318E\u3190-\u31E3\u31EF-\u321E\u3220-\uA48C\uA490-\uA4C6\uA4D0-\uA62B\uA640-\uA6F7\uA700-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA82C\uA830-\uA839\uA840-\uA877\uA880-\uA8C5\uA8CE-\uA8D9\uA8E0-\uA953\uA95F-\uA97C\uA980-\uA9CD\uA9CF-\uA9D9\uA9DE-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA5C-\uAAC2\uAADB-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB6B\uAB70-\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uD800-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1E\uFB29\uFD3E-\uFD4F\uFDCF\uFDFD-\uFE19\uFE20-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFEFF\uFF01-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFF9-\uFFFD\u{10000}-\u{1000B}\u{1000D}-\u{10026}\u{10028}-\u{1003A}\u{1003C}\u{1003D}\u{1003F}-\u{1004D}\u{10050}-\u{1005D}\u{10080}-\u{100FA}\u{10100}-\u{10102}\u{10107}-\u{10133}\u{10137}-\u{1018E}\u{10190}-\u{1019C}\u{101A0}\u{101D0}-\u{101FD}\u{10280}-\u{1029C}\u{102A0}-\u{102D0}\u{102E0}-\u{102FB}\u{10300}-\u{10323}\u{1032D}-\u{1034A}\u{10350}-\u{1037A}\u{10380}-\u{1039D}\u{1039F}-\u{103C3}\u{103C8}-\u{103D5}\u{10400}-\u{1049D}\u{104A0}-\u{104A9}\u{104B0}-\u{104D3}\u{104D8}-\u{104FB}\u{10500}-\u{10527}\u{10530}-\u{10563}\u{1056F}-\u{1057A}\u{1057C}-\u{1058A}\u{1058C}-\u{10592}\u{10594}\u{10595}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10600}-\u{10736}\u{10740}-\u{10755}\u{10760}-\u{10767}\u{10780}-\u{10785}\u{10787}-\u{107B0}\u{107B2}-\u{107BA}\u{1091F}\u{10A01}-\u{10A03}\u{10A05}\u{10A06}\u{10A0C}-\u{10A0F}\u{10A38}-\u{10A3A}\u{10A3F}\u{10AE5}\u{10AE6}\u{10B39}-\u{10B3F}\u{10D24}-\u{10D27}\u{10EAB}\u{10EAC}\u{10EFD}-\u{10EFF}\u{10F46}-\u{10F50}\u{10F82}-\u{10F85}\u{11000}-\u{1104D}\u{11052}-\u{11075}\u{1107F}-\u{110C2}\u{110CD}\u{110D0}-\u{110E8}\u{110F0}-\u{110F9}\u{11100}-\u{11134}\u{11136}-\u{11147}\u{11150}-\u{11176}\u{11180}-\u{111DF}\u{111E1}-\u{111F4}\u{11200}-\u{11211}\u{11213}-\u{11241}\u{11280}-\u{11286}\u{11288}\u{1128A}-\u{1128D}\u{1128F}-\u{1129D}\u{1129F}-\u{112A9}\u{112B0}-\u{112EA}\u{112F0}-\u{112F9}\u{11300}-\u{11303}\u{11305}-\u{1130C}\u{1130F}\u{11310}\u{11313}-\u{11328}\u{1132A}-\u{11330}\u{11332}\u{11333}\u{11335}-\u{11339}\u{1133B}-\u{11344}\u{11347}\u{11348}\u{1134B}-\u{1134D}\u{11350}\u{11357}\u{1135D}-\u{11363}\u{11366}-\u{1136C}\u{11370}-\u{11374}\u{11400}-\u{1145B}\u{1145D}-\u{11461}\u{11480}-\u{114C7}\u{114D0}-\u{114D9}\u{11580}-\u{115B5}\u{115B8}-\u{115DD}\u{11600}-\u{11644}\u{11650}-\u{11659}\u{11660}-\u{1166C}\u{11680}-\u{116B9}\u{116C0}-\u{116C9}\u{11700}-\u{1171A}\u{1171D}-\u{1172B}\u{11730}-\u{11746}\u{11800}-\u{1183B}\u{118A0}-\u{118F2}\u{118FF}-\u{11906}\u{11909}\u{1190C}-\u{11913}\u{11915}\u{11916}\u{11918}-\u{11935}\u{11937}\u{11938}\u{1193B}-\u{11946}\u{11950}-\u{11959}\u{119A0}-\u{119A7}\u{119AA}-\u{119D7}\u{119DA}-\u{119E4}\u{11A00}-\u{11A47}\u{11A50}-\u{11AA2}\u{11AB0}-\u{11AF8}\u{11B00}-\u{11B09}\u{11C00}-\u{11C08}\u{11C0A}-\u{11C36}\u{11C38}-\u{11C45}\u{11C50}-\u{11C6C}\u{11C70}-\u{11C8F}\u{11C92}-\u{11CA7}\u{11CA9}-\u{11CB6}\u{11D00}-\u{11D06}\u{11D08}\u{11D09}\u{11D0B}-\u{11D36}\u{11D3A}\u{11D3C}\u{11D3D}\u{11D3F}-\u{11D47}\u{11D50}-\u{11D59}\u{11D60}-\u{11D65}\u{11D67}\u{11D68}\u{11D6A}-\u{11D8E}\u{11D90}\u{11D91}\u{11D93}-\u{11D98}\u{11DA0}-\u{11DA9}\u{11EE0}-\u{11EF8}\u{11F00}-\u{11F10}\u{11F12}-\u{11F3A}\u{11F3E}-\u{11F59}\u{11FB0}\u{11FC0}-\u{11FF1}\u{11FFF}-\u{12399}\u{12400}-\u{1246E}\u{12470}-\u{12474}\u{12480}-\u{12543}\u{12F90}-\u{12FF2}\u{13000}-\u{13455}\u{14400}-\u{14646}\u{16800}-\u{16A38}\u{16A40}-\u{16A5E}\u{16A60}-\u{16A69}\u{16A6E}-\u{16ABE}\u{16AC0}-\u{16AC9}\u{16AD0}-\u{16AED}\u{16AF0}-\u{16AF5}\u{16B00}-\u{16B45}\u{16B50}-\u{16B59}\u{16B5B}-\u{16B61}\u{16B63}-\u{16B77}\u{16B7D}-\u{16B8F}\u{16E40}-\u{16E9A}\u{16F00}-\u{16F4A}\u{16F4F}-\u{16F87}\u{16F8F}-\u{16F9F}\u{16FE0}-\u{16FE4}\u{16FF0}\u{16FF1}\u{17000}-\u{187F7}\u{18800}-\u{18CD5}\u{18D00}-\u{18D08}\u{1AFF0}-\u{1AFF3}\u{1AFF5}-\u{1AFFB}\u{1AFFD}\u{1AFFE}\u{1B000}-\u{1B122}\u{1B132}\u{1B150}-\u{1B152}\u{1B155}\u{1B164}-\u{1B167}\u{1B170}-\u{1B2FB}\u{1BC00}-\u{1BC6A}\u{1BC70}-\u{1BC7C}\u{1BC80}-\u{1BC88}\u{1BC90}-\u{1BC99}\u{1BC9C}-\u{1BCA3}\u{1CF00}-\u{1CF2D}\u{1CF30}-\u{1CF46}\u{1CF50}-\u{1CFC3}\u{1D000}-\u{1D0F5}\u{1D100}-\u{1D126}\u{1D129}-\u{1D1EA}\u{1D200}-\u{1D245}\u{1D2C0}-\u{1D2D3}\u{1D2E0}-\u{1D2F3}\u{1D300}-\u{1D356}\u{1D360}-\u{1D378}\u{1D400}-\u{1D454}\u{1D456}-\u{1D49C}\u{1D49E}\u{1D49F}\u{1D4A2}\u{1D4A5}\u{1D4A6}\u{1D4A9}-\u{1D4AC}\u{1D4AE}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D505}\u{1D507}-\u{1D50A}\u{1D50D}-\u{1D514}\u{1D516}-\u{1D51C}\u{1D51E}-\u{1D539}\u{1D53B}-\u{1D53E}\u{1D540}-\u{1D544}\u{1D546}\u{1D54A}-\u{1D550}\u{1D552}-\u{1D6A5}\u{1D6A8}-\u{1D7CB}\u{1D7CE}-\u{1DA8B}\u{1DA9B}-\u{1DA9F}\u{1DAA1}-\u{1DAAF}\u{1DF00}-\u{1DF1E}\u{1DF25}-\u{1DF2A}\u{1E000}-\u{1E006}\u{1E008}-\u{1E018}\u{1E01B}-\u{1E021}\u{1E023}\u{1E024}\u{1E026}-\u{1E02A}\u{1E030}-\u{1E06D}\u{1E08F}\u{1E100}-\u{1E12C}\u{1E130}-\u{1E13D}\u{1E140}-\u{1E149}\u{1E14E}\u{1E14F}\u{1E290}-\u{1E2AE}\u{1E2C0}-\u{1E2F9}\u{1E2FF}\u{1E4D0}-\u{1E4F9}\u{1E7E0}-\u{1E7E6}\u{1E7E8}-\u{1E7EB}\u{1E7ED}\u{1E7EE}\u{1E7F0}-\u{1E7FE}\u{1E8D0}-\u{1E8D6}\u{1E944}-\u{1E94A}\u{1EEF0}\u{1EEF1}\u{1F000}-\u{1F02B}\u{1F030}-\u{1F093}\u{1F0A0}-\u{1F0AE}\u{1F0B1}-\u{1F0BF}\u{1F0C1}-\u{1F0CF}\u{1F0D1}-\u{1F0F5}\u{1F100}-\u{1F1AD}\u{1F1E6}-\u{1F202}\u{1F210}-\u{1F23B}\u{1F240}-\u{1F248}\u{1F250}\u{1F251}\u{1F260}-\u{1F265}\u{1F300}-\u{1F6D7}\u{1F6DC}-\u{1F6EC}\u{1F6F0}-\u{1F6FC}\u{1F700}-\u{1F776}\u{1F77B}-\u{1F7D9}\u{1F7E0}-\u{1F7EB}\u{1F7F0}\u{1F800}-\u{1F80B}\u{1F810}-\u{1F847}\u{1F850}-\u{1F859}\u{1F860}-\u{1F887}\u{1F890}-\u{1F8AD}\u{1F8B0}\u{1F8B1}\u{1F900}-\u{1FA53}\u{1FA60}-\u{1FA6D}\u{1FA70}-\u{1FA7C}\u{1FA80}-\u{1FA88}\u{1FA90}-\u{1FABD}\u{1FABF}-\u{1FAC5}\u{1FACE}-\u{1FADB}\u{1FAE0}-\u{1FAE8}\u{1FAF0}-\u{1FAF8}\u{1FB00}-\u{1FB92}\u{1FB94}-\u{1FBCA}\u{1FBF0}-\u{1FBF9}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B739}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2EBF0}-\u{2EE5D}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}\u{31350}-\u{323AF}\u{E0001}\u{E0020}-\u{E007F}\u{E0100}-\u{E01EF}\u{F0000}-\u{FFFFD}\u{100000}-\u{10FFFD}]*$/u;
	const bidiS6 = /[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02B8\u02BB-\u02C1\u02D0\u02D1\u02E0-\u02E4\u02EE\u0370-\u0373\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0482\u048A-\u052F\u0531-\u0556\u0559-\u0589\u06F0-\u06F9\u0903-\u0939\u093B\u093D-\u0940\u0949-\u094C\u094E-\u0950\u0958-\u0961\u0964-\u0980\u0982\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD-\u09C0\u09C7\u09C8\u09CB\u09CC\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09FA\u09FC\u09FD\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3E-\u0A40\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A76\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD-\u0AC0\u0AC9\u0ACB\u0ACC\u0AD0\u0AE0\u0AE1\u0AE6-\u0AF0\u0AF9\u0B02\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B3E\u0B40\u0B47\u0B48\u0B4B\u0B4C\u0B57\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE\u0BBF\u0BC1\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0BD0\u0BD7\u0BE6-\u0BF2\u0C01-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C41-\u0C44\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C66-\u0C6F\u0C77\u0C7F\u0C80\u0C82-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD-\u0CC4\u0CC6-\u0CC8\u0CCA\u0CCB\u0CD5\u0CD6\u0CDD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1-\u0CF3\u0D02-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D4E\u0D4F\u0D54-\u0D61\u0D66-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCF-\u0DD1\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2-\u0DF4\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E4F-\u0E5B\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00-\u0F17\u0F1A-\u0F34\u0F36\u0F38\u0F3E-\u0F47\u0F49-\u0F6C\u0F7F\u0F85\u0F88-\u0F8C\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE-\u0FDA\u1000-\u102C\u1031\u1038\u103B\u103C\u103F-\u1057\u105A-\u105D\u1061-\u1070\u1075-\u1081\u1083\u1084\u1087-\u108C\u108E-\u109C\u109E-\u10C5\u10C7\u10CD\u10D0-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1360-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u167F\u1681-\u169A\u16A0-\u16F8\u1700-\u1711\u1715\u171F-\u1731\u1734-\u1736\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17B6\u17BE-\u17C5\u17C7\u17C8\u17D4-\u17DA\u17DC\u17E0-\u17E9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1923-\u1926\u1929-\u192B\u1930\u1931\u1933-\u1938\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A19\u1A1A\u1A1E-\u1A55\u1A57\u1A61\u1A63\u1A64\u1A6D-\u1A72\u1A80-\u1A89\u1A90-\u1A99\u1AA0-\u1AAD\u1B04-\u1B33\u1B35\u1B3B\u1B3D-\u1B41\u1B43-\u1B4C\u1B50-\u1B6A\u1B74-\u1B7E\u1B82-\u1BA1\u1BA6\u1BA7\u1BAA\u1BAE-\u1BE5\u1BE7\u1BEA-\u1BEC\u1BEE\u1BF2\u1BF3\u1BFC-\u1C2B\u1C34\u1C35\u1C3B-\u1C49\u1C4D-\u1C88\u1C90-\u1CBA\u1CBD-\u1CC7\u1CD3\u1CE1\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5-\u1CF7\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200E\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u214F\u2160-\u2188\u2336-\u237A\u2395\u2488-\u24E9\u26AC\u2800-\u28FF\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D70\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u302E\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3190-\u31BF\u31F0-\u321C\u3220-\u324F\u3260-\u327B\u327F-\u32B0\u32C0-\u32CB\u32D0-\u3376\u337B-\u33DD\u33E0-\u33FE\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA60C\uA610-\uA62B\uA640-\uA66E\uA680-\uA69D\uA6A0-\uA6EF\uA6F2-\uA6F7\uA722-\uA787\uA789-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA824\uA827\uA830-\uA837\uA840-\uA873\uA880-\uA8C3\uA8CE-\uA8D9\uA8F2-\uA8FE\uA900-\uA925\uA92E-\uA946\uA952\uA953\uA95F-\uA97C\uA983-\uA9B2\uA9B4\uA9B5\uA9BA\uA9BB\uA9BE-\uA9CD\uA9CF-\uA9D9\uA9DE-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA2F\uAA30\uAA33\uAA34\uAA40-\uAA42\uAA44-\uAA4B\uAA4D\uAA50-\uAA59\uAA5C-\uAA7B\uAA7D-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAAEB\uAAEE-\uAAF5\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB69\uAB70-\uABE4\uABE6\uABE7\uABE9-\uABEC\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uD800-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u{10000}-\u{1000B}\u{1000D}-\u{10026}\u{10028}-\u{1003A}\u{1003C}\u{1003D}\u{1003F}-\u{1004D}\u{10050}-\u{1005D}\u{10080}-\u{100FA}\u{10100}\u{10102}\u{10107}-\u{10133}\u{10137}-\u{1013F}\u{1018D}\u{1018E}\u{101D0}-\u{101FC}\u{10280}-\u{1029C}\u{102A0}-\u{102D0}\u{102E1}-\u{102FB}\u{10300}-\u{10323}\u{1032D}-\u{1034A}\u{10350}-\u{10375}\u{10380}-\u{1039D}\u{1039F}-\u{103C3}\u{103C8}-\u{103D5}\u{10400}-\u{1049D}\u{104A0}-\u{104A9}\u{104B0}-\u{104D3}\u{104D8}-\u{104FB}\u{10500}-\u{10527}\u{10530}-\u{10563}\u{1056F}-\u{1057A}\u{1057C}-\u{1058A}\u{1058C}-\u{10592}\u{10594}\u{10595}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10600}-\u{10736}\u{10740}-\u{10755}\u{10760}-\u{10767}\u{10780}-\u{10785}\u{10787}-\u{107B0}\u{107B2}-\u{107BA}\u{11000}\u{11002}-\u{11037}\u{11047}-\u{1104D}\u{11066}-\u{1106F}\u{11071}\u{11072}\u{11075}\u{11082}-\u{110B2}\u{110B7}\u{110B8}\u{110BB}-\u{110C1}\u{110CD}\u{110D0}-\u{110E8}\u{110F0}-\u{110F9}\u{11103}-\u{11126}\u{1112C}\u{11136}-\u{11147}\u{11150}-\u{11172}\u{11174}-\u{11176}\u{11182}-\u{111B5}\u{111BF}-\u{111C8}\u{111CD}\u{111CE}\u{111D0}-\u{111DF}\u{111E1}-\u{111F4}\u{11200}-\u{11211}\u{11213}-\u{1122E}\u{11232}\u{11233}\u{11235}\u{11238}-\u{1123D}\u{1123F}\u{11240}\u{11280}-\u{11286}\u{11288}\u{1128A}-\u{1128D}\u{1128F}-\u{1129D}\u{1129F}-\u{112A9}\u{112B0}-\u{112DE}\u{112E0}-\u{112E2}\u{112F0}-\u{112F9}\u{11302}\u{11303}\u{11305}-\u{1130C}\u{1130F}\u{11310}\u{11313}-\u{11328}\u{1132A}-\u{11330}\u{11332}\u{11333}\u{11335}-\u{11339}\u{1133D}-\u{1133F}\u{11341}-\u{11344}\u{11347}\u{11348}\u{1134B}-\u{1134D}\u{11350}\u{11357}\u{1135D}-\u{11363}\u{11400}-\u{11437}\u{11440}\u{11441}\u{11445}\u{11447}-\u{1145B}\u{1145D}\u{1145F}-\u{11461}\u{11480}-\u{114B2}\u{114B9}\u{114BB}-\u{114BE}\u{114C1}\u{114C4}-\u{114C7}\u{114D0}-\u{114D9}\u{11580}-\u{115B1}\u{115B8}-\u{115BB}\u{115BE}\u{115C1}-\u{115DB}\u{11600}-\u{11632}\u{1163B}\u{1163C}\u{1163E}\u{11641}-\u{11644}\u{11650}-\u{11659}\u{11680}-\u{116AA}\u{116AC}\u{116AE}\u{116AF}\u{116B6}\u{116B8}\u{116B9}\u{116C0}-\u{116C9}\u{11700}-\u{1171A}\u{11720}\u{11721}\u{11726}\u{11730}-\u{11746}\u{11800}-\u{1182E}\u{11838}\u{1183B}\u{118A0}-\u{118F2}\u{118FF}-\u{11906}\u{11909}\u{1190C}-\u{11913}\u{11915}\u{11916}\u{11918}-\u{11935}\u{11937}\u{11938}\u{1193D}\u{1193F}-\u{11942}\u{11944}-\u{11946}\u{11950}-\u{11959}\u{119A0}-\u{119A7}\u{119AA}-\u{119D3}\u{119DC}-\u{119DF}\u{119E1}-\u{119E4}\u{11A00}\u{11A07}\u{11A08}\u{11A0B}-\u{11A32}\u{11A39}\u{11A3A}\u{11A3F}-\u{11A46}\u{11A50}\u{11A57}\u{11A58}\u{11A5C}-\u{11A89}\u{11A97}\u{11A9A}-\u{11AA2}\u{11AB0}-\u{11AF8}\u{11B00}-\u{11B09}\u{11C00}-\u{11C08}\u{11C0A}-\u{11C2F}\u{11C3E}-\u{11C45}\u{11C50}-\u{11C6C}\u{11C70}-\u{11C8F}\u{11CA9}\u{11CB1}\u{11CB4}\u{11D00}-\u{11D06}\u{11D08}\u{11D09}\u{11D0B}-\u{11D30}\u{11D46}\u{11D50}-\u{11D59}\u{11D60}-\u{11D65}\u{11D67}\u{11D68}\u{11D6A}-\u{11D8E}\u{11D93}\u{11D94}\u{11D96}\u{11D98}\u{11DA0}-\u{11DA9}\u{11EE0}-\u{11EF2}\u{11EF5}-\u{11EF8}\u{11F02}-\u{11F10}\u{11F12}-\u{11F35}\u{11F3E}\u{11F3F}\u{11F41}\u{11F43}-\u{11F59}\u{11FB0}\u{11FC0}-\u{11FD4}\u{11FFF}-\u{12399}\u{12400}-\u{1246E}\u{12470}-\u{12474}\u{12480}-\u{12543}\u{12F90}-\u{12FF2}\u{13000}-\u{1343F}\u{13441}-\u{13446}\u{14400}-\u{14646}\u{16800}-\u{16A38}\u{16A40}-\u{16A5E}\u{16A60}-\u{16A69}\u{16A6E}-\u{16ABE}\u{16AC0}-\u{16AC9}\u{16AD0}-\u{16AED}\u{16AF5}\u{16B00}-\u{16B2F}\u{16B37}-\u{16B45}\u{16B50}-\u{16B59}\u{16B5B}-\u{16B61}\u{16B63}-\u{16B77}\u{16B7D}-\u{16B8F}\u{16E40}-\u{16E9A}\u{16F00}-\u{16F4A}\u{16F50}-\u{16F87}\u{16F93}-\u{16F9F}\u{16FE0}\u{16FE1}\u{16FE3}\u{16FF0}\u{16FF1}\u{17000}-\u{187F7}\u{18800}-\u{18CD5}\u{18D00}-\u{18D08}\u{1AFF0}-\u{1AFF3}\u{1AFF5}-\u{1AFFB}\u{1AFFD}\u{1AFFE}\u{1B000}-\u{1B122}\u{1B132}\u{1B150}-\u{1B152}\u{1B155}\u{1B164}-\u{1B167}\u{1B170}-\u{1B2FB}\u{1BC00}-\u{1BC6A}\u{1BC70}-\u{1BC7C}\u{1BC80}-\u{1BC88}\u{1BC90}-\u{1BC99}\u{1BC9C}\u{1BC9F}\u{1CF50}-\u{1CFC3}\u{1D000}-\u{1D0F5}\u{1D100}-\u{1D126}\u{1D129}-\u{1D166}\u{1D16A}-\u{1D172}\u{1D183}\u{1D184}\u{1D18C}-\u{1D1A9}\u{1D1AE}-\u{1D1E8}\u{1D2C0}-\u{1D2D3}\u{1D2E0}-\u{1D2F3}\u{1D360}-\u{1D378}\u{1D400}-\u{1D454}\u{1D456}-\u{1D49C}\u{1D49E}\u{1D49F}\u{1D4A2}\u{1D4A5}\u{1D4A6}\u{1D4A9}-\u{1D4AC}\u{1D4AE}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D505}\u{1D507}-\u{1D50A}\u{1D50D}-\u{1D514}\u{1D516}-\u{1D51C}\u{1D51E}-\u{1D539}\u{1D53B}-\u{1D53E}\u{1D540}-\u{1D544}\u{1D546}\u{1D54A}-\u{1D550}\u{1D552}-\u{1D6A5}\u{1D6A8}-\u{1D6DA}\u{1D6DC}-\u{1D714}\u{1D716}-\u{1D74E}\u{1D750}-\u{1D788}\u{1D78A}-\u{1D7C2}\u{1D7C4}-\u{1D7CB}\u{1D7CE}-\u{1D9FF}\u{1DA37}-\u{1DA3A}\u{1DA6D}-\u{1DA74}\u{1DA76}-\u{1DA83}\u{1DA85}-\u{1DA8B}\u{1DF00}-\u{1DF1E}\u{1DF25}-\u{1DF2A}\u{1E030}-\u{1E06D}\u{1E100}-\u{1E12C}\u{1E137}-\u{1E13D}\u{1E140}-\u{1E149}\u{1E14E}\u{1E14F}\u{1E290}-\u{1E2AD}\u{1E2C0}-\u{1E2EB}\u{1E2F0}-\u{1E2F9}\u{1E4D0}-\u{1E4EB}\u{1E4F0}-\u{1E4F9}\u{1E7E0}-\u{1E7E6}\u{1E7E8}-\u{1E7EB}\u{1E7ED}\u{1E7EE}\u{1E7F0}-\u{1E7FE}\u{1F100}-\u{1F10A}\u{1F110}-\u{1F12E}\u{1F130}-\u{1F169}\u{1F170}-\u{1F1AC}\u{1F1E6}-\u{1F202}\u{1F210}-\u{1F23B}\u{1F240}-\u{1F248}\u{1F250}\u{1F251}\u{1FBF0}-\u{1FBF9}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B739}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2EBF0}-\u{2EE5D}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}\u{31350}-\u{323AF}\u{F0000}-\u{FFFFD}\u{100000}-\u{10FFFD}][\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09C1-\u09C4\u09CD\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3F\u0B41-\u0B44\u0B4D\u0B55\u0B56\u0B62\u0B63\u0B82\u0BC0\u0BCD\u0C00\u0C04\u0C3C\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CCC\u0CCD\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D41-\u0D44\u0D4D\u0D62\u0D63\u0D81\u0DCA\u0DD2-\u0DD4\u0DD6\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732\u1733\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u180F\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1ACE\u1B00-\u1B03\u1B34\u1B36-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302D\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\u{101FD}\u{102E0}\u{10376}-\u{1037A}\u{10A01}-\u{10A03}\u{10A05}\u{10A06}\u{10A0C}-\u{10A0F}\u{10A38}-\u{10A3A}\u{10A3F}\u{10AE5}\u{10AE6}\u{10D24}-\u{10D27}\u{10EAB}\u{10EAC}\u{10EFD}-\u{10EFF}\u{10F46}-\u{10F50}\u{10F82}-\u{10F85}\u{11001}\u{11038}-\u{11046}\u{11070}\u{11073}\u{11074}\u{1107F}-\u{11081}\u{110B3}-\u{110B6}\u{110B9}\u{110BA}\u{110C2}\u{11100}-\u{11102}\u{11127}-\u{1112B}\u{1112D}-\u{11134}\u{11173}\u{11180}\u{11181}\u{111B6}-\u{111BE}\u{111C9}-\u{111CC}\u{111CF}\u{1122F}-\u{11231}\u{11234}\u{11236}\u{11237}\u{1123E}\u{11241}\u{112DF}\u{112E3}-\u{112EA}\u{11300}\u{11301}\u{1133B}\u{1133C}\u{11340}\u{11366}-\u{1136C}\u{11370}-\u{11374}\u{11438}-\u{1143F}\u{11442}-\u{11444}\u{11446}\u{1145E}\u{114B3}-\u{114B8}\u{114BA}\u{114BF}\u{114C0}\u{114C2}\u{114C3}\u{115B2}-\u{115B5}\u{115BC}\u{115BD}\u{115BF}\u{115C0}\u{115DC}\u{115DD}\u{11633}-\u{1163A}\u{1163D}\u{1163F}\u{11640}\u{116AB}\u{116AD}\u{116B0}-\u{116B5}\u{116B7}\u{1171D}-\u{1171F}\u{11722}-\u{11725}\u{11727}-\u{1172B}\u{1182F}-\u{11837}\u{11839}\u{1183A}\u{1193B}\u{1193C}\u{1193E}\u{11943}\u{119D4}-\u{119D7}\u{119DA}\u{119DB}\u{119E0}\u{11A01}-\u{11A06}\u{11A09}\u{11A0A}\u{11A33}-\u{11A38}\u{11A3B}-\u{11A3E}\u{11A47}\u{11A51}-\u{11A56}\u{11A59}-\u{11A5B}\u{11A8A}-\u{11A96}\u{11A98}\u{11A99}\u{11C30}-\u{11C36}\u{11C38}-\u{11C3D}\u{11C92}-\u{11CA7}\u{11CAA}-\u{11CB0}\u{11CB2}\u{11CB3}\u{11CB5}\u{11CB6}\u{11D31}-\u{11D36}\u{11D3A}\u{11D3C}\u{11D3D}\u{11D3F}-\u{11D45}\u{11D47}\u{11D90}\u{11D91}\u{11D95}\u{11D97}\u{11EF3}\u{11EF4}\u{11F00}\u{11F01}\u{11F36}-\u{11F3A}\u{11F40}\u{11F42}\u{13440}\u{13447}-\u{13455}\u{16AF0}-\u{16AF4}\u{16B30}-\u{16B36}\u{16F4F}\u{16F8F}-\u{16F92}\u{16FE4}\u{1BC9D}\u{1BC9E}\u{1CF00}-\u{1CF2D}\u{1CF30}-\u{1CF46}\u{1D167}-\u{1D169}\u{1D17B}-\u{1D182}\u{1D185}-\u{1D18B}\u{1D1AA}-\u{1D1AD}\u{1D242}-\u{1D244}\u{1DA00}-\u{1DA36}\u{1DA3B}-\u{1DA6C}\u{1DA75}\u{1DA84}\u{1DA9B}-\u{1DA9F}\u{1DAA1}-\u{1DAAF}\u{1E000}-\u{1E006}\u{1E008}-\u{1E018}\u{1E01B}-\u{1E021}\u{1E023}\u{1E024}\u{1E026}-\u{1E02A}\u{1E08F}\u{1E130}-\u{1E136}\u{1E2AE}\u{1E2EC}-\u{1E2EF}\u{1E4EC}-\u{1E4EF}\u{1E8D0}-\u{1E8D6}\u{1E944}-\u{1E94A}\u{E0100}-\u{E01EF}]*$/u;

	regexes = {
	    combiningMarks,
	  combiningClassVirama,
	  validZWNJ,
	  bidiDomain,
	  bidiS1LTR,
	  bidiS1RTL,
	  bidiS2,
	  bidiS3,
	  bidiS4EN,
	  bidiS4AN,
	  bidiS5,
	  bidiS6
	  };
	return regexes;
}

var require$$2 = [
	[
		[
			0,
			44
		],
		4
	],
	[
		[
			45,
			46
		],
		2
	],
	[
		47,
		4
	],
	[
		[
			48,
			57
		],
		2
	],
	[
		[
			58,
			64
		],
		4
	],
	[
		65,
		1,
		"a"
	],
	[
		66,
		1,
		"b"
	],
	[
		67,
		1,
		"c"
	],
	[
		68,
		1,
		"d"
	],
	[
		69,
		1,
		"e"
	],
	[
		70,
		1,
		"f"
	],
	[
		71,
		1,
		"g"
	],
	[
		72,
		1,
		"h"
	],
	[
		73,
		1,
		"i"
	],
	[
		74,
		1,
		"j"
	],
	[
		75,
		1,
		"k"
	],
	[
		76,
		1,
		"l"
	],
	[
		77,
		1,
		"m"
	],
	[
		78,
		1,
		"n"
	],
	[
		79,
		1,
		"o"
	],
	[
		80,
		1,
		"p"
	],
	[
		81,
		1,
		"q"
	],
	[
		82,
		1,
		"r"
	],
	[
		83,
		1,
		"s"
	],
	[
		84,
		1,
		"t"
	],
	[
		85,
		1,
		"u"
	],
	[
		86,
		1,
		"v"
	],
	[
		87,
		1,
		"w"
	],
	[
		88,
		1,
		"x"
	],
	[
		89,
		1,
		"y"
	],
	[
		90,
		1,
		"z"
	],
	[
		[
			91,
			96
		],
		4
	],
	[
		[
			97,
			122
		],
		2
	],
	[
		[
			123,
			127
		],
		4
	],
	[
		[
			128,
			159
		],
		3
	],
	[
		160,
		5,
		" "
	],
	[
		[
			161,
			167
		],
		2
	],
	[
		168,
		5,
		" ̈"
	],
	[
		169,
		2
	],
	[
		170,
		1,
		"a"
	],
	[
		[
			171,
			172
		],
		2
	],
	[
		173,
		7
	],
	[
		174,
		2
	],
	[
		175,
		5,
		" ̄"
	],
	[
		[
			176,
			177
		],
		2
	],
	[
		178,
		1,
		"2"
	],
	[
		179,
		1,
		"3"
	],
	[
		180,
		5,
		" ́"
	],
	[
		181,
		1,
		"μ"
	],
	[
		182,
		2
	],
	[
		183,
		2
	],
	[
		184,
		5,
		" ̧"
	],
	[
		185,
		1,
		"1"
	],
	[
		186,
		1,
		"o"
	],
	[
		187,
		2
	],
	[
		188,
		1,
		"1⁄4"
	],
	[
		189,
		1,
		"1⁄2"
	],
	[
		190,
		1,
		"3⁄4"
	],
	[
		191,
		2
	],
	[
		192,
		1,
		"à"
	],
	[
		193,
		1,
		"á"
	],
	[
		194,
		1,
		"â"
	],
	[
		195,
		1,
		"ã"
	],
	[
		196,
		1,
		"ä"
	],
	[
		197,
		1,
		"å"
	],
	[
		198,
		1,
		"æ"
	],
	[
		199,
		1,
		"ç"
	],
	[
		200,
		1,
		"è"
	],
	[
		201,
		1,
		"é"
	],
	[
		202,
		1,
		"ê"
	],
	[
		203,
		1,
		"ë"
	],
	[
		204,
		1,
		"ì"
	],
	[
		205,
		1,
		"í"
	],
	[
		206,
		1,
		"î"
	],
	[
		207,
		1,
		"ï"
	],
	[
		208,
		1,
		"ð"
	],
	[
		209,
		1,
		"ñ"
	],
	[
		210,
		1,
		"ò"
	],
	[
		211,
		1,
		"ó"
	],
	[
		212,
		1,
		"ô"
	],
	[
		213,
		1,
		"õ"
	],
	[
		214,
		1,
		"ö"
	],
	[
		215,
		2
	],
	[
		216,
		1,
		"ø"
	],
	[
		217,
		1,
		"ù"
	],
	[
		218,
		1,
		"ú"
	],
	[
		219,
		1,
		"û"
	],
	[
		220,
		1,
		"ü"
	],
	[
		221,
		1,
		"ý"
	],
	[
		222,
		1,
		"þ"
	],
	[
		223,
		6,
		"ss"
	],
	[
		[
			224,
			246
		],
		2
	],
	[
		247,
		2
	],
	[
		[
			248,
			255
		],
		2
	],
	[
		256,
		1,
		"ā"
	],
	[
		257,
		2
	],
	[
		258,
		1,
		"ă"
	],
	[
		259,
		2
	],
	[
		260,
		1,
		"ą"
	],
	[
		261,
		2
	],
	[
		262,
		1,
		"ć"
	],
	[
		263,
		2
	],
	[
		264,
		1,
		"ĉ"
	],
	[
		265,
		2
	],
	[
		266,
		1,
		"ċ"
	],
	[
		267,
		2
	],
	[
		268,
		1,
		"č"
	],
	[
		269,
		2
	],
	[
		270,
		1,
		"ď"
	],
	[
		271,
		2
	],
	[
		272,
		1,
		"đ"
	],
	[
		273,
		2
	],
	[
		274,
		1,
		"ē"
	],
	[
		275,
		2
	],
	[
		276,
		1,
		"ĕ"
	],
	[
		277,
		2
	],
	[
		278,
		1,
		"ė"
	],
	[
		279,
		2
	],
	[
		280,
		1,
		"ę"
	],
	[
		281,
		2
	],
	[
		282,
		1,
		"ě"
	],
	[
		283,
		2
	],
	[
		284,
		1,
		"ĝ"
	],
	[
		285,
		2
	],
	[
		286,
		1,
		"ğ"
	],
	[
		287,
		2
	],
	[
		288,
		1,
		"ġ"
	],
	[
		289,
		2
	],
	[
		290,
		1,
		"ģ"
	],
	[
		291,
		2
	],
	[
		292,
		1,
		"ĥ"
	],
	[
		293,
		2
	],
	[
		294,
		1,
		"ħ"
	],
	[
		295,
		2
	],
	[
		296,
		1,
		"ĩ"
	],
	[
		297,
		2
	],
	[
		298,
		1,
		"ī"
	],
	[
		299,
		2
	],
	[
		300,
		1,
		"ĭ"
	],
	[
		301,
		2
	],
	[
		302,
		1,
		"į"
	],
	[
		303,
		2
	],
	[
		304,
		1,
		"i̇"
	],
	[
		305,
		2
	],
	[
		[
			306,
			307
		],
		1,
		"ij"
	],
	[
		308,
		1,
		"ĵ"
	],
	[
		309,
		2
	],
	[
		310,
		1,
		"ķ"
	],
	[
		[
			311,
			312
		],
		2
	],
	[
		313,
		1,
		"ĺ"
	],
	[
		314,
		2
	],
	[
		315,
		1,
		"ļ"
	],
	[
		316,
		2
	],
	[
		317,
		1,
		"ľ"
	],
	[
		318,
		2
	],
	[
		[
			319,
			320
		],
		1,
		"l·"
	],
	[
		321,
		1,
		"ł"
	],
	[
		322,
		2
	],
	[
		323,
		1,
		"ń"
	],
	[
		324,
		2
	],
	[
		325,
		1,
		"ņ"
	],
	[
		326,
		2
	],
	[
		327,
		1,
		"ň"
	],
	[
		328,
		2
	],
	[
		329,
		1,
		"ʼn"
	],
	[
		330,
		1,
		"ŋ"
	],
	[
		331,
		2
	],
	[
		332,
		1,
		"ō"
	],
	[
		333,
		2
	],
	[
		334,
		1,
		"ŏ"
	],
	[
		335,
		2
	],
	[
		336,
		1,
		"ő"
	],
	[
		337,
		2
	],
	[
		338,
		1,
		"œ"
	],
	[
		339,
		2
	],
	[
		340,
		1,
		"ŕ"
	],
	[
		341,
		2
	],
	[
		342,
		1,
		"ŗ"
	],
	[
		343,
		2
	],
	[
		344,
		1,
		"ř"
	],
	[
		345,
		2
	],
	[
		346,
		1,
		"ś"
	],
	[
		347,
		2
	],
	[
		348,
		1,
		"ŝ"
	],
	[
		349,
		2
	],
	[
		350,
		1,
		"ş"
	],
	[
		351,
		2
	],
	[
		352,
		1,
		"š"
	],
	[
		353,
		2
	],
	[
		354,
		1,
		"ţ"
	],
	[
		355,
		2
	],
	[
		356,
		1,
		"ť"
	],
	[
		357,
		2
	],
	[
		358,
		1,
		"ŧ"
	],
	[
		359,
		2
	],
	[
		360,
		1,
		"ũ"
	],
	[
		361,
		2
	],
	[
		362,
		1,
		"ū"
	],
	[
		363,
		2
	],
	[
		364,
		1,
		"ŭ"
	],
	[
		365,
		2
	],
	[
		366,
		1,
		"ů"
	],
	[
		367,
		2
	],
	[
		368,
		1,
		"ű"
	],
	[
		369,
		2
	],
	[
		370,
		1,
		"ų"
	],
	[
		371,
		2
	],
	[
		372,
		1,
		"ŵ"
	],
	[
		373,
		2
	],
	[
		374,
		1,
		"ŷ"
	],
	[
		375,
		2
	],
	[
		376,
		1,
		"ÿ"
	],
	[
		377,
		1,
		"ź"
	],
	[
		378,
		2
	],
	[
		379,
		1,
		"ż"
	],
	[
		380,
		2
	],
	[
		381,
		1,
		"ž"
	],
	[
		382,
		2
	],
	[
		383,
		1,
		"s"
	],
	[
		384,
		2
	],
	[
		385,
		1,
		"ɓ"
	],
	[
		386,
		1,
		"ƃ"
	],
	[
		387,
		2
	],
	[
		388,
		1,
		"ƅ"
	],
	[
		389,
		2
	],
	[
		390,
		1,
		"ɔ"
	],
	[
		391,
		1,
		"ƈ"
	],
	[
		392,
		2
	],
	[
		393,
		1,
		"ɖ"
	],
	[
		394,
		1,
		"ɗ"
	],
	[
		395,
		1,
		"ƌ"
	],
	[
		[
			396,
			397
		],
		2
	],
	[
		398,
		1,
		"ǝ"
	],
	[
		399,
		1,
		"ə"
	],
	[
		400,
		1,
		"ɛ"
	],
	[
		401,
		1,
		"ƒ"
	],
	[
		402,
		2
	],
	[
		403,
		1,
		"ɠ"
	],
	[
		404,
		1,
		"ɣ"
	],
	[
		405,
		2
	],
	[
		406,
		1,
		"ɩ"
	],
	[
		407,
		1,
		"ɨ"
	],
	[
		408,
		1,
		"ƙ"
	],
	[
		[
			409,
			411
		],
		2
	],
	[
		412,
		1,
		"ɯ"
	],
	[
		413,
		1,
		"ɲ"
	],
	[
		414,
		2
	],
	[
		415,
		1,
		"ɵ"
	],
	[
		416,
		1,
		"ơ"
	],
	[
		417,
		2
	],
	[
		418,
		1,
		"ƣ"
	],
	[
		419,
		2
	],
	[
		420,
		1,
		"ƥ"
	],
	[
		421,
		2
	],
	[
		422,
		1,
		"ʀ"
	],
	[
		423,
		1,
		"ƨ"
	],
	[
		424,
		2
	],
	[
		425,
		1,
		"ʃ"
	],
	[
		[
			426,
			427
		],
		2
	],
	[
		428,
		1,
		"ƭ"
	],
	[
		429,
		2
	],
	[
		430,
		1,
		"ʈ"
	],
	[
		431,
		1,
		"ư"
	],
	[
		432,
		2
	],
	[
		433,
		1,
		"ʊ"
	],
	[
		434,
		1,
		"ʋ"
	],
	[
		435,
		1,
		"ƴ"
	],
	[
		436,
		2
	],
	[
		437,
		1,
		"ƶ"
	],
	[
		438,
		2
	],
	[
		439,
		1,
		"ʒ"
	],
	[
		440,
		1,
		"ƹ"
	],
	[
		[
			441,
			443
		],
		2
	],
	[
		444,
		1,
		"ƽ"
	],
	[
		[
			445,
			451
		],
		2
	],
	[
		[
			452,
			454
		],
		1,
		"dž"
	],
	[
		[
			455,
			457
		],
		1,
		"lj"
	],
	[
		[
			458,
			460
		],
		1,
		"nj"
	],
	[
		461,
		1,
		"ǎ"
	],
	[
		462,
		2
	],
	[
		463,
		1,
		"ǐ"
	],
	[
		464,
		2
	],
	[
		465,
		1,
		"ǒ"
	],
	[
		466,
		2
	],
	[
		467,
		1,
		"ǔ"
	],
	[
		468,
		2
	],
	[
		469,
		1,
		"ǖ"
	],
	[
		470,
		2
	],
	[
		471,
		1,
		"ǘ"
	],
	[
		472,
		2
	],
	[
		473,
		1,
		"ǚ"
	],
	[
		474,
		2
	],
	[
		475,
		1,
		"ǜ"
	],
	[
		[
			476,
			477
		],
		2
	],
	[
		478,
		1,
		"ǟ"
	],
	[
		479,
		2
	],
	[
		480,
		1,
		"ǡ"
	],
	[
		481,
		2
	],
	[
		482,
		1,
		"ǣ"
	],
	[
		483,
		2
	],
	[
		484,
		1,
		"ǥ"
	],
	[
		485,
		2
	],
	[
		486,
		1,
		"ǧ"
	],
	[
		487,
		2
	],
	[
		488,
		1,
		"ǩ"
	],
	[
		489,
		2
	],
	[
		490,
		1,
		"ǫ"
	],
	[
		491,
		2
	],
	[
		492,
		1,
		"ǭ"
	],
	[
		493,
		2
	],
	[
		494,
		1,
		"ǯ"
	],
	[
		[
			495,
			496
		],
		2
	],
	[
		[
			497,
			499
		],
		1,
		"dz"
	],
	[
		500,
		1,
		"ǵ"
	],
	[
		501,
		2
	],
	[
		502,
		1,
		"ƕ"
	],
	[
		503,
		1,
		"ƿ"
	],
	[
		504,
		1,
		"ǹ"
	],
	[
		505,
		2
	],
	[
		506,
		1,
		"ǻ"
	],
	[
		507,
		2
	],
	[
		508,
		1,
		"ǽ"
	],
	[
		509,
		2
	],
	[
		510,
		1,
		"ǿ"
	],
	[
		511,
		2
	],
	[
		512,
		1,
		"ȁ"
	],
	[
		513,
		2
	],
	[
		514,
		1,
		"ȃ"
	],
	[
		515,
		2
	],
	[
		516,
		1,
		"ȅ"
	],
	[
		517,
		2
	],
	[
		518,
		1,
		"ȇ"
	],
	[
		519,
		2
	],
	[
		520,
		1,
		"ȉ"
	],
	[
		521,
		2
	],
	[
		522,
		1,
		"ȋ"
	],
	[
		523,
		2
	],
	[
		524,
		1,
		"ȍ"
	],
	[
		525,
		2
	],
	[
		526,
		1,
		"ȏ"
	],
	[
		527,
		2
	],
	[
		528,
		1,
		"ȑ"
	],
	[
		529,
		2
	],
	[
		530,
		1,
		"ȓ"
	],
	[
		531,
		2
	],
	[
		532,
		1,
		"ȕ"
	],
	[
		533,
		2
	],
	[
		534,
		1,
		"ȗ"
	],
	[
		535,
		2
	],
	[
		536,
		1,
		"ș"
	],
	[
		537,
		2
	],
	[
		538,
		1,
		"ț"
	],
	[
		539,
		2
	],
	[
		540,
		1,
		"ȝ"
	],
	[
		541,
		2
	],
	[
		542,
		1,
		"ȟ"
	],
	[
		543,
		2
	],
	[
		544,
		1,
		"ƞ"
	],
	[
		545,
		2
	],
	[
		546,
		1,
		"ȣ"
	],
	[
		547,
		2
	],
	[
		548,
		1,
		"ȥ"
	],
	[
		549,
		2
	],
	[
		550,
		1,
		"ȧ"
	],
	[
		551,
		2
	],
	[
		552,
		1,
		"ȩ"
	],
	[
		553,
		2
	],
	[
		554,
		1,
		"ȫ"
	],
	[
		555,
		2
	],
	[
		556,
		1,
		"ȭ"
	],
	[
		557,
		2
	],
	[
		558,
		1,
		"ȯ"
	],
	[
		559,
		2
	],
	[
		560,
		1,
		"ȱ"
	],
	[
		561,
		2
	],
	[
		562,
		1,
		"ȳ"
	],
	[
		563,
		2
	],
	[
		[
			564,
			566
		],
		2
	],
	[
		[
			567,
			569
		],
		2
	],
	[
		570,
		1,
		"ⱥ"
	],
	[
		571,
		1,
		"ȼ"
	],
	[
		572,
		2
	],
	[
		573,
		1,
		"ƚ"
	],
	[
		574,
		1,
		"ⱦ"
	],
	[
		[
			575,
			576
		],
		2
	],
	[
		577,
		1,
		"ɂ"
	],
	[
		578,
		2
	],
	[
		579,
		1,
		"ƀ"
	],
	[
		580,
		1,
		"ʉ"
	],
	[
		581,
		1,
		"ʌ"
	],
	[
		582,
		1,
		"ɇ"
	],
	[
		583,
		2
	],
	[
		584,
		1,
		"ɉ"
	],
	[
		585,
		2
	],
	[
		586,
		1,
		"ɋ"
	],
	[
		587,
		2
	],
	[
		588,
		1,
		"ɍ"
	],
	[
		589,
		2
	],
	[
		590,
		1,
		"ɏ"
	],
	[
		591,
		2
	],
	[
		[
			592,
			680
		],
		2
	],
	[
		[
			681,
			685
		],
		2
	],
	[
		[
			686,
			687
		],
		2
	],
	[
		688,
		1,
		"h"
	],
	[
		689,
		1,
		"ɦ"
	],
	[
		690,
		1,
		"j"
	],
	[
		691,
		1,
		"r"
	],
	[
		692,
		1,
		"ɹ"
	],
	[
		693,
		1,
		"ɻ"
	],
	[
		694,
		1,
		"ʁ"
	],
	[
		695,
		1,
		"w"
	],
	[
		696,
		1,
		"y"
	],
	[
		[
			697,
			705
		],
		2
	],
	[
		[
			706,
			709
		],
		2
	],
	[
		[
			710,
			721
		],
		2
	],
	[
		[
			722,
			727
		],
		2
	],
	[
		728,
		5,
		" ̆"
	],
	[
		729,
		5,
		" ̇"
	],
	[
		730,
		5,
		" ̊"
	],
	[
		731,
		5,
		" ̨"
	],
	[
		732,
		5,
		" ̃"
	],
	[
		733,
		5,
		" ̋"
	],
	[
		734,
		2
	],
	[
		735,
		2
	],
	[
		736,
		1,
		"ɣ"
	],
	[
		737,
		1,
		"l"
	],
	[
		738,
		1,
		"s"
	],
	[
		739,
		1,
		"x"
	],
	[
		740,
		1,
		"ʕ"
	],
	[
		[
			741,
			745
		],
		2
	],
	[
		[
			746,
			747
		],
		2
	],
	[
		748,
		2
	],
	[
		749,
		2
	],
	[
		750,
		2
	],
	[
		[
			751,
			767
		],
		2
	],
	[
		[
			768,
			831
		],
		2
	],
	[
		832,
		1,
		"̀"
	],
	[
		833,
		1,
		"́"
	],
	[
		834,
		2
	],
	[
		835,
		1,
		"̓"
	],
	[
		836,
		1,
		"̈́"
	],
	[
		837,
		1,
		"ι"
	],
	[
		[
			838,
			846
		],
		2
	],
	[
		847,
		7
	],
	[
		[
			848,
			855
		],
		2
	],
	[
		[
			856,
			860
		],
		2
	],
	[
		[
			861,
			863
		],
		2
	],
	[
		[
			864,
			865
		],
		2
	],
	[
		866,
		2
	],
	[
		[
			867,
			879
		],
		2
	],
	[
		880,
		1,
		"ͱ"
	],
	[
		881,
		2
	],
	[
		882,
		1,
		"ͳ"
	],
	[
		883,
		2
	],
	[
		884,
		1,
		"ʹ"
	],
	[
		885,
		2
	],
	[
		886,
		1,
		"ͷ"
	],
	[
		887,
		2
	],
	[
		[
			888,
			889
		],
		3
	],
	[
		890,
		5,
		" ι"
	],
	[
		[
			891,
			893
		],
		2
	],
	[
		894,
		5,
		";"
	],
	[
		895,
		1,
		"ϳ"
	],
	[
		[
			896,
			899
		],
		3
	],
	[
		900,
		5,
		" ́"
	],
	[
		901,
		5,
		" ̈́"
	],
	[
		902,
		1,
		"ά"
	],
	[
		903,
		1,
		"·"
	],
	[
		904,
		1,
		"έ"
	],
	[
		905,
		1,
		"ή"
	],
	[
		906,
		1,
		"ί"
	],
	[
		907,
		3
	],
	[
		908,
		1,
		"ό"
	],
	[
		909,
		3
	],
	[
		910,
		1,
		"ύ"
	],
	[
		911,
		1,
		"ώ"
	],
	[
		912,
		2
	],
	[
		913,
		1,
		"α"
	],
	[
		914,
		1,
		"β"
	],
	[
		915,
		1,
		"γ"
	],
	[
		916,
		1,
		"δ"
	],
	[
		917,
		1,
		"ε"
	],
	[
		918,
		1,
		"ζ"
	],
	[
		919,
		1,
		"η"
	],
	[
		920,
		1,
		"θ"
	],
	[
		921,
		1,
		"ι"
	],
	[
		922,
		1,
		"κ"
	],
	[
		923,
		1,
		"λ"
	],
	[
		924,
		1,
		"μ"
	],
	[
		925,
		1,
		"ν"
	],
	[
		926,
		1,
		"ξ"
	],
	[
		927,
		1,
		"ο"
	],
	[
		928,
		1,
		"π"
	],
	[
		929,
		1,
		"ρ"
	],
	[
		930,
		3
	],
	[
		931,
		1,
		"σ"
	],
	[
		932,
		1,
		"τ"
	],
	[
		933,
		1,
		"υ"
	],
	[
		934,
		1,
		"φ"
	],
	[
		935,
		1,
		"χ"
	],
	[
		936,
		1,
		"ψ"
	],
	[
		937,
		1,
		"ω"
	],
	[
		938,
		1,
		"ϊ"
	],
	[
		939,
		1,
		"ϋ"
	],
	[
		[
			940,
			961
		],
		2
	],
	[
		962,
		6,
		"σ"
	],
	[
		[
			963,
			974
		],
		2
	],
	[
		975,
		1,
		"ϗ"
	],
	[
		976,
		1,
		"β"
	],
	[
		977,
		1,
		"θ"
	],
	[
		978,
		1,
		"υ"
	],
	[
		979,
		1,
		"ύ"
	],
	[
		980,
		1,
		"ϋ"
	],
	[
		981,
		1,
		"φ"
	],
	[
		982,
		1,
		"π"
	],
	[
		983,
		2
	],
	[
		984,
		1,
		"ϙ"
	],
	[
		985,
		2
	],
	[
		986,
		1,
		"ϛ"
	],
	[
		987,
		2
	],
	[
		988,
		1,
		"ϝ"
	],
	[
		989,
		2
	],
	[
		990,
		1,
		"ϟ"
	],
	[
		991,
		2
	],
	[
		992,
		1,
		"ϡ"
	],
	[
		993,
		2
	],
	[
		994,
		1,
		"ϣ"
	],
	[
		995,
		2
	],
	[
		996,
		1,
		"ϥ"
	],
	[
		997,
		2
	],
	[
		998,
		1,
		"ϧ"
	],
	[
		999,
		2
	],
	[
		1000,
		1,
		"ϩ"
	],
	[
		1001,
		2
	],
	[
		1002,
		1,
		"ϫ"
	],
	[
		1003,
		2
	],
	[
		1004,
		1,
		"ϭ"
	],
	[
		1005,
		2
	],
	[
		1006,
		1,
		"ϯ"
	],
	[
		1007,
		2
	],
	[
		1008,
		1,
		"κ"
	],
	[
		1009,
		1,
		"ρ"
	],
	[
		1010,
		1,
		"σ"
	],
	[
		1011,
		2
	],
	[
		1012,
		1,
		"θ"
	],
	[
		1013,
		1,
		"ε"
	],
	[
		1014,
		2
	],
	[
		1015,
		1,
		"ϸ"
	],
	[
		1016,
		2
	],
	[
		1017,
		1,
		"σ"
	],
	[
		1018,
		1,
		"ϻ"
	],
	[
		1019,
		2
	],
	[
		1020,
		2
	],
	[
		1021,
		1,
		"ͻ"
	],
	[
		1022,
		1,
		"ͼ"
	],
	[
		1023,
		1,
		"ͽ"
	],
	[
		1024,
		1,
		"ѐ"
	],
	[
		1025,
		1,
		"ё"
	],
	[
		1026,
		1,
		"ђ"
	],
	[
		1027,
		1,
		"ѓ"
	],
	[
		1028,
		1,
		"є"
	],
	[
		1029,
		1,
		"ѕ"
	],
	[
		1030,
		1,
		"і"
	],
	[
		1031,
		1,
		"ї"
	],
	[
		1032,
		1,
		"ј"
	],
	[
		1033,
		1,
		"љ"
	],
	[
		1034,
		1,
		"њ"
	],
	[
		1035,
		1,
		"ћ"
	],
	[
		1036,
		1,
		"ќ"
	],
	[
		1037,
		1,
		"ѝ"
	],
	[
		1038,
		1,
		"ў"
	],
	[
		1039,
		1,
		"џ"
	],
	[
		1040,
		1,
		"а"
	],
	[
		1041,
		1,
		"б"
	],
	[
		1042,
		1,
		"в"
	],
	[
		1043,
		1,
		"г"
	],
	[
		1044,
		1,
		"д"
	],
	[
		1045,
		1,
		"е"
	],
	[
		1046,
		1,
		"ж"
	],
	[
		1047,
		1,
		"з"
	],
	[
		1048,
		1,
		"и"
	],
	[
		1049,
		1,
		"й"
	],
	[
		1050,
		1,
		"к"
	],
	[
		1051,
		1,
		"л"
	],
	[
		1052,
		1,
		"м"
	],
	[
		1053,
		1,
		"н"
	],
	[
		1054,
		1,
		"о"
	],
	[
		1055,
		1,
		"п"
	],
	[
		1056,
		1,
		"р"
	],
	[
		1057,
		1,
		"с"
	],
	[
		1058,
		1,
		"т"
	],
	[
		1059,
		1,
		"у"
	],
	[
		1060,
		1,
		"ф"
	],
	[
		1061,
		1,
		"х"
	],
	[
		1062,
		1,
		"ц"
	],
	[
		1063,
		1,
		"ч"
	],
	[
		1064,
		1,
		"ш"
	],
	[
		1065,
		1,
		"щ"
	],
	[
		1066,
		1,
		"ъ"
	],
	[
		1067,
		1,
		"ы"
	],
	[
		1068,
		1,
		"ь"
	],
	[
		1069,
		1,
		"э"
	],
	[
		1070,
		1,
		"ю"
	],
	[
		1071,
		1,
		"я"
	],
	[
		[
			1072,
			1103
		],
		2
	],
	[
		1104,
		2
	],
	[
		[
			1105,
			1116
		],
		2
	],
	[
		1117,
		2
	],
	[
		[
			1118,
			1119
		],
		2
	],
	[
		1120,
		1,
		"ѡ"
	],
	[
		1121,
		2
	],
	[
		1122,
		1,
		"ѣ"
	],
	[
		1123,
		2
	],
	[
		1124,
		1,
		"ѥ"
	],
	[
		1125,
		2
	],
	[
		1126,
		1,
		"ѧ"
	],
	[
		1127,
		2
	],
	[
		1128,
		1,
		"ѩ"
	],
	[
		1129,
		2
	],
	[
		1130,
		1,
		"ѫ"
	],
	[
		1131,
		2
	],
	[
		1132,
		1,
		"ѭ"
	],
	[
		1133,
		2
	],
	[
		1134,
		1,
		"ѯ"
	],
	[
		1135,
		2
	],
	[
		1136,
		1,
		"ѱ"
	],
	[
		1137,
		2
	],
	[
		1138,
		1,
		"ѳ"
	],
	[
		1139,
		2
	],
	[
		1140,
		1,
		"ѵ"
	],
	[
		1141,
		2
	],
	[
		1142,
		1,
		"ѷ"
	],
	[
		1143,
		2
	],
	[
		1144,
		1,
		"ѹ"
	],
	[
		1145,
		2
	],
	[
		1146,
		1,
		"ѻ"
	],
	[
		1147,
		2
	],
	[
		1148,
		1,
		"ѽ"
	],
	[
		1149,
		2
	],
	[
		1150,
		1,
		"ѿ"
	],
	[
		1151,
		2
	],
	[
		1152,
		1,
		"ҁ"
	],
	[
		1153,
		2
	],
	[
		1154,
		2
	],
	[
		[
			1155,
			1158
		],
		2
	],
	[
		1159,
		2
	],
	[
		[
			1160,
			1161
		],
		2
	],
	[
		1162,
		1,
		"ҋ"
	],
	[
		1163,
		2
	],
	[
		1164,
		1,
		"ҍ"
	],
	[
		1165,
		2
	],
	[
		1166,
		1,
		"ҏ"
	],
	[
		1167,
		2
	],
	[
		1168,
		1,
		"ґ"
	],
	[
		1169,
		2
	],
	[
		1170,
		1,
		"ғ"
	],
	[
		1171,
		2
	],
	[
		1172,
		1,
		"ҕ"
	],
	[
		1173,
		2
	],
	[
		1174,
		1,
		"җ"
	],
	[
		1175,
		2
	],
	[
		1176,
		1,
		"ҙ"
	],
	[
		1177,
		2
	],
	[
		1178,
		1,
		"қ"
	],
	[
		1179,
		2
	],
	[
		1180,
		1,
		"ҝ"
	],
	[
		1181,
		2
	],
	[
		1182,
		1,
		"ҟ"
	],
	[
		1183,
		2
	],
	[
		1184,
		1,
		"ҡ"
	],
	[
		1185,
		2
	],
	[
		1186,
		1,
		"ң"
	],
	[
		1187,
		2
	],
	[
		1188,
		1,
		"ҥ"
	],
	[
		1189,
		2
	],
	[
		1190,
		1,
		"ҧ"
	],
	[
		1191,
		2
	],
	[
		1192,
		1,
		"ҩ"
	],
	[
		1193,
		2
	],
	[
		1194,
		1,
		"ҫ"
	],
	[
		1195,
		2
	],
	[
		1196,
		1,
		"ҭ"
	],
	[
		1197,
		2
	],
	[
		1198,
		1,
		"ү"
	],
	[
		1199,
		2
	],
	[
		1200,
		1,
		"ұ"
	],
	[
		1201,
		2
	],
	[
		1202,
		1,
		"ҳ"
	],
	[
		1203,
		2
	],
	[
		1204,
		1,
		"ҵ"
	],
	[
		1205,
		2
	],
	[
		1206,
		1,
		"ҷ"
	],
	[
		1207,
		2
	],
	[
		1208,
		1,
		"ҹ"
	],
	[
		1209,
		2
	],
	[
		1210,
		1,
		"һ"
	],
	[
		1211,
		2
	],
	[
		1212,
		1,
		"ҽ"
	],
	[
		1213,
		2
	],
	[
		1214,
		1,
		"ҿ"
	],
	[
		1215,
		2
	],
	[
		1216,
		3
	],
	[
		1217,
		1,
		"ӂ"
	],
	[
		1218,
		2
	],
	[
		1219,
		1,
		"ӄ"
	],
	[
		1220,
		2
	],
	[
		1221,
		1,
		"ӆ"
	],
	[
		1222,
		2
	],
	[
		1223,
		1,
		"ӈ"
	],
	[
		1224,
		2
	],
	[
		1225,
		1,
		"ӊ"
	],
	[
		1226,
		2
	],
	[
		1227,
		1,
		"ӌ"
	],
	[
		1228,
		2
	],
	[
		1229,
		1,
		"ӎ"
	],
	[
		1230,
		2
	],
	[
		1231,
		2
	],
	[
		1232,
		1,
		"ӑ"
	],
	[
		1233,
		2
	],
	[
		1234,
		1,
		"ӓ"
	],
	[
		1235,
		2
	],
	[
		1236,
		1,
		"ӕ"
	],
	[
		1237,
		2
	],
	[
		1238,
		1,
		"ӗ"
	],
	[
		1239,
		2
	],
	[
		1240,
		1,
		"ә"
	],
	[
		1241,
		2
	],
	[
		1242,
		1,
		"ӛ"
	],
	[
		1243,
		2
	],
	[
		1244,
		1,
		"ӝ"
	],
	[
		1245,
		2
	],
	[
		1246,
		1,
		"ӟ"
	],
	[
		1247,
		2
	],
	[
		1248,
		1,
		"ӡ"
	],
	[
		1249,
		2
	],
	[
		1250,
		1,
		"ӣ"
	],
	[
		1251,
		2
	],
	[
		1252,
		1,
		"ӥ"
	],
	[
		1253,
		2
	],
	[
		1254,
		1,
		"ӧ"
	],
	[
		1255,
		2
	],
	[
		1256,
		1,
		"ө"
	],
	[
		1257,
		2
	],
	[
		1258,
		1,
		"ӫ"
	],
	[
		1259,
		2
	],
	[
		1260,
		1,
		"ӭ"
	],
	[
		1261,
		2
	],
	[
		1262,
		1,
		"ӯ"
	],
	[
		1263,
		2
	],
	[
		1264,
		1,
		"ӱ"
	],
	[
		1265,
		2
	],
	[
		1266,
		1,
		"ӳ"
	],
	[
		1267,
		2
	],
	[
		1268,
		1,
		"ӵ"
	],
	[
		1269,
		2
	],
	[
		1270,
		1,
		"ӷ"
	],
	[
		1271,
		2
	],
	[
		1272,
		1,
		"ӹ"
	],
	[
		1273,
		2
	],
	[
		1274,
		1,
		"ӻ"
	],
	[
		1275,
		2
	],
	[
		1276,
		1,
		"ӽ"
	],
	[
		1277,
		2
	],
	[
		1278,
		1,
		"ӿ"
	],
	[
		1279,
		2
	],
	[
		1280,
		1,
		"ԁ"
	],
	[
		1281,
		2
	],
	[
		1282,
		1,
		"ԃ"
	],
	[
		1283,
		2
	],
	[
		1284,
		1,
		"ԅ"
	],
	[
		1285,
		2
	],
	[
		1286,
		1,
		"ԇ"
	],
	[
		1287,
		2
	],
	[
		1288,
		1,
		"ԉ"
	],
	[
		1289,
		2
	],
	[
		1290,
		1,
		"ԋ"
	],
	[
		1291,
		2
	],
	[
		1292,
		1,
		"ԍ"
	],
	[
		1293,
		2
	],
	[
		1294,
		1,
		"ԏ"
	],
	[
		1295,
		2
	],
	[
		1296,
		1,
		"ԑ"
	],
	[
		1297,
		2
	],
	[
		1298,
		1,
		"ԓ"
	],
	[
		1299,
		2
	],
	[
		1300,
		1,
		"ԕ"
	],
	[
		1301,
		2
	],
	[
		1302,
		1,
		"ԗ"
	],
	[
		1303,
		2
	],
	[
		1304,
		1,
		"ԙ"
	],
	[
		1305,
		2
	],
	[
		1306,
		1,
		"ԛ"
	],
	[
		1307,
		2
	],
	[
		1308,
		1,
		"ԝ"
	],
	[
		1309,
		2
	],
	[
		1310,
		1,
		"ԟ"
	],
	[
		1311,
		2
	],
	[
		1312,
		1,
		"ԡ"
	],
	[
		1313,
		2
	],
	[
		1314,
		1,
		"ԣ"
	],
	[
		1315,
		2
	],
	[
		1316,
		1,
		"ԥ"
	],
	[
		1317,
		2
	],
	[
		1318,
		1,
		"ԧ"
	],
	[
		1319,
		2
	],
	[
		1320,
		1,
		"ԩ"
	],
	[
		1321,
		2
	],
	[
		1322,
		1,
		"ԫ"
	],
	[
		1323,
		2
	],
	[
		1324,
		1,
		"ԭ"
	],
	[
		1325,
		2
	],
	[
		1326,
		1,
		"ԯ"
	],
	[
		1327,
		2
	],
	[
		1328,
		3
	],
	[
		1329,
		1,
		"ա"
	],
	[
		1330,
		1,
		"բ"
	],
	[
		1331,
		1,
		"գ"
	],
	[
		1332,
		1,
		"դ"
	],
	[
		1333,
		1,
		"ե"
	],
	[
		1334,
		1,
		"զ"
	],
	[
		1335,
		1,
		"է"
	],
	[
		1336,
		1,
		"ը"
	],
	[
		1337,
		1,
		"թ"
	],
	[
		1338,
		1,
		"ժ"
	],
	[
		1339,
		1,
		"ի"
	],
	[
		1340,
		1,
		"լ"
	],
	[
		1341,
		1,
		"խ"
	],
	[
		1342,
		1,
		"ծ"
	],
	[
		1343,
		1,
		"կ"
	],
	[
		1344,
		1,
		"հ"
	],
	[
		1345,
		1,
		"ձ"
	],
	[
		1346,
		1,
		"ղ"
	],
	[
		1347,
		1,
		"ճ"
	],
	[
		1348,
		1,
		"մ"
	],
	[
		1349,
		1,
		"յ"
	],
	[
		1350,
		1,
		"ն"
	],
	[
		1351,
		1,
		"շ"
	],
	[
		1352,
		1,
		"ո"
	],
	[
		1353,
		1,
		"չ"
	],
	[
		1354,
		1,
		"պ"
	],
	[
		1355,
		1,
		"ջ"
	],
	[
		1356,
		1,
		"ռ"
	],
	[
		1357,
		1,
		"ս"
	],
	[
		1358,
		1,
		"վ"
	],
	[
		1359,
		1,
		"տ"
	],
	[
		1360,
		1,
		"ր"
	],
	[
		1361,
		1,
		"ց"
	],
	[
		1362,
		1,
		"ւ"
	],
	[
		1363,
		1,
		"փ"
	],
	[
		1364,
		1,
		"ք"
	],
	[
		1365,
		1,
		"օ"
	],
	[
		1366,
		1,
		"ֆ"
	],
	[
		[
			1367,
			1368
		],
		3
	],
	[
		1369,
		2
	],
	[
		[
			1370,
			1375
		],
		2
	],
	[
		1376,
		2
	],
	[
		[
			1377,
			1414
		],
		2
	],
	[
		1415,
		1,
		"եւ"
	],
	[
		1416,
		2
	],
	[
		1417,
		2
	],
	[
		1418,
		2
	],
	[
		[
			1419,
			1420
		],
		3
	],
	[
		[
			1421,
			1422
		],
		2
	],
	[
		1423,
		2
	],
	[
		1424,
		3
	],
	[
		[
			1425,
			1441
		],
		2
	],
	[
		1442,
		2
	],
	[
		[
			1443,
			1455
		],
		2
	],
	[
		[
			1456,
			1465
		],
		2
	],
	[
		1466,
		2
	],
	[
		[
			1467,
			1469
		],
		2
	],
	[
		1470,
		2
	],
	[
		1471,
		2
	],
	[
		1472,
		2
	],
	[
		[
			1473,
			1474
		],
		2
	],
	[
		1475,
		2
	],
	[
		1476,
		2
	],
	[
		1477,
		2
	],
	[
		1478,
		2
	],
	[
		1479,
		2
	],
	[
		[
			1480,
			1487
		],
		3
	],
	[
		[
			1488,
			1514
		],
		2
	],
	[
		[
			1515,
			1518
		],
		3
	],
	[
		1519,
		2
	],
	[
		[
			1520,
			1524
		],
		2
	],
	[
		[
			1525,
			1535
		],
		3
	],
	[
		[
			1536,
			1539
		],
		3
	],
	[
		1540,
		3
	],
	[
		1541,
		3
	],
	[
		[
			1542,
			1546
		],
		2
	],
	[
		1547,
		2
	],
	[
		1548,
		2
	],
	[
		[
			1549,
			1551
		],
		2
	],
	[
		[
			1552,
			1557
		],
		2
	],
	[
		[
			1558,
			1562
		],
		2
	],
	[
		1563,
		2
	],
	[
		1564,
		3
	],
	[
		1565,
		2
	],
	[
		1566,
		2
	],
	[
		1567,
		2
	],
	[
		1568,
		2
	],
	[
		[
			1569,
			1594
		],
		2
	],
	[
		[
			1595,
			1599
		],
		2
	],
	[
		1600,
		2
	],
	[
		[
			1601,
			1618
		],
		2
	],
	[
		[
			1619,
			1621
		],
		2
	],
	[
		[
			1622,
			1624
		],
		2
	],
	[
		[
			1625,
			1630
		],
		2
	],
	[
		1631,
		2
	],
	[
		[
			1632,
			1641
		],
		2
	],
	[
		[
			1642,
			1645
		],
		2
	],
	[
		[
			1646,
			1647
		],
		2
	],
	[
		[
			1648,
			1652
		],
		2
	],
	[
		1653,
		1,
		"اٴ"
	],
	[
		1654,
		1,
		"وٴ"
	],
	[
		1655,
		1,
		"ۇٴ"
	],
	[
		1656,
		1,
		"يٴ"
	],
	[
		[
			1657,
			1719
		],
		2
	],
	[
		[
			1720,
			1721
		],
		2
	],
	[
		[
			1722,
			1726
		],
		2
	],
	[
		1727,
		2
	],
	[
		[
			1728,
			1742
		],
		2
	],
	[
		1743,
		2
	],
	[
		[
			1744,
			1747
		],
		2
	],
	[
		1748,
		2
	],
	[
		[
			1749,
			1756
		],
		2
	],
	[
		1757,
		3
	],
	[
		1758,
		2
	],
	[
		[
			1759,
			1768
		],
		2
	],
	[
		1769,
		2
	],
	[
		[
			1770,
			1773
		],
		2
	],
	[
		[
			1774,
			1775
		],
		2
	],
	[
		[
			1776,
			1785
		],
		2
	],
	[
		[
			1786,
			1790
		],
		2
	],
	[
		1791,
		2
	],
	[
		[
			1792,
			1805
		],
		2
	],
	[
		1806,
		3
	],
	[
		1807,
		3
	],
	[
		[
			1808,
			1836
		],
		2
	],
	[
		[
			1837,
			1839
		],
		2
	],
	[
		[
			1840,
			1866
		],
		2
	],
	[
		[
			1867,
			1868
		],
		3
	],
	[
		[
			1869,
			1871
		],
		2
	],
	[
		[
			1872,
			1901
		],
		2
	],
	[
		[
			1902,
			1919
		],
		2
	],
	[
		[
			1920,
			1968
		],
		2
	],
	[
		1969,
		2
	],
	[
		[
			1970,
			1983
		],
		3
	],
	[
		[
			1984,
			2037
		],
		2
	],
	[
		[
			2038,
			2042
		],
		2
	],
	[
		[
			2043,
			2044
		],
		3
	],
	[
		2045,
		2
	],
	[
		[
			2046,
			2047
		],
		2
	],
	[
		[
			2048,
			2093
		],
		2
	],
	[
		[
			2094,
			2095
		],
		3
	],
	[
		[
			2096,
			2110
		],
		2
	],
	[
		2111,
		3
	],
	[
		[
			2112,
			2139
		],
		2
	],
	[
		[
			2140,
			2141
		],
		3
	],
	[
		2142,
		2
	],
	[
		2143,
		3
	],
	[
		[
			2144,
			2154
		],
		2
	],
	[
		[
			2155,
			2159
		],
		3
	],
	[
		[
			2160,
			2183
		],
		2
	],
	[
		2184,
		2
	],
	[
		[
			2185,
			2190
		],
		2
	],
	[
		2191,
		3
	],
	[
		[
			2192,
			2193
		],
		3
	],
	[
		[
			2194,
			2199
		],
		3
	],
	[
		[
			2200,
			2207
		],
		2
	],
	[
		2208,
		2
	],
	[
		2209,
		2
	],
	[
		[
			2210,
			2220
		],
		2
	],
	[
		[
			2221,
			2226
		],
		2
	],
	[
		[
			2227,
			2228
		],
		2
	],
	[
		2229,
		2
	],
	[
		[
			2230,
			2237
		],
		2
	],
	[
		[
			2238,
			2247
		],
		2
	],
	[
		[
			2248,
			2258
		],
		2
	],
	[
		2259,
		2
	],
	[
		[
			2260,
			2273
		],
		2
	],
	[
		2274,
		3
	],
	[
		2275,
		2
	],
	[
		[
			2276,
			2302
		],
		2
	],
	[
		2303,
		2
	],
	[
		2304,
		2
	],
	[
		[
			2305,
			2307
		],
		2
	],
	[
		2308,
		2
	],
	[
		[
			2309,
			2361
		],
		2
	],
	[
		[
			2362,
			2363
		],
		2
	],
	[
		[
			2364,
			2381
		],
		2
	],
	[
		2382,
		2
	],
	[
		2383,
		2
	],
	[
		[
			2384,
			2388
		],
		2
	],
	[
		2389,
		2
	],
	[
		[
			2390,
			2391
		],
		2
	],
	[
		2392,
		1,
		"क़"
	],
	[
		2393,
		1,
		"ख़"
	],
	[
		2394,
		1,
		"ग़"
	],
	[
		2395,
		1,
		"ज़"
	],
	[
		2396,
		1,
		"ड़"
	],
	[
		2397,
		1,
		"ढ़"
	],
	[
		2398,
		1,
		"फ़"
	],
	[
		2399,
		1,
		"य़"
	],
	[
		[
			2400,
			2403
		],
		2
	],
	[
		[
			2404,
			2405
		],
		2
	],
	[
		[
			2406,
			2415
		],
		2
	],
	[
		2416,
		2
	],
	[
		[
			2417,
			2418
		],
		2
	],
	[
		[
			2419,
			2423
		],
		2
	],
	[
		2424,
		2
	],
	[
		[
			2425,
			2426
		],
		2
	],
	[
		[
			2427,
			2428
		],
		2
	],
	[
		2429,
		2
	],
	[
		[
			2430,
			2431
		],
		2
	],
	[
		2432,
		2
	],
	[
		[
			2433,
			2435
		],
		2
	],
	[
		2436,
		3
	],
	[
		[
			2437,
			2444
		],
		2
	],
	[
		[
			2445,
			2446
		],
		3
	],
	[
		[
			2447,
			2448
		],
		2
	],
	[
		[
			2449,
			2450
		],
		3
	],
	[
		[
			2451,
			2472
		],
		2
	],
	[
		2473,
		3
	],
	[
		[
			2474,
			2480
		],
		2
	],
	[
		2481,
		3
	],
	[
		2482,
		2
	],
	[
		[
			2483,
			2485
		],
		3
	],
	[
		[
			2486,
			2489
		],
		2
	],
	[
		[
			2490,
			2491
		],
		3
	],
	[
		2492,
		2
	],
	[
		2493,
		2
	],
	[
		[
			2494,
			2500
		],
		2
	],
	[
		[
			2501,
			2502
		],
		3
	],
	[
		[
			2503,
			2504
		],
		2
	],
	[
		[
			2505,
			2506
		],
		3
	],
	[
		[
			2507,
			2509
		],
		2
	],
	[
		2510,
		2
	],
	[
		[
			2511,
			2518
		],
		3
	],
	[
		2519,
		2
	],
	[
		[
			2520,
			2523
		],
		3
	],
	[
		2524,
		1,
		"ড়"
	],
	[
		2525,
		1,
		"ঢ়"
	],
	[
		2526,
		3
	],
	[
		2527,
		1,
		"য়"
	],
	[
		[
			2528,
			2531
		],
		2
	],
	[
		[
			2532,
			2533
		],
		3
	],
	[
		[
			2534,
			2545
		],
		2
	],
	[
		[
			2546,
			2554
		],
		2
	],
	[
		2555,
		2
	],
	[
		2556,
		2
	],
	[
		2557,
		2
	],
	[
		2558,
		2
	],
	[
		[
			2559,
			2560
		],
		3
	],
	[
		2561,
		2
	],
	[
		2562,
		2
	],
	[
		2563,
		2
	],
	[
		2564,
		3
	],
	[
		[
			2565,
			2570
		],
		2
	],
	[
		[
			2571,
			2574
		],
		3
	],
	[
		[
			2575,
			2576
		],
		2
	],
	[
		[
			2577,
			2578
		],
		3
	],
	[
		[
			2579,
			2600
		],
		2
	],
	[
		2601,
		3
	],
	[
		[
			2602,
			2608
		],
		2
	],
	[
		2609,
		3
	],
	[
		2610,
		2
	],
	[
		2611,
		1,
		"ਲ਼"
	],
	[
		2612,
		3
	],
	[
		2613,
		2
	],
	[
		2614,
		1,
		"ਸ਼"
	],
	[
		2615,
		3
	],
	[
		[
			2616,
			2617
		],
		2
	],
	[
		[
			2618,
			2619
		],
		3
	],
	[
		2620,
		2
	],
	[
		2621,
		3
	],
	[
		[
			2622,
			2626
		],
		2
	],
	[
		[
			2627,
			2630
		],
		3
	],
	[
		[
			2631,
			2632
		],
		2
	],
	[
		[
			2633,
			2634
		],
		3
	],
	[
		[
			2635,
			2637
		],
		2
	],
	[
		[
			2638,
			2640
		],
		3
	],
	[
		2641,
		2
	],
	[
		[
			2642,
			2648
		],
		3
	],
	[
		2649,
		1,
		"ਖ਼"
	],
	[
		2650,
		1,
		"ਗ਼"
	],
	[
		2651,
		1,
		"ਜ਼"
	],
	[
		2652,
		2
	],
	[
		2653,
		3
	],
	[
		2654,
		1,
		"ਫ਼"
	],
	[
		[
			2655,
			2661
		],
		3
	],
	[
		[
			2662,
			2676
		],
		2
	],
	[
		2677,
		2
	],
	[
		2678,
		2
	],
	[
		[
			2679,
			2688
		],
		3
	],
	[
		[
			2689,
			2691
		],
		2
	],
	[
		2692,
		3
	],
	[
		[
			2693,
			2699
		],
		2
	],
	[
		2700,
		2
	],
	[
		2701,
		2
	],
	[
		2702,
		3
	],
	[
		[
			2703,
			2705
		],
		2
	],
	[
		2706,
		3
	],
	[
		[
			2707,
			2728
		],
		2
	],
	[
		2729,
		3
	],
	[
		[
			2730,
			2736
		],
		2
	],
	[
		2737,
		3
	],
	[
		[
			2738,
			2739
		],
		2
	],
	[
		2740,
		3
	],
	[
		[
			2741,
			2745
		],
		2
	],
	[
		[
			2746,
			2747
		],
		3
	],
	[
		[
			2748,
			2757
		],
		2
	],
	[
		2758,
		3
	],
	[
		[
			2759,
			2761
		],
		2
	],
	[
		2762,
		3
	],
	[
		[
			2763,
			2765
		],
		2
	],
	[
		[
			2766,
			2767
		],
		3
	],
	[
		2768,
		2
	],
	[
		[
			2769,
			2783
		],
		3
	],
	[
		2784,
		2
	],
	[
		[
			2785,
			2787
		],
		2
	],
	[
		[
			2788,
			2789
		],
		3
	],
	[
		[
			2790,
			2799
		],
		2
	],
	[
		2800,
		2
	],
	[
		2801,
		2
	],
	[
		[
			2802,
			2808
		],
		3
	],
	[
		2809,
		2
	],
	[
		[
			2810,
			2815
		],
		2
	],
	[
		2816,
		3
	],
	[
		[
			2817,
			2819
		],
		2
	],
	[
		2820,
		3
	],
	[
		[
			2821,
			2828
		],
		2
	],
	[
		[
			2829,
			2830
		],
		3
	],
	[
		[
			2831,
			2832
		],
		2
	],
	[
		[
			2833,
			2834
		],
		3
	],
	[
		[
			2835,
			2856
		],
		2
	],
	[
		2857,
		3
	],
	[
		[
			2858,
			2864
		],
		2
	],
	[
		2865,
		3
	],
	[
		[
			2866,
			2867
		],
		2
	],
	[
		2868,
		3
	],
	[
		2869,
		2
	],
	[
		[
			2870,
			2873
		],
		2
	],
	[
		[
			2874,
			2875
		],
		3
	],
	[
		[
			2876,
			2883
		],
		2
	],
	[
		2884,
		2
	],
	[
		[
			2885,
			2886
		],
		3
	],
	[
		[
			2887,
			2888
		],
		2
	],
	[
		[
			2889,
			2890
		],
		3
	],
	[
		[
			2891,
			2893
		],
		2
	],
	[
		[
			2894,
			2900
		],
		3
	],
	[
		2901,
		2
	],
	[
		[
			2902,
			2903
		],
		2
	],
	[
		[
			2904,
			2907
		],
		3
	],
	[
		2908,
		1,
		"ଡ଼"
	],
	[
		2909,
		1,
		"ଢ଼"
	],
	[
		2910,
		3
	],
	[
		[
			2911,
			2913
		],
		2
	],
	[
		[
			2914,
			2915
		],
		2
	],
	[
		[
			2916,
			2917
		],
		3
	],
	[
		[
			2918,
			2927
		],
		2
	],
	[
		2928,
		2
	],
	[
		2929,
		2
	],
	[
		[
			2930,
			2935
		],
		2
	],
	[
		[
			2936,
			2945
		],
		3
	],
	[
		[
			2946,
			2947
		],
		2
	],
	[
		2948,
		3
	],
	[
		[
			2949,
			2954
		],
		2
	],
	[
		[
			2955,
			2957
		],
		3
	],
	[
		[
			2958,
			2960
		],
		2
	],
	[
		2961,
		3
	],
	[
		[
			2962,
			2965
		],
		2
	],
	[
		[
			2966,
			2968
		],
		3
	],
	[
		[
			2969,
			2970
		],
		2
	],
	[
		2971,
		3
	],
	[
		2972,
		2
	],
	[
		2973,
		3
	],
	[
		[
			2974,
			2975
		],
		2
	],
	[
		[
			2976,
			2978
		],
		3
	],
	[
		[
			2979,
			2980
		],
		2
	],
	[
		[
			2981,
			2983
		],
		3
	],
	[
		[
			2984,
			2986
		],
		2
	],
	[
		[
			2987,
			2989
		],
		3
	],
	[
		[
			2990,
			2997
		],
		2
	],
	[
		2998,
		2
	],
	[
		[
			2999,
			3001
		],
		2
	],
	[
		[
			3002,
			3005
		],
		3
	],
	[
		[
			3006,
			3010
		],
		2
	],
	[
		[
			3011,
			3013
		],
		3
	],
	[
		[
			3014,
			3016
		],
		2
	],
	[
		3017,
		3
	],
	[
		[
			3018,
			3021
		],
		2
	],
	[
		[
			3022,
			3023
		],
		3
	],
	[
		3024,
		2
	],
	[
		[
			3025,
			3030
		],
		3
	],
	[
		3031,
		2
	],
	[
		[
			3032,
			3045
		],
		3
	],
	[
		3046,
		2
	],
	[
		[
			3047,
			3055
		],
		2
	],
	[
		[
			3056,
			3058
		],
		2
	],
	[
		[
			3059,
			3066
		],
		2
	],
	[
		[
			3067,
			3071
		],
		3
	],
	[
		3072,
		2
	],
	[
		[
			3073,
			3075
		],
		2
	],
	[
		3076,
		2
	],
	[
		[
			3077,
			3084
		],
		2
	],
	[
		3085,
		3
	],
	[
		[
			3086,
			3088
		],
		2
	],
	[
		3089,
		3
	],
	[
		[
			3090,
			3112
		],
		2
	],
	[
		3113,
		3
	],
	[
		[
			3114,
			3123
		],
		2
	],
	[
		3124,
		2
	],
	[
		[
			3125,
			3129
		],
		2
	],
	[
		[
			3130,
			3131
		],
		3
	],
	[
		3132,
		2
	],
	[
		3133,
		2
	],
	[
		[
			3134,
			3140
		],
		2
	],
	[
		3141,
		3
	],
	[
		[
			3142,
			3144
		],
		2
	],
	[
		3145,
		3
	],
	[
		[
			3146,
			3149
		],
		2
	],
	[
		[
			3150,
			3156
		],
		3
	],
	[
		[
			3157,
			3158
		],
		2
	],
	[
		3159,
		3
	],
	[
		[
			3160,
			3161
		],
		2
	],
	[
		3162,
		2
	],
	[
		[
			3163,
			3164
		],
		3
	],
	[
		3165,
		2
	],
	[
		[
			3166,
			3167
		],
		3
	],
	[
		[
			3168,
			3169
		],
		2
	],
	[
		[
			3170,
			3171
		],
		2
	],
	[
		[
			3172,
			3173
		],
		3
	],
	[
		[
			3174,
			3183
		],
		2
	],
	[
		[
			3184,
			3190
		],
		3
	],
	[
		3191,
		2
	],
	[
		[
			3192,
			3199
		],
		2
	],
	[
		3200,
		2
	],
	[
		3201,
		2
	],
	[
		[
			3202,
			3203
		],
		2
	],
	[
		3204,
		2
	],
	[
		[
			3205,
			3212
		],
		2
	],
	[
		3213,
		3
	],
	[
		[
			3214,
			3216
		],
		2
	],
	[
		3217,
		3
	],
	[
		[
			3218,
			3240
		],
		2
	],
	[
		3241,
		3
	],
	[
		[
			3242,
			3251
		],
		2
	],
	[
		3252,
		3
	],
	[
		[
			3253,
			3257
		],
		2
	],
	[
		[
			3258,
			3259
		],
		3
	],
	[
		[
			3260,
			3261
		],
		2
	],
	[
		[
			3262,
			3268
		],
		2
	],
	[
		3269,
		3
	],
	[
		[
			3270,
			3272
		],
		2
	],
	[
		3273,
		3
	],
	[
		[
			3274,
			3277
		],
		2
	],
	[
		[
			3278,
			3284
		],
		3
	],
	[
		[
			3285,
			3286
		],
		2
	],
	[
		[
			3287,
			3292
		],
		3
	],
	[
		3293,
		2
	],
	[
		3294,
		2
	],
	[
		3295,
		3
	],
	[
		[
			3296,
			3297
		],
		2
	],
	[
		[
			3298,
			3299
		],
		2
	],
	[
		[
			3300,
			3301
		],
		3
	],
	[
		[
			3302,
			3311
		],
		2
	],
	[
		3312,
		3
	],
	[
		[
			3313,
			3314
		],
		2
	],
	[
		3315,
		2
	],
	[
		[
			3316,
			3327
		],
		3
	],
	[
		3328,
		2
	],
	[
		3329,
		2
	],
	[
		[
			3330,
			3331
		],
		2
	],
	[
		3332,
		2
	],
	[
		[
			3333,
			3340
		],
		2
	],
	[
		3341,
		3
	],
	[
		[
			3342,
			3344
		],
		2
	],
	[
		3345,
		3
	],
	[
		[
			3346,
			3368
		],
		2
	],
	[
		3369,
		2
	],
	[
		[
			3370,
			3385
		],
		2
	],
	[
		3386,
		2
	],
	[
		[
			3387,
			3388
		],
		2
	],
	[
		3389,
		2
	],
	[
		[
			3390,
			3395
		],
		2
	],
	[
		3396,
		2
	],
	[
		3397,
		3
	],
	[
		[
			3398,
			3400
		],
		2
	],
	[
		3401,
		3
	],
	[
		[
			3402,
			3405
		],
		2
	],
	[
		3406,
		2
	],
	[
		3407,
		2
	],
	[
		[
			3408,
			3411
		],
		3
	],
	[
		[
			3412,
			3414
		],
		2
	],
	[
		3415,
		2
	],
	[
		[
			3416,
			3422
		],
		2
	],
	[
		3423,
		2
	],
	[
		[
			3424,
			3425
		],
		2
	],
	[
		[
			3426,
			3427
		],
		2
	],
	[
		[
			3428,
			3429
		],
		3
	],
	[
		[
			3430,
			3439
		],
		2
	],
	[
		[
			3440,
			3445
		],
		2
	],
	[
		[
			3446,
			3448
		],
		2
	],
	[
		3449,
		2
	],
	[
		[
			3450,
			3455
		],
		2
	],
	[
		3456,
		3
	],
	[
		3457,
		2
	],
	[
		[
			3458,
			3459
		],
		2
	],
	[
		3460,
		3
	],
	[
		[
			3461,
			3478
		],
		2
	],
	[
		[
			3479,
			3481
		],
		3
	],
	[
		[
			3482,
			3505
		],
		2
	],
	[
		3506,
		3
	],
	[
		[
			3507,
			3515
		],
		2
	],
	[
		3516,
		3
	],
	[
		3517,
		2
	],
	[
		[
			3518,
			3519
		],
		3
	],
	[
		[
			3520,
			3526
		],
		2
	],
	[
		[
			3527,
			3529
		],
		3
	],
	[
		3530,
		2
	],
	[
		[
			3531,
			3534
		],
		3
	],
	[
		[
			3535,
			3540
		],
		2
	],
	[
		3541,
		3
	],
	[
		3542,
		2
	],
	[
		3543,
		3
	],
	[
		[
			3544,
			3551
		],
		2
	],
	[
		[
			3552,
			3557
		],
		3
	],
	[
		[
			3558,
			3567
		],
		2
	],
	[
		[
			3568,
			3569
		],
		3
	],
	[
		[
			3570,
			3571
		],
		2
	],
	[
		3572,
		2
	],
	[
		[
			3573,
			3584
		],
		3
	],
	[
		[
			3585,
			3634
		],
		2
	],
	[
		3635,
		1,
		"ํา"
	],
	[
		[
			3636,
			3642
		],
		2
	],
	[
		[
			3643,
			3646
		],
		3
	],
	[
		3647,
		2
	],
	[
		[
			3648,
			3662
		],
		2
	],
	[
		3663,
		2
	],
	[
		[
			3664,
			3673
		],
		2
	],
	[
		[
			3674,
			3675
		],
		2
	],
	[
		[
			3676,
			3712
		],
		3
	],
	[
		[
			3713,
			3714
		],
		2
	],
	[
		3715,
		3
	],
	[
		3716,
		2
	],
	[
		3717,
		3
	],
	[
		3718,
		2
	],
	[
		[
			3719,
			3720
		],
		2
	],
	[
		3721,
		2
	],
	[
		3722,
		2
	],
	[
		3723,
		3
	],
	[
		3724,
		2
	],
	[
		3725,
		2
	],
	[
		[
			3726,
			3731
		],
		2
	],
	[
		[
			3732,
			3735
		],
		2
	],
	[
		3736,
		2
	],
	[
		[
			3737,
			3743
		],
		2
	],
	[
		3744,
		2
	],
	[
		[
			3745,
			3747
		],
		2
	],
	[
		3748,
		3
	],
	[
		3749,
		2
	],
	[
		3750,
		3
	],
	[
		3751,
		2
	],
	[
		[
			3752,
			3753
		],
		2
	],
	[
		[
			3754,
			3755
		],
		2
	],
	[
		3756,
		2
	],
	[
		[
			3757,
			3762
		],
		2
	],
	[
		3763,
		1,
		"ໍາ"
	],
	[
		[
			3764,
			3769
		],
		2
	],
	[
		3770,
		2
	],
	[
		[
			3771,
			3773
		],
		2
	],
	[
		[
			3774,
			3775
		],
		3
	],
	[
		[
			3776,
			3780
		],
		2
	],
	[
		3781,
		3
	],
	[
		3782,
		2
	],
	[
		3783,
		3
	],
	[
		[
			3784,
			3789
		],
		2
	],
	[
		3790,
		2
	],
	[
		3791,
		3
	],
	[
		[
			3792,
			3801
		],
		2
	],
	[
		[
			3802,
			3803
		],
		3
	],
	[
		3804,
		1,
		"ຫນ"
	],
	[
		3805,
		1,
		"ຫມ"
	],
	[
		[
			3806,
			3807
		],
		2
	],
	[
		[
			3808,
			3839
		],
		3
	],
	[
		3840,
		2
	],
	[
		[
			3841,
			3850
		],
		2
	],
	[
		3851,
		2
	],
	[
		3852,
		1,
		"་"
	],
	[
		[
			3853,
			3863
		],
		2
	],
	[
		[
			3864,
			3865
		],
		2
	],
	[
		[
			3866,
			3871
		],
		2
	],
	[
		[
			3872,
			3881
		],
		2
	],
	[
		[
			3882,
			3892
		],
		2
	],
	[
		3893,
		2
	],
	[
		3894,
		2
	],
	[
		3895,
		2
	],
	[
		3896,
		2
	],
	[
		3897,
		2
	],
	[
		[
			3898,
			3901
		],
		2
	],
	[
		[
			3902,
			3906
		],
		2
	],
	[
		3907,
		1,
		"གྷ"
	],
	[
		[
			3908,
			3911
		],
		2
	],
	[
		3912,
		3
	],
	[
		[
			3913,
			3916
		],
		2
	],
	[
		3917,
		1,
		"ཌྷ"
	],
	[
		[
			3918,
			3921
		],
		2
	],
	[
		3922,
		1,
		"དྷ"
	],
	[
		[
			3923,
			3926
		],
		2
	],
	[
		3927,
		1,
		"བྷ"
	],
	[
		[
			3928,
			3931
		],
		2
	],
	[
		3932,
		1,
		"ཛྷ"
	],
	[
		[
			3933,
			3944
		],
		2
	],
	[
		3945,
		1,
		"ཀྵ"
	],
	[
		3946,
		2
	],
	[
		[
			3947,
			3948
		],
		2
	],
	[
		[
			3949,
			3952
		],
		3
	],
	[
		[
			3953,
			3954
		],
		2
	],
	[
		3955,
		1,
		"ཱི"
	],
	[
		3956,
		2
	],
	[
		3957,
		1,
		"ཱུ"
	],
	[
		3958,
		1,
		"ྲྀ"
	],
	[
		3959,
		1,
		"ྲཱྀ"
	],
	[
		3960,
		1,
		"ླྀ"
	],
	[
		3961,
		1,
		"ླཱྀ"
	],
	[
		[
			3962,
			3968
		],
		2
	],
	[
		3969,
		1,
		"ཱྀ"
	],
	[
		[
			3970,
			3972
		],
		2
	],
	[
		3973,
		2
	],
	[
		[
			3974,
			3979
		],
		2
	],
	[
		[
			3980,
			3983
		],
		2
	],
	[
		[
			3984,
			3986
		],
		2
	],
	[
		3987,
		1,
		"ྒྷ"
	],
	[
		[
			3988,
			3989
		],
		2
	],
	[
		3990,
		2
	],
	[
		3991,
		2
	],
	[
		3992,
		3
	],
	[
		[
			3993,
			3996
		],
		2
	],
	[
		3997,
		1,
		"ྜྷ"
	],
	[
		[
			3998,
			4001
		],
		2
	],
	[
		4002,
		1,
		"ྡྷ"
	],
	[
		[
			4003,
			4006
		],
		2
	],
	[
		4007,
		1,
		"ྦྷ"
	],
	[
		[
			4008,
			4011
		],
		2
	],
	[
		4012,
		1,
		"ྫྷ"
	],
	[
		4013,
		2
	],
	[
		[
			4014,
			4016
		],
		2
	],
	[
		[
			4017,
			4023
		],
		2
	],
	[
		4024,
		2
	],
	[
		4025,
		1,
		"ྐྵ"
	],
	[
		[
			4026,
			4028
		],
		2
	],
	[
		4029,
		3
	],
	[
		[
			4030,
			4037
		],
		2
	],
	[
		4038,
		2
	],
	[
		[
			4039,
			4044
		],
		2
	],
	[
		4045,
		3
	],
	[
		4046,
		2
	],
	[
		4047,
		2
	],
	[
		[
			4048,
			4049
		],
		2
	],
	[
		[
			4050,
			4052
		],
		2
	],
	[
		[
			4053,
			4056
		],
		2
	],
	[
		[
			4057,
			4058
		],
		2
	],
	[
		[
			4059,
			4095
		],
		3
	],
	[
		[
			4096,
			4129
		],
		2
	],
	[
		4130,
		2
	],
	[
		[
			4131,
			4135
		],
		2
	],
	[
		4136,
		2
	],
	[
		[
			4137,
			4138
		],
		2
	],
	[
		4139,
		2
	],
	[
		[
			4140,
			4146
		],
		2
	],
	[
		[
			4147,
			4149
		],
		2
	],
	[
		[
			4150,
			4153
		],
		2
	],
	[
		[
			4154,
			4159
		],
		2
	],
	[
		[
			4160,
			4169
		],
		2
	],
	[
		[
			4170,
			4175
		],
		2
	],
	[
		[
			4176,
			4185
		],
		2
	],
	[
		[
			4186,
			4249
		],
		2
	],
	[
		[
			4250,
			4253
		],
		2
	],
	[
		[
			4254,
			4255
		],
		2
	],
	[
		[
			4256,
			4293
		],
		3
	],
	[
		4294,
		3
	],
	[
		4295,
		1,
		"ⴧ"
	],
	[
		[
			4296,
			4300
		],
		3
	],
	[
		4301,
		1,
		"ⴭ"
	],
	[
		[
			4302,
			4303
		],
		3
	],
	[
		[
			4304,
			4342
		],
		2
	],
	[
		[
			4343,
			4344
		],
		2
	],
	[
		[
			4345,
			4346
		],
		2
	],
	[
		4347,
		2
	],
	[
		4348,
		1,
		"ნ"
	],
	[
		[
			4349,
			4351
		],
		2
	],
	[
		[
			4352,
			4441
		],
		2
	],
	[
		[
			4442,
			4446
		],
		2
	],
	[
		[
			4447,
			4448
		],
		3
	],
	[
		[
			4449,
			4514
		],
		2
	],
	[
		[
			4515,
			4519
		],
		2
	],
	[
		[
			4520,
			4601
		],
		2
	],
	[
		[
			4602,
			4607
		],
		2
	],
	[
		[
			4608,
			4614
		],
		2
	],
	[
		4615,
		2
	],
	[
		[
			4616,
			4678
		],
		2
	],
	[
		4679,
		2
	],
	[
		4680,
		2
	],
	[
		4681,
		3
	],
	[
		[
			4682,
			4685
		],
		2
	],
	[
		[
			4686,
			4687
		],
		3
	],
	[
		[
			4688,
			4694
		],
		2
	],
	[
		4695,
		3
	],
	[
		4696,
		2
	],
	[
		4697,
		3
	],
	[
		[
			4698,
			4701
		],
		2
	],
	[
		[
			4702,
			4703
		],
		3
	],
	[
		[
			4704,
			4742
		],
		2
	],
	[
		4743,
		2
	],
	[
		4744,
		2
	],
	[
		4745,
		3
	],
	[
		[
			4746,
			4749
		],
		2
	],
	[
		[
			4750,
			4751
		],
		3
	],
	[
		[
			4752,
			4782
		],
		2
	],
	[
		4783,
		2
	],
	[
		4784,
		2
	],
	[
		4785,
		3
	],
	[
		[
			4786,
			4789
		],
		2
	],
	[
		[
			4790,
			4791
		],
		3
	],
	[
		[
			4792,
			4798
		],
		2
	],
	[
		4799,
		3
	],
	[
		4800,
		2
	],
	[
		4801,
		3
	],
	[
		[
			4802,
			4805
		],
		2
	],
	[
		[
			4806,
			4807
		],
		3
	],
	[
		[
			4808,
			4814
		],
		2
	],
	[
		4815,
		2
	],
	[
		[
			4816,
			4822
		],
		2
	],
	[
		4823,
		3
	],
	[
		[
			4824,
			4846
		],
		2
	],
	[
		4847,
		2
	],
	[
		[
			4848,
			4878
		],
		2
	],
	[
		4879,
		2
	],
	[
		4880,
		2
	],
	[
		4881,
		3
	],
	[
		[
			4882,
			4885
		],
		2
	],
	[
		[
			4886,
			4887
		],
		3
	],
	[
		[
			4888,
			4894
		],
		2
	],
	[
		4895,
		2
	],
	[
		[
			4896,
			4934
		],
		2
	],
	[
		4935,
		2
	],
	[
		[
			4936,
			4954
		],
		2
	],
	[
		[
			4955,
			4956
		],
		3
	],
	[
		[
			4957,
			4958
		],
		2
	],
	[
		4959,
		2
	],
	[
		4960,
		2
	],
	[
		[
			4961,
			4988
		],
		2
	],
	[
		[
			4989,
			4991
		],
		3
	],
	[
		[
			4992,
			5007
		],
		2
	],
	[
		[
			5008,
			5017
		],
		2
	],
	[
		[
			5018,
			5023
		],
		3
	],
	[
		[
			5024,
			5108
		],
		2
	],
	[
		5109,
		2
	],
	[
		[
			5110,
			5111
		],
		3
	],
	[
		5112,
		1,
		"Ᏸ"
	],
	[
		5113,
		1,
		"Ᏹ"
	],
	[
		5114,
		1,
		"Ᏺ"
	],
	[
		5115,
		1,
		"Ᏻ"
	],
	[
		5116,
		1,
		"Ᏼ"
	],
	[
		5117,
		1,
		"Ᏽ"
	],
	[
		[
			5118,
			5119
		],
		3
	],
	[
		5120,
		2
	],
	[
		[
			5121,
			5740
		],
		2
	],
	[
		[
			5741,
			5742
		],
		2
	],
	[
		[
			5743,
			5750
		],
		2
	],
	[
		[
			5751,
			5759
		],
		2
	],
	[
		5760,
		3
	],
	[
		[
			5761,
			5786
		],
		2
	],
	[
		[
			5787,
			5788
		],
		2
	],
	[
		[
			5789,
			5791
		],
		3
	],
	[
		[
			5792,
			5866
		],
		2
	],
	[
		[
			5867,
			5872
		],
		2
	],
	[
		[
			5873,
			5880
		],
		2
	],
	[
		[
			5881,
			5887
		],
		3
	],
	[
		[
			5888,
			5900
		],
		2
	],
	[
		5901,
		2
	],
	[
		[
			5902,
			5908
		],
		2
	],
	[
		5909,
		2
	],
	[
		[
			5910,
			5918
		],
		3
	],
	[
		5919,
		2
	],
	[
		[
			5920,
			5940
		],
		2
	],
	[
		[
			5941,
			5942
		],
		2
	],
	[
		[
			5943,
			5951
		],
		3
	],
	[
		[
			5952,
			5971
		],
		2
	],
	[
		[
			5972,
			5983
		],
		3
	],
	[
		[
			5984,
			5996
		],
		2
	],
	[
		5997,
		3
	],
	[
		[
			5998,
			6000
		],
		2
	],
	[
		6001,
		3
	],
	[
		[
			6002,
			6003
		],
		2
	],
	[
		[
			6004,
			6015
		],
		3
	],
	[
		[
			6016,
			6067
		],
		2
	],
	[
		[
			6068,
			6069
		],
		3
	],
	[
		[
			6070,
			6099
		],
		2
	],
	[
		[
			6100,
			6102
		],
		2
	],
	[
		6103,
		2
	],
	[
		[
			6104,
			6107
		],
		2
	],
	[
		6108,
		2
	],
	[
		6109,
		2
	],
	[
		[
			6110,
			6111
		],
		3
	],
	[
		[
			6112,
			6121
		],
		2
	],
	[
		[
			6122,
			6127
		],
		3
	],
	[
		[
			6128,
			6137
		],
		2
	],
	[
		[
			6138,
			6143
		],
		3
	],
	[
		[
			6144,
			6149
		],
		2
	],
	[
		6150,
		3
	],
	[
		[
			6151,
			6154
		],
		2
	],
	[
		[
			6155,
			6157
		],
		7
	],
	[
		6158,
		3
	],
	[
		6159,
		7
	],
	[
		[
			6160,
			6169
		],
		2
	],
	[
		[
			6170,
			6175
		],
		3
	],
	[
		[
			6176,
			6263
		],
		2
	],
	[
		6264,
		2
	],
	[
		[
			6265,
			6271
		],
		3
	],
	[
		[
			6272,
			6313
		],
		2
	],
	[
		6314,
		2
	],
	[
		[
			6315,
			6319
		],
		3
	],
	[
		[
			6320,
			6389
		],
		2
	],
	[
		[
			6390,
			6399
		],
		3
	],
	[
		[
			6400,
			6428
		],
		2
	],
	[
		[
			6429,
			6430
		],
		2
	],
	[
		6431,
		3
	],
	[
		[
			6432,
			6443
		],
		2
	],
	[
		[
			6444,
			6447
		],
		3
	],
	[
		[
			6448,
			6459
		],
		2
	],
	[
		[
			6460,
			6463
		],
		3
	],
	[
		6464,
		2
	],
	[
		[
			6465,
			6467
		],
		3
	],
	[
		[
			6468,
			6469
		],
		2
	],
	[
		[
			6470,
			6509
		],
		2
	],
	[
		[
			6510,
			6511
		],
		3
	],
	[
		[
			6512,
			6516
		],
		2
	],
	[
		[
			6517,
			6527
		],
		3
	],
	[
		[
			6528,
			6569
		],
		2
	],
	[
		[
			6570,
			6571
		],
		2
	],
	[
		[
			6572,
			6575
		],
		3
	],
	[
		[
			6576,
			6601
		],
		2
	],
	[
		[
			6602,
			6607
		],
		3
	],
	[
		[
			6608,
			6617
		],
		2
	],
	[
		6618,
		2
	],
	[
		[
			6619,
			6621
		],
		3
	],
	[
		[
			6622,
			6623
		],
		2
	],
	[
		[
			6624,
			6655
		],
		2
	],
	[
		[
			6656,
			6683
		],
		2
	],
	[
		[
			6684,
			6685
		],
		3
	],
	[
		[
			6686,
			6687
		],
		2
	],
	[
		[
			6688,
			6750
		],
		2
	],
	[
		6751,
		3
	],
	[
		[
			6752,
			6780
		],
		2
	],
	[
		[
			6781,
			6782
		],
		3
	],
	[
		[
			6783,
			6793
		],
		2
	],
	[
		[
			6794,
			6799
		],
		3
	],
	[
		[
			6800,
			6809
		],
		2
	],
	[
		[
			6810,
			6815
		],
		3
	],
	[
		[
			6816,
			6822
		],
		2
	],
	[
		6823,
		2
	],
	[
		[
			6824,
			6829
		],
		2
	],
	[
		[
			6830,
			6831
		],
		3
	],
	[
		[
			6832,
			6845
		],
		2
	],
	[
		6846,
		2
	],
	[
		[
			6847,
			6848
		],
		2
	],
	[
		[
			6849,
			6862
		],
		2
	],
	[
		[
			6863,
			6911
		],
		3
	],
	[
		[
			6912,
			6987
		],
		2
	],
	[
		6988,
		2
	],
	[
		[
			6989,
			6991
		],
		3
	],
	[
		[
			6992,
			7001
		],
		2
	],
	[
		[
			7002,
			7018
		],
		2
	],
	[
		[
			7019,
			7027
		],
		2
	],
	[
		[
			7028,
			7036
		],
		2
	],
	[
		[
			7037,
			7038
		],
		2
	],
	[
		7039,
		3
	],
	[
		[
			7040,
			7082
		],
		2
	],
	[
		[
			7083,
			7085
		],
		2
	],
	[
		[
			7086,
			7097
		],
		2
	],
	[
		[
			7098,
			7103
		],
		2
	],
	[
		[
			7104,
			7155
		],
		2
	],
	[
		[
			7156,
			7163
		],
		3
	],
	[
		[
			7164,
			7167
		],
		2
	],
	[
		[
			7168,
			7223
		],
		2
	],
	[
		[
			7224,
			7226
		],
		3
	],
	[
		[
			7227,
			7231
		],
		2
	],
	[
		[
			7232,
			7241
		],
		2
	],
	[
		[
			7242,
			7244
		],
		3
	],
	[
		[
			7245,
			7293
		],
		2
	],
	[
		[
			7294,
			7295
		],
		2
	],
	[
		7296,
		1,
		"в"
	],
	[
		7297,
		1,
		"д"
	],
	[
		7298,
		1,
		"о"
	],
	[
		7299,
		1,
		"с"
	],
	[
		[
			7300,
			7301
		],
		1,
		"т"
	],
	[
		7302,
		1,
		"ъ"
	],
	[
		7303,
		1,
		"ѣ"
	],
	[
		7304,
		1,
		"ꙋ"
	],
	[
		[
			7305,
			7311
		],
		3
	],
	[
		7312,
		1,
		"ა"
	],
	[
		7313,
		1,
		"ბ"
	],
	[
		7314,
		1,
		"გ"
	],
	[
		7315,
		1,
		"დ"
	],
	[
		7316,
		1,
		"ე"
	],
	[
		7317,
		1,
		"ვ"
	],
	[
		7318,
		1,
		"ზ"
	],
	[
		7319,
		1,
		"თ"
	],
	[
		7320,
		1,
		"ი"
	],
	[
		7321,
		1,
		"კ"
	],
	[
		7322,
		1,
		"ლ"
	],
	[
		7323,
		1,
		"მ"
	],
	[
		7324,
		1,
		"ნ"
	],
	[
		7325,
		1,
		"ო"
	],
	[
		7326,
		1,
		"პ"
	],
	[
		7327,
		1,
		"ჟ"
	],
	[
		7328,
		1,
		"რ"
	],
	[
		7329,
		1,
		"ს"
	],
	[
		7330,
		1,
		"ტ"
	],
	[
		7331,
		1,
		"უ"
	],
	[
		7332,
		1,
		"ფ"
	],
	[
		7333,
		1,
		"ქ"
	],
	[
		7334,
		1,
		"ღ"
	],
	[
		7335,
		1,
		"ყ"
	],
	[
		7336,
		1,
		"შ"
	],
	[
		7337,
		1,
		"ჩ"
	],
	[
		7338,
		1,
		"ც"
	],
	[
		7339,
		1,
		"ძ"
	],
	[
		7340,
		1,
		"წ"
	],
	[
		7341,
		1,
		"ჭ"
	],
	[
		7342,
		1,
		"ხ"
	],
	[
		7343,
		1,
		"ჯ"
	],
	[
		7344,
		1,
		"ჰ"
	],
	[
		7345,
		1,
		"ჱ"
	],
	[
		7346,
		1,
		"ჲ"
	],
	[
		7347,
		1,
		"ჳ"
	],
	[
		7348,
		1,
		"ჴ"
	],
	[
		7349,
		1,
		"ჵ"
	],
	[
		7350,
		1,
		"ჶ"
	],
	[
		7351,
		1,
		"ჷ"
	],
	[
		7352,
		1,
		"ჸ"
	],
	[
		7353,
		1,
		"ჹ"
	],
	[
		7354,
		1,
		"ჺ"
	],
	[
		[
			7355,
			7356
		],
		3
	],
	[
		7357,
		1,
		"ჽ"
	],
	[
		7358,
		1,
		"ჾ"
	],
	[
		7359,
		1,
		"ჿ"
	],
	[
		[
			7360,
			7367
		],
		2
	],
	[
		[
			7368,
			7375
		],
		3
	],
	[
		[
			7376,
			7378
		],
		2
	],
	[
		7379,
		2
	],
	[
		[
			7380,
			7410
		],
		2
	],
	[
		[
			7411,
			7414
		],
		2
	],
	[
		7415,
		2
	],
	[
		[
			7416,
			7417
		],
		2
	],
	[
		7418,
		2
	],
	[
		[
			7419,
			7423
		],
		3
	],
	[
		[
			7424,
			7467
		],
		2
	],
	[
		7468,
		1,
		"a"
	],
	[
		7469,
		1,
		"æ"
	],
	[
		7470,
		1,
		"b"
	],
	[
		7471,
		2
	],
	[
		7472,
		1,
		"d"
	],
	[
		7473,
		1,
		"e"
	],
	[
		7474,
		1,
		"ǝ"
	],
	[
		7475,
		1,
		"g"
	],
	[
		7476,
		1,
		"h"
	],
	[
		7477,
		1,
		"i"
	],
	[
		7478,
		1,
		"j"
	],
	[
		7479,
		1,
		"k"
	],
	[
		7480,
		1,
		"l"
	],
	[
		7481,
		1,
		"m"
	],
	[
		7482,
		1,
		"n"
	],
	[
		7483,
		2
	],
	[
		7484,
		1,
		"o"
	],
	[
		7485,
		1,
		"ȣ"
	],
	[
		7486,
		1,
		"p"
	],
	[
		7487,
		1,
		"r"
	],
	[
		7488,
		1,
		"t"
	],
	[
		7489,
		1,
		"u"
	],
	[
		7490,
		1,
		"w"
	],
	[
		7491,
		1,
		"a"
	],
	[
		7492,
		1,
		"ɐ"
	],
	[
		7493,
		1,
		"ɑ"
	],
	[
		7494,
		1,
		"ᴂ"
	],
	[
		7495,
		1,
		"b"
	],
	[
		7496,
		1,
		"d"
	],
	[
		7497,
		1,
		"e"
	],
	[
		7498,
		1,
		"ə"
	],
	[
		7499,
		1,
		"ɛ"
	],
	[
		7500,
		1,
		"ɜ"
	],
	[
		7501,
		1,
		"g"
	],
	[
		7502,
		2
	],
	[
		7503,
		1,
		"k"
	],
	[
		7504,
		1,
		"m"
	],
	[
		7505,
		1,
		"ŋ"
	],
	[
		7506,
		1,
		"o"
	],
	[
		7507,
		1,
		"ɔ"
	],
	[
		7508,
		1,
		"ᴖ"
	],
	[
		7509,
		1,
		"ᴗ"
	],
	[
		7510,
		1,
		"p"
	],
	[
		7511,
		1,
		"t"
	],
	[
		7512,
		1,
		"u"
	],
	[
		7513,
		1,
		"ᴝ"
	],
	[
		7514,
		1,
		"ɯ"
	],
	[
		7515,
		1,
		"v"
	],
	[
		7516,
		1,
		"ᴥ"
	],
	[
		7517,
		1,
		"β"
	],
	[
		7518,
		1,
		"γ"
	],
	[
		7519,
		1,
		"δ"
	],
	[
		7520,
		1,
		"φ"
	],
	[
		7521,
		1,
		"χ"
	],
	[
		7522,
		1,
		"i"
	],
	[
		7523,
		1,
		"r"
	],
	[
		7524,
		1,
		"u"
	],
	[
		7525,
		1,
		"v"
	],
	[
		7526,
		1,
		"β"
	],
	[
		7527,
		1,
		"γ"
	],
	[
		7528,
		1,
		"ρ"
	],
	[
		7529,
		1,
		"φ"
	],
	[
		7530,
		1,
		"χ"
	],
	[
		7531,
		2
	],
	[
		[
			7532,
			7543
		],
		2
	],
	[
		7544,
		1,
		"н"
	],
	[
		[
			7545,
			7578
		],
		2
	],
	[
		7579,
		1,
		"ɒ"
	],
	[
		7580,
		1,
		"c"
	],
	[
		7581,
		1,
		"ɕ"
	],
	[
		7582,
		1,
		"ð"
	],
	[
		7583,
		1,
		"ɜ"
	],
	[
		7584,
		1,
		"f"
	],
	[
		7585,
		1,
		"ɟ"
	],
	[
		7586,
		1,
		"ɡ"
	],
	[
		7587,
		1,
		"ɥ"
	],
	[
		7588,
		1,
		"ɨ"
	],
	[
		7589,
		1,
		"ɩ"
	],
	[
		7590,
		1,
		"ɪ"
	],
	[
		7591,
		1,
		"ᵻ"
	],
	[
		7592,
		1,
		"ʝ"
	],
	[
		7593,
		1,
		"ɭ"
	],
	[
		7594,
		1,
		"ᶅ"
	],
	[
		7595,
		1,
		"ʟ"
	],
	[
		7596,
		1,
		"ɱ"
	],
	[
		7597,
		1,
		"ɰ"
	],
	[
		7598,
		1,
		"ɲ"
	],
	[
		7599,
		1,
		"ɳ"
	],
	[
		7600,
		1,
		"ɴ"
	],
	[
		7601,
		1,
		"ɵ"
	],
	[
		7602,
		1,
		"ɸ"
	],
	[
		7603,
		1,
		"ʂ"
	],
	[
		7604,
		1,
		"ʃ"
	],
	[
		7605,
		1,
		"ƫ"
	],
	[
		7606,
		1,
		"ʉ"
	],
	[
		7607,
		1,
		"ʊ"
	],
	[
		7608,
		1,
		"ᴜ"
	],
	[
		7609,
		1,
		"ʋ"
	],
	[
		7610,
		1,
		"ʌ"
	],
	[
		7611,
		1,
		"z"
	],
	[
		7612,
		1,
		"ʐ"
	],
	[
		7613,
		1,
		"ʑ"
	],
	[
		7614,
		1,
		"ʒ"
	],
	[
		7615,
		1,
		"θ"
	],
	[
		[
			7616,
			7619
		],
		2
	],
	[
		[
			7620,
			7626
		],
		2
	],
	[
		[
			7627,
			7654
		],
		2
	],
	[
		[
			7655,
			7669
		],
		2
	],
	[
		[
			7670,
			7673
		],
		2
	],
	[
		7674,
		2
	],
	[
		7675,
		2
	],
	[
		7676,
		2
	],
	[
		7677,
		2
	],
	[
		[
			7678,
			7679
		],
		2
	],
	[
		7680,
		1,
		"ḁ"
	],
	[
		7681,
		2
	],
	[
		7682,
		1,
		"ḃ"
	],
	[
		7683,
		2
	],
	[
		7684,
		1,
		"ḅ"
	],
	[
		7685,
		2
	],
	[
		7686,
		1,
		"ḇ"
	],
	[
		7687,
		2
	],
	[
		7688,
		1,
		"ḉ"
	],
	[
		7689,
		2
	],
	[
		7690,
		1,
		"ḋ"
	],
	[
		7691,
		2
	],
	[
		7692,
		1,
		"ḍ"
	],
	[
		7693,
		2
	],
	[
		7694,
		1,
		"ḏ"
	],
	[
		7695,
		2
	],
	[
		7696,
		1,
		"ḑ"
	],
	[
		7697,
		2
	],
	[
		7698,
		1,
		"ḓ"
	],
	[
		7699,
		2
	],
	[
		7700,
		1,
		"ḕ"
	],
	[
		7701,
		2
	],
	[
		7702,
		1,
		"ḗ"
	],
	[
		7703,
		2
	],
	[
		7704,
		1,
		"ḙ"
	],
	[
		7705,
		2
	],
	[
		7706,
		1,
		"ḛ"
	],
	[
		7707,
		2
	],
	[
		7708,
		1,
		"ḝ"
	],
	[
		7709,
		2
	],
	[
		7710,
		1,
		"ḟ"
	],
	[
		7711,
		2
	],
	[
		7712,
		1,
		"ḡ"
	],
	[
		7713,
		2
	],
	[
		7714,
		1,
		"ḣ"
	],
	[
		7715,
		2
	],
	[
		7716,
		1,
		"ḥ"
	],
	[
		7717,
		2
	],
	[
		7718,
		1,
		"ḧ"
	],
	[
		7719,
		2
	],
	[
		7720,
		1,
		"ḩ"
	],
	[
		7721,
		2
	],
	[
		7722,
		1,
		"ḫ"
	],
	[
		7723,
		2
	],
	[
		7724,
		1,
		"ḭ"
	],
	[
		7725,
		2
	],
	[
		7726,
		1,
		"ḯ"
	],
	[
		7727,
		2
	],
	[
		7728,
		1,
		"ḱ"
	],
	[
		7729,
		2
	],
	[
		7730,
		1,
		"ḳ"
	],
	[
		7731,
		2
	],
	[
		7732,
		1,
		"ḵ"
	],
	[
		7733,
		2
	],
	[
		7734,
		1,
		"ḷ"
	],
	[
		7735,
		2
	],
	[
		7736,
		1,
		"ḹ"
	],
	[
		7737,
		2
	],
	[
		7738,
		1,
		"ḻ"
	],
	[
		7739,
		2
	],
	[
		7740,
		1,
		"ḽ"
	],
	[
		7741,
		2
	],
	[
		7742,
		1,
		"ḿ"
	],
	[
		7743,
		2
	],
	[
		7744,
		1,
		"ṁ"
	],
	[
		7745,
		2
	],
	[
		7746,
		1,
		"ṃ"
	],
	[
		7747,
		2
	],
	[
		7748,
		1,
		"ṅ"
	],
	[
		7749,
		2
	],
	[
		7750,
		1,
		"ṇ"
	],
	[
		7751,
		2
	],
	[
		7752,
		1,
		"ṉ"
	],
	[
		7753,
		2
	],
	[
		7754,
		1,
		"ṋ"
	],
	[
		7755,
		2
	],
	[
		7756,
		1,
		"ṍ"
	],
	[
		7757,
		2
	],
	[
		7758,
		1,
		"ṏ"
	],
	[
		7759,
		2
	],
	[
		7760,
		1,
		"ṑ"
	],
	[
		7761,
		2
	],
	[
		7762,
		1,
		"ṓ"
	],
	[
		7763,
		2
	],
	[
		7764,
		1,
		"ṕ"
	],
	[
		7765,
		2
	],
	[
		7766,
		1,
		"ṗ"
	],
	[
		7767,
		2
	],
	[
		7768,
		1,
		"ṙ"
	],
	[
		7769,
		2
	],
	[
		7770,
		1,
		"ṛ"
	],
	[
		7771,
		2
	],
	[
		7772,
		1,
		"ṝ"
	],
	[
		7773,
		2
	],
	[
		7774,
		1,
		"ṟ"
	],
	[
		7775,
		2
	],
	[
		7776,
		1,
		"ṡ"
	],
	[
		7777,
		2
	],
	[
		7778,
		1,
		"ṣ"
	],
	[
		7779,
		2
	],
	[
		7780,
		1,
		"ṥ"
	],
	[
		7781,
		2
	],
	[
		7782,
		1,
		"ṧ"
	],
	[
		7783,
		2
	],
	[
		7784,
		1,
		"ṩ"
	],
	[
		7785,
		2
	],
	[
		7786,
		1,
		"ṫ"
	],
	[
		7787,
		2
	],
	[
		7788,
		1,
		"ṭ"
	],
	[
		7789,
		2
	],
	[
		7790,
		1,
		"ṯ"
	],
	[
		7791,
		2
	],
	[
		7792,
		1,
		"ṱ"
	],
	[
		7793,
		2
	],
	[
		7794,
		1,
		"ṳ"
	],
	[
		7795,
		2
	],
	[
		7796,
		1,
		"ṵ"
	],
	[
		7797,
		2
	],
	[
		7798,
		1,
		"ṷ"
	],
	[
		7799,
		2
	],
	[
		7800,
		1,
		"ṹ"
	],
	[
		7801,
		2
	],
	[
		7802,
		1,
		"ṻ"
	],
	[
		7803,
		2
	],
	[
		7804,
		1,
		"ṽ"
	],
	[
		7805,
		2
	],
	[
		7806,
		1,
		"ṿ"
	],
	[
		7807,
		2
	],
	[
		7808,
		1,
		"ẁ"
	],
	[
		7809,
		2
	],
	[
		7810,
		1,
		"ẃ"
	],
	[
		7811,
		2
	],
	[
		7812,
		1,
		"ẅ"
	],
	[
		7813,
		2
	],
	[
		7814,
		1,
		"ẇ"
	],
	[
		7815,
		2
	],
	[
		7816,
		1,
		"ẉ"
	],
	[
		7817,
		2
	],
	[
		7818,
		1,
		"ẋ"
	],
	[
		7819,
		2
	],
	[
		7820,
		1,
		"ẍ"
	],
	[
		7821,
		2
	],
	[
		7822,
		1,
		"ẏ"
	],
	[
		7823,
		2
	],
	[
		7824,
		1,
		"ẑ"
	],
	[
		7825,
		2
	],
	[
		7826,
		1,
		"ẓ"
	],
	[
		7827,
		2
	],
	[
		7828,
		1,
		"ẕ"
	],
	[
		[
			7829,
			7833
		],
		2
	],
	[
		7834,
		1,
		"aʾ"
	],
	[
		7835,
		1,
		"ṡ"
	],
	[
		[
			7836,
			7837
		],
		2
	],
	[
		7838,
		1,
		"ß"
	],
	[
		7839,
		2
	],
	[
		7840,
		1,
		"ạ"
	],
	[
		7841,
		2
	],
	[
		7842,
		1,
		"ả"
	],
	[
		7843,
		2
	],
	[
		7844,
		1,
		"ấ"
	],
	[
		7845,
		2
	],
	[
		7846,
		1,
		"ầ"
	],
	[
		7847,
		2
	],
	[
		7848,
		1,
		"ẩ"
	],
	[
		7849,
		2
	],
	[
		7850,
		1,
		"ẫ"
	],
	[
		7851,
		2
	],
	[
		7852,
		1,
		"ậ"
	],
	[
		7853,
		2
	],
	[
		7854,
		1,
		"ắ"
	],
	[
		7855,
		2
	],
	[
		7856,
		1,
		"ằ"
	],
	[
		7857,
		2
	],
	[
		7858,
		1,
		"ẳ"
	],
	[
		7859,
		2
	],
	[
		7860,
		1,
		"ẵ"
	],
	[
		7861,
		2
	],
	[
		7862,
		1,
		"ặ"
	],
	[
		7863,
		2
	],
	[
		7864,
		1,
		"ẹ"
	],
	[
		7865,
		2
	],
	[
		7866,
		1,
		"ẻ"
	],
	[
		7867,
		2
	],
	[
		7868,
		1,
		"ẽ"
	],
	[
		7869,
		2
	],
	[
		7870,
		1,
		"ế"
	],
	[
		7871,
		2
	],
	[
		7872,
		1,
		"ề"
	],
	[
		7873,
		2
	],
	[
		7874,
		1,
		"ể"
	],
	[
		7875,
		2
	],
	[
		7876,
		1,
		"ễ"
	],
	[
		7877,
		2
	],
	[
		7878,
		1,
		"ệ"
	],
	[
		7879,
		2
	],
	[
		7880,
		1,
		"ỉ"
	],
	[
		7881,
		2
	],
	[
		7882,
		1,
		"ị"
	],
	[
		7883,
		2
	],
	[
		7884,
		1,
		"ọ"
	],
	[
		7885,
		2
	],
	[
		7886,
		1,
		"ỏ"
	],
	[
		7887,
		2
	],
	[
		7888,
		1,
		"ố"
	],
	[
		7889,
		2
	],
	[
		7890,
		1,
		"ồ"
	],
	[
		7891,
		2
	],
	[
		7892,
		1,
		"ổ"
	],
	[
		7893,
		2
	],
	[
		7894,
		1,
		"ỗ"
	],
	[
		7895,
		2
	],
	[
		7896,
		1,
		"ộ"
	],
	[
		7897,
		2
	],
	[
		7898,
		1,
		"ớ"
	],
	[
		7899,
		2
	],
	[
		7900,
		1,
		"ờ"
	],
	[
		7901,
		2
	],
	[
		7902,
		1,
		"ở"
	],
	[
		7903,
		2
	],
	[
		7904,
		1,
		"ỡ"
	],
	[
		7905,
		2
	],
	[
		7906,
		1,
		"ợ"
	],
	[
		7907,
		2
	],
	[
		7908,
		1,
		"ụ"
	],
	[
		7909,
		2
	],
	[
		7910,
		1,
		"ủ"
	],
	[
		7911,
		2
	],
	[
		7912,
		1,
		"ứ"
	],
	[
		7913,
		2
	],
	[
		7914,
		1,
		"ừ"
	],
	[
		7915,
		2
	],
	[
		7916,
		1,
		"ử"
	],
	[
		7917,
		2
	],
	[
		7918,
		1,
		"ữ"
	],
	[
		7919,
		2
	],
	[
		7920,
		1,
		"ự"
	],
	[
		7921,
		2
	],
	[
		7922,
		1,
		"ỳ"
	],
	[
		7923,
		2
	],
	[
		7924,
		1,
		"ỵ"
	],
	[
		7925,
		2
	],
	[
		7926,
		1,
		"ỷ"
	],
	[
		7927,
		2
	],
	[
		7928,
		1,
		"ỹ"
	],
	[
		7929,
		2
	],
	[
		7930,
		1,
		"ỻ"
	],
	[
		7931,
		2
	],
	[
		7932,
		1,
		"ỽ"
	],
	[
		7933,
		2
	],
	[
		7934,
		1,
		"ỿ"
	],
	[
		7935,
		2
	],
	[
		[
			7936,
			7943
		],
		2
	],
	[
		7944,
		1,
		"ἀ"
	],
	[
		7945,
		1,
		"ἁ"
	],
	[
		7946,
		1,
		"ἂ"
	],
	[
		7947,
		1,
		"ἃ"
	],
	[
		7948,
		1,
		"ἄ"
	],
	[
		7949,
		1,
		"ἅ"
	],
	[
		7950,
		1,
		"ἆ"
	],
	[
		7951,
		1,
		"ἇ"
	],
	[
		[
			7952,
			7957
		],
		2
	],
	[
		[
			7958,
			7959
		],
		3
	],
	[
		7960,
		1,
		"ἐ"
	],
	[
		7961,
		1,
		"ἑ"
	],
	[
		7962,
		1,
		"ἒ"
	],
	[
		7963,
		1,
		"ἓ"
	],
	[
		7964,
		1,
		"ἔ"
	],
	[
		7965,
		1,
		"ἕ"
	],
	[
		[
			7966,
			7967
		],
		3
	],
	[
		[
			7968,
			7975
		],
		2
	],
	[
		7976,
		1,
		"ἠ"
	],
	[
		7977,
		1,
		"ἡ"
	],
	[
		7978,
		1,
		"ἢ"
	],
	[
		7979,
		1,
		"ἣ"
	],
	[
		7980,
		1,
		"ἤ"
	],
	[
		7981,
		1,
		"ἥ"
	],
	[
		7982,
		1,
		"ἦ"
	],
	[
		7983,
		1,
		"ἧ"
	],
	[
		[
			7984,
			7991
		],
		2
	],
	[
		7992,
		1,
		"ἰ"
	],
	[
		7993,
		1,
		"ἱ"
	],
	[
		7994,
		1,
		"ἲ"
	],
	[
		7995,
		1,
		"ἳ"
	],
	[
		7996,
		1,
		"ἴ"
	],
	[
		7997,
		1,
		"ἵ"
	],
	[
		7998,
		1,
		"ἶ"
	],
	[
		7999,
		1,
		"ἷ"
	],
	[
		[
			8000,
			8005
		],
		2
	],
	[
		[
			8006,
			8007
		],
		3
	],
	[
		8008,
		1,
		"ὀ"
	],
	[
		8009,
		1,
		"ὁ"
	],
	[
		8010,
		1,
		"ὂ"
	],
	[
		8011,
		1,
		"ὃ"
	],
	[
		8012,
		1,
		"ὄ"
	],
	[
		8013,
		1,
		"ὅ"
	],
	[
		[
			8014,
			8015
		],
		3
	],
	[
		[
			8016,
			8023
		],
		2
	],
	[
		8024,
		3
	],
	[
		8025,
		1,
		"ὑ"
	],
	[
		8026,
		3
	],
	[
		8027,
		1,
		"ὓ"
	],
	[
		8028,
		3
	],
	[
		8029,
		1,
		"ὕ"
	],
	[
		8030,
		3
	],
	[
		8031,
		1,
		"ὗ"
	],
	[
		[
			8032,
			8039
		],
		2
	],
	[
		8040,
		1,
		"ὠ"
	],
	[
		8041,
		1,
		"ὡ"
	],
	[
		8042,
		1,
		"ὢ"
	],
	[
		8043,
		1,
		"ὣ"
	],
	[
		8044,
		1,
		"ὤ"
	],
	[
		8045,
		1,
		"ὥ"
	],
	[
		8046,
		1,
		"ὦ"
	],
	[
		8047,
		1,
		"ὧ"
	],
	[
		8048,
		2
	],
	[
		8049,
		1,
		"ά"
	],
	[
		8050,
		2
	],
	[
		8051,
		1,
		"έ"
	],
	[
		8052,
		2
	],
	[
		8053,
		1,
		"ή"
	],
	[
		8054,
		2
	],
	[
		8055,
		1,
		"ί"
	],
	[
		8056,
		2
	],
	[
		8057,
		1,
		"ό"
	],
	[
		8058,
		2
	],
	[
		8059,
		1,
		"ύ"
	],
	[
		8060,
		2
	],
	[
		8061,
		1,
		"ώ"
	],
	[
		[
			8062,
			8063
		],
		3
	],
	[
		8064,
		1,
		"ἀι"
	],
	[
		8065,
		1,
		"ἁι"
	],
	[
		8066,
		1,
		"ἂι"
	],
	[
		8067,
		1,
		"ἃι"
	],
	[
		8068,
		1,
		"ἄι"
	],
	[
		8069,
		1,
		"ἅι"
	],
	[
		8070,
		1,
		"ἆι"
	],
	[
		8071,
		1,
		"ἇι"
	],
	[
		8072,
		1,
		"ἀι"
	],
	[
		8073,
		1,
		"ἁι"
	],
	[
		8074,
		1,
		"ἂι"
	],
	[
		8075,
		1,
		"ἃι"
	],
	[
		8076,
		1,
		"ἄι"
	],
	[
		8077,
		1,
		"ἅι"
	],
	[
		8078,
		1,
		"ἆι"
	],
	[
		8079,
		1,
		"ἇι"
	],
	[
		8080,
		1,
		"ἠι"
	],
	[
		8081,
		1,
		"ἡι"
	],
	[
		8082,
		1,
		"ἢι"
	],
	[
		8083,
		1,
		"ἣι"
	],
	[
		8084,
		1,
		"ἤι"
	],
	[
		8085,
		1,
		"ἥι"
	],
	[
		8086,
		1,
		"ἦι"
	],
	[
		8087,
		1,
		"ἧι"
	],
	[
		8088,
		1,
		"ἠι"
	],
	[
		8089,
		1,
		"ἡι"
	],
	[
		8090,
		1,
		"ἢι"
	],
	[
		8091,
		1,
		"ἣι"
	],
	[
		8092,
		1,
		"ἤι"
	],
	[
		8093,
		1,
		"ἥι"
	],
	[
		8094,
		1,
		"ἦι"
	],
	[
		8095,
		1,
		"ἧι"
	],
	[
		8096,
		1,
		"ὠι"
	],
	[
		8097,
		1,
		"ὡι"
	],
	[
		8098,
		1,
		"ὢι"
	],
	[
		8099,
		1,
		"ὣι"
	],
	[
		8100,
		1,
		"ὤι"
	],
	[
		8101,
		1,
		"ὥι"
	],
	[
		8102,
		1,
		"ὦι"
	],
	[
		8103,
		1,
		"ὧι"
	],
	[
		8104,
		1,
		"ὠι"
	],
	[
		8105,
		1,
		"ὡι"
	],
	[
		8106,
		1,
		"ὢι"
	],
	[
		8107,
		1,
		"ὣι"
	],
	[
		8108,
		1,
		"ὤι"
	],
	[
		8109,
		1,
		"ὥι"
	],
	[
		8110,
		1,
		"ὦι"
	],
	[
		8111,
		1,
		"ὧι"
	],
	[
		[
			8112,
			8113
		],
		2
	],
	[
		8114,
		1,
		"ὰι"
	],
	[
		8115,
		1,
		"αι"
	],
	[
		8116,
		1,
		"άι"
	],
	[
		8117,
		3
	],
	[
		8118,
		2
	],
	[
		8119,
		1,
		"ᾶι"
	],
	[
		8120,
		1,
		"ᾰ"
	],
	[
		8121,
		1,
		"ᾱ"
	],
	[
		8122,
		1,
		"ὰ"
	],
	[
		8123,
		1,
		"ά"
	],
	[
		8124,
		1,
		"αι"
	],
	[
		8125,
		5,
		" ̓"
	],
	[
		8126,
		1,
		"ι"
	],
	[
		8127,
		5,
		" ̓"
	],
	[
		8128,
		5,
		" ͂"
	],
	[
		8129,
		5,
		" ̈͂"
	],
	[
		8130,
		1,
		"ὴι"
	],
	[
		8131,
		1,
		"ηι"
	],
	[
		8132,
		1,
		"ήι"
	],
	[
		8133,
		3
	],
	[
		8134,
		2
	],
	[
		8135,
		1,
		"ῆι"
	],
	[
		8136,
		1,
		"ὲ"
	],
	[
		8137,
		1,
		"έ"
	],
	[
		8138,
		1,
		"ὴ"
	],
	[
		8139,
		1,
		"ή"
	],
	[
		8140,
		1,
		"ηι"
	],
	[
		8141,
		5,
		" ̓̀"
	],
	[
		8142,
		5,
		" ̓́"
	],
	[
		8143,
		5,
		" ̓͂"
	],
	[
		[
			8144,
			8146
		],
		2
	],
	[
		8147,
		1,
		"ΐ"
	],
	[
		[
			8148,
			8149
		],
		3
	],
	[
		[
			8150,
			8151
		],
		2
	],
	[
		8152,
		1,
		"ῐ"
	],
	[
		8153,
		1,
		"ῑ"
	],
	[
		8154,
		1,
		"ὶ"
	],
	[
		8155,
		1,
		"ί"
	],
	[
		8156,
		3
	],
	[
		8157,
		5,
		" ̔̀"
	],
	[
		8158,
		5,
		" ̔́"
	],
	[
		8159,
		5,
		" ̔͂"
	],
	[
		[
			8160,
			8162
		],
		2
	],
	[
		8163,
		1,
		"ΰ"
	],
	[
		[
			8164,
			8167
		],
		2
	],
	[
		8168,
		1,
		"ῠ"
	],
	[
		8169,
		1,
		"ῡ"
	],
	[
		8170,
		1,
		"ὺ"
	],
	[
		8171,
		1,
		"ύ"
	],
	[
		8172,
		1,
		"ῥ"
	],
	[
		8173,
		5,
		" ̈̀"
	],
	[
		8174,
		5,
		" ̈́"
	],
	[
		8175,
		5,
		"`"
	],
	[
		[
			8176,
			8177
		],
		3
	],
	[
		8178,
		1,
		"ὼι"
	],
	[
		8179,
		1,
		"ωι"
	],
	[
		8180,
		1,
		"ώι"
	],
	[
		8181,
		3
	],
	[
		8182,
		2
	],
	[
		8183,
		1,
		"ῶι"
	],
	[
		8184,
		1,
		"ὸ"
	],
	[
		8185,
		1,
		"ό"
	],
	[
		8186,
		1,
		"ὼ"
	],
	[
		8187,
		1,
		"ώ"
	],
	[
		8188,
		1,
		"ωι"
	],
	[
		8189,
		5,
		" ́"
	],
	[
		8190,
		5,
		" ̔"
	],
	[
		8191,
		3
	],
	[
		[
			8192,
			8202
		],
		5,
		" "
	],
	[
		8203,
		7
	],
	[
		[
			8204,
			8205
		],
		6,
		""
	],
	[
		[
			8206,
			8207
		],
		3
	],
	[
		8208,
		2
	],
	[
		8209,
		1,
		"‐"
	],
	[
		[
			8210,
			8214
		],
		2
	],
	[
		8215,
		5,
		" ̳"
	],
	[
		[
			8216,
			8227
		],
		2
	],
	[
		[
			8228,
			8230
		],
		3
	],
	[
		8231,
		2
	],
	[
		[
			8232,
			8238
		],
		3
	],
	[
		8239,
		5,
		" "
	],
	[
		[
			8240,
			8242
		],
		2
	],
	[
		8243,
		1,
		"′′"
	],
	[
		8244,
		1,
		"′′′"
	],
	[
		8245,
		2
	],
	[
		8246,
		1,
		"‵‵"
	],
	[
		8247,
		1,
		"‵‵‵"
	],
	[
		[
			8248,
			8251
		],
		2
	],
	[
		8252,
		5,
		"!!"
	],
	[
		8253,
		2
	],
	[
		8254,
		5,
		" ̅"
	],
	[
		[
			8255,
			8262
		],
		2
	],
	[
		8263,
		5,
		"??"
	],
	[
		8264,
		5,
		"?!"
	],
	[
		8265,
		5,
		"!?"
	],
	[
		[
			8266,
			8269
		],
		2
	],
	[
		[
			8270,
			8274
		],
		2
	],
	[
		[
			8275,
			8276
		],
		2
	],
	[
		[
			8277,
			8278
		],
		2
	],
	[
		8279,
		1,
		"′′′′"
	],
	[
		[
			8280,
			8286
		],
		2
	],
	[
		8287,
		5,
		" "
	],
	[
		8288,
		7
	],
	[
		[
			8289,
			8291
		],
		3
	],
	[
		8292,
		7
	],
	[
		8293,
		3
	],
	[
		[
			8294,
			8297
		],
		3
	],
	[
		[
			8298,
			8303
		],
		3
	],
	[
		8304,
		1,
		"0"
	],
	[
		8305,
		1,
		"i"
	],
	[
		[
			8306,
			8307
		],
		3
	],
	[
		8308,
		1,
		"4"
	],
	[
		8309,
		1,
		"5"
	],
	[
		8310,
		1,
		"6"
	],
	[
		8311,
		1,
		"7"
	],
	[
		8312,
		1,
		"8"
	],
	[
		8313,
		1,
		"9"
	],
	[
		8314,
		5,
		"+"
	],
	[
		8315,
		1,
		"−"
	],
	[
		8316,
		5,
		"="
	],
	[
		8317,
		5,
		"("
	],
	[
		8318,
		5,
		")"
	],
	[
		8319,
		1,
		"n"
	],
	[
		8320,
		1,
		"0"
	],
	[
		8321,
		1,
		"1"
	],
	[
		8322,
		1,
		"2"
	],
	[
		8323,
		1,
		"3"
	],
	[
		8324,
		1,
		"4"
	],
	[
		8325,
		1,
		"5"
	],
	[
		8326,
		1,
		"6"
	],
	[
		8327,
		1,
		"7"
	],
	[
		8328,
		1,
		"8"
	],
	[
		8329,
		1,
		"9"
	],
	[
		8330,
		5,
		"+"
	],
	[
		8331,
		1,
		"−"
	],
	[
		8332,
		5,
		"="
	],
	[
		8333,
		5,
		"("
	],
	[
		8334,
		5,
		")"
	],
	[
		8335,
		3
	],
	[
		8336,
		1,
		"a"
	],
	[
		8337,
		1,
		"e"
	],
	[
		8338,
		1,
		"o"
	],
	[
		8339,
		1,
		"x"
	],
	[
		8340,
		1,
		"ə"
	],
	[
		8341,
		1,
		"h"
	],
	[
		8342,
		1,
		"k"
	],
	[
		8343,
		1,
		"l"
	],
	[
		8344,
		1,
		"m"
	],
	[
		8345,
		1,
		"n"
	],
	[
		8346,
		1,
		"p"
	],
	[
		8347,
		1,
		"s"
	],
	[
		8348,
		1,
		"t"
	],
	[
		[
			8349,
			8351
		],
		3
	],
	[
		[
			8352,
			8359
		],
		2
	],
	[
		8360,
		1,
		"rs"
	],
	[
		[
			8361,
			8362
		],
		2
	],
	[
		8363,
		2
	],
	[
		8364,
		2
	],
	[
		[
			8365,
			8367
		],
		2
	],
	[
		[
			8368,
			8369
		],
		2
	],
	[
		[
			8370,
			8373
		],
		2
	],
	[
		[
			8374,
			8376
		],
		2
	],
	[
		8377,
		2
	],
	[
		8378,
		2
	],
	[
		[
			8379,
			8381
		],
		2
	],
	[
		8382,
		2
	],
	[
		8383,
		2
	],
	[
		8384,
		2
	],
	[
		[
			8385,
			8399
		],
		3
	],
	[
		[
			8400,
			8417
		],
		2
	],
	[
		[
			8418,
			8419
		],
		2
	],
	[
		[
			8420,
			8426
		],
		2
	],
	[
		8427,
		2
	],
	[
		[
			8428,
			8431
		],
		2
	],
	[
		8432,
		2
	],
	[
		[
			8433,
			8447
		],
		3
	],
	[
		8448,
		5,
		"a/c"
	],
	[
		8449,
		5,
		"a/s"
	],
	[
		8450,
		1,
		"c"
	],
	[
		8451,
		1,
		"°c"
	],
	[
		8452,
		2
	],
	[
		8453,
		5,
		"c/o"
	],
	[
		8454,
		5,
		"c/u"
	],
	[
		8455,
		1,
		"ɛ"
	],
	[
		8456,
		2
	],
	[
		8457,
		1,
		"°f"
	],
	[
		8458,
		1,
		"g"
	],
	[
		[
			8459,
			8462
		],
		1,
		"h"
	],
	[
		8463,
		1,
		"ħ"
	],
	[
		[
			8464,
			8465
		],
		1,
		"i"
	],
	[
		[
			8466,
			8467
		],
		1,
		"l"
	],
	[
		8468,
		2
	],
	[
		8469,
		1,
		"n"
	],
	[
		8470,
		1,
		"no"
	],
	[
		[
			8471,
			8472
		],
		2
	],
	[
		8473,
		1,
		"p"
	],
	[
		8474,
		1,
		"q"
	],
	[
		[
			8475,
			8477
		],
		1,
		"r"
	],
	[
		[
			8478,
			8479
		],
		2
	],
	[
		8480,
		1,
		"sm"
	],
	[
		8481,
		1,
		"tel"
	],
	[
		8482,
		1,
		"tm"
	],
	[
		8483,
		2
	],
	[
		8484,
		1,
		"z"
	],
	[
		8485,
		2
	],
	[
		8486,
		1,
		"ω"
	],
	[
		8487,
		2
	],
	[
		8488,
		1,
		"z"
	],
	[
		8489,
		2
	],
	[
		8490,
		1,
		"k"
	],
	[
		8491,
		1,
		"å"
	],
	[
		8492,
		1,
		"b"
	],
	[
		8493,
		1,
		"c"
	],
	[
		8494,
		2
	],
	[
		[
			8495,
			8496
		],
		1,
		"e"
	],
	[
		8497,
		1,
		"f"
	],
	[
		8498,
		3
	],
	[
		8499,
		1,
		"m"
	],
	[
		8500,
		1,
		"o"
	],
	[
		8501,
		1,
		"א"
	],
	[
		8502,
		1,
		"ב"
	],
	[
		8503,
		1,
		"ג"
	],
	[
		8504,
		1,
		"ד"
	],
	[
		8505,
		1,
		"i"
	],
	[
		8506,
		2
	],
	[
		8507,
		1,
		"fax"
	],
	[
		8508,
		1,
		"π"
	],
	[
		[
			8509,
			8510
		],
		1,
		"γ"
	],
	[
		8511,
		1,
		"π"
	],
	[
		8512,
		1,
		"∑"
	],
	[
		[
			8513,
			8516
		],
		2
	],
	[
		[
			8517,
			8518
		],
		1,
		"d"
	],
	[
		8519,
		1,
		"e"
	],
	[
		8520,
		1,
		"i"
	],
	[
		8521,
		1,
		"j"
	],
	[
		[
			8522,
			8523
		],
		2
	],
	[
		8524,
		2
	],
	[
		8525,
		2
	],
	[
		8526,
		2
	],
	[
		8527,
		2
	],
	[
		8528,
		1,
		"1⁄7"
	],
	[
		8529,
		1,
		"1⁄9"
	],
	[
		8530,
		1,
		"1⁄10"
	],
	[
		8531,
		1,
		"1⁄3"
	],
	[
		8532,
		1,
		"2⁄3"
	],
	[
		8533,
		1,
		"1⁄5"
	],
	[
		8534,
		1,
		"2⁄5"
	],
	[
		8535,
		1,
		"3⁄5"
	],
	[
		8536,
		1,
		"4⁄5"
	],
	[
		8537,
		1,
		"1⁄6"
	],
	[
		8538,
		1,
		"5⁄6"
	],
	[
		8539,
		1,
		"1⁄8"
	],
	[
		8540,
		1,
		"3⁄8"
	],
	[
		8541,
		1,
		"5⁄8"
	],
	[
		8542,
		1,
		"7⁄8"
	],
	[
		8543,
		1,
		"1⁄"
	],
	[
		8544,
		1,
		"i"
	],
	[
		8545,
		1,
		"ii"
	],
	[
		8546,
		1,
		"iii"
	],
	[
		8547,
		1,
		"iv"
	],
	[
		8548,
		1,
		"v"
	],
	[
		8549,
		1,
		"vi"
	],
	[
		8550,
		1,
		"vii"
	],
	[
		8551,
		1,
		"viii"
	],
	[
		8552,
		1,
		"ix"
	],
	[
		8553,
		1,
		"x"
	],
	[
		8554,
		1,
		"xi"
	],
	[
		8555,
		1,
		"xii"
	],
	[
		8556,
		1,
		"l"
	],
	[
		8557,
		1,
		"c"
	],
	[
		8558,
		1,
		"d"
	],
	[
		8559,
		1,
		"m"
	],
	[
		8560,
		1,
		"i"
	],
	[
		8561,
		1,
		"ii"
	],
	[
		8562,
		1,
		"iii"
	],
	[
		8563,
		1,
		"iv"
	],
	[
		8564,
		1,
		"v"
	],
	[
		8565,
		1,
		"vi"
	],
	[
		8566,
		1,
		"vii"
	],
	[
		8567,
		1,
		"viii"
	],
	[
		8568,
		1,
		"ix"
	],
	[
		8569,
		1,
		"x"
	],
	[
		8570,
		1,
		"xi"
	],
	[
		8571,
		1,
		"xii"
	],
	[
		8572,
		1,
		"l"
	],
	[
		8573,
		1,
		"c"
	],
	[
		8574,
		1,
		"d"
	],
	[
		8575,
		1,
		"m"
	],
	[
		[
			8576,
			8578
		],
		2
	],
	[
		8579,
		3
	],
	[
		8580,
		2
	],
	[
		[
			8581,
			8584
		],
		2
	],
	[
		8585,
		1,
		"0⁄3"
	],
	[
		[
			8586,
			8587
		],
		2
	],
	[
		[
			8588,
			8591
		],
		3
	],
	[
		[
			8592,
			8682
		],
		2
	],
	[
		[
			8683,
			8691
		],
		2
	],
	[
		[
			8692,
			8703
		],
		2
	],
	[
		[
			8704,
			8747
		],
		2
	],
	[
		8748,
		1,
		"∫∫"
	],
	[
		8749,
		1,
		"∫∫∫"
	],
	[
		8750,
		2
	],
	[
		8751,
		1,
		"∮∮"
	],
	[
		8752,
		1,
		"∮∮∮"
	],
	[
		[
			8753,
			8945
		],
		2
	],
	[
		[
			8946,
			8959
		],
		2
	],
	[
		8960,
		2
	],
	[
		8961,
		2
	],
	[
		[
			8962,
			9000
		],
		2
	],
	[
		9001,
		1,
		"〈"
	],
	[
		9002,
		1,
		"〉"
	],
	[
		[
			9003,
			9082
		],
		2
	],
	[
		9083,
		2
	],
	[
		9084,
		2
	],
	[
		[
			9085,
			9114
		],
		2
	],
	[
		[
			9115,
			9166
		],
		2
	],
	[
		[
			9167,
			9168
		],
		2
	],
	[
		[
			9169,
			9179
		],
		2
	],
	[
		[
			9180,
			9191
		],
		2
	],
	[
		9192,
		2
	],
	[
		[
			9193,
			9203
		],
		2
	],
	[
		[
			9204,
			9210
		],
		2
	],
	[
		[
			9211,
			9214
		],
		2
	],
	[
		9215,
		2
	],
	[
		[
			9216,
			9252
		],
		2
	],
	[
		[
			9253,
			9254
		],
		2
	],
	[
		[
			9255,
			9279
		],
		3
	],
	[
		[
			9280,
			9290
		],
		2
	],
	[
		[
			9291,
			9311
		],
		3
	],
	[
		9312,
		1,
		"1"
	],
	[
		9313,
		1,
		"2"
	],
	[
		9314,
		1,
		"3"
	],
	[
		9315,
		1,
		"4"
	],
	[
		9316,
		1,
		"5"
	],
	[
		9317,
		1,
		"6"
	],
	[
		9318,
		1,
		"7"
	],
	[
		9319,
		1,
		"8"
	],
	[
		9320,
		1,
		"9"
	],
	[
		9321,
		1,
		"10"
	],
	[
		9322,
		1,
		"11"
	],
	[
		9323,
		1,
		"12"
	],
	[
		9324,
		1,
		"13"
	],
	[
		9325,
		1,
		"14"
	],
	[
		9326,
		1,
		"15"
	],
	[
		9327,
		1,
		"16"
	],
	[
		9328,
		1,
		"17"
	],
	[
		9329,
		1,
		"18"
	],
	[
		9330,
		1,
		"19"
	],
	[
		9331,
		1,
		"20"
	],
	[
		9332,
		5,
		"(1)"
	],
	[
		9333,
		5,
		"(2)"
	],
	[
		9334,
		5,
		"(3)"
	],
	[
		9335,
		5,
		"(4)"
	],
	[
		9336,
		5,
		"(5)"
	],
	[
		9337,
		5,
		"(6)"
	],
	[
		9338,
		5,
		"(7)"
	],
	[
		9339,
		5,
		"(8)"
	],
	[
		9340,
		5,
		"(9)"
	],
	[
		9341,
		5,
		"(10)"
	],
	[
		9342,
		5,
		"(11)"
	],
	[
		9343,
		5,
		"(12)"
	],
	[
		9344,
		5,
		"(13)"
	],
	[
		9345,
		5,
		"(14)"
	],
	[
		9346,
		5,
		"(15)"
	],
	[
		9347,
		5,
		"(16)"
	],
	[
		9348,
		5,
		"(17)"
	],
	[
		9349,
		5,
		"(18)"
	],
	[
		9350,
		5,
		"(19)"
	],
	[
		9351,
		5,
		"(20)"
	],
	[
		[
			9352,
			9371
		],
		3
	],
	[
		9372,
		5,
		"(a)"
	],
	[
		9373,
		5,
		"(b)"
	],
	[
		9374,
		5,
		"(c)"
	],
	[
		9375,
		5,
		"(d)"
	],
	[
		9376,
		5,
		"(e)"
	],
	[
		9377,
		5,
		"(f)"
	],
	[
		9378,
		5,
		"(g)"
	],
	[
		9379,
		5,
		"(h)"
	],
	[
		9380,
		5,
		"(i)"
	],
	[
		9381,
		5,
		"(j)"
	],
	[
		9382,
		5,
		"(k)"
	],
	[
		9383,
		5,
		"(l)"
	],
	[
		9384,
		5,
		"(m)"
	],
	[
		9385,
		5,
		"(n)"
	],
	[
		9386,
		5,
		"(o)"
	],
	[
		9387,
		5,
		"(p)"
	],
	[
		9388,
		5,
		"(q)"
	],
	[
		9389,
		5,
		"(r)"
	],
	[
		9390,
		5,
		"(s)"
	],
	[
		9391,
		5,
		"(t)"
	],
	[
		9392,
		5,
		"(u)"
	],
	[
		9393,
		5,
		"(v)"
	],
	[
		9394,
		5,
		"(w)"
	],
	[
		9395,
		5,
		"(x)"
	],
	[
		9396,
		5,
		"(y)"
	],
	[
		9397,
		5,
		"(z)"
	],
	[
		9398,
		1,
		"a"
	],
	[
		9399,
		1,
		"b"
	],
	[
		9400,
		1,
		"c"
	],
	[
		9401,
		1,
		"d"
	],
	[
		9402,
		1,
		"e"
	],
	[
		9403,
		1,
		"f"
	],
	[
		9404,
		1,
		"g"
	],
	[
		9405,
		1,
		"h"
	],
	[
		9406,
		1,
		"i"
	],
	[
		9407,
		1,
		"j"
	],
	[
		9408,
		1,
		"k"
	],
	[
		9409,
		1,
		"l"
	],
	[
		9410,
		1,
		"m"
	],
	[
		9411,
		1,
		"n"
	],
	[
		9412,
		1,
		"o"
	],
	[
		9413,
		1,
		"p"
	],
	[
		9414,
		1,
		"q"
	],
	[
		9415,
		1,
		"r"
	],
	[
		9416,
		1,
		"s"
	],
	[
		9417,
		1,
		"t"
	],
	[
		9418,
		1,
		"u"
	],
	[
		9419,
		1,
		"v"
	],
	[
		9420,
		1,
		"w"
	],
	[
		9421,
		1,
		"x"
	],
	[
		9422,
		1,
		"y"
	],
	[
		9423,
		1,
		"z"
	],
	[
		9424,
		1,
		"a"
	],
	[
		9425,
		1,
		"b"
	],
	[
		9426,
		1,
		"c"
	],
	[
		9427,
		1,
		"d"
	],
	[
		9428,
		1,
		"e"
	],
	[
		9429,
		1,
		"f"
	],
	[
		9430,
		1,
		"g"
	],
	[
		9431,
		1,
		"h"
	],
	[
		9432,
		1,
		"i"
	],
	[
		9433,
		1,
		"j"
	],
	[
		9434,
		1,
		"k"
	],
	[
		9435,
		1,
		"l"
	],
	[
		9436,
		1,
		"m"
	],
	[
		9437,
		1,
		"n"
	],
	[
		9438,
		1,
		"o"
	],
	[
		9439,
		1,
		"p"
	],
	[
		9440,
		1,
		"q"
	],
	[
		9441,
		1,
		"r"
	],
	[
		9442,
		1,
		"s"
	],
	[
		9443,
		1,
		"t"
	],
	[
		9444,
		1,
		"u"
	],
	[
		9445,
		1,
		"v"
	],
	[
		9446,
		1,
		"w"
	],
	[
		9447,
		1,
		"x"
	],
	[
		9448,
		1,
		"y"
	],
	[
		9449,
		1,
		"z"
	],
	[
		9450,
		1,
		"0"
	],
	[
		[
			9451,
			9470
		],
		2
	],
	[
		9471,
		2
	],
	[
		[
			9472,
			9621
		],
		2
	],
	[
		[
			9622,
			9631
		],
		2
	],
	[
		[
			9632,
			9711
		],
		2
	],
	[
		[
			9712,
			9719
		],
		2
	],
	[
		[
			9720,
			9727
		],
		2
	],
	[
		[
			9728,
			9747
		],
		2
	],
	[
		[
			9748,
			9749
		],
		2
	],
	[
		[
			9750,
			9751
		],
		2
	],
	[
		9752,
		2
	],
	[
		9753,
		2
	],
	[
		[
			9754,
			9839
		],
		2
	],
	[
		[
			9840,
			9841
		],
		2
	],
	[
		[
			9842,
			9853
		],
		2
	],
	[
		[
			9854,
			9855
		],
		2
	],
	[
		[
			9856,
			9865
		],
		2
	],
	[
		[
			9866,
			9873
		],
		2
	],
	[
		[
			9874,
			9884
		],
		2
	],
	[
		9885,
		2
	],
	[
		[
			9886,
			9887
		],
		2
	],
	[
		[
			9888,
			9889
		],
		2
	],
	[
		[
			9890,
			9905
		],
		2
	],
	[
		9906,
		2
	],
	[
		[
			9907,
			9916
		],
		2
	],
	[
		[
			9917,
			9919
		],
		2
	],
	[
		[
			9920,
			9923
		],
		2
	],
	[
		[
			9924,
			9933
		],
		2
	],
	[
		9934,
		2
	],
	[
		[
			9935,
			9953
		],
		2
	],
	[
		9954,
		2
	],
	[
		9955,
		2
	],
	[
		[
			9956,
			9959
		],
		2
	],
	[
		[
			9960,
			9983
		],
		2
	],
	[
		9984,
		2
	],
	[
		[
			9985,
			9988
		],
		2
	],
	[
		9989,
		2
	],
	[
		[
			9990,
			9993
		],
		2
	],
	[
		[
			9994,
			9995
		],
		2
	],
	[
		[
			9996,
			10023
		],
		2
	],
	[
		10024,
		2
	],
	[
		[
			10025,
			10059
		],
		2
	],
	[
		10060,
		2
	],
	[
		10061,
		2
	],
	[
		10062,
		2
	],
	[
		[
			10063,
			10066
		],
		2
	],
	[
		[
			10067,
			10069
		],
		2
	],
	[
		10070,
		2
	],
	[
		10071,
		2
	],
	[
		[
			10072,
			10078
		],
		2
	],
	[
		[
			10079,
			10080
		],
		2
	],
	[
		[
			10081,
			10087
		],
		2
	],
	[
		[
			10088,
			10101
		],
		2
	],
	[
		[
			10102,
			10132
		],
		2
	],
	[
		[
			10133,
			10135
		],
		2
	],
	[
		[
			10136,
			10159
		],
		2
	],
	[
		10160,
		2
	],
	[
		[
			10161,
			10174
		],
		2
	],
	[
		10175,
		2
	],
	[
		[
			10176,
			10182
		],
		2
	],
	[
		[
			10183,
			10186
		],
		2
	],
	[
		10187,
		2
	],
	[
		10188,
		2
	],
	[
		10189,
		2
	],
	[
		[
			10190,
			10191
		],
		2
	],
	[
		[
			10192,
			10219
		],
		2
	],
	[
		[
			10220,
			10223
		],
		2
	],
	[
		[
			10224,
			10239
		],
		2
	],
	[
		[
			10240,
			10495
		],
		2
	],
	[
		[
			10496,
			10763
		],
		2
	],
	[
		10764,
		1,
		"∫∫∫∫"
	],
	[
		[
			10765,
			10867
		],
		2
	],
	[
		10868,
		5,
		"::="
	],
	[
		10869,
		5,
		"=="
	],
	[
		10870,
		5,
		"==="
	],
	[
		[
			10871,
			10971
		],
		2
	],
	[
		10972,
		1,
		"⫝̸"
	],
	[
		[
			10973,
			11007
		],
		2
	],
	[
		[
			11008,
			11021
		],
		2
	],
	[
		[
			11022,
			11027
		],
		2
	],
	[
		[
			11028,
			11034
		],
		2
	],
	[
		[
			11035,
			11039
		],
		2
	],
	[
		[
			11040,
			11043
		],
		2
	],
	[
		[
			11044,
			11084
		],
		2
	],
	[
		[
			11085,
			11087
		],
		2
	],
	[
		[
			11088,
			11092
		],
		2
	],
	[
		[
			11093,
			11097
		],
		2
	],
	[
		[
			11098,
			11123
		],
		2
	],
	[
		[
			11124,
			11125
		],
		3
	],
	[
		[
			11126,
			11157
		],
		2
	],
	[
		11158,
		3
	],
	[
		11159,
		2
	],
	[
		[
			11160,
			11193
		],
		2
	],
	[
		[
			11194,
			11196
		],
		2
	],
	[
		[
			11197,
			11208
		],
		2
	],
	[
		11209,
		2
	],
	[
		[
			11210,
			11217
		],
		2
	],
	[
		11218,
		2
	],
	[
		[
			11219,
			11243
		],
		2
	],
	[
		[
			11244,
			11247
		],
		2
	],
	[
		[
			11248,
			11262
		],
		2
	],
	[
		11263,
		2
	],
	[
		11264,
		1,
		"ⰰ"
	],
	[
		11265,
		1,
		"ⰱ"
	],
	[
		11266,
		1,
		"ⰲ"
	],
	[
		11267,
		1,
		"ⰳ"
	],
	[
		11268,
		1,
		"ⰴ"
	],
	[
		11269,
		1,
		"ⰵ"
	],
	[
		11270,
		1,
		"ⰶ"
	],
	[
		11271,
		1,
		"ⰷ"
	],
	[
		11272,
		1,
		"ⰸ"
	],
	[
		11273,
		1,
		"ⰹ"
	],
	[
		11274,
		1,
		"ⰺ"
	],
	[
		11275,
		1,
		"ⰻ"
	],
	[
		11276,
		1,
		"ⰼ"
	],
	[
		11277,
		1,
		"ⰽ"
	],
	[
		11278,
		1,
		"ⰾ"
	],
	[
		11279,
		1,
		"ⰿ"
	],
	[
		11280,
		1,
		"ⱀ"
	],
	[
		11281,
		1,
		"ⱁ"
	],
	[
		11282,
		1,
		"ⱂ"
	],
	[
		11283,
		1,
		"ⱃ"
	],
	[
		11284,
		1,
		"ⱄ"
	],
	[
		11285,
		1,
		"ⱅ"
	],
	[
		11286,
		1,
		"ⱆ"
	],
	[
		11287,
		1,
		"ⱇ"
	],
	[
		11288,
		1,
		"ⱈ"
	],
	[
		11289,
		1,
		"ⱉ"
	],
	[
		11290,
		1,
		"ⱊ"
	],
	[
		11291,
		1,
		"ⱋ"
	],
	[
		11292,
		1,
		"ⱌ"
	],
	[
		11293,
		1,
		"ⱍ"
	],
	[
		11294,
		1,
		"ⱎ"
	],
	[
		11295,
		1,
		"ⱏ"
	],
	[
		11296,
		1,
		"ⱐ"
	],
	[
		11297,
		1,
		"ⱑ"
	],
	[
		11298,
		1,
		"ⱒ"
	],
	[
		11299,
		1,
		"ⱓ"
	],
	[
		11300,
		1,
		"ⱔ"
	],
	[
		11301,
		1,
		"ⱕ"
	],
	[
		11302,
		1,
		"ⱖ"
	],
	[
		11303,
		1,
		"ⱗ"
	],
	[
		11304,
		1,
		"ⱘ"
	],
	[
		11305,
		1,
		"ⱙ"
	],
	[
		11306,
		1,
		"ⱚ"
	],
	[
		11307,
		1,
		"ⱛ"
	],
	[
		11308,
		1,
		"ⱜ"
	],
	[
		11309,
		1,
		"ⱝ"
	],
	[
		11310,
		1,
		"ⱞ"
	],
	[
		11311,
		1,
		"ⱟ"
	],
	[
		[
			11312,
			11358
		],
		2
	],
	[
		11359,
		2
	],
	[
		11360,
		1,
		"ⱡ"
	],
	[
		11361,
		2
	],
	[
		11362,
		1,
		"ɫ"
	],
	[
		11363,
		1,
		"ᵽ"
	],
	[
		11364,
		1,
		"ɽ"
	],
	[
		[
			11365,
			11366
		],
		2
	],
	[
		11367,
		1,
		"ⱨ"
	],
	[
		11368,
		2
	],
	[
		11369,
		1,
		"ⱪ"
	],
	[
		11370,
		2
	],
	[
		11371,
		1,
		"ⱬ"
	],
	[
		11372,
		2
	],
	[
		11373,
		1,
		"ɑ"
	],
	[
		11374,
		1,
		"ɱ"
	],
	[
		11375,
		1,
		"ɐ"
	],
	[
		11376,
		1,
		"ɒ"
	],
	[
		11377,
		2
	],
	[
		11378,
		1,
		"ⱳ"
	],
	[
		11379,
		2
	],
	[
		11380,
		2
	],
	[
		11381,
		1,
		"ⱶ"
	],
	[
		[
			11382,
			11383
		],
		2
	],
	[
		[
			11384,
			11387
		],
		2
	],
	[
		11388,
		1,
		"j"
	],
	[
		11389,
		1,
		"v"
	],
	[
		11390,
		1,
		"ȿ"
	],
	[
		11391,
		1,
		"ɀ"
	],
	[
		11392,
		1,
		"ⲁ"
	],
	[
		11393,
		2
	],
	[
		11394,
		1,
		"ⲃ"
	],
	[
		11395,
		2
	],
	[
		11396,
		1,
		"ⲅ"
	],
	[
		11397,
		2
	],
	[
		11398,
		1,
		"ⲇ"
	],
	[
		11399,
		2
	],
	[
		11400,
		1,
		"ⲉ"
	],
	[
		11401,
		2
	],
	[
		11402,
		1,
		"ⲋ"
	],
	[
		11403,
		2
	],
	[
		11404,
		1,
		"ⲍ"
	],
	[
		11405,
		2
	],
	[
		11406,
		1,
		"ⲏ"
	],
	[
		11407,
		2
	],
	[
		11408,
		1,
		"ⲑ"
	],
	[
		11409,
		2
	],
	[
		11410,
		1,
		"ⲓ"
	],
	[
		11411,
		2
	],
	[
		11412,
		1,
		"ⲕ"
	],
	[
		11413,
		2
	],
	[
		11414,
		1,
		"ⲗ"
	],
	[
		11415,
		2
	],
	[
		11416,
		1,
		"ⲙ"
	],
	[
		11417,
		2
	],
	[
		11418,
		1,
		"ⲛ"
	],
	[
		11419,
		2
	],
	[
		11420,
		1,
		"ⲝ"
	],
	[
		11421,
		2
	],
	[
		11422,
		1,
		"ⲟ"
	],
	[
		11423,
		2
	],
	[
		11424,
		1,
		"ⲡ"
	],
	[
		11425,
		2
	],
	[
		11426,
		1,
		"ⲣ"
	],
	[
		11427,
		2
	],
	[
		11428,
		1,
		"ⲥ"
	],
	[
		11429,
		2
	],
	[
		11430,
		1,
		"ⲧ"
	],
	[
		11431,
		2
	],
	[
		11432,
		1,
		"ⲩ"
	],
	[
		11433,
		2
	],
	[
		11434,
		1,
		"ⲫ"
	],
	[
		11435,
		2
	],
	[
		11436,
		1,
		"ⲭ"
	],
	[
		11437,
		2
	],
	[
		11438,
		1,
		"ⲯ"
	],
	[
		11439,
		2
	],
	[
		11440,
		1,
		"ⲱ"
	],
	[
		11441,
		2
	],
	[
		11442,
		1,
		"ⲳ"
	],
	[
		11443,
		2
	],
	[
		11444,
		1,
		"ⲵ"
	],
	[
		11445,
		2
	],
	[
		11446,
		1,
		"ⲷ"
	],
	[
		11447,
		2
	],
	[
		11448,
		1,
		"ⲹ"
	],
	[
		11449,
		2
	],
	[
		11450,
		1,
		"ⲻ"
	],
	[
		11451,
		2
	],
	[
		11452,
		1,
		"ⲽ"
	],
	[
		11453,
		2
	],
	[
		11454,
		1,
		"ⲿ"
	],
	[
		11455,
		2
	],
	[
		11456,
		1,
		"ⳁ"
	],
	[
		11457,
		2
	],
	[
		11458,
		1,
		"ⳃ"
	],
	[
		11459,
		2
	],
	[
		11460,
		1,
		"ⳅ"
	],
	[
		11461,
		2
	],
	[
		11462,
		1,
		"ⳇ"
	],
	[
		11463,
		2
	],
	[
		11464,
		1,
		"ⳉ"
	],
	[
		11465,
		2
	],
	[
		11466,
		1,
		"ⳋ"
	],
	[
		11467,
		2
	],
	[
		11468,
		1,
		"ⳍ"
	],
	[
		11469,
		2
	],
	[
		11470,
		1,
		"ⳏ"
	],
	[
		11471,
		2
	],
	[
		11472,
		1,
		"ⳑ"
	],
	[
		11473,
		2
	],
	[
		11474,
		1,
		"ⳓ"
	],
	[
		11475,
		2
	],
	[
		11476,
		1,
		"ⳕ"
	],
	[
		11477,
		2
	],
	[
		11478,
		1,
		"ⳗ"
	],
	[
		11479,
		2
	],
	[
		11480,
		1,
		"ⳙ"
	],
	[
		11481,
		2
	],
	[
		11482,
		1,
		"ⳛ"
	],
	[
		11483,
		2
	],
	[
		11484,
		1,
		"ⳝ"
	],
	[
		11485,
		2
	],
	[
		11486,
		1,
		"ⳟ"
	],
	[
		11487,
		2
	],
	[
		11488,
		1,
		"ⳡ"
	],
	[
		11489,
		2
	],
	[
		11490,
		1,
		"ⳣ"
	],
	[
		[
			11491,
			11492
		],
		2
	],
	[
		[
			11493,
			11498
		],
		2
	],
	[
		11499,
		1,
		"ⳬ"
	],
	[
		11500,
		2
	],
	[
		11501,
		1,
		"ⳮ"
	],
	[
		[
			11502,
			11505
		],
		2
	],
	[
		11506,
		1,
		"ⳳ"
	],
	[
		11507,
		2
	],
	[
		[
			11508,
			11512
		],
		3
	],
	[
		[
			11513,
			11519
		],
		2
	],
	[
		[
			11520,
			11557
		],
		2
	],
	[
		11558,
		3
	],
	[
		11559,
		2
	],
	[
		[
			11560,
			11564
		],
		3
	],
	[
		11565,
		2
	],
	[
		[
			11566,
			11567
		],
		3
	],
	[
		[
			11568,
			11621
		],
		2
	],
	[
		[
			11622,
			11623
		],
		2
	],
	[
		[
			11624,
			11630
		],
		3
	],
	[
		11631,
		1,
		"ⵡ"
	],
	[
		11632,
		2
	],
	[
		[
			11633,
			11646
		],
		3
	],
	[
		11647,
		2
	],
	[
		[
			11648,
			11670
		],
		2
	],
	[
		[
			11671,
			11679
		],
		3
	],
	[
		[
			11680,
			11686
		],
		2
	],
	[
		11687,
		3
	],
	[
		[
			11688,
			11694
		],
		2
	],
	[
		11695,
		3
	],
	[
		[
			11696,
			11702
		],
		2
	],
	[
		11703,
		3
	],
	[
		[
			11704,
			11710
		],
		2
	],
	[
		11711,
		3
	],
	[
		[
			11712,
			11718
		],
		2
	],
	[
		11719,
		3
	],
	[
		[
			11720,
			11726
		],
		2
	],
	[
		11727,
		3
	],
	[
		[
			11728,
			11734
		],
		2
	],
	[
		11735,
		3
	],
	[
		[
			11736,
			11742
		],
		2
	],
	[
		11743,
		3
	],
	[
		[
			11744,
			11775
		],
		2
	],
	[
		[
			11776,
			11799
		],
		2
	],
	[
		[
			11800,
			11803
		],
		2
	],
	[
		[
			11804,
			11805
		],
		2
	],
	[
		[
			11806,
			11822
		],
		2
	],
	[
		11823,
		2
	],
	[
		11824,
		2
	],
	[
		11825,
		2
	],
	[
		[
			11826,
			11835
		],
		2
	],
	[
		[
			11836,
			11842
		],
		2
	],
	[
		[
			11843,
			11844
		],
		2
	],
	[
		[
			11845,
			11849
		],
		2
	],
	[
		[
			11850,
			11854
		],
		2
	],
	[
		11855,
		2
	],
	[
		[
			11856,
			11858
		],
		2
	],
	[
		[
			11859,
			11869
		],
		2
	],
	[
		[
			11870,
			11903
		],
		3
	],
	[
		[
			11904,
			11929
		],
		2
	],
	[
		11930,
		3
	],
	[
		[
			11931,
			11934
		],
		2
	],
	[
		11935,
		1,
		"母"
	],
	[
		[
			11936,
			12018
		],
		2
	],
	[
		12019,
		1,
		"龟"
	],
	[
		[
			12020,
			12031
		],
		3
	],
	[
		12032,
		1,
		"一"
	],
	[
		12033,
		1,
		"丨"
	],
	[
		12034,
		1,
		"丶"
	],
	[
		12035,
		1,
		"丿"
	],
	[
		12036,
		1,
		"乙"
	],
	[
		12037,
		1,
		"亅"
	],
	[
		12038,
		1,
		"二"
	],
	[
		12039,
		1,
		"亠"
	],
	[
		12040,
		1,
		"人"
	],
	[
		12041,
		1,
		"儿"
	],
	[
		12042,
		1,
		"入"
	],
	[
		12043,
		1,
		"八"
	],
	[
		12044,
		1,
		"冂"
	],
	[
		12045,
		1,
		"冖"
	],
	[
		12046,
		1,
		"冫"
	],
	[
		12047,
		1,
		"几"
	],
	[
		12048,
		1,
		"凵"
	],
	[
		12049,
		1,
		"刀"
	],
	[
		12050,
		1,
		"力"
	],
	[
		12051,
		1,
		"勹"
	],
	[
		12052,
		1,
		"匕"
	],
	[
		12053,
		1,
		"匚"
	],
	[
		12054,
		1,
		"匸"
	],
	[
		12055,
		1,
		"十"
	],
	[
		12056,
		1,
		"卜"
	],
	[
		12057,
		1,
		"卩"
	],
	[
		12058,
		1,
		"厂"
	],
	[
		12059,
		1,
		"厶"
	],
	[
		12060,
		1,
		"又"
	],
	[
		12061,
		1,
		"口"
	],
	[
		12062,
		1,
		"囗"
	],
	[
		12063,
		1,
		"土"
	],
	[
		12064,
		1,
		"士"
	],
	[
		12065,
		1,
		"夂"
	],
	[
		12066,
		1,
		"夊"
	],
	[
		12067,
		1,
		"夕"
	],
	[
		12068,
		1,
		"大"
	],
	[
		12069,
		1,
		"女"
	],
	[
		12070,
		1,
		"子"
	],
	[
		12071,
		1,
		"宀"
	],
	[
		12072,
		1,
		"寸"
	],
	[
		12073,
		1,
		"小"
	],
	[
		12074,
		1,
		"尢"
	],
	[
		12075,
		1,
		"尸"
	],
	[
		12076,
		1,
		"屮"
	],
	[
		12077,
		1,
		"山"
	],
	[
		12078,
		1,
		"巛"
	],
	[
		12079,
		1,
		"工"
	],
	[
		12080,
		1,
		"己"
	],
	[
		12081,
		1,
		"巾"
	],
	[
		12082,
		1,
		"干"
	],
	[
		12083,
		1,
		"幺"
	],
	[
		12084,
		1,
		"广"
	],
	[
		12085,
		1,
		"廴"
	],
	[
		12086,
		1,
		"廾"
	],
	[
		12087,
		1,
		"弋"
	],
	[
		12088,
		1,
		"弓"
	],
	[
		12089,
		1,
		"彐"
	],
	[
		12090,
		1,
		"彡"
	],
	[
		12091,
		1,
		"彳"
	],
	[
		12092,
		1,
		"心"
	],
	[
		12093,
		1,
		"戈"
	],
	[
		12094,
		1,
		"戶"
	],
	[
		12095,
		1,
		"手"
	],
	[
		12096,
		1,
		"支"
	],
	[
		12097,
		1,
		"攴"
	],
	[
		12098,
		1,
		"文"
	],
	[
		12099,
		1,
		"斗"
	],
	[
		12100,
		1,
		"斤"
	],
	[
		12101,
		1,
		"方"
	],
	[
		12102,
		1,
		"无"
	],
	[
		12103,
		1,
		"日"
	],
	[
		12104,
		1,
		"曰"
	],
	[
		12105,
		1,
		"月"
	],
	[
		12106,
		1,
		"木"
	],
	[
		12107,
		1,
		"欠"
	],
	[
		12108,
		1,
		"止"
	],
	[
		12109,
		1,
		"歹"
	],
	[
		12110,
		1,
		"殳"
	],
	[
		12111,
		1,
		"毋"
	],
	[
		12112,
		1,
		"比"
	],
	[
		12113,
		1,
		"毛"
	],
	[
		12114,
		1,
		"氏"
	],
	[
		12115,
		1,
		"气"
	],
	[
		12116,
		1,
		"水"
	],
	[
		12117,
		1,
		"火"
	],
	[
		12118,
		1,
		"爪"
	],
	[
		12119,
		1,
		"父"
	],
	[
		12120,
		1,
		"爻"
	],
	[
		12121,
		1,
		"爿"
	],
	[
		12122,
		1,
		"片"
	],
	[
		12123,
		1,
		"牙"
	],
	[
		12124,
		1,
		"牛"
	],
	[
		12125,
		1,
		"犬"
	],
	[
		12126,
		1,
		"玄"
	],
	[
		12127,
		1,
		"玉"
	],
	[
		12128,
		1,
		"瓜"
	],
	[
		12129,
		1,
		"瓦"
	],
	[
		12130,
		1,
		"甘"
	],
	[
		12131,
		1,
		"生"
	],
	[
		12132,
		1,
		"用"
	],
	[
		12133,
		1,
		"田"
	],
	[
		12134,
		1,
		"疋"
	],
	[
		12135,
		1,
		"疒"
	],
	[
		12136,
		1,
		"癶"
	],
	[
		12137,
		1,
		"白"
	],
	[
		12138,
		1,
		"皮"
	],
	[
		12139,
		1,
		"皿"
	],
	[
		12140,
		1,
		"目"
	],
	[
		12141,
		1,
		"矛"
	],
	[
		12142,
		1,
		"矢"
	],
	[
		12143,
		1,
		"石"
	],
	[
		12144,
		1,
		"示"
	],
	[
		12145,
		1,
		"禸"
	],
	[
		12146,
		1,
		"禾"
	],
	[
		12147,
		1,
		"穴"
	],
	[
		12148,
		1,
		"立"
	],
	[
		12149,
		1,
		"竹"
	],
	[
		12150,
		1,
		"米"
	],
	[
		12151,
		1,
		"糸"
	],
	[
		12152,
		1,
		"缶"
	],
	[
		12153,
		1,
		"网"
	],
	[
		12154,
		1,
		"羊"
	],
	[
		12155,
		1,
		"羽"
	],
	[
		12156,
		1,
		"老"
	],
	[
		12157,
		1,
		"而"
	],
	[
		12158,
		1,
		"耒"
	],
	[
		12159,
		1,
		"耳"
	],
	[
		12160,
		1,
		"聿"
	],
	[
		12161,
		1,
		"肉"
	],
	[
		12162,
		1,
		"臣"
	],
	[
		12163,
		1,
		"自"
	],
	[
		12164,
		1,
		"至"
	],
	[
		12165,
		1,
		"臼"
	],
	[
		12166,
		1,
		"舌"
	],
	[
		12167,
		1,
		"舛"
	],
	[
		12168,
		1,
		"舟"
	],
	[
		12169,
		1,
		"艮"
	],
	[
		12170,
		1,
		"色"
	],
	[
		12171,
		1,
		"艸"
	],
	[
		12172,
		1,
		"虍"
	],
	[
		12173,
		1,
		"虫"
	],
	[
		12174,
		1,
		"血"
	],
	[
		12175,
		1,
		"行"
	],
	[
		12176,
		1,
		"衣"
	],
	[
		12177,
		1,
		"襾"
	],
	[
		12178,
		1,
		"見"
	],
	[
		12179,
		1,
		"角"
	],
	[
		12180,
		1,
		"言"
	],
	[
		12181,
		1,
		"谷"
	],
	[
		12182,
		1,
		"豆"
	],
	[
		12183,
		1,
		"豕"
	],
	[
		12184,
		1,
		"豸"
	],
	[
		12185,
		1,
		"貝"
	],
	[
		12186,
		1,
		"赤"
	],
	[
		12187,
		1,
		"走"
	],
	[
		12188,
		1,
		"足"
	],
	[
		12189,
		1,
		"身"
	],
	[
		12190,
		1,
		"車"
	],
	[
		12191,
		1,
		"辛"
	],
	[
		12192,
		1,
		"辰"
	],
	[
		12193,
		1,
		"辵"
	],
	[
		12194,
		1,
		"邑"
	],
	[
		12195,
		1,
		"酉"
	],
	[
		12196,
		1,
		"釆"
	],
	[
		12197,
		1,
		"里"
	],
	[
		12198,
		1,
		"金"
	],
	[
		12199,
		1,
		"長"
	],
	[
		12200,
		1,
		"門"
	],
	[
		12201,
		1,
		"阜"
	],
	[
		12202,
		1,
		"隶"
	],
	[
		12203,
		1,
		"隹"
	],
	[
		12204,
		1,
		"雨"
	],
	[
		12205,
		1,
		"靑"
	],
	[
		12206,
		1,
		"非"
	],
	[
		12207,
		1,
		"面"
	],
	[
		12208,
		1,
		"革"
	],
	[
		12209,
		1,
		"韋"
	],
	[
		12210,
		1,
		"韭"
	],
	[
		12211,
		1,
		"音"
	],
	[
		12212,
		1,
		"頁"
	],
	[
		12213,
		1,
		"風"
	],
	[
		12214,
		1,
		"飛"
	],
	[
		12215,
		1,
		"食"
	],
	[
		12216,
		1,
		"首"
	],
	[
		12217,
		1,
		"香"
	],
	[
		12218,
		1,
		"馬"
	],
	[
		12219,
		1,
		"骨"
	],
	[
		12220,
		1,
		"高"
	],
	[
		12221,
		1,
		"髟"
	],
	[
		12222,
		1,
		"鬥"
	],
	[
		12223,
		1,
		"鬯"
	],
	[
		12224,
		1,
		"鬲"
	],
	[
		12225,
		1,
		"鬼"
	],
	[
		12226,
		1,
		"魚"
	],
	[
		12227,
		1,
		"鳥"
	],
	[
		12228,
		1,
		"鹵"
	],
	[
		12229,
		1,
		"鹿"
	],
	[
		12230,
		1,
		"麥"
	],
	[
		12231,
		1,
		"麻"
	],
	[
		12232,
		1,
		"黃"
	],
	[
		12233,
		1,
		"黍"
	],
	[
		12234,
		1,
		"黑"
	],
	[
		12235,
		1,
		"黹"
	],
	[
		12236,
		1,
		"黽"
	],
	[
		12237,
		1,
		"鼎"
	],
	[
		12238,
		1,
		"鼓"
	],
	[
		12239,
		1,
		"鼠"
	],
	[
		12240,
		1,
		"鼻"
	],
	[
		12241,
		1,
		"齊"
	],
	[
		12242,
		1,
		"齒"
	],
	[
		12243,
		1,
		"龍"
	],
	[
		12244,
		1,
		"龜"
	],
	[
		12245,
		1,
		"龠"
	],
	[
		[
			12246,
			12271
		],
		3
	],
	[
		[
			12272,
			12283
		],
		3
	],
	[
		[
			12284,
			12287
		],
		3
	],
	[
		12288,
		5,
		" "
	],
	[
		12289,
		2
	],
	[
		12290,
		1,
		"."
	],
	[
		[
			12291,
			12292
		],
		2
	],
	[
		[
			12293,
			12295
		],
		2
	],
	[
		[
			12296,
			12329
		],
		2
	],
	[
		[
			12330,
			12333
		],
		2
	],
	[
		[
			12334,
			12341
		],
		2
	],
	[
		12342,
		1,
		"〒"
	],
	[
		12343,
		2
	],
	[
		12344,
		1,
		"十"
	],
	[
		12345,
		1,
		"卄"
	],
	[
		12346,
		1,
		"卅"
	],
	[
		12347,
		2
	],
	[
		12348,
		2
	],
	[
		12349,
		2
	],
	[
		12350,
		2
	],
	[
		12351,
		2
	],
	[
		12352,
		3
	],
	[
		[
			12353,
			12436
		],
		2
	],
	[
		[
			12437,
			12438
		],
		2
	],
	[
		[
			12439,
			12440
		],
		3
	],
	[
		[
			12441,
			12442
		],
		2
	],
	[
		12443,
		5,
		" ゙"
	],
	[
		12444,
		5,
		" ゚"
	],
	[
		[
			12445,
			12446
		],
		2
	],
	[
		12447,
		1,
		"より"
	],
	[
		12448,
		2
	],
	[
		[
			12449,
			12542
		],
		2
	],
	[
		12543,
		1,
		"コト"
	],
	[
		[
			12544,
			12548
		],
		3
	],
	[
		[
			12549,
			12588
		],
		2
	],
	[
		12589,
		2
	],
	[
		12590,
		2
	],
	[
		12591,
		2
	],
	[
		12592,
		3
	],
	[
		12593,
		1,
		"ᄀ"
	],
	[
		12594,
		1,
		"ᄁ"
	],
	[
		12595,
		1,
		"ᆪ"
	],
	[
		12596,
		1,
		"ᄂ"
	],
	[
		12597,
		1,
		"ᆬ"
	],
	[
		12598,
		1,
		"ᆭ"
	],
	[
		12599,
		1,
		"ᄃ"
	],
	[
		12600,
		1,
		"ᄄ"
	],
	[
		12601,
		1,
		"ᄅ"
	],
	[
		12602,
		1,
		"ᆰ"
	],
	[
		12603,
		1,
		"ᆱ"
	],
	[
		12604,
		1,
		"ᆲ"
	],
	[
		12605,
		1,
		"ᆳ"
	],
	[
		12606,
		1,
		"ᆴ"
	],
	[
		12607,
		1,
		"ᆵ"
	],
	[
		12608,
		1,
		"ᄚ"
	],
	[
		12609,
		1,
		"ᄆ"
	],
	[
		12610,
		1,
		"ᄇ"
	],
	[
		12611,
		1,
		"ᄈ"
	],
	[
		12612,
		1,
		"ᄡ"
	],
	[
		12613,
		1,
		"ᄉ"
	],
	[
		12614,
		1,
		"ᄊ"
	],
	[
		12615,
		1,
		"ᄋ"
	],
	[
		12616,
		1,
		"ᄌ"
	],
	[
		12617,
		1,
		"ᄍ"
	],
	[
		12618,
		1,
		"ᄎ"
	],
	[
		12619,
		1,
		"ᄏ"
	],
	[
		12620,
		1,
		"ᄐ"
	],
	[
		12621,
		1,
		"ᄑ"
	],
	[
		12622,
		1,
		"ᄒ"
	],
	[
		12623,
		1,
		"ᅡ"
	],
	[
		12624,
		1,
		"ᅢ"
	],
	[
		12625,
		1,
		"ᅣ"
	],
	[
		12626,
		1,
		"ᅤ"
	],
	[
		12627,
		1,
		"ᅥ"
	],
	[
		12628,
		1,
		"ᅦ"
	],
	[
		12629,
		1,
		"ᅧ"
	],
	[
		12630,
		1,
		"ᅨ"
	],
	[
		12631,
		1,
		"ᅩ"
	],
	[
		12632,
		1,
		"ᅪ"
	],
	[
		12633,
		1,
		"ᅫ"
	],
	[
		12634,
		1,
		"ᅬ"
	],
	[
		12635,
		1,
		"ᅭ"
	],
	[
		12636,
		1,
		"ᅮ"
	],
	[
		12637,
		1,
		"ᅯ"
	],
	[
		12638,
		1,
		"ᅰ"
	],
	[
		12639,
		1,
		"ᅱ"
	],
	[
		12640,
		1,
		"ᅲ"
	],
	[
		12641,
		1,
		"ᅳ"
	],
	[
		12642,
		1,
		"ᅴ"
	],
	[
		12643,
		1,
		"ᅵ"
	],
	[
		12644,
		3
	],
	[
		12645,
		1,
		"ᄔ"
	],
	[
		12646,
		1,
		"ᄕ"
	],
	[
		12647,
		1,
		"ᇇ"
	],
	[
		12648,
		1,
		"ᇈ"
	],
	[
		12649,
		1,
		"ᇌ"
	],
	[
		12650,
		1,
		"ᇎ"
	],
	[
		12651,
		1,
		"ᇓ"
	],
	[
		12652,
		1,
		"ᇗ"
	],
	[
		12653,
		1,
		"ᇙ"
	],
	[
		12654,
		1,
		"ᄜ"
	],
	[
		12655,
		1,
		"ᇝ"
	],
	[
		12656,
		1,
		"ᇟ"
	],
	[
		12657,
		1,
		"ᄝ"
	],
	[
		12658,
		1,
		"ᄞ"
	],
	[
		12659,
		1,
		"ᄠ"
	],
	[
		12660,
		1,
		"ᄢ"
	],
	[
		12661,
		1,
		"ᄣ"
	],
	[
		12662,
		1,
		"ᄧ"
	],
	[
		12663,
		1,
		"ᄩ"
	],
	[
		12664,
		1,
		"ᄫ"
	],
	[
		12665,
		1,
		"ᄬ"
	],
	[
		12666,
		1,
		"ᄭ"
	],
	[
		12667,
		1,
		"ᄮ"
	],
	[
		12668,
		1,
		"ᄯ"
	],
	[
		12669,
		1,
		"ᄲ"
	],
	[
		12670,
		1,
		"ᄶ"
	],
	[
		12671,
		1,
		"ᅀ"
	],
	[
		12672,
		1,
		"ᅇ"
	],
	[
		12673,
		1,
		"ᅌ"
	],
	[
		12674,
		1,
		"ᇱ"
	],
	[
		12675,
		1,
		"ᇲ"
	],
	[
		12676,
		1,
		"ᅗ"
	],
	[
		12677,
		1,
		"ᅘ"
	],
	[
		12678,
		1,
		"ᅙ"
	],
	[
		12679,
		1,
		"ᆄ"
	],
	[
		12680,
		1,
		"ᆅ"
	],
	[
		12681,
		1,
		"ᆈ"
	],
	[
		12682,
		1,
		"ᆑ"
	],
	[
		12683,
		1,
		"ᆒ"
	],
	[
		12684,
		1,
		"ᆔ"
	],
	[
		12685,
		1,
		"ᆞ"
	],
	[
		12686,
		1,
		"ᆡ"
	],
	[
		12687,
		3
	],
	[
		[
			12688,
			12689
		],
		2
	],
	[
		12690,
		1,
		"一"
	],
	[
		12691,
		1,
		"二"
	],
	[
		12692,
		1,
		"三"
	],
	[
		12693,
		1,
		"四"
	],
	[
		12694,
		1,
		"上"
	],
	[
		12695,
		1,
		"中"
	],
	[
		12696,
		1,
		"下"
	],
	[
		12697,
		1,
		"甲"
	],
	[
		12698,
		1,
		"乙"
	],
	[
		12699,
		1,
		"丙"
	],
	[
		12700,
		1,
		"丁"
	],
	[
		12701,
		1,
		"天"
	],
	[
		12702,
		1,
		"地"
	],
	[
		12703,
		1,
		"人"
	],
	[
		[
			12704,
			12727
		],
		2
	],
	[
		[
			12728,
			12730
		],
		2
	],
	[
		[
			12731,
			12735
		],
		2
	],
	[
		[
			12736,
			12751
		],
		2
	],
	[
		[
			12752,
			12771
		],
		2
	],
	[
		[
			12772,
			12782
		],
		3
	],
	[
		12783,
		3
	],
	[
		[
			12784,
			12799
		],
		2
	],
	[
		12800,
		5,
		"(ᄀ)"
	],
	[
		12801,
		5,
		"(ᄂ)"
	],
	[
		12802,
		5,
		"(ᄃ)"
	],
	[
		12803,
		5,
		"(ᄅ)"
	],
	[
		12804,
		5,
		"(ᄆ)"
	],
	[
		12805,
		5,
		"(ᄇ)"
	],
	[
		12806,
		5,
		"(ᄉ)"
	],
	[
		12807,
		5,
		"(ᄋ)"
	],
	[
		12808,
		5,
		"(ᄌ)"
	],
	[
		12809,
		5,
		"(ᄎ)"
	],
	[
		12810,
		5,
		"(ᄏ)"
	],
	[
		12811,
		5,
		"(ᄐ)"
	],
	[
		12812,
		5,
		"(ᄑ)"
	],
	[
		12813,
		5,
		"(ᄒ)"
	],
	[
		12814,
		5,
		"(가)"
	],
	[
		12815,
		5,
		"(나)"
	],
	[
		12816,
		5,
		"(다)"
	],
	[
		12817,
		5,
		"(라)"
	],
	[
		12818,
		5,
		"(마)"
	],
	[
		12819,
		5,
		"(바)"
	],
	[
		12820,
		5,
		"(사)"
	],
	[
		12821,
		5,
		"(아)"
	],
	[
		12822,
		5,
		"(자)"
	],
	[
		12823,
		5,
		"(차)"
	],
	[
		12824,
		5,
		"(카)"
	],
	[
		12825,
		5,
		"(타)"
	],
	[
		12826,
		5,
		"(파)"
	],
	[
		12827,
		5,
		"(하)"
	],
	[
		12828,
		5,
		"(주)"
	],
	[
		12829,
		5,
		"(오전)"
	],
	[
		12830,
		5,
		"(오후)"
	],
	[
		12831,
		3
	],
	[
		12832,
		5,
		"(一)"
	],
	[
		12833,
		5,
		"(二)"
	],
	[
		12834,
		5,
		"(三)"
	],
	[
		12835,
		5,
		"(四)"
	],
	[
		12836,
		5,
		"(五)"
	],
	[
		12837,
		5,
		"(六)"
	],
	[
		12838,
		5,
		"(七)"
	],
	[
		12839,
		5,
		"(八)"
	],
	[
		12840,
		5,
		"(九)"
	],
	[
		12841,
		5,
		"(十)"
	],
	[
		12842,
		5,
		"(月)"
	],
	[
		12843,
		5,
		"(火)"
	],
	[
		12844,
		5,
		"(水)"
	],
	[
		12845,
		5,
		"(木)"
	],
	[
		12846,
		5,
		"(金)"
	],
	[
		12847,
		5,
		"(土)"
	],
	[
		12848,
		5,
		"(日)"
	],
	[
		12849,
		5,
		"(株)"
	],
	[
		12850,
		5,
		"(有)"
	],
	[
		12851,
		5,
		"(社)"
	],
	[
		12852,
		5,
		"(名)"
	],
	[
		12853,
		5,
		"(特)"
	],
	[
		12854,
		5,
		"(財)"
	],
	[
		12855,
		5,
		"(祝)"
	],
	[
		12856,
		5,
		"(労)"
	],
	[
		12857,
		5,
		"(代)"
	],
	[
		12858,
		5,
		"(呼)"
	],
	[
		12859,
		5,
		"(学)"
	],
	[
		12860,
		5,
		"(監)"
	],
	[
		12861,
		5,
		"(企)"
	],
	[
		12862,
		5,
		"(資)"
	],
	[
		12863,
		5,
		"(協)"
	],
	[
		12864,
		5,
		"(祭)"
	],
	[
		12865,
		5,
		"(休)"
	],
	[
		12866,
		5,
		"(自)"
	],
	[
		12867,
		5,
		"(至)"
	],
	[
		12868,
		1,
		"問"
	],
	[
		12869,
		1,
		"幼"
	],
	[
		12870,
		1,
		"文"
	],
	[
		12871,
		1,
		"箏"
	],
	[
		[
			12872,
			12879
		],
		2
	],
	[
		12880,
		1,
		"pte"
	],
	[
		12881,
		1,
		"21"
	],
	[
		12882,
		1,
		"22"
	],
	[
		12883,
		1,
		"23"
	],
	[
		12884,
		1,
		"24"
	],
	[
		12885,
		1,
		"25"
	],
	[
		12886,
		1,
		"26"
	],
	[
		12887,
		1,
		"27"
	],
	[
		12888,
		1,
		"28"
	],
	[
		12889,
		1,
		"29"
	],
	[
		12890,
		1,
		"30"
	],
	[
		12891,
		1,
		"31"
	],
	[
		12892,
		1,
		"32"
	],
	[
		12893,
		1,
		"33"
	],
	[
		12894,
		1,
		"34"
	],
	[
		12895,
		1,
		"35"
	],
	[
		12896,
		1,
		"ᄀ"
	],
	[
		12897,
		1,
		"ᄂ"
	],
	[
		12898,
		1,
		"ᄃ"
	],
	[
		12899,
		1,
		"ᄅ"
	],
	[
		12900,
		1,
		"ᄆ"
	],
	[
		12901,
		1,
		"ᄇ"
	],
	[
		12902,
		1,
		"ᄉ"
	],
	[
		12903,
		1,
		"ᄋ"
	],
	[
		12904,
		1,
		"ᄌ"
	],
	[
		12905,
		1,
		"ᄎ"
	],
	[
		12906,
		1,
		"ᄏ"
	],
	[
		12907,
		1,
		"ᄐ"
	],
	[
		12908,
		1,
		"ᄑ"
	],
	[
		12909,
		1,
		"ᄒ"
	],
	[
		12910,
		1,
		"가"
	],
	[
		12911,
		1,
		"나"
	],
	[
		12912,
		1,
		"다"
	],
	[
		12913,
		1,
		"라"
	],
	[
		12914,
		1,
		"마"
	],
	[
		12915,
		1,
		"바"
	],
	[
		12916,
		1,
		"사"
	],
	[
		12917,
		1,
		"아"
	],
	[
		12918,
		1,
		"자"
	],
	[
		12919,
		1,
		"차"
	],
	[
		12920,
		1,
		"카"
	],
	[
		12921,
		1,
		"타"
	],
	[
		12922,
		1,
		"파"
	],
	[
		12923,
		1,
		"하"
	],
	[
		12924,
		1,
		"참고"
	],
	[
		12925,
		1,
		"주의"
	],
	[
		12926,
		1,
		"우"
	],
	[
		12927,
		2
	],
	[
		12928,
		1,
		"一"
	],
	[
		12929,
		1,
		"二"
	],
	[
		12930,
		1,
		"三"
	],
	[
		12931,
		1,
		"四"
	],
	[
		12932,
		1,
		"五"
	],
	[
		12933,
		1,
		"六"
	],
	[
		12934,
		1,
		"七"
	],
	[
		12935,
		1,
		"八"
	],
	[
		12936,
		1,
		"九"
	],
	[
		12937,
		1,
		"十"
	],
	[
		12938,
		1,
		"月"
	],
	[
		12939,
		1,
		"火"
	],
	[
		12940,
		1,
		"水"
	],
	[
		12941,
		1,
		"木"
	],
	[
		12942,
		1,
		"金"
	],
	[
		12943,
		1,
		"土"
	],
	[
		12944,
		1,
		"日"
	],
	[
		12945,
		1,
		"株"
	],
	[
		12946,
		1,
		"有"
	],
	[
		12947,
		1,
		"社"
	],
	[
		12948,
		1,
		"名"
	],
	[
		12949,
		1,
		"特"
	],
	[
		12950,
		1,
		"財"
	],
	[
		12951,
		1,
		"祝"
	],
	[
		12952,
		1,
		"労"
	],
	[
		12953,
		1,
		"秘"
	],
	[
		12954,
		1,
		"男"
	],
	[
		12955,
		1,
		"女"
	],
	[
		12956,
		1,
		"適"
	],
	[
		12957,
		1,
		"優"
	],
	[
		12958,
		1,
		"印"
	],
	[
		12959,
		1,
		"注"
	],
	[
		12960,
		1,
		"項"
	],
	[
		12961,
		1,
		"休"
	],
	[
		12962,
		1,
		"写"
	],
	[
		12963,
		1,
		"正"
	],
	[
		12964,
		1,
		"上"
	],
	[
		12965,
		1,
		"中"
	],
	[
		12966,
		1,
		"下"
	],
	[
		12967,
		1,
		"左"
	],
	[
		12968,
		1,
		"右"
	],
	[
		12969,
		1,
		"医"
	],
	[
		12970,
		1,
		"宗"
	],
	[
		12971,
		1,
		"学"
	],
	[
		12972,
		1,
		"監"
	],
	[
		12973,
		1,
		"企"
	],
	[
		12974,
		1,
		"資"
	],
	[
		12975,
		1,
		"協"
	],
	[
		12976,
		1,
		"夜"
	],
	[
		12977,
		1,
		"36"
	],
	[
		12978,
		1,
		"37"
	],
	[
		12979,
		1,
		"38"
	],
	[
		12980,
		1,
		"39"
	],
	[
		12981,
		1,
		"40"
	],
	[
		12982,
		1,
		"41"
	],
	[
		12983,
		1,
		"42"
	],
	[
		12984,
		1,
		"43"
	],
	[
		12985,
		1,
		"44"
	],
	[
		12986,
		1,
		"45"
	],
	[
		12987,
		1,
		"46"
	],
	[
		12988,
		1,
		"47"
	],
	[
		12989,
		1,
		"48"
	],
	[
		12990,
		1,
		"49"
	],
	[
		12991,
		1,
		"50"
	],
	[
		12992,
		1,
		"1月"
	],
	[
		12993,
		1,
		"2月"
	],
	[
		12994,
		1,
		"3月"
	],
	[
		12995,
		1,
		"4月"
	],
	[
		12996,
		1,
		"5月"
	],
	[
		12997,
		1,
		"6月"
	],
	[
		12998,
		1,
		"7月"
	],
	[
		12999,
		1,
		"8月"
	],
	[
		13000,
		1,
		"9月"
	],
	[
		13001,
		1,
		"10月"
	],
	[
		13002,
		1,
		"11月"
	],
	[
		13003,
		1,
		"12月"
	],
	[
		13004,
		1,
		"hg"
	],
	[
		13005,
		1,
		"erg"
	],
	[
		13006,
		1,
		"ev"
	],
	[
		13007,
		1,
		"ltd"
	],
	[
		13008,
		1,
		"ア"
	],
	[
		13009,
		1,
		"イ"
	],
	[
		13010,
		1,
		"ウ"
	],
	[
		13011,
		1,
		"エ"
	],
	[
		13012,
		1,
		"オ"
	],
	[
		13013,
		1,
		"カ"
	],
	[
		13014,
		1,
		"キ"
	],
	[
		13015,
		1,
		"ク"
	],
	[
		13016,
		1,
		"ケ"
	],
	[
		13017,
		1,
		"コ"
	],
	[
		13018,
		1,
		"サ"
	],
	[
		13019,
		1,
		"シ"
	],
	[
		13020,
		1,
		"ス"
	],
	[
		13021,
		1,
		"セ"
	],
	[
		13022,
		1,
		"ソ"
	],
	[
		13023,
		1,
		"タ"
	],
	[
		13024,
		1,
		"チ"
	],
	[
		13025,
		1,
		"ツ"
	],
	[
		13026,
		1,
		"テ"
	],
	[
		13027,
		1,
		"ト"
	],
	[
		13028,
		1,
		"ナ"
	],
	[
		13029,
		1,
		"ニ"
	],
	[
		13030,
		1,
		"ヌ"
	],
	[
		13031,
		1,
		"ネ"
	],
	[
		13032,
		1,
		"ノ"
	],
	[
		13033,
		1,
		"ハ"
	],
	[
		13034,
		1,
		"ヒ"
	],
	[
		13035,
		1,
		"フ"
	],
	[
		13036,
		1,
		"ヘ"
	],
	[
		13037,
		1,
		"ホ"
	],
	[
		13038,
		1,
		"マ"
	],
	[
		13039,
		1,
		"ミ"
	],
	[
		13040,
		1,
		"ム"
	],
	[
		13041,
		1,
		"メ"
	],
	[
		13042,
		1,
		"モ"
	],
	[
		13043,
		1,
		"ヤ"
	],
	[
		13044,
		1,
		"ユ"
	],
	[
		13045,
		1,
		"ヨ"
	],
	[
		13046,
		1,
		"ラ"
	],
	[
		13047,
		1,
		"リ"
	],
	[
		13048,
		1,
		"ル"
	],
	[
		13049,
		1,
		"レ"
	],
	[
		13050,
		1,
		"ロ"
	],
	[
		13051,
		1,
		"ワ"
	],
	[
		13052,
		1,
		"ヰ"
	],
	[
		13053,
		1,
		"ヱ"
	],
	[
		13054,
		1,
		"ヲ"
	],
	[
		13055,
		1,
		"令和"
	],
	[
		13056,
		1,
		"アパート"
	],
	[
		13057,
		1,
		"アルファ"
	],
	[
		13058,
		1,
		"アンペア"
	],
	[
		13059,
		1,
		"アール"
	],
	[
		13060,
		1,
		"イニング"
	],
	[
		13061,
		1,
		"インチ"
	],
	[
		13062,
		1,
		"ウォン"
	],
	[
		13063,
		1,
		"エスクード"
	],
	[
		13064,
		1,
		"エーカー"
	],
	[
		13065,
		1,
		"オンス"
	],
	[
		13066,
		1,
		"オーム"
	],
	[
		13067,
		1,
		"カイリ"
	],
	[
		13068,
		1,
		"カラット"
	],
	[
		13069,
		1,
		"カロリー"
	],
	[
		13070,
		1,
		"ガロン"
	],
	[
		13071,
		1,
		"ガンマ"
	],
	[
		13072,
		1,
		"ギガ"
	],
	[
		13073,
		1,
		"ギニー"
	],
	[
		13074,
		1,
		"キュリー"
	],
	[
		13075,
		1,
		"ギルダー"
	],
	[
		13076,
		1,
		"キロ"
	],
	[
		13077,
		1,
		"キログラム"
	],
	[
		13078,
		1,
		"キロメートル"
	],
	[
		13079,
		1,
		"キロワット"
	],
	[
		13080,
		1,
		"グラム"
	],
	[
		13081,
		1,
		"グラムトン"
	],
	[
		13082,
		1,
		"クルゼイロ"
	],
	[
		13083,
		1,
		"クローネ"
	],
	[
		13084,
		1,
		"ケース"
	],
	[
		13085,
		1,
		"コルナ"
	],
	[
		13086,
		1,
		"コーポ"
	],
	[
		13087,
		1,
		"サイクル"
	],
	[
		13088,
		1,
		"サンチーム"
	],
	[
		13089,
		1,
		"シリング"
	],
	[
		13090,
		1,
		"センチ"
	],
	[
		13091,
		1,
		"セント"
	],
	[
		13092,
		1,
		"ダース"
	],
	[
		13093,
		1,
		"デシ"
	],
	[
		13094,
		1,
		"ドル"
	],
	[
		13095,
		1,
		"トン"
	],
	[
		13096,
		1,
		"ナノ"
	],
	[
		13097,
		1,
		"ノット"
	],
	[
		13098,
		1,
		"ハイツ"
	],
	[
		13099,
		1,
		"パーセント"
	],
	[
		13100,
		1,
		"パーツ"
	],
	[
		13101,
		1,
		"バーレル"
	],
	[
		13102,
		1,
		"ピアストル"
	],
	[
		13103,
		1,
		"ピクル"
	],
	[
		13104,
		1,
		"ピコ"
	],
	[
		13105,
		1,
		"ビル"
	],
	[
		13106,
		1,
		"ファラッド"
	],
	[
		13107,
		1,
		"フィート"
	],
	[
		13108,
		1,
		"ブッシェル"
	],
	[
		13109,
		1,
		"フラン"
	],
	[
		13110,
		1,
		"ヘクタール"
	],
	[
		13111,
		1,
		"ペソ"
	],
	[
		13112,
		1,
		"ペニヒ"
	],
	[
		13113,
		1,
		"ヘルツ"
	],
	[
		13114,
		1,
		"ペンス"
	],
	[
		13115,
		1,
		"ページ"
	],
	[
		13116,
		1,
		"ベータ"
	],
	[
		13117,
		1,
		"ポイント"
	],
	[
		13118,
		1,
		"ボルト"
	],
	[
		13119,
		1,
		"ホン"
	],
	[
		13120,
		1,
		"ポンド"
	],
	[
		13121,
		1,
		"ホール"
	],
	[
		13122,
		1,
		"ホーン"
	],
	[
		13123,
		1,
		"マイクロ"
	],
	[
		13124,
		1,
		"マイル"
	],
	[
		13125,
		1,
		"マッハ"
	],
	[
		13126,
		1,
		"マルク"
	],
	[
		13127,
		1,
		"マンション"
	],
	[
		13128,
		1,
		"ミクロン"
	],
	[
		13129,
		1,
		"ミリ"
	],
	[
		13130,
		1,
		"ミリバール"
	],
	[
		13131,
		1,
		"メガ"
	],
	[
		13132,
		1,
		"メガトン"
	],
	[
		13133,
		1,
		"メートル"
	],
	[
		13134,
		1,
		"ヤード"
	],
	[
		13135,
		1,
		"ヤール"
	],
	[
		13136,
		1,
		"ユアン"
	],
	[
		13137,
		1,
		"リットル"
	],
	[
		13138,
		1,
		"リラ"
	],
	[
		13139,
		1,
		"ルピー"
	],
	[
		13140,
		1,
		"ルーブル"
	],
	[
		13141,
		1,
		"レム"
	],
	[
		13142,
		1,
		"レントゲン"
	],
	[
		13143,
		1,
		"ワット"
	],
	[
		13144,
		1,
		"0点"
	],
	[
		13145,
		1,
		"1点"
	],
	[
		13146,
		1,
		"2点"
	],
	[
		13147,
		1,
		"3点"
	],
	[
		13148,
		1,
		"4点"
	],
	[
		13149,
		1,
		"5点"
	],
	[
		13150,
		1,
		"6点"
	],
	[
		13151,
		1,
		"7点"
	],
	[
		13152,
		1,
		"8点"
	],
	[
		13153,
		1,
		"9点"
	],
	[
		13154,
		1,
		"10点"
	],
	[
		13155,
		1,
		"11点"
	],
	[
		13156,
		1,
		"12点"
	],
	[
		13157,
		1,
		"13点"
	],
	[
		13158,
		1,
		"14点"
	],
	[
		13159,
		1,
		"15点"
	],
	[
		13160,
		1,
		"16点"
	],
	[
		13161,
		1,
		"17点"
	],
	[
		13162,
		1,
		"18点"
	],
	[
		13163,
		1,
		"19点"
	],
	[
		13164,
		1,
		"20点"
	],
	[
		13165,
		1,
		"21点"
	],
	[
		13166,
		1,
		"22点"
	],
	[
		13167,
		1,
		"23点"
	],
	[
		13168,
		1,
		"24点"
	],
	[
		13169,
		1,
		"hpa"
	],
	[
		13170,
		1,
		"da"
	],
	[
		13171,
		1,
		"au"
	],
	[
		13172,
		1,
		"bar"
	],
	[
		13173,
		1,
		"ov"
	],
	[
		13174,
		1,
		"pc"
	],
	[
		13175,
		1,
		"dm"
	],
	[
		13176,
		1,
		"dm2"
	],
	[
		13177,
		1,
		"dm3"
	],
	[
		13178,
		1,
		"iu"
	],
	[
		13179,
		1,
		"平成"
	],
	[
		13180,
		1,
		"昭和"
	],
	[
		13181,
		1,
		"大正"
	],
	[
		13182,
		1,
		"明治"
	],
	[
		13183,
		1,
		"株式会社"
	],
	[
		13184,
		1,
		"pa"
	],
	[
		13185,
		1,
		"na"
	],
	[
		13186,
		1,
		"μa"
	],
	[
		13187,
		1,
		"ma"
	],
	[
		13188,
		1,
		"ka"
	],
	[
		13189,
		1,
		"kb"
	],
	[
		13190,
		1,
		"mb"
	],
	[
		13191,
		1,
		"gb"
	],
	[
		13192,
		1,
		"cal"
	],
	[
		13193,
		1,
		"kcal"
	],
	[
		13194,
		1,
		"pf"
	],
	[
		13195,
		1,
		"nf"
	],
	[
		13196,
		1,
		"μf"
	],
	[
		13197,
		1,
		"μg"
	],
	[
		13198,
		1,
		"mg"
	],
	[
		13199,
		1,
		"kg"
	],
	[
		13200,
		1,
		"hz"
	],
	[
		13201,
		1,
		"khz"
	],
	[
		13202,
		1,
		"mhz"
	],
	[
		13203,
		1,
		"ghz"
	],
	[
		13204,
		1,
		"thz"
	],
	[
		13205,
		1,
		"μl"
	],
	[
		13206,
		1,
		"ml"
	],
	[
		13207,
		1,
		"dl"
	],
	[
		13208,
		1,
		"kl"
	],
	[
		13209,
		1,
		"fm"
	],
	[
		13210,
		1,
		"nm"
	],
	[
		13211,
		1,
		"μm"
	],
	[
		13212,
		1,
		"mm"
	],
	[
		13213,
		1,
		"cm"
	],
	[
		13214,
		1,
		"km"
	],
	[
		13215,
		1,
		"mm2"
	],
	[
		13216,
		1,
		"cm2"
	],
	[
		13217,
		1,
		"m2"
	],
	[
		13218,
		1,
		"km2"
	],
	[
		13219,
		1,
		"mm3"
	],
	[
		13220,
		1,
		"cm3"
	],
	[
		13221,
		1,
		"m3"
	],
	[
		13222,
		1,
		"km3"
	],
	[
		13223,
		1,
		"m∕s"
	],
	[
		13224,
		1,
		"m∕s2"
	],
	[
		13225,
		1,
		"pa"
	],
	[
		13226,
		1,
		"kpa"
	],
	[
		13227,
		1,
		"mpa"
	],
	[
		13228,
		1,
		"gpa"
	],
	[
		13229,
		1,
		"rad"
	],
	[
		13230,
		1,
		"rad∕s"
	],
	[
		13231,
		1,
		"rad∕s2"
	],
	[
		13232,
		1,
		"ps"
	],
	[
		13233,
		1,
		"ns"
	],
	[
		13234,
		1,
		"μs"
	],
	[
		13235,
		1,
		"ms"
	],
	[
		13236,
		1,
		"pv"
	],
	[
		13237,
		1,
		"nv"
	],
	[
		13238,
		1,
		"μv"
	],
	[
		13239,
		1,
		"mv"
	],
	[
		13240,
		1,
		"kv"
	],
	[
		13241,
		1,
		"mv"
	],
	[
		13242,
		1,
		"pw"
	],
	[
		13243,
		1,
		"nw"
	],
	[
		13244,
		1,
		"μw"
	],
	[
		13245,
		1,
		"mw"
	],
	[
		13246,
		1,
		"kw"
	],
	[
		13247,
		1,
		"mw"
	],
	[
		13248,
		1,
		"kω"
	],
	[
		13249,
		1,
		"mω"
	],
	[
		13250,
		3
	],
	[
		13251,
		1,
		"bq"
	],
	[
		13252,
		1,
		"cc"
	],
	[
		13253,
		1,
		"cd"
	],
	[
		13254,
		1,
		"c∕kg"
	],
	[
		13255,
		3
	],
	[
		13256,
		1,
		"db"
	],
	[
		13257,
		1,
		"gy"
	],
	[
		13258,
		1,
		"ha"
	],
	[
		13259,
		1,
		"hp"
	],
	[
		13260,
		1,
		"in"
	],
	[
		13261,
		1,
		"kk"
	],
	[
		13262,
		1,
		"km"
	],
	[
		13263,
		1,
		"kt"
	],
	[
		13264,
		1,
		"lm"
	],
	[
		13265,
		1,
		"ln"
	],
	[
		13266,
		1,
		"log"
	],
	[
		13267,
		1,
		"lx"
	],
	[
		13268,
		1,
		"mb"
	],
	[
		13269,
		1,
		"mil"
	],
	[
		13270,
		1,
		"mol"
	],
	[
		13271,
		1,
		"ph"
	],
	[
		13272,
		3
	],
	[
		13273,
		1,
		"ppm"
	],
	[
		13274,
		1,
		"pr"
	],
	[
		13275,
		1,
		"sr"
	],
	[
		13276,
		1,
		"sv"
	],
	[
		13277,
		1,
		"wb"
	],
	[
		13278,
		1,
		"v∕m"
	],
	[
		13279,
		1,
		"a∕m"
	],
	[
		13280,
		1,
		"1日"
	],
	[
		13281,
		1,
		"2日"
	],
	[
		13282,
		1,
		"3日"
	],
	[
		13283,
		1,
		"4日"
	],
	[
		13284,
		1,
		"5日"
	],
	[
		13285,
		1,
		"6日"
	],
	[
		13286,
		1,
		"7日"
	],
	[
		13287,
		1,
		"8日"
	],
	[
		13288,
		1,
		"9日"
	],
	[
		13289,
		1,
		"10日"
	],
	[
		13290,
		1,
		"11日"
	],
	[
		13291,
		1,
		"12日"
	],
	[
		13292,
		1,
		"13日"
	],
	[
		13293,
		1,
		"14日"
	],
	[
		13294,
		1,
		"15日"
	],
	[
		13295,
		1,
		"16日"
	],
	[
		13296,
		1,
		"17日"
	],
	[
		13297,
		1,
		"18日"
	],
	[
		13298,
		1,
		"19日"
	],
	[
		13299,
		1,
		"20日"
	],
	[
		13300,
		1,
		"21日"
	],
	[
		13301,
		1,
		"22日"
	],
	[
		13302,
		1,
		"23日"
	],
	[
		13303,
		1,
		"24日"
	],
	[
		13304,
		1,
		"25日"
	],
	[
		13305,
		1,
		"26日"
	],
	[
		13306,
		1,
		"27日"
	],
	[
		13307,
		1,
		"28日"
	],
	[
		13308,
		1,
		"29日"
	],
	[
		13309,
		1,
		"30日"
	],
	[
		13310,
		1,
		"31日"
	],
	[
		13311,
		1,
		"gal"
	],
	[
		[
			13312,
			19893
		],
		2
	],
	[
		[
			19894,
			19903
		],
		2
	],
	[
		[
			19904,
			19967
		],
		2
	],
	[
		[
			19968,
			40869
		],
		2
	],
	[
		[
			40870,
			40891
		],
		2
	],
	[
		[
			40892,
			40899
		],
		2
	],
	[
		[
			40900,
			40907
		],
		2
	],
	[
		40908,
		2
	],
	[
		[
			40909,
			40917
		],
		2
	],
	[
		[
			40918,
			40938
		],
		2
	],
	[
		[
			40939,
			40943
		],
		2
	],
	[
		[
			40944,
			40956
		],
		2
	],
	[
		[
			40957,
			40959
		],
		2
	],
	[
		[
			40960,
			42124
		],
		2
	],
	[
		[
			42125,
			42127
		],
		3
	],
	[
		[
			42128,
			42145
		],
		2
	],
	[
		[
			42146,
			42147
		],
		2
	],
	[
		[
			42148,
			42163
		],
		2
	],
	[
		42164,
		2
	],
	[
		[
			42165,
			42176
		],
		2
	],
	[
		42177,
		2
	],
	[
		[
			42178,
			42180
		],
		2
	],
	[
		42181,
		2
	],
	[
		42182,
		2
	],
	[
		[
			42183,
			42191
		],
		3
	],
	[
		[
			42192,
			42237
		],
		2
	],
	[
		[
			42238,
			42239
		],
		2
	],
	[
		[
			42240,
			42508
		],
		2
	],
	[
		[
			42509,
			42511
		],
		2
	],
	[
		[
			42512,
			42539
		],
		2
	],
	[
		[
			42540,
			42559
		],
		3
	],
	[
		42560,
		1,
		"ꙁ"
	],
	[
		42561,
		2
	],
	[
		42562,
		1,
		"ꙃ"
	],
	[
		42563,
		2
	],
	[
		42564,
		1,
		"ꙅ"
	],
	[
		42565,
		2
	],
	[
		42566,
		1,
		"ꙇ"
	],
	[
		42567,
		2
	],
	[
		42568,
		1,
		"ꙉ"
	],
	[
		42569,
		2
	],
	[
		42570,
		1,
		"ꙋ"
	],
	[
		42571,
		2
	],
	[
		42572,
		1,
		"ꙍ"
	],
	[
		42573,
		2
	],
	[
		42574,
		1,
		"ꙏ"
	],
	[
		42575,
		2
	],
	[
		42576,
		1,
		"ꙑ"
	],
	[
		42577,
		2
	],
	[
		42578,
		1,
		"ꙓ"
	],
	[
		42579,
		2
	],
	[
		42580,
		1,
		"ꙕ"
	],
	[
		42581,
		2
	],
	[
		42582,
		1,
		"ꙗ"
	],
	[
		42583,
		2
	],
	[
		42584,
		1,
		"ꙙ"
	],
	[
		42585,
		2
	],
	[
		42586,
		1,
		"ꙛ"
	],
	[
		42587,
		2
	],
	[
		42588,
		1,
		"ꙝ"
	],
	[
		42589,
		2
	],
	[
		42590,
		1,
		"ꙟ"
	],
	[
		42591,
		2
	],
	[
		42592,
		1,
		"ꙡ"
	],
	[
		42593,
		2
	],
	[
		42594,
		1,
		"ꙣ"
	],
	[
		42595,
		2
	],
	[
		42596,
		1,
		"ꙥ"
	],
	[
		42597,
		2
	],
	[
		42598,
		1,
		"ꙧ"
	],
	[
		42599,
		2
	],
	[
		42600,
		1,
		"ꙩ"
	],
	[
		42601,
		2
	],
	[
		42602,
		1,
		"ꙫ"
	],
	[
		42603,
		2
	],
	[
		42604,
		1,
		"ꙭ"
	],
	[
		[
			42605,
			42607
		],
		2
	],
	[
		[
			42608,
			42611
		],
		2
	],
	[
		[
			42612,
			42619
		],
		2
	],
	[
		[
			42620,
			42621
		],
		2
	],
	[
		42622,
		2
	],
	[
		42623,
		2
	],
	[
		42624,
		1,
		"ꚁ"
	],
	[
		42625,
		2
	],
	[
		42626,
		1,
		"ꚃ"
	],
	[
		42627,
		2
	],
	[
		42628,
		1,
		"ꚅ"
	],
	[
		42629,
		2
	],
	[
		42630,
		1,
		"ꚇ"
	],
	[
		42631,
		2
	],
	[
		42632,
		1,
		"ꚉ"
	],
	[
		42633,
		2
	],
	[
		42634,
		1,
		"ꚋ"
	],
	[
		42635,
		2
	],
	[
		42636,
		1,
		"ꚍ"
	],
	[
		42637,
		2
	],
	[
		42638,
		1,
		"ꚏ"
	],
	[
		42639,
		2
	],
	[
		42640,
		1,
		"ꚑ"
	],
	[
		42641,
		2
	],
	[
		42642,
		1,
		"ꚓ"
	],
	[
		42643,
		2
	],
	[
		42644,
		1,
		"ꚕ"
	],
	[
		42645,
		2
	],
	[
		42646,
		1,
		"ꚗ"
	],
	[
		42647,
		2
	],
	[
		42648,
		1,
		"ꚙ"
	],
	[
		42649,
		2
	],
	[
		42650,
		1,
		"ꚛ"
	],
	[
		42651,
		2
	],
	[
		42652,
		1,
		"ъ"
	],
	[
		42653,
		1,
		"ь"
	],
	[
		42654,
		2
	],
	[
		42655,
		2
	],
	[
		[
			42656,
			42725
		],
		2
	],
	[
		[
			42726,
			42735
		],
		2
	],
	[
		[
			42736,
			42737
		],
		2
	],
	[
		[
			42738,
			42743
		],
		2
	],
	[
		[
			42744,
			42751
		],
		3
	],
	[
		[
			42752,
			42774
		],
		2
	],
	[
		[
			42775,
			42778
		],
		2
	],
	[
		[
			42779,
			42783
		],
		2
	],
	[
		[
			42784,
			42785
		],
		2
	],
	[
		42786,
		1,
		"ꜣ"
	],
	[
		42787,
		2
	],
	[
		42788,
		1,
		"ꜥ"
	],
	[
		42789,
		2
	],
	[
		42790,
		1,
		"ꜧ"
	],
	[
		42791,
		2
	],
	[
		42792,
		1,
		"ꜩ"
	],
	[
		42793,
		2
	],
	[
		42794,
		1,
		"ꜫ"
	],
	[
		42795,
		2
	],
	[
		42796,
		1,
		"ꜭ"
	],
	[
		42797,
		2
	],
	[
		42798,
		1,
		"ꜯ"
	],
	[
		[
			42799,
			42801
		],
		2
	],
	[
		42802,
		1,
		"ꜳ"
	],
	[
		42803,
		2
	],
	[
		42804,
		1,
		"ꜵ"
	],
	[
		42805,
		2
	],
	[
		42806,
		1,
		"ꜷ"
	],
	[
		42807,
		2
	],
	[
		42808,
		1,
		"ꜹ"
	],
	[
		42809,
		2
	],
	[
		42810,
		1,
		"ꜻ"
	],
	[
		42811,
		2
	],
	[
		42812,
		1,
		"ꜽ"
	],
	[
		42813,
		2
	],
	[
		42814,
		1,
		"ꜿ"
	],
	[
		42815,
		2
	],
	[
		42816,
		1,
		"ꝁ"
	],
	[
		42817,
		2
	],
	[
		42818,
		1,
		"ꝃ"
	],
	[
		42819,
		2
	],
	[
		42820,
		1,
		"ꝅ"
	],
	[
		42821,
		2
	],
	[
		42822,
		1,
		"ꝇ"
	],
	[
		42823,
		2
	],
	[
		42824,
		1,
		"ꝉ"
	],
	[
		42825,
		2
	],
	[
		42826,
		1,
		"ꝋ"
	],
	[
		42827,
		2
	],
	[
		42828,
		1,
		"ꝍ"
	],
	[
		42829,
		2
	],
	[
		42830,
		1,
		"ꝏ"
	],
	[
		42831,
		2
	],
	[
		42832,
		1,
		"ꝑ"
	],
	[
		42833,
		2
	],
	[
		42834,
		1,
		"ꝓ"
	],
	[
		42835,
		2
	],
	[
		42836,
		1,
		"ꝕ"
	],
	[
		42837,
		2
	],
	[
		42838,
		1,
		"ꝗ"
	],
	[
		42839,
		2
	],
	[
		42840,
		1,
		"ꝙ"
	],
	[
		42841,
		2
	],
	[
		42842,
		1,
		"ꝛ"
	],
	[
		42843,
		2
	],
	[
		42844,
		1,
		"ꝝ"
	],
	[
		42845,
		2
	],
	[
		42846,
		1,
		"ꝟ"
	],
	[
		42847,
		2
	],
	[
		42848,
		1,
		"ꝡ"
	],
	[
		42849,
		2
	],
	[
		42850,
		1,
		"ꝣ"
	],
	[
		42851,
		2
	],
	[
		42852,
		1,
		"ꝥ"
	],
	[
		42853,
		2
	],
	[
		42854,
		1,
		"ꝧ"
	],
	[
		42855,
		2
	],
	[
		42856,
		1,
		"ꝩ"
	],
	[
		42857,
		2
	],
	[
		42858,
		1,
		"ꝫ"
	],
	[
		42859,
		2
	],
	[
		42860,
		1,
		"ꝭ"
	],
	[
		42861,
		2
	],
	[
		42862,
		1,
		"ꝯ"
	],
	[
		42863,
		2
	],
	[
		42864,
		1,
		"ꝯ"
	],
	[
		[
			42865,
			42872
		],
		2
	],
	[
		42873,
		1,
		"ꝺ"
	],
	[
		42874,
		2
	],
	[
		42875,
		1,
		"ꝼ"
	],
	[
		42876,
		2
	],
	[
		42877,
		1,
		"ᵹ"
	],
	[
		42878,
		1,
		"ꝿ"
	],
	[
		42879,
		2
	],
	[
		42880,
		1,
		"ꞁ"
	],
	[
		42881,
		2
	],
	[
		42882,
		1,
		"ꞃ"
	],
	[
		42883,
		2
	],
	[
		42884,
		1,
		"ꞅ"
	],
	[
		42885,
		2
	],
	[
		42886,
		1,
		"ꞇ"
	],
	[
		[
			42887,
			42888
		],
		2
	],
	[
		[
			42889,
			42890
		],
		2
	],
	[
		42891,
		1,
		"ꞌ"
	],
	[
		42892,
		2
	],
	[
		42893,
		1,
		"ɥ"
	],
	[
		42894,
		2
	],
	[
		42895,
		2
	],
	[
		42896,
		1,
		"ꞑ"
	],
	[
		42897,
		2
	],
	[
		42898,
		1,
		"ꞓ"
	],
	[
		42899,
		2
	],
	[
		[
			42900,
			42901
		],
		2
	],
	[
		42902,
		1,
		"ꞗ"
	],
	[
		42903,
		2
	],
	[
		42904,
		1,
		"ꞙ"
	],
	[
		42905,
		2
	],
	[
		42906,
		1,
		"ꞛ"
	],
	[
		42907,
		2
	],
	[
		42908,
		1,
		"ꞝ"
	],
	[
		42909,
		2
	],
	[
		42910,
		1,
		"ꞟ"
	],
	[
		42911,
		2
	],
	[
		42912,
		1,
		"ꞡ"
	],
	[
		42913,
		2
	],
	[
		42914,
		1,
		"ꞣ"
	],
	[
		42915,
		2
	],
	[
		42916,
		1,
		"ꞥ"
	],
	[
		42917,
		2
	],
	[
		42918,
		1,
		"ꞧ"
	],
	[
		42919,
		2
	],
	[
		42920,
		1,
		"ꞩ"
	],
	[
		42921,
		2
	],
	[
		42922,
		1,
		"ɦ"
	],
	[
		42923,
		1,
		"ɜ"
	],
	[
		42924,
		1,
		"ɡ"
	],
	[
		42925,
		1,
		"ɬ"
	],
	[
		42926,
		1,
		"ɪ"
	],
	[
		42927,
		2
	],
	[
		42928,
		1,
		"ʞ"
	],
	[
		42929,
		1,
		"ʇ"
	],
	[
		42930,
		1,
		"ʝ"
	],
	[
		42931,
		1,
		"ꭓ"
	],
	[
		42932,
		1,
		"ꞵ"
	],
	[
		42933,
		2
	],
	[
		42934,
		1,
		"ꞷ"
	],
	[
		42935,
		2
	],
	[
		42936,
		1,
		"ꞹ"
	],
	[
		42937,
		2
	],
	[
		42938,
		1,
		"ꞻ"
	],
	[
		42939,
		2
	],
	[
		42940,
		1,
		"ꞽ"
	],
	[
		42941,
		2
	],
	[
		42942,
		1,
		"ꞿ"
	],
	[
		42943,
		2
	],
	[
		42944,
		1,
		"ꟁ"
	],
	[
		42945,
		2
	],
	[
		42946,
		1,
		"ꟃ"
	],
	[
		42947,
		2
	],
	[
		42948,
		1,
		"ꞔ"
	],
	[
		42949,
		1,
		"ʂ"
	],
	[
		42950,
		1,
		"ᶎ"
	],
	[
		42951,
		1,
		"ꟈ"
	],
	[
		42952,
		2
	],
	[
		42953,
		1,
		"ꟊ"
	],
	[
		42954,
		2
	],
	[
		[
			42955,
			42959
		],
		3
	],
	[
		42960,
		1,
		"ꟑ"
	],
	[
		42961,
		2
	],
	[
		42962,
		3
	],
	[
		42963,
		2
	],
	[
		42964,
		3
	],
	[
		42965,
		2
	],
	[
		42966,
		1,
		"ꟗ"
	],
	[
		42967,
		2
	],
	[
		42968,
		1,
		"ꟙ"
	],
	[
		42969,
		2
	],
	[
		[
			42970,
			42993
		],
		3
	],
	[
		42994,
		1,
		"c"
	],
	[
		42995,
		1,
		"f"
	],
	[
		42996,
		1,
		"q"
	],
	[
		42997,
		1,
		"ꟶ"
	],
	[
		42998,
		2
	],
	[
		42999,
		2
	],
	[
		43000,
		1,
		"ħ"
	],
	[
		43001,
		1,
		"œ"
	],
	[
		43002,
		2
	],
	[
		[
			43003,
			43007
		],
		2
	],
	[
		[
			43008,
			43047
		],
		2
	],
	[
		[
			43048,
			43051
		],
		2
	],
	[
		43052,
		2
	],
	[
		[
			43053,
			43055
		],
		3
	],
	[
		[
			43056,
			43065
		],
		2
	],
	[
		[
			43066,
			43071
		],
		3
	],
	[
		[
			43072,
			43123
		],
		2
	],
	[
		[
			43124,
			43127
		],
		2
	],
	[
		[
			43128,
			43135
		],
		3
	],
	[
		[
			43136,
			43204
		],
		2
	],
	[
		43205,
		2
	],
	[
		[
			43206,
			43213
		],
		3
	],
	[
		[
			43214,
			43215
		],
		2
	],
	[
		[
			43216,
			43225
		],
		2
	],
	[
		[
			43226,
			43231
		],
		3
	],
	[
		[
			43232,
			43255
		],
		2
	],
	[
		[
			43256,
			43258
		],
		2
	],
	[
		43259,
		2
	],
	[
		43260,
		2
	],
	[
		43261,
		2
	],
	[
		[
			43262,
			43263
		],
		2
	],
	[
		[
			43264,
			43309
		],
		2
	],
	[
		[
			43310,
			43311
		],
		2
	],
	[
		[
			43312,
			43347
		],
		2
	],
	[
		[
			43348,
			43358
		],
		3
	],
	[
		43359,
		2
	],
	[
		[
			43360,
			43388
		],
		2
	],
	[
		[
			43389,
			43391
		],
		3
	],
	[
		[
			43392,
			43456
		],
		2
	],
	[
		[
			43457,
			43469
		],
		2
	],
	[
		43470,
		3
	],
	[
		[
			43471,
			43481
		],
		2
	],
	[
		[
			43482,
			43485
		],
		3
	],
	[
		[
			43486,
			43487
		],
		2
	],
	[
		[
			43488,
			43518
		],
		2
	],
	[
		43519,
		3
	],
	[
		[
			43520,
			43574
		],
		2
	],
	[
		[
			43575,
			43583
		],
		3
	],
	[
		[
			43584,
			43597
		],
		2
	],
	[
		[
			43598,
			43599
		],
		3
	],
	[
		[
			43600,
			43609
		],
		2
	],
	[
		[
			43610,
			43611
		],
		3
	],
	[
		[
			43612,
			43615
		],
		2
	],
	[
		[
			43616,
			43638
		],
		2
	],
	[
		[
			43639,
			43641
		],
		2
	],
	[
		[
			43642,
			43643
		],
		2
	],
	[
		[
			43644,
			43647
		],
		2
	],
	[
		[
			43648,
			43714
		],
		2
	],
	[
		[
			43715,
			43738
		],
		3
	],
	[
		[
			43739,
			43741
		],
		2
	],
	[
		[
			43742,
			43743
		],
		2
	],
	[
		[
			43744,
			43759
		],
		2
	],
	[
		[
			43760,
			43761
		],
		2
	],
	[
		[
			43762,
			43766
		],
		2
	],
	[
		[
			43767,
			43776
		],
		3
	],
	[
		[
			43777,
			43782
		],
		2
	],
	[
		[
			43783,
			43784
		],
		3
	],
	[
		[
			43785,
			43790
		],
		2
	],
	[
		[
			43791,
			43792
		],
		3
	],
	[
		[
			43793,
			43798
		],
		2
	],
	[
		[
			43799,
			43807
		],
		3
	],
	[
		[
			43808,
			43814
		],
		2
	],
	[
		43815,
		3
	],
	[
		[
			43816,
			43822
		],
		2
	],
	[
		43823,
		3
	],
	[
		[
			43824,
			43866
		],
		2
	],
	[
		43867,
		2
	],
	[
		43868,
		1,
		"ꜧ"
	],
	[
		43869,
		1,
		"ꬷ"
	],
	[
		43870,
		1,
		"ɫ"
	],
	[
		43871,
		1,
		"ꭒ"
	],
	[
		[
			43872,
			43875
		],
		2
	],
	[
		[
			43876,
			43877
		],
		2
	],
	[
		[
			43878,
			43879
		],
		2
	],
	[
		43880,
		2
	],
	[
		43881,
		1,
		"ʍ"
	],
	[
		[
			43882,
			43883
		],
		2
	],
	[
		[
			43884,
			43887
		],
		3
	],
	[
		43888,
		1,
		"Ꭰ"
	],
	[
		43889,
		1,
		"Ꭱ"
	],
	[
		43890,
		1,
		"Ꭲ"
	],
	[
		43891,
		1,
		"Ꭳ"
	],
	[
		43892,
		1,
		"Ꭴ"
	],
	[
		43893,
		1,
		"Ꭵ"
	],
	[
		43894,
		1,
		"Ꭶ"
	],
	[
		43895,
		1,
		"Ꭷ"
	],
	[
		43896,
		1,
		"Ꭸ"
	],
	[
		43897,
		1,
		"Ꭹ"
	],
	[
		43898,
		1,
		"Ꭺ"
	],
	[
		43899,
		1,
		"Ꭻ"
	],
	[
		43900,
		1,
		"Ꭼ"
	],
	[
		43901,
		1,
		"Ꭽ"
	],
	[
		43902,
		1,
		"Ꭾ"
	],
	[
		43903,
		1,
		"Ꭿ"
	],
	[
		43904,
		1,
		"Ꮀ"
	],
	[
		43905,
		1,
		"Ꮁ"
	],
	[
		43906,
		1,
		"Ꮂ"
	],
	[
		43907,
		1,
		"Ꮃ"
	],
	[
		43908,
		1,
		"Ꮄ"
	],
	[
		43909,
		1,
		"Ꮅ"
	],
	[
		43910,
		1,
		"Ꮆ"
	],
	[
		43911,
		1,
		"Ꮇ"
	],
	[
		43912,
		1,
		"Ꮈ"
	],
	[
		43913,
		1,
		"Ꮉ"
	],
	[
		43914,
		1,
		"Ꮊ"
	],
	[
		43915,
		1,
		"Ꮋ"
	],
	[
		43916,
		1,
		"Ꮌ"
	],
	[
		43917,
		1,
		"Ꮍ"
	],
	[
		43918,
		1,
		"Ꮎ"
	],
	[
		43919,
		1,
		"Ꮏ"
	],
	[
		43920,
		1,
		"Ꮐ"
	],
	[
		43921,
		1,
		"Ꮑ"
	],
	[
		43922,
		1,
		"Ꮒ"
	],
	[
		43923,
		1,
		"Ꮓ"
	],
	[
		43924,
		1,
		"Ꮔ"
	],
	[
		43925,
		1,
		"Ꮕ"
	],
	[
		43926,
		1,
		"Ꮖ"
	],
	[
		43927,
		1,
		"Ꮗ"
	],
	[
		43928,
		1,
		"Ꮘ"
	],
	[
		43929,
		1,
		"Ꮙ"
	],
	[
		43930,
		1,
		"Ꮚ"
	],
	[
		43931,
		1,
		"Ꮛ"
	],
	[
		43932,
		1,
		"Ꮜ"
	],
	[
		43933,
		1,
		"Ꮝ"
	],
	[
		43934,
		1,
		"Ꮞ"
	],
	[
		43935,
		1,
		"Ꮟ"
	],
	[
		43936,
		1,
		"Ꮠ"
	],
	[
		43937,
		1,
		"Ꮡ"
	],
	[
		43938,
		1,
		"Ꮢ"
	],
	[
		43939,
		1,
		"Ꮣ"
	],
	[
		43940,
		1,
		"Ꮤ"
	],
	[
		43941,
		1,
		"Ꮥ"
	],
	[
		43942,
		1,
		"Ꮦ"
	],
	[
		43943,
		1,
		"Ꮧ"
	],
	[
		43944,
		1,
		"Ꮨ"
	],
	[
		43945,
		1,
		"Ꮩ"
	],
	[
		43946,
		1,
		"Ꮪ"
	],
	[
		43947,
		1,
		"Ꮫ"
	],
	[
		43948,
		1,
		"Ꮬ"
	],
	[
		43949,
		1,
		"Ꮭ"
	],
	[
		43950,
		1,
		"Ꮮ"
	],
	[
		43951,
		1,
		"Ꮯ"
	],
	[
		43952,
		1,
		"Ꮰ"
	],
	[
		43953,
		1,
		"Ꮱ"
	],
	[
		43954,
		1,
		"Ꮲ"
	],
	[
		43955,
		1,
		"Ꮳ"
	],
	[
		43956,
		1,
		"Ꮴ"
	],
	[
		43957,
		1,
		"Ꮵ"
	],
	[
		43958,
		1,
		"Ꮶ"
	],
	[
		43959,
		1,
		"Ꮷ"
	],
	[
		43960,
		1,
		"Ꮸ"
	],
	[
		43961,
		1,
		"Ꮹ"
	],
	[
		43962,
		1,
		"Ꮺ"
	],
	[
		43963,
		1,
		"Ꮻ"
	],
	[
		43964,
		1,
		"Ꮼ"
	],
	[
		43965,
		1,
		"Ꮽ"
	],
	[
		43966,
		1,
		"Ꮾ"
	],
	[
		43967,
		1,
		"Ꮿ"
	],
	[
		[
			43968,
			44010
		],
		2
	],
	[
		44011,
		2
	],
	[
		[
			44012,
			44013
		],
		2
	],
	[
		[
			44014,
			44015
		],
		3
	],
	[
		[
			44016,
			44025
		],
		2
	],
	[
		[
			44026,
			44031
		],
		3
	],
	[
		[
			44032,
			55203
		],
		2
	],
	[
		[
			55204,
			55215
		],
		3
	],
	[
		[
			55216,
			55238
		],
		2
	],
	[
		[
			55239,
			55242
		],
		3
	],
	[
		[
			55243,
			55291
		],
		2
	],
	[
		[
			55292,
			55295
		],
		3
	],
	[
		[
			55296,
			57343
		],
		3
	],
	[
		[
			57344,
			63743
		],
		3
	],
	[
		63744,
		1,
		"豈"
	],
	[
		63745,
		1,
		"更"
	],
	[
		63746,
		1,
		"車"
	],
	[
		63747,
		1,
		"賈"
	],
	[
		63748,
		1,
		"滑"
	],
	[
		63749,
		1,
		"串"
	],
	[
		63750,
		1,
		"句"
	],
	[
		[
			63751,
			63752
		],
		1,
		"龜"
	],
	[
		63753,
		1,
		"契"
	],
	[
		63754,
		1,
		"金"
	],
	[
		63755,
		1,
		"喇"
	],
	[
		63756,
		1,
		"奈"
	],
	[
		63757,
		1,
		"懶"
	],
	[
		63758,
		1,
		"癩"
	],
	[
		63759,
		1,
		"羅"
	],
	[
		63760,
		1,
		"蘿"
	],
	[
		63761,
		1,
		"螺"
	],
	[
		63762,
		1,
		"裸"
	],
	[
		63763,
		1,
		"邏"
	],
	[
		63764,
		1,
		"樂"
	],
	[
		63765,
		1,
		"洛"
	],
	[
		63766,
		1,
		"烙"
	],
	[
		63767,
		1,
		"珞"
	],
	[
		63768,
		1,
		"落"
	],
	[
		63769,
		1,
		"酪"
	],
	[
		63770,
		1,
		"駱"
	],
	[
		63771,
		1,
		"亂"
	],
	[
		63772,
		1,
		"卵"
	],
	[
		63773,
		1,
		"欄"
	],
	[
		63774,
		1,
		"爛"
	],
	[
		63775,
		1,
		"蘭"
	],
	[
		63776,
		1,
		"鸞"
	],
	[
		63777,
		1,
		"嵐"
	],
	[
		63778,
		1,
		"濫"
	],
	[
		63779,
		1,
		"藍"
	],
	[
		63780,
		1,
		"襤"
	],
	[
		63781,
		1,
		"拉"
	],
	[
		63782,
		1,
		"臘"
	],
	[
		63783,
		1,
		"蠟"
	],
	[
		63784,
		1,
		"廊"
	],
	[
		63785,
		1,
		"朗"
	],
	[
		63786,
		1,
		"浪"
	],
	[
		63787,
		1,
		"狼"
	],
	[
		63788,
		1,
		"郎"
	],
	[
		63789,
		1,
		"來"
	],
	[
		63790,
		1,
		"冷"
	],
	[
		63791,
		1,
		"勞"
	],
	[
		63792,
		1,
		"擄"
	],
	[
		63793,
		1,
		"櫓"
	],
	[
		63794,
		1,
		"爐"
	],
	[
		63795,
		1,
		"盧"
	],
	[
		63796,
		1,
		"老"
	],
	[
		63797,
		1,
		"蘆"
	],
	[
		63798,
		1,
		"虜"
	],
	[
		63799,
		1,
		"路"
	],
	[
		63800,
		1,
		"露"
	],
	[
		63801,
		1,
		"魯"
	],
	[
		63802,
		1,
		"鷺"
	],
	[
		63803,
		1,
		"碌"
	],
	[
		63804,
		1,
		"祿"
	],
	[
		63805,
		1,
		"綠"
	],
	[
		63806,
		1,
		"菉"
	],
	[
		63807,
		1,
		"錄"
	],
	[
		63808,
		1,
		"鹿"
	],
	[
		63809,
		1,
		"論"
	],
	[
		63810,
		1,
		"壟"
	],
	[
		63811,
		1,
		"弄"
	],
	[
		63812,
		1,
		"籠"
	],
	[
		63813,
		1,
		"聾"
	],
	[
		63814,
		1,
		"牢"
	],
	[
		63815,
		1,
		"磊"
	],
	[
		63816,
		1,
		"賂"
	],
	[
		63817,
		1,
		"雷"
	],
	[
		63818,
		1,
		"壘"
	],
	[
		63819,
		1,
		"屢"
	],
	[
		63820,
		1,
		"樓"
	],
	[
		63821,
		1,
		"淚"
	],
	[
		63822,
		1,
		"漏"
	],
	[
		63823,
		1,
		"累"
	],
	[
		63824,
		1,
		"縷"
	],
	[
		63825,
		1,
		"陋"
	],
	[
		63826,
		1,
		"勒"
	],
	[
		63827,
		1,
		"肋"
	],
	[
		63828,
		1,
		"凜"
	],
	[
		63829,
		1,
		"凌"
	],
	[
		63830,
		1,
		"稜"
	],
	[
		63831,
		1,
		"綾"
	],
	[
		63832,
		1,
		"菱"
	],
	[
		63833,
		1,
		"陵"
	],
	[
		63834,
		1,
		"讀"
	],
	[
		63835,
		1,
		"拏"
	],
	[
		63836,
		1,
		"樂"
	],
	[
		63837,
		1,
		"諾"
	],
	[
		63838,
		1,
		"丹"
	],
	[
		63839,
		1,
		"寧"
	],
	[
		63840,
		1,
		"怒"
	],
	[
		63841,
		1,
		"率"
	],
	[
		63842,
		1,
		"異"
	],
	[
		63843,
		1,
		"北"
	],
	[
		63844,
		1,
		"磻"
	],
	[
		63845,
		1,
		"便"
	],
	[
		63846,
		1,
		"復"
	],
	[
		63847,
		1,
		"不"
	],
	[
		63848,
		1,
		"泌"
	],
	[
		63849,
		1,
		"數"
	],
	[
		63850,
		1,
		"索"
	],
	[
		63851,
		1,
		"參"
	],
	[
		63852,
		1,
		"塞"
	],
	[
		63853,
		1,
		"省"
	],
	[
		63854,
		1,
		"葉"
	],
	[
		63855,
		1,
		"說"
	],
	[
		63856,
		1,
		"殺"
	],
	[
		63857,
		1,
		"辰"
	],
	[
		63858,
		1,
		"沈"
	],
	[
		63859,
		1,
		"拾"
	],
	[
		63860,
		1,
		"若"
	],
	[
		63861,
		1,
		"掠"
	],
	[
		63862,
		1,
		"略"
	],
	[
		63863,
		1,
		"亮"
	],
	[
		63864,
		1,
		"兩"
	],
	[
		63865,
		1,
		"凉"
	],
	[
		63866,
		1,
		"梁"
	],
	[
		63867,
		1,
		"糧"
	],
	[
		63868,
		1,
		"良"
	],
	[
		63869,
		1,
		"諒"
	],
	[
		63870,
		1,
		"量"
	],
	[
		63871,
		1,
		"勵"
	],
	[
		63872,
		1,
		"呂"
	],
	[
		63873,
		1,
		"女"
	],
	[
		63874,
		1,
		"廬"
	],
	[
		63875,
		1,
		"旅"
	],
	[
		63876,
		1,
		"濾"
	],
	[
		63877,
		1,
		"礪"
	],
	[
		63878,
		1,
		"閭"
	],
	[
		63879,
		1,
		"驪"
	],
	[
		63880,
		1,
		"麗"
	],
	[
		63881,
		1,
		"黎"
	],
	[
		63882,
		1,
		"力"
	],
	[
		63883,
		1,
		"曆"
	],
	[
		63884,
		1,
		"歷"
	],
	[
		63885,
		1,
		"轢"
	],
	[
		63886,
		1,
		"年"
	],
	[
		63887,
		1,
		"憐"
	],
	[
		63888,
		1,
		"戀"
	],
	[
		63889,
		1,
		"撚"
	],
	[
		63890,
		1,
		"漣"
	],
	[
		63891,
		1,
		"煉"
	],
	[
		63892,
		1,
		"璉"
	],
	[
		63893,
		1,
		"秊"
	],
	[
		63894,
		1,
		"練"
	],
	[
		63895,
		1,
		"聯"
	],
	[
		63896,
		1,
		"輦"
	],
	[
		63897,
		1,
		"蓮"
	],
	[
		63898,
		1,
		"連"
	],
	[
		63899,
		1,
		"鍊"
	],
	[
		63900,
		1,
		"列"
	],
	[
		63901,
		1,
		"劣"
	],
	[
		63902,
		1,
		"咽"
	],
	[
		63903,
		1,
		"烈"
	],
	[
		63904,
		1,
		"裂"
	],
	[
		63905,
		1,
		"說"
	],
	[
		63906,
		1,
		"廉"
	],
	[
		63907,
		1,
		"念"
	],
	[
		63908,
		1,
		"捻"
	],
	[
		63909,
		1,
		"殮"
	],
	[
		63910,
		1,
		"簾"
	],
	[
		63911,
		1,
		"獵"
	],
	[
		63912,
		1,
		"令"
	],
	[
		63913,
		1,
		"囹"
	],
	[
		63914,
		1,
		"寧"
	],
	[
		63915,
		1,
		"嶺"
	],
	[
		63916,
		1,
		"怜"
	],
	[
		63917,
		1,
		"玲"
	],
	[
		63918,
		1,
		"瑩"
	],
	[
		63919,
		1,
		"羚"
	],
	[
		63920,
		1,
		"聆"
	],
	[
		63921,
		1,
		"鈴"
	],
	[
		63922,
		1,
		"零"
	],
	[
		63923,
		1,
		"靈"
	],
	[
		63924,
		1,
		"領"
	],
	[
		63925,
		1,
		"例"
	],
	[
		63926,
		1,
		"禮"
	],
	[
		63927,
		1,
		"醴"
	],
	[
		63928,
		1,
		"隸"
	],
	[
		63929,
		1,
		"惡"
	],
	[
		63930,
		1,
		"了"
	],
	[
		63931,
		1,
		"僚"
	],
	[
		63932,
		1,
		"寮"
	],
	[
		63933,
		1,
		"尿"
	],
	[
		63934,
		1,
		"料"
	],
	[
		63935,
		1,
		"樂"
	],
	[
		63936,
		1,
		"燎"
	],
	[
		63937,
		1,
		"療"
	],
	[
		63938,
		1,
		"蓼"
	],
	[
		63939,
		1,
		"遼"
	],
	[
		63940,
		1,
		"龍"
	],
	[
		63941,
		1,
		"暈"
	],
	[
		63942,
		1,
		"阮"
	],
	[
		63943,
		1,
		"劉"
	],
	[
		63944,
		1,
		"杻"
	],
	[
		63945,
		1,
		"柳"
	],
	[
		63946,
		1,
		"流"
	],
	[
		63947,
		1,
		"溜"
	],
	[
		63948,
		1,
		"琉"
	],
	[
		63949,
		1,
		"留"
	],
	[
		63950,
		1,
		"硫"
	],
	[
		63951,
		1,
		"紐"
	],
	[
		63952,
		1,
		"類"
	],
	[
		63953,
		1,
		"六"
	],
	[
		63954,
		1,
		"戮"
	],
	[
		63955,
		1,
		"陸"
	],
	[
		63956,
		1,
		"倫"
	],
	[
		63957,
		1,
		"崙"
	],
	[
		63958,
		1,
		"淪"
	],
	[
		63959,
		1,
		"輪"
	],
	[
		63960,
		1,
		"律"
	],
	[
		63961,
		1,
		"慄"
	],
	[
		63962,
		1,
		"栗"
	],
	[
		63963,
		1,
		"率"
	],
	[
		63964,
		1,
		"隆"
	],
	[
		63965,
		1,
		"利"
	],
	[
		63966,
		1,
		"吏"
	],
	[
		63967,
		1,
		"履"
	],
	[
		63968,
		1,
		"易"
	],
	[
		63969,
		1,
		"李"
	],
	[
		63970,
		1,
		"梨"
	],
	[
		63971,
		1,
		"泥"
	],
	[
		63972,
		1,
		"理"
	],
	[
		63973,
		1,
		"痢"
	],
	[
		63974,
		1,
		"罹"
	],
	[
		63975,
		1,
		"裏"
	],
	[
		63976,
		1,
		"裡"
	],
	[
		63977,
		1,
		"里"
	],
	[
		63978,
		1,
		"離"
	],
	[
		63979,
		1,
		"匿"
	],
	[
		63980,
		1,
		"溺"
	],
	[
		63981,
		1,
		"吝"
	],
	[
		63982,
		1,
		"燐"
	],
	[
		63983,
		1,
		"璘"
	],
	[
		63984,
		1,
		"藺"
	],
	[
		63985,
		1,
		"隣"
	],
	[
		63986,
		1,
		"鱗"
	],
	[
		63987,
		1,
		"麟"
	],
	[
		63988,
		1,
		"林"
	],
	[
		63989,
		1,
		"淋"
	],
	[
		63990,
		1,
		"臨"
	],
	[
		63991,
		1,
		"立"
	],
	[
		63992,
		1,
		"笠"
	],
	[
		63993,
		1,
		"粒"
	],
	[
		63994,
		1,
		"狀"
	],
	[
		63995,
		1,
		"炙"
	],
	[
		63996,
		1,
		"識"
	],
	[
		63997,
		1,
		"什"
	],
	[
		63998,
		1,
		"茶"
	],
	[
		63999,
		1,
		"刺"
	],
	[
		64000,
		1,
		"切"
	],
	[
		64001,
		1,
		"度"
	],
	[
		64002,
		1,
		"拓"
	],
	[
		64003,
		1,
		"糖"
	],
	[
		64004,
		1,
		"宅"
	],
	[
		64005,
		1,
		"洞"
	],
	[
		64006,
		1,
		"暴"
	],
	[
		64007,
		1,
		"輻"
	],
	[
		64008,
		1,
		"行"
	],
	[
		64009,
		1,
		"降"
	],
	[
		64010,
		1,
		"見"
	],
	[
		64011,
		1,
		"廓"
	],
	[
		64012,
		1,
		"兀"
	],
	[
		64013,
		1,
		"嗀"
	],
	[
		[
			64014,
			64015
		],
		2
	],
	[
		64016,
		1,
		"塚"
	],
	[
		64017,
		2
	],
	[
		64018,
		1,
		"晴"
	],
	[
		[
			64019,
			64020
		],
		2
	],
	[
		64021,
		1,
		"凞"
	],
	[
		64022,
		1,
		"猪"
	],
	[
		64023,
		1,
		"益"
	],
	[
		64024,
		1,
		"礼"
	],
	[
		64025,
		1,
		"神"
	],
	[
		64026,
		1,
		"祥"
	],
	[
		64027,
		1,
		"福"
	],
	[
		64028,
		1,
		"靖"
	],
	[
		64029,
		1,
		"精"
	],
	[
		64030,
		1,
		"羽"
	],
	[
		64031,
		2
	],
	[
		64032,
		1,
		"蘒"
	],
	[
		64033,
		2
	],
	[
		64034,
		1,
		"諸"
	],
	[
		[
			64035,
			64036
		],
		2
	],
	[
		64037,
		1,
		"逸"
	],
	[
		64038,
		1,
		"都"
	],
	[
		[
			64039,
			64041
		],
		2
	],
	[
		64042,
		1,
		"飯"
	],
	[
		64043,
		1,
		"飼"
	],
	[
		64044,
		1,
		"館"
	],
	[
		64045,
		1,
		"鶴"
	],
	[
		64046,
		1,
		"郞"
	],
	[
		64047,
		1,
		"隷"
	],
	[
		64048,
		1,
		"侮"
	],
	[
		64049,
		1,
		"僧"
	],
	[
		64050,
		1,
		"免"
	],
	[
		64051,
		1,
		"勉"
	],
	[
		64052,
		1,
		"勤"
	],
	[
		64053,
		1,
		"卑"
	],
	[
		64054,
		1,
		"喝"
	],
	[
		64055,
		1,
		"嘆"
	],
	[
		64056,
		1,
		"器"
	],
	[
		64057,
		1,
		"塀"
	],
	[
		64058,
		1,
		"墨"
	],
	[
		64059,
		1,
		"層"
	],
	[
		64060,
		1,
		"屮"
	],
	[
		64061,
		1,
		"悔"
	],
	[
		64062,
		1,
		"慨"
	],
	[
		64063,
		1,
		"憎"
	],
	[
		64064,
		1,
		"懲"
	],
	[
		64065,
		1,
		"敏"
	],
	[
		64066,
		1,
		"既"
	],
	[
		64067,
		1,
		"暑"
	],
	[
		64068,
		1,
		"梅"
	],
	[
		64069,
		1,
		"海"
	],
	[
		64070,
		1,
		"渚"
	],
	[
		64071,
		1,
		"漢"
	],
	[
		64072,
		1,
		"煮"
	],
	[
		64073,
		1,
		"爫"
	],
	[
		64074,
		1,
		"琢"
	],
	[
		64075,
		1,
		"碑"
	],
	[
		64076,
		1,
		"社"
	],
	[
		64077,
		1,
		"祉"
	],
	[
		64078,
		1,
		"祈"
	],
	[
		64079,
		1,
		"祐"
	],
	[
		64080,
		1,
		"祖"
	],
	[
		64081,
		1,
		"祝"
	],
	[
		64082,
		1,
		"禍"
	],
	[
		64083,
		1,
		"禎"
	],
	[
		64084,
		1,
		"穀"
	],
	[
		64085,
		1,
		"突"
	],
	[
		64086,
		1,
		"節"
	],
	[
		64087,
		1,
		"練"
	],
	[
		64088,
		1,
		"縉"
	],
	[
		64089,
		1,
		"繁"
	],
	[
		64090,
		1,
		"署"
	],
	[
		64091,
		1,
		"者"
	],
	[
		64092,
		1,
		"臭"
	],
	[
		[
			64093,
			64094
		],
		1,
		"艹"
	],
	[
		64095,
		1,
		"著"
	],
	[
		64096,
		1,
		"褐"
	],
	[
		64097,
		1,
		"視"
	],
	[
		64098,
		1,
		"謁"
	],
	[
		64099,
		1,
		"謹"
	],
	[
		64100,
		1,
		"賓"
	],
	[
		64101,
		1,
		"贈"
	],
	[
		64102,
		1,
		"辶"
	],
	[
		64103,
		1,
		"逸"
	],
	[
		64104,
		1,
		"難"
	],
	[
		64105,
		1,
		"響"
	],
	[
		64106,
		1,
		"頻"
	],
	[
		64107,
		1,
		"恵"
	],
	[
		64108,
		1,
		"𤋮"
	],
	[
		64109,
		1,
		"舘"
	],
	[
		[
			64110,
			64111
		],
		3
	],
	[
		64112,
		1,
		"並"
	],
	[
		64113,
		1,
		"况"
	],
	[
		64114,
		1,
		"全"
	],
	[
		64115,
		1,
		"侀"
	],
	[
		64116,
		1,
		"充"
	],
	[
		64117,
		1,
		"冀"
	],
	[
		64118,
		1,
		"勇"
	],
	[
		64119,
		1,
		"勺"
	],
	[
		64120,
		1,
		"喝"
	],
	[
		64121,
		1,
		"啕"
	],
	[
		64122,
		1,
		"喙"
	],
	[
		64123,
		1,
		"嗢"
	],
	[
		64124,
		1,
		"塚"
	],
	[
		64125,
		1,
		"墳"
	],
	[
		64126,
		1,
		"奄"
	],
	[
		64127,
		1,
		"奔"
	],
	[
		64128,
		1,
		"婢"
	],
	[
		64129,
		1,
		"嬨"
	],
	[
		64130,
		1,
		"廒"
	],
	[
		64131,
		1,
		"廙"
	],
	[
		64132,
		1,
		"彩"
	],
	[
		64133,
		1,
		"徭"
	],
	[
		64134,
		1,
		"惘"
	],
	[
		64135,
		1,
		"慎"
	],
	[
		64136,
		1,
		"愈"
	],
	[
		64137,
		1,
		"憎"
	],
	[
		64138,
		1,
		"慠"
	],
	[
		64139,
		1,
		"懲"
	],
	[
		64140,
		1,
		"戴"
	],
	[
		64141,
		1,
		"揄"
	],
	[
		64142,
		1,
		"搜"
	],
	[
		64143,
		1,
		"摒"
	],
	[
		64144,
		1,
		"敖"
	],
	[
		64145,
		1,
		"晴"
	],
	[
		64146,
		1,
		"朗"
	],
	[
		64147,
		1,
		"望"
	],
	[
		64148,
		1,
		"杖"
	],
	[
		64149,
		1,
		"歹"
	],
	[
		64150,
		1,
		"殺"
	],
	[
		64151,
		1,
		"流"
	],
	[
		64152,
		1,
		"滛"
	],
	[
		64153,
		1,
		"滋"
	],
	[
		64154,
		1,
		"漢"
	],
	[
		64155,
		1,
		"瀞"
	],
	[
		64156,
		1,
		"煮"
	],
	[
		64157,
		1,
		"瞧"
	],
	[
		64158,
		1,
		"爵"
	],
	[
		64159,
		1,
		"犯"
	],
	[
		64160,
		1,
		"猪"
	],
	[
		64161,
		1,
		"瑱"
	],
	[
		64162,
		1,
		"甆"
	],
	[
		64163,
		1,
		"画"
	],
	[
		64164,
		1,
		"瘝"
	],
	[
		64165,
		1,
		"瘟"
	],
	[
		64166,
		1,
		"益"
	],
	[
		64167,
		1,
		"盛"
	],
	[
		64168,
		1,
		"直"
	],
	[
		64169,
		1,
		"睊"
	],
	[
		64170,
		1,
		"着"
	],
	[
		64171,
		1,
		"磌"
	],
	[
		64172,
		1,
		"窱"
	],
	[
		64173,
		1,
		"節"
	],
	[
		64174,
		1,
		"类"
	],
	[
		64175,
		1,
		"絛"
	],
	[
		64176,
		1,
		"練"
	],
	[
		64177,
		1,
		"缾"
	],
	[
		64178,
		1,
		"者"
	],
	[
		64179,
		1,
		"荒"
	],
	[
		64180,
		1,
		"華"
	],
	[
		64181,
		1,
		"蝹"
	],
	[
		64182,
		1,
		"襁"
	],
	[
		64183,
		1,
		"覆"
	],
	[
		64184,
		1,
		"視"
	],
	[
		64185,
		1,
		"調"
	],
	[
		64186,
		1,
		"諸"
	],
	[
		64187,
		1,
		"請"
	],
	[
		64188,
		1,
		"謁"
	],
	[
		64189,
		1,
		"諾"
	],
	[
		64190,
		1,
		"諭"
	],
	[
		64191,
		1,
		"謹"
	],
	[
		64192,
		1,
		"變"
	],
	[
		64193,
		1,
		"贈"
	],
	[
		64194,
		1,
		"輸"
	],
	[
		64195,
		1,
		"遲"
	],
	[
		64196,
		1,
		"醙"
	],
	[
		64197,
		1,
		"鉶"
	],
	[
		64198,
		1,
		"陼"
	],
	[
		64199,
		1,
		"難"
	],
	[
		64200,
		1,
		"靖"
	],
	[
		64201,
		1,
		"韛"
	],
	[
		64202,
		1,
		"響"
	],
	[
		64203,
		1,
		"頋"
	],
	[
		64204,
		1,
		"頻"
	],
	[
		64205,
		1,
		"鬒"
	],
	[
		64206,
		1,
		"龜"
	],
	[
		64207,
		1,
		"𢡊"
	],
	[
		64208,
		1,
		"𢡄"
	],
	[
		64209,
		1,
		"𣏕"
	],
	[
		64210,
		1,
		"㮝"
	],
	[
		64211,
		1,
		"䀘"
	],
	[
		64212,
		1,
		"䀹"
	],
	[
		64213,
		1,
		"𥉉"
	],
	[
		64214,
		1,
		"𥳐"
	],
	[
		64215,
		1,
		"𧻓"
	],
	[
		64216,
		1,
		"齃"
	],
	[
		64217,
		1,
		"龎"
	],
	[
		[
			64218,
			64255
		],
		3
	],
	[
		64256,
		1,
		"ff"
	],
	[
		64257,
		1,
		"fi"
	],
	[
		64258,
		1,
		"fl"
	],
	[
		64259,
		1,
		"ffi"
	],
	[
		64260,
		1,
		"ffl"
	],
	[
		[
			64261,
			64262
		],
		1,
		"st"
	],
	[
		[
			64263,
			64274
		],
		3
	],
	[
		64275,
		1,
		"մն"
	],
	[
		64276,
		1,
		"մե"
	],
	[
		64277,
		1,
		"մի"
	],
	[
		64278,
		1,
		"վն"
	],
	[
		64279,
		1,
		"մխ"
	],
	[
		[
			64280,
			64284
		],
		3
	],
	[
		64285,
		1,
		"יִ"
	],
	[
		64286,
		2
	],
	[
		64287,
		1,
		"ײַ"
	],
	[
		64288,
		1,
		"ע"
	],
	[
		64289,
		1,
		"א"
	],
	[
		64290,
		1,
		"ד"
	],
	[
		64291,
		1,
		"ה"
	],
	[
		64292,
		1,
		"כ"
	],
	[
		64293,
		1,
		"ל"
	],
	[
		64294,
		1,
		"ם"
	],
	[
		64295,
		1,
		"ר"
	],
	[
		64296,
		1,
		"ת"
	],
	[
		64297,
		5,
		"+"
	],
	[
		64298,
		1,
		"שׁ"
	],
	[
		64299,
		1,
		"שׂ"
	],
	[
		64300,
		1,
		"שּׁ"
	],
	[
		64301,
		1,
		"שּׂ"
	],
	[
		64302,
		1,
		"אַ"
	],
	[
		64303,
		1,
		"אָ"
	],
	[
		64304,
		1,
		"אּ"
	],
	[
		64305,
		1,
		"בּ"
	],
	[
		64306,
		1,
		"גּ"
	],
	[
		64307,
		1,
		"דּ"
	],
	[
		64308,
		1,
		"הּ"
	],
	[
		64309,
		1,
		"וּ"
	],
	[
		64310,
		1,
		"זּ"
	],
	[
		64311,
		3
	],
	[
		64312,
		1,
		"טּ"
	],
	[
		64313,
		1,
		"יּ"
	],
	[
		64314,
		1,
		"ךּ"
	],
	[
		64315,
		1,
		"כּ"
	],
	[
		64316,
		1,
		"לּ"
	],
	[
		64317,
		3
	],
	[
		64318,
		1,
		"מּ"
	],
	[
		64319,
		3
	],
	[
		64320,
		1,
		"נּ"
	],
	[
		64321,
		1,
		"סּ"
	],
	[
		64322,
		3
	],
	[
		64323,
		1,
		"ףּ"
	],
	[
		64324,
		1,
		"פּ"
	],
	[
		64325,
		3
	],
	[
		64326,
		1,
		"צּ"
	],
	[
		64327,
		1,
		"קּ"
	],
	[
		64328,
		1,
		"רּ"
	],
	[
		64329,
		1,
		"שּ"
	],
	[
		64330,
		1,
		"תּ"
	],
	[
		64331,
		1,
		"וֹ"
	],
	[
		64332,
		1,
		"בֿ"
	],
	[
		64333,
		1,
		"כֿ"
	],
	[
		64334,
		1,
		"פֿ"
	],
	[
		64335,
		1,
		"אל"
	],
	[
		[
			64336,
			64337
		],
		1,
		"ٱ"
	],
	[
		[
			64338,
			64341
		],
		1,
		"ٻ"
	],
	[
		[
			64342,
			64345
		],
		1,
		"پ"
	],
	[
		[
			64346,
			64349
		],
		1,
		"ڀ"
	],
	[
		[
			64350,
			64353
		],
		1,
		"ٺ"
	],
	[
		[
			64354,
			64357
		],
		1,
		"ٿ"
	],
	[
		[
			64358,
			64361
		],
		1,
		"ٹ"
	],
	[
		[
			64362,
			64365
		],
		1,
		"ڤ"
	],
	[
		[
			64366,
			64369
		],
		1,
		"ڦ"
	],
	[
		[
			64370,
			64373
		],
		1,
		"ڄ"
	],
	[
		[
			64374,
			64377
		],
		1,
		"ڃ"
	],
	[
		[
			64378,
			64381
		],
		1,
		"چ"
	],
	[
		[
			64382,
			64385
		],
		1,
		"ڇ"
	],
	[
		[
			64386,
			64387
		],
		1,
		"ڍ"
	],
	[
		[
			64388,
			64389
		],
		1,
		"ڌ"
	],
	[
		[
			64390,
			64391
		],
		1,
		"ڎ"
	],
	[
		[
			64392,
			64393
		],
		1,
		"ڈ"
	],
	[
		[
			64394,
			64395
		],
		1,
		"ژ"
	],
	[
		[
			64396,
			64397
		],
		1,
		"ڑ"
	],
	[
		[
			64398,
			64401
		],
		1,
		"ک"
	],
	[
		[
			64402,
			64405
		],
		1,
		"گ"
	],
	[
		[
			64406,
			64409
		],
		1,
		"ڳ"
	],
	[
		[
			64410,
			64413
		],
		1,
		"ڱ"
	],
	[
		[
			64414,
			64415
		],
		1,
		"ں"
	],
	[
		[
			64416,
			64419
		],
		1,
		"ڻ"
	],
	[
		[
			64420,
			64421
		],
		1,
		"ۀ"
	],
	[
		[
			64422,
			64425
		],
		1,
		"ہ"
	],
	[
		[
			64426,
			64429
		],
		1,
		"ھ"
	],
	[
		[
			64430,
			64431
		],
		1,
		"ے"
	],
	[
		[
			64432,
			64433
		],
		1,
		"ۓ"
	],
	[
		[
			64434,
			64449
		],
		2
	],
	[
		64450,
		2
	],
	[
		[
			64451,
			64466
		],
		3
	],
	[
		[
			64467,
			64470
		],
		1,
		"ڭ"
	],
	[
		[
			64471,
			64472
		],
		1,
		"ۇ"
	],
	[
		[
			64473,
			64474
		],
		1,
		"ۆ"
	],
	[
		[
			64475,
			64476
		],
		1,
		"ۈ"
	],
	[
		64477,
		1,
		"ۇٴ"
	],
	[
		[
			64478,
			64479
		],
		1,
		"ۋ"
	],
	[
		[
			64480,
			64481
		],
		1,
		"ۅ"
	],
	[
		[
			64482,
			64483
		],
		1,
		"ۉ"
	],
	[
		[
			64484,
			64487
		],
		1,
		"ې"
	],
	[
		[
			64488,
			64489
		],
		1,
		"ى"
	],
	[
		[
			64490,
			64491
		],
		1,
		"ئا"
	],
	[
		[
			64492,
			64493
		],
		1,
		"ئە"
	],
	[
		[
			64494,
			64495
		],
		1,
		"ئو"
	],
	[
		[
			64496,
			64497
		],
		1,
		"ئۇ"
	],
	[
		[
			64498,
			64499
		],
		1,
		"ئۆ"
	],
	[
		[
			64500,
			64501
		],
		1,
		"ئۈ"
	],
	[
		[
			64502,
			64504
		],
		1,
		"ئې"
	],
	[
		[
			64505,
			64507
		],
		1,
		"ئى"
	],
	[
		[
			64508,
			64511
		],
		1,
		"ی"
	],
	[
		64512,
		1,
		"ئج"
	],
	[
		64513,
		1,
		"ئح"
	],
	[
		64514,
		1,
		"ئم"
	],
	[
		64515,
		1,
		"ئى"
	],
	[
		64516,
		1,
		"ئي"
	],
	[
		64517,
		1,
		"بج"
	],
	[
		64518,
		1,
		"بح"
	],
	[
		64519,
		1,
		"بخ"
	],
	[
		64520,
		1,
		"بم"
	],
	[
		64521,
		1,
		"بى"
	],
	[
		64522,
		1,
		"بي"
	],
	[
		64523,
		1,
		"تج"
	],
	[
		64524,
		1,
		"تح"
	],
	[
		64525,
		1,
		"تخ"
	],
	[
		64526,
		1,
		"تم"
	],
	[
		64527,
		1,
		"تى"
	],
	[
		64528,
		1,
		"تي"
	],
	[
		64529,
		1,
		"ثج"
	],
	[
		64530,
		1,
		"ثم"
	],
	[
		64531,
		1,
		"ثى"
	],
	[
		64532,
		1,
		"ثي"
	],
	[
		64533,
		1,
		"جح"
	],
	[
		64534,
		1,
		"جم"
	],
	[
		64535,
		1,
		"حج"
	],
	[
		64536,
		1,
		"حم"
	],
	[
		64537,
		1,
		"خج"
	],
	[
		64538,
		1,
		"خح"
	],
	[
		64539,
		1,
		"خم"
	],
	[
		64540,
		1,
		"سج"
	],
	[
		64541,
		1,
		"سح"
	],
	[
		64542,
		1,
		"سخ"
	],
	[
		64543,
		1,
		"سم"
	],
	[
		64544,
		1,
		"صح"
	],
	[
		64545,
		1,
		"صم"
	],
	[
		64546,
		1,
		"ضج"
	],
	[
		64547,
		1,
		"ضح"
	],
	[
		64548,
		1,
		"ضخ"
	],
	[
		64549,
		1,
		"ضم"
	],
	[
		64550,
		1,
		"طح"
	],
	[
		64551,
		1,
		"طم"
	],
	[
		64552,
		1,
		"ظم"
	],
	[
		64553,
		1,
		"عج"
	],
	[
		64554,
		1,
		"عم"
	],
	[
		64555,
		1,
		"غج"
	],
	[
		64556,
		1,
		"غم"
	],
	[
		64557,
		1,
		"فج"
	],
	[
		64558,
		1,
		"فح"
	],
	[
		64559,
		1,
		"فخ"
	],
	[
		64560,
		1,
		"فم"
	],
	[
		64561,
		1,
		"فى"
	],
	[
		64562,
		1,
		"في"
	],
	[
		64563,
		1,
		"قح"
	],
	[
		64564,
		1,
		"قم"
	],
	[
		64565,
		1,
		"قى"
	],
	[
		64566,
		1,
		"قي"
	],
	[
		64567,
		1,
		"كا"
	],
	[
		64568,
		1,
		"كج"
	],
	[
		64569,
		1,
		"كح"
	],
	[
		64570,
		1,
		"كخ"
	],
	[
		64571,
		1,
		"كل"
	],
	[
		64572,
		1,
		"كم"
	],
	[
		64573,
		1,
		"كى"
	],
	[
		64574,
		1,
		"كي"
	],
	[
		64575,
		1,
		"لج"
	],
	[
		64576,
		1,
		"لح"
	],
	[
		64577,
		1,
		"لخ"
	],
	[
		64578,
		1,
		"لم"
	],
	[
		64579,
		1,
		"لى"
	],
	[
		64580,
		1,
		"لي"
	],
	[
		64581,
		1,
		"مج"
	],
	[
		64582,
		1,
		"مح"
	],
	[
		64583,
		1,
		"مخ"
	],
	[
		64584,
		1,
		"مم"
	],
	[
		64585,
		1,
		"مى"
	],
	[
		64586,
		1,
		"مي"
	],
	[
		64587,
		1,
		"نج"
	],
	[
		64588,
		1,
		"نح"
	],
	[
		64589,
		1,
		"نخ"
	],
	[
		64590,
		1,
		"نم"
	],
	[
		64591,
		1,
		"نى"
	],
	[
		64592,
		1,
		"ني"
	],
	[
		64593,
		1,
		"هج"
	],
	[
		64594,
		1,
		"هم"
	],
	[
		64595,
		1,
		"هى"
	],
	[
		64596,
		1,
		"هي"
	],
	[
		64597,
		1,
		"يج"
	],
	[
		64598,
		1,
		"يح"
	],
	[
		64599,
		1,
		"يخ"
	],
	[
		64600,
		1,
		"يم"
	],
	[
		64601,
		1,
		"يى"
	],
	[
		64602,
		1,
		"يي"
	],
	[
		64603,
		1,
		"ذٰ"
	],
	[
		64604,
		1,
		"رٰ"
	],
	[
		64605,
		1,
		"ىٰ"
	],
	[
		64606,
		5,
		" ٌّ"
	],
	[
		64607,
		5,
		" ٍّ"
	],
	[
		64608,
		5,
		" َّ"
	],
	[
		64609,
		5,
		" ُّ"
	],
	[
		64610,
		5,
		" ِّ"
	],
	[
		64611,
		5,
		" ّٰ"
	],
	[
		64612,
		1,
		"ئر"
	],
	[
		64613,
		1,
		"ئز"
	],
	[
		64614,
		1,
		"ئم"
	],
	[
		64615,
		1,
		"ئن"
	],
	[
		64616,
		1,
		"ئى"
	],
	[
		64617,
		1,
		"ئي"
	],
	[
		64618,
		1,
		"بر"
	],
	[
		64619,
		1,
		"بز"
	],
	[
		64620,
		1,
		"بم"
	],
	[
		64621,
		1,
		"بن"
	],
	[
		64622,
		1,
		"بى"
	],
	[
		64623,
		1,
		"بي"
	],
	[
		64624,
		1,
		"تر"
	],
	[
		64625,
		1,
		"تز"
	],
	[
		64626,
		1,
		"تم"
	],
	[
		64627,
		1,
		"تن"
	],
	[
		64628,
		1,
		"تى"
	],
	[
		64629,
		1,
		"تي"
	],
	[
		64630,
		1,
		"ثر"
	],
	[
		64631,
		1,
		"ثز"
	],
	[
		64632,
		1,
		"ثم"
	],
	[
		64633,
		1,
		"ثن"
	],
	[
		64634,
		1,
		"ثى"
	],
	[
		64635,
		1,
		"ثي"
	],
	[
		64636,
		1,
		"فى"
	],
	[
		64637,
		1,
		"في"
	],
	[
		64638,
		1,
		"قى"
	],
	[
		64639,
		1,
		"قي"
	],
	[
		64640,
		1,
		"كا"
	],
	[
		64641,
		1,
		"كل"
	],
	[
		64642,
		1,
		"كم"
	],
	[
		64643,
		1,
		"كى"
	],
	[
		64644,
		1,
		"كي"
	],
	[
		64645,
		1,
		"لم"
	],
	[
		64646,
		1,
		"لى"
	],
	[
		64647,
		1,
		"لي"
	],
	[
		64648,
		1,
		"ما"
	],
	[
		64649,
		1,
		"مم"
	],
	[
		64650,
		1,
		"نر"
	],
	[
		64651,
		1,
		"نز"
	],
	[
		64652,
		1,
		"نم"
	],
	[
		64653,
		1,
		"نن"
	],
	[
		64654,
		1,
		"نى"
	],
	[
		64655,
		1,
		"ني"
	],
	[
		64656,
		1,
		"ىٰ"
	],
	[
		64657,
		1,
		"ير"
	],
	[
		64658,
		1,
		"يز"
	],
	[
		64659,
		1,
		"يم"
	],
	[
		64660,
		1,
		"ين"
	],
	[
		64661,
		1,
		"يى"
	],
	[
		64662,
		1,
		"يي"
	],
	[
		64663,
		1,
		"ئج"
	],
	[
		64664,
		1,
		"ئح"
	],
	[
		64665,
		1,
		"ئخ"
	],
	[
		64666,
		1,
		"ئم"
	],
	[
		64667,
		1,
		"ئه"
	],
	[
		64668,
		1,
		"بج"
	],
	[
		64669,
		1,
		"بح"
	],
	[
		64670,
		1,
		"بخ"
	],
	[
		64671,
		1,
		"بم"
	],
	[
		64672,
		1,
		"به"
	],
	[
		64673,
		1,
		"تج"
	],
	[
		64674,
		1,
		"تح"
	],
	[
		64675,
		1,
		"تخ"
	],
	[
		64676,
		1,
		"تم"
	],
	[
		64677,
		1,
		"ته"
	],
	[
		64678,
		1,
		"ثم"
	],
	[
		64679,
		1,
		"جح"
	],
	[
		64680,
		1,
		"جم"
	],
	[
		64681,
		1,
		"حج"
	],
	[
		64682,
		1,
		"حم"
	],
	[
		64683,
		1,
		"خج"
	],
	[
		64684,
		1,
		"خم"
	],
	[
		64685,
		1,
		"سج"
	],
	[
		64686,
		1,
		"سح"
	],
	[
		64687,
		1,
		"سخ"
	],
	[
		64688,
		1,
		"سم"
	],
	[
		64689,
		1,
		"صح"
	],
	[
		64690,
		1,
		"صخ"
	],
	[
		64691,
		1,
		"صم"
	],
	[
		64692,
		1,
		"ضج"
	],
	[
		64693,
		1,
		"ضح"
	],
	[
		64694,
		1,
		"ضخ"
	],
	[
		64695,
		1,
		"ضم"
	],
	[
		64696,
		1,
		"طح"
	],
	[
		64697,
		1,
		"ظم"
	],
	[
		64698,
		1,
		"عج"
	],
	[
		64699,
		1,
		"عم"
	],
	[
		64700,
		1,
		"غج"
	],
	[
		64701,
		1,
		"غم"
	],
	[
		64702,
		1,
		"فج"
	],
	[
		64703,
		1,
		"فح"
	],
	[
		64704,
		1,
		"فخ"
	],
	[
		64705,
		1,
		"فم"
	],
	[
		64706,
		1,
		"قح"
	],
	[
		64707,
		1,
		"قم"
	],
	[
		64708,
		1,
		"كج"
	],
	[
		64709,
		1,
		"كح"
	],
	[
		64710,
		1,
		"كخ"
	],
	[
		64711,
		1,
		"كل"
	],
	[
		64712,
		1,
		"كم"
	],
	[
		64713,
		1,
		"لج"
	],
	[
		64714,
		1,
		"لح"
	],
	[
		64715,
		1,
		"لخ"
	],
	[
		64716,
		1,
		"لم"
	],
	[
		64717,
		1,
		"له"
	],
	[
		64718,
		1,
		"مج"
	],
	[
		64719,
		1,
		"مح"
	],
	[
		64720,
		1,
		"مخ"
	],
	[
		64721,
		1,
		"مم"
	],
	[
		64722,
		1,
		"نج"
	],
	[
		64723,
		1,
		"نح"
	],
	[
		64724,
		1,
		"نخ"
	],
	[
		64725,
		1,
		"نم"
	],
	[
		64726,
		1,
		"نه"
	],
	[
		64727,
		1,
		"هج"
	],
	[
		64728,
		1,
		"هم"
	],
	[
		64729,
		1,
		"هٰ"
	],
	[
		64730,
		1,
		"يج"
	],
	[
		64731,
		1,
		"يح"
	],
	[
		64732,
		1,
		"يخ"
	],
	[
		64733,
		1,
		"يم"
	],
	[
		64734,
		1,
		"يه"
	],
	[
		64735,
		1,
		"ئم"
	],
	[
		64736,
		1,
		"ئه"
	],
	[
		64737,
		1,
		"بم"
	],
	[
		64738,
		1,
		"به"
	],
	[
		64739,
		1,
		"تم"
	],
	[
		64740,
		1,
		"ته"
	],
	[
		64741,
		1,
		"ثم"
	],
	[
		64742,
		1,
		"ثه"
	],
	[
		64743,
		1,
		"سم"
	],
	[
		64744,
		1,
		"سه"
	],
	[
		64745,
		1,
		"شم"
	],
	[
		64746,
		1,
		"شه"
	],
	[
		64747,
		1,
		"كل"
	],
	[
		64748,
		1,
		"كم"
	],
	[
		64749,
		1,
		"لم"
	],
	[
		64750,
		1,
		"نم"
	],
	[
		64751,
		1,
		"نه"
	],
	[
		64752,
		1,
		"يم"
	],
	[
		64753,
		1,
		"يه"
	],
	[
		64754,
		1,
		"ـَّ"
	],
	[
		64755,
		1,
		"ـُّ"
	],
	[
		64756,
		1,
		"ـِّ"
	],
	[
		64757,
		1,
		"طى"
	],
	[
		64758,
		1,
		"طي"
	],
	[
		64759,
		1,
		"عى"
	],
	[
		64760,
		1,
		"عي"
	],
	[
		64761,
		1,
		"غى"
	],
	[
		64762,
		1,
		"غي"
	],
	[
		64763,
		1,
		"سى"
	],
	[
		64764,
		1,
		"سي"
	],
	[
		64765,
		1,
		"شى"
	],
	[
		64766,
		1,
		"شي"
	],
	[
		64767,
		1,
		"حى"
	],
	[
		64768,
		1,
		"حي"
	],
	[
		64769,
		1,
		"جى"
	],
	[
		64770,
		1,
		"جي"
	],
	[
		64771,
		1,
		"خى"
	],
	[
		64772,
		1,
		"خي"
	],
	[
		64773,
		1,
		"صى"
	],
	[
		64774,
		1,
		"صي"
	],
	[
		64775,
		1,
		"ضى"
	],
	[
		64776,
		1,
		"ضي"
	],
	[
		64777,
		1,
		"شج"
	],
	[
		64778,
		1,
		"شح"
	],
	[
		64779,
		1,
		"شخ"
	],
	[
		64780,
		1,
		"شم"
	],
	[
		64781,
		1,
		"شر"
	],
	[
		64782,
		1,
		"سر"
	],
	[
		64783,
		1,
		"صر"
	],
	[
		64784,
		1,
		"ضر"
	],
	[
		64785,
		1,
		"طى"
	],
	[
		64786,
		1,
		"طي"
	],
	[
		64787,
		1,
		"عى"
	],
	[
		64788,
		1,
		"عي"
	],
	[
		64789,
		1,
		"غى"
	],
	[
		64790,
		1,
		"غي"
	],
	[
		64791,
		1,
		"سى"
	],
	[
		64792,
		1,
		"سي"
	],
	[
		64793,
		1,
		"شى"
	],
	[
		64794,
		1,
		"شي"
	],
	[
		64795,
		1,
		"حى"
	],
	[
		64796,
		1,
		"حي"
	],
	[
		64797,
		1,
		"جى"
	],
	[
		64798,
		1,
		"جي"
	],
	[
		64799,
		1,
		"خى"
	],
	[
		64800,
		1,
		"خي"
	],
	[
		64801,
		1,
		"صى"
	],
	[
		64802,
		1,
		"صي"
	],
	[
		64803,
		1,
		"ضى"
	],
	[
		64804,
		1,
		"ضي"
	],
	[
		64805,
		1,
		"شج"
	],
	[
		64806,
		1,
		"شح"
	],
	[
		64807,
		1,
		"شخ"
	],
	[
		64808,
		1,
		"شم"
	],
	[
		64809,
		1,
		"شر"
	],
	[
		64810,
		1,
		"سر"
	],
	[
		64811,
		1,
		"صر"
	],
	[
		64812,
		1,
		"ضر"
	],
	[
		64813,
		1,
		"شج"
	],
	[
		64814,
		1,
		"شح"
	],
	[
		64815,
		1,
		"شخ"
	],
	[
		64816,
		1,
		"شم"
	],
	[
		64817,
		1,
		"سه"
	],
	[
		64818,
		1,
		"شه"
	],
	[
		64819,
		1,
		"طم"
	],
	[
		64820,
		1,
		"سج"
	],
	[
		64821,
		1,
		"سح"
	],
	[
		64822,
		1,
		"سخ"
	],
	[
		64823,
		1,
		"شج"
	],
	[
		64824,
		1,
		"شح"
	],
	[
		64825,
		1,
		"شخ"
	],
	[
		64826,
		1,
		"طم"
	],
	[
		64827,
		1,
		"ظم"
	],
	[
		[
			64828,
			64829
		],
		1,
		"اً"
	],
	[
		[
			64830,
			64831
		],
		2
	],
	[
		[
			64832,
			64847
		],
		2
	],
	[
		64848,
		1,
		"تجم"
	],
	[
		[
			64849,
			64850
		],
		1,
		"تحج"
	],
	[
		64851,
		1,
		"تحم"
	],
	[
		64852,
		1,
		"تخم"
	],
	[
		64853,
		1,
		"تمج"
	],
	[
		64854,
		1,
		"تمح"
	],
	[
		64855,
		1,
		"تمخ"
	],
	[
		[
			64856,
			64857
		],
		1,
		"جمح"
	],
	[
		64858,
		1,
		"حمي"
	],
	[
		64859,
		1,
		"حمى"
	],
	[
		64860,
		1,
		"سحج"
	],
	[
		64861,
		1,
		"سجح"
	],
	[
		64862,
		1,
		"سجى"
	],
	[
		[
			64863,
			64864
		],
		1,
		"سمح"
	],
	[
		64865,
		1,
		"سمج"
	],
	[
		[
			64866,
			64867
		],
		1,
		"سمم"
	],
	[
		[
			64868,
			64869
		],
		1,
		"صحح"
	],
	[
		64870,
		1,
		"صمم"
	],
	[
		[
			64871,
			64872
		],
		1,
		"شحم"
	],
	[
		64873,
		1,
		"شجي"
	],
	[
		[
			64874,
			64875
		],
		1,
		"شمخ"
	],
	[
		[
			64876,
			64877
		],
		1,
		"شمم"
	],
	[
		64878,
		1,
		"ضحى"
	],
	[
		[
			64879,
			64880
		],
		1,
		"ضخم"
	],
	[
		[
			64881,
			64882
		],
		1,
		"طمح"
	],
	[
		64883,
		1,
		"طمم"
	],
	[
		64884,
		1,
		"طمي"
	],
	[
		64885,
		1,
		"عجم"
	],
	[
		[
			64886,
			64887
		],
		1,
		"عمم"
	],
	[
		64888,
		1,
		"عمى"
	],
	[
		64889,
		1,
		"غمم"
	],
	[
		64890,
		1,
		"غمي"
	],
	[
		64891,
		1,
		"غمى"
	],
	[
		[
			64892,
			64893
		],
		1,
		"فخم"
	],
	[
		64894,
		1,
		"قمح"
	],
	[
		64895,
		1,
		"قمم"
	],
	[
		64896,
		1,
		"لحم"
	],
	[
		64897,
		1,
		"لحي"
	],
	[
		64898,
		1,
		"لحى"
	],
	[
		[
			64899,
			64900
		],
		1,
		"لجج"
	],
	[
		[
			64901,
			64902
		],
		1,
		"لخم"
	],
	[
		[
			64903,
			64904
		],
		1,
		"لمح"
	],
	[
		64905,
		1,
		"محج"
	],
	[
		64906,
		1,
		"محم"
	],
	[
		64907,
		1,
		"محي"
	],
	[
		64908,
		1,
		"مجح"
	],
	[
		64909,
		1,
		"مجم"
	],
	[
		64910,
		1,
		"مخج"
	],
	[
		64911,
		1,
		"مخم"
	],
	[
		[
			64912,
			64913
		],
		3
	],
	[
		64914,
		1,
		"مجخ"
	],
	[
		64915,
		1,
		"همج"
	],
	[
		64916,
		1,
		"همم"
	],
	[
		64917,
		1,
		"نحم"
	],
	[
		64918,
		1,
		"نحى"
	],
	[
		[
			64919,
			64920
		],
		1,
		"نجم"
	],
	[
		64921,
		1,
		"نجى"
	],
	[
		64922,
		1,
		"نمي"
	],
	[
		64923,
		1,
		"نمى"
	],
	[
		[
			64924,
			64925
		],
		1,
		"يمم"
	],
	[
		64926,
		1,
		"بخي"
	],
	[
		64927,
		1,
		"تجي"
	],
	[
		64928,
		1,
		"تجى"
	],
	[
		64929,
		1,
		"تخي"
	],
	[
		64930,
		1,
		"تخى"
	],
	[
		64931,
		1,
		"تمي"
	],
	[
		64932,
		1,
		"تمى"
	],
	[
		64933,
		1,
		"جمي"
	],
	[
		64934,
		1,
		"جحى"
	],
	[
		64935,
		1,
		"جمى"
	],
	[
		64936,
		1,
		"سخى"
	],
	[
		64937,
		1,
		"صحي"
	],
	[
		64938,
		1,
		"شحي"
	],
	[
		64939,
		1,
		"ضحي"
	],
	[
		64940,
		1,
		"لجي"
	],
	[
		64941,
		1,
		"لمي"
	],
	[
		64942,
		1,
		"يحي"
	],
	[
		64943,
		1,
		"يجي"
	],
	[
		64944,
		1,
		"يمي"
	],
	[
		64945,
		1,
		"ممي"
	],
	[
		64946,
		1,
		"قمي"
	],
	[
		64947,
		1,
		"نحي"
	],
	[
		64948,
		1,
		"قمح"
	],
	[
		64949,
		1,
		"لحم"
	],
	[
		64950,
		1,
		"عمي"
	],
	[
		64951,
		1,
		"كمي"
	],
	[
		64952,
		1,
		"نجح"
	],
	[
		64953,
		1,
		"مخي"
	],
	[
		64954,
		1,
		"لجم"
	],
	[
		64955,
		1,
		"كمم"
	],
	[
		64956,
		1,
		"لجم"
	],
	[
		64957,
		1,
		"نجح"
	],
	[
		64958,
		1,
		"جحي"
	],
	[
		64959,
		1,
		"حجي"
	],
	[
		64960,
		1,
		"مجي"
	],
	[
		64961,
		1,
		"فمي"
	],
	[
		64962,
		1,
		"بحي"
	],
	[
		64963,
		1,
		"كمم"
	],
	[
		64964,
		1,
		"عجم"
	],
	[
		64965,
		1,
		"صمم"
	],
	[
		64966,
		1,
		"سخي"
	],
	[
		64967,
		1,
		"نجي"
	],
	[
		[
			64968,
			64974
		],
		3
	],
	[
		64975,
		2
	],
	[
		[
			64976,
			65007
		],
		3
	],
	[
		65008,
		1,
		"صلے"
	],
	[
		65009,
		1,
		"قلے"
	],
	[
		65010,
		1,
		"الله"
	],
	[
		65011,
		1,
		"اكبر"
	],
	[
		65012,
		1,
		"محمد"
	],
	[
		65013,
		1,
		"صلعم"
	],
	[
		65014,
		1,
		"رسول"
	],
	[
		65015,
		1,
		"عليه"
	],
	[
		65016,
		1,
		"وسلم"
	],
	[
		65017,
		1,
		"صلى"
	],
	[
		65018,
		5,
		"صلى الله عليه وسلم"
	],
	[
		65019,
		5,
		"جل جلاله"
	],
	[
		65020,
		1,
		"ریال"
	],
	[
		65021,
		2
	],
	[
		[
			65022,
			65023
		],
		2
	],
	[
		[
			65024,
			65039
		],
		7
	],
	[
		65040,
		5,
		","
	],
	[
		65041,
		1,
		"、"
	],
	[
		65042,
		3
	],
	[
		65043,
		5,
		":"
	],
	[
		65044,
		5,
		";"
	],
	[
		65045,
		5,
		"!"
	],
	[
		65046,
		5,
		"?"
	],
	[
		65047,
		1,
		"〖"
	],
	[
		65048,
		1,
		"〗"
	],
	[
		65049,
		3
	],
	[
		[
			65050,
			65055
		],
		3
	],
	[
		[
			65056,
			65059
		],
		2
	],
	[
		[
			65060,
			65062
		],
		2
	],
	[
		[
			65063,
			65069
		],
		2
	],
	[
		[
			65070,
			65071
		],
		2
	],
	[
		65072,
		3
	],
	[
		65073,
		1,
		"—"
	],
	[
		65074,
		1,
		"–"
	],
	[
		[
			65075,
			65076
		],
		5,
		"_"
	],
	[
		65077,
		5,
		"("
	],
	[
		65078,
		5,
		")"
	],
	[
		65079,
		5,
		"{"
	],
	[
		65080,
		5,
		"}"
	],
	[
		65081,
		1,
		"〔"
	],
	[
		65082,
		1,
		"〕"
	],
	[
		65083,
		1,
		"【"
	],
	[
		65084,
		1,
		"】"
	],
	[
		65085,
		1,
		"《"
	],
	[
		65086,
		1,
		"》"
	],
	[
		65087,
		1,
		"〈"
	],
	[
		65088,
		1,
		"〉"
	],
	[
		65089,
		1,
		"「"
	],
	[
		65090,
		1,
		"」"
	],
	[
		65091,
		1,
		"『"
	],
	[
		65092,
		1,
		"』"
	],
	[
		[
			65093,
			65094
		],
		2
	],
	[
		65095,
		5,
		"["
	],
	[
		65096,
		5,
		"]"
	],
	[
		[
			65097,
			65100
		],
		5,
		" ̅"
	],
	[
		[
			65101,
			65103
		],
		5,
		"_"
	],
	[
		65104,
		5,
		","
	],
	[
		65105,
		1,
		"、"
	],
	[
		65106,
		3
	],
	[
		65107,
		3
	],
	[
		65108,
		5,
		";"
	],
	[
		65109,
		5,
		":"
	],
	[
		65110,
		5,
		"?"
	],
	[
		65111,
		5,
		"!"
	],
	[
		65112,
		1,
		"—"
	],
	[
		65113,
		5,
		"("
	],
	[
		65114,
		5,
		")"
	],
	[
		65115,
		5,
		"{"
	],
	[
		65116,
		5,
		"}"
	],
	[
		65117,
		1,
		"〔"
	],
	[
		65118,
		1,
		"〕"
	],
	[
		65119,
		5,
		"#"
	],
	[
		65120,
		5,
		"&"
	],
	[
		65121,
		5,
		"*"
	],
	[
		65122,
		5,
		"+"
	],
	[
		65123,
		1,
		"-"
	],
	[
		65124,
		5,
		"<"
	],
	[
		65125,
		5,
		">"
	],
	[
		65126,
		5,
		"="
	],
	[
		65127,
		3
	],
	[
		65128,
		5,
		"\\"
	],
	[
		65129,
		5,
		"$"
	],
	[
		65130,
		5,
		"%"
	],
	[
		65131,
		5,
		"@"
	],
	[
		[
			65132,
			65135
		],
		3
	],
	[
		65136,
		5,
		" ً"
	],
	[
		65137,
		1,
		"ـً"
	],
	[
		65138,
		5,
		" ٌ"
	],
	[
		65139,
		2
	],
	[
		65140,
		5,
		" ٍ"
	],
	[
		65141,
		3
	],
	[
		65142,
		5,
		" َ"
	],
	[
		65143,
		1,
		"ـَ"
	],
	[
		65144,
		5,
		" ُ"
	],
	[
		65145,
		1,
		"ـُ"
	],
	[
		65146,
		5,
		" ِ"
	],
	[
		65147,
		1,
		"ـِ"
	],
	[
		65148,
		5,
		" ّ"
	],
	[
		65149,
		1,
		"ـّ"
	],
	[
		65150,
		5,
		" ْ"
	],
	[
		65151,
		1,
		"ـْ"
	],
	[
		65152,
		1,
		"ء"
	],
	[
		[
			65153,
			65154
		],
		1,
		"آ"
	],
	[
		[
			65155,
			65156
		],
		1,
		"أ"
	],
	[
		[
			65157,
			65158
		],
		1,
		"ؤ"
	],
	[
		[
			65159,
			65160
		],
		1,
		"إ"
	],
	[
		[
			65161,
			65164
		],
		1,
		"ئ"
	],
	[
		[
			65165,
			65166
		],
		1,
		"ا"
	],
	[
		[
			65167,
			65170
		],
		1,
		"ب"
	],
	[
		[
			65171,
			65172
		],
		1,
		"ة"
	],
	[
		[
			65173,
			65176
		],
		1,
		"ت"
	],
	[
		[
			65177,
			65180
		],
		1,
		"ث"
	],
	[
		[
			65181,
			65184
		],
		1,
		"ج"
	],
	[
		[
			65185,
			65188
		],
		1,
		"ح"
	],
	[
		[
			65189,
			65192
		],
		1,
		"خ"
	],
	[
		[
			65193,
			65194
		],
		1,
		"د"
	],
	[
		[
			65195,
			65196
		],
		1,
		"ذ"
	],
	[
		[
			65197,
			65198
		],
		1,
		"ر"
	],
	[
		[
			65199,
			65200
		],
		1,
		"ز"
	],
	[
		[
			65201,
			65204
		],
		1,
		"س"
	],
	[
		[
			65205,
			65208
		],
		1,
		"ش"
	],
	[
		[
			65209,
			65212
		],
		1,
		"ص"
	],
	[
		[
			65213,
			65216
		],
		1,
		"ض"
	],
	[
		[
			65217,
			65220
		],
		1,
		"ط"
	],
	[
		[
			65221,
			65224
		],
		1,
		"ظ"
	],
	[
		[
			65225,
			65228
		],
		1,
		"ع"
	],
	[
		[
			65229,
			65232
		],
		1,
		"غ"
	],
	[
		[
			65233,
			65236
		],
		1,
		"ف"
	],
	[
		[
			65237,
			65240
		],
		1,
		"ق"
	],
	[
		[
			65241,
			65244
		],
		1,
		"ك"
	],
	[
		[
			65245,
			65248
		],
		1,
		"ل"
	],
	[
		[
			65249,
			65252
		],
		1,
		"م"
	],
	[
		[
			65253,
			65256
		],
		1,
		"ن"
	],
	[
		[
			65257,
			65260
		],
		1,
		"ه"
	],
	[
		[
			65261,
			65262
		],
		1,
		"و"
	],
	[
		[
			65263,
			65264
		],
		1,
		"ى"
	],
	[
		[
			65265,
			65268
		],
		1,
		"ي"
	],
	[
		[
			65269,
			65270
		],
		1,
		"لآ"
	],
	[
		[
			65271,
			65272
		],
		1,
		"لأ"
	],
	[
		[
			65273,
			65274
		],
		1,
		"لإ"
	],
	[
		[
			65275,
			65276
		],
		1,
		"لا"
	],
	[
		[
			65277,
			65278
		],
		3
	],
	[
		65279,
		7
	],
	[
		65280,
		3
	],
	[
		65281,
		5,
		"!"
	],
	[
		65282,
		5,
		"\""
	],
	[
		65283,
		5,
		"#"
	],
	[
		65284,
		5,
		"$"
	],
	[
		65285,
		5,
		"%"
	],
	[
		65286,
		5,
		"&"
	],
	[
		65287,
		5,
		"'"
	],
	[
		65288,
		5,
		"("
	],
	[
		65289,
		5,
		")"
	],
	[
		65290,
		5,
		"*"
	],
	[
		65291,
		5,
		"+"
	],
	[
		65292,
		5,
		","
	],
	[
		65293,
		1,
		"-"
	],
	[
		65294,
		1,
		"."
	],
	[
		65295,
		5,
		"/"
	],
	[
		65296,
		1,
		"0"
	],
	[
		65297,
		1,
		"1"
	],
	[
		65298,
		1,
		"2"
	],
	[
		65299,
		1,
		"3"
	],
	[
		65300,
		1,
		"4"
	],
	[
		65301,
		1,
		"5"
	],
	[
		65302,
		1,
		"6"
	],
	[
		65303,
		1,
		"7"
	],
	[
		65304,
		1,
		"8"
	],
	[
		65305,
		1,
		"9"
	],
	[
		65306,
		5,
		":"
	],
	[
		65307,
		5,
		";"
	],
	[
		65308,
		5,
		"<"
	],
	[
		65309,
		5,
		"="
	],
	[
		65310,
		5,
		">"
	],
	[
		65311,
		5,
		"?"
	],
	[
		65312,
		5,
		"@"
	],
	[
		65313,
		1,
		"a"
	],
	[
		65314,
		1,
		"b"
	],
	[
		65315,
		1,
		"c"
	],
	[
		65316,
		1,
		"d"
	],
	[
		65317,
		1,
		"e"
	],
	[
		65318,
		1,
		"f"
	],
	[
		65319,
		1,
		"g"
	],
	[
		65320,
		1,
		"h"
	],
	[
		65321,
		1,
		"i"
	],
	[
		65322,
		1,
		"j"
	],
	[
		65323,
		1,
		"k"
	],
	[
		65324,
		1,
		"l"
	],
	[
		65325,
		1,
		"m"
	],
	[
		65326,
		1,
		"n"
	],
	[
		65327,
		1,
		"o"
	],
	[
		65328,
		1,
		"p"
	],
	[
		65329,
		1,
		"q"
	],
	[
		65330,
		1,
		"r"
	],
	[
		65331,
		1,
		"s"
	],
	[
		65332,
		1,
		"t"
	],
	[
		65333,
		1,
		"u"
	],
	[
		65334,
		1,
		"v"
	],
	[
		65335,
		1,
		"w"
	],
	[
		65336,
		1,
		"x"
	],
	[
		65337,
		1,
		"y"
	],
	[
		65338,
		1,
		"z"
	],
	[
		65339,
		5,
		"["
	],
	[
		65340,
		5,
		"\\"
	],
	[
		65341,
		5,
		"]"
	],
	[
		65342,
		5,
		"^"
	],
	[
		65343,
		5,
		"_"
	],
	[
		65344,
		5,
		"`"
	],
	[
		65345,
		1,
		"a"
	],
	[
		65346,
		1,
		"b"
	],
	[
		65347,
		1,
		"c"
	],
	[
		65348,
		1,
		"d"
	],
	[
		65349,
		1,
		"e"
	],
	[
		65350,
		1,
		"f"
	],
	[
		65351,
		1,
		"g"
	],
	[
		65352,
		1,
		"h"
	],
	[
		65353,
		1,
		"i"
	],
	[
		65354,
		1,
		"j"
	],
	[
		65355,
		1,
		"k"
	],
	[
		65356,
		1,
		"l"
	],
	[
		65357,
		1,
		"m"
	],
	[
		65358,
		1,
		"n"
	],
	[
		65359,
		1,
		"o"
	],
	[
		65360,
		1,
		"p"
	],
	[
		65361,
		1,
		"q"
	],
	[
		65362,
		1,
		"r"
	],
	[
		65363,
		1,
		"s"
	],
	[
		65364,
		1,
		"t"
	],
	[
		65365,
		1,
		"u"
	],
	[
		65366,
		1,
		"v"
	],
	[
		65367,
		1,
		"w"
	],
	[
		65368,
		1,
		"x"
	],
	[
		65369,
		1,
		"y"
	],
	[
		65370,
		1,
		"z"
	],
	[
		65371,
		5,
		"{"
	],
	[
		65372,
		5,
		"|"
	],
	[
		65373,
		5,
		"}"
	],
	[
		65374,
		5,
		"~"
	],
	[
		65375,
		1,
		"⦅"
	],
	[
		65376,
		1,
		"⦆"
	],
	[
		65377,
		1,
		"."
	],
	[
		65378,
		1,
		"「"
	],
	[
		65379,
		1,
		"」"
	],
	[
		65380,
		1,
		"、"
	],
	[
		65381,
		1,
		"・"
	],
	[
		65382,
		1,
		"ヲ"
	],
	[
		65383,
		1,
		"ァ"
	],
	[
		65384,
		1,
		"ィ"
	],
	[
		65385,
		1,
		"ゥ"
	],
	[
		65386,
		1,
		"ェ"
	],
	[
		65387,
		1,
		"ォ"
	],
	[
		65388,
		1,
		"ャ"
	],
	[
		65389,
		1,
		"ュ"
	],
	[
		65390,
		1,
		"ョ"
	],
	[
		65391,
		1,
		"ッ"
	],
	[
		65392,
		1,
		"ー"
	],
	[
		65393,
		1,
		"ア"
	],
	[
		65394,
		1,
		"イ"
	],
	[
		65395,
		1,
		"ウ"
	],
	[
		65396,
		1,
		"エ"
	],
	[
		65397,
		1,
		"オ"
	],
	[
		65398,
		1,
		"カ"
	],
	[
		65399,
		1,
		"キ"
	],
	[
		65400,
		1,
		"ク"
	],
	[
		65401,
		1,
		"ケ"
	],
	[
		65402,
		1,
		"コ"
	],
	[
		65403,
		1,
		"サ"
	],
	[
		65404,
		1,
		"シ"
	],
	[
		65405,
		1,
		"ス"
	],
	[
		65406,
		1,
		"セ"
	],
	[
		65407,
		1,
		"ソ"
	],
	[
		65408,
		1,
		"タ"
	],
	[
		65409,
		1,
		"チ"
	],
	[
		65410,
		1,
		"ツ"
	],
	[
		65411,
		1,
		"テ"
	],
	[
		65412,
		1,
		"ト"
	],
	[
		65413,
		1,
		"ナ"
	],
	[
		65414,
		1,
		"ニ"
	],
	[
		65415,
		1,
		"ヌ"
	],
	[
		65416,
		1,
		"ネ"
	],
	[
		65417,
		1,
		"ノ"
	],
	[
		65418,
		1,
		"ハ"
	],
	[
		65419,
		1,
		"ヒ"
	],
	[
		65420,
		1,
		"フ"
	],
	[
		65421,
		1,
		"ヘ"
	],
	[
		65422,
		1,
		"ホ"
	],
	[
		65423,
		1,
		"マ"
	],
	[
		65424,
		1,
		"ミ"
	],
	[
		65425,
		1,
		"ム"
	],
	[
		65426,
		1,
		"メ"
	],
	[
		65427,
		1,
		"モ"
	],
	[
		65428,
		1,
		"ヤ"
	],
	[
		65429,
		1,
		"ユ"
	],
	[
		65430,
		1,
		"ヨ"
	],
	[
		65431,
		1,
		"ラ"
	],
	[
		65432,
		1,
		"リ"
	],
	[
		65433,
		1,
		"ル"
	],
	[
		65434,
		1,
		"レ"
	],
	[
		65435,
		1,
		"ロ"
	],
	[
		65436,
		1,
		"ワ"
	],
	[
		65437,
		1,
		"ン"
	],
	[
		65438,
		1,
		"゙"
	],
	[
		65439,
		1,
		"゚"
	],
	[
		65440,
		3
	],
	[
		65441,
		1,
		"ᄀ"
	],
	[
		65442,
		1,
		"ᄁ"
	],
	[
		65443,
		1,
		"ᆪ"
	],
	[
		65444,
		1,
		"ᄂ"
	],
	[
		65445,
		1,
		"ᆬ"
	],
	[
		65446,
		1,
		"ᆭ"
	],
	[
		65447,
		1,
		"ᄃ"
	],
	[
		65448,
		1,
		"ᄄ"
	],
	[
		65449,
		1,
		"ᄅ"
	],
	[
		65450,
		1,
		"ᆰ"
	],
	[
		65451,
		1,
		"ᆱ"
	],
	[
		65452,
		1,
		"ᆲ"
	],
	[
		65453,
		1,
		"ᆳ"
	],
	[
		65454,
		1,
		"ᆴ"
	],
	[
		65455,
		1,
		"ᆵ"
	],
	[
		65456,
		1,
		"ᄚ"
	],
	[
		65457,
		1,
		"ᄆ"
	],
	[
		65458,
		1,
		"ᄇ"
	],
	[
		65459,
		1,
		"ᄈ"
	],
	[
		65460,
		1,
		"ᄡ"
	],
	[
		65461,
		1,
		"ᄉ"
	],
	[
		65462,
		1,
		"ᄊ"
	],
	[
		65463,
		1,
		"ᄋ"
	],
	[
		65464,
		1,
		"ᄌ"
	],
	[
		65465,
		1,
		"ᄍ"
	],
	[
		65466,
		1,
		"ᄎ"
	],
	[
		65467,
		1,
		"ᄏ"
	],
	[
		65468,
		1,
		"ᄐ"
	],
	[
		65469,
		1,
		"ᄑ"
	],
	[
		65470,
		1,
		"ᄒ"
	],
	[
		[
			65471,
			65473
		],
		3
	],
	[
		65474,
		1,
		"ᅡ"
	],
	[
		65475,
		1,
		"ᅢ"
	],
	[
		65476,
		1,
		"ᅣ"
	],
	[
		65477,
		1,
		"ᅤ"
	],
	[
		65478,
		1,
		"ᅥ"
	],
	[
		65479,
		1,
		"ᅦ"
	],
	[
		[
			65480,
			65481
		],
		3
	],
	[
		65482,
		1,
		"ᅧ"
	],
	[
		65483,
		1,
		"ᅨ"
	],
	[
		65484,
		1,
		"ᅩ"
	],
	[
		65485,
		1,
		"ᅪ"
	],
	[
		65486,
		1,
		"ᅫ"
	],
	[
		65487,
		1,
		"ᅬ"
	],
	[
		[
			65488,
			65489
		],
		3
	],
	[
		65490,
		1,
		"ᅭ"
	],
	[
		65491,
		1,
		"ᅮ"
	],
	[
		65492,
		1,
		"ᅯ"
	],
	[
		65493,
		1,
		"ᅰ"
	],
	[
		65494,
		1,
		"ᅱ"
	],
	[
		65495,
		1,
		"ᅲ"
	],
	[
		[
			65496,
			65497
		],
		3
	],
	[
		65498,
		1,
		"ᅳ"
	],
	[
		65499,
		1,
		"ᅴ"
	],
	[
		65500,
		1,
		"ᅵ"
	],
	[
		[
			65501,
			65503
		],
		3
	],
	[
		65504,
		1,
		"¢"
	],
	[
		65505,
		1,
		"£"
	],
	[
		65506,
		1,
		"¬"
	],
	[
		65507,
		5,
		" ̄"
	],
	[
		65508,
		1,
		"¦"
	],
	[
		65509,
		1,
		"¥"
	],
	[
		65510,
		1,
		"₩"
	],
	[
		65511,
		3
	],
	[
		65512,
		1,
		"│"
	],
	[
		65513,
		1,
		"←"
	],
	[
		65514,
		1,
		"↑"
	],
	[
		65515,
		1,
		"→"
	],
	[
		65516,
		1,
		"↓"
	],
	[
		65517,
		1,
		"■"
	],
	[
		65518,
		1,
		"○"
	],
	[
		[
			65519,
			65528
		],
		3
	],
	[
		[
			65529,
			65531
		],
		3
	],
	[
		65532,
		3
	],
	[
		65533,
		3
	],
	[
		[
			65534,
			65535
		],
		3
	],
	[
		[
			65536,
			65547
		],
		2
	],
	[
		65548,
		3
	],
	[
		[
			65549,
			65574
		],
		2
	],
	[
		65575,
		3
	],
	[
		[
			65576,
			65594
		],
		2
	],
	[
		65595,
		3
	],
	[
		[
			65596,
			65597
		],
		2
	],
	[
		65598,
		3
	],
	[
		[
			65599,
			65613
		],
		2
	],
	[
		[
			65614,
			65615
		],
		3
	],
	[
		[
			65616,
			65629
		],
		2
	],
	[
		[
			65630,
			65663
		],
		3
	],
	[
		[
			65664,
			65786
		],
		2
	],
	[
		[
			65787,
			65791
		],
		3
	],
	[
		[
			65792,
			65794
		],
		2
	],
	[
		[
			65795,
			65798
		],
		3
	],
	[
		[
			65799,
			65843
		],
		2
	],
	[
		[
			65844,
			65846
		],
		3
	],
	[
		[
			65847,
			65855
		],
		2
	],
	[
		[
			65856,
			65930
		],
		2
	],
	[
		[
			65931,
			65932
		],
		2
	],
	[
		[
			65933,
			65934
		],
		2
	],
	[
		65935,
		3
	],
	[
		[
			65936,
			65947
		],
		2
	],
	[
		65948,
		2
	],
	[
		[
			65949,
			65951
		],
		3
	],
	[
		65952,
		2
	],
	[
		[
			65953,
			65999
		],
		3
	],
	[
		[
			66000,
			66044
		],
		2
	],
	[
		66045,
		2
	],
	[
		[
			66046,
			66175
		],
		3
	],
	[
		[
			66176,
			66204
		],
		2
	],
	[
		[
			66205,
			66207
		],
		3
	],
	[
		[
			66208,
			66256
		],
		2
	],
	[
		[
			66257,
			66271
		],
		3
	],
	[
		66272,
		2
	],
	[
		[
			66273,
			66299
		],
		2
	],
	[
		[
			66300,
			66303
		],
		3
	],
	[
		[
			66304,
			66334
		],
		2
	],
	[
		66335,
		2
	],
	[
		[
			66336,
			66339
		],
		2
	],
	[
		[
			66340,
			66348
		],
		3
	],
	[
		[
			66349,
			66351
		],
		2
	],
	[
		[
			66352,
			66368
		],
		2
	],
	[
		66369,
		2
	],
	[
		[
			66370,
			66377
		],
		2
	],
	[
		66378,
		2
	],
	[
		[
			66379,
			66383
		],
		3
	],
	[
		[
			66384,
			66426
		],
		2
	],
	[
		[
			66427,
			66431
		],
		3
	],
	[
		[
			66432,
			66461
		],
		2
	],
	[
		66462,
		3
	],
	[
		66463,
		2
	],
	[
		[
			66464,
			66499
		],
		2
	],
	[
		[
			66500,
			66503
		],
		3
	],
	[
		[
			66504,
			66511
		],
		2
	],
	[
		[
			66512,
			66517
		],
		2
	],
	[
		[
			66518,
			66559
		],
		3
	],
	[
		66560,
		1,
		"𐐨"
	],
	[
		66561,
		1,
		"𐐩"
	],
	[
		66562,
		1,
		"𐐪"
	],
	[
		66563,
		1,
		"𐐫"
	],
	[
		66564,
		1,
		"𐐬"
	],
	[
		66565,
		1,
		"𐐭"
	],
	[
		66566,
		1,
		"𐐮"
	],
	[
		66567,
		1,
		"𐐯"
	],
	[
		66568,
		1,
		"𐐰"
	],
	[
		66569,
		1,
		"𐐱"
	],
	[
		66570,
		1,
		"𐐲"
	],
	[
		66571,
		1,
		"𐐳"
	],
	[
		66572,
		1,
		"𐐴"
	],
	[
		66573,
		1,
		"𐐵"
	],
	[
		66574,
		1,
		"𐐶"
	],
	[
		66575,
		1,
		"𐐷"
	],
	[
		66576,
		1,
		"𐐸"
	],
	[
		66577,
		1,
		"𐐹"
	],
	[
		66578,
		1,
		"𐐺"
	],
	[
		66579,
		1,
		"𐐻"
	],
	[
		66580,
		1,
		"𐐼"
	],
	[
		66581,
		1,
		"𐐽"
	],
	[
		66582,
		1,
		"𐐾"
	],
	[
		66583,
		1,
		"𐐿"
	],
	[
		66584,
		1,
		"𐑀"
	],
	[
		66585,
		1,
		"𐑁"
	],
	[
		66586,
		1,
		"𐑂"
	],
	[
		66587,
		1,
		"𐑃"
	],
	[
		66588,
		1,
		"𐑄"
	],
	[
		66589,
		1,
		"𐑅"
	],
	[
		66590,
		1,
		"𐑆"
	],
	[
		66591,
		1,
		"𐑇"
	],
	[
		66592,
		1,
		"𐑈"
	],
	[
		66593,
		1,
		"𐑉"
	],
	[
		66594,
		1,
		"𐑊"
	],
	[
		66595,
		1,
		"𐑋"
	],
	[
		66596,
		1,
		"𐑌"
	],
	[
		66597,
		1,
		"𐑍"
	],
	[
		66598,
		1,
		"𐑎"
	],
	[
		66599,
		1,
		"𐑏"
	],
	[
		[
			66600,
			66637
		],
		2
	],
	[
		[
			66638,
			66717
		],
		2
	],
	[
		[
			66718,
			66719
		],
		3
	],
	[
		[
			66720,
			66729
		],
		2
	],
	[
		[
			66730,
			66735
		],
		3
	],
	[
		66736,
		1,
		"𐓘"
	],
	[
		66737,
		1,
		"𐓙"
	],
	[
		66738,
		1,
		"𐓚"
	],
	[
		66739,
		1,
		"𐓛"
	],
	[
		66740,
		1,
		"𐓜"
	],
	[
		66741,
		1,
		"𐓝"
	],
	[
		66742,
		1,
		"𐓞"
	],
	[
		66743,
		1,
		"𐓟"
	],
	[
		66744,
		1,
		"𐓠"
	],
	[
		66745,
		1,
		"𐓡"
	],
	[
		66746,
		1,
		"𐓢"
	],
	[
		66747,
		1,
		"𐓣"
	],
	[
		66748,
		1,
		"𐓤"
	],
	[
		66749,
		1,
		"𐓥"
	],
	[
		66750,
		1,
		"𐓦"
	],
	[
		66751,
		1,
		"𐓧"
	],
	[
		66752,
		1,
		"𐓨"
	],
	[
		66753,
		1,
		"𐓩"
	],
	[
		66754,
		1,
		"𐓪"
	],
	[
		66755,
		1,
		"𐓫"
	],
	[
		66756,
		1,
		"𐓬"
	],
	[
		66757,
		1,
		"𐓭"
	],
	[
		66758,
		1,
		"𐓮"
	],
	[
		66759,
		1,
		"𐓯"
	],
	[
		66760,
		1,
		"𐓰"
	],
	[
		66761,
		1,
		"𐓱"
	],
	[
		66762,
		1,
		"𐓲"
	],
	[
		66763,
		1,
		"𐓳"
	],
	[
		66764,
		1,
		"𐓴"
	],
	[
		66765,
		1,
		"𐓵"
	],
	[
		66766,
		1,
		"𐓶"
	],
	[
		66767,
		1,
		"𐓷"
	],
	[
		66768,
		1,
		"𐓸"
	],
	[
		66769,
		1,
		"𐓹"
	],
	[
		66770,
		1,
		"𐓺"
	],
	[
		66771,
		1,
		"𐓻"
	],
	[
		[
			66772,
			66775
		],
		3
	],
	[
		[
			66776,
			66811
		],
		2
	],
	[
		[
			66812,
			66815
		],
		3
	],
	[
		[
			66816,
			66855
		],
		2
	],
	[
		[
			66856,
			66863
		],
		3
	],
	[
		[
			66864,
			66915
		],
		2
	],
	[
		[
			66916,
			66926
		],
		3
	],
	[
		66927,
		2
	],
	[
		66928,
		1,
		"𐖗"
	],
	[
		66929,
		1,
		"𐖘"
	],
	[
		66930,
		1,
		"𐖙"
	],
	[
		66931,
		1,
		"𐖚"
	],
	[
		66932,
		1,
		"𐖛"
	],
	[
		66933,
		1,
		"𐖜"
	],
	[
		66934,
		1,
		"𐖝"
	],
	[
		66935,
		1,
		"𐖞"
	],
	[
		66936,
		1,
		"𐖟"
	],
	[
		66937,
		1,
		"𐖠"
	],
	[
		66938,
		1,
		"𐖡"
	],
	[
		66939,
		3
	],
	[
		66940,
		1,
		"𐖣"
	],
	[
		66941,
		1,
		"𐖤"
	],
	[
		66942,
		1,
		"𐖥"
	],
	[
		66943,
		1,
		"𐖦"
	],
	[
		66944,
		1,
		"𐖧"
	],
	[
		66945,
		1,
		"𐖨"
	],
	[
		66946,
		1,
		"𐖩"
	],
	[
		66947,
		1,
		"𐖪"
	],
	[
		66948,
		1,
		"𐖫"
	],
	[
		66949,
		1,
		"𐖬"
	],
	[
		66950,
		1,
		"𐖭"
	],
	[
		66951,
		1,
		"𐖮"
	],
	[
		66952,
		1,
		"𐖯"
	],
	[
		66953,
		1,
		"𐖰"
	],
	[
		66954,
		1,
		"𐖱"
	],
	[
		66955,
		3
	],
	[
		66956,
		1,
		"𐖳"
	],
	[
		66957,
		1,
		"𐖴"
	],
	[
		66958,
		1,
		"𐖵"
	],
	[
		66959,
		1,
		"𐖶"
	],
	[
		66960,
		1,
		"𐖷"
	],
	[
		66961,
		1,
		"𐖸"
	],
	[
		66962,
		1,
		"𐖹"
	],
	[
		66963,
		3
	],
	[
		66964,
		1,
		"𐖻"
	],
	[
		66965,
		1,
		"𐖼"
	],
	[
		66966,
		3
	],
	[
		[
			66967,
			66977
		],
		2
	],
	[
		66978,
		3
	],
	[
		[
			66979,
			66993
		],
		2
	],
	[
		66994,
		3
	],
	[
		[
			66995,
			67001
		],
		2
	],
	[
		67002,
		3
	],
	[
		[
			67003,
			67004
		],
		2
	],
	[
		[
			67005,
			67071
		],
		3
	],
	[
		[
			67072,
			67382
		],
		2
	],
	[
		[
			67383,
			67391
		],
		3
	],
	[
		[
			67392,
			67413
		],
		2
	],
	[
		[
			67414,
			67423
		],
		3
	],
	[
		[
			67424,
			67431
		],
		2
	],
	[
		[
			67432,
			67455
		],
		3
	],
	[
		67456,
		2
	],
	[
		67457,
		1,
		"ː"
	],
	[
		67458,
		1,
		"ˑ"
	],
	[
		67459,
		1,
		"æ"
	],
	[
		67460,
		1,
		"ʙ"
	],
	[
		67461,
		1,
		"ɓ"
	],
	[
		67462,
		3
	],
	[
		67463,
		1,
		"ʣ"
	],
	[
		67464,
		1,
		"ꭦ"
	],
	[
		67465,
		1,
		"ʥ"
	],
	[
		67466,
		1,
		"ʤ"
	],
	[
		67467,
		1,
		"ɖ"
	],
	[
		67468,
		1,
		"ɗ"
	],
	[
		67469,
		1,
		"ᶑ"
	],
	[
		67470,
		1,
		"ɘ"
	],
	[
		67471,
		1,
		"ɞ"
	],
	[
		67472,
		1,
		"ʩ"
	],
	[
		67473,
		1,
		"ɤ"
	],
	[
		67474,
		1,
		"ɢ"
	],
	[
		67475,
		1,
		"ɠ"
	],
	[
		67476,
		1,
		"ʛ"
	],
	[
		67477,
		1,
		"ħ"
	],
	[
		67478,
		1,
		"ʜ"
	],
	[
		67479,
		1,
		"ɧ"
	],
	[
		67480,
		1,
		"ʄ"
	],
	[
		67481,
		1,
		"ʪ"
	],
	[
		67482,
		1,
		"ʫ"
	],
	[
		67483,
		1,
		"ɬ"
	],
	[
		67484,
		1,
		"𝼄"
	],
	[
		67485,
		1,
		"ꞎ"
	],
	[
		67486,
		1,
		"ɮ"
	],
	[
		67487,
		1,
		"𝼅"
	],
	[
		67488,
		1,
		"ʎ"
	],
	[
		67489,
		1,
		"𝼆"
	],
	[
		67490,
		1,
		"ø"
	],
	[
		67491,
		1,
		"ɶ"
	],
	[
		67492,
		1,
		"ɷ"
	],
	[
		67493,
		1,
		"q"
	],
	[
		67494,
		1,
		"ɺ"
	],
	[
		67495,
		1,
		"𝼈"
	],
	[
		67496,
		1,
		"ɽ"
	],
	[
		67497,
		1,
		"ɾ"
	],
	[
		67498,
		1,
		"ʀ"
	],
	[
		67499,
		1,
		"ʨ"
	],
	[
		67500,
		1,
		"ʦ"
	],
	[
		67501,
		1,
		"ꭧ"
	],
	[
		67502,
		1,
		"ʧ"
	],
	[
		67503,
		1,
		"ʈ"
	],
	[
		67504,
		1,
		"ⱱ"
	],
	[
		67505,
		3
	],
	[
		67506,
		1,
		"ʏ"
	],
	[
		67507,
		1,
		"ʡ"
	],
	[
		67508,
		1,
		"ʢ"
	],
	[
		67509,
		1,
		"ʘ"
	],
	[
		67510,
		1,
		"ǀ"
	],
	[
		67511,
		1,
		"ǁ"
	],
	[
		67512,
		1,
		"ǂ"
	],
	[
		67513,
		1,
		"𝼊"
	],
	[
		67514,
		1,
		"𝼞"
	],
	[
		[
			67515,
			67583
		],
		3
	],
	[
		[
			67584,
			67589
		],
		2
	],
	[
		[
			67590,
			67591
		],
		3
	],
	[
		67592,
		2
	],
	[
		67593,
		3
	],
	[
		[
			67594,
			67637
		],
		2
	],
	[
		67638,
		3
	],
	[
		[
			67639,
			67640
		],
		2
	],
	[
		[
			67641,
			67643
		],
		3
	],
	[
		67644,
		2
	],
	[
		[
			67645,
			67646
		],
		3
	],
	[
		67647,
		2
	],
	[
		[
			67648,
			67669
		],
		2
	],
	[
		67670,
		3
	],
	[
		[
			67671,
			67679
		],
		2
	],
	[
		[
			67680,
			67702
		],
		2
	],
	[
		[
			67703,
			67711
		],
		2
	],
	[
		[
			67712,
			67742
		],
		2
	],
	[
		[
			67743,
			67750
		],
		3
	],
	[
		[
			67751,
			67759
		],
		2
	],
	[
		[
			67760,
			67807
		],
		3
	],
	[
		[
			67808,
			67826
		],
		2
	],
	[
		67827,
		3
	],
	[
		[
			67828,
			67829
		],
		2
	],
	[
		[
			67830,
			67834
		],
		3
	],
	[
		[
			67835,
			67839
		],
		2
	],
	[
		[
			67840,
			67861
		],
		2
	],
	[
		[
			67862,
			67865
		],
		2
	],
	[
		[
			67866,
			67867
		],
		2
	],
	[
		[
			67868,
			67870
		],
		3
	],
	[
		67871,
		2
	],
	[
		[
			67872,
			67897
		],
		2
	],
	[
		[
			67898,
			67902
		],
		3
	],
	[
		67903,
		2
	],
	[
		[
			67904,
			67967
		],
		3
	],
	[
		[
			67968,
			68023
		],
		2
	],
	[
		[
			68024,
			68027
		],
		3
	],
	[
		[
			68028,
			68029
		],
		2
	],
	[
		[
			68030,
			68031
		],
		2
	],
	[
		[
			68032,
			68047
		],
		2
	],
	[
		[
			68048,
			68049
		],
		3
	],
	[
		[
			68050,
			68095
		],
		2
	],
	[
		[
			68096,
			68099
		],
		2
	],
	[
		68100,
		3
	],
	[
		[
			68101,
			68102
		],
		2
	],
	[
		[
			68103,
			68107
		],
		3
	],
	[
		[
			68108,
			68115
		],
		2
	],
	[
		68116,
		3
	],
	[
		[
			68117,
			68119
		],
		2
	],
	[
		68120,
		3
	],
	[
		[
			68121,
			68147
		],
		2
	],
	[
		[
			68148,
			68149
		],
		2
	],
	[
		[
			68150,
			68151
		],
		3
	],
	[
		[
			68152,
			68154
		],
		2
	],
	[
		[
			68155,
			68158
		],
		3
	],
	[
		68159,
		2
	],
	[
		[
			68160,
			68167
		],
		2
	],
	[
		68168,
		2
	],
	[
		[
			68169,
			68175
		],
		3
	],
	[
		[
			68176,
			68184
		],
		2
	],
	[
		[
			68185,
			68191
		],
		3
	],
	[
		[
			68192,
			68220
		],
		2
	],
	[
		[
			68221,
			68223
		],
		2
	],
	[
		[
			68224,
			68252
		],
		2
	],
	[
		[
			68253,
			68255
		],
		2
	],
	[
		[
			68256,
			68287
		],
		3
	],
	[
		[
			68288,
			68295
		],
		2
	],
	[
		68296,
		2
	],
	[
		[
			68297,
			68326
		],
		2
	],
	[
		[
			68327,
			68330
		],
		3
	],
	[
		[
			68331,
			68342
		],
		2
	],
	[
		[
			68343,
			68351
		],
		3
	],
	[
		[
			68352,
			68405
		],
		2
	],
	[
		[
			68406,
			68408
		],
		3
	],
	[
		[
			68409,
			68415
		],
		2
	],
	[
		[
			68416,
			68437
		],
		2
	],
	[
		[
			68438,
			68439
		],
		3
	],
	[
		[
			68440,
			68447
		],
		2
	],
	[
		[
			68448,
			68466
		],
		2
	],
	[
		[
			68467,
			68471
		],
		3
	],
	[
		[
			68472,
			68479
		],
		2
	],
	[
		[
			68480,
			68497
		],
		2
	],
	[
		[
			68498,
			68504
		],
		3
	],
	[
		[
			68505,
			68508
		],
		2
	],
	[
		[
			68509,
			68520
		],
		3
	],
	[
		[
			68521,
			68527
		],
		2
	],
	[
		[
			68528,
			68607
		],
		3
	],
	[
		[
			68608,
			68680
		],
		2
	],
	[
		[
			68681,
			68735
		],
		3
	],
	[
		68736,
		1,
		"𐳀"
	],
	[
		68737,
		1,
		"𐳁"
	],
	[
		68738,
		1,
		"𐳂"
	],
	[
		68739,
		1,
		"𐳃"
	],
	[
		68740,
		1,
		"𐳄"
	],
	[
		68741,
		1,
		"𐳅"
	],
	[
		68742,
		1,
		"𐳆"
	],
	[
		68743,
		1,
		"𐳇"
	],
	[
		68744,
		1,
		"𐳈"
	],
	[
		68745,
		1,
		"𐳉"
	],
	[
		68746,
		1,
		"𐳊"
	],
	[
		68747,
		1,
		"𐳋"
	],
	[
		68748,
		1,
		"𐳌"
	],
	[
		68749,
		1,
		"𐳍"
	],
	[
		68750,
		1,
		"𐳎"
	],
	[
		68751,
		1,
		"𐳏"
	],
	[
		68752,
		1,
		"𐳐"
	],
	[
		68753,
		1,
		"𐳑"
	],
	[
		68754,
		1,
		"𐳒"
	],
	[
		68755,
		1,
		"𐳓"
	],
	[
		68756,
		1,
		"𐳔"
	],
	[
		68757,
		1,
		"𐳕"
	],
	[
		68758,
		1,
		"𐳖"
	],
	[
		68759,
		1,
		"𐳗"
	],
	[
		68760,
		1,
		"𐳘"
	],
	[
		68761,
		1,
		"𐳙"
	],
	[
		68762,
		1,
		"𐳚"
	],
	[
		68763,
		1,
		"𐳛"
	],
	[
		68764,
		1,
		"𐳜"
	],
	[
		68765,
		1,
		"𐳝"
	],
	[
		68766,
		1,
		"𐳞"
	],
	[
		68767,
		1,
		"𐳟"
	],
	[
		68768,
		1,
		"𐳠"
	],
	[
		68769,
		1,
		"𐳡"
	],
	[
		68770,
		1,
		"𐳢"
	],
	[
		68771,
		1,
		"𐳣"
	],
	[
		68772,
		1,
		"𐳤"
	],
	[
		68773,
		1,
		"𐳥"
	],
	[
		68774,
		1,
		"𐳦"
	],
	[
		68775,
		1,
		"𐳧"
	],
	[
		68776,
		1,
		"𐳨"
	],
	[
		68777,
		1,
		"𐳩"
	],
	[
		68778,
		1,
		"𐳪"
	],
	[
		68779,
		1,
		"𐳫"
	],
	[
		68780,
		1,
		"𐳬"
	],
	[
		68781,
		1,
		"𐳭"
	],
	[
		68782,
		1,
		"𐳮"
	],
	[
		68783,
		1,
		"𐳯"
	],
	[
		68784,
		1,
		"𐳰"
	],
	[
		68785,
		1,
		"𐳱"
	],
	[
		68786,
		1,
		"𐳲"
	],
	[
		[
			68787,
			68799
		],
		3
	],
	[
		[
			68800,
			68850
		],
		2
	],
	[
		[
			68851,
			68857
		],
		3
	],
	[
		[
			68858,
			68863
		],
		2
	],
	[
		[
			68864,
			68903
		],
		2
	],
	[
		[
			68904,
			68911
		],
		3
	],
	[
		[
			68912,
			68921
		],
		2
	],
	[
		[
			68922,
			69215
		],
		3
	],
	[
		[
			69216,
			69246
		],
		2
	],
	[
		69247,
		3
	],
	[
		[
			69248,
			69289
		],
		2
	],
	[
		69290,
		3
	],
	[
		[
			69291,
			69292
		],
		2
	],
	[
		69293,
		2
	],
	[
		[
			69294,
			69295
		],
		3
	],
	[
		[
			69296,
			69297
		],
		2
	],
	[
		[
			69298,
			69372
		],
		3
	],
	[
		[
			69373,
			69375
		],
		2
	],
	[
		[
			69376,
			69404
		],
		2
	],
	[
		[
			69405,
			69414
		],
		2
	],
	[
		69415,
		2
	],
	[
		[
			69416,
			69423
		],
		3
	],
	[
		[
			69424,
			69456
		],
		2
	],
	[
		[
			69457,
			69465
		],
		2
	],
	[
		[
			69466,
			69487
		],
		3
	],
	[
		[
			69488,
			69509
		],
		2
	],
	[
		[
			69510,
			69513
		],
		2
	],
	[
		[
			69514,
			69551
		],
		3
	],
	[
		[
			69552,
			69572
		],
		2
	],
	[
		[
			69573,
			69579
		],
		2
	],
	[
		[
			69580,
			69599
		],
		3
	],
	[
		[
			69600,
			69622
		],
		2
	],
	[
		[
			69623,
			69631
		],
		3
	],
	[
		[
			69632,
			69702
		],
		2
	],
	[
		[
			69703,
			69709
		],
		2
	],
	[
		[
			69710,
			69713
		],
		3
	],
	[
		[
			69714,
			69733
		],
		2
	],
	[
		[
			69734,
			69743
		],
		2
	],
	[
		[
			69744,
			69749
		],
		2
	],
	[
		[
			69750,
			69758
		],
		3
	],
	[
		69759,
		2
	],
	[
		[
			69760,
			69818
		],
		2
	],
	[
		[
			69819,
			69820
		],
		2
	],
	[
		69821,
		3
	],
	[
		[
			69822,
			69825
		],
		2
	],
	[
		69826,
		2
	],
	[
		[
			69827,
			69836
		],
		3
	],
	[
		69837,
		3
	],
	[
		[
			69838,
			69839
		],
		3
	],
	[
		[
			69840,
			69864
		],
		2
	],
	[
		[
			69865,
			69871
		],
		3
	],
	[
		[
			69872,
			69881
		],
		2
	],
	[
		[
			69882,
			69887
		],
		3
	],
	[
		[
			69888,
			69940
		],
		2
	],
	[
		69941,
		3
	],
	[
		[
			69942,
			69951
		],
		2
	],
	[
		[
			69952,
			69955
		],
		2
	],
	[
		[
			69956,
			69958
		],
		2
	],
	[
		69959,
		2
	],
	[
		[
			69960,
			69967
		],
		3
	],
	[
		[
			69968,
			70003
		],
		2
	],
	[
		[
			70004,
			70005
		],
		2
	],
	[
		70006,
		2
	],
	[
		[
			70007,
			70015
		],
		3
	],
	[
		[
			70016,
			70084
		],
		2
	],
	[
		[
			70085,
			70088
		],
		2
	],
	[
		[
			70089,
			70092
		],
		2
	],
	[
		70093,
		2
	],
	[
		[
			70094,
			70095
		],
		2
	],
	[
		[
			70096,
			70105
		],
		2
	],
	[
		70106,
		2
	],
	[
		70107,
		2
	],
	[
		70108,
		2
	],
	[
		[
			70109,
			70111
		],
		2
	],
	[
		70112,
		3
	],
	[
		[
			70113,
			70132
		],
		2
	],
	[
		[
			70133,
			70143
		],
		3
	],
	[
		[
			70144,
			70161
		],
		2
	],
	[
		70162,
		3
	],
	[
		[
			70163,
			70199
		],
		2
	],
	[
		[
			70200,
			70205
		],
		2
	],
	[
		70206,
		2
	],
	[
		[
			70207,
			70209
		],
		2
	],
	[
		[
			70210,
			70271
		],
		3
	],
	[
		[
			70272,
			70278
		],
		2
	],
	[
		70279,
		3
	],
	[
		70280,
		2
	],
	[
		70281,
		3
	],
	[
		[
			70282,
			70285
		],
		2
	],
	[
		70286,
		3
	],
	[
		[
			70287,
			70301
		],
		2
	],
	[
		70302,
		3
	],
	[
		[
			70303,
			70312
		],
		2
	],
	[
		70313,
		2
	],
	[
		[
			70314,
			70319
		],
		3
	],
	[
		[
			70320,
			70378
		],
		2
	],
	[
		[
			70379,
			70383
		],
		3
	],
	[
		[
			70384,
			70393
		],
		2
	],
	[
		[
			70394,
			70399
		],
		3
	],
	[
		70400,
		2
	],
	[
		[
			70401,
			70403
		],
		2
	],
	[
		70404,
		3
	],
	[
		[
			70405,
			70412
		],
		2
	],
	[
		[
			70413,
			70414
		],
		3
	],
	[
		[
			70415,
			70416
		],
		2
	],
	[
		[
			70417,
			70418
		],
		3
	],
	[
		[
			70419,
			70440
		],
		2
	],
	[
		70441,
		3
	],
	[
		[
			70442,
			70448
		],
		2
	],
	[
		70449,
		3
	],
	[
		[
			70450,
			70451
		],
		2
	],
	[
		70452,
		3
	],
	[
		[
			70453,
			70457
		],
		2
	],
	[
		70458,
		3
	],
	[
		70459,
		2
	],
	[
		[
			70460,
			70468
		],
		2
	],
	[
		[
			70469,
			70470
		],
		3
	],
	[
		[
			70471,
			70472
		],
		2
	],
	[
		[
			70473,
			70474
		],
		3
	],
	[
		[
			70475,
			70477
		],
		2
	],
	[
		[
			70478,
			70479
		],
		3
	],
	[
		70480,
		2
	],
	[
		[
			70481,
			70486
		],
		3
	],
	[
		70487,
		2
	],
	[
		[
			70488,
			70492
		],
		3
	],
	[
		[
			70493,
			70499
		],
		2
	],
	[
		[
			70500,
			70501
		],
		3
	],
	[
		[
			70502,
			70508
		],
		2
	],
	[
		[
			70509,
			70511
		],
		3
	],
	[
		[
			70512,
			70516
		],
		2
	],
	[
		[
			70517,
			70655
		],
		3
	],
	[
		[
			70656,
			70730
		],
		2
	],
	[
		[
			70731,
			70735
		],
		2
	],
	[
		[
			70736,
			70745
		],
		2
	],
	[
		70746,
		2
	],
	[
		70747,
		2
	],
	[
		70748,
		3
	],
	[
		70749,
		2
	],
	[
		70750,
		2
	],
	[
		70751,
		2
	],
	[
		[
			70752,
			70753
		],
		2
	],
	[
		[
			70754,
			70783
		],
		3
	],
	[
		[
			70784,
			70853
		],
		2
	],
	[
		70854,
		2
	],
	[
		70855,
		2
	],
	[
		[
			70856,
			70863
		],
		3
	],
	[
		[
			70864,
			70873
		],
		2
	],
	[
		[
			70874,
			71039
		],
		3
	],
	[
		[
			71040,
			71093
		],
		2
	],
	[
		[
			71094,
			71095
		],
		3
	],
	[
		[
			71096,
			71104
		],
		2
	],
	[
		[
			71105,
			71113
		],
		2
	],
	[
		[
			71114,
			71127
		],
		2
	],
	[
		[
			71128,
			71133
		],
		2
	],
	[
		[
			71134,
			71167
		],
		3
	],
	[
		[
			71168,
			71232
		],
		2
	],
	[
		[
			71233,
			71235
		],
		2
	],
	[
		71236,
		2
	],
	[
		[
			71237,
			71247
		],
		3
	],
	[
		[
			71248,
			71257
		],
		2
	],
	[
		[
			71258,
			71263
		],
		3
	],
	[
		[
			71264,
			71276
		],
		2
	],
	[
		[
			71277,
			71295
		],
		3
	],
	[
		[
			71296,
			71351
		],
		2
	],
	[
		71352,
		2
	],
	[
		71353,
		2
	],
	[
		[
			71354,
			71359
		],
		3
	],
	[
		[
			71360,
			71369
		],
		2
	],
	[
		[
			71370,
			71423
		],
		3
	],
	[
		[
			71424,
			71449
		],
		2
	],
	[
		71450,
		2
	],
	[
		[
			71451,
			71452
		],
		3
	],
	[
		[
			71453,
			71467
		],
		2
	],
	[
		[
			71468,
			71471
		],
		3
	],
	[
		[
			71472,
			71481
		],
		2
	],
	[
		[
			71482,
			71487
		],
		2
	],
	[
		[
			71488,
			71494
		],
		2
	],
	[
		[
			71495,
			71679
		],
		3
	],
	[
		[
			71680,
			71738
		],
		2
	],
	[
		71739,
		2
	],
	[
		[
			71740,
			71839
		],
		3
	],
	[
		71840,
		1,
		"𑣀"
	],
	[
		71841,
		1,
		"𑣁"
	],
	[
		71842,
		1,
		"𑣂"
	],
	[
		71843,
		1,
		"𑣃"
	],
	[
		71844,
		1,
		"𑣄"
	],
	[
		71845,
		1,
		"𑣅"
	],
	[
		71846,
		1,
		"𑣆"
	],
	[
		71847,
		1,
		"𑣇"
	],
	[
		71848,
		1,
		"𑣈"
	],
	[
		71849,
		1,
		"𑣉"
	],
	[
		71850,
		1,
		"𑣊"
	],
	[
		71851,
		1,
		"𑣋"
	],
	[
		71852,
		1,
		"𑣌"
	],
	[
		71853,
		1,
		"𑣍"
	],
	[
		71854,
		1,
		"𑣎"
	],
	[
		71855,
		1,
		"𑣏"
	],
	[
		71856,
		1,
		"𑣐"
	],
	[
		71857,
		1,
		"𑣑"
	],
	[
		71858,
		1,
		"𑣒"
	],
	[
		71859,
		1,
		"𑣓"
	],
	[
		71860,
		1,
		"𑣔"
	],
	[
		71861,
		1,
		"𑣕"
	],
	[
		71862,
		1,
		"𑣖"
	],
	[
		71863,
		1,
		"𑣗"
	],
	[
		71864,
		1,
		"𑣘"
	],
	[
		71865,
		1,
		"𑣙"
	],
	[
		71866,
		1,
		"𑣚"
	],
	[
		71867,
		1,
		"𑣛"
	],
	[
		71868,
		1,
		"𑣜"
	],
	[
		71869,
		1,
		"𑣝"
	],
	[
		71870,
		1,
		"𑣞"
	],
	[
		71871,
		1,
		"𑣟"
	],
	[
		[
			71872,
			71913
		],
		2
	],
	[
		[
			71914,
			71922
		],
		2
	],
	[
		[
			71923,
			71934
		],
		3
	],
	[
		71935,
		2
	],
	[
		[
			71936,
			71942
		],
		2
	],
	[
		[
			71943,
			71944
		],
		3
	],
	[
		71945,
		2
	],
	[
		[
			71946,
			71947
		],
		3
	],
	[
		[
			71948,
			71955
		],
		2
	],
	[
		71956,
		3
	],
	[
		[
			71957,
			71958
		],
		2
	],
	[
		71959,
		3
	],
	[
		[
			71960,
			71989
		],
		2
	],
	[
		71990,
		3
	],
	[
		[
			71991,
			71992
		],
		2
	],
	[
		[
			71993,
			71994
		],
		3
	],
	[
		[
			71995,
			72003
		],
		2
	],
	[
		[
			72004,
			72006
		],
		2
	],
	[
		[
			72007,
			72015
		],
		3
	],
	[
		[
			72016,
			72025
		],
		2
	],
	[
		[
			72026,
			72095
		],
		3
	],
	[
		[
			72096,
			72103
		],
		2
	],
	[
		[
			72104,
			72105
		],
		3
	],
	[
		[
			72106,
			72151
		],
		2
	],
	[
		[
			72152,
			72153
		],
		3
	],
	[
		[
			72154,
			72161
		],
		2
	],
	[
		72162,
		2
	],
	[
		[
			72163,
			72164
		],
		2
	],
	[
		[
			72165,
			72191
		],
		3
	],
	[
		[
			72192,
			72254
		],
		2
	],
	[
		[
			72255,
			72262
		],
		2
	],
	[
		72263,
		2
	],
	[
		[
			72264,
			72271
		],
		3
	],
	[
		[
			72272,
			72323
		],
		2
	],
	[
		[
			72324,
			72325
		],
		2
	],
	[
		[
			72326,
			72345
		],
		2
	],
	[
		[
			72346,
			72348
		],
		2
	],
	[
		72349,
		2
	],
	[
		[
			72350,
			72354
		],
		2
	],
	[
		[
			72355,
			72367
		],
		3
	],
	[
		[
			72368,
			72383
		],
		2
	],
	[
		[
			72384,
			72440
		],
		2
	],
	[
		[
			72441,
			72447
		],
		3
	],
	[
		[
			72448,
			72457
		],
		2
	],
	[
		[
			72458,
			72703
		],
		3
	],
	[
		[
			72704,
			72712
		],
		2
	],
	[
		72713,
		3
	],
	[
		[
			72714,
			72758
		],
		2
	],
	[
		72759,
		3
	],
	[
		[
			72760,
			72768
		],
		2
	],
	[
		[
			72769,
			72773
		],
		2
	],
	[
		[
			72774,
			72783
		],
		3
	],
	[
		[
			72784,
			72793
		],
		2
	],
	[
		[
			72794,
			72812
		],
		2
	],
	[
		[
			72813,
			72815
		],
		3
	],
	[
		[
			72816,
			72817
		],
		2
	],
	[
		[
			72818,
			72847
		],
		2
	],
	[
		[
			72848,
			72849
		],
		3
	],
	[
		[
			72850,
			72871
		],
		2
	],
	[
		72872,
		3
	],
	[
		[
			72873,
			72886
		],
		2
	],
	[
		[
			72887,
			72959
		],
		3
	],
	[
		[
			72960,
			72966
		],
		2
	],
	[
		72967,
		3
	],
	[
		[
			72968,
			72969
		],
		2
	],
	[
		72970,
		3
	],
	[
		[
			72971,
			73014
		],
		2
	],
	[
		[
			73015,
			73017
		],
		3
	],
	[
		73018,
		2
	],
	[
		73019,
		3
	],
	[
		[
			73020,
			73021
		],
		2
	],
	[
		73022,
		3
	],
	[
		[
			73023,
			73031
		],
		2
	],
	[
		[
			73032,
			73039
		],
		3
	],
	[
		[
			73040,
			73049
		],
		2
	],
	[
		[
			73050,
			73055
		],
		3
	],
	[
		[
			73056,
			73061
		],
		2
	],
	[
		73062,
		3
	],
	[
		[
			73063,
			73064
		],
		2
	],
	[
		73065,
		3
	],
	[
		[
			73066,
			73102
		],
		2
	],
	[
		73103,
		3
	],
	[
		[
			73104,
			73105
		],
		2
	],
	[
		73106,
		3
	],
	[
		[
			73107,
			73112
		],
		2
	],
	[
		[
			73113,
			73119
		],
		3
	],
	[
		[
			73120,
			73129
		],
		2
	],
	[
		[
			73130,
			73439
		],
		3
	],
	[
		[
			73440,
			73462
		],
		2
	],
	[
		[
			73463,
			73464
		],
		2
	],
	[
		[
			73465,
			73471
		],
		3
	],
	[
		[
			73472,
			73488
		],
		2
	],
	[
		73489,
		3
	],
	[
		[
			73490,
			73530
		],
		2
	],
	[
		[
			73531,
			73533
		],
		3
	],
	[
		[
			73534,
			73538
		],
		2
	],
	[
		[
			73539,
			73551
		],
		2
	],
	[
		[
			73552,
			73561
		],
		2
	],
	[
		[
			73562,
			73647
		],
		3
	],
	[
		73648,
		2
	],
	[
		[
			73649,
			73663
		],
		3
	],
	[
		[
			73664,
			73713
		],
		2
	],
	[
		[
			73714,
			73726
		],
		3
	],
	[
		73727,
		2
	],
	[
		[
			73728,
			74606
		],
		2
	],
	[
		[
			74607,
			74648
		],
		2
	],
	[
		74649,
		2
	],
	[
		[
			74650,
			74751
		],
		3
	],
	[
		[
			74752,
			74850
		],
		2
	],
	[
		[
			74851,
			74862
		],
		2
	],
	[
		74863,
		3
	],
	[
		[
			74864,
			74867
		],
		2
	],
	[
		74868,
		2
	],
	[
		[
			74869,
			74879
		],
		3
	],
	[
		[
			74880,
			75075
		],
		2
	],
	[
		[
			75076,
			77711
		],
		3
	],
	[
		[
			77712,
			77808
		],
		2
	],
	[
		[
			77809,
			77810
		],
		2
	],
	[
		[
			77811,
			77823
		],
		3
	],
	[
		[
			77824,
			78894
		],
		2
	],
	[
		78895,
		2
	],
	[
		[
			78896,
			78904
		],
		3
	],
	[
		[
			78905,
			78911
		],
		3
	],
	[
		[
			78912,
			78933
		],
		2
	],
	[
		[
			78934,
			82943
		],
		3
	],
	[
		[
			82944,
			83526
		],
		2
	],
	[
		[
			83527,
			92159
		],
		3
	],
	[
		[
			92160,
			92728
		],
		2
	],
	[
		[
			92729,
			92735
		],
		3
	],
	[
		[
			92736,
			92766
		],
		2
	],
	[
		92767,
		3
	],
	[
		[
			92768,
			92777
		],
		2
	],
	[
		[
			92778,
			92781
		],
		3
	],
	[
		[
			92782,
			92783
		],
		2
	],
	[
		[
			92784,
			92862
		],
		2
	],
	[
		92863,
		3
	],
	[
		[
			92864,
			92873
		],
		2
	],
	[
		[
			92874,
			92879
		],
		3
	],
	[
		[
			92880,
			92909
		],
		2
	],
	[
		[
			92910,
			92911
		],
		3
	],
	[
		[
			92912,
			92916
		],
		2
	],
	[
		92917,
		2
	],
	[
		[
			92918,
			92927
		],
		3
	],
	[
		[
			92928,
			92982
		],
		2
	],
	[
		[
			92983,
			92991
		],
		2
	],
	[
		[
			92992,
			92995
		],
		2
	],
	[
		[
			92996,
			92997
		],
		2
	],
	[
		[
			92998,
			93007
		],
		3
	],
	[
		[
			93008,
			93017
		],
		2
	],
	[
		93018,
		3
	],
	[
		[
			93019,
			93025
		],
		2
	],
	[
		93026,
		3
	],
	[
		[
			93027,
			93047
		],
		2
	],
	[
		[
			93048,
			93052
		],
		3
	],
	[
		[
			93053,
			93071
		],
		2
	],
	[
		[
			93072,
			93759
		],
		3
	],
	[
		93760,
		1,
		"𖹠"
	],
	[
		93761,
		1,
		"𖹡"
	],
	[
		93762,
		1,
		"𖹢"
	],
	[
		93763,
		1,
		"𖹣"
	],
	[
		93764,
		1,
		"𖹤"
	],
	[
		93765,
		1,
		"𖹥"
	],
	[
		93766,
		1,
		"𖹦"
	],
	[
		93767,
		1,
		"𖹧"
	],
	[
		93768,
		1,
		"𖹨"
	],
	[
		93769,
		1,
		"𖹩"
	],
	[
		93770,
		1,
		"𖹪"
	],
	[
		93771,
		1,
		"𖹫"
	],
	[
		93772,
		1,
		"𖹬"
	],
	[
		93773,
		1,
		"𖹭"
	],
	[
		93774,
		1,
		"𖹮"
	],
	[
		93775,
		1,
		"𖹯"
	],
	[
		93776,
		1,
		"𖹰"
	],
	[
		93777,
		1,
		"𖹱"
	],
	[
		93778,
		1,
		"𖹲"
	],
	[
		93779,
		1,
		"𖹳"
	],
	[
		93780,
		1,
		"𖹴"
	],
	[
		93781,
		1,
		"𖹵"
	],
	[
		93782,
		1,
		"𖹶"
	],
	[
		93783,
		1,
		"𖹷"
	],
	[
		93784,
		1,
		"𖹸"
	],
	[
		93785,
		1,
		"𖹹"
	],
	[
		93786,
		1,
		"𖹺"
	],
	[
		93787,
		1,
		"𖹻"
	],
	[
		93788,
		1,
		"𖹼"
	],
	[
		93789,
		1,
		"𖹽"
	],
	[
		93790,
		1,
		"𖹾"
	],
	[
		93791,
		1,
		"𖹿"
	],
	[
		[
			93792,
			93823
		],
		2
	],
	[
		[
			93824,
			93850
		],
		2
	],
	[
		[
			93851,
			93951
		],
		3
	],
	[
		[
			93952,
			94020
		],
		2
	],
	[
		[
			94021,
			94026
		],
		2
	],
	[
		[
			94027,
			94030
		],
		3
	],
	[
		94031,
		2
	],
	[
		[
			94032,
			94078
		],
		2
	],
	[
		[
			94079,
			94087
		],
		2
	],
	[
		[
			94088,
			94094
		],
		3
	],
	[
		[
			94095,
			94111
		],
		2
	],
	[
		[
			94112,
			94175
		],
		3
	],
	[
		94176,
		2
	],
	[
		94177,
		2
	],
	[
		94178,
		2
	],
	[
		94179,
		2
	],
	[
		94180,
		2
	],
	[
		[
			94181,
			94191
		],
		3
	],
	[
		[
			94192,
			94193
		],
		2
	],
	[
		[
			94194,
			94207
		],
		3
	],
	[
		[
			94208,
			100332
		],
		2
	],
	[
		[
			100333,
			100337
		],
		2
	],
	[
		[
			100338,
			100343
		],
		2
	],
	[
		[
			100344,
			100351
		],
		3
	],
	[
		[
			100352,
			101106
		],
		2
	],
	[
		[
			101107,
			101589
		],
		2
	],
	[
		[
			101590,
			101631
		],
		3
	],
	[
		[
			101632,
			101640
		],
		2
	],
	[
		[
			101641,
			110575
		],
		3
	],
	[
		[
			110576,
			110579
		],
		2
	],
	[
		110580,
		3
	],
	[
		[
			110581,
			110587
		],
		2
	],
	[
		110588,
		3
	],
	[
		[
			110589,
			110590
		],
		2
	],
	[
		110591,
		3
	],
	[
		[
			110592,
			110593
		],
		2
	],
	[
		[
			110594,
			110878
		],
		2
	],
	[
		[
			110879,
			110882
		],
		2
	],
	[
		[
			110883,
			110897
		],
		3
	],
	[
		110898,
		2
	],
	[
		[
			110899,
			110927
		],
		3
	],
	[
		[
			110928,
			110930
		],
		2
	],
	[
		[
			110931,
			110932
		],
		3
	],
	[
		110933,
		2
	],
	[
		[
			110934,
			110947
		],
		3
	],
	[
		[
			110948,
			110951
		],
		2
	],
	[
		[
			110952,
			110959
		],
		3
	],
	[
		[
			110960,
			111355
		],
		2
	],
	[
		[
			111356,
			113663
		],
		3
	],
	[
		[
			113664,
			113770
		],
		2
	],
	[
		[
			113771,
			113775
		],
		3
	],
	[
		[
			113776,
			113788
		],
		2
	],
	[
		[
			113789,
			113791
		],
		3
	],
	[
		[
			113792,
			113800
		],
		2
	],
	[
		[
			113801,
			113807
		],
		3
	],
	[
		[
			113808,
			113817
		],
		2
	],
	[
		[
			113818,
			113819
		],
		3
	],
	[
		113820,
		2
	],
	[
		[
			113821,
			113822
		],
		2
	],
	[
		113823,
		2
	],
	[
		[
			113824,
			113827
		],
		7
	],
	[
		[
			113828,
			118527
		],
		3
	],
	[
		[
			118528,
			118573
		],
		2
	],
	[
		[
			118574,
			118575
		],
		3
	],
	[
		[
			118576,
			118598
		],
		2
	],
	[
		[
			118599,
			118607
		],
		3
	],
	[
		[
			118608,
			118723
		],
		2
	],
	[
		[
			118724,
			118783
		],
		3
	],
	[
		[
			118784,
			119029
		],
		2
	],
	[
		[
			119030,
			119039
		],
		3
	],
	[
		[
			119040,
			119078
		],
		2
	],
	[
		[
			119079,
			119080
		],
		3
	],
	[
		119081,
		2
	],
	[
		[
			119082,
			119133
		],
		2
	],
	[
		119134,
		1,
		"𝅗𝅥"
	],
	[
		119135,
		1,
		"𝅘𝅥"
	],
	[
		119136,
		1,
		"𝅘𝅥𝅮"
	],
	[
		119137,
		1,
		"𝅘𝅥𝅯"
	],
	[
		119138,
		1,
		"𝅘𝅥𝅰"
	],
	[
		119139,
		1,
		"𝅘𝅥𝅱"
	],
	[
		119140,
		1,
		"𝅘𝅥𝅲"
	],
	[
		[
			119141,
			119154
		],
		2
	],
	[
		[
			119155,
			119162
		],
		3
	],
	[
		[
			119163,
			119226
		],
		2
	],
	[
		119227,
		1,
		"𝆹𝅥"
	],
	[
		119228,
		1,
		"𝆺𝅥"
	],
	[
		119229,
		1,
		"𝆹𝅥𝅮"
	],
	[
		119230,
		1,
		"𝆺𝅥𝅮"
	],
	[
		119231,
		1,
		"𝆹𝅥𝅯"
	],
	[
		119232,
		1,
		"𝆺𝅥𝅯"
	],
	[
		[
			119233,
			119261
		],
		2
	],
	[
		[
			119262,
			119272
		],
		2
	],
	[
		[
			119273,
			119274
		],
		2
	],
	[
		[
			119275,
			119295
		],
		3
	],
	[
		[
			119296,
			119365
		],
		2
	],
	[
		[
			119366,
			119487
		],
		3
	],
	[
		[
			119488,
			119507
		],
		2
	],
	[
		[
			119508,
			119519
		],
		3
	],
	[
		[
			119520,
			119539
		],
		2
	],
	[
		[
			119540,
			119551
		],
		3
	],
	[
		[
			119552,
			119638
		],
		2
	],
	[
		[
			119639,
			119647
		],
		3
	],
	[
		[
			119648,
			119665
		],
		2
	],
	[
		[
			119666,
			119672
		],
		2
	],
	[
		[
			119673,
			119807
		],
		3
	],
	[
		119808,
		1,
		"a"
	],
	[
		119809,
		1,
		"b"
	],
	[
		119810,
		1,
		"c"
	],
	[
		119811,
		1,
		"d"
	],
	[
		119812,
		1,
		"e"
	],
	[
		119813,
		1,
		"f"
	],
	[
		119814,
		1,
		"g"
	],
	[
		119815,
		1,
		"h"
	],
	[
		119816,
		1,
		"i"
	],
	[
		119817,
		1,
		"j"
	],
	[
		119818,
		1,
		"k"
	],
	[
		119819,
		1,
		"l"
	],
	[
		119820,
		1,
		"m"
	],
	[
		119821,
		1,
		"n"
	],
	[
		119822,
		1,
		"o"
	],
	[
		119823,
		1,
		"p"
	],
	[
		119824,
		1,
		"q"
	],
	[
		119825,
		1,
		"r"
	],
	[
		119826,
		1,
		"s"
	],
	[
		119827,
		1,
		"t"
	],
	[
		119828,
		1,
		"u"
	],
	[
		119829,
		1,
		"v"
	],
	[
		119830,
		1,
		"w"
	],
	[
		119831,
		1,
		"x"
	],
	[
		119832,
		1,
		"y"
	],
	[
		119833,
		1,
		"z"
	],
	[
		119834,
		1,
		"a"
	],
	[
		119835,
		1,
		"b"
	],
	[
		119836,
		1,
		"c"
	],
	[
		119837,
		1,
		"d"
	],
	[
		119838,
		1,
		"e"
	],
	[
		119839,
		1,
		"f"
	],
	[
		119840,
		1,
		"g"
	],
	[
		119841,
		1,
		"h"
	],
	[
		119842,
		1,
		"i"
	],
	[
		119843,
		1,
		"j"
	],
	[
		119844,
		1,
		"k"
	],
	[
		119845,
		1,
		"l"
	],
	[
		119846,
		1,
		"m"
	],
	[
		119847,
		1,
		"n"
	],
	[
		119848,
		1,
		"o"
	],
	[
		119849,
		1,
		"p"
	],
	[
		119850,
		1,
		"q"
	],
	[
		119851,
		1,
		"r"
	],
	[
		119852,
		1,
		"s"
	],
	[
		119853,
		1,
		"t"
	],
	[
		119854,
		1,
		"u"
	],
	[
		119855,
		1,
		"v"
	],
	[
		119856,
		1,
		"w"
	],
	[
		119857,
		1,
		"x"
	],
	[
		119858,
		1,
		"y"
	],
	[
		119859,
		1,
		"z"
	],
	[
		119860,
		1,
		"a"
	],
	[
		119861,
		1,
		"b"
	],
	[
		119862,
		1,
		"c"
	],
	[
		119863,
		1,
		"d"
	],
	[
		119864,
		1,
		"e"
	],
	[
		119865,
		1,
		"f"
	],
	[
		119866,
		1,
		"g"
	],
	[
		119867,
		1,
		"h"
	],
	[
		119868,
		1,
		"i"
	],
	[
		119869,
		1,
		"j"
	],
	[
		119870,
		1,
		"k"
	],
	[
		119871,
		1,
		"l"
	],
	[
		119872,
		1,
		"m"
	],
	[
		119873,
		1,
		"n"
	],
	[
		119874,
		1,
		"o"
	],
	[
		119875,
		1,
		"p"
	],
	[
		119876,
		1,
		"q"
	],
	[
		119877,
		1,
		"r"
	],
	[
		119878,
		1,
		"s"
	],
	[
		119879,
		1,
		"t"
	],
	[
		119880,
		1,
		"u"
	],
	[
		119881,
		1,
		"v"
	],
	[
		119882,
		1,
		"w"
	],
	[
		119883,
		1,
		"x"
	],
	[
		119884,
		1,
		"y"
	],
	[
		119885,
		1,
		"z"
	],
	[
		119886,
		1,
		"a"
	],
	[
		119887,
		1,
		"b"
	],
	[
		119888,
		1,
		"c"
	],
	[
		119889,
		1,
		"d"
	],
	[
		119890,
		1,
		"e"
	],
	[
		119891,
		1,
		"f"
	],
	[
		119892,
		1,
		"g"
	],
	[
		119893,
		3
	],
	[
		119894,
		1,
		"i"
	],
	[
		119895,
		1,
		"j"
	],
	[
		119896,
		1,
		"k"
	],
	[
		119897,
		1,
		"l"
	],
	[
		119898,
		1,
		"m"
	],
	[
		119899,
		1,
		"n"
	],
	[
		119900,
		1,
		"o"
	],
	[
		119901,
		1,
		"p"
	],
	[
		119902,
		1,
		"q"
	],
	[
		119903,
		1,
		"r"
	],
	[
		119904,
		1,
		"s"
	],
	[
		119905,
		1,
		"t"
	],
	[
		119906,
		1,
		"u"
	],
	[
		119907,
		1,
		"v"
	],
	[
		119908,
		1,
		"w"
	],
	[
		119909,
		1,
		"x"
	],
	[
		119910,
		1,
		"y"
	],
	[
		119911,
		1,
		"z"
	],
	[
		119912,
		1,
		"a"
	],
	[
		119913,
		1,
		"b"
	],
	[
		119914,
		1,
		"c"
	],
	[
		119915,
		1,
		"d"
	],
	[
		119916,
		1,
		"e"
	],
	[
		119917,
		1,
		"f"
	],
	[
		119918,
		1,
		"g"
	],
	[
		119919,
		1,
		"h"
	],
	[
		119920,
		1,
		"i"
	],
	[
		119921,
		1,
		"j"
	],
	[
		119922,
		1,
		"k"
	],
	[
		119923,
		1,
		"l"
	],
	[
		119924,
		1,
		"m"
	],
	[
		119925,
		1,
		"n"
	],
	[
		119926,
		1,
		"o"
	],
	[
		119927,
		1,
		"p"
	],
	[
		119928,
		1,
		"q"
	],
	[
		119929,
		1,
		"r"
	],
	[
		119930,
		1,
		"s"
	],
	[
		119931,
		1,
		"t"
	],
	[
		119932,
		1,
		"u"
	],
	[
		119933,
		1,
		"v"
	],
	[
		119934,
		1,
		"w"
	],
	[
		119935,
		1,
		"x"
	],
	[
		119936,
		1,
		"y"
	],
	[
		119937,
		1,
		"z"
	],
	[
		119938,
		1,
		"a"
	],
	[
		119939,
		1,
		"b"
	],
	[
		119940,
		1,
		"c"
	],
	[
		119941,
		1,
		"d"
	],
	[
		119942,
		1,
		"e"
	],
	[
		119943,
		1,
		"f"
	],
	[
		119944,
		1,
		"g"
	],
	[
		119945,
		1,
		"h"
	],
	[
		119946,
		1,
		"i"
	],
	[
		119947,
		1,
		"j"
	],
	[
		119948,
		1,
		"k"
	],
	[
		119949,
		1,
		"l"
	],
	[
		119950,
		1,
		"m"
	],
	[
		119951,
		1,
		"n"
	],
	[
		119952,
		1,
		"o"
	],
	[
		119953,
		1,
		"p"
	],
	[
		119954,
		1,
		"q"
	],
	[
		119955,
		1,
		"r"
	],
	[
		119956,
		1,
		"s"
	],
	[
		119957,
		1,
		"t"
	],
	[
		119958,
		1,
		"u"
	],
	[
		119959,
		1,
		"v"
	],
	[
		119960,
		1,
		"w"
	],
	[
		119961,
		1,
		"x"
	],
	[
		119962,
		1,
		"y"
	],
	[
		119963,
		1,
		"z"
	],
	[
		119964,
		1,
		"a"
	],
	[
		119965,
		3
	],
	[
		119966,
		1,
		"c"
	],
	[
		119967,
		1,
		"d"
	],
	[
		[
			119968,
			119969
		],
		3
	],
	[
		119970,
		1,
		"g"
	],
	[
		[
			119971,
			119972
		],
		3
	],
	[
		119973,
		1,
		"j"
	],
	[
		119974,
		1,
		"k"
	],
	[
		[
			119975,
			119976
		],
		3
	],
	[
		119977,
		1,
		"n"
	],
	[
		119978,
		1,
		"o"
	],
	[
		119979,
		1,
		"p"
	],
	[
		119980,
		1,
		"q"
	],
	[
		119981,
		3
	],
	[
		119982,
		1,
		"s"
	],
	[
		119983,
		1,
		"t"
	],
	[
		119984,
		1,
		"u"
	],
	[
		119985,
		1,
		"v"
	],
	[
		119986,
		1,
		"w"
	],
	[
		119987,
		1,
		"x"
	],
	[
		119988,
		1,
		"y"
	],
	[
		119989,
		1,
		"z"
	],
	[
		119990,
		1,
		"a"
	],
	[
		119991,
		1,
		"b"
	],
	[
		119992,
		1,
		"c"
	],
	[
		119993,
		1,
		"d"
	],
	[
		119994,
		3
	],
	[
		119995,
		1,
		"f"
	],
	[
		119996,
		3
	],
	[
		119997,
		1,
		"h"
	],
	[
		119998,
		1,
		"i"
	],
	[
		119999,
		1,
		"j"
	],
	[
		120000,
		1,
		"k"
	],
	[
		120001,
		1,
		"l"
	],
	[
		120002,
		1,
		"m"
	],
	[
		120003,
		1,
		"n"
	],
	[
		120004,
		3
	],
	[
		120005,
		1,
		"p"
	],
	[
		120006,
		1,
		"q"
	],
	[
		120007,
		1,
		"r"
	],
	[
		120008,
		1,
		"s"
	],
	[
		120009,
		1,
		"t"
	],
	[
		120010,
		1,
		"u"
	],
	[
		120011,
		1,
		"v"
	],
	[
		120012,
		1,
		"w"
	],
	[
		120013,
		1,
		"x"
	],
	[
		120014,
		1,
		"y"
	],
	[
		120015,
		1,
		"z"
	],
	[
		120016,
		1,
		"a"
	],
	[
		120017,
		1,
		"b"
	],
	[
		120018,
		1,
		"c"
	],
	[
		120019,
		1,
		"d"
	],
	[
		120020,
		1,
		"e"
	],
	[
		120021,
		1,
		"f"
	],
	[
		120022,
		1,
		"g"
	],
	[
		120023,
		1,
		"h"
	],
	[
		120024,
		1,
		"i"
	],
	[
		120025,
		1,
		"j"
	],
	[
		120026,
		1,
		"k"
	],
	[
		120027,
		1,
		"l"
	],
	[
		120028,
		1,
		"m"
	],
	[
		120029,
		1,
		"n"
	],
	[
		120030,
		1,
		"o"
	],
	[
		120031,
		1,
		"p"
	],
	[
		120032,
		1,
		"q"
	],
	[
		120033,
		1,
		"r"
	],
	[
		120034,
		1,
		"s"
	],
	[
		120035,
		1,
		"t"
	],
	[
		120036,
		1,
		"u"
	],
	[
		120037,
		1,
		"v"
	],
	[
		120038,
		1,
		"w"
	],
	[
		120039,
		1,
		"x"
	],
	[
		120040,
		1,
		"y"
	],
	[
		120041,
		1,
		"z"
	],
	[
		120042,
		1,
		"a"
	],
	[
		120043,
		1,
		"b"
	],
	[
		120044,
		1,
		"c"
	],
	[
		120045,
		1,
		"d"
	],
	[
		120046,
		1,
		"e"
	],
	[
		120047,
		1,
		"f"
	],
	[
		120048,
		1,
		"g"
	],
	[
		120049,
		1,
		"h"
	],
	[
		120050,
		1,
		"i"
	],
	[
		120051,
		1,
		"j"
	],
	[
		120052,
		1,
		"k"
	],
	[
		120053,
		1,
		"l"
	],
	[
		120054,
		1,
		"m"
	],
	[
		120055,
		1,
		"n"
	],
	[
		120056,
		1,
		"o"
	],
	[
		120057,
		1,
		"p"
	],
	[
		120058,
		1,
		"q"
	],
	[
		120059,
		1,
		"r"
	],
	[
		120060,
		1,
		"s"
	],
	[
		120061,
		1,
		"t"
	],
	[
		120062,
		1,
		"u"
	],
	[
		120063,
		1,
		"v"
	],
	[
		120064,
		1,
		"w"
	],
	[
		120065,
		1,
		"x"
	],
	[
		120066,
		1,
		"y"
	],
	[
		120067,
		1,
		"z"
	],
	[
		120068,
		1,
		"a"
	],
	[
		120069,
		1,
		"b"
	],
	[
		120070,
		3
	],
	[
		120071,
		1,
		"d"
	],
	[
		120072,
		1,
		"e"
	],
	[
		120073,
		1,
		"f"
	],
	[
		120074,
		1,
		"g"
	],
	[
		[
			120075,
			120076
		],
		3
	],
	[
		120077,
		1,
		"j"
	],
	[
		120078,
		1,
		"k"
	],
	[
		120079,
		1,
		"l"
	],
	[
		120080,
		1,
		"m"
	],
	[
		120081,
		1,
		"n"
	],
	[
		120082,
		1,
		"o"
	],
	[
		120083,
		1,
		"p"
	],
	[
		120084,
		1,
		"q"
	],
	[
		120085,
		3
	],
	[
		120086,
		1,
		"s"
	],
	[
		120087,
		1,
		"t"
	],
	[
		120088,
		1,
		"u"
	],
	[
		120089,
		1,
		"v"
	],
	[
		120090,
		1,
		"w"
	],
	[
		120091,
		1,
		"x"
	],
	[
		120092,
		1,
		"y"
	],
	[
		120093,
		3
	],
	[
		120094,
		1,
		"a"
	],
	[
		120095,
		1,
		"b"
	],
	[
		120096,
		1,
		"c"
	],
	[
		120097,
		1,
		"d"
	],
	[
		120098,
		1,
		"e"
	],
	[
		120099,
		1,
		"f"
	],
	[
		120100,
		1,
		"g"
	],
	[
		120101,
		1,
		"h"
	],
	[
		120102,
		1,
		"i"
	],
	[
		120103,
		1,
		"j"
	],
	[
		120104,
		1,
		"k"
	],
	[
		120105,
		1,
		"l"
	],
	[
		120106,
		1,
		"m"
	],
	[
		120107,
		1,
		"n"
	],
	[
		120108,
		1,
		"o"
	],
	[
		120109,
		1,
		"p"
	],
	[
		120110,
		1,
		"q"
	],
	[
		120111,
		1,
		"r"
	],
	[
		120112,
		1,
		"s"
	],
	[
		120113,
		1,
		"t"
	],
	[
		120114,
		1,
		"u"
	],
	[
		120115,
		1,
		"v"
	],
	[
		120116,
		1,
		"w"
	],
	[
		120117,
		1,
		"x"
	],
	[
		120118,
		1,
		"y"
	],
	[
		120119,
		1,
		"z"
	],
	[
		120120,
		1,
		"a"
	],
	[
		120121,
		1,
		"b"
	],
	[
		120122,
		3
	],
	[
		120123,
		1,
		"d"
	],
	[
		120124,
		1,
		"e"
	],
	[
		120125,
		1,
		"f"
	],
	[
		120126,
		1,
		"g"
	],
	[
		120127,
		3
	],
	[
		120128,
		1,
		"i"
	],
	[
		120129,
		1,
		"j"
	],
	[
		120130,
		1,
		"k"
	],
	[
		120131,
		1,
		"l"
	],
	[
		120132,
		1,
		"m"
	],
	[
		120133,
		3
	],
	[
		120134,
		1,
		"o"
	],
	[
		[
			120135,
			120137
		],
		3
	],
	[
		120138,
		1,
		"s"
	],
	[
		120139,
		1,
		"t"
	],
	[
		120140,
		1,
		"u"
	],
	[
		120141,
		1,
		"v"
	],
	[
		120142,
		1,
		"w"
	],
	[
		120143,
		1,
		"x"
	],
	[
		120144,
		1,
		"y"
	],
	[
		120145,
		3
	],
	[
		120146,
		1,
		"a"
	],
	[
		120147,
		1,
		"b"
	],
	[
		120148,
		1,
		"c"
	],
	[
		120149,
		1,
		"d"
	],
	[
		120150,
		1,
		"e"
	],
	[
		120151,
		1,
		"f"
	],
	[
		120152,
		1,
		"g"
	],
	[
		120153,
		1,
		"h"
	],
	[
		120154,
		1,
		"i"
	],
	[
		120155,
		1,
		"j"
	],
	[
		120156,
		1,
		"k"
	],
	[
		120157,
		1,
		"l"
	],
	[
		120158,
		1,
		"m"
	],
	[
		120159,
		1,
		"n"
	],
	[
		120160,
		1,
		"o"
	],
	[
		120161,
		1,
		"p"
	],
	[
		120162,
		1,
		"q"
	],
	[
		120163,
		1,
		"r"
	],
	[
		120164,
		1,
		"s"
	],
	[
		120165,
		1,
		"t"
	],
	[
		120166,
		1,
		"u"
	],
	[
		120167,
		1,
		"v"
	],
	[
		120168,
		1,
		"w"
	],
	[
		120169,
		1,
		"x"
	],
	[
		120170,
		1,
		"y"
	],
	[
		120171,
		1,
		"z"
	],
	[
		120172,
		1,
		"a"
	],
	[
		120173,
		1,
		"b"
	],
	[
		120174,
		1,
		"c"
	],
	[
		120175,
		1,
		"d"
	],
	[
		120176,
		1,
		"e"
	],
	[
		120177,
		1,
		"f"
	],
	[
		120178,
		1,
		"g"
	],
	[
		120179,
		1,
		"h"
	],
	[
		120180,
		1,
		"i"
	],
	[
		120181,
		1,
		"j"
	],
	[
		120182,
		1,
		"k"
	],
	[
		120183,
		1,
		"l"
	],
	[
		120184,
		1,
		"m"
	],
	[
		120185,
		1,
		"n"
	],
	[
		120186,
		1,
		"o"
	],
	[
		120187,
		1,
		"p"
	],
	[
		120188,
		1,
		"q"
	],
	[
		120189,
		1,
		"r"
	],
	[
		120190,
		1,
		"s"
	],
	[
		120191,
		1,
		"t"
	],
	[
		120192,
		1,
		"u"
	],
	[
		120193,
		1,
		"v"
	],
	[
		120194,
		1,
		"w"
	],
	[
		120195,
		1,
		"x"
	],
	[
		120196,
		1,
		"y"
	],
	[
		120197,
		1,
		"z"
	],
	[
		120198,
		1,
		"a"
	],
	[
		120199,
		1,
		"b"
	],
	[
		120200,
		1,
		"c"
	],
	[
		120201,
		1,
		"d"
	],
	[
		120202,
		1,
		"e"
	],
	[
		120203,
		1,
		"f"
	],
	[
		120204,
		1,
		"g"
	],
	[
		120205,
		1,
		"h"
	],
	[
		120206,
		1,
		"i"
	],
	[
		120207,
		1,
		"j"
	],
	[
		120208,
		1,
		"k"
	],
	[
		120209,
		1,
		"l"
	],
	[
		120210,
		1,
		"m"
	],
	[
		120211,
		1,
		"n"
	],
	[
		120212,
		1,
		"o"
	],
	[
		120213,
		1,
		"p"
	],
	[
		120214,
		1,
		"q"
	],
	[
		120215,
		1,
		"r"
	],
	[
		120216,
		1,
		"s"
	],
	[
		120217,
		1,
		"t"
	],
	[
		120218,
		1,
		"u"
	],
	[
		120219,
		1,
		"v"
	],
	[
		120220,
		1,
		"w"
	],
	[
		120221,
		1,
		"x"
	],
	[
		120222,
		1,
		"y"
	],
	[
		120223,
		1,
		"z"
	],
	[
		120224,
		1,
		"a"
	],
	[
		120225,
		1,
		"b"
	],
	[
		120226,
		1,
		"c"
	],
	[
		120227,
		1,
		"d"
	],
	[
		120228,
		1,
		"e"
	],
	[
		120229,
		1,
		"f"
	],
	[
		120230,
		1,
		"g"
	],
	[
		120231,
		1,
		"h"
	],
	[
		120232,
		1,
		"i"
	],
	[
		120233,
		1,
		"j"
	],
	[
		120234,
		1,
		"k"
	],
	[
		120235,
		1,
		"l"
	],
	[
		120236,
		1,
		"m"
	],
	[
		120237,
		1,
		"n"
	],
	[
		120238,
		1,
		"o"
	],
	[
		120239,
		1,
		"p"
	],
	[
		120240,
		1,
		"q"
	],
	[
		120241,
		1,
		"r"
	],
	[
		120242,
		1,
		"s"
	],
	[
		120243,
		1,
		"t"
	],
	[
		120244,
		1,
		"u"
	],
	[
		120245,
		1,
		"v"
	],
	[
		120246,
		1,
		"w"
	],
	[
		120247,
		1,
		"x"
	],
	[
		120248,
		1,
		"y"
	],
	[
		120249,
		1,
		"z"
	],
	[
		120250,
		1,
		"a"
	],
	[
		120251,
		1,
		"b"
	],
	[
		120252,
		1,
		"c"
	],
	[
		120253,
		1,
		"d"
	],
	[
		120254,
		1,
		"e"
	],
	[
		120255,
		1,
		"f"
	],
	[
		120256,
		1,
		"g"
	],
	[
		120257,
		1,
		"h"
	],
	[
		120258,
		1,
		"i"
	],
	[
		120259,
		1,
		"j"
	],
	[
		120260,
		1,
		"k"
	],
	[
		120261,
		1,
		"l"
	],
	[
		120262,
		1,
		"m"
	],
	[
		120263,
		1,
		"n"
	],
	[
		120264,
		1,
		"o"
	],
	[
		120265,
		1,
		"p"
	],
	[
		120266,
		1,
		"q"
	],
	[
		120267,
		1,
		"r"
	],
	[
		120268,
		1,
		"s"
	],
	[
		120269,
		1,
		"t"
	],
	[
		120270,
		1,
		"u"
	],
	[
		120271,
		1,
		"v"
	],
	[
		120272,
		1,
		"w"
	],
	[
		120273,
		1,
		"x"
	],
	[
		120274,
		1,
		"y"
	],
	[
		120275,
		1,
		"z"
	],
	[
		120276,
		1,
		"a"
	],
	[
		120277,
		1,
		"b"
	],
	[
		120278,
		1,
		"c"
	],
	[
		120279,
		1,
		"d"
	],
	[
		120280,
		1,
		"e"
	],
	[
		120281,
		1,
		"f"
	],
	[
		120282,
		1,
		"g"
	],
	[
		120283,
		1,
		"h"
	],
	[
		120284,
		1,
		"i"
	],
	[
		120285,
		1,
		"j"
	],
	[
		120286,
		1,
		"k"
	],
	[
		120287,
		1,
		"l"
	],
	[
		120288,
		1,
		"m"
	],
	[
		120289,
		1,
		"n"
	],
	[
		120290,
		1,
		"o"
	],
	[
		120291,
		1,
		"p"
	],
	[
		120292,
		1,
		"q"
	],
	[
		120293,
		1,
		"r"
	],
	[
		120294,
		1,
		"s"
	],
	[
		120295,
		1,
		"t"
	],
	[
		120296,
		1,
		"u"
	],
	[
		120297,
		1,
		"v"
	],
	[
		120298,
		1,
		"w"
	],
	[
		120299,
		1,
		"x"
	],
	[
		120300,
		1,
		"y"
	],
	[
		120301,
		1,
		"z"
	],
	[
		120302,
		1,
		"a"
	],
	[
		120303,
		1,
		"b"
	],
	[
		120304,
		1,
		"c"
	],
	[
		120305,
		1,
		"d"
	],
	[
		120306,
		1,
		"e"
	],
	[
		120307,
		1,
		"f"
	],
	[
		120308,
		1,
		"g"
	],
	[
		120309,
		1,
		"h"
	],
	[
		120310,
		1,
		"i"
	],
	[
		120311,
		1,
		"j"
	],
	[
		120312,
		1,
		"k"
	],
	[
		120313,
		1,
		"l"
	],
	[
		120314,
		1,
		"m"
	],
	[
		120315,
		1,
		"n"
	],
	[
		120316,
		1,
		"o"
	],
	[
		120317,
		1,
		"p"
	],
	[
		120318,
		1,
		"q"
	],
	[
		120319,
		1,
		"r"
	],
	[
		120320,
		1,
		"s"
	],
	[
		120321,
		1,
		"t"
	],
	[
		120322,
		1,
		"u"
	],
	[
		120323,
		1,
		"v"
	],
	[
		120324,
		1,
		"w"
	],
	[
		120325,
		1,
		"x"
	],
	[
		120326,
		1,
		"y"
	],
	[
		120327,
		1,
		"z"
	],
	[
		120328,
		1,
		"a"
	],
	[
		120329,
		1,
		"b"
	],
	[
		120330,
		1,
		"c"
	],
	[
		120331,
		1,
		"d"
	],
	[
		120332,
		1,
		"e"
	],
	[
		120333,
		1,
		"f"
	],
	[
		120334,
		1,
		"g"
	],
	[
		120335,
		1,
		"h"
	],
	[
		120336,
		1,
		"i"
	],
	[
		120337,
		1,
		"j"
	],
	[
		120338,
		1,
		"k"
	],
	[
		120339,
		1,
		"l"
	],
	[
		120340,
		1,
		"m"
	],
	[
		120341,
		1,
		"n"
	],
	[
		120342,
		1,
		"o"
	],
	[
		120343,
		1,
		"p"
	],
	[
		120344,
		1,
		"q"
	],
	[
		120345,
		1,
		"r"
	],
	[
		120346,
		1,
		"s"
	],
	[
		120347,
		1,
		"t"
	],
	[
		120348,
		1,
		"u"
	],
	[
		120349,
		1,
		"v"
	],
	[
		120350,
		1,
		"w"
	],
	[
		120351,
		1,
		"x"
	],
	[
		120352,
		1,
		"y"
	],
	[
		120353,
		1,
		"z"
	],
	[
		120354,
		1,
		"a"
	],
	[
		120355,
		1,
		"b"
	],
	[
		120356,
		1,
		"c"
	],
	[
		120357,
		1,
		"d"
	],
	[
		120358,
		1,
		"e"
	],
	[
		120359,
		1,
		"f"
	],
	[
		120360,
		1,
		"g"
	],
	[
		120361,
		1,
		"h"
	],
	[
		120362,
		1,
		"i"
	],
	[
		120363,
		1,
		"j"
	],
	[
		120364,
		1,
		"k"
	],
	[
		120365,
		1,
		"l"
	],
	[
		120366,
		1,
		"m"
	],
	[
		120367,
		1,
		"n"
	],
	[
		120368,
		1,
		"o"
	],
	[
		120369,
		1,
		"p"
	],
	[
		120370,
		1,
		"q"
	],
	[
		120371,
		1,
		"r"
	],
	[
		120372,
		1,
		"s"
	],
	[
		120373,
		1,
		"t"
	],
	[
		120374,
		1,
		"u"
	],
	[
		120375,
		1,
		"v"
	],
	[
		120376,
		1,
		"w"
	],
	[
		120377,
		1,
		"x"
	],
	[
		120378,
		1,
		"y"
	],
	[
		120379,
		1,
		"z"
	],
	[
		120380,
		1,
		"a"
	],
	[
		120381,
		1,
		"b"
	],
	[
		120382,
		1,
		"c"
	],
	[
		120383,
		1,
		"d"
	],
	[
		120384,
		1,
		"e"
	],
	[
		120385,
		1,
		"f"
	],
	[
		120386,
		1,
		"g"
	],
	[
		120387,
		1,
		"h"
	],
	[
		120388,
		1,
		"i"
	],
	[
		120389,
		1,
		"j"
	],
	[
		120390,
		1,
		"k"
	],
	[
		120391,
		1,
		"l"
	],
	[
		120392,
		1,
		"m"
	],
	[
		120393,
		1,
		"n"
	],
	[
		120394,
		1,
		"o"
	],
	[
		120395,
		1,
		"p"
	],
	[
		120396,
		1,
		"q"
	],
	[
		120397,
		1,
		"r"
	],
	[
		120398,
		1,
		"s"
	],
	[
		120399,
		1,
		"t"
	],
	[
		120400,
		1,
		"u"
	],
	[
		120401,
		1,
		"v"
	],
	[
		120402,
		1,
		"w"
	],
	[
		120403,
		1,
		"x"
	],
	[
		120404,
		1,
		"y"
	],
	[
		120405,
		1,
		"z"
	],
	[
		120406,
		1,
		"a"
	],
	[
		120407,
		1,
		"b"
	],
	[
		120408,
		1,
		"c"
	],
	[
		120409,
		1,
		"d"
	],
	[
		120410,
		1,
		"e"
	],
	[
		120411,
		1,
		"f"
	],
	[
		120412,
		1,
		"g"
	],
	[
		120413,
		1,
		"h"
	],
	[
		120414,
		1,
		"i"
	],
	[
		120415,
		1,
		"j"
	],
	[
		120416,
		1,
		"k"
	],
	[
		120417,
		1,
		"l"
	],
	[
		120418,
		1,
		"m"
	],
	[
		120419,
		1,
		"n"
	],
	[
		120420,
		1,
		"o"
	],
	[
		120421,
		1,
		"p"
	],
	[
		120422,
		1,
		"q"
	],
	[
		120423,
		1,
		"r"
	],
	[
		120424,
		1,
		"s"
	],
	[
		120425,
		1,
		"t"
	],
	[
		120426,
		1,
		"u"
	],
	[
		120427,
		1,
		"v"
	],
	[
		120428,
		1,
		"w"
	],
	[
		120429,
		1,
		"x"
	],
	[
		120430,
		1,
		"y"
	],
	[
		120431,
		1,
		"z"
	],
	[
		120432,
		1,
		"a"
	],
	[
		120433,
		1,
		"b"
	],
	[
		120434,
		1,
		"c"
	],
	[
		120435,
		1,
		"d"
	],
	[
		120436,
		1,
		"e"
	],
	[
		120437,
		1,
		"f"
	],
	[
		120438,
		1,
		"g"
	],
	[
		120439,
		1,
		"h"
	],
	[
		120440,
		1,
		"i"
	],
	[
		120441,
		1,
		"j"
	],
	[
		120442,
		1,
		"k"
	],
	[
		120443,
		1,
		"l"
	],
	[
		120444,
		1,
		"m"
	],
	[
		120445,
		1,
		"n"
	],
	[
		120446,
		1,
		"o"
	],
	[
		120447,
		1,
		"p"
	],
	[
		120448,
		1,
		"q"
	],
	[
		120449,
		1,
		"r"
	],
	[
		120450,
		1,
		"s"
	],
	[
		120451,
		1,
		"t"
	],
	[
		120452,
		1,
		"u"
	],
	[
		120453,
		1,
		"v"
	],
	[
		120454,
		1,
		"w"
	],
	[
		120455,
		1,
		"x"
	],
	[
		120456,
		1,
		"y"
	],
	[
		120457,
		1,
		"z"
	],
	[
		120458,
		1,
		"a"
	],
	[
		120459,
		1,
		"b"
	],
	[
		120460,
		1,
		"c"
	],
	[
		120461,
		1,
		"d"
	],
	[
		120462,
		1,
		"e"
	],
	[
		120463,
		1,
		"f"
	],
	[
		120464,
		1,
		"g"
	],
	[
		120465,
		1,
		"h"
	],
	[
		120466,
		1,
		"i"
	],
	[
		120467,
		1,
		"j"
	],
	[
		120468,
		1,
		"k"
	],
	[
		120469,
		1,
		"l"
	],
	[
		120470,
		1,
		"m"
	],
	[
		120471,
		1,
		"n"
	],
	[
		120472,
		1,
		"o"
	],
	[
		120473,
		1,
		"p"
	],
	[
		120474,
		1,
		"q"
	],
	[
		120475,
		1,
		"r"
	],
	[
		120476,
		1,
		"s"
	],
	[
		120477,
		1,
		"t"
	],
	[
		120478,
		1,
		"u"
	],
	[
		120479,
		1,
		"v"
	],
	[
		120480,
		1,
		"w"
	],
	[
		120481,
		1,
		"x"
	],
	[
		120482,
		1,
		"y"
	],
	[
		120483,
		1,
		"z"
	],
	[
		120484,
		1,
		"ı"
	],
	[
		120485,
		1,
		"ȷ"
	],
	[
		[
			120486,
			120487
		],
		3
	],
	[
		120488,
		1,
		"α"
	],
	[
		120489,
		1,
		"β"
	],
	[
		120490,
		1,
		"γ"
	],
	[
		120491,
		1,
		"δ"
	],
	[
		120492,
		1,
		"ε"
	],
	[
		120493,
		1,
		"ζ"
	],
	[
		120494,
		1,
		"η"
	],
	[
		120495,
		1,
		"θ"
	],
	[
		120496,
		1,
		"ι"
	],
	[
		120497,
		1,
		"κ"
	],
	[
		120498,
		1,
		"λ"
	],
	[
		120499,
		1,
		"μ"
	],
	[
		120500,
		1,
		"ν"
	],
	[
		120501,
		1,
		"ξ"
	],
	[
		120502,
		1,
		"ο"
	],
	[
		120503,
		1,
		"π"
	],
	[
		120504,
		1,
		"ρ"
	],
	[
		120505,
		1,
		"θ"
	],
	[
		120506,
		1,
		"σ"
	],
	[
		120507,
		1,
		"τ"
	],
	[
		120508,
		1,
		"υ"
	],
	[
		120509,
		1,
		"φ"
	],
	[
		120510,
		1,
		"χ"
	],
	[
		120511,
		1,
		"ψ"
	],
	[
		120512,
		1,
		"ω"
	],
	[
		120513,
		1,
		"∇"
	],
	[
		120514,
		1,
		"α"
	],
	[
		120515,
		1,
		"β"
	],
	[
		120516,
		1,
		"γ"
	],
	[
		120517,
		1,
		"δ"
	],
	[
		120518,
		1,
		"ε"
	],
	[
		120519,
		1,
		"ζ"
	],
	[
		120520,
		1,
		"η"
	],
	[
		120521,
		1,
		"θ"
	],
	[
		120522,
		1,
		"ι"
	],
	[
		120523,
		1,
		"κ"
	],
	[
		120524,
		1,
		"λ"
	],
	[
		120525,
		1,
		"μ"
	],
	[
		120526,
		1,
		"ν"
	],
	[
		120527,
		1,
		"ξ"
	],
	[
		120528,
		1,
		"ο"
	],
	[
		120529,
		1,
		"π"
	],
	[
		120530,
		1,
		"ρ"
	],
	[
		[
			120531,
			120532
		],
		1,
		"σ"
	],
	[
		120533,
		1,
		"τ"
	],
	[
		120534,
		1,
		"υ"
	],
	[
		120535,
		1,
		"φ"
	],
	[
		120536,
		1,
		"χ"
	],
	[
		120537,
		1,
		"ψ"
	],
	[
		120538,
		1,
		"ω"
	],
	[
		120539,
		1,
		"∂"
	],
	[
		120540,
		1,
		"ε"
	],
	[
		120541,
		1,
		"θ"
	],
	[
		120542,
		1,
		"κ"
	],
	[
		120543,
		1,
		"φ"
	],
	[
		120544,
		1,
		"ρ"
	],
	[
		120545,
		1,
		"π"
	],
	[
		120546,
		1,
		"α"
	],
	[
		120547,
		1,
		"β"
	],
	[
		120548,
		1,
		"γ"
	],
	[
		120549,
		1,
		"δ"
	],
	[
		120550,
		1,
		"ε"
	],
	[
		120551,
		1,
		"ζ"
	],
	[
		120552,
		1,
		"η"
	],
	[
		120553,
		1,
		"θ"
	],
	[
		120554,
		1,
		"ι"
	],
	[
		120555,
		1,
		"κ"
	],
	[
		120556,
		1,
		"λ"
	],
	[
		120557,
		1,
		"μ"
	],
	[
		120558,
		1,
		"ν"
	],
	[
		120559,
		1,
		"ξ"
	],
	[
		120560,
		1,
		"ο"
	],
	[
		120561,
		1,
		"π"
	],
	[
		120562,
		1,
		"ρ"
	],
	[
		120563,
		1,
		"θ"
	],
	[
		120564,
		1,
		"σ"
	],
	[
		120565,
		1,
		"τ"
	],
	[
		120566,
		1,
		"υ"
	],
	[
		120567,
		1,
		"φ"
	],
	[
		120568,
		1,
		"χ"
	],
	[
		120569,
		1,
		"ψ"
	],
	[
		120570,
		1,
		"ω"
	],
	[
		120571,
		1,
		"∇"
	],
	[
		120572,
		1,
		"α"
	],
	[
		120573,
		1,
		"β"
	],
	[
		120574,
		1,
		"γ"
	],
	[
		120575,
		1,
		"δ"
	],
	[
		120576,
		1,
		"ε"
	],
	[
		120577,
		1,
		"ζ"
	],
	[
		120578,
		1,
		"η"
	],
	[
		120579,
		1,
		"θ"
	],
	[
		120580,
		1,
		"ι"
	],
	[
		120581,
		1,
		"κ"
	],
	[
		120582,
		1,
		"λ"
	],
	[
		120583,
		1,
		"μ"
	],
	[
		120584,
		1,
		"ν"
	],
	[
		120585,
		1,
		"ξ"
	],
	[
		120586,
		1,
		"ο"
	],
	[
		120587,
		1,
		"π"
	],
	[
		120588,
		1,
		"ρ"
	],
	[
		[
			120589,
			120590
		],
		1,
		"σ"
	],
	[
		120591,
		1,
		"τ"
	],
	[
		120592,
		1,
		"υ"
	],
	[
		120593,
		1,
		"φ"
	],
	[
		120594,
		1,
		"χ"
	],
	[
		120595,
		1,
		"ψ"
	],
	[
		120596,
		1,
		"ω"
	],
	[
		120597,
		1,
		"∂"
	],
	[
		120598,
		1,
		"ε"
	],
	[
		120599,
		1,
		"θ"
	],
	[
		120600,
		1,
		"κ"
	],
	[
		120601,
		1,
		"φ"
	],
	[
		120602,
		1,
		"ρ"
	],
	[
		120603,
		1,
		"π"
	],
	[
		120604,
		1,
		"α"
	],
	[
		120605,
		1,
		"β"
	],
	[
		120606,
		1,
		"γ"
	],
	[
		120607,
		1,
		"δ"
	],
	[
		120608,
		1,
		"ε"
	],
	[
		120609,
		1,
		"ζ"
	],
	[
		120610,
		1,
		"η"
	],
	[
		120611,
		1,
		"θ"
	],
	[
		120612,
		1,
		"ι"
	],
	[
		120613,
		1,
		"κ"
	],
	[
		120614,
		1,
		"λ"
	],
	[
		120615,
		1,
		"μ"
	],
	[
		120616,
		1,
		"ν"
	],
	[
		120617,
		1,
		"ξ"
	],
	[
		120618,
		1,
		"ο"
	],
	[
		120619,
		1,
		"π"
	],
	[
		120620,
		1,
		"ρ"
	],
	[
		120621,
		1,
		"θ"
	],
	[
		120622,
		1,
		"σ"
	],
	[
		120623,
		1,
		"τ"
	],
	[
		120624,
		1,
		"υ"
	],
	[
		120625,
		1,
		"φ"
	],
	[
		120626,
		1,
		"χ"
	],
	[
		120627,
		1,
		"ψ"
	],
	[
		120628,
		1,
		"ω"
	],
	[
		120629,
		1,
		"∇"
	],
	[
		120630,
		1,
		"α"
	],
	[
		120631,
		1,
		"β"
	],
	[
		120632,
		1,
		"γ"
	],
	[
		120633,
		1,
		"δ"
	],
	[
		120634,
		1,
		"ε"
	],
	[
		120635,
		1,
		"ζ"
	],
	[
		120636,
		1,
		"η"
	],
	[
		120637,
		1,
		"θ"
	],
	[
		120638,
		1,
		"ι"
	],
	[
		120639,
		1,
		"κ"
	],
	[
		120640,
		1,
		"λ"
	],
	[
		120641,
		1,
		"μ"
	],
	[
		120642,
		1,
		"ν"
	],
	[
		120643,
		1,
		"ξ"
	],
	[
		120644,
		1,
		"ο"
	],
	[
		120645,
		1,
		"π"
	],
	[
		120646,
		1,
		"ρ"
	],
	[
		[
			120647,
			120648
		],
		1,
		"σ"
	],
	[
		120649,
		1,
		"τ"
	],
	[
		120650,
		1,
		"υ"
	],
	[
		120651,
		1,
		"φ"
	],
	[
		120652,
		1,
		"χ"
	],
	[
		120653,
		1,
		"ψ"
	],
	[
		120654,
		1,
		"ω"
	],
	[
		120655,
		1,
		"∂"
	],
	[
		120656,
		1,
		"ε"
	],
	[
		120657,
		1,
		"θ"
	],
	[
		120658,
		1,
		"κ"
	],
	[
		120659,
		1,
		"φ"
	],
	[
		120660,
		1,
		"ρ"
	],
	[
		120661,
		1,
		"π"
	],
	[
		120662,
		1,
		"α"
	],
	[
		120663,
		1,
		"β"
	],
	[
		120664,
		1,
		"γ"
	],
	[
		120665,
		1,
		"δ"
	],
	[
		120666,
		1,
		"ε"
	],
	[
		120667,
		1,
		"ζ"
	],
	[
		120668,
		1,
		"η"
	],
	[
		120669,
		1,
		"θ"
	],
	[
		120670,
		1,
		"ι"
	],
	[
		120671,
		1,
		"κ"
	],
	[
		120672,
		1,
		"λ"
	],
	[
		120673,
		1,
		"μ"
	],
	[
		120674,
		1,
		"ν"
	],
	[
		120675,
		1,
		"ξ"
	],
	[
		120676,
		1,
		"ο"
	],
	[
		120677,
		1,
		"π"
	],
	[
		120678,
		1,
		"ρ"
	],
	[
		120679,
		1,
		"θ"
	],
	[
		120680,
		1,
		"σ"
	],
	[
		120681,
		1,
		"τ"
	],
	[
		120682,
		1,
		"υ"
	],
	[
		120683,
		1,
		"φ"
	],
	[
		120684,
		1,
		"χ"
	],
	[
		120685,
		1,
		"ψ"
	],
	[
		120686,
		1,
		"ω"
	],
	[
		120687,
		1,
		"∇"
	],
	[
		120688,
		1,
		"α"
	],
	[
		120689,
		1,
		"β"
	],
	[
		120690,
		1,
		"γ"
	],
	[
		120691,
		1,
		"δ"
	],
	[
		120692,
		1,
		"ε"
	],
	[
		120693,
		1,
		"ζ"
	],
	[
		120694,
		1,
		"η"
	],
	[
		120695,
		1,
		"θ"
	],
	[
		120696,
		1,
		"ι"
	],
	[
		120697,
		1,
		"κ"
	],
	[
		120698,
		1,
		"λ"
	],
	[
		120699,
		1,
		"μ"
	],
	[
		120700,
		1,
		"ν"
	],
	[
		120701,
		1,
		"ξ"
	],
	[
		120702,
		1,
		"ο"
	],
	[
		120703,
		1,
		"π"
	],
	[
		120704,
		1,
		"ρ"
	],
	[
		[
			120705,
			120706
		],
		1,
		"σ"
	],
	[
		120707,
		1,
		"τ"
	],
	[
		120708,
		1,
		"υ"
	],
	[
		120709,
		1,
		"φ"
	],
	[
		120710,
		1,
		"χ"
	],
	[
		120711,
		1,
		"ψ"
	],
	[
		120712,
		1,
		"ω"
	],
	[
		120713,
		1,
		"∂"
	],
	[
		120714,
		1,
		"ε"
	],
	[
		120715,
		1,
		"θ"
	],
	[
		120716,
		1,
		"κ"
	],
	[
		120717,
		1,
		"φ"
	],
	[
		120718,
		1,
		"ρ"
	],
	[
		120719,
		1,
		"π"
	],
	[
		120720,
		1,
		"α"
	],
	[
		120721,
		1,
		"β"
	],
	[
		120722,
		1,
		"γ"
	],
	[
		120723,
		1,
		"δ"
	],
	[
		120724,
		1,
		"ε"
	],
	[
		120725,
		1,
		"ζ"
	],
	[
		120726,
		1,
		"η"
	],
	[
		120727,
		1,
		"θ"
	],
	[
		120728,
		1,
		"ι"
	],
	[
		120729,
		1,
		"κ"
	],
	[
		120730,
		1,
		"λ"
	],
	[
		120731,
		1,
		"μ"
	],
	[
		120732,
		1,
		"ν"
	],
	[
		120733,
		1,
		"ξ"
	],
	[
		120734,
		1,
		"ο"
	],
	[
		120735,
		1,
		"π"
	],
	[
		120736,
		1,
		"ρ"
	],
	[
		120737,
		1,
		"θ"
	],
	[
		120738,
		1,
		"σ"
	],
	[
		120739,
		1,
		"τ"
	],
	[
		120740,
		1,
		"υ"
	],
	[
		120741,
		1,
		"φ"
	],
	[
		120742,
		1,
		"χ"
	],
	[
		120743,
		1,
		"ψ"
	],
	[
		120744,
		1,
		"ω"
	],
	[
		120745,
		1,
		"∇"
	],
	[
		120746,
		1,
		"α"
	],
	[
		120747,
		1,
		"β"
	],
	[
		120748,
		1,
		"γ"
	],
	[
		120749,
		1,
		"δ"
	],
	[
		120750,
		1,
		"ε"
	],
	[
		120751,
		1,
		"ζ"
	],
	[
		120752,
		1,
		"η"
	],
	[
		120753,
		1,
		"θ"
	],
	[
		120754,
		1,
		"ι"
	],
	[
		120755,
		1,
		"κ"
	],
	[
		120756,
		1,
		"λ"
	],
	[
		120757,
		1,
		"μ"
	],
	[
		120758,
		1,
		"ν"
	],
	[
		120759,
		1,
		"ξ"
	],
	[
		120760,
		1,
		"ο"
	],
	[
		120761,
		1,
		"π"
	],
	[
		120762,
		1,
		"ρ"
	],
	[
		[
			120763,
			120764
		],
		1,
		"σ"
	],
	[
		120765,
		1,
		"τ"
	],
	[
		120766,
		1,
		"υ"
	],
	[
		120767,
		1,
		"φ"
	],
	[
		120768,
		1,
		"χ"
	],
	[
		120769,
		1,
		"ψ"
	],
	[
		120770,
		1,
		"ω"
	],
	[
		120771,
		1,
		"∂"
	],
	[
		120772,
		1,
		"ε"
	],
	[
		120773,
		1,
		"θ"
	],
	[
		120774,
		1,
		"κ"
	],
	[
		120775,
		1,
		"φ"
	],
	[
		120776,
		1,
		"ρ"
	],
	[
		120777,
		1,
		"π"
	],
	[
		[
			120778,
			120779
		],
		1,
		"ϝ"
	],
	[
		[
			120780,
			120781
		],
		3
	],
	[
		120782,
		1,
		"0"
	],
	[
		120783,
		1,
		"1"
	],
	[
		120784,
		1,
		"2"
	],
	[
		120785,
		1,
		"3"
	],
	[
		120786,
		1,
		"4"
	],
	[
		120787,
		1,
		"5"
	],
	[
		120788,
		1,
		"6"
	],
	[
		120789,
		1,
		"7"
	],
	[
		120790,
		1,
		"8"
	],
	[
		120791,
		1,
		"9"
	],
	[
		120792,
		1,
		"0"
	],
	[
		120793,
		1,
		"1"
	],
	[
		120794,
		1,
		"2"
	],
	[
		120795,
		1,
		"3"
	],
	[
		120796,
		1,
		"4"
	],
	[
		120797,
		1,
		"5"
	],
	[
		120798,
		1,
		"6"
	],
	[
		120799,
		1,
		"7"
	],
	[
		120800,
		1,
		"8"
	],
	[
		120801,
		1,
		"9"
	],
	[
		120802,
		1,
		"0"
	],
	[
		120803,
		1,
		"1"
	],
	[
		120804,
		1,
		"2"
	],
	[
		120805,
		1,
		"3"
	],
	[
		120806,
		1,
		"4"
	],
	[
		120807,
		1,
		"5"
	],
	[
		120808,
		1,
		"6"
	],
	[
		120809,
		1,
		"7"
	],
	[
		120810,
		1,
		"8"
	],
	[
		120811,
		1,
		"9"
	],
	[
		120812,
		1,
		"0"
	],
	[
		120813,
		1,
		"1"
	],
	[
		120814,
		1,
		"2"
	],
	[
		120815,
		1,
		"3"
	],
	[
		120816,
		1,
		"4"
	],
	[
		120817,
		1,
		"5"
	],
	[
		120818,
		1,
		"6"
	],
	[
		120819,
		1,
		"7"
	],
	[
		120820,
		1,
		"8"
	],
	[
		120821,
		1,
		"9"
	],
	[
		120822,
		1,
		"0"
	],
	[
		120823,
		1,
		"1"
	],
	[
		120824,
		1,
		"2"
	],
	[
		120825,
		1,
		"3"
	],
	[
		120826,
		1,
		"4"
	],
	[
		120827,
		1,
		"5"
	],
	[
		120828,
		1,
		"6"
	],
	[
		120829,
		1,
		"7"
	],
	[
		120830,
		1,
		"8"
	],
	[
		120831,
		1,
		"9"
	],
	[
		[
			120832,
			121343
		],
		2
	],
	[
		[
			121344,
			121398
		],
		2
	],
	[
		[
			121399,
			121402
		],
		2
	],
	[
		[
			121403,
			121452
		],
		2
	],
	[
		[
			121453,
			121460
		],
		2
	],
	[
		121461,
		2
	],
	[
		[
			121462,
			121475
		],
		2
	],
	[
		121476,
		2
	],
	[
		[
			121477,
			121483
		],
		2
	],
	[
		[
			121484,
			121498
		],
		3
	],
	[
		[
			121499,
			121503
		],
		2
	],
	[
		121504,
		3
	],
	[
		[
			121505,
			121519
		],
		2
	],
	[
		[
			121520,
			122623
		],
		3
	],
	[
		[
			122624,
			122654
		],
		2
	],
	[
		[
			122655,
			122660
		],
		3
	],
	[
		[
			122661,
			122666
		],
		2
	],
	[
		[
			122667,
			122879
		],
		3
	],
	[
		[
			122880,
			122886
		],
		2
	],
	[
		122887,
		3
	],
	[
		[
			122888,
			122904
		],
		2
	],
	[
		[
			122905,
			122906
		],
		3
	],
	[
		[
			122907,
			122913
		],
		2
	],
	[
		122914,
		3
	],
	[
		[
			122915,
			122916
		],
		2
	],
	[
		122917,
		3
	],
	[
		[
			122918,
			122922
		],
		2
	],
	[
		[
			122923,
			122927
		],
		3
	],
	[
		122928,
		1,
		"а"
	],
	[
		122929,
		1,
		"б"
	],
	[
		122930,
		1,
		"в"
	],
	[
		122931,
		1,
		"г"
	],
	[
		122932,
		1,
		"д"
	],
	[
		122933,
		1,
		"е"
	],
	[
		122934,
		1,
		"ж"
	],
	[
		122935,
		1,
		"з"
	],
	[
		122936,
		1,
		"и"
	],
	[
		122937,
		1,
		"к"
	],
	[
		122938,
		1,
		"л"
	],
	[
		122939,
		1,
		"м"
	],
	[
		122940,
		1,
		"о"
	],
	[
		122941,
		1,
		"п"
	],
	[
		122942,
		1,
		"р"
	],
	[
		122943,
		1,
		"с"
	],
	[
		122944,
		1,
		"т"
	],
	[
		122945,
		1,
		"у"
	],
	[
		122946,
		1,
		"ф"
	],
	[
		122947,
		1,
		"х"
	],
	[
		122948,
		1,
		"ц"
	],
	[
		122949,
		1,
		"ч"
	],
	[
		122950,
		1,
		"ш"
	],
	[
		122951,
		1,
		"ы"
	],
	[
		122952,
		1,
		"э"
	],
	[
		122953,
		1,
		"ю"
	],
	[
		122954,
		1,
		"ꚉ"
	],
	[
		122955,
		1,
		"ә"
	],
	[
		122956,
		1,
		"і"
	],
	[
		122957,
		1,
		"ј"
	],
	[
		122958,
		1,
		"ө"
	],
	[
		122959,
		1,
		"ү"
	],
	[
		122960,
		1,
		"ӏ"
	],
	[
		122961,
		1,
		"а"
	],
	[
		122962,
		1,
		"б"
	],
	[
		122963,
		1,
		"в"
	],
	[
		122964,
		1,
		"г"
	],
	[
		122965,
		1,
		"д"
	],
	[
		122966,
		1,
		"е"
	],
	[
		122967,
		1,
		"ж"
	],
	[
		122968,
		1,
		"з"
	],
	[
		122969,
		1,
		"и"
	],
	[
		122970,
		1,
		"к"
	],
	[
		122971,
		1,
		"л"
	],
	[
		122972,
		1,
		"о"
	],
	[
		122973,
		1,
		"п"
	],
	[
		122974,
		1,
		"с"
	],
	[
		122975,
		1,
		"у"
	],
	[
		122976,
		1,
		"ф"
	],
	[
		122977,
		1,
		"х"
	],
	[
		122978,
		1,
		"ц"
	],
	[
		122979,
		1,
		"ч"
	],
	[
		122980,
		1,
		"ш"
	],
	[
		122981,
		1,
		"ъ"
	],
	[
		122982,
		1,
		"ы"
	],
	[
		122983,
		1,
		"ґ"
	],
	[
		122984,
		1,
		"і"
	],
	[
		122985,
		1,
		"ѕ"
	],
	[
		122986,
		1,
		"џ"
	],
	[
		122987,
		1,
		"ҫ"
	],
	[
		122988,
		1,
		"ꙑ"
	],
	[
		122989,
		1,
		"ұ"
	],
	[
		[
			122990,
			123022
		],
		3
	],
	[
		123023,
		2
	],
	[
		[
			123024,
			123135
		],
		3
	],
	[
		[
			123136,
			123180
		],
		2
	],
	[
		[
			123181,
			123183
		],
		3
	],
	[
		[
			123184,
			123197
		],
		2
	],
	[
		[
			123198,
			123199
		],
		3
	],
	[
		[
			123200,
			123209
		],
		2
	],
	[
		[
			123210,
			123213
		],
		3
	],
	[
		123214,
		2
	],
	[
		123215,
		2
	],
	[
		[
			123216,
			123535
		],
		3
	],
	[
		[
			123536,
			123566
		],
		2
	],
	[
		[
			123567,
			123583
		],
		3
	],
	[
		[
			123584,
			123641
		],
		2
	],
	[
		[
			123642,
			123646
		],
		3
	],
	[
		123647,
		2
	],
	[
		[
			123648,
			124111
		],
		3
	],
	[
		[
			124112,
			124153
		],
		2
	],
	[
		[
			124154,
			124895
		],
		3
	],
	[
		[
			124896,
			124902
		],
		2
	],
	[
		124903,
		3
	],
	[
		[
			124904,
			124907
		],
		2
	],
	[
		124908,
		3
	],
	[
		[
			124909,
			124910
		],
		2
	],
	[
		124911,
		3
	],
	[
		[
			124912,
			124926
		],
		2
	],
	[
		124927,
		3
	],
	[
		[
			124928,
			125124
		],
		2
	],
	[
		[
			125125,
			125126
		],
		3
	],
	[
		[
			125127,
			125135
		],
		2
	],
	[
		[
			125136,
			125142
		],
		2
	],
	[
		[
			125143,
			125183
		],
		3
	],
	[
		125184,
		1,
		"𞤢"
	],
	[
		125185,
		1,
		"𞤣"
	],
	[
		125186,
		1,
		"𞤤"
	],
	[
		125187,
		1,
		"𞤥"
	],
	[
		125188,
		1,
		"𞤦"
	],
	[
		125189,
		1,
		"𞤧"
	],
	[
		125190,
		1,
		"𞤨"
	],
	[
		125191,
		1,
		"𞤩"
	],
	[
		125192,
		1,
		"𞤪"
	],
	[
		125193,
		1,
		"𞤫"
	],
	[
		125194,
		1,
		"𞤬"
	],
	[
		125195,
		1,
		"𞤭"
	],
	[
		125196,
		1,
		"𞤮"
	],
	[
		125197,
		1,
		"𞤯"
	],
	[
		125198,
		1,
		"𞤰"
	],
	[
		125199,
		1,
		"𞤱"
	],
	[
		125200,
		1,
		"𞤲"
	],
	[
		125201,
		1,
		"𞤳"
	],
	[
		125202,
		1,
		"𞤴"
	],
	[
		125203,
		1,
		"𞤵"
	],
	[
		125204,
		1,
		"𞤶"
	],
	[
		125205,
		1,
		"𞤷"
	],
	[
		125206,
		1,
		"𞤸"
	],
	[
		125207,
		1,
		"𞤹"
	],
	[
		125208,
		1,
		"𞤺"
	],
	[
		125209,
		1,
		"𞤻"
	],
	[
		125210,
		1,
		"𞤼"
	],
	[
		125211,
		1,
		"𞤽"
	],
	[
		125212,
		1,
		"𞤾"
	],
	[
		125213,
		1,
		"𞤿"
	],
	[
		125214,
		1,
		"𞥀"
	],
	[
		125215,
		1,
		"𞥁"
	],
	[
		125216,
		1,
		"𞥂"
	],
	[
		125217,
		1,
		"𞥃"
	],
	[
		[
			125218,
			125258
		],
		2
	],
	[
		125259,
		2
	],
	[
		[
			125260,
			125263
		],
		3
	],
	[
		[
			125264,
			125273
		],
		2
	],
	[
		[
			125274,
			125277
		],
		3
	],
	[
		[
			125278,
			125279
		],
		2
	],
	[
		[
			125280,
			126064
		],
		3
	],
	[
		[
			126065,
			126132
		],
		2
	],
	[
		[
			126133,
			126208
		],
		3
	],
	[
		[
			126209,
			126269
		],
		2
	],
	[
		[
			126270,
			126463
		],
		3
	],
	[
		126464,
		1,
		"ا"
	],
	[
		126465,
		1,
		"ب"
	],
	[
		126466,
		1,
		"ج"
	],
	[
		126467,
		1,
		"د"
	],
	[
		126468,
		3
	],
	[
		126469,
		1,
		"و"
	],
	[
		126470,
		1,
		"ز"
	],
	[
		126471,
		1,
		"ح"
	],
	[
		126472,
		1,
		"ط"
	],
	[
		126473,
		1,
		"ي"
	],
	[
		126474,
		1,
		"ك"
	],
	[
		126475,
		1,
		"ل"
	],
	[
		126476,
		1,
		"م"
	],
	[
		126477,
		1,
		"ن"
	],
	[
		126478,
		1,
		"س"
	],
	[
		126479,
		1,
		"ع"
	],
	[
		126480,
		1,
		"ف"
	],
	[
		126481,
		1,
		"ص"
	],
	[
		126482,
		1,
		"ق"
	],
	[
		126483,
		1,
		"ر"
	],
	[
		126484,
		1,
		"ش"
	],
	[
		126485,
		1,
		"ت"
	],
	[
		126486,
		1,
		"ث"
	],
	[
		126487,
		1,
		"خ"
	],
	[
		126488,
		1,
		"ذ"
	],
	[
		126489,
		1,
		"ض"
	],
	[
		126490,
		1,
		"ظ"
	],
	[
		126491,
		1,
		"غ"
	],
	[
		126492,
		1,
		"ٮ"
	],
	[
		126493,
		1,
		"ں"
	],
	[
		126494,
		1,
		"ڡ"
	],
	[
		126495,
		1,
		"ٯ"
	],
	[
		126496,
		3
	],
	[
		126497,
		1,
		"ب"
	],
	[
		126498,
		1,
		"ج"
	],
	[
		126499,
		3
	],
	[
		126500,
		1,
		"ه"
	],
	[
		[
			126501,
			126502
		],
		3
	],
	[
		126503,
		1,
		"ح"
	],
	[
		126504,
		3
	],
	[
		126505,
		1,
		"ي"
	],
	[
		126506,
		1,
		"ك"
	],
	[
		126507,
		1,
		"ل"
	],
	[
		126508,
		1,
		"م"
	],
	[
		126509,
		1,
		"ن"
	],
	[
		126510,
		1,
		"س"
	],
	[
		126511,
		1,
		"ع"
	],
	[
		126512,
		1,
		"ف"
	],
	[
		126513,
		1,
		"ص"
	],
	[
		126514,
		1,
		"ق"
	],
	[
		126515,
		3
	],
	[
		126516,
		1,
		"ش"
	],
	[
		126517,
		1,
		"ت"
	],
	[
		126518,
		1,
		"ث"
	],
	[
		126519,
		1,
		"خ"
	],
	[
		126520,
		3
	],
	[
		126521,
		1,
		"ض"
	],
	[
		126522,
		3
	],
	[
		126523,
		1,
		"غ"
	],
	[
		[
			126524,
			126529
		],
		3
	],
	[
		126530,
		1,
		"ج"
	],
	[
		[
			126531,
			126534
		],
		3
	],
	[
		126535,
		1,
		"ح"
	],
	[
		126536,
		3
	],
	[
		126537,
		1,
		"ي"
	],
	[
		126538,
		3
	],
	[
		126539,
		1,
		"ل"
	],
	[
		126540,
		3
	],
	[
		126541,
		1,
		"ن"
	],
	[
		126542,
		1,
		"س"
	],
	[
		126543,
		1,
		"ع"
	],
	[
		126544,
		3
	],
	[
		126545,
		1,
		"ص"
	],
	[
		126546,
		1,
		"ق"
	],
	[
		126547,
		3
	],
	[
		126548,
		1,
		"ش"
	],
	[
		[
			126549,
			126550
		],
		3
	],
	[
		126551,
		1,
		"خ"
	],
	[
		126552,
		3
	],
	[
		126553,
		1,
		"ض"
	],
	[
		126554,
		3
	],
	[
		126555,
		1,
		"غ"
	],
	[
		126556,
		3
	],
	[
		126557,
		1,
		"ں"
	],
	[
		126558,
		3
	],
	[
		126559,
		1,
		"ٯ"
	],
	[
		126560,
		3
	],
	[
		126561,
		1,
		"ب"
	],
	[
		126562,
		1,
		"ج"
	],
	[
		126563,
		3
	],
	[
		126564,
		1,
		"ه"
	],
	[
		[
			126565,
			126566
		],
		3
	],
	[
		126567,
		1,
		"ح"
	],
	[
		126568,
		1,
		"ط"
	],
	[
		126569,
		1,
		"ي"
	],
	[
		126570,
		1,
		"ك"
	],
	[
		126571,
		3
	],
	[
		126572,
		1,
		"م"
	],
	[
		126573,
		1,
		"ن"
	],
	[
		126574,
		1,
		"س"
	],
	[
		126575,
		1,
		"ع"
	],
	[
		126576,
		1,
		"ف"
	],
	[
		126577,
		1,
		"ص"
	],
	[
		126578,
		1,
		"ق"
	],
	[
		126579,
		3
	],
	[
		126580,
		1,
		"ش"
	],
	[
		126581,
		1,
		"ت"
	],
	[
		126582,
		1,
		"ث"
	],
	[
		126583,
		1,
		"خ"
	],
	[
		126584,
		3
	],
	[
		126585,
		1,
		"ض"
	],
	[
		126586,
		1,
		"ظ"
	],
	[
		126587,
		1,
		"غ"
	],
	[
		126588,
		1,
		"ٮ"
	],
	[
		126589,
		3
	],
	[
		126590,
		1,
		"ڡ"
	],
	[
		126591,
		3
	],
	[
		126592,
		1,
		"ا"
	],
	[
		126593,
		1,
		"ب"
	],
	[
		126594,
		1,
		"ج"
	],
	[
		126595,
		1,
		"د"
	],
	[
		126596,
		1,
		"ه"
	],
	[
		126597,
		1,
		"و"
	],
	[
		126598,
		1,
		"ز"
	],
	[
		126599,
		1,
		"ح"
	],
	[
		126600,
		1,
		"ط"
	],
	[
		126601,
		1,
		"ي"
	],
	[
		126602,
		3
	],
	[
		126603,
		1,
		"ل"
	],
	[
		126604,
		1,
		"م"
	],
	[
		126605,
		1,
		"ن"
	],
	[
		126606,
		1,
		"س"
	],
	[
		126607,
		1,
		"ع"
	],
	[
		126608,
		1,
		"ف"
	],
	[
		126609,
		1,
		"ص"
	],
	[
		126610,
		1,
		"ق"
	],
	[
		126611,
		1,
		"ر"
	],
	[
		126612,
		1,
		"ش"
	],
	[
		126613,
		1,
		"ت"
	],
	[
		126614,
		1,
		"ث"
	],
	[
		126615,
		1,
		"خ"
	],
	[
		126616,
		1,
		"ذ"
	],
	[
		126617,
		1,
		"ض"
	],
	[
		126618,
		1,
		"ظ"
	],
	[
		126619,
		1,
		"غ"
	],
	[
		[
			126620,
			126624
		],
		3
	],
	[
		126625,
		1,
		"ب"
	],
	[
		126626,
		1,
		"ج"
	],
	[
		126627,
		1,
		"د"
	],
	[
		126628,
		3
	],
	[
		126629,
		1,
		"و"
	],
	[
		126630,
		1,
		"ز"
	],
	[
		126631,
		1,
		"ح"
	],
	[
		126632,
		1,
		"ط"
	],
	[
		126633,
		1,
		"ي"
	],
	[
		126634,
		3
	],
	[
		126635,
		1,
		"ل"
	],
	[
		126636,
		1,
		"م"
	],
	[
		126637,
		1,
		"ن"
	],
	[
		126638,
		1,
		"س"
	],
	[
		126639,
		1,
		"ع"
	],
	[
		126640,
		1,
		"ف"
	],
	[
		126641,
		1,
		"ص"
	],
	[
		126642,
		1,
		"ق"
	],
	[
		126643,
		1,
		"ر"
	],
	[
		126644,
		1,
		"ش"
	],
	[
		126645,
		1,
		"ت"
	],
	[
		126646,
		1,
		"ث"
	],
	[
		126647,
		1,
		"خ"
	],
	[
		126648,
		1,
		"ذ"
	],
	[
		126649,
		1,
		"ض"
	],
	[
		126650,
		1,
		"ظ"
	],
	[
		126651,
		1,
		"غ"
	],
	[
		[
			126652,
			126703
		],
		3
	],
	[
		[
			126704,
			126705
		],
		2
	],
	[
		[
			126706,
			126975
		],
		3
	],
	[
		[
			126976,
			127019
		],
		2
	],
	[
		[
			127020,
			127023
		],
		3
	],
	[
		[
			127024,
			127123
		],
		2
	],
	[
		[
			127124,
			127135
		],
		3
	],
	[
		[
			127136,
			127150
		],
		2
	],
	[
		[
			127151,
			127152
		],
		3
	],
	[
		[
			127153,
			127166
		],
		2
	],
	[
		127167,
		2
	],
	[
		127168,
		3
	],
	[
		[
			127169,
			127183
		],
		2
	],
	[
		127184,
		3
	],
	[
		[
			127185,
			127199
		],
		2
	],
	[
		[
			127200,
			127221
		],
		2
	],
	[
		[
			127222,
			127231
		],
		3
	],
	[
		127232,
		3
	],
	[
		127233,
		5,
		"0,"
	],
	[
		127234,
		5,
		"1,"
	],
	[
		127235,
		5,
		"2,"
	],
	[
		127236,
		5,
		"3,"
	],
	[
		127237,
		5,
		"4,"
	],
	[
		127238,
		5,
		"5,"
	],
	[
		127239,
		5,
		"6,"
	],
	[
		127240,
		5,
		"7,"
	],
	[
		127241,
		5,
		"8,"
	],
	[
		127242,
		5,
		"9,"
	],
	[
		[
			127243,
			127244
		],
		2
	],
	[
		[
			127245,
			127247
		],
		2
	],
	[
		127248,
		5,
		"(a)"
	],
	[
		127249,
		5,
		"(b)"
	],
	[
		127250,
		5,
		"(c)"
	],
	[
		127251,
		5,
		"(d)"
	],
	[
		127252,
		5,
		"(e)"
	],
	[
		127253,
		5,
		"(f)"
	],
	[
		127254,
		5,
		"(g)"
	],
	[
		127255,
		5,
		"(h)"
	],
	[
		127256,
		5,
		"(i)"
	],
	[
		127257,
		5,
		"(j)"
	],
	[
		127258,
		5,
		"(k)"
	],
	[
		127259,
		5,
		"(l)"
	],
	[
		127260,
		5,
		"(m)"
	],
	[
		127261,
		5,
		"(n)"
	],
	[
		127262,
		5,
		"(o)"
	],
	[
		127263,
		5,
		"(p)"
	],
	[
		127264,
		5,
		"(q)"
	],
	[
		127265,
		5,
		"(r)"
	],
	[
		127266,
		5,
		"(s)"
	],
	[
		127267,
		5,
		"(t)"
	],
	[
		127268,
		5,
		"(u)"
	],
	[
		127269,
		5,
		"(v)"
	],
	[
		127270,
		5,
		"(w)"
	],
	[
		127271,
		5,
		"(x)"
	],
	[
		127272,
		5,
		"(y)"
	],
	[
		127273,
		5,
		"(z)"
	],
	[
		127274,
		1,
		"〔s〕"
	],
	[
		127275,
		1,
		"c"
	],
	[
		127276,
		1,
		"r"
	],
	[
		127277,
		1,
		"cd"
	],
	[
		127278,
		1,
		"wz"
	],
	[
		127279,
		2
	],
	[
		127280,
		1,
		"a"
	],
	[
		127281,
		1,
		"b"
	],
	[
		127282,
		1,
		"c"
	],
	[
		127283,
		1,
		"d"
	],
	[
		127284,
		1,
		"e"
	],
	[
		127285,
		1,
		"f"
	],
	[
		127286,
		1,
		"g"
	],
	[
		127287,
		1,
		"h"
	],
	[
		127288,
		1,
		"i"
	],
	[
		127289,
		1,
		"j"
	],
	[
		127290,
		1,
		"k"
	],
	[
		127291,
		1,
		"l"
	],
	[
		127292,
		1,
		"m"
	],
	[
		127293,
		1,
		"n"
	],
	[
		127294,
		1,
		"o"
	],
	[
		127295,
		1,
		"p"
	],
	[
		127296,
		1,
		"q"
	],
	[
		127297,
		1,
		"r"
	],
	[
		127298,
		1,
		"s"
	],
	[
		127299,
		1,
		"t"
	],
	[
		127300,
		1,
		"u"
	],
	[
		127301,
		1,
		"v"
	],
	[
		127302,
		1,
		"w"
	],
	[
		127303,
		1,
		"x"
	],
	[
		127304,
		1,
		"y"
	],
	[
		127305,
		1,
		"z"
	],
	[
		127306,
		1,
		"hv"
	],
	[
		127307,
		1,
		"mv"
	],
	[
		127308,
		1,
		"sd"
	],
	[
		127309,
		1,
		"ss"
	],
	[
		127310,
		1,
		"ppv"
	],
	[
		127311,
		1,
		"wc"
	],
	[
		[
			127312,
			127318
		],
		2
	],
	[
		127319,
		2
	],
	[
		[
			127320,
			127326
		],
		2
	],
	[
		127327,
		2
	],
	[
		[
			127328,
			127337
		],
		2
	],
	[
		127338,
		1,
		"mc"
	],
	[
		127339,
		1,
		"md"
	],
	[
		127340,
		1,
		"mr"
	],
	[
		[
			127341,
			127343
		],
		2
	],
	[
		[
			127344,
			127352
		],
		2
	],
	[
		127353,
		2
	],
	[
		127354,
		2
	],
	[
		[
			127355,
			127356
		],
		2
	],
	[
		[
			127357,
			127358
		],
		2
	],
	[
		127359,
		2
	],
	[
		[
			127360,
			127369
		],
		2
	],
	[
		[
			127370,
			127373
		],
		2
	],
	[
		[
			127374,
			127375
		],
		2
	],
	[
		127376,
		1,
		"dj"
	],
	[
		[
			127377,
			127386
		],
		2
	],
	[
		[
			127387,
			127404
		],
		2
	],
	[
		127405,
		2
	],
	[
		[
			127406,
			127461
		],
		3
	],
	[
		[
			127462,
			127487
		],
		2
	],
	[
		127488,
		1,
		"ほか"
	],
	[
		127489,
		1,
		"ココ"
	],
	[
		127490,
		1,
		"サ"
	],
	[
		[
			127491,
			127503
		],
		3
	],
	[
		127504,
		1,
		"手"
	],
	[
		127505,
		1,
		"字"
	],
	[
		127506,
		1,
		"双"
	],
	[
		127507,
		1,
		"デ"
	],
	[
		127508,
		1,
		"二"
	],
	[
		127509,
		1,
		"多"
	],
	[
		127510,
		1,
		"解"
	],
	[
		127511,
		1,
		"天"
	],
	[
		127512,
		1,
		"交"
	],
	[
		127513,
		1,
		"映"
	],
	[
		127514,
		1,
		"無"
	],
	[
		127515,
		1,
		"料"
	],
	[
		127516,
		1,
		"前"
	],
	[
		127517,
		1,
		"後"
	],
	[
		127518,
		1,
		"再"
	],
	[
		127519,
		1,
		"新"
	],
	[
		127520,
		1,
		"初"
	],
	[
		127521,
		1,
		"終"
	],
	[
		127522,
		1,
		"生"
	],
	[
		127523,
		1,
		"販"
	],
	[
		127524,
		1,
		"声"
	],
	[
		127525,
		1,
		"吹"
	],
	[
		127526,
		1,
		"演"
	],
	[
		127527,
		1,
		"投"
	],
	[
		127528,
		1,
		"捕"
	],
	[
		127529,
		1,
		"一"
	],
	[
		127530,
		1,
		"三"
	],
	[
		127531,
		1,
		"遊"
	],
	[
		127532,
		1,
		"左"
	],
	[
		127533,
		1,
		"中"
	],
	[
		127534,
		1,
		"右"
	],
	[
		127535,
		1,
		"指"
	],
	[
		127536,
		1,
		"走"
	],
	[
		127537,
		1,
		"打"
	],
	[
		127538,
		1,
		"禁"
	],
	[
		127539,
		1,
		"空"
	],
	[
		127540,
		1,
		"合"
	],
	[
		127541,
		1,
		"満"
	],
	[
		127542,
		1,
		"有"
	],
	[
		127543,
		1,
		"月"
	],
	[
		127544,
		1,
		"申"
	],
	[
		127545,
		1,
		"割"
	],
	[
		127546,
		1,
		"営"
	],
	[
		127547,
		1,
		"配"
	],
	[
		[
			127548,
			127551
		],
		3
	],
	[
		127552,
		1,
		"〔本〕"
	],
	[
		127553,
		1,
		"〔三〕"
	],
	[
		127554,
		1,
		"〔二〕"
	],
	[
		127555,
		1,
		"〔安〕"
	],
	[
		127556,
		1,
		"〔点〕"
	],
	[
		127557,
		1,
		"〔打〕"
	],
	[
		127558,
		1,
		"〔盗〕"
	],
	[
		127559,
		1,
		"〔勝〕"
	],
	[
		127560,
		1,
		"〔敗〕"
	],
	[
		[
			127561,
			127567
		],
		3
	],
	[
		127568,
		1,
		"得"
	],
	[
		127569,
		1,
		"可"
	],
	[
		[
			127570,
			127583
		],
		3
	],
	[
		[
			127584,
			127589
		],
		2
	],
	[
		[
			127590,
			127743
		],
		3
	],
	[
		[
			127744,
			127776
		],
		2
	],
	[
		[
			127777,
			127788
		],
		2
	],
	[
		[
			127789,
			127791
		],
		2
	],
	[
		[
			127792,
			127797
		],
		2
	],
	[
		127798,
		2
	],
	[
		[
			127799,
			127868
		],
		2
	],
	[
		127869,
		2
	],
	[
		[
			127870,
			127871
		],
		2
	],
	[
		[
			127872,
			127891
		],
		2
	],
	[
		[
			127892,
			127903
		],
		2
	],
	[
		[
			127904,
			127940
		],
		2
	],
	[
		127941,
		2
	],
	[
		[
			127942,
			127946
		],
		2
	],
	[
		[
			127947,
			127950
		],
		2
	],
	[
		[
			127951,
			127955
		],
		2
	],
	[
		[
			127956,
			127967
		],
		2
	],
	[
		[
			127968,
			127984
		],
		2
	],
	[
		[
			127985,
			127991
		],
		2
	],
	[
		[
			127992,
			127999
		],
		2
	],
	[
		[
			128000,
			128062
		],
		2
	],
	[
		128063,
		2
	],
	[
		128064,
		2
	],
	[
		128065,
		2
	],
	[
		[
			128066,
			128247
		],
		2
	],
	[
		128248,
		2
	],
	[
		[
			128249,
			128252
		],
		2
	],
	[
		[
			128253,
			128254
		],
		2
	],
	[
		128255,
		2
	],
	[
		[
			128256,
			128317
		],
		2
	],
	[
		[
			128318,
			128319
		],
		2
	],
	[
		[
			128320,
			128323
		],
		2
	],
	[
		[
			128324,
			128330
		],
		2
	],
	[
		[
			128331,
			128335
		],
		2
	],
	[
		[
			128336,
			128359
		],
		2
	],
	[
		[
			128360,
			128377
		],
		2
	],
	[
		128378,
		2
	],
	[
		[
			128379,
			128419
		],
		2
	],
	[
		128420,
		2
	],
	[
		[
			128421,
			128506
		],
		2
	],
	[
		[
			128507,
			128511
		],
		2
	],
	[
		128512,
		2
	],
	[
		[
			128513,
			128528
		],
		2
	],
	[
		128529,
		2
	],
	[
		[
			128530,
			128532
		],
		2
	],
	[
		128533,
		2
	],
	[
		128534,
		2
	],
	[
		128535,
		2
	],
	[
		128536,
		2
	],
	[
		128537,
		2
	],
	[
		128538,
		2
	],
	[
		128539,
		2
	],
	[
		[
			128540,
			128542
		],
		2
	],
	[
		128543,
		2
	],
	[
		[
			128544,
			128549
		],
		2
	],
	[
		[
			128550,
			128551
		],
		2
	],
	[
		[
			128552,
			128555
		],
		2
	],
	[
		128556,
		2
	],
	[
		128557,
		2
	],
	[
		[
			128558,
			128559
		],
		2
	],
	[
		[
			128560,
			128563
		],
		2
	],
	[
		128564,
		2
	],
	[
		[
			128565,
			128576
		],
		2
	],
	[
		[
			128577,
			128578
		],
		2
	],
	[
		[
			128579,
			128580
		],
		2
	],
	[
		[
			128581,
			128591
		],
		2
	],
	[
		[
			128592,
			128639
		],
		2
	],
	[
		[
			128640,
			128709
		],
		2
	],
	[
		[
			128710,
			128719
		],
		2
	],
	[
		128720,
		2
	],
	[
		[
			128721,
			128722
		],
		2
	],
	[
		[
			128723,
			128724
		],
		2
	],
	[
		128725,
		2
	],
	[
		[
			128726,
			128727
		],
		2
	],
	[
		[
			128728,
			128731
		],
		3
	],
	[
		128732,
		2
	],
	[
		[
			128733,
			128735
		],
		2
	],
	[
		[
			128736,
			128748
		],
		2
	],
	[
		[
			128749,
			128751
		],
		3
	],
	[
		[
			128752,
			128755
		],
		2
	],
	[
		[
			128756,
			128758
		],
		2
	],
	[
		[
			128759,
			128760
		],
		2
	],
	[
		128761,
		2
	],
	[
		128762,
		2
	],
	[
		[
			128763,
			128764
		],
		2
	],
	[
		[
			128765,
			128767
		],
		3
	],
	[
		[
			128768,
			128883
		],
		2
	],
	[
		[
			128884,
			128886
		],
		2
	],
	[
		[
			128887,
			128890
		],
		3
	],
	[
		[
			128891,
			128895
		],
		2
	],
	[
		[
			128896,
			128980
		],
		2
	],
	[
		[
			128981,
			128984
		],
		2
	],
	[
		128985,
		2
	],
	[
		[
			128986,
			128991
		],
		3
	],
	[
		[
			128992,
			129003
		],
		2
	],
	[
		[
			129004,
			129007
		],
		3
	],
	[
		129008,
		2
	],
	[
		[
			129009,
			129023
		],
		3
	],
	[
		[
			129024,
			129035
		],
		2
	],
	[
		[
			129036,
			129039
		],
		3
	],
	[
		[
			129040,
			129095
		],
		2
	],
	[
		[
			129096,
			129103
		],
		3
	],
	[
		[
			129104,
			129113
		],
		2
	],
	[
		[
			129114,
			129119
		],
		3
	],
	[
		[
			129120,
			129159
		],
		2
	],
	[
		[
			129160,
			129167
		],
		3
	],
	[
		[
			129168,
			129197
		],
		2
	],
	[
		[
			129198,
			129199
		],
		3
	],
	[
		[
			129200,
			129201
		],
		2
	],
	[
		[
			129202,
			129279
		],
		3
	],
	[
		[
			129280,
			129291
		],
		2
	],
	[
		129292,
		2
	],
	[
		[
			129293,
			129295
		],
		2
	],
	[
		[
			129296,
			129304
		],
		2
	],
	[
		[
			129305,
			129310
		],
		2
	],
	[
		129311,
		2
	],
	[
		[
			129312,
			129319
		],
		2
	],
	[
		[
			129320,
			129327
		],
		2
	],
	[
		129328,
		2
	],
	[
		[
			129329,
			129330
		],
		2
	],
	[
		[
			129331,
			129342
		],
		2
	],
	[
		129343,
		2
	],
	[
		[
			129344,
			129355
		],
		2
	],
	[
		129356,
		2
	],
	[
		[
			129357,
			129359
		],
		2
	],
	[
		[
			129360,
			129374
		],
		2
	],
	[
		[
			129375,
			129387
		],
		2
	],
	[
		[
			129388,
			129392
		],
		2
	],
	[
		129393,
		2
	],
	[
		129394,
		2
	],
	[
		[
			129395,
			129398
		],
		2
	],
	[
		[
			129399,
			129400
		],
		2
	],
	[
		129401,
		2
	],
	[
		129402,
		2
	],
	[
		129403,
		2
	],
	[
		[
			129404,
			129407
		],
		2
	],
	[
		[
			129408,
			129412
		],
		2
	],
	[
		[
			129413,
			129425
		],
		2
	],
	[
		[
			129426,
			129431
		],
		2
	],
	[
		[
			129432,
			129442
		],
		2
	],
	[
		[
			129443,
			129444
		],
		2
	],
	[
		[
			129445,
			129450
		],
		2
	],
	[
		[
			129451,
			129453
		],
		2
	],
	[
		[
			129454,
			129455
		],
		2
	],
	[
		[
			129456,
			129465
		],
		2
	],
	[
		[
			129466,
			129471
		],
		2
	],
	[
		129472,
		2
	],
	[
		[
			129473,
			129474
		],
		2
	],
	[
		[
			129475,
			129482
		],
		2
	],
	[
		129483,
		2
	],
	[
		129484,
		2
	],
	[
		[
			129485,
			129487
		],
		2
	],
	[
		[
			129488,
			129510
		],
		2
	],
	[
		[
			129511,
			129535
		],
		2
	],
	[
		[
			129536,
			129619
		],
		2
	],
	[
		[
			129620,
			129631
		],
		3
	],
	[
		[
			129632,
			129645
		],
		2
	],
	[
		[
			129646,
			129647
		],
		3
	],
	[
		[
			129648,
			129651
		],
		2
	],
	[
		129652,
		2
	],
	[
		[
			129653,
			129655
		],
		2
	],
	[
		[
			129656,
			129658
		],
		2
	],
	[
		[
			129659,
			129660
		],
		2
	],
	[
		[
			129661,
			129663
		],
		3
	],
	[
		[
			129664,
			129666
		],
		2
	],
	[
		[
			129667,
			129670
		],
		2
	],
	[
		[
			129671,
			129672
		],
		2
	],
	[
		[
			129673,
			129679
		],
		3
	],
	[
		[
			129680,
			129685
		],
		2
	],
	[
		[
			129686,
			129704
		],
		2
	],
	[
		[
			129705,
			129708
		],
		2
	],
	[
		[
			129709,
			129711
		],
		2
	],
	[
		[
			129712,
			129718
		],
		2
	],
	[
		[
			129719,
			129722
		],
		2
	],
	[
		[
			129723,
			129725
		],
		2
	],
	[
		129726,
		3
	],
	[
		129727,
		2
	],
	[
		[
			129728,
			129730
		],
		2
	],
	[
		[
			129731,
			129733
		],
		2
	],
	[
		[
			129734,
			129741
		],
		3
	],
	[
		[
			129742,
			129743
		],
		2
	],
	[
		[
			129744,
			129750
		],
		2
	],
	[
		[
			129751,
			129753
		],
		2
	],
	[
		[
			129754,
			129755
		],
		2
	],
	[
		[
			129756,
			129759
		],
		3
	],
	[
		[
			129760,
			129767
		],
		2
	],
	[
		129768,
		2
	],
	[
		[
			129769,
			129775
		],
		3
	],
	[
		[
			129776,
			129782
		],
		2
	],
	[
		[
			129783,
			129784
		],
		2
	],
	[
		[
			129785,
			129791
		],
		3
	],
	[
		[
			129792,
			129938
		],
		2
	],
	[
		129939,
		3
	],
	[
		[
			129940,
			129994
		],
		2
	],
	[
		[
			129995,
			130031
		],
		3
	],
	[
		130032,
		1,
		"0"
	],
	[
		130033,
		1,
		"1"
	],
	[
		130034,
		1,
		"2"
	],
	[
		130035,
		1,
		"3"
	],
	[
		130036,
		1,
		"4"
	],
	[
		130037,
		1,
		"5"
	],
	[
		130038,
		1,
		"6"
	],
	[
		130039,
		1,
		"7"
	],
	[
		130040,
		1,
		"8"
	],
	[
		130041,
		1,
		"9"
	],
	[
		[
			130042,
			131069
		],
		3
	],
	[
		[
			131070,
			131071
		],
		3
	],
	[
		[
			131072,
			173782
		],
		2
	],
	[
		[
			173783,
			173789
		],
		2
	],
	[
		[
			173790,
			173791
		],
		2
	],
	[
		[
			173792,
			173823
		],
		3
	],
	[
		[
			173824,
			177972
		],
		2
	],
	[
		[
			177973,
			177976
		],
		2
	],
	[
		177977,
		2
	],
	[
		[
			177978,
			177983
		],
		3
	],
	[
		[
			177984,
			178205
		],
		2
	],
	[
		[
			178206,
			178207
		],
		3
	],
	[
		[
			178208,
			183969
		],
		2
	],
	[
		[
			183970,
			183983
		],
		3
	],
	[
		[
			183984,
			191456
		],
		2
	],
	[
		[
			191457,
			191471
		],
		3
	],
	[
		[
			191472,
			192093
		],
		2
	],
	[
		[
			192094,
			194559
		],
		3
	],
	[
		194560,
		1,
		"丽"
	],
	[
		194561,
		1,
		"丸"
	],
	[
		194562,
		1,
		"乁"
	],
	[
		194563,
		1,
		"𠄢"
	],
	[
		194564,
		1,
		"你"
	],
	[
		194565,
		1,
		"侮"
	],
	[
		194566,
		1,
		"侻"
	],
	[
		194567,
		1,
		"倂"
	],
	[
		194568,
		1,
		"偺"
	],
	[
		194569,
		1,
		"備"
	],
	[
		194570,
		1,
		"僧"
	],
	[
		194571,
		1,
		"像"
	],
	[
		194572,
		1,
		"㒞"
	],
	[
		194573,
		1,
		"𠘺"
	],
	[
		194574,
		1,
		"免"
	],
	[
		194575,
		1,
		"兔"
	],
	[
		194576,
		1,
		"兤"
	],
	[
		194577,
		1,
		"具"
	],
	[
		194578,
		1,
		"𠔜"
	],
	[
		194579,
		1,
		"㒹"
	],
	[
		194580,
		1,
		"內"
	],
	[
		194581,
		1,
		"再"
	],
	[
		194582,
		1,
		"𠕋"
	],
	[
		194583,
		1,
		"冗"
	],
	[
		194584,
		1,
		"冤"
	],
	[
		194585,
		1,
		"仌"
	],
	[
		194586,
		1,
		"冬"
	],
	[
		194587,
		1,
		"况"
	],
	[
		194588,
		1,
		"𩇟"
	],
	[
		194589,
		1,
		"凵"
	],
	[
		194590,
		1,
		"刃"
	],
	[
		194591,
		1,
		"㓟"
	],
	[
		194592,
		1,
		"刻"
	],
	[
		194593,
		1,
		"剆"
	],
	[
		194594,
		1,
		"割"
	],
	[
		194595,
		1,
		"剷"
	],
	[
		194596,
		1,
		"㔕"
	],
	[
		194597,
		1,
		"勇"
	],
	[
		194598,
		1,
		"勉"
	],
	[
		194599,
		1,
		"勤"
	],
	[
		194600,
		1,
		"勺"
	],
	[
		194601,
		1,
		"包"
	],
	[
		194602,
		1,
		"匆"
	],
	[
		194603,
		1,
		"北"
	],
	[
		194604,
		1,
		"卉"
	],
	[
		194605,
		1,
		"卑"
	],
	[
		194606,
		1,
		"博"
	],
	[
		194607,
		1,
		"即"
	],
	[
		194608,
		1,
		"卽"
	],
	[
		[
			194609,
			194611
		],
		1,
		"卿"
	],
	[
		194612,
		1,
		"𠨬"
	],
	[
		194613,
		1,
		"灰"
	],
	[
		194614,
		1,
		"及"
	],
	[
		194615,
		1,
		"叟"
	],
	[
		194616,
		1,
		"𠭣"
	],
	[
		194617,
		1,
		"叫"
	],
	[
		194618,
		1,
		"叱"
	],
	[
		194619,
		1,
		"吆"
	],
	[
		194620,
		1,
		"咞"
	],
	[
		194621,
		1,
		"吸"
	],
	[
		194622,
		1,
		"呈"
	],
	[
		194623,
		1,
		"周"
	],
	[
		194624,
		1,
		"咢"
	],
	[
		194625,
		1,
		"哶"
	],
	[
		194626,
		1,
		"唐"
	],
	[
		194627,
		1,
		"啓"
	],
	[
		194628,
		1,
		"啣"
	],
	[
		[
			194629,
			194630
		],
		1,
		"善"
	],
	[
		194631,
		1,
		"喙"
	],
	[
		194632,
		1,
		"喫"
	],
	[
		194633,
		1,
		"喳"
	],
	[
		194634,
		1,
		"嗂"
	],
	[
		194635,
		1,
		"圖"
	],
	[
		194636,
		1,
		"嘆"
	],
	[
		194637,
		1,
		"圗"
	],
	[
		194638,
		1,
		"噑"
	],
	[
		194639,
		1,
		"噴"
	],
	[
		194640,
		1,
		"切"
	],
	[
		194641,
		1,
		"壮"
	],
	[
		194642,
		1,
		"城"
	],
	[
		194643,
		1,
		"埴"
	],
	[
		194644,
		1,
		"堍"
	],
	[
		194645,
		1,
		"型"
	],
	[
		194646,
		1,
		"堲"
	],
	[
		194647,
		1,
		"報"
	],
	[
		194648,
		1,
		"墬"
	],
	[
		194649,
		1,
		"𡓤"
	],
	[
		194650,
		1,
		"売"
	],
	[
		194651,
		1,
		"壷"
	],
	[
		194652,
		1,
		"夆"
	],
	[
		194653,
		1,
		"多"
	],
	[
		194654,
		1,
		"夢"
	],
	[
		194655,
		1,
		"奢"
	],
	[
		194656,
		1,
		"𡚨"
	],
	[
		194657,
		1,
		"𡛪"
	],
	[
		194658,
		1,
		"姬"
	],
	[
		194659,
		1,
		"娛"
	],
	[
		194660,
		1,
		"娧"
	],
	[
		194661,
		1,
		"姘"
	],
	[
		194662,
		1,
		"婦"
	],
	[
		194663,
		1,
		"㛮"
	],
	[
		194664,
		3
	],
	[
		194665,
		1,
		"嬈"
	],
	[
		[
			194666,
			194667
		],
		1,
		"嬾"
	],
	[
		194668,
		1,
		"𡧈"
	],
	[
		194669,
		1,
		"寃"
	],
	[
		194670,
		1,
		"寘"
	],
	[
		194671,
		1,
		"寧"
	],
	[
		194672,
		1,
		"寳"
	],
	[
		194673,
		1,
		"𡬘"
	],
	[
		194674,
		1,
		"寿"
	],
	[
		194675,
		1,
		"将"
	],
	[
		194676,
		3
	],
	[
		194677,
		1,
		"尢"
	],
	[
		194678,
		1,
		"㞁"
	],
	[
		194679,
		1,
		"屠"
	],
	[
		194680,
		1,
		"屮"
	],
	[
		194681,
		1,
		"峀"
	],
	[
		194682,
		1,
		"岍"
	],
	[
		194683,
		1,
		"𡷤"
	],
	[
		194684,
		1,
		"嵃"
	],
	[
		194685,
		1,
		"𡷦"
	],
	[
		194686,
		1,
		"嵮"
	],
	[
		194687,
		1,
		"嵫"
	],
	[
		194688,
		1,
		"嵼"
	],
	[
		194689,
		1,
		"巡"
	],
	[
		194690,
		1,
		"巢"
	],
	[
		194691,
		1,
		"㠯"
	],
	[
		194692,
		1,
		"巽"
	],
	[
		194693,
		1,
		"帨"
	],
	[
		194694,
		1,
		"帽"
	],
	[
		194695,
		1,
		"幩"
	],
	[
		194696,
		1,
		"㡢"
	],
	[
		194697,
		1,
		"𢆃"
	],
	[
		194698,
		1,
		"㡼"
	],
	[
		194699,
		1,
		"庰"
	],
	[
		194700,
		1,
		"庳"
	],
	[
		194701,
		1,
		"庶"
	],
	[
		194702,
		1,
		"廊"
	],
	[
		194703,
		1,
		"𪎒"
	],
	[
		194704,
		1,
		"廾"
	],
	[
		[
			194705,
			194706
		],
		1,
		"𢌱"
	],
	[
		194707,
		1,
		"舁"
	],
	[
		[
			194708,
			194709
		],
		1,
		"弢"
	],
	[
		194710,
		1,
		"㣇"
	],
	[
		194711,
		1,
		"𣊸"
	],
	[
		194712,
		1,
		"𦇚"
	],
	[
		194713,
		1,
		"形"
	],
	[
		194714,
		1,
		"彫"
	],
	[
		194715,
		1,
		"㣣"
	],
	[
		194716,
		1,
		"徚"
	],
	[
		194717,
		1,
		"忍"
	],
	[
		194718,
		1,
		"志"
	],
	[
		194719,
		1,
		"忹"
	],
	[
		194720,
		1,
		"悁"
	],
	[
		194721,
		1,
		"㤺"
	],
	[
		194722,
		1,
		"㤜"
	],
	[
		194723,
		1,
		"悔"
	],
	[
		194724,
		1,
		"𢛔"
	],
	[
		194725,
		1,
		"惇"
	],
	[
		194726,
		1,
		"慈"
	],
	[
		194727,
		1,
		"慌"
	],
	[
		194728,
		1,
		"慎"
	],
	[
		194729,
		1,
		"慌"
	],
	[
		194730,
		1,
		"慺"
	],
	[
		194731,
		1,
		"憎"
	],
	[
		194732,
		1,
		"憲"
	],
	[
		194733,
		1,
		"憤"
	],
	[
		194734,
		1,
		"憯"
	],
	[
		194735,
		1,
		"懞"
	],
	[
		194736,
		1,
		"懲"
	],
	[
		194737,
		1,
		"懶"
	],
	[
		194738,
		1,
		"成"
	],
	[
		194739,
		1,
		"戛"
	],
	[
		194740,
		1,
		"扝"
	],
	[
		194741,
		1,
		"抱"
	],
	[
		194742,
		1,
		"拔"
	],
	[
		194743,
		1,
		"捐"
	],
	[
		194744,
		1,
		"𢬌"
	],
	[
		194745,
		1,
		"挽"
	],
	[
		194746,
		1,
		"拼"
	],
	[
		194747,
		1,
		"捨"
	],
	[
		194748,
		1,
		"掃"
	],
	[
		194749,
		1,
		"揤"
	],
	[
		194750,
		1,
		"𢯱"
	],
	[
		194751,
		1,
		"搢"
	],
	[
		194752,
		1,
		"揅"
	],
	[
		194753,
		1,
		"掩"
	],
	[
		194754,
		1,
		"㨮"
	],
	[
		194755,
		1,
		"摩"
	],
	[
		194756,
		1,
		"摾"
	],
	[
		194757,
		1,
		"撝"
	],
	[
		194758,
		1,
		"摷"
	],
	[
		194759,
		1,
		"㩬"
	],
	[
		194760,
		1,
		"敏"
	],
	[
		194761,
		1,
		"敬"
	],
	[
		194762,
		1,
		"𣀊"
	],
	[
		194763,
		1,
		"旣"
	],
	[
		194764,
		1,
		"書"
	],
	[
		194765,
		1,
		"晉"
	],
	[
		194766,
		1,
		"㬙"
	],
	[
		194767,
		1,
		"暑"
	],
	[
		194768,
		1,
		"㬈"
	],
	[
		194769,
		1,
		"㫤"
	],
	[
		194770,
		1,
		"冒"
	],
	[
		194771,
		1,
		"冕"
	],
	[
		194772,
		1,
		"最"
	],
	[
		194773,
		1,
		"暜"
	],
	[
		194774,
		1,
		"肭"
	],
	[
		194775,
		1,
		"䏙"
	],
	[
		194776,
		1,
		"朗"
	],
	[
		194777,
		1,
		"望"
	],
	[
		194778,
		1,
		"朡"
	],
	[
		194779,
		1,
		"杞"
	],
	[
		194780,
		1,
		"杓"
	],
	[
		194781,
		1,
		"𣏃"
	],
	[
		194782,
		1,
		"㭉"
	],
	[
		194783,
		1,
		"柺"
	],
	[
		194784,
		1,
		"枅"
	],
	[
		194785,
		1,
		"桒"
	],
	[
		194786,
		1,
		"梅"
	],
	[
		194787,
		1,
		"𣑭"
	],
	[
		194788,
		1,
		"梎"
	],
	[
		194789,
		1,
		"栟"
	],
	[
		194790,
		1,
		"椔"
	],
	[
		194791,
		1,
		"㮝"
	],
	[
		194792,
		1,
		"楂"
	],
	[
		194793,
		1,
		"榣"
	],
	[
		194794,
		1,
		"槪"
	],
	[
		194795,
		1,
		"檨"
	],
	[
		194796,
		1,
		"𣚣"
	],
	[
		194797,
		1,
		"櫛"
	],
	[
		194798,
		1,
		"㰘"
	],
	[
		194799,
		1,
		"次"
	],
	[
		194800,
		1,
		"𣢧"
	],
	[
		194801,
		1,
		"歔"
	],
	[
		194802,
		1,
		"㱎"
	],
	[
		194803,
		1,
		"歲"
	],
	[
		194804,
		1,
		"殟"
	],
	[
		194805,
		1,
		"殺"
	],
	[
		194806,
		1,
		"殻"
	],
	[
		194807,
		1,
		"𣪍"
	],
	[
		194808,
		1,
		"𡴋"
	],
	[
		194809,
		1,
		"𣫺"
	],
	[
		194810,
		1,
		"汎"
	],
	[
		194811,
		1,
		"𣲼"
	],
	[
		194812,
		1,
		"沿"
	],
	[
		194813,
		1,
		"泍"
	],
	[
		194814,
		1,
		"汧"
	],
	[
		194815,
		1,
		"洖"
	],
	[
		194816,
		1,
		"派"
	],
	[
		194817,
		1,
		"海"
	],
	[
		194818,
		1,
		"流"
	],
	[
		194819,
		1,
		"浩"
	],
	[
		194820,
		1,
		"浸"
	],
	[
		194821,
		1,
		"涅"
	],
	[
		194822,
		1,
		"𣴞"
	],
	[
		194823,
		1,
		"洴"
	],
	[
		194824,
		1,
		"港"
	],
	[
		194825,
		1,
		"湮"
	],
	[
		194826,
		1,
		"㴳"
	],
	[
		194827,
		1,
		"滋"
	],
	[
		194828,
		1,
		"滇"
	],
	[
		194829,
		1,
		"𣻑"
	],
	[
		194830,
		1,
		"淹"
	],
	[
		194831,
		1,
		"潮"
	],
	[
		194832,
		1,
		"𣽞"
	],
	[
		194833,
		1,
		"𣾎"
	],
	[
		194834,
		1,
		"濆"
	],
	[
		194835,
		1,
		"瀹"
	],
	[
		194836,
		1,
		"瀞"
	],
	[
		194837,
		1,
		"瀛"
	],
	[
		194838,
		1,
		"㶖"
	],
	[
		194839,
		1,
		"灊"
	],
	[
		194840,
		1,
		"災"
	],
	[
		194841,
		1,
		"灷"
	],
	[
		194842,
		1,
		"炭"
	],
	[
		194843,
		1,
		"𠔥"
	],
	[
		194844,
		1,
		"煅"
	],
	[
		194845,
		1,
		"𤉣"
	],
	[
		194846,
		1,
		"熜"
	],
	[
		194847,
		3
	],
	[
		194848,
		1,
		"爨"
	],
	[
		194849,
		1,
		"爵"
	],
	[
		194850,
		1,
		"牐"
	],
	[
		194851,
		1,
		"𤘈"
	],
	[
		194852,
		1,
		"犀"
	],
	[
		194853,
		1,
		"犕"
	],
	[
		194854,
		1,
		"𤜵"
	],
	[
		194855,
		1,
		"𤠔"
	],
	[
		194856,
		1,
		"獺"
	],
	[
		194857,
		1,
		"王"
	],
	[
		194858,
		1,
		"㺬"
	],
	[
		194859,
		1,
		"玥"
	],
	[
		[
			194860,
			194861
		],
		1,
		"㺸"
	],
	[
		194862,
		1,
		"瑇"
	],
	[
		194863,
		1,
		"瑜"
	],
	[
		194864,
		1,
		"瑱"
	],
	[
		194865,
		1,
		"璅"
	],
	[
		194866,
		1,
		"瓊"
	],
	[
		194867,
		1,
		"㼛"
	],
	[
		194868,
		1,
		"甤"
	],
	[
		194869,
		1,
		"𤰶"
	],
	[
		194870,
		1,
		"甾"
	],
	[
		194871,
		1,
		"𤲒"
	],
	[
		194872,
		1,
		"異"
	],
	[
		194873,
		1,
		"𢆟"
	],
	[
		194874,
		1,
		"瘐"
	],
	[
		194875,
		1,
		"𤾡"
	],
	[
		194876,
		1,
		"𤾸"
	],
	[
		194877,
		1,
		"𥁄"
	],
	[
		194878,
		1,
		"㿼"
	],
	[
		194879,
		1,
		"䀈"
	],
	[
		194880,
		1,
		"直"
	],
	[
		194881,
		1,
		"𥃳"
	],
	[
		194882,
		1,
		"𥃲"
	],
	[
		194883,
		1,
		"𥄙"
	],
	[
		194884,
		1,
		"𥄳"
	],
	[
		194885,
		1,
		"眞"
	],
	[
		[
			194886,
			194887
		],
		1,
		"真"
	],
	[
		194888,
		1,
		"睊"
	],
	[
		194889,
		1,
		"䀹"
	],
	[
		194890,
		1,
		"瞋"
	],
	[
		194891,
		1,
		"䁆"
	],
	[
		194892,
		1,
		"䂖"
	],
	[
		194893,
		1,
		"𥐝"
	],
	[
		194894,
		1,
		"硎"
	],
	[
		194895,
		1,
		"碌"
	],
	[
		194896,
		1,
		"磌"
	],
	[
		194897,
		1,
		"䃣"
	],
	[
		194898,
		1,
		"𥘦"
	],
	[
		194899,
		1,
		"祖"
	],
	[
		194900,
		1,
		"𥚚"
	],
	[
		194901,
		1,
		"𥛅"
	],
	[
		194902,
		1,
		"福"
	],
	[
		194903,
		1,
		"秫"
	],
	[
		194904,
		1,
		"䄯"
	],
	[
		194905,
		1,
		"穀"
	],
	[
		194906,
		1,
		"穊"
	],
	[
		194907,
		1,
		"穏"
	],
	[
		194908,
		1,
		"𥥼"
	],
	[
		[
			194909,
			194910
		],
		1,
		"𥪧"
	],
	[
		194911,
		3
	],
	[
		194912,
		1,
		"䈂"
	],
	[
		194913,
		1,
		"𥮫"
	],
	[
		194914,
		1,
		"篆"
	],
	[
		194915,
		1,
		"築"
	],
	[
		194916,
		1,
		"䈧"
	],
	[
		194917,
		1,
		"𥲀"
	],
	[
		194918,
		1,
		"糒"
	],
	[
		194919,
		1,
		"䊠"
	],
	[
		194920,
		1,
		"糨"
	],
	[
		194921,
		1,
		"糣"
	],
	[
		194922,
		1,
		"紀"
	],
	[
		194923,
		1,
		"𥾆"
	],
	[
		194924,
		1,
		"絣"
	],
	[
		194925,
		1,
		"䌁"
	],
	[
		194926,
		1,
		"緇"
	],
	[
		194927,
		1,
		"縂"
	],
	[
		194928,
		1,
		"繅"
	],
	[
		194929,
		1,
		"䌴"
	],
	[
		194930,
		1,
		"𦈨"
	],
	[
		194931,
		1,
		"𦉇"
	],
	[
		194932,
		1,
		"䍙"
	],
	[
		194933,
		1,
		"𦋙"
	],
	[
		194934,
		1,
		"罺"
	],
	[
		194935,
		1,
		"𦌾"
	],
	[
		194936,
		1,
		"羕"
	],
	[
		194937,
		1,
		"翺"
	],
	[
		194938,
		1,
		"者"
	],
	[
		194939,
		1,
		"𦓚"
	],
	[
		194940,
		1,
		"𦔣"
	],
	[
		194941,
		1,
		"聠"
	],
	[
		194942,
		1,
		"𦖨"
	],
	[
		194943,
		1,
		"聰"
	],
	[
		194944,
		1,
		"𣍟"
	],
	[
		194945,
		1,
		"䏕"
	],
	[
		194946,
		1,
		"育"
	],
	[
		194947,
		1,
		"脃"
	],
	[
		194948,
		1,
		"䐋"
	],
	[
		194949,
		1,
		"脾"
	],
	[
		194950,
		1,
		"媵"
	],
	[
		194951,
		1,
		"𦞧"
	],
	[
		194952,
		1,
		"𦞵"
	],
	[
		194953,
		1,
		"𣎓"
	],
	[
		194954,
		1,
		"𣎜"
	],
	[
		194955,
		1,
		"舁"
	],
	[
		194956,
		1,
		"舄"
	],
	[
		194957,
		1,
		"辞"
	],
	[
		194958,
		1,
		"䑫"
	],
	[
		194959,
		1,
		"芑"
	],
	[
		194960,
		1,
		"芋"
	],
	[
		194961,
		1,
		"芝"
	],
	[
		194962,
		1,
		"劳"
	],
	[
		194963,
		1,
		"花"
	],
	[
		194964,
		1,
		"芳"
	],
	[
		194965,
		1,
		"芽"
	],
	[
		194966,
		1,
		"苦"
	],
	[
		194967,
		1,
		"𦬼"
	],
	[
		194968,
		1,
		"若"
	],
	[
		194969,
		1,
		"茝"
	],
	[
		194970,
		1,
		"荣"
	],
	[
		194971,
		1,
		"莭"
	],
	[
		194972,
		1,
		"茣"
	],
	[
		194973,
		1,
		"莽"
	],
	[
		194974,
		1,
		"菧"
	],
	[
		194975,
		1,
		"著"
	],
	[
		194976,
		1,
		"荓"
	],
	[
		194977,
		1,
		"菊"
	],
	[
		194978,
		1,
		"菌"
	],
	[
		194979,
		1,
		"菜"
	],
	[
		194980,
		1,
		"𦰶"
	],
	[
		194981,
		1,
		"𦵫"
	],
	[
		194982,
		1,
		"𦳕"
	],
	[
		194983,
		1,
		"䔫"
	],
	[
		194984,
		1,
		"蓱"
	],
	[
		194985,
		1,
		"蓳"
	],
	[
		194986,
		1,
		"蔖"
	],
	[
		194987,
		1,
		"𧏊"
	],
	[
		194988,
		1,
		"蕤"
	],
	[
		194989,
		1,
		"𦼬"
	],
	[
		194990,
		1,
		"䕝"
	],
	[
		194991,
		1,
		"䕡"
	],
	[
		194992,
		1,
		"𦾱"
	],
	[
		194993,
		1,
		"𧃒"
	],
	[
		194994,
		1,
		"䕫"
	],
	[
		194995,
		1,
		"虐"
	],
	[
		194996,
		1,
		"虜"
	],
	[
		194997,
		1,
		"虧"
	],
	[
		194998,
		1,
		"虩"
	],
	[
		194999,
		1,
		"蚩"
	],
	[
		195000,
		1,
		"蚈"
	],
	[
		195001,
		1,
		"蜎"
	],
	[
		195002,
		1,
		"蛢"
	],
	[
		195003,
		1,
		"蝹"
	],
	[
		195004,
		1,
		"蜨"
	],
	[
		195005,
		1,
		"蝫"
	],
	[
		195006,
		1,
		"螆"
	],
	[
		195007,
		3
	],
	[
		195008,
		1,
		"蟡"
	],
	[
		195009,
		1,
		"蠁"
	],
	[
		195010,
		1,
		"䗹"
	],
	[
		195011,
		1,
		"衠"
	],
	[
		195012,
		1,
		"衣"
	],
	[
		195013,
		1,
		"𧙧"
	],
	[
		195014,
		1,
		"裗"
	],
	[
		195015,
		1,
		"裞"
	],
	[
		195016,
		1,
		"䘵"
	],
	[
		195017,
		1,
		"裺"
	],
	[
		195018,
		1,
		"㒻"
	],
	[
		195019,
		1,
		"𧢮"
	],
	[
		195020,
		1,
		"𧥦"
	],
	[
		195021,
		1,
		"䚾"
	],
	[
		195022,
		1,
		"䛇"
	],
	[
		195023,
		1,
		"誠"
	],
	[
		195024,
		1,
		"諭"
	],
	[
		195025,
		1,
		"變"
	],
	[
		195026,
		1,
		"豕"
	],
	[
		195027,
		1,
		"𧲨"
	],
	[
		195028,
		1,
		"貫"
	],
	[
		195029,
		1,
		"賁"
	],
	[
		195030,
		1,
		"贛"
	],
	[
		195031,
		1,
		"起"
	],
	[
		195032,
		1,
		"𧼯"
	],
	[
		195033,
		1,
		"𠠄"
	],
	[
		195034,
		1,
		"跋"
	],
	[
		195035,
		1,
		"趼"
	],
	[
		195036,
		1,
		"跰"
	],
	[
		195037,
		1,
		"𠣞"
	],
	[
		195038,
		1,
		"軔"
	],
	[
		195039,
		1,
		"輸"
	],
	[
		195040,
		1,
		"𨗒"
	],
	[
		195041,
		1,
		"𨗭"
	],
	[
		195042,
		1,
		"邔"
	],
	[
		195043,
		1,
		"郱"
	],
	[
		195044,
		1,
		"鄑"
	],
	[
		195045,
		1,
		"𨜮"
	],
	[
		195046,
		1,
		"鄛"
	],
	[
		195047,
		1,
		"鈸"
	],
	[
		195048,
		1,
		"鋗"
	],
	[
		195049,
		1,
		"鋘"
	],
	[
		195050,
		1,
		"鉼"
	],
	[
		195051,
		1,
		"鏹"
	],
	[
		195052,
		1,
		"鐕"
	],
	[
		195053,
		1,
		"𨯺"
	],
	[
		195054,
		1,
		"開"
	],
	[
		195055,
		1,
		"䦕"
	],
	[
		195056,
		1,
		"閷"
	],
	[
		195057,
		1,
		"𨵷"
	],
	[
		195058,
		1,
		"䧦"
	],
	[
		195059,
		1,
		"雃"
	],
	[
		195060,
		1,
		"嶲"
	],
	[
		195061,
		1,
		"霣"
	],
	[
		195062,
		1,
		"𩅅"
	],
	[
		195063,
		1,
		"𩈚"
	],
	[
		195064,
		1,
		"䩮"
	],
	[
		195065,
		1,
		"䩶"
	],
	[
		195066,
		1,
		"韠"
	],
	[
		195067,
		1,
		"𩐊"
	],
	[
		195068,
		1,
		"䪲"
	],
	[
		195069,
		1,
		"𩒖"
	],
	[
		[
			195070,
			195071
		],
		1,
		"頋"
	],
	[
		195072,
		1,
		"頩"
	],
	[
		195073,
		1,
		"𩖶"
	],
	[
		195074,
		1,
		"飢"
	],
	[
		195075,
		1,
		"䬳"
	],
	[
		195076,
		1,
		"餩"
	],
	[
		195077,
		1,
		"馧"
	],
	[
		195078,
		1,
		"駂"
	],
	[
		195079,
		1,
		"駾"
	],
	[
		195080,
		1,
		"䯎"
	],
	[
		195081,
		1,
		"𩬰"
	],
	[
		195082,
		1,
		"鬒"
	],
	[
		195083,
		1,
		"鱀"
	],
	[
		195084,
		1,
		"鳽"
	],
	[
		195085,
		1,
		"䳎"
	],
	[
		195086,
		1,
		"䳭"
	],
	[
		195087,
		1,
		"鵧"
	],
	[
		195088,
		1,
		"𪃎"
	],
	[
		195089,
		1,
		"䳸"
	],
	[
		195090,
		1,
		"𪄅"
	],
	[
		195091,
		1,
		"𪈎"
	],
	[
		195092,
		1,
		"𪊑"
	],
	[
		195093,
		1,
		"麻"
	],
	[
		195094,
		1,
		"䵖"
	],
	[
		195095,
		1,
		"黹"
	],
	[
		195096,
		1,
		"黾"
	],
	[
		195097,
		1,
		"鼅"
	],
	[
		195098,
		1,
		"鼏"
	],
	[
		195099,
		1,
		"鼖"
	],
	[
		195100,
		1,
		"鼻"
	],
	[
		195101,
		1,
		"𪘀"
	],
	[
		[
			195102,
			196605
		],
		3
	],
	[
		[
			196606,
			196607
		],
		3
	],
	[
		[
			196608,
			201546
		],
		2
	],
	[
		[
			201547,
			201551
		],
		3
	],
	[
		[
			201552,
			205743
		],
		2
	],
	[
		[
			205744,
			262141
		],
		3
	],
	[
		[
			262142,
			262143
		],
		3
	],
	[
		[
			262144,
			327677
		],
		3
	],
	[
		[
			327678,
			327679
		],
		3
	],
	[
		[
			327680,
			393213
		],
		3
	],
	[
		[
			393214,
			393215
		],
		3
	],
	[
		[
			393216,
			458749
		],
		3
	],
	[
		[
			458750,
			458751
		],
		3
	],
	[
		[
			458752,
			524285
		],
		3
	],
	[
		[
			524286,
			524287
		],
		3
	],
	[
		[
			524288,
			589821
		],
		3
	],
	[
		[
			589822,
			589823
		],
		3
	],
	[
		[
			589824,
			655357
		],
		3
	],
	[
		[
			655358,
			655359
		],
		3
	],
	[
		[
			655360,
			720893
		],
		3
	],
	[
		[
			720894,
			720895
		],
		3
	],
	[
		[
			720896,
			786429
		],
		3
	],
	[
		[
			786430,
			786431
		],
		3
	],
	[
		[
			786432,
			851965
		],
		3
	],
	[
		[
			851966,
			851967
		],
		3
	],
	[
		[
			851968,
			917501
		],
		3
	],
	[
		[
			917502,
			917503
		],
		3
	],
	[
		917504,
		3
	],
	[
		917505,
		3
	],
	[
		[
			917506,
			917535
		],
		3
	],
	[
		[
			917536,
			917631
		],
		3
	],
	[
		[
			917632,
			917759
		],
		3
	],
	[
		[
			917760,
			917999
		],
		7
	],
	[
		[
			918000,
			983037
		],
		3
	],
	[
		[
			983038,
			983039
		],
		3
	],
	[
		[
			983040,
			1048573
		],
		3
	],
	[
		[
			1048574,
			1048575
		],
		3
	],
	[
		[
			1048576,
			1114109
		],
		3
	],
	[
		[
			1114110,
			1114111
		],
		3
	]
];

var statusMapping = {};

var hasRequiredStatusMapping;

function requireStatusMapping () {
	if (hasRequiredStatusMapping) return statusMapping;
	hasRequiredStatusMapping = 1;

	statusMapping.STATUS_MAPPING = {
	  mapped: 1,
	  valid: 2,
	  disallowed: 3,
	  disallowed_STD3_valid: 4,
	  disallowed_STD3_mapped: 5,
	  deviation: 6,
	  ignored: 7
	};
	return statusMapping;
}

var tr46;
var hasRequiredTr46;

function requireTr46 () {
	if (hasRequiredTr46) return tr46;
	hasRequiredTr46 = 1;

	const punycode = require$$0;
	const regexes = requireRegexes();
	const mappingTable = require$$2;
	const { STATUS_MAPPING } = requireStatusMapping();

	function containsNonASCII(str) {
	  return /[^\x00-\x7F]/u.test(str);
	}

	function findStatus(val, { useSTD3ASCIIRules }) {
	  let start = 0;
	  let end = mappingTable.length - 1;

	  while (start <= end) {
	    const mid = Math.floor((start + end) / 2);

	    const target = mappingTable[mid];
	    const min = Array.isArray(target[0]) ? target[0][0] : target[0];
	    const max = Array.isArray(target[0]) ? target[0][1] : target[0];

	    if (min <= val && max >= val) {
	      if (useSTD3ASCIIRules &&
	          (target[1] === STATUS_MAPPING.disallowed_STD3_valid || target[1] === STATUS_MAPPING.disallowed_STD3_mapped)) {
	        return [STATUS_MAPPING.disallowed, ...target.slice(2)];
	      } else if (target[1] === STATUS_MAPPING.disallowed_STD3_valid) {
	        return [STATUS_MAPPING.valid, ...target.slice(2)];
	      } else if (target[1] === STATUS_MAPPING.disallowed_STD3_mapped) {
	        return [STATUS_MAPPING.mapped, ...target.slice(2)];
	      }

	      return target.slice(1);
	    } else if (min > val) {
	      end = mid - 1;
	    } else {
	      start = mid + 1;
	    }
	  }

	  return null;
	}

	function mapChars(domainName, { useSTD3ASCIIRules, transitionalProcessing }) {
	  let processed = "";

	  for (const ch of domainName) {
	    const [status, mapping] = findStatus(ch.codePointAt(0), { useSTD3ASCIIRules });

	    switch (status) {
	      case STATUS_MAPPING.disallowed:
	        processed += ch;
	        break;
	      case STATUS_MAPPING.ignored:
	        break;
	      case STATUS_MAPPING.mapped:
	        if (transitionalProcessing && ch === "ẞ") {
	          processed += "ss";
	        } else {
	          processed += mapping;
	        }
	        break;
	      case STATUS_MAPPING.deviation:
	        if (transitionalProcessing) {
	          processed += mapping;
	        } else {
	          processed += ch;
	        }
	        break;
	      case STATUS_MAPPING.valid:
	        processed += ch;
	        break;
	    }
	  }

	  return processed;
	}

	function validateLabel(label, {
	  checkHyphens,
	  checkBidi,
	  checkJoiners,
	  transitionalProcessing,
	  useSTD3ASCIIRules,
	  isBidi
	}) {
	  // "must be satisfied for a non-empty label"
	  if (label.length === 0) {
	    return true;
	  }

	  // "1. The label must be in Unicode Normalization Form NFC."
	  if (label.normalize("NFC") !== label) {
	    return false;
	  }

	  const codePoints = Array.from(label);

	  // "2. If CheckHyphens, the label must not contain a U+002D HYPHEN-MINUS character in both the
	  // third and fourth positions."
	  //
	  // "3. If CheckHyphens, the label must neither begin nor end with a U+002D HYPHEN-MINUS character."
	  if (checkHyphens) {
	    if ((codePoints[2] === "-" && codePoints[3] === "-") ||
	        (label.startsWith("-") || label.endsWith("-"))) {
	      return false;
	    }
	  }

	  // "4. If not CheckHyphens, the label must not begin with “xn--”."
	  // Disabled while we figure out https://github.com/whatwg/url/issues/803.
	  // if (!checkHyphens) {
	  //   if (label.startsWith("xn--")) {
	  //     return false;
	  //   }
	  // }

	  // "5. The label must not contain a U+002E ( . ) FULL STOP."
	  if (label.includes(".")) {
	    return false;
	  }

	  // "6. The label must not begin with a combining mark, that is: General_Category=Mark."
	  if (regexes.combiningMarks.test(codePoints[0])) {
	    return false;
	  }

	  // "7. Each code point in the label must only have certain Status values according to Section 5"
	  for (const ch of codePoints) {
	    const [status] = findStatus(ch.codePointAt(0), { useSTD3ASCIIRules });
	    if (transitionalProcessing) {
	      // "For Transitional Processing (deprecated), each value must be valid."
	      if (status !== STATUS_MAPPING.valid) {
	        return false;
	      }
	    } else if (status !== STATUS_MAPPING.valid && status !== STATUS_MAPPING.deviation) {
	      // "For Nontransitional Processing, each value must be either valid or deviation."
	      return false;
	    }
	  }

	  // "8. If CheckJoiners, the label must satisify the ContextJ rules"
	  // https://tools.ietf.org/html/rfc5892#appendix-A
	  if (checkJoiners) {
	    let last = 0;
	    for (const [i, ch] of codePoints.entries()) {
	      if (ch === "\u200C" || ch === "\u200D") {
	        if (i > 0) {
	          if (regexes.combiningClassVirama.test(codePoints[i - 1])) {
	            continue;
	          }
	          if (ch === "\u200C") {
	            // TODO: make this more efficient
	            const next = codePoints.indexOf("\u200C", i + 1);
	            const test = next < 0 ? codePoints.slice(last) : codePoints.slice(last, next);
	            if (regexes.validZWNJ.test(test.join(""))) {
	              last = i + 1;
	              continue;
	            }
	          }
	        }
	        return false;
	      }
	    }
	  }

	  // "9. If CheckBidi, and if the domain name is a Bidi domain name, then the label must satisfy..."
	  // https://tools.ietf.org/html/rfc5893#section-2
	  if (checkBidi && isBidi) {
	    let rtl;

	    // 1
	    if (regexes.bidiS1LTR.test(codePoints[0])) {
	      rtl = false;
	    } else if (regexes.bidiS1RTL.test(codePoints[0])) {
	      rtl = true;
	    } else {
	      return false;
	    }

	    if (rtl) {
	      // 2-4
	      if (!regexes.bidiS2.test(label) ||
	          !regexes.bidiS3.test(label) ||
	          (regexes.bidiS4EN.test(label) && regexes.bidiS4AN.test(label))) {
	        return false;
	      }
	    } else if (!regexes.bidiS5.test(label) ||
	               !regexes.bidiS6.test(label)) { // 5-6
	      return false;
	    }
	  }

	  return true;
	}

	function isBidiDomain(labels) {
	  const domain = labels.map(label => {
	    if (label.startsWith("xn--")) {
	      try {
	        return punycode.decode(label.substring(4));
	      } catch (err) {
	        return "";
	      }
	    }
	    return label;
	  }).join(".");
	  return regexes.bidiDomain.test(domain);
	}

	function processing(domainName, options) {
	  // 1. Map.
	  let string = mapChars(domainName, options);

	  // 2. Normalize.
	  string = string.normalize("NFC");

	  // 3. Break.
	  const labels = string.split(".");
	  const isBidi = isBidiDomain(labels);

	  // 4. Convert/Validate.
	  let error = false;
	  for (const [i, origLabel] of labels.entries()) {
	    let label = origLabel;
	    let transitionalProcessingForThisLabel = options.transitionalProcessing;
	    if (label.startsWith("xn--")) {
	      if (containsNonASCII(label)) {
	        error = true;
	        continue;
	      }

	      try {
	        label = punycode.decode(label.substring(4));
	      } catch {
	        if (!options.ignoreInvalidPunycode) {
	          error = true;
	          continue;
	        }
	      }
	      labels[i] = label;
	      transitionalProcessingForThisLabel = false;
	    }

	    // No need to validate if we already know there is an error.
	    if (error) {
	      continue;
	    }
	    const validation = validateLabel(label, {
	      ...options,
	      transitionalProcessing: transitionalProcessingForThisLabel,
	      isBidi
	    });
	    if (!validation) {
	      error = true;
	    }
	  }

	  return {
	    string: labels.join("."),
	    error
	  };
	}

	function toASCII(domainName, {
	  checkHyphens = false,
	  checkBidi = false,
	  checkJoiners = false,
	  useSTD3ASCIIRules = false,
	  verifyDNSLength = false,
	  transitionalProcessing = false,
	  ignoreInvalidPunycode = false
	} = {}) {
	  const result = processing(domainName, {
	    checkHyphens,
	    checkBidi,
	    checkJoiners,
	    useSTD3ASCIIRules,
	    transitionalProcessing,
	    ignoreInvalidPunycode
	  });
	  let labels = result.string.split(".");
	  labels = labels.map(l => {
	    if (containsNonASCII(l)) {
	      try {
	        return `xn--${punycode.encode(l)}`;
	      } catch (e) {
	        result.error = true;
	      }
	    }
	    return l;
	  });

	  if (verifyDNSLength) {
	    const total = labels.join(".").length;
	    if (total > 253 || total === 0) {
	      result.error = true;
	    }

	    for (let i = 0; i < labels.length; ++i) {
	      if (labels[i].length > 63 || labels[i].length === 0) {
	        result.error = true;
	        break;
	      }
	    }
	  }

	  if (result.error) {
	    return null;
	  }
	  return labels.join(".");
	}

	function toUnicode(domainName, {
	  checkHyphens = false,
	  checkBidi = false,
	  checkJoiners = false,
	  useSTD3ASCIIRules = false,
	  transitionalProcessing = false,
	  ignoreInvalidPunycode = false
	} = {}) {
	  const result = processing(domainName, {
	    checkHyphens,
	    checkBidi,
	    checkJoiners,
	    useSTD3ASCIIRules,
	    transitionalProcessing,
	    ignoreInvalidPunycode
	  });

	  return {
	    domain: result.string,
	    error: result.error
	  };
	}

	tr46 = {
	  toASCII,
	  toUnicode
	};
	return tr46;
}

var infra;
var hasRequiredInfra;

function requireInfra () {
	if (hasRequiredInfra) return infra;
	hasRequiredInfra = 1;

	// Note that we take code points as JS numbers, not JS strings.

	function isASCIIDigit(c) {
	  return c >= 0x30 && c <= 0x39;
	}

	function isASCIIAlpha(c) {
	  return (c >= 0x41 && c <= 0x5A) || (c >= 0x61 && c <= 0x7A);
	}

	function isASCIIAlphanumeric(c) {
	  return isASCIIAlpha(c) || isASCIIDigit(c);
	}

	function isASCIIHex(c) {
	  return isASCIIDigit(c) || (c >= 0x41 && c <= 0x46) || (c >= 0x61 && c <= 0x66);
	}

	infra = {
	  isASCIIDigit,
	  isASCIIAlpha,
	  isASCIIAlphanumeric,
	  isASCIIHex
	};
	return infra;
}

var encoding;
var hasRequiredEncoding;

function requireEncoding () {
	if (hasRequiredEncoding) return encoding;
	hasRequiredEncoding = 1;
	const utf8Encoder = new TextEncoder();
	const utf8Decoder = new TextDecoder("utf-8", { ignoreBOM: true });

	function utf8Encode(string) {
	  return utf8Encoder.encode(string);
	}

	function utf8DecodeWithoutBOM(bytes) {
	  return utf8Decoder.decode(bytes);
	}

	encoding = {
	  utf8Encode,
	  utf8DecodeWithoutBOM
	};
	return encoding;
}

var percentEncoding;
var hasRequiredPercentEncoding;

function requirePercentEncoding () {
	if (hasRequiredPercentEncoding) return percentEncoding;
	hasRequiredPercentEncoding = 1;
	const { isASCIIHex } = requireInfra();
	const { utf8Encode } = requireEncoding();

	function p(char) {
	  return char.codePointAt(0);
	}

	// https://url.spec.whatwg.org/#percent-encode
	function percentEncode(c) {
	  let hex = c.toString(16).toUpperCase();
	  if (hex.length === 1) {
	    hex = `0${hex}`;
	  }

	  return `%${hex}`;
	}

	// https://url.spec.whatwg.org/#percent-decode
	function percentDecodeBytes(input) {
	  const output = new Uint8Array(input.byteLength);
	  let outputIndex = 0;
	  for (let i = 0; i < input.byteLength; ++i) {
	    const byte = input[i];
	    if (byte !== 0x25) {
	      output[outputIndex++] = byte;
	    } else if (byte === 0x25 && (!isASCIIHex(input[i + 1]) || !isASCIIHex(input[i + 2]))) {
	      output[outputIndex++] = byte;
	    } else {
	      const bytePoint = parseInt(String.fromCodePoint(input[i + 1], input[i + 2]), 16);
	      output[outputIndex++] = bytePoint;
	      i += 2;
	    }
	  }

	  return output.slice(0, outputIndex);
	}

	// https://url.spec.whatwg.org/#string-percent-decode
	function percentDecodeString(input) {
	  const bytes = utf8Encode(input);
	  return percentDecodeBytes(bytes);
	}

	// https://url.spec.whatwg.org/#c0-control-percent-encode-set
	function isC0ControlPercentEncode(c) {
	  return c <= 0x1F || c > 0x7E;
	}

	// https://url.spec.whatwg.org/#fragment-percent-encode-set
	const extraFragmentPercentEncodeSet = new Set([p(" "), p("\""), p("<"), p(">"), p("`")]);
	function isFragmentPercentEncode(c) {
	  return isC0ControlPercentEncode(c) || extraFragmentPercentEncodeSet.has(c);
	}

	// https://url.spec.whatwg.org/#query-percent-encode-set
	const extraQueryPercentEncodeSet = new Set([p(" "), p("\""), p("#"), p("<"), p(">")]);
	function isQueryPercentEncode(c) {
	  return isC0ControlPercentEncode(c) || extraQueryPercentEncodeSet.has(c);
	}

	// https://url.spec.whatwg.org/#special-query-percent-encode-set
	function isSpecialQueryPercentEncode(c) {
	  return isQueryPercentEncode(c) || c === p("'");
	}

	// https://url.spec.whatwg.org/#path-percent-encode-set
	const extraPathPercentEncodeSet = new Set([p("?"), p("`"), p("{"), p("}")]);
	function isPathPercentEncode(c) {
	  return isQueryPercentEncode(c) || extraPathPercentEncodeSet.has(c);
	}

	// https://url.spec.whatwg.org/#userinfo-percent-encode-set
	const extraUserinfoPercentEncodeSet =
	  new Set([p("/"), p(":"), p(";"), p("="), p("@"), p("["), p("\\"), p("]"), p("^"), p("|")]);
	function isUserinfoPercentEncode(c) {
	  return isPathPercentEncode(c) || extraUserinfoPercentEncodeSet.has(c);
	}

	// https://url.spec.whatwg.org/#component-percent-encode-set
	const extraComponentPercentEncodeSet = new Set([p("$"), p("%"), p("&"), p("+"), p(",")]);
	function isComponentPercentEncode(c) {
	  return isUserinfoPercentEncode(c) || extraComponentPercentEncodeSet.has(c);
	}

	// https://url.spec.whatwg.org/#application-x-www-form-urlencoded-percent-encode-set
	const extraURLEncodedPercentEncodeSet = new Set([p("!"), p("'"), p("("), p(")"), p("~")]);
	function isURLEncodedPercentEncode(c) {
	  return isComponentPercentEncode(c) || extraURLEncodedPercentEncodeSet.has(c);
	}

	// https://url.spec.whatwg.org/#code-point-percent-encode-after-encoding
	// https://url.spec.whatwg.org/#utf-8-percent-encode
	// Assuming encoding is always utf-8 allows us to trim one of the logic branches. TODO: support encoding.
	// The "-Internal" variant here has code points as JS strings. The external version used by other files has code points
	// as JS numbers, like the rest of the codebase.
	function utf8PercentEncodeCodePointInternal(codePoint, percentEncodePredicate) {
	  const bytes = utf8Encode(codePoint);
	  let output = "";
	  for (const byte of bytes) {
	    // Our percentEncodePredicate operates on bytes, not code points, so this is slightly different from the spec.
	    if (!percentEncodePredicate(byte)) {
	      output += String.fromCharCode(byte);
	    } else {
	      output += percentEncode(byte);
	    }
	  }

	  return output;
	}

	function utf8PercentEncodeCodePoint(codePoint, percentEncodePredicate) {
	  return utf8PercentEncodeCodePointInternal(String.fromCodePoint(codePoint), percentEncodePredicate);
	}

	// https://url.spec.whatwg.org/#string-percent-encode-after-encoding
	// https://url.spec.whatwg.org/#string-utf-8-percent-encode
	function utf8PercentEncodeString(input, percentEncodePredicate, spaceAsPlus = false) {
	  let output = "";
	  for (const codePoint of input) {
	    if (spaceAsPlus && codePoint === " ") {
	      output += "+";
	    } else {
	      output += utf8PercentEncodeCodePointInternal(codePoint, percentEncodePredicate);
	    }
	  }
	  return output;
	}

	percentEncoding = {
	  isC0ControlPercentEncode,
	  isFragmentPercentEncode,
	  isQueryPercentEncode,
	  isSpecialQueryPercentEncode,
	  isPathPercentEncode,
	  isUserinfoPercentEncode,
	  isURLEncodedPercentEncode,
	  percentDecodeString,
	  percentDecodeBytes,
	  utf8PercentEncodeString,
	  utf8PercentEncodeCodePoint
	};
	return percentEncoding;
}

var hasRequiredUrlStateMachine;

function requireUrlStateMachine () {
	if (hasRequiredUrlStateMachine) return urlStateMachine.exports;
	hasRequiredUrlStateMachine = 1;
	(function (module) {
		const tr46 = requireTr46();

		const infra = requireInfra();
		const { utf8DecodeWithoutBOM } = requireEncoding();
		const { percentDecodeString, utf8PercentEncodeCodePoint, utf8PercentEncodeString, isC0ControlPercentEncode,
		  isFragmentPercentEncode, isQueryPercentEncode, isSpecialQueryPercentEncode, isPathPercentEncode,
		  isUserinfoPercentEncode } = requirePercentEncoding();

		function p(char) {
		  return char.codePointAt(0);
		}

		const specialSchemes = {
		  ftp: 21,
		  file: null,
		  http: 80,
		  https: 443,
		  ws: 80,
		  wss: 443
		};

		const failure = Symbol("failure");

		function countSymbols(str) {
		  return [...str].length;
		}

		function at(input, idx) {
		  const c = input[idx];
		  return isNaN(c) ? undefined : String.fromCodePoint(c);
		}

		function isSingleDot(buffer) {
		  return buffer === "." || buffer.toLowerCase() === "%2e";
		}

		function isDoubleDot(buffer) {
		  buffer = buffer.toLowerCase();
		  return buffer === ".." || buffer === "%2e." || buffer === ".%2e" || buffer === "%2e%2e";
		}

		function isWindowsDriveLetterCodePoints(cp1, cp2) {
		  return infra.isASCIIAlpha(cp1) && (cp2 === p(":") || cp2 === p("|"));
		}

		function isWindowsDriveLetterString(string) {
		  return string.length === 2 && infra.isASCIIAlpha(string.codePointAt(0)) && (string[1] === ":" || string[1] === "|");
		}

		function isNormalizedWindowsDriveLetterString(string) {
		  return string.length === 2 && infra.isASCIIAlpha(string.codePointAt(0)) && string[1] === ":";
		}

		function containsForbiddenHostCodePoint(string) {
		  return string.search(/\u0000|\u0009|\u000A|\u000D|\u0020|#|\/|:|<|>|\?|@|\[|\\|\]|\^|\|/u) !== -1;
		}

		function containsForbiddenDomainCodePoint(string) {
		  return containsForbiddenHostCodePoint(string) || string.search(/[\u0000-\u001F]|%|\u007F/u) !== -1;
		}

		function isSpecialScheme(scheme) {
		  return specialSchemes[scheme] !== undefined;
		}

		function isSpecial(url) {
		  return isSpecialScheme(url.scheme);
		}

		function isNotSpecial(url) {
		  return !isSpecialScheme(url.scheme);
		}

		function defaultPort(scheme) {
		  return specialSchemes[scheme];
		}

		function parseIPv4Number(input) {
		  if (input === "") {
		    return failure;
		  }

		  let R = 10;

		  if (input.length >= 2 && input.charAt(0) === "0" && input.charAt(1).toLowerCase() === "x") {
		    input = input.substring(2);
		    R = 16;
		  } else if (input.length >= 2 && input.charAt(0) === "0") {
		    input = input.substring(1);
		    R = 8;
		  }

		  if (input === "") {
		    return 0;
		  }

		  let regex = /[^0-7]/u;
		  if (R === 10) {
		    regex = /[^0-9]/u;
		  }
		  if (R === 16) {
		    regex = /[^0-9A-Fa-f]/u;
		  }

		  if (regex.test(input)) {
		    return failure;
		  }

		  return parseInt(input, R);
		}

		function parseIPv4(input) {
		  const parts = input.split(".");
		  if (parts[parts.length - 1] === "") {
		    if (parts.length > 1) {
		      parts.pop();
		    }
		  }

		  if (parts.length > 4) {
		    return failure;
		  }

		  const numbers = [];
		  for (const part of parts) {
		    const n = parseIPv4Number(part);
		    if (n === failure) {
		      return failure;
		    }

		    numbers.push(n);
		  }

		  for (let i = 0; i < numbers.length - 1; ++i) {
		    if (numbers[i] > 255) {
		      return failure;
		    }
		  }
		  if (numbers[numbers.length - 1] >= 256 ** (5 - numbers.length)) {
		    return failure;
		  }

		  let ipv4 = numbers.pop();
		  let counter = 0;

		  for (const n of numbers) {
		    ipv4 += n * 256 ** (3 - counter);
		    ++counter;
		  }

		  return ipv4;
		}

		function serializeIPv4(address) {
		  let output = "";
		  let n = address;

		  for (let i = 1; i <= 4; ++i) {
		    output = String(n % 256) + output;
		    if (i !== 4) {
		      output = `.${output}`;
		    }
		    n = Math.floor(n / 256);
		  }

		  return output;
		}

		function parseIPv6(input) {
		  const address = [0, 0, 0, 0, 0, 0, 0, 0];
		  let pieceIndex = 0;
		  let compress = null;
		  let pointer = 0;

		  input = Array.from(input, c => c.codePointAt(0));

		  if (input[pointer] === p(":")) {
		    if (input[pointer + 1] !== p(":")) {
		      return failure;
		    }

		    pointer += 2;
		    ++pieceIndex;
		    compress = pieceIndex;
		  }

		  while (pointer < input.length) {
		    if (pieceIndex === 8) {
		      return failure;
		    }

		    if (input[pointer] === p(":")) {
		      if (compress !== null) {
		        return failure;
		      }
		      ++pointer;
		      ++pieceIndex;
		      compress = pieceIndex;
		      continue;
		    }

		    let value = 0;
		    let length = 0;

		    while (length < 4 && infra.isASCIIHex(input[pointer])) {
		      value = value * 0x10 + parseInt(at(input, pointer), 16);
		      ++pointer;
		      ++length;
		    }

		    if (input[pointer] === p(".")) {
		      if (length === 0) {
		        return failure;
		      }

		      pointer -= length;

		      if (pieceIndex > 6) {
		        return failure;
		      }

		      let numbersSeen = 0;

		      while (input[pointer] !== undefined) {
		        let ipv4Piece = null;

		        if (numbersSeen > 0) {
		          if (input[pointer] === p(".") && numbersSeen < 4) {
		            ++pointer;
		          } else {
		            return failure;
		          }
		        }

		        if (!infra.isASCIIDigit(input[pointer])) {
		          return failure;
		        }

		        while (infra.isASCIIDigit(input[pointer])) {
		          const number = parseInt(at(input, pointer));
		          if (ipv4Piece === null) {
		            ipv4Piece = number;
		          } else if (ipv4Piece === 0) {
		            return failure;
		          } else {
		            ipv4Piece = ipv4Piece * 10 + number;
		          }
		          if (ipv4Piece > 255) {
		            return failure;
		          }
		          ++pointer;
		        }

		        address[pieceIndex] = address[pieceIndex] * 0x100 + ipv4Piece;

		        ++numbersSeen;

		        if (numbersSeen === 2 || numbersSeen === 4) {
		          ++pieceIndex;
		        }
		      }

		      if (numbersSeen !== 4) {
		        return failure;
		      }

		      break;
		    } else if (input[pointer] === p(":")) {
		      ++pointer;
		      if (input[pointer] === undefined) {
		        return failure;
		      }
		    } else if (input[pointer] !== undefined) {
		      return failure;
		    }

		    address[pieceIndex] = value;
		    ++pieceIndex;
		  }

		  if (compress !== null) {
		    let swaps = pieceIndex - compress;
		    pieceIndex = 7;
		    while (pieceIndex !== 0 && swaps > 0) {
		      const temp = address[compress + swaps - 1];
		      address[compress + swaps - 1] = address[pieceIndex];
		      address[pieceIndex] = temp;
		      --pieceIndex;
		      --swaps;
		    }
		  } else if (compress === null && pieceIndex !== 8) {
		    return failure;
		  }

		  return address;
		}

		function serializeIPv6(address) {
		  let output = "";
		  const compress = findTheIPv6AddressCompressedPieceIndex(address);
		  let ignore0 = false;

		  for (let pieceIndex = 0; pieceIndex <= 7; ++pieceIndex) {
		    if (ignore0 && address[pieceIndex] === 0) {
		      continue;
		    } else if (ignore0) {
		      ignore0 = false;
		    }

		    if (compress === pieceIndex) {
		      const separator = pieceIndex === 0 ? "::" : ":";
		      output += separator;
		      ignore0 = true;
		      continue;
		    }

		    output += address[pieceIndex].toString(16);

		    if (pieceIndex !== 7) {
		      output += ":";
		    }
		  }

		  return output;
		}

		function parseHost(input, isOpaque = false) {
		  if (input[0] === "[") {
		    if (input[input.length - 1] !== "]") {
		      return failure;
		    }

		    return parseIPv6(input.substring(1, input.length - 1));
		  }

		  if (isOpaque) {
		    return parseOpaqueHost(input);
		  }

		  const domain = utf8DecodeWithoutBOM(percentDecodeString(input));
		  const asciiDomain = domainToASCII(domain);
		  if (asciiDomain === failure) {
		    return failure;
		  }

		  if (containsForbiddenDomainCodePoint(asciiDomain)) {
		    return failure;
		  }

		  if (endsInANumber(asciiDomain)) {
		    return parseIPv4(asciiDomain);
		  }

		  return asciiDomain;
		}

		function endsInANumber(input) {
		  const parts = input.split(".");
		  if (parts[parts.length - 1] === "") {
		    if (parts.length === 1) {
		      return false;
		    }
		    parts.pop();
		  }

		  const last = parts[parts.length - 1];
		  if (parseIPv4Number(last) !== failure) {
		    return true;
		  }

		  if (/^[0-9]+$/u.test(last)) {
		    return true;
		  }

		  return false;
		}

		function parseOpaqueHost(input) {
		  if (containsForbiddenHostCodePoint(input)) {
		    return failure;
		  }

		  return utf8PercentEncodeString(input, isC0ControlPercentEncode);
		}

		function findTheIPv6AddressCompressedPieceIndex(address) {
		  let longestIndex = null;
		  let longestSize = 1; // only find elements > 1
		  let foundIndex = null;
		  let foundSize = 0;

		  for (let pieceIndex = 0; pieceIndex < address.length; ++pieceIndex) {
		    if (address[pieceIndex] !== 0) {
		      if (foundSize > longestSize) {
		        longestIndex = foundIndex;
		        longestSize = foundSize;
		      }

		      foundIndex = null;
		      foundSize = 0;
		    } else {
		      if (foundIndex === null) {
		        foundIndex = pieceIndex;
		      }
		      ++foundSize;
		    }
		  }

		  if (foundSize > longestSize) {
		    return foundIndex;
		  }

		  return longestIndex;
		}

		function serializeHost(host) {
		  if (typeof host === "number") {
		    return serializeIPv4(host);
		  }

		  // IPv6 serializer
		  if (host instanceof Array) {
		    return `[${serializeIPv6(host)}]`;
		  }

		  return host;
		}

		function domainToASCII(domain, beStrict = false) {
		  const result = tr46.toASCII(domain, {
		    checkBidi: true,
		    checkHyphens: false,
		    checkJoiners: true,
		    useSTD3ASCIIRules: beStrict,
		    verifyDNSLength: beStrict
		  });
		  if (result === null || result === "") {
		    return failure;
		  }
		  return result;
		}

		function trimControlChars(url) {
		  return url.replace(/^[\u0000-\u001F\u0020]+|[\u0000-\u001F\u0020]+$/ug, "");
		}

		function trimTabAndNewline(url) {
		  return url.replace(/\u0009|\u000A|\u000D/ug, "");
		}

		function shortenPath(url) {
		  const { path } = url;
		  if (path.length === 0) {
		    return;
		  }
		  if (url.scheme === "file" && path.length === 1 && isNormalizedWindowsDriveLetter(path[0])) {
		    return;
		  }

		  path.pop();
		}

		function includesCredentials(url) {
		  return url.username !== "" || url.password !== "";
		}

		function cannotHaveAUsernamePasswordPort(url) {
		  return url.host === null || url.host === "" || url.scheme === "file";
		}

		function hasAnOpaquePath(url) {
		  return typeof url.path === "string";
		}

		function isNormalizedWindowsDriveLetter(string) {
		  return /^[A-Za-z]:$/u.test(string);
		}

		function URLStateMachine(input, base, encodingOverride, url, stateOverride) {
		  this.pointer = 0;
		  this.input = input;
		  this.base = base || null;
		  this.encodingOverride = encodingOverride || "utf-8";
		  this.stateOverride = stateOverride;
		  this.url = url;
		  this.failure = false;
		  this.parseError = false;

		  if (!this.url) {
		    this.url = {
		      scheme: "",
		      username: "",
		      password: "",
		      host: null,
		      port: null,
		      path: [],
		      query: null,
		      fragment: null
		    };

		    const res = trimControlChars(this.input);
		    if (res !== this.input) {
		      this.parseError = true;
		    }
		    this.input = res;
		  }

		  const res = trimTabAndNewline(this.input);
		  if (res !== this.input) {
		    this.parseError = true;
		  }
		  this.input = res;

		  this.state = stateOverride || "scheme start";

		  this.buffer = "";
		  this.atFlag = false;
		  this.arrFlag = false;
		  this.passwordTokenSeenFlag = false;

		  this.input = Array.from(this.input, c => c.codePointAt(0));

		  for (; this.pointer <= this.input.length; ++this.pointer) {
		    const c = this.input[this.pointer];
		    const cStr = isNaN(c) ? undefined : String.fromCodePoint(c);

		    // exec state machine
		    const ret = this[`parse ${this.state}`](c, cStr);
		    if (!ret) {
		      break; // terminate algorithm
		    } else if (ret === failure) {
		      this.failure = true;
		      break;
		    }
		  }
		}

		URLStateMachine.prototype["parse scheme start"] = function parseSchemeStart(c, cStr) {
		  if (infra.isASCIIAlpha(c)) {
		    this.buffer += cStr.toLowerCase();
		    this.state = "scheme";
		  } else if (!this.stateOverride) {
		    this.state = "no scheme";
		    --this.pointer;
		  } else {
		    this.parseError = true;
		    return failure;
		  }

		  return true;
		};

		URLStateMachine.prototype["parse scheme"] = function parseScheme(c, cStr) {
		  if (infra.isASCIIAlphanumeric(c) || c === p("+") || c === p("-") || c === p(".")) {
		    this.buffer += cStr.toLowerCase();
		  } else if (c === p(":")) {
		    if (this.stateOverride) {
		      if (isSpecial(this.url) && !isSpecialScheme(this.buffer)) {
		        return false;
		      }

		      if (!isSpecial(this.url) && isSpecialScheme(this.buffer)) {
		        return false;
		      }

		      if ((includesCredentials(this.url) || this.url.port !== null) && this.buffer === "file") {
		        return false;
		      }

		      if (this.url.scheme === "file" && this.url.host === "") {
		        return false;
		      }
		    }
		    this.url.scheme = this.buffer;
		    if (this.stateOverride) {
		      if (this.url.port === defaultPort(this.url.scheme)) {
		        this.url.port = null;
		      }
		      return false;
		    }
		    this.buffer = "";
		    if (this.url.scheme === "file") {
		      if (this.input[this.pointer + 1] !== p("/") || this.input[this.pointer + 2] !== p("/")) {
		        this.parseError = true;
		      }
		      this.state = "file";
		    } else if (isSpecial(this.url) && this.base !== null && this.base.scheme === this.url.scheme) {
		      this.state = "special relative or authority";
		    } else if (isSpecial(this.url)) {
		      this.state = "special authority slashes";
		    } else if (this.input[this.pointer + 1] === p("/")) {
		      this.state = "path or authority";
		      ++this.pointer;
		    } else {
		      this.url.path = "";
		      this.state = "opaque path";
		    }
		  } else if (!this.stateOverride) {
		    this.buffer = "";
		    this.state = "no scheme";
		    this.pointer = -1;
		  } else {
		    this.parseError = true;
		    return failure;
		  }

		  return true;
		};

		URLStateMachine.prototype["parse no scheme"] = function parseNoScheme(c) {
		  if (this.base === null || (hasAnOpaquePath(this.base) && c !== p("#"))) {
		    return failure;
		  } else if (hasAnOpaquePath(this.base) && c === p("#")) {
		    this.url.scheme = this.base.scheme;
		    this.url.path = this.base.path;
		    this.url.query = this.base.query;
		    this.url.fragment = "";
		    this.state = "fragment";
		  } else if (this.base.scheme === "file") {
		    this.state = "file";
		    --this.pointer;
		  } else {
		    this.state = "relative";
		    --this.pointer;
		  }

		  return true;
		};

		URLStateMachine.prototype["parse special relative or authority"] = function parseSpecialRelativeOrAuthority(c) {
		  if (c === p("/") && this.input[this.pointer + 1] === p("/")) {
		    this.state = "special authority ignore slashes";
		    ++this.pointer;
		  } else {
		    this.parseError = true;
		    this.state = "relative";
		    --this.pointer;
		  }

		  return true;
		};

		URLStateMachine.prototype["parse path or authority"] = function parsePathOrAuthority(c) {
		  if (c === p("/")) {
		    this.state = "authority";
		  } else {
		    this.state = "path";
		    --this.pointer;
		  }

		  return true;
		};

		URLStateMachine.prototype["parse relative"] = function parseRelative(c) {
		  this.url.scheme = this.base.scheme;
		  if (c === p("/")) {
		    this.state = "relative slash";
		  } else if (isSpecial(this.url) && c === p("\\")) {
		    this.parseError = true;
		    this.state = "relative slash";
		  } else {
		    this.url.username = this.base.username;
		    this.url.password = this.base.password;
		    this.url.host = this.base.host;
		    this.url.port = this.base.port;
		    this.url.path = this.base.path.slice();
		    this.url.query = this.base.query;
		    if (c === p("?")) {
		      this.url.query = "";
		      this.state = "query";
		    } else if (c === p("#")) {
		      this.url.fragment = "";
		      this.state = "fragment";
		    } else if (!isNaN(c)) {
		      this.url.query = null;
		      this.url.path.pop();
		      this.state = "path";
		      --this.pointer;
		    }
		  }

		  return true;
		};

		URLStateMachine.prototype["parse relative slash"] = function parseRelativeSlash(c) {
		  if (isSpecial(this.url) && (c === p("/") || c === p("\\"))) {
		    if (c === p("\\")) {
		      this.parseError = true;
		    }
		    this.state = "special authority ignore slashes";
		  } else if (c === p("/")) {
		    this.state = "authority";
		  } else {
		    this.url.username = this.base.username;
		    this.url.password = this.base.password;
		    this.url.host = this.base.host;
		    this.url.port = this.base.port;
		    this.state = "path";
		    --this.pointer;
		  }

		  return true;
		};

		URLStateMachine.prototype["parse special authority slashes"] = function parseSpecialAuthoritySlashes(c) {
		  if (c === p("/") && this.input[this.pointer + 1] === p("/")) {
		    this.state = "special authority ignore slashes";
		    ++this.pointer;
		  } else {
		    this.parseError = true;
		    this.state = "special authority ignore slashes";
		    --this.pointer;
		  }

		  return true;
		};

		URLStateMachine.prototype["parse special authority ignore slashes"] = function parseSpecialAuthorityIgnoreSlashes(c) {
		  if (c !== p("/") && c !== p("\\")) {
		    this.state = "authority";
		    --this.pointer;
		  } else {
		    this.parseError = true;
		  }

		  return true;
		};

		URLStateMachine.prototype["parse authority"] = function parseAuthority(c, cStr) {
		  if (c === p("@")) {
		    this.parseError = true;
		    if (this.atFlag) {
		      this.buffer = `%40${this.buffer}`;
		    }
		    this.atFlag = true;

		    // careful, this is based on buffer and has its own pointer (this.pointer != pointer) and inner chars
		    const len = countSymbols(this.buffer);
		    for (let pointer = 0; pointer < len; ++pointer) {
		      const codePoint = this.buffer.codePointAt(pointer);

		      if (codePoint === p(":") && !this.passwordTokenSeenFlag) {
		        this.passwordTokenSeenFlag = true;
		        continue;
		      }
		      const encodedCodePoints = utf8PercentEncodeCodePoint(codePoint, isUserinfoPercentEncode);
		      if (this.passwordTokenSeenFlag) {
		        this.url.password += encodedCodePoints;
		      } else {
		        this.url.username += encodedCodePoints;
		      }
		    }
		    this.buffer = "";
		  } else if (isNaN(c) || c === p("/") || c === p("?") || c === p("#") ||
		             (isSpecial(this.url) && c === p("\\"))) {
		    if (this.atFlag && this.buffer === "") {
		      this.parseError = true;
		      return failure;
		    }
		    this.pointer -= countSymbols(this.buffer) + 1;
		    this.buffer = "";
		    this.state = "host";
		  } else {
		    this.buffer += cStr;
		  }

		  return true;
		};

		URLStateMachine.prototype["parse hostname"] =
		URLStateMachine.prototype["parse host"] = function parseHostName(c, cStr) {
		  if (this.stateOverride && this.url.scheme === "file") {
		    --this.pointer;
		    this.state = "file host";
		  } else if (c === p(":") && !this.arrFlag) {
		    if (this.buffer === "") {
		      this.parseError = true;
		      return failure;
		    }

		    if (this.stateOverride === "hostname") {
		      return false;
		    }

		    const host = parseHost(this.buffer, isNotSpecial(this.url));
		    if (host === failure) {
		      return failure;
		    }

		    this.url.host = host;
		    this.buffer = "";
		    this.state = "port";
		  } else if (isNaN(c) || c === p("/") || c === p("?") || c === p("#") ||
		             (isSpecial(this.url) && c === p("\\"))) {
		    --this.pointer;
		    if (isSpecial(this.url) && this.buffer === "") {
		      this.parseError = true;
		      return failure;
		    } else if (this.stateOverride && this.buffer === "" &&
		               (includesCredentials(this.url) || this.url.port !== null)) {
		      this.parseError = true;
		      return false;
		    }

		    const host = parseHost(this.buffer, isNotSpecial(this.url));
		    if (host === failure) {
		      return failure;
		    }

		    this.url.host = host;
		    this.buffer = "";
		    this.state = "path start";
		    if (this.stateOverride) {
		      return false;
		    }
		  } else {
		    if (c === p("[")) {
		      this.arrFlag = true;
		    } else if (c === p("]")) {
		      this.arrFlag = false;
		    }
		    this.buffer += cStr;
		  }

		  return true;
		};

		URLStateMachine.prototype["parse port"] = function parsePort(c, cStr) {
		  if (infra.isASCIIDigit(c)) {
		    this.buffer += cStr;
		  } else if (isNaN(c) || c === p("/") || c === p("?") || c === p("#") ||
		             (isSpecial(this.url) && c === p("\\")) ||
		             this.stateOverride) {
		    if (this.buffer !== "") {
		      const port = parseInt(this.buffer);
		      if (port > 2 ** 16 - 1) {
		        this.parseError = true;
		        return failure;
		      }
		      this.url.port = port === defaultPort(this.url.scheme) ? null : port;
		      this.buffer = "";
		    }
		    if (this.stateOverride) {
		      return false;
		    }
		    this.state = "path start";
		    --this.pointer;
		  } else {
		    this.parseError = true;
		    return failure;
		  }

		  return true;
		};

		const fileOtherwiseCodePoints = new Set([p("/"), p("\\"), p("?"), p("#")]);

		function startsWithWindowsDriveLetter(input, pointer) {
		  const length = input.length - pointer;
		  return length >= 2 &&
		    isWindowsDriveLetterCodePoints(input[pointer], input[pointer + 1]) &&
		    (length === 2 || fileOtherwiseCodePoints.has(input[pointer + 2]));
		}

		URLStateMachine.prototype["parse file"] = function parseFile(c) {
		  this.url.scheme = "file";
		  this.url.host = "";

		  if (c === p("/") || c === p("\\")) {
		    if (c === p("\\")) {
		      this.parseError = true;
		    }
		    this.state = "file slash";
		  } else if (this.base !== null && this.base.scheme === "file") {
		    this.url.host = this.base.host;
		    this.url.path = this.base.path.slice();
		    this.url.query = this.base.query;
		    if (c === p("?")) {
		      this.url.query = "";
		      this.state = "query";
		    } else if (c === p("#")) {
		      this.url.fragment = "";
		      this.state = "fragment";
		    } else if (!isNaN(c)) {
		      this.url.query = null;
		      if (!startsWithWindowsDriveLetter(this.input, this.pointer)) {
		        shortenPath(this.url);
		      } else {
		        this.parseError = true;
		        this.url.path = [];
		      }

		      this.state = "path";
		      --this.pointer;
		    }
		  } else {
		    this.state = "path";
		    --this.pointer;
		  }

		  return true;
		};

		URLStateMachine.prototype["parse file slash"] = function parseFileSlash(c) {
		  if (c === p("/") || c === p("\\")) {
		    if (c === p("\\")) {
		      this.parseError = true;
		    }
		    this.state = "file host";
		  } else {
		    if (this.base !== null && this.base.scheme === "file") {
		      if (!startsWithWindowsDriveLetter(this.input, this.pointer) &&
		          isNormalizedWindowsDriveLetterString(this.base.path[0])) {
		        this.url.path.push(this.base.path[0]);
		      }
		      this.url.host = this.base.host;
		    }
		    this.state = "path";
		    --this.pointer;
		  }

		  return true;
		};

		URLStateMachine.prototype["parse file host"] = function parseFileHost(c, cStr) {
		  if (isNaN(c) || c === p("/") || c === p("\\") || c === p("?") || c === p("#")) {
		    --this.pointer;
		    if (!this.stateOverride && isWindowsDriveLetterString(this.buffer)) {
		      this.parseError = true;
		      this.state = "path";
		    } else if (this.buffer === "") {
		      this.url.host = "";
		      if (this.stateOverride) {
		        return false;
		      }
		      this.state = "path start";
		    } else {
		      let host = parseHost(this.buffer, isNotSpecial(this.url));
		      if (host === failure) {
		        return failure;
		      }
		      if (host === "localhost") {
		        host = "";
		      }
		      this.url.host = host;

		      if (this.stateOverride) {
		        return false;
		      }

		      this.buffer = "";
		      this.state = "path start";
		    }
		  } else {
		    this.buffer += cStr;
		  }

		  return true;
		};

		URLStateMachine.prototype["parse path start"] = function parsePathStart(c) {
		  if (isSpecial(this.url)) {
		    if (c === p("\\")) {
		      this.parseError = true;
		    }
		    this.state = "path";

		    if (c !== p("/") && c !== p("\\")) {
		      --this.pointer;
		    }
		  } else if (!this.stateOverride && c === p("?")) {
		    this.url.query = "";
		    this.state = "query";
		  } else if (!this.stateOverride && c === p("#")) {
		    this.url.fragment = "";
		    this.state = "fragment";
		  } else if (c !== undefined) {
		    this.state = "path";
		    if (c !== p("/")) {
		      --this.pointer;
		    }
		  } else if (this.stateOverride && this.url.host === null) {
		    this.url.path.push("");
		  }

		  return true;
		};

		URLStateMachine.prototype["parse path"] = function parsePath(c) {
		  if (isNaN(c) || c === p("/") || (isSpecial(this.url) && c === p("\\")) ||
		      (!this.stateOverride && (c === p("?") || c === p("#")))) {
		    if (isSpecial(this.url) && c === p("\\")) {
		      this.parseError = true;
		    }

		    if (isDoubleDot(this.buffer)) {
		      shortenPath(this.url);
		      if (c !== p("/") && !(isSpecial(this.url) && c === p("\\"))) {
		        this.url.path.push("");
		      }
		    } else if (isSingleDot(this.buffer) && c !== p("/") &&
		               !(isSpecial(this.url) && c === p("\\"))) {
		      this.url.path.push("");
		    } else if (!isSingleDot(this.buffer)) {
		      if (this.url.scheme === "file" && this.url.path.length === 0 && isWindowsDriveLetterString(this.buffer)) {
		        this.buffer = `${this.buffer[0]}:`;
		      }
		      this.url.path.push(this.buffer);
		    }
		    this.buffer = "";
		    if (c === p("?")) {
		      this.url.query = "";
		      this.state = "query";
		    }
		    if (c === p("#")) {
		      this.url.fragment = "";
		      this.state = "fragment";
		    }
		  } else {
		    // TODO: If c is not a URL code point and not "%", parse error.

		    if (c === p("%") &&
		      (!infra.isASCIIHex(this.input[this.pointer + 1]) ||
		        !infra.isASCIIHex(this.input[this.pointer + 2]))) {
		      this.parseError = true;
		    }

		    this.buffer += utf8PercentEncodeCodePoint(c, isPathPercentEncode);
		  }

		  return true;
		};

		URLStateMachine.prototype["parse opaque path"] = function parseOpaquePath(c) {
		  if (c === p("?")) {
		    this.url.query = "";
		    this.state = "query";
		  } else if (c === p("#")) {
		    this.url.fragment = "";
		    this.state = "fragment";
		  } else {
		    // TODO: Add: not a URL code point
		    if (!isNaN(c) && c !== p("%")) {
		      this.parseError = true;
		    }

		    if (c === p("%") &&
		        (!infra.isASCIIHex(this.input[this.pointer + 1]) ||
		         !infra.isASCIIHex(this.input[this.pointer + 2]))) {
		      this.parseError = true;
		    }

		    if (!isNaN(c)) {
		      this.url.path += utf8PercentEncodeCodePoint(c, isC0ControlPercentEncode);
		    }
		  }

		  return true;
		};

		URLStateMachine.prototype["parse query"] = function parseQuery(c, cStr) {
		  if (!isSpecial(this.url) || this.url.scheme === "ws" || this.url.scheme === "wss") {
		    this.encodingOverride = "utf-8";
		  }

		  if ((!this.stateOverride && c === p("#")) || isNaN(c)) {
		    const queryPercentEncodePredicate = isSpecial(this.url) ? isSpecialQueryPercentEncode : isQueryPercentEncode;
		    this.url.query += utf8PercentEncodeString(this.buffer, queryPercentEncodePredicate);

		    this.buffer = "";

		    if (c === p("#")) {
		      this.url.fragment = "";
		      this.state = "fragment";
		    }
		  } else if (!isNaN(c)) {
		    // TODO: If c is not a URL code point and not "%", parse error.

		    if (c === p("%") &&
		      (!infra.isASCIIHex(this.input[this.pointer + 1]) ||
		        !infra.isASCIIHex(this.input[this.pointer + 2]))) {
		      this.parseError = true;
		    }

		    this.buffer += cStr;
		  }

		  return true;
		};

		URLStateMachine.prototype["parse fragment"] = function parseFragment(c) {
		  if (!isNaN(c)) {
		    // TODO: If c is not a URL code point and not "%", parse error.
		    if (c === p("%") &&
		      (!infra.isASCIIHex(this.input[this.pointer + 1]) ||
		        !infra.isASCIIHex(this.input[this.pointer + 2]))) {
		      this.parseError = true;
		    }

		    this.url.fragment += utf8PercentEncodeCodePoint(c, isFragmentPercentEncode);
		  }

		  return true;
		};

		function serializeURL(url, excludeFragment) {
		  let output = `${url.scheme}:`;
		  if (url.host !== null) {
		    output += "//";

		    if (url.username !== "" || url.password !== "") {
		      output += url.username;
		      if (url.password !== "") {
		        output += `:${url.password}`;
		      }
		      output += "@";
		    }

		    output += serializeHost(url.host);

		    if (url.port !== null) {
		      output += `:${url.port}`;
		    }
		  }

		  if (url.host === null && !hasAnOpaquePath(url) && url.path.length > 1 && url.path[0] === "") {
		    output += "/.";
		  }
		  output += serializePath(url);

		  if (url.query !== null) {
		    output += `?${url.query}`;
		  }

		  if (!excludeFragment && url.fragment !== null) {
		    output += `#${url.fragment}`;
		  }

		  return output;
		}

		function serializeOrigin(tuple) {
		  let result = `${tuple.scheme}://`;
		  result += serializeHost(tuple.host);

		  if (tuple.port !== null) {
		    result += `:${tuple.port}`;
		  }

		  return result;
		}

		function serializePath(url) {
		  if (hasAnOpaquePath(url)) {
		    return url.path;
		  }

		  let output = "";
		  for (const segment of url.path) {
		    output += `/${segment}`;
		  }
		  return output;
		}

		module.exports.serializeURL = serializeURL;

		module.exports.serializePath = serializePath;

		module.exports.serializeURLOrigin = function (url) {
		  // https://url.spec.whatwg.org/#concept-url-origin
		  switch (url.scheme) {
		    case "blob": {
		      const pathURL = module.exports.parseURL(serializePath(url));
		      if (pathURL === null) {
		        return "null";
		      }
		      if (pathURL.scheme !== "http" && pathURL.scheme !== "https") {
		        return "null";
		      }
		      return module.exports.serializeURLOrigin(pathURL);
		    }
		    case "ftp":
		    case "http":
		    case "https":
		    case "ws":
		    case "wss":
		      return serializeOrigin({
		        scheme: url.scheme,
		        host: url.host,
		        port: url.port
		      });
		    case "file":
		      // The spec says:
		      // > Unfortunate as it is, this is left as an exercise to the reader. When in doubt, return a new opaque origin.
		      // Browsers tested so far:
		      // - Chrome says "file://", but treats file: URLs as cross-origin for most (all?) purposes; see e.g.
		      //   https://bugs.chromium.org/p/chromium/issues/detail?id=37586
		      // - Firefox says "null", but treats file: URLs as same-origin sometimes based on directory stuff; see
		      //   https://developer.mozilla.org/en-US/docs/Archive/Misc_top_level/Same-origin_policy_for_file:_URIs
		      return "null";
		    default:
		      // serializing an opaque origin returns "null"
		      return "null";
		  }
		};

		module.exports.basicURLParse = function (input, options) {
		  if (options === undefined) {
		    options = {};
		  }

		  const usm = new URLStateMachine(input, options.baseURL, options.encodingOverride, options.url, options.stateOverride);
		  if (usm.failure) {
		    return null;
		  }

		  return usm.url;
		};

		module.exports.setTheUsername = function (url, username) {
		  url.username = utf8PercentEncodeString(username, isUserinfoPercentEncode);
		};

		module.exports.setThePassword = function (url, password) {
		  url.password = utf8PercentEncodeString(password, isUserinfoPercentEncode);
		};

		module.exports.serializeHost = serializeHost;

		module.exports.cannotHaveAUsernamePasswordPort = cannotHaveAUsernamePasswordPort;

		module.exports.hasAnOpaquePath = hasAnOpaquePath;

		module.exports.serializeInteger = function (integer) {
		  return String(integer);
		};

		module.exports.parseURL = function (input, options) {
		  if (options === undefined) {
		    options = {};
		  }

		  // We don't handle blobs, so this just delegates:
		  return module.exports.basicURLParse(input, { baseURL: options.baseURL, encodingOverride: options.encodingOverride });
		}; 
	} (urlStateMachine));
	return urlStateMachine.exports;
}

var urlencoded;
var hasRequiredUrlencoded;

function requireUrlencoded () {
	if (hasRequiredUrlencoded) return urlencoded;
	hasRequiredUrlencoded = 1;
	const { utf8Encode, utf8DecodeWithoutBOM } = requireEncoding();
	const { percentDecodeBytes, utf8PercentEncodeString, isURLEncodedPercentEncode } = requirePercentEncoding();

	function p(char) {
	  return char.codePointAt(0);
	}

	// https://url.spec.whatwg.org/#concept-urlencoded-parser
	function parseUrlencoded(input) {
	  const sequences = strictlySplitByteSequence(input, p("&"));
	  const output = [];
	  for (const bytes of sequences) {
	    if (bytes.length === 0) {
	      continue;
	    }

	    let name, value;
	    const indexOfEqual = bytes.indexOf(p("="));

	    if (indexOfEqual >= 0) {
	      name = bytes.slice(0, indexOfEqual);
	      value = bytes.slice(indexOfEqual + 1);
	    } else {
	      name = bytes;
	      value = new Uint8Array(0);
	    }

	    name = replaceByteInByteSequence(name, 0x2B, 0x20);
	    value = replaceByteInByteSequence(value, 0x2B, 0x20);

	    const nameString = utf8DecodeWithoutBOM(percentDecodeBytes(name));
	    const valueString = utf8DecodeWithoutBOM(percentDecodeBytes(value));

	    output.push([nameString, valueString]);
	  }
	  return output;
	}

	// https://url.spec.whatwg.org/#concept-urlencoded-string-parser
	function parseUrlencodedString(input) {
	  return parseUrlencoded(utf8Encode(input));
	}

	// https://url.spec.whatwg.org/#concept-urlencoded-serializer
	function serializeUrlencoded(tuples, encodingOverride = undefined) {
	  let encoding = "utf-8";
	  if (encodingOverride !== undefined) {
	    // TODO "get the output encoding", i.e. handle encoding labels vs. names.
	    encoding = encodingOverride;
	  }

	  let output = "";
	  for (const [i, tuple] of tuples.entries()) {
	    // TODO: handle encoding override

	    const name = utf8PercentEncodeString(tuple[0], isURLEncodedPercentEncode, true);

	    let value = tuple[1];
	    if (tuple.length > 2 && tuple[2] !== undefined) {
	      if (tuple[2] === "hidden" && name === "_charset_") {
	        value = encoding;
	      } else if (tuple[2] === "file") {
	        // value is a File object
	        value = value.name;
	      }
	    }

	    value = utf8PercentEncodeString(value, isURLEncodedPercentEncode, true);

	    if (i !== 0) {
	      output += "&";
	    }
	    output += `${name}=${value}`;
	  }
	  return output;
	}

	function strictlySplitByteSequence(buf, cp) {
	  const list = [];
	  let last = 0;
	  let i = buf.indexOf(cp);
	  while (i >= 0) {
	    list.push(buf.slice(last, i));
	    last = i + 1;
	    i = buf.indexOf(cp, last);
	  }
	  if (last !== buf.length) {
	    list.push(buf.slice(last));
	  }
	  return list;
	}

	function replaceByteInByteSequence(buf, from, to) {
	  let i = buf.indexOf(from);
	  while (i >= 0) {
	    buf[i] = to;
	    i = buf.indexOf(from, i + 1);
	  }
	  return buf;
	}

	urlencoded = {
	  parseUrlencodedString,
	  serializeUrlencoded
	};
	return urlencoded;
}

var URLSearchParams = {};

var _Function = {};

var hasRequired_Function;

function require_Function () {
	if (hasRequired_Function) return _Function;
	hasRequired_Function = 1;

	const conversions = requireLib();
	const utils = requireUtils();

	_Function.convert = (globalObject, value, { context = "The provided value" } = {}) => {
	  if (typeof value !== "function") {
	    throw new globalObject.TypeError(context + " is not a function");
	  }

	  function invokeTheCallbackFunction(...args) {
	    const thisArg = utils.tryWrapperForImpl(this);
	    let callResult;

	    for (let i = 0; i < args.length; i++) {
	      args[i] = utils.tryWrapperForImpl(args[i]);
	    }

	    callResult = Reflect.apply(value, thisArg, args);

	    callResult = conversions["any"](callResult, { context: context, globals: globalObject });

	    return callResult;
	  }

	  invokeTheCallbackFunction.construct = (...args) => {
	    for (let i = 0; i < args.length; i++) {
	      args[i] = utils.tryWrapperForImpl(args[i]);
	    }

	    let callResult = Reflect.construct(value, args);

	    callResult = conversions["any"](callResult, { context: context, globals: globalObject });

	    return callResult;
	  };

	  invokeTheCallbackFunction[utils.wrapperSymbol] = value;
	  invokeTheCallbackFunction.objectReference = value;

	  return invokeTheCallbackFunction;
	};
	return _Function;
}

var URLSearchParamsImpl = {};

var hasRequiredURLSearchParamsImpl;

function requireURLSearchParamsImpl () {
	if (hasRequiredURLSearchParamsImpl) return URLSearchParamsImpl;
	hasRequiredURLSearchParamsImpl = 1;
	const urlencoded = requireUrlencoded();

	URLSearchParamsImpl.implementation = class URLSearchParamsImpl {
	  constructor(globalObject, constructorArgs, { doNotStripQMark = false }) {
	    let init = constructorArgs[0];
	    this._list = [];
	    this._url = null;

	    if (!doNotStripQMark && typeof init === "string" && init[0] === "?") {
	      init = init.slice(1);
	    }

	    if (Array.isArray(init)) {
	      for (const pair of init) {
	        if (pair.length !== 2) {
	          throw new TypeError("Failed to construct 'URLSearchParams': parameter 1 sequence's element does not " +
	                              "contain exactly two elements.");
	        }
	        this._list.push([pair[0], pair[1]]);
	      }
	    } else if (typeof init === "object" && Object.getPrototypeOf(init) === null) {
	      for (const name of Object.keys(init)) {
	        const value = init[name];
	        this._list.push([name, value]);
	      }
	    } else {
	      this._list = urlencoded.parseUrlencodedString(init);
	    }
	  }

	  _updateSteps() {
	    if (this._url !== null) {
	      let serializedQuery = urlencoded.serializeUrlencoded(this._list);
	      if (serializedQuery === "") {
	        serializedQuery = null;
	      }

	      this._url._url.query = serializedQuery;

	      if (serializedQuery === null) {
	        this._url._potentiallyStripTrailingSpacesFromAnOpaquePath();
	      }
	    }
	  }

	  get size() {
	    return this._list.length;
	  }

	  append(name, value) {
	    this._list.push([name, value]);
	    this._updateSteps();
	  }

	  delete(name, value) {
	    let i = 0;
	    while (i < this._list.length) {
	      if (this._list[i][0] === name && (value === undefined || this._list[i][1] === value)) {
	        this._list.splice(i, 1);
	      } else {
	        i++;
	      }
	    }
	    this._updateSteps();
	  }

	  get(name) {
	    for (const tuple of this._list) {
	      if (tuple[0] === name) {
	        return tuple[1];
	      }
	    }
	    return null;
	  }

	  getAll(name) {
	    const output = [];
	    for (const tuple of this._list) {
	      if (tuple[0] === name) {
	        output.push(tuple[1]);
	      }
	    }
	    return output;
	  }

	  has(name, value) {
	    for (const tuple of this._list) {
	      if (tuple[0] === name && (value === undefined || tuple[1] === value)) {
	        return true;
	      }
	    }
	    return false;
	  }

	  set(name, value) {
	    let found = false;
	    let i = 0;
	    while (i < this._list.length) {
	      if (this._list[i][0] === name) {
	        if (found) {
	          this._list.splice(i, 1);
	        } else {
	          found = true;
	          this._list[i][1] = value;
	          i++;
	        }
	      } else {
	        i++;
	      }
	    }
	    if (!found) {
	      this._list.push([name, value]);
	    }
	    this._updateSteps();
	  }

	  sort() {
	    this._list.sort((a, b) => {
	      if (a[0] < b[0]) {
	        return -1;
	      }
	      if (a[0] > b[0]) {
	        return 1;
	      }
	      return 0;
	    });

	    this._updateSteps();
	  }

	  [Symbol.iterator]() {
	    return this._list[Symbol.iterator]();
	  }

	  toString() {
	    return urlencoded.serializeUrlencoded(this._list);
	  }
	};
	return URLSearchParamsImpl;
}

var hasRequiredURLSearchParams;

function requireURLSearchParams () {
	if (hasRequiredURLSearchParams) return URLSearchParams;
	hasRequiredURLSearchParams = 1;
	(function (exports) {

		const conversions = requireLib();
		const utils = requireUtils();

		const Function = require_Function();
		const newObjectInRealm = utils.newObjectInRealm;
		const implSymbol = utils.implSymbol;
		const ctorRegistrySymbol = utils.ctorRegistrySymbol;

		const interfaceName = "URLSearchParams";

		exports.is = value => {
		  return utils.isObject(value) && utils.hasOwn(value, implSymbol) && value[implSymbol] instanceof Impl.implementation;
		};
		exports.isImpl = value => {
		  return utils.isObject(value) && value instanceof Impl.implementation;
		};
		exports.convert = (globalObject, value, { context = "The provided value" } = {}) => {
		  if (exports.is(value)) {
		    return utils.implForWrapper(value);
		  }
		  throw new globalObject.TypeError(`${context} is not of type 'URLSearchParams'.`);
		};

		exports.createDefaultIterator = (globalObject, target, kind) => {
		  const ctorRegistry = globalObject[ctorRegistrySymbol];
		  const iteratorPrototype = ctorRegistry["URLSearchParams Iterator"];
		  const iterator = Object.create(iteratorPrototype);
		  Object.defineProperty(iterator, utils.iterInternalSymbol, {
		    value: { target, kind, index: 0 },
		    configurable: true
		  });
		  return iterator;
		};

		function makeWrapper(globalObject, newTarget) {
		  let proto;
		  if (newTarget !== undefined) {
		    proto = newTarget.prototype;
		  }

		  if (!utils.isObject(proto)) {
		    proto = globalObject[ctorRegistrySymbol]["URLSearchParams"].prototype;
		  }

		  return Object.create(proto);
		}

		exports.create = (globalObject, constructorArgs, privateData) => {
		  const wrapper = makeWrapper(globalObject);
		  return exports.setup(wrapper, globalObject, constructorArgs, privateData);
		};

		exports.createImpl = (globalObject, constructorArgs, privateData) => {
		  const wrapper = exports.create(globalObject, constructorArgs, privateData);
		  return utils.implForWrapper(wrapper);
		};

		exports._internalSetup = (wrapper, globalObject) => {};

		exports.setup = (wrapper, globalObject, constructorArgs = [], privateData = {}) => {
		  privateData.wrapper = wrapper;

		  exports._internalSetup(wrapper, globalObject);
		  Object.defineProperty(wrapper, implSymbol, {
		    value: new Impl.implementation(globalObject, constructorArgs, privateData),
		    configurable: true
		  });

		  wrapper[implSymbol][utils.wrapperSymbol] = wrapper;
		  if (Impl.init) {
		    Impl.init(wrapper[implSymbol]);
		  }
		  return wrapper;
		};

		exports.new = (globalObject, newTarget) => {
		  const wrapper = makeWrapper(globalObject, newTarget);

		  exports._internalSetup(wrapper, globalObject);
		  Object.defineProperty(wrapper, implSymbol, {
		    value: Object.create(Impl.implementation.prototype),
		    configurable: true
		  });

		  wrapper[implSymbol][utils.wrapperSymbol] = wrapper;
		  if (Impl.init) {
		    Impl.init(wrapper[implSymbol]);
		  }
		  return wrapper[implSymbol];
		};

		const exposed = new Set(["Window", "Worker"]);

		exports.install = (globalObject, globalNames) => {
		  if (!globalNames.some(globalName => exposed.has(globalName))) {
		    return;
		  }

		  const ctorRegistry = utils.initCtorRegistry(globalObject);
		  class URLSearchParams {
		    constructor() {
		      const args = [];
		      {
		        let curArg = arguments[0];
		        if (curArg !== undefined) {
		          if (utils.isObject(curArg)) {
		            if (curArg[Symbol.iterator] !== undefined) {
		              if (!utils.isObject(curArg)) {
		                throw new globalObject.TypeError(
		                  "Failed to construct 'URLSearchParams': parameter 1" + " sequence" + " is not an iterable object."
		                );
		              } else {
		                const V = [];
		                const tmp = curArg;
		                for (let nextItem of tmp) {
		                  if (!utils.isObject(nextItem)) {
		                    throw new globalObject.TypeError(
		                      "Failed to construct 'URLSearchParams': parameter 1" +
		                        " sequence" +
		                        "'s element" +
		                        " is not an iterable object."
		                    );
		                  } else {
		                    const V = [];
		                    const tmp = nextItem;
		                    for (let nextItem of tmp) {
		                      nextItem = conversions["USVString"](nextItem, {
		                        context:
		                          "Failed to construct 'URLSearchParams': parameter 1" +
		                          " sequence" +
		                          "'s element" +
		                          "'s element",
		                        globals: globalObject
		                      });

		                      V.push(nextItem);
		                    }
		                    nextItem = V;
		                  }

		                  V.push(nextItem);
		                }
		                curArg = V;
		              }
		            } else {
		              if (!utils.isObject(curArg)) {
		                throw new globalObject.TypeError(
		                  "Failed to construct 'URLSearchParams': parameter 1" + " record" + " is not an object."
		                );
		              } else {
		                const result = Object.create(null);
		                for (const key of Reflect.ownKeys(curArg)) {
		                  const desc = Object.getOwnPropertyDescriptor(curArg, key);
		                  if (desc && desc.enumerable) {
		                    let typedKey = key;

		                    typedKey = conversions["USVString"](typedKey, {
		                      context: "Failed to construct 'URLSearchParams': parameter 1" + " record" + "'s key",
		                      globals: globalObject
		                    });

		                    let typedValue = curArg[key];

		                    typedValue = conversions["USVString"](typedValue, {
		                      context: "Failed to construct 'URLSearchParams': parameter 1" + " record" + "'s value",
		                      globals: globalObject
		                    });

		                    result[typedKey] = typedValue;
		                  }
		                }
		                curArg = result;
		              }
		            }
		          } else {
		            curArg = conversions["USVString"](curArg, {
		              context: "Failed to construct 'URLSearchParams': parameter 1",
		              globals: globalObject
		            });
		          }
		        } else {
		          curArg = "";
		        }
		        args.push(curArg);
		      }
		      return exports.setup(Object.create(new.target.prototype), globalObject, args);
		    }

		    append(name, value) {
		      const esValue = this !== null && this !== undefined ? this : globalObject;
		      if (!exports.is(esValue)) {
		        throw new globalObject.TypeError(
		          "'append' called on an object that is not a valid instance of URLSearchParams."
		        );
		      }

		      if (arguments.length < 2) {
		        throw new globalObject.TypeError(
		          `Failed to execute 'append' on 'URLSearchParams': 2 arguments required, but only ${arguments.length} present.`
		        );
		      }
		      const args = [];
		      {
		        let curArg = arguments[0];
		        curArg = conversions["USVString"](curArg, {
		          context: "Failed to execute 'append' on 'URLSearchParams': parameter 1",
		          globals: globalObject
		        });
		        args.push(curArg);
		      }
		      {
		        let curArg = arguments[1];
		        curArg = conversions["USVString"](curArg, {
		          context: "Failed to execute 'append' on 'URLSearchParams': parameter 2",
		          globals: globalObject
		        });
		        args.push(curArg);
		      }
		      return utils.tryWrapperForImpl(esValue[implSymbol].append(...args));
		    }

		    delete(name) {
		      const esValue = this !== null && this !== undefined ? this : globalObject;
		      if (!exports.is(esValue)) {
		        throw new globalObject.TypeError(
		          "'delete' called on an object that is not a valid instance of URLSearchParams."
		        );
		      }

		      if (arguments.length < 1) {
		        throw new globalObject.TypeError(
		          `Failed to execute 'delete' on 'URLSearchParams': 1 argument required, but only ${arguments.length} present.`
		        );
		      }
		      const args = [];
		      {
		        let curArg = arguments[0];
		        curArg = conversions["USVString"](curArg, {
		          context: "Failed to execute 'delete' on 'URLSearchParams': parameter 1",
		          globals: globalObject
		        });
		        args.push(curArg);
		      }
		      {
		        let curArg = arguments[1];
		        if (curArg !== undefined) {
		          curArg = conversions["USVString"](curArg, {
		            context: "Failed to execute 'delete' on 'URLSearchParams': parameter 2",
		            globals: globalObject
		          });
		        }
		        args.push(curArg);
		      }
		      return utils.tryWrapperForImpl(esValue[implSymbol].delete(...args));
		    }

		    get(name) {
		      const esValue = this !== null && this !== undefined ? this : globalObject;
		      if (!exports.is(esValue)) {
		        throw new globalObject.TypeError("'get' called on an object that is not a valid instance of URLSearchParams.");
		      }

		      if (arguments.length < 1) {
		        throw new globalObject.TypeError(
		          `Failed to execute 'get' on 'URLSearchParams': 1 argument required, but only ${arguments.length} present.`
		        );
		      }
		      const args = [];
		      {
		        let curArg = arguments[0];
		        curArg = conversions["USVString"](curArg, {
		          context: "Failed to execute 'get' on 'URLSearchParams': parameter 1",
		          globals: globalObject
		        });
		        args.push(curArg);
		      }
		      return esValue[implSymbol].get(...args);
		    }

		    getAll(name) {
		      const esValue = this !== null && this !== undefined ? this : globalObject;
		      if (!exports.is(esValue)) {
		        throw new globalObject.TypeError(
		          "'getAll' called on an object that is not a valid instance of URLSearchParams."
		        );
		      }

		      if (arguments.length < 1) {
		        throw new globalObject.TypeError(
		          `Failed to execute 'getAll' on 'URLSearchParams': 1 argument required, but only ${arguments.length} present.`
		        );
		      }
		      const args = [];
		      {
		        let curArg = arguments[0];
		        curArg = conversions["USVString"](curArg, {
		          context: "Failed to execute 'getAll' on 'URLSearchParams': parameter 1",
		          globals: globalObject
		        });
		        args.push(curArg);
		      }
		      return utils.tryWrapperForImpl(esValue[implSymbol].getAll(...args));
		    }

		    has(name) {
		      const esValue = this !== null && this !== undefined ? this : globalObject;
		      if (!exports.is(esValue)) {
		        throw new globalObject.TypeError("'has' called on an object that is not a valid instance of URLSearchParams.");
		      }

		      if (arguments.length < 1) {
		        throw new globalObject.TypeError(
		          `Failed to execute 'has' on 'URLSearchParams': 1 argument required, but only ${arguments.length} present.`
		        );
		      }
		      const args = [];
		      {
		        let curArg = arguments[0];
		        curArg = conversions["USVString"](curArg, {
		          context: "Failed to execute 'has' on 'URLSearchParams': parameter 1",
		          globals: globalObject
		        });
		        args.push(curArg);
		      }
		      {
		        let curArg = arguments[1];
		        if (curArg !== undefined) {
		          curArg = conversions["USVString"](curArg, {
		            context: "Failed to execute 'has' on 'URLSearchParams': parameter 2",
		            globals: globalObject
		          });
		        }
		        args.push(curArg);
		      }
		      return esValue[implSymbol].has(...args);
		    }

		    set(name, value) {
		      const esValue = this !== null && this !== undefined ? this : globalObject;
		      if (!exports.is(esValue)) {
		        throw new globalObject.TypeError("'set' called on an object that is not a valid instance of URLSearchParams.");
		      }

		      if (arguments.length < 2) {
		        throw new globalObject.TypeError(
		          `Failed to execute 'set' on 'URLSearchParams': 2 arguments required, but only ${arguments.length} present.`
		        );
		      }
		      const args = [];
		      {
		        let curArg = arguments[0];
		        curArg = conversions["USVString"](curArg, {
		          context: "Failed to execute 'set' on 'URLSearchParams': parameter 1",
		          globals: globalObject
		        });
		        args.push(curArg);
		      }
		      {
		        let curArg = arguments[1];
		        curArg = conversions["USVString"](curArg, {
		          context: "Failed to execute 'set' on 'URLSearchParams': parameter 2",
		          globals: globalObject
		        });
		        args.push(curArg);
		      }
		      return utils.tryWrapperForImpl(esValue[implSymbol].set(...args));
		    }

		    sort() {
		      const esValue = this !== null && this !== undefined ? this : globalObject;
		      if (!exports.is(esValue)) {
		        throw new globalObject.TypeError("'sort' called on an object that is not a valid instance of URLSearchParams.");
		      }

		      return utils.tryWrapperForImpl(esValue[implSymbol].sort());
		    }

		    toString() {
		      const esValue = this !== null && this !== undefined ? this : globalObject;
		      if (!exports.is(esValue)) {
		        throw new globalObject.TypeError(
		          "'toString' called on an object that is not a valid instance of URLSearchParams."
		        );
		      }

		      return esValue[implSymbol].toString();
		    }

		    keys() {
		      if (!exports.is(this)) {
		        throw new globalObject.TypeError("'keys' called on an object that is not a valid instance of URLSearchParams.");
		      }
		      return exports.createDefaultIterator(globalObject, this, "key");
		    }

		    values() {
		      if (!exports.is(this)) {
		        throw new globalObject.TypeError(
		          "'values' called on an object that is not a valid instance of URLSearchParams."
		        );
		      }
		      return exports.createDefaultIterator(globalObject, this, "value");
		    }

		    entries() {
		      if (!exports.is(this)) {
		        throw new globalObject.TypeError(
		          "'entries' called on an object that is not a valid instance of URLSearchParams."
		        );
		      }
		      return exports.createDefaultIterator(globalObject, this, "key+value");
		    }

		    forEach(callback) {
		      if (!exports.is(this)) {
		        throw new globalObject.TypeError(
		          "'forEach' called on an object that is not a valid instance of URLSearchParams."
		        );
		      }
		      if (arguments.length < 1) {
		        throw new globalObject.TypeError(
		          "Failed to execute 'forEach' on 'iterable': 1 argument required, but only 0 present."
		        );
		      }
		      callback = Function.convert(globalObject, callback, {
		        context: "Failed to execute 'forEach' on 'iterable': The callback provided as parameter 1"
		      });
		      const thisArg = arguments[1];
		      let pairs = Array.from(this[implSymbol]);
		      let i = 0;
		      while (i < pairs.length) {
		        const [key, value] = pairs[i].map(utils.tryWrapperForImpl);
		        callback.call(thisArg, value, key, this);
		        pairs = Array.from(this[implSymbol]);
		        i++;
		      }
		    }

		    get size() {
		      const esValue = this !== null && this !== undefined ? this : globalObject;

		      if (!exports.is(esValue)) {
		        throw new globalObject.TypeError(
		          "'get size' called on an object that is not a valid instance of URLSearchParams."
		        );
		      }

		      return esValue[implSymbol]["size"];
		    }
		  }
		  Object.defineProperties(URLSearchParams.prototype, {
		    append: { enumerable: true },
		    delete: { enumerable: true },
		    get: { enumerable: true },
		    getAll: { enumerable: true },
		    has: { enumerable: true },
		    set: { enumerable: true },
		    sort: { enumerable: true },
		    toString: { enumerable: true },
		    keys: { enumerable: true },
		    values: { enumerable: true },
		    entries: { enumerable: true },
		    forEach: { enumerable: true },
		    size: { enumerable: true },
		    [Symbol.toStringTag]: { value: "URLSearchParams", configurable: true },
		    [Symbol.iterator]: { value: URLSearchParams.prototype.entries, configurable: true, writable: true }
		  });
		  ctorRegistry[interfaceName] = URLSearchParams;

		  ctorRegistry["URLSearchParams Iterator"] = Object.create(ctorRegistry["%IteratorPrototype%"], {
		    [Symbol.toStringTag]: {
		      configurable: true,
		      value: "URLSearchParams Iterator"
		    }
		  });
		  utils.define(ctorRegistry["URLSearchParams Iterator"], {
		    next() {
		      const internal = this && this[utils.iterInternalSymbol];
		      if (!internal) {
		        throw new globalObject.TypeError("next() called on a value that is not a URLSearchParams iterator object");
		      }

		      const { target, kind, index } = internal;
		      const values = Array.from(target[implSymbol]);
		      const len = values.length;
		      if (index >= len) {
		        return newObjectInRealm(globalObject, { value: undefined, done: true });
		      }

		      const pair = values[index];
		      internal.index = index + 1;
		      return newObjectInRealm(globalObject, utils.iteratorResult(pair.map(utils.tryWrapperForImpl), kind));
		    }
		  });

		  Object.defineProperty(globalObject, interfaceName, {
		    configurable: true,
		    writable: true,
		    value: URLSearchParams
		  });
		};

		const Impl = requireURLSearchParamsImpl(); 
	} (URLSearchParams));
	return URLSearchParams;
}

var hasRequiredURLImpl;

function requireURLImpl () {
	if (hasRequiredURLImpl) return URLImpl;
	hasRequiredURLImpl = 1;
	const usm = requireUrlStateMachine();
	const urlencoded = requireUrlencoded();
	const URLSearchParams = requireURLSearchParams();

	URLImpl.implementation = class URLImpl {
	  // Unlike the spec, we duplicate some code between the constructor and canParse, because we want to give useful error
	  // messages in the constructor that distinguish between the different causes of failure.
	  constructor(globalObject, [url, base]) {
	    let parsedBase = null;
	    if (base !== undefined) {
	      parsedBase = usm.basicURLParse(base);
	      if (parsedBase === null) {
	        throw new TypeError(`Invalid base URL: ${base}`);
	      }
	    }

	    const parsedURL = usm.basicURLParse(url, { baseURL: parsedBase });
	    if (parsedURL === null) {
	      throw new TypeError(`Invalid URL: ${url}`);
	    }

	    const query = parsedURL.query !== null ? parsedURL.query : "";

	    this._url = parsedURL;

	    // We cannot invoke the "new URLSearchParams object" algorithm without going through the constructor, which strips
	    // question mark by default. Therefore the doNotStripQMark hack is used.
	    this._query = URLSearchParams.createImpl(globalObject, [query], { doNotStripQMark: true });
	    this._query._url = this;
	  }

	  static parse(globalObject, input, base) {
	    try {
	      return new URLImpl(globalObject, [input, base]);
	    } catch {
	      return null;
	    }
	  }

	  static canParse(url, base) {
	    let parsedBase = null;
	    if (base !== undefined) {
	      parsedBase = usm.basicURLParse(base);
	      if (parsedBase === null) {
	        return false;
	      }
	    }

	    const parsedURL = usm.basicURLParse(url, { baseURL: parsedBase });
	    if (parsedURL === null) {
	      return false;
	    }

	    return true;
	  }

	  get href() {
	    return usm.serializeURL(this._url);
	  }

	  set href(v) {
	    const parsedURL = usm.basicURLParse(v);
	    if (parsedURL === null) {
	      throw new TypeError(`Invalid URL: ${v}`);
	    }

	    this._url = parsedURL;

	    this._query._list.splice(0);
	    const { query } = parsedURL;
	    if (query !== null) {
	      this._query._list = urlencoded.parseUrlencodedString(query);
	    }
	  }

	  get origin() {
	    return usm.serializeURLOrigin(this._url);
	  }

	  get protocol() {
	    return `${this._url.scheme}:`;
	  }

	  set protocol(v) {
	    usm.basicURLParse(`${v}:`, { url: this._url, stateOverride: "scheme start" });
	  }

	  get username() {
	    return this._url.username;
	  }

	  set username(v) {
	    if (usm.cannotHaveAUsernamePasswordPort(this._url)) {
	      return;
	    }

	    usm.setTheUsername(this._url, v);
	  }

	  get password() {
	    return this._url.password;
	  }

	  set password(v) {
	    if (usm.cannotHaveAUsernamePasswordPort(this._url)) {
	      return;
	    }

	    usm.setThePassword(this._url, v);
	  }

	  get host() {
	    const url = this._url;

	    if (url.host === null) {
	      return "";
	    }

	    if (url.port === null) {
	      return usm.serializeHost(url.host);
	    }

	    return `${usm.serializeHost(url.host)}:${usm.serializeInteger(url.port)}`;
	  }

	  set host(v) {
	    if (usm.hasAnOpaquePath(this._url)) {
	      return;
	    }

	    usm.basicURLParse(v, { url: this._url, stateOverride: "host" });
	  }

	  get hostname() {
	    if (this._url.host === null) {
	      return "";
	    }

	    return usm.serializeHost(this._url.host);
	  }

	  set hostname(v) {
	    if (usm.hasAnOpaquePath(this._url)) {
	      return;
	    }

	    usm.basicURLParse(v, { url: this._url, stateOverride: "hostname" });
	  }

	  get port() {
	    if (this._url.port === null) {
	      return "";
	    }

	    return usm.serializeInteger(this._url.port);
	  }

	  set port(v) {
	    if (usm.cannotHaveAUsernamePasswordPort(this._url)) {
	      return;
	    }

	    if (v === "") {
	      this._url.port = null;
	    } else {
	      usm.basicURLParse(v, { url: this._url, stateOverride: "port" });
	    }
	  }

	  get pathname() {
	    return usm.serializePath(this._url);
	  }

	  set pathname(v) {
	    if (usm.hasAnOpaquePath(this._url)) {
	      return;
	    }

	    this._url.path = [];
	    usm.basicURLParse(v, { url: this._url, stateOverride: "path start" });
	  }

	  get search() {
	    if (this._url.query === null || this._url.query === "") {
	      return "";
	    }

	    return `?${this._url.query}`;
	  }

	  set search(v) {
	    const url = this._url;

	    if (v === "") {
	      url.query = null;
	      this._query._list = [];
	      this._potentiallyStripTrailingSpacesFromAnOpaquePath();
	      return;
	    }

	    const input = v[0] === "?" ? v.substring(1) : v;
	    url.query = "";
	    usm.basicURLParse(input, { url, stateOverride: "query" });
	    this._query._list = urlencoded.parseUrlencodedString(input);
	  }

	  get searchParams() {
	    return this._query;
	  }

	  get hash() {
	    if (this._url.fragment === null || this._url.fragment === "") {
	      return "";
	    }

	    return `#${this._url.fragment}`;
	  }

	  set hash(v) {
	    if (v === "") {
	      this._url.fragment = null;
	      this._potentiallyStripTrailingSpacesFromAnOpaquePath();
	      return;
	    }

	    const input = v[0] === "#" ? v.substring(1) : v;
	    this._url.fragment = "";
	    usm.basicURLParse(input, { url: this._url, stateOverride: "fragment" });
	  }

	  toJSON() {
	    return this.href;
	  }

	  _potentiallyStripTrailingSpacesFromAnOpaquePath() {
	    if (!usm.hasAnOpaquePath(this._url)) {
	      return;
	    }

	    if (this._url.fragment !== null) {
	      return;
	    }

	    if (this._url.query !== null) {
	      return;
	    }

	    this._url.path = this._url.path.replace(/\u0020+$/u, "");
	  }
	};
	return URLImpl;
}

var hasRequiredURL;

function requireURL () {
	if (hasRequiredURL) return URL;
	hasRequiredURL = 1;
	(function (exports) {

		const conversions = requireLib();
		const utils = requireUtils();

		const implSymbol = utils.implSymbol;
		const ctorRegistrySymbol = utils.ctorRegistrySymbol;

		const interfaceName = "URL";

		exports.is = value => {
		  return utils.isObject(value) && utils.hasOwn(value, implSymbol) && value[implSymbol] instanceof Impl.implementation;
		};
		exports.isImpl = value => {
		  return utils.isObject(value) && value instanceof Impl.implementation;
		};
		exports.convert = (globalObject, value, { context = "The provided value" } = {}) => {
		  if (exports.is(value)) {
		    return utils.implForWrapper(value);
		  }
		  throw new globalObject.TypeError(`${context} is not of type 'URL'.`);
		};

		function makeWrapper(globalObject, newTarget) {
		  let proto;
		  if (newTarget !== undefined) {
		    proto = newTarget.prototype;
		  }

		  if (!utils.isObject(proto)) {
		    proto = globalObject[ctorRegistrySymbol]["URL"].prototype;
		  }

		  return Object.create(proto);
		}

		exports.create = (globalObject, constructorArgs, privateData) => {
		  const wrapper = makeWrapper(globalObject);
		  return exports.setup(wrapper, globalObject, constructorArgs, privateData);
		};

		exports.createImpl = (globalObject, constructorArgs, privateData) => {
		  const wrapper = exports.create(globalObject, constructorArgs, privateData);
		  return utils.implForWrapper(wrapper);
		};

		exports._internalSetup = (wrapper, globalObject) => {};

		exports.setup = (wrapper, globalObject, constructorArgs = [], privateData = {}) => {
		  privateData.wrapper = wrapper;

		  exports._internalSetup(wrapper, globalObject);
		  Object.defineProperty(wrapper, implSymbol, {
		    value: new Impl.implementation(globalObject, constructorArgs, privateData),
		    configurable: true
		  });

		  wrapper[implSymbol][utils.wrapperSymbol] = wrapper;
		  if (Impl.init) {
		    Impl.init(wrapper[implSymbol]);
		  }
		  return wrapper;
		};

		exports.new = (globalObject, newTarget) => {
		  const wrapper = makeWrapper(globalObject, newTarget);

		  exports._internalSetup(wrapper, globalObject);
		  Object.defineProperty(wrapper, implSymbol, {
		    value: Object.create(Impl.implementation.prototype),
		    configurable: true
		  });

		  wrapper[implSymbol][utils.wrapperSymbol] = wrapper;
		  if (Impl.init) {
		    Impl.init(wrapper[implSymbol]);
		  }
		  return wrapper[implSymbol];
		};

		const exposed = new Set(["Window", "Worker"]);

		exports.install = (globalObject, globalNames) => {
		  if (!globalNames.some(globalName => exposed.has(globalName))) {
		    return;
		  }

		  const ctorRegistry = utils.initCtorRegistry(globalObject);
		  class URL {
		    constructor(url) {
		      if (arguments.length < 1) {
		        throw new globalObject.TypeError(
		          `Failed to construct 'URL': 1 argument required, but only ${arguments.length} present.`
		        );
		      }
		      const args = [];
		      {
		        let curArg = arguments[0];
		        curArg = conversions["USVString"](curArg, {
		          context: "Failed to construct 'URL': parameter 1",
		          globals: globalObject
		        });
		        args.push(curArg);
		      }
		      {
		        let curArg = arguments[1];
		        if (curArg !== undefined) {
		          curArg = conversions["USVString"](curArg, {
		            context: "Failed to construct 'URL': parameter 2",
		            globals: globalObject
		          });
		        }
		        args.push(curArg);
		      }
		      return exports.setup(Object.create(new.target.prototype), globalObject, args);
		    }

		    toJSON() {
		      const esValue = this !== null && this !== undefined ? this : globalObject;
		      if (!exports.is(esValue)) {
		        throw new globalObject.TypeError("'toJSON' called on an object that is not a valid instance of URL.");
		      }

		      return esValue[implSymbol].toJSON();
		    }

		    get href() {
		      const esValue = this !== null && this !== undefined ? this : globalObject;

		      if (!exports.is(esValue)) {
		        throw new globalObject.TypeError("'get href' called on an object that is not a valid instance of URL.");
		      }

		      return esValue[implSymbol]["href"];
		    }

		    set href(V) {
		      const esValue = this !== null && this !== undefined ? this : globalObject;

		      if (!exports.is(esValue)) {
		        throw new globalObject.TypeError("'set href' called on an object that is not a valid instance of URL.");
		      }

		      V = conversions["USVString"](V, {
		        context: "Failed to set the 'href' property on 'URL': The provided value",
		        globals: globalObject
		      });

		      esValue[implSymbol]["href"] = V;
		    }

		    toString() {
		      const esValue = this;
		      if (!exports.is(esValue)) {
		        throw new globalObject.TypeError("'toString' called on an object that is not a valid instance of URL.");
		      }

		      return esValue[implSymbol]["href"];
		    }

		    get origin() {
		      const esValue = this !== null && this !== undefined ? this : globalObject;

		      if (!exports.is(esValue)) {
		        throw new globalObject.TypeError("'get origin' called on an object that is not a valid instance of URL.");
		      }

		      return esValue[implSymbol]["origin"];
		    }

		    get protocol() {
		      const esValue = this !== null && this !== undefined ? this : globalObject;

		      if (!exports.is(esValue)) {
		        throw new globalObject.TypeError("'get protocol' called on an object that is not a valid instance of URL.");
		      }

		      return esValue[implSymbol]["protocol"];
		    }

		    set protocol(V) {
		      const esValue = this !== null && this !== undefined ? this : globalObject;

		      if (!exports.is(esValue)) {
		        throw new globalObject.TypeError("'set protocol' called on an object that is not a valid instance of URL.");
		      }

		      V = conversions["USVString"](V, {
		        context: "Failed to set the 'protocol' property on 'URL': The provided value",
		        globals: globalObject
		      });

		      esValue[implSymbol]["protocol"] = V;
		    }

		    get username() {
		      const esValue = this !== null && this !== undefined ? this : globalObject;

		      if (!exports.is(esValue)) {
		        throw new globalObject.TypeError("'get username' called on an object that is not a valid instance of URL.");
		      }

		      return esValue[implSymbol]["username"];
		    }

		    set username(V) {
		      const esValue = this !== null && this !== undefined ? this : globalObject;

		      if (!exports.is(esValue)) {
		        throw new globalObject.TypeError("'set username' called on an object that is not a valid instance of URL.");
		      }

		      V = conversions["USVString"](V, {
		        context: "Failed to set the 'username' property on 'URL': The provided value",
		        globals: globalObject
		      });

		      esValue[implSymbol]["username"] = V;
		    }

		    get password() {
		      const esValue = this !== null && this !== undefined ? this : globalObject;

		      if (!exports.is(esValue)) {
		        throw new globalObject.TypeError("'get password' called on an object that is not a valid instance of URL.");
		      }

		      return esValue[implSymbol]["password"];
		    }

		    set password(V) {
		      const esValue = this !== null && this !== undefined ? this : globalObject;

		      if (!exports.is(esValue)) {
		        throw new globalObject.TypeError("'set password' called on an object that is not a valid instance of URL.");
		      }

		      V = conversions["USVString"](V, {
		        context: "Failed to set the 'password' property on 'URL': The provided value",
		        globals: globalObject
		      });

		      esValue[implSymbol]["password"] = V;
		    }

		    get host() {
		      const esValue = this !== null && this !== undefined ? this : globalObject;

		      if (!exports.is(esValue)) {
		        throw new globalObject.TypeError("'get host' called on an object that is not a valid instance of URL.");
		      }

		      return esValue[implSymbol]["host"];
		    }

		    set host(V) {
		      const esValue = this !== null && this !== undefined ? this : globalObject;

		      if (!exports.is(esValue)) {
		        throw new globalObject.TypeError("'set host' called on an object that is not a valid instance of URL.");
		      }

		      V = conversions["USVString"](V, {
		        context: "Failed to set the 'host' property on 'URL': The provided value",
		        globals: globalObject
		      });

		      esValue[implSymbol]["host"] = V;
		    }

		    get hostname() {
		      const esValue = this !== null && this !== undefined ? this : globalObject;

		      if (!exports.is(esValue)) {
		        throw new globalObject.TypeError("'get hostname' called on an object that is not a valid instance of URL.");
		      }

		      return esValue[implSymbol]["hostname"];
		    }

		    set hostname(V) {
		      const esValue = this !== null && this !== undefined ? this : globalObject;

		      if (!exports.is(esValue)) {
		        throw new globalObject.TypeError("'set hostname' called on an object that is not a valid instance of URL.");
		      }

		      V = conversions["USVString"](V, {
		        context: "Failed to set the 'hostname' property on 'URL': The provided value",
		        globals: globalObject
		      });

		      esValue[implSymbol]["hostname"] = V;
		    }

		    get port() {
		      const esValue = this !== null && this !== undefined ? this : globalObject;

		      if (!exports.is(esValue)) {
		        throw new globalObject.TypeError("'get port' called on an object that is not a valid instance of URL.");
		      }

		      return esValue[implSymbol]["port"];
		    }

		    set port(V) {
		      const esValue = this !== null && this !== undefined ? this : globalObject;

		      if (!exports.is(esValue)) {
		        throw new globalObject.TypeError("'set port' called on an object that is not a valid instance of URL.");
		      }

		      V = conversions["USVString"](V, {
		        context: "Failed to set the 'port' property on 'URL': The provided value",
		        globals: globalObject
		      });

		      esValue[implSymbol]["port"] = V;
		    }

		    get pathname() {
		      const esValue = this !== null && this !== undefined ? this : globalObject;

		      if (!exports.is(esValue)) {
		        throw new globalObject.TypeError("'get pathname' called on an object that is not a valid instance of URL.");
		      }

		      return esValue[implSymbol]["pathname"];
		    }

		    set pathname(V) {
		      const esValue = this !== null && this !== undefined ? this : globalObject;

		      if (!exports.is(esValue)) {
		        throw new globalObject.TypeError("'set pathname' called on an object that is not a valid instance of URL.");
		      }

		      V = conversions["USVString"](V, {
		        context: "Failed to set the 'pathname' property on 'URL': The provided value",
		        globals: globalObject
		      });

		      esValue[implSymbol]["pathname"] = V;
		    }

		    get search() {
		      const esValue = this !== null && this !== undefined ? this : globalObject;

		      if (!exports.is(esValue)) {
		        throw new globalObject.TypeError("'get search' called on an object that is not a valid instance of URL.");
		      }

		      return esValue[implSymbol]["search"];
		    }

		    set search(V) {
		      const esValue = this !== null && this !== undefined ? this : globalObject;

		      if (!exports.is(esValue)) {
		        throw new globalObject.TypeError("'set search' called on an object that is not a valid instance of URL.");
		      }

		      V = conversions["USVString"](V, {
		        context: "Failed to set the 'search' property on 'URL': The provided value",
		        globals: globalObject
		      });

		      esValue[implSymbol]["search"] = V;
		    }

		    get searchParams() {
		      const esValue = this !== null && this !== undefined ? this : globalObject;

		      if (!exports.is(esValue)) {
		        throw new globalObject.TypeError("'get searchParams' called on an object that is not a valid instance of URL.");
		      }

		      return utils.getSameObject(this, "searchParams", () => {
		        return utils.tryWrapperForImpl(esValue[implSymbol]["searchParams"]);
		      });
		    }

		    get hash() {
		      const esValue = this !== null && this !== undefined ? this : globalObject;

		      if (!exports.is(esValue)) {
		        throw new globalObject.TypeError("'get hash' called on an object that is not a valid instance of URL.");
		      }

		      return esValue[implSymbol]["hash"];
		    }

		    set hash(V) {
		      const esValue = this !== null && this !== undefined ? this : globalObject;

		      if (!exports.is(esValue)) {
		        throw new globalObject.TypeError("'set hash' called on an object that is not a valid instance of URL.");
		      }

		      V = conversions["USVString"](V, {
		        context: "Failed to set the 'hash' property on 'URL': The provided value",
		        globals: globalObject
		      });

		      esValue[implSymbol]["hash"] = V;
		    }

		    static parse(url) {
		      if (arguments.length < 1) {
		        throw new globalObject.TypeError(
		          `Failed to execute 'parse' on 'URL': 1 argument required, but only ${arguments.length} present.`
		        );
		      }
		      const args = [];
		      {
		        let curArg = arguments[0];
		        curArg = conversions["USVString"](curArg, {
		          context: "Failed to execute 'parse' on 'URL': parameter 1",
		          globals: globalObject
		        });
		        args.push(curArg);
		      }
		      {
		        let curArg = arguments[1];
		        if (curArg !== undefined) {
		          curArg = conversions["USVString"](curArg, {
		            context: "Failed to execute 'parse' on 'URL': parameter 2",
		            globals: globalObject
		          });
		        }
		        args.push(curArg);
		      }
		      return utils.tryWrapperForImpl(Impl.implementation.parse(globalObject, ...args));
		    }

		    static canParse(url) {
		      if (arguments.length < 1) {
		        throw new globalObject.TypeError(
		          `Failed to execute 'canParse' on 'URL': 1 argument required, but only ${arguments.length} present.`
		        );
		      }
		      const args = [];
		      {
		        let curArg = arguments[0];
		        curArg = conversions["USVString"](curArg, {
		          context: "Failed to execute 'canParse' on 'URL': parameter 1",
		          globals: globalObject
		        });
		        args.push(curArg);
		      }
		      {
		        let curArg = arguments[1];
		        if (curArg !== undefined) {
		          curArg = conversions["USVString"](curArg, {
		            context: "Failed to execute 'canParse' on 'URL': parameter 2",
		            globals: globalObject
		          });
		        }
		        args.push(curArg);
		      }
		      return Impl.implementation.canParse(...args);
		    }
		  }
		  Object.defineProperties(URL.prototype, {
		    toJSON: { enumerable: true },
		    href: { enumerable: true },
		    toString: { enumerable: true },
		    origin: { enumerable: true },
		    protocol: { enumerable: true },
		    username: { enumerable: true },
		    password: { enumerable: true },
		    host: { enumerable: true },
		    hostname: { enumerable: true },
		    port: { enumerable: true },
		    pathname: { enumerable: true },
		    search: { enumerable: true },
		    searchParams: { enumerable: true },
		    hash: { enumerable: true },
		    [Symbol.toStringTag]: { value: "URL", configurable: true }
		  });
		  Object.defineProperties(URL, { parse: { enumerable: true }, canParse: { enumerable: true } });
		  ctorRegistry[interfaceName] = URL;

		  Object.defineProperty(globalObject, interfaceName, {
		    configurable: true,
		    writable: true,
		    value: URL
		  });

		  if (globalNames.includes("Window")) {
		    Object.defineProperty(globalObject, "webkitURL", {
		      configurable: true,
		      writable: true,
		      value: URL
		    });
		  }
		};

		const Impl = requireURLImpl(); 
	} (URL));
	return URL;
}

var hasRequiredWebidl2jsWrapper;

function requireWebidl2jsWrapper () {
	if (hasRequiredWebidl2jsWrapper) return webidl2jsWrapper;
	hasRequiredWebidl2jsWrapper = 1;

	const URL = requireURL();
	const URLSearchParams = requireURLSearchParams();

	webidl2jsWrapper.URL = URL;
	webidl2jsWrapper.URLSearchParams = URLSearchParams;
	return webidl2jsWrapper;
}

var hasRequiredWhatwgUrl;

function requireWhatwgUrl () {
	if (hasRequiredWhatwgUrl) return whatwgUrl;
	hasRequiredWhatwgUrl = 1;

	const { URL, URLSearchParams } = requireWebidl2jsWrapper();
	const urlStateMachine = requireUrlStateMachine();
	const percentEncoding = requirePercentEncoding();

	const sharedGlobalObject = { Array, Object, Promise, String, TypeError };
	URL.install(sharedGlobalObject, ["Window"]);
	URLSearchParams.install(sharedGlobalObject, ["Window"]);

	whatwgUrl.URL = sharedGlobalObject.URL;
	whatwgUrl.URLSearchParams = sharedGlobalObject.URLSearchParams;

	whatwgUrl.parseURL = urlStateMachine.parseURL;
	whatwgUrl.basicURLParse = urlStateMachine.basicURLParse;
	whatwgUrl.serializeURL = urlStateMachine.serializeURL;
	whatwgUrl.serializePath = urlStateMachine.serializePath;
	whatwgUrl.serializeHost = urlStateMachine.serializeHost;
	whatwgUrl.serializeInteger = urlStateMachine.serializeInteger;
	whatwgUrl.serializeURLOrigin = urlStateMachine.serializeURLOrigin;
	whatwgUrl.setTheUsername = urlStateMachine.setTheUsername;
	whatwgUrl.setThePassword = urlStateMachine.setThePassword;
	whatwgUrl.cannotHaveAUsernamePasswordPort = urlStateMachine.cannotHaveAUsernamePasswordPort;
	whatwgUrl.hasAnOpaquePath = urlStateMachine.hasAnOpaquePath;

	whatwgUrl.percentDecodeString = percentEncoding.percentDecodeString;
	whatwgUrl.percentDecodeBytes = percentEncoding.percentDecodeBytes;
	return whatwgUrl;
}

var whatwgUrlExports = requireWhatwgUrl();

var URL$1 = whatwgUrlExports.URL;
var URLSearchParams$1 = whatwgUrlExports.URLSearchParams;
export { DOMParser, Document, Headers, URL$1 as URL, URLSearchParams$1 as URLSearchParams };
