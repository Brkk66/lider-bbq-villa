# Mobile Testing Checklist for Lider BBQ Villa 📱

## Testing URL
- **Local**: http://localhost:3001
- **Test on multiple devices using DevTools**

## Device Viewports to Test
### Phones
- iPhone SE (375x667)
- iPhone 12/13/14 Pro (390x844)
- Samsung Galaxy S20 (412x915)
- Pixel 5 (393x851)

### Tablets
- iPad Mini (768x1024)
- iPad Pro (1024x1366)

## Critical Mobile Tests ✅

### 1. Navigation
- [ ] Hamburger menu visible on mobile
- [ ] Menu opens/closes smoothly
- [ ] All navigation links work
- [ ] Logo is visible and sized correctly
- [ ] Sheet component slides from right

### 2. Hero Section
- [ ] TextScramble animation works on mobile
- [ ] MagneticButton effect disabled on touch devices
- [ ] Call-to-action buttons are easily tappable (min 44px)
- [ ] Text is readable without zooming
- [ ] Background effects don't cause lag

### 3. Menu Section
- [ ] Tabs are horizontally scrollable on mobile
- [ ] Menu items display correctly
- [ ] Prices align properly
- [ ] Categories are easy to navigate
- [ ] Tab switching is smooth

### 4. Gallery
- [ ] Images load properly
- [ ] Grid adjusts to single column on mobile
- [ ] Images maintain aspect ratio
- [ ] No horizontal scroll issues

### 5. Location & Contact
- [ ] Map displays correctly (if added)
- [ ] Phone number is clickable (tel: link)
- [ ] Address is readable
- [ ] Opening hours display clearly
- [ ] Contact buttons work

### 6. Performance
- [ ] Page loads under 3 seconds on 3G
- [ ] Smooth scrolling (60fps)
- [ ] No janky animations
- [ ] Images are optimized
- [ ] Lenis smooth scroll works on touch

### 7. Touch Interactions
- [ ] Swipe gestures work correctly
- [ ] No accidental taps
- [ ] Touch targets are large enough
- [ ] No double-tap zoom issues
- [ ] Pull-to-refresh doesn't interfere

### 8. Accessibility
- [ ] Text contrast is sufficient
- [ ] Font size is at least 16px
- [ ] Buttons have proper labels
- [ ] Form inputs are accessible
- [ ] Screen reader compatible

### 9. Orientation
- [ ] Portrait mode works perfectly
- [ ] Landscape mode adjusts layout
- [ ] No content cut off
- [ ] Navigation remains accessible

### 10. Browser Compatibility
- [ ] Chrome Mobile
- [ ] Safari iOS
- [ ] Firefox Mobile
- [ ] Samsung Internet
- [ ] Edge Mobile

## Common Issues Fixed ✅
1. **Horizontal Scroll**: Added overflow-x: hidden to html and body
2. **iOS Input Zoom**: Set font-size to 16px on inputs
3. **Touch Targets**: Minimum 44x44px for all interactive elements
4. **Safe Areas**: Added padding for iPhone notch/home indicator
5. **Smooth Scroll**: Configured Lenis with touchMultiplier: 2

## Testing Commands
```bash
# Open Chrome DevTools
# Press F12 or Ctrl+Shift+I
# Click Toggle Device Toolbar (Ctrl+Shift+M)
# Select device from dropdown
```

## Quick Test Script
```javascript
// Paste in console to test touch events
document.addEventListener('touchstart', (e) => {
  console.log('Touch started at:', e.touches[0].clientX, e.touches[0].clientY);
});

// Test viewport size
console.log('Viewport:', window.innerWidth, 'x', window.innerHeight);

// Check if mobile
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
console.log('Is Mobile:', isMobile);
```

## Notes
- All critical mobile optimizations from ULTIMATE_WEB_PLAYBOOK.md v2.1 have been applied
- Custom mobile-optimizations.css file included for additional fixes
- Responsive breakpoints: sm(640px), md(768px), lg(1024px), xl(1280px)