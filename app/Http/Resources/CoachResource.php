<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CoachResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'firstname'=>$this->resource->firstname,
            'lastname'=>$this->resource->lastname,
            'experience'=>$this->resource->experience,
            'started'=>$this->resource->started
        ];
    }
}