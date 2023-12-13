<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('konyvs', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('cim', 32);
            $table->string('szerzo');
            $table->date('kiadas');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('konyvs');
        
    }
};