const mongoose = require('mongoose')

const ProductosSchema = mongoose.Schema({
 nombre:{
   type:String,
   required:true,
   trim:true
 },
 existencia:{
   type:Number,
   required:true,
   trim:true
 },
 precio:{
   type:Number,
   required:true,
   trim:true,
 },
 creado:{
   type:Date,
   default:Date.now()
 }
})
ProductosSchema.index({nombre: 'text'}); // nos permite hacer busquedas indexadas por el valor 
module.exports = mongoose.models.procuto || mongoose.model('Producto',ProductosSchema);