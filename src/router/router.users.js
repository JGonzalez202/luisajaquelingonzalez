const Usuarios = require("../model/usuarios.model");
const Instituciones = require("../model/instituciones.model")
const where = require("sequelize");
const express = require("express");
const rest = require("express/lib/response");
const router = require("express").Router();

router.post('/consulta/usuarios',async(req,res)=>{
     
})

router.get('/consulta/usuarios',async(req,res)=>{
    const user = await Usuarios.findAll()
    res.status(200).json({
        ok:true,
        status:200,
        body:user
    })
})

router.get('/consulta/usuarios/:idusuario',async(req,res)=>{
    const id = req.params.idusuario;
    const user = await Usuarios.findOne({
        where: {idusuario:id}
    })
    res.status(200).json({
        ok:true,
        status:200,
        body:user
    })
})

router.post('/insertar/usuarios',async(req,res)=>{
    const datos = req.body;
    await Usuarios.sync();
    const creaUsuario = await Usuarios.create({
        
        idusuario: datos.idusuario,
        nombre: datos.nombre,
        paterno: datos.paterno,
        materno: datos.materno, 
        telefono: datos.telefono,
        correo: datos.correo,
        contrasena: datos.contrasena,
        id_perfil: datos.id_perfil,
        id_institutucion: datos.id_institutucion
     
        })

    res.status(200).json({
        ok:true,
        status:200,
        message:"Registro creado"
    })
})

router.put('/actualizar/usuarios/:idusuario', async (req,res)=>{
    const id = req.params.idusuario;
    const datos= req.body;
    const updateProd = await Usuarios.update({
    
        nombre: datos.nombre,
        paterno: datos.paterno,
        materno: datos.materno,
       telefono: datos.telefono,
        correo: datos.correo,
        contrasena: datos.contrasena,
        d_perfil: datos.id_perfil,
        id_institutucion: datos.id_institutucion
            }, 
            {
            where: {
                idusuario:id,
            },
            });
            res.status(201).json({
                ok:true,
                status:200,
                body:updateProd
            } )
    
            
    });  

router.get('/instituciones',async(req, res)=>{
    const institucion = await Instituciones.findAll()
        res.status(200).json({
            ok:true,
            status:200,
            body: institucion
        })
})

router.post('/instituciones',async(req, res)=>{
    const obtenerInstitucion = req.body
    await Instituciones.sync()
    const creaInstitucion = await Instituciones.create({
        idcat_instituciones: obtenerInstitucion.idcat_instituciones,
        descripcion: obtenerInstitucion.descripcion
    })
    res.status(200).json({
        ok:true,
        status:200,
        body: creaInstitucion
    })
})

router.delete('/usuarios/:idusuario',async(req, res)=>{
    const idusuario = req.params.idusuario
    const eliminarUsuario = await Usuarios.destroy({
        where : {
            idusuario: idusuario
        }
    })
        res.status(200).json({
        ok:true,
        status:200,
        body: eliminarUsuario
    })
})

module.exports = router;
