"use client";
import 'maplibre-gl/dist/maplibre-gl.css';
import React from "react";
import Copy from './copy';
import Graphs from "./graphs";

export default function GazaAirstrikes() {
    return (
      <div className="flex h-[100vh] overflow-scroll">
          <Copy />
          <Graphs />
      </div>
    );
}