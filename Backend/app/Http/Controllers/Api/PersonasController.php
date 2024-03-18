<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Personas;
use Illuminate\Http\Request;

class PersonasController extends Controller
{
    //Funcion para extraer los datos de una persona
    public function index()
    {
        $personas = Personas::all();
        return $personas;
    }
    //Funcion para guardar una persona
    public function store(Request $request)
    {
        $persona = new Personas();
        $persona -> nombre = $request -> nombre;
        $persona -> apellido = $request -> apellido;
        $persona -> edad = $request -> edad;
        $persona -> correo = $request -> correo;
        $persona -> telefono = $request -> telefono;
        $persona -> direccion = $request -> direccion;
        $persona -> ciudad = $request -> ciudad;
        $persona -> codigo_postal = $request -> codigo_postal;
        $persona -> pais = $request -> pais;
        $persona -> tipo_documento = $request -> tipo_documento;
        $persona -> fecha_expedicion = $request -> fecha_expedicion;
        $persona -> fecha_nacimiento = $request -> fecha_nacimiento;

        $persona -> save();
    }
    //Funcion para buscar una persona por Id
    public function show(string $id)
    {
        $persona = Personas::find($id);
        return $persona;
    }
    //Funcion para actualizar una persona
    public function update(Request $request, string $id)
    {
        //capturando el id que viene de la request
        $persona = Personas::findOrFail($request -> id);
        $persona -> nombre = $request -> nombre;
        $persona -> apellido = $request -> apellido;
        $persona -> edad = $request -> edad;
        $persona -> correo = $request -> correo;
        $persona -> telefono = $request -> telefono;
        $persona -> direccion = $request -> direccion;
        $persona -> ciudad = $request -> ciudad;
        $persona -> codigo_postal = $request -> codigo_postal;
        $persona -> pais = $request -> pais;
        $persona -> tipo_documento = $request -> tipo_documento;
        $persona -> fecha_expedicion = $request -> fecha_expedicion;
        $persona -> fecha_nacimiento = $request -> fecha_nacimiento;
        
        $persona -> save();
    }
    //Funcion para eliminar una persona
    public function destroy(string $id)
    {
        $persona = Personas::destroy($id);
        return $persona;
    }
}
