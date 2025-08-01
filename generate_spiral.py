#!/usr/bin/env python3
"""
High-Resolution Spiral Design Generator
Recreates the beautiful spiral design in various resolutions
"""

import math
import numpy as np
from PIL import Image, ImageDraw
import colorsys

def create_gradient_color(start_color, end_color, factor):
    """Create a gradient color between two RGB colors"""
    return tuple(int(start_color[i] + (end_color[i] - start_color[i]) * factor) for i in range(3))

def draw_spiral_layer(draw, center_x, center_y, max_radius, color1, color2, start_angle, turns, radius_multiplier, width_multiplier=1.0):
    """Draw a single spiral layer with gradient colors"""
    steps = 2000
    angle_step = (turns * 2 * math.pi) / steps
    
    for i in range(steps - 1):
        angle = start_angle + i * angle_step
        next_angle = start_angle + (i + 1) * angle_step
        
        radius = (i / steps) * max_radius * radius_multiplier
        next_radius = ((i + 1) / steps) * max_radius * radius_multiplier
        
        # Calculate positions
        x1 = center_x + math.cos(angle) * radius
        y1 = center_y + math.sin(angle) * radius
        x2 = center_x + math.cos(next_angle) * next_radius
        y2 = center_y + math.sin(next_angle) * next_radius
        
        # Calculate color gradient
        factor = i / steps
        color = create_gradient_color(color1, color2, factor)
        
        # Calculate line width (thicker at center, thinner at edges)
        width = int((1 - factor) * 30 * width_multiplier + 2)
        
        # Draw the line segment
        draw.line([(x1, y1), (x2, y2)], fill=color, width=width)

def create_radial_gradient_background(size, center_color, edge_color):
    """Create a radial gradient background"""
    width, height = size
    center_x, center_y = width // 2, height // 2
    max_distance = math.sqrt(center_x**2 + center_y**2)
    
    # Create image array
    img_array = np.zeros((height, width, 3), dtype=np.uint8)
    
    for y in range(height):
        for x in range(width):
            distance = math.sqrt((x - center_x)**2 + (y - center_y)**2)
            factor = min(distance / max_distance, 1.0)
            
            color = create_gradient_color(center_color, edge_color, factor)
            img_array[y, x] = color
    
    return Image.fromarray(img_array)

def generate_spiral_design(resolution=2048, filename="high_res_spiral.png"):
    """Generate the complete spiral design"""
    print(f"Generating spiral design at {resolution}x{resolution} resolution...")
    
    # Create background with radial gradient
    background = create_radial_gradient_background(
        (resolution, resolution),
        (74, 144, 226),  # Center blue
        (30, 60, 114)    # Edge dark blue
    )
    
    # Create drawing context
    draw = ImageDraw.Draw(background)
    
    center_x = resolution // 2
    center_y = resolution // 2
    max_radius = resolution * 0.4
    
    # Define colors
    orange1 = (255, 107, 53)   # Bright orange
    orange2 = (255, 69, 0)     # Red-orange
    blue1 = (74, 144, 226)     # Light blue
    blue2 = (30, 60, 114)      # Dark blue
    orange3 = (255, 140, 66)   # Light orange
    blue3 = (91, 163, 245)     # Very light blue
    
    # Draw multiple spiral layers for depth and complexity
    print("Drawing spiral layers...")
    
    # Main orange spiral
    draw_spiral_layer(draw, center_x, center_y, max_radius, orange1, orange2, 0, 8, 0.85, 1.2)
    
    # Main blue spiral (opposite direction)
    draw_spiral_layer(draw, center_x, center_y, max_radius, blue1, blue2, math.pi, 8, 0.8, 1.0)
    
    # Secondary orange spiral
    draw_spiral_layer(draw, center_x, center_y, max_radius, orange3, orange1, math.pi/4, 6, 0.7, 0.8)
    
    # Secondary blue spiral
    draw_spiral_layer(draw, center_x, center_y, max_radius, blue3, blue1, 3*math.pi/4, 6, 0.65, 0.7)
    
    # Add smaller inner spirals for more detail
    draw_spiral_layer(draw, center_x, center_y, max_radius, orange2, orange3, math.pi/8, 4, 0.5, 0.6)
    draw_spiral_layer(draw, center_x, center_y, max_radius, blue2, blue3, 5*math.pi/8, 4, 0.45, 0.5)
    
    # Add center highlight
    center_radius = int(max_radius * 0.08)
    center_color = (135, 206, 235)  # Sky blue
    draw.ellipse([
        center_x - center_radius, center_y - center_radius,
        center_x + center_radius, center_y + center_radius
    ], fill=center_color)
    
    # Add inner center
    inner_radius = int(center_radius * 0.6)
    inner_color = (74, 144, 226)
    draw.ellipse([
        center_x - inner_radius, center_y - inner_radius,
        center_x + inner_radius, center_y + inner_radius
    ], fill=inner_color)
    
    print(f"Saving image as {filename}...")
    background.save(filename, "PNG", quality=100, optimize=True)
    print(f"High-resolution spiral design saved as {filename}")
    
    return background

def main():
    """Main function to generate multiple resolution versions"""
    try:
        # Generate different resolution versions
        resolutions = [
            (1024, "spiral_1K.png"),
            (2048, "spiral_2K.png"),
            (4096, "spiral_4K.png"),
            (8192, "spiral_8K.png")
        ]
        
        print("High-Resolution Spiral Design Generator")
        print("=====================================")
        
        for resolution, filename in resolutions:
            try:
                generate_spiral_design(resolution, filename)
                print(f"✓ Generated {filename} ({resolution}x{resolution})")
            except MemoryError:
                print(f"✗ Not enough memory for {resolution}x{resolution} resolution")
                break
            except Exception as e:
                print(f"✗ Error generating {filename}: {e}")
        
        print("\nAll available resolutions have been generated!")
        print("You can open the HTML file in a browser for interactive version.")
        
    except ImportError as e:
        print("Error: Required libraries not installed.")
        print("Please install required packages:")
        print("pip install Pillow numpy")

if __name__ == "__main__":
    main()