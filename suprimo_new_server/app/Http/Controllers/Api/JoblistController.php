<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class JoblistController extends Controller
{
    public function getJobs(){
        return JobList::all();
    }
}
