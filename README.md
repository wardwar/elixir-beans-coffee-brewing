# Elixir Beans - V60 Brew Timer

⚗️ **for coffee adventurers**

A beautiful, mystical web application for guiding users through the V60 manual coffee brewing process with precise timing, pour tracking, and brewing techniques. Part of the Enchantment Series by Elixir Beans.

## Features

### Core Functionality
- **Brew Timer**: Large circular timer display with visual progress indication
- **Multiple Recipes**: Choose from professional brewing methods:
  - James Hoffmann Method (Intermediate)
  - 4:6 Method by Tetsu Kasuya (Intermediate)
  - Scott Rao Method (Advanced)
- **Pour Guidance**: Timer-based guidance for multiple pour stages with:
  - Target water weight display
  - Phase duration tracking
  - Animated water fill indicator
  - Automatic phase transitions
- **Brew History**: Save and review past brews with ratings and tasting notes
- **Customizable Settings**: Adjust default coffee weight, water ratio, and temperature
- **Data Export/Import**: Export your brew history and settings as JSON

### Design Features
- **Vintage Badge Aesthetic**: Mystical, apothecary-inspired design
- **Elixir Beans Brand Colors**: Deep purple (#6B3A7C) and warm cream (#F4E4C1)
- **Decorative Elements**: Four-pointed stars, halftone patterns, badge-style borders
- Mobile-first responsive design
- Smooth animations with magical sparkle effects
- Accessible (WCAG AA compliant)
- Works offline (no internet required after initial load)

## Brand Identity

**Elixir Beans** is a coffee adventure brand with a vintage apothecary aesthetic. The V60 Brew Timer is part of the "Enchantment Series" - a collection of tools and experiences designed to transform your coffee ritual into a magical journey.

### Visual Style
- **Mystical & Magical**: Coffee brewing as alchemy
- **Vintage Badge Design**: Circular badges with concentric rings
- **Elixir Iconography**: Coffee pot/potion bottle symbols
- **Decorative Stars**: Four-pointed sparkles throughout
- **Warm & Inviting**: Cream and purple color harmony
- **Adventure-Themed**: "for coffee adventurers" spirit

## Installation

### Quick Start
1. Download or clone this repository
2. Open `index.html` in a modern web browser
3. Start brewing!

No build process, dependencies, or installation required. The app runs entirely in your browser.

### File Structure
```
Coffee/
├── index.html      # Main HTML structure
├── styles.css      # Complete styling and design system
├── app.js          # Application logic and functionality
├── AppPlan.json    # Detailed project specification
└── README.md       # This file
```

## Usage Guide

### Starting a Brew

1. **Home Screen**
   - Enter your coffee weight (default: 30g)
   - Select your water ratio (1:15, 1:16, 1:16.67, or 1:17)
   - The total water amount is calculated automatically
   - Click "Start Brewing" or select a specific recipe

2. **Preparation Screen**
   - Review brew parameters (coffee, water, temperature)
   - Complete the pre-brew checklist:
     - Rinse paper filter with hot water
     - Add ground coffee to V60
     - Zero your scale
     - Heat water to temperature
   - Click "I'm Ready" when prepared

3. **Brewing Screen**
   - Large circular timer shows overall brew progress
   - Current phase information displays:
     - Phase name and number
     - Target water weight (large display)
     - Pour instructions
     - Phase timer (elapsed / duration)
     - Animated water fill indicator
   - Timer automatically advances to next phase when time complete
   - Controls:
     - **Pause/Resume**: Pause or resume the timer
     - **Next Phase**: Manually advance to next phase
     - **Reset**: Cancel current brew
   - **Note**: Manual weight input removed for simplicity. Timer-based guidance only. (See Future Enhancements for BLE scale integration)

4. **Completion Screen**
   - View brew summary (recipe, time, coffee/water amounts)
   - Rate your brew (1-5 stars)
   - Add tasting notes
   - Save brew to history or brew again

### Brewing Methods

#### James Hoffmann Method
- **Difficulty**: Intermediate
- **Ratio**: 1:16.67 (e.g., 30g coffee : 500g water)
- **Total Time**: ~3:30
- **Temperature**: 95°C
- **Phases**: Bloom (45s), 4 main pours, Drawdown
- **Best For**: Clarity and balanced flavor

#### 4:6 Method (Tetsu Kasuya)
- **Difficulty**: Intermediate
- **Ratio**: 1:15 (e.g., 20g coffee : 300g water)
- **Total Time**: ~3:30
- **Temperature**: 92°C
- **Phases**: 2 x 40% pours, 3 x 60% pours, Drawdown
- **Best For**: Customizable sweetness and strength

#### Scott Rao Method
- **Difficulty**: Advanced
- **Ratio**: 1:16.5 (e.g., 22g coffee : 363g water)
- **Total Time**: ~3:00
- **Temperature**: 96°C
- **Phases**: Bloom (30s), Main pour, Swirl, Drawdown
- **Best For**: Expert brewers seeking precision

### Viewing History

1. Navigate to the History tab
2. View all past brews with:
   - Date and time
   - Recipe used
   - Coffee and water amounts
   - Total brew time
   - Rating
   - Tasting notes
3. Clear history using the trash icon (with confirmation)

### Adjusting Settings

1. Navigate to the Settings tab
2. **Default Brewing Parameters**:
   - Set default coffee weight (10-50g)
   - Set default water ratio
   - Set default water temperature (85-100°C)
3. **Notifications**:
   - Toggle sound alerts
   - Toggle phase change alerts
4. **Data Management**:
   - Export brew data as JSON
   - Import previously exported data

### Data Management

#### Exporting Data
1. Go to Settings → Data Management
2. Click "Export Brew Data"
3. A JSON file will download with:
   - All brew history
   - Current settings
   - Export timestamp

#### Importing Data
1. Go to Settings → Data Management
2. Click "Import Brew Data"
3. Select a previously exported JSON file
4. Your history and settings will be restored

## Keyboard Navigation

The app is fully keyboard accessible:
- **Tab**: Navigate between interactive elements
- **Enter/Space**: Activate buttons and controls
- **Arrow Keys**: Navigate within select dropdowns
- All interactive elements have visible focus indicators

## Browser Compatibility

Tested and working on:
- Chrome/Edge (v90+)
- Firefox (v88+)
- Safari (v14+)
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android 10+)

## Technical Details

### Technologies Used
- HTML5 (semantic markup)
- CSS3 (custom properties, flexbox, grid)
- Vanilla JavaScript (ES6+)
- LocalStorage API (for data persistence)
- Web Audio API (for alerts)

### Design System

#### Elixir Beans Color Palette
- **Primary**: Deep Purple (#6B3A7C) - Elixir Purple
- **Secondary**: Cream/Beige (#F4E4C1, #E8D4A8) - Warm backgrounds
- **Accent**: Orange/Gold (#FF8C42, #FFA500) - CTAs and highlights
- **Background**: Warm Cream (#FFF9F0)
- **Success**: Emerald Green (#00D9A5)
- **Text**: Rich Brown (#3E2723) primary, Purple (#6B3A7C) secondary

#### Typography
- System font stack for optimal performance
- Clear hierarchy with 6 size scales
- Font weights: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)

#### Spacing
- Consistent 8-point grid system
- 6 spacing scales (4px to 48px)

#### Border Radius
- Rounded corners throughout (8px to 32px)
- Consistent with modern design trends

### Local Storage

Data is stored locally in your browser:
- `brewHistory`: Array of brew objects (max 50)
- `settings`: User preferences object

All data remains on your device and is never sent to any server.

### Performance

- No external dependencies or frameworks
- Minimal JavaScript bundle (~6KB gzipped)
- CSS uses modern features for optimal performance
- Smooth 60fps animations

## Accessibility Features

- WCAG AA contrast ratios
- Keyboard navigation support
- Screen reader friendly labels
- Focus indicators on all interactive elements
- Touch targets minimum 44x44px
- Text scales with browser settings
- Reduced motion support for users with vestibular disorders
- High contrast mode support

## Customization

### Modifying Recipes

To add or modify recipes, edit the `recipes` object in `app.js`:

```javascript
const recipes = {
  'my-recipe': {
    id: 'my-recipe',
    name: 'My Custom Recipe',
    description: 'Description here',
    difficulty: 'Beginner',
    coffeeWeight: 20,
    ratio: 16,
    totalWater: 320,
    totalTime: 180,
    temperature: 93,
    phases: [
      {
        name: 'Bloom',
        duration: 30,
        waterAmount: 40,
        instruction: 'Pour gently'
      }
      // ... more phases
    ]
  }
};
```

### Customizing Colors

Modify Elixir Beans design tokens in `styles.css`:

```css
:root {
  /* Elixir Beans Brand Colors */
  --color-elixir-purple: #6B3A7C;
  --color-elixir-cream: #F4E4C1;
  --color-enchantment-orange: #FF8C42;
  --color-magic-gold: #FFA500;
  /* ... more variables */
}
```

## Troubleshooting

### Timer Not Starting
- Ensure you've completed the preparation checklist
- Check browser console for JavaScript errors
- Try refreshing the page

### Data Not Saving
- Ensure browser allows localStorage
- Check browser privacy settings
- Try clearing browser cache and starting fresh

### Audio Alerts Not Working
- Check browser audio permissions
- Ensure sound alerts are enabled in Settings
- Some browsers require user interaction before playing audio

### Display Issues
- Ensure you're using a modern browser
- Try clearing browser cache
- Check browser zoom level (recommended: 100%)

## Future Enhancements

Planned features for future versions:
- Bluetooth scale integration
- Video tutorials for each recipe
- Community recipe sharing
- Brew statistics and insights
- Export to PDF
- Multiple language support
- Dark mode
- Voice commands
- Smart brew suggestions based on history
- PWA capabilities for offline use

## Contributing

This is a standalone project, but suggestions and improvements are welcome:
1. Fork the repository
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## License

This project is open source and available for personal and commercial use.

## Credits

**Elixir Beans - for coffee adventurers**

Brewing recipes based on techniques by:
- James Hoffmann (Coffee expert and YouTube creator)
- Tetsu Kasuya (World Brewers Cup Champion 2016)
- Scott Rao (Coffee consultant and author)

Design inspired by:
- Vintage apothecary and alchemy aesthetics
- Badge and emblem design traditions
- Coffee as a magical ritual
- Adventure and discovery themes

## Support

For issues, questions, or suggestions:
- Open an issue on GitHub
- Check the Troubleshooting section above
- Review the Usage Guide for common questions

---

**Enjoy your perfect V60 brew!** ☕
