<?php

use App\Http\Controllers\Api\PersonasController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(PersonasController::class) -> group(function () {
    Route::get("/personas", "index");
    Route::post("/persona", "store");
    Route::get("/persona/{id}", "show");
    Route::put("/persona/{id}", "update");
    Route::delete("/persona/{id}", "destroy");
});