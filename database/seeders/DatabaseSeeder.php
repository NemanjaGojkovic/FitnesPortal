<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;
use App\Models\Coach;
use App\Models\Service;
use App\Models\Type;
use App\Models\Usage;
use App\Models\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        Category::truncate();
        User::truncate();
        Usage::truncate();
        Type::truncate();
        Coach::truncate();
        Service::truncate();

        User::factory(5)->create();
        Coach::factory(5)->create();
        Service::factory(5)->create();
        Usage::factory(5)->create();
        
    }
}
