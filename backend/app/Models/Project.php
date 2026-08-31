<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'slug',
        'title',
        'category',
        'description',
        'tags',
        'featured',
        'metrics',
        'highlights',
        'github',
    ];

    protected $casts = [
        'tags' => 'array',
        'metrics' => 'array',
        'highlights' => 'array',
        'featured' => 'boolean',
    ];
}
