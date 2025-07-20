# GDevelop Game Integration Guide

This guide explains how to integrate GDevelop games with the T4G-Tag4Gift platform.

## Overview

The T4G-Tag4Gift platform supports GDevelop games through iframe integration. Games are loaded from the `/public/games/` directory and can communicate with the platform using the Window postMessage API.

## Directory Structure

GDevelop games should be exported to the following directory structure:

```
/public/games/
  ├── puzzle/
  │   ├── sudoku/
  │   │   ├── index.html
  │   │   └── ... (game assets)
  │   ├── tetris/
  │   │   ├── index.html
  │   │   └── ... (game assets)
  │   └── ...
  ├── reaction/
  │   ├── flappy-bird/
  │   │   ├── index.html
  │   │   └── ... (game assets)
  │   └── ...
  └── music/
      ├── rhythm/
      │   ├── index.html
      │   └── ... (game assets)
      └── ...
```

## Exporting from GDevelop

1. Create your game in GDevelop
2. Go to File > Export
3. Choose "HTML5 game (Web)" option
4. Export to a temporary location
5. Copy the exported files to the appropriate directory in `/public/games/`

## Communication Protocol

GDevelop games can communicate with the T4G-Tag4Gift platform using the Window postMessage API. The following message types are supported:

### Messages from Game to Platform

```javascript
// Game loaded successfully
window.parent.postMessage(JSON.stringify({
  type: 'GAME_LOADED'
}), '*');

// Game error
window.parent.postMessage(JSON.stringify({
  type: 'GAME_ERROR',
  message: 'Error message'
}), '*');

// Score update
window.parent.postMessage(JSON.stringify({
  type: 'GAME_SCORE_UPDATE',
  score: 100
}), '*');

// Time update
window.parent.postMessage(JSON.stringify({
  type: 'GAME_TIME_UPDATE',
  timeSpent: 30000 // milliseconds
}), '*');

// Game complete
window.parent.postMessage(JSON.stringify({
  type: 'GAME_COMPLETE',
  score: 100,
  timeSpent: 30000 // milliseconds
}), '*');
```

### Messages from Platform to Game

```javascript
// Start game
{
  type: 'START_GAME',
  difficulty: 'easy' | 'medium' | 'hard',
  userId: 'user-id'
}

// Pause game
{
  type: 'PAUSE_GAME'
}

// Resume game
{
  type: 'RESUME_GAME'
}

// Reset game
{
  type: 'RESET_GAME'
}
```

## GDevelop Integration Example

Here's an example of how to add communication code to your GDevelop game:

1. In GDevelop, add a JavaScript code event
2. Add the following code to send messages to the platform:

```javascript
// At game start
const sendMessage = function(msg) {
  if (window.parent && window.parent !== window) {
    window.parent.postMessage(JSON.stringify(msg), '*');
  }
};

// When game loads
sendMessage({ type: 'GAME_LOADED' });

// When game ends
sendMessage({ 
  type: 'GAME_COMPLETE', 
  score: Variable(Score), 
  timeSpent: Variable(TimePlayed) * 1000 
});

// To update score during gameplay
sendMessage({ 
  type: 'GAME_SCORE_UPDATE', 
  score: Variable(Score) 
});
```

3. Add code to listen for messages from the platform:

```javascript
window.addEventListener('message', function(event) {
  try {
    const data = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
    
    if (data.type === 'START_GAME') {
      // Set difficulty based on data.difficulty
      // Start the game
    } else if (data.type === 'PAUSE_GAME') {
      // Pause the game
    } else if (data.type === 'RESUME_GAME') {
      // Resume the game
    } else if (data.type === 'RESET_GAME') {
      // Reset the game
    }
  } catch (e) {
    console.error('Error processing message:', e);
  }
}, false);
```

## Registering a GDevelop Game

To register a GDevelop game with the platform:

1. Use the GraphQL API to register the game:

```graphql
mutation RegisterGame {
  registerGDevelopGame(
    name: "Flappy Bird"
    type: REACTION
    category: "arcade"
    gdevelopProjectUrl: "/games/reaction/flappy-bird/index.html"
    description: "Tap to navigate through pipes"
    difficulty: "medium"
  ) {
    id
    name
    type
  }
}
```

2. The game will now appear in the games list and can be played through the platform.

## Testing Your Integration

1. Export your GDevelop game to the correct directory
2. Register the game using the GraphQL API
3. Navigate to the games list in the application
4. Select your game and verify that:
   - The game loads correctly
   - Score updates are displayed
   - Game completion is recorded
   - The game responds to platform messages (if implemented)

## Troubleshooting

- If your game doesn't appear in the list, check that it was registered correctly
- If the game doesn't load, check the browser console for errors
- If communication isn't working, verify that your postMessage code is correct
- Make sure your game is exported to the correct directory structure