'use-strict';

module.exports = (config,{strapi})=>{
  return async (ctx,next)=>{
let populate = {
  product:{
    populate:true,
    fields:['name']
  },
  customer:{
    populate:true,
    fields:['name']
  }

}
let filters = {

  customer:{id:{
            $eq:1
          }}
}
//     const query = ctx.request.url.split('?')
// if(query){
//   console.log(query);
// const allQueries = query[1].split('&')
// for(let element of allQueries){
//   const oneQuery = element.split('=')
//   console.log(oneQuery);
//   if(oneQuery[0]=='userId')
//     populate['filters'] = {
//   admin_user:{
//     id: {
//     $eq: oneQuery[1],
//   }}}
// }
// }

    strapi.log.info('In order-middleware')


ctx.query ={
  populate,
  filters,
  ...ctx.query
}

    return next()
  }
}
