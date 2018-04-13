import express from "express";
import authenticate from "../middlewares/authenticate";

import request from "request-promise";
import { parseString } from "xml2js";

const router = express.Router();
router.use(authenticate);


router.get("/search", (req, res) => 
{   console.log('req.query.q=',req.query.q);
    request.get('https://www.goodreads.com/search/index.xml?key=JZivw0ci0JrxYxUteeF8g&q='+req.query.q)
   // request.get('https://www.goodreads.com/search/index.xml?key=JZivw0ci0JrxYxUteeF8g&q=t')
          // .then(result =>res.json({result}));
           //.then(result =>parseString(result, (err, goodreadsResult) =>res.json({goodreadsResult})));
           .then(result =>
            parseString(result, (err, goodreadsResult) =>
                            res.json({ books: goodreadsResult.GoodreadsResponse.search[0].results[0].work.map(
                                        work => ({ goodreadsId: work.best_book[0].id[0]._,
                                                    title: work.best_book[0].title[0],
                                                    authors: work.best_book[0].author[0].name[0],
                                                    covers: [work.best_book[0].image_url[0]]
                                                    })
                                            )
                                    })
                        )
                )
 });
      //});
    //  });

    // res.json({   books: [  {  goodreadsId: 1,  title: "aaa",  authors: "author a",
    //                             covers: [  "https://images.gr-assets.com/books/1348990566l/5470.jpg",
    //                                       "https://images.gr-assets.com/books/1504611957l/9577857.jpg"
    //                                     ],
    //                             pages: 3938
    //                         },
    //                         { goodreadsId: 2,  title: "bbb", authors: "author b",
    //                             covers: [  "https://images.gr-assets.com/books/1392791656l/4921.jpg",
    //                                         "https://images.gr-assets.com/books/1312036878l/627830.jpg"
    //                                     ],
    //                             pages: 2536
    //                         }
    //                     ]
    //         });
  // });

   export default router;