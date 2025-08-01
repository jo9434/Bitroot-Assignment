# High-Resolution Spiral Design

This project recreates the beautiful spiral design from your reference image in multiple high resolutions.

## Generated Files

### Interactive HTML Version
- **spiral_design.html** - Interactive web version with Canvas
  - Default resolution: 800x800
  - Buttons to generate 2K and 4K versions
  - Download functionality
  - Animation support (press 'A' key)

### High-Resolution PNG Images
- **spiral_1K.png** - 1024x1024 resolution
- **spiral_2K.png** - 2048x2048 resolution  
- **spiral_4K.png** - 4096x4096 resolution
- **spiral_8K.png** - 8192x8192 resolution

## Features

### Design Elements
- **Multi-layered spirals** with orange and blue color schemes
- **Radial gradient background** from light blue to dark blue
- **3D depth effect** achieved through multiple spiral layers
- **Smooth color transitions** throughout each spiral
- **Central highlight** with sky blue accent

### Technical Details
- **Vector-based rendering** for crisp edges at any resolution
- **Gradient colors** matching the original design
- **Multiple spiral layers** for depth and complexity
- **Optimized PNG output** with maximum quality

## Usage

### View Interactive Version
1. Open `spiral_design.html` in any modern web browser
2. Use the buttons to generate different resolutions
3. Click "Download" to save the current image
4. Press 'A' key to toggle animation

### Use Python Generator
```bash
python3 generate_spiral.py
```

### Requirements
- **Web version**: Any modern browser with HTML5 Canvas support
- **Python version**: Python 3.6+ with PIL (Pillow) and NumPy

## Color Palette
- **Primary Orange**: #FF6B35 → #FF4500
- **Primary Blue**: #4A90E2 → #1E3C72
- **Accent Colors**: Sky blue center highlight
- **Background**: Radial gradient from #4A90E2 to #1E3C72

The design faithfully recreates the original spiral with smooth gradients, proper proportions, and multiple resolution options for any use case.