<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Konyv extends Model
{
    use HasFactory;
    protected  $primaryKey = 'id';
    protected $fillable = [
        
        'cim',
        'szerzo',
        'kiadas',
    ];
    protected $hidden= [
        'created_at',
        'updated_at'
    ];
}
