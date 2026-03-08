"use client";

import React, { Component, ReactNode } from "react";

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
}

export class SplineErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(): State {
        return { hasError: true };
    }

    componentDidCatch(error: Error) {
        // Silently catch WebGL2 Spline runtime errors
        if (error.message?.includes("clearBufferfv") || error.message?.includes("not a function")) {
            console.warn("Spline 3D scene could not be rendered (WebGL2 not available).");
        }
    }

    render() {
        if (this.state.hasError) {
            return (
                this.props.fallback ?? (
                    <div className="w-full h-full flex items-center justify-center opacity-20">
                        <span className="text-white text-sm">3D scene unavailable</span>
                    </div>
                )
            );
        }
        return this.props.children;
    }
}
