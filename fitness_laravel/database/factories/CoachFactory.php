<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Coach>
 */
class CoachFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'firstname'=>$this->faker->firstName(),
            'lastname'=>$this->faker->lastName(),
            'experience'=>$this->faker->text(),
            'started'=>$this->faker->date()
        ];
    }
}
