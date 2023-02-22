<?php

namespace App\Http\Controllers\Api;

use App\Models\Price;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PriceController extends Controller
{
    public function getPrices(){
        
        return Price::all();
    }
}
