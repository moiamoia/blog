let modal =
    `create table if not exists article(
     id INT NOT NULL AUTO_INCREMENT,
     title VARCHAR(100) NOT NULL,
     content VARCHAR(5000) NOT NULL,
     create_time DOUBLE NOT NULL,
     is_delete BOOLEAN DEFAULT FALSE,
     PRIMARY KEY ( id )
);`

createTable(modal)

// 发表文章
let create = value => {
  let _sql = "insert into article set title=?,content=?,create_time=?;"
  return query( _sql, value )
}

//查看文章详情
let detail = value=>{
    let _sql = "select title,content,create_time from article where id = ?;"
    return query( _sql, value )
}

//文章列表
let list = value=>{
    let _sql = "select id,title,content,create_time from article order by create_time desc limit ?,?;"
    return query( _sql, value )
}

let update = value=>{
    let _sql = "update article set title=?,content=? where id = ?";
    return query( _sql, value )
}

let count = (value)=>{
    let _sql = "select count(*) from article";
    return query( _sql, value )
}

export {
    create,
    detail,
    list,
    update,
    count,
}