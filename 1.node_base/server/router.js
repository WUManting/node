/*配置路由 */ 
const router={
        "/"  :"index.html",
    "/list"  :"list.html",
    "/detail":"detail.html",
    "/a" :"../a.html"//返回上一级的目录
}
/*router.js作为一个config模块，要使用必须先暴露出去 */
// 导出、暴露
module.exports=router