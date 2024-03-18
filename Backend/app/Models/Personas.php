<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Personas extends Model
{
    use HasFactory;
    protected $fillable = ["nombre", "apellido", "edad", "correo", "telefono", "direccion", "ciudad", 
    "codigo_postal", "pais", "tipo_documento", "fecha_expedicion", "fecha_nacimiento"];
}
