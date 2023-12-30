<?php

namespace App\Http\Controllers;

use App\Models\Konyv;
use Illuminate\Http\Request;

class KonyvController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $konyvs = response()->json(Konyv::all());
        return $konyvs;
    }

    public function show($id)
    {
        $konyv = response()->json(Konyv::find($id));
        return $konyv;
    }

    public function store(Request $request)
    {
        $konyv = new Konyv();
        $konyv->cim = $request->cim;
        $konyv->szerzo = $request->szerzo;

        $konyv->kiadas = $request->kiadas;

        $konyv->save();
    }

    /**
     * Display the specified resource.
     */
    public function update(Request $request, $id)
    {
        $konyv = Konyv::find($id);
        $konyv->cim = $request->cim;
        $konyv->szerzo = $request->szerzo;

        $konyv->kiadas = $request->kiadas;

        $konyv->save();
        return  response()->json(Konyv::all());
    }
   /*  public function destroy($id)
    {
        Konyv::find($id)->delete();
    } */
    public function destroy($id)
    {
        $konyv = Konyv::find($id);
    
        if ($konyv) {
            $konyv->delete();
            return

             response()->json(Konyv::all());
        } else {
            return response()->json(['error' => 'Record not found'], 404);
        }
    }
    /**
     * Remove the specified resource from storage.
     */
}
