<?php

namespace App\Http\Controllers\Admin;

use App\Models\Price;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;

class priceControllerAdmin extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
            $price = new Price;
    
            $price->type = $request->type;
            $price->price = $request->price;
            $price->description = $request->description;
            $price->features = json_encode($request->features);

            $price->save();

            return response()->json(['message'=>'Succesfully Added Price']);

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id): Response
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id): Response
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id): RedirectResponse
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id): RedirectResponse
    {
        //
    }
}
