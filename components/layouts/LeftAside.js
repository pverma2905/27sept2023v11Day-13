import Link from 'next/link'
import React from 'react'

export default function LeftAside() {
  return (
   <aside class="col-3 g_border">
  <ul class="nav flex-column">
  <li class="nav-item">
    <Link class="nav-link active" aria-current="page" href="/flight">Flight</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" href="/city">City</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" href="/island">Island</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" href="/food">Food</Link>
  </li>
</ul>
</aside>
  )
}
