import {describe, expect, it } from 'vitest';
import React from 'react';
import Pomodoro from '../components/Pomodoro';
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

describe("Pomodoro", ()=> {
    it("renders a Pomodoro Component", ()=>{
        render(<Pomodoro/>);
        expect(screen.getByText("Pomodoro App")).toBeInTheDocument();
    });
})