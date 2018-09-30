const Router = require("koa-router");
const Article = require("../controllers/article");

const router = Router({
    prefix:'/api/article'
});


/**
 * @desc 新建文章
 * @post /api/article/create
 * @param {
    title:String,
    content:String,
}
 */
router.post("/create", Article.Create);


/**
 * @desc 编辑文章
 * @post /api/article/update
 * @param {
    id:String,
    title:String,
    content:String,
}
 */
router.post("/update", Article.Update);

/**
 * @desc 文章详情
 * @post /api/article/detail
 * @param id:String
 */
router.post("/detail", Article.Detail);

/**
 * @desc 文章列表
 * @post /api/article/list
 * @param {
        pageSize:Number,
        pageNum:Number,
    }
 */
router.post("/list", Article.List);

module.exports = router;