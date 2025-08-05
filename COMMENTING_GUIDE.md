# COMMENTING GUIDE FOR NEW DEVELOPERS

## 🎯 Purpose of Comments
Comments in this codebase are designed to help you understand:
- **What** each piece of code does
- **Why** certain decisions were made
- **How** different parts work together
- **Where** to make changes when needed

## 📝 Comment Types Used

### 1. **File Header Comments**
```typescript
/**
 * FILE NAME/PURPOSE
 * 
 * Brief description of what this file does and its role in the project.
 * Explains the main responsibility and how it fits into the overall architecture.
 */
```

### 2. **Section Comments**
```typescript
// SECTION NAME - Brief description of what this section does
```

### 3. **Inline Comments**
```typescript
const price = 497;  // Price in dollars (no decimals needed for whole numbers)
```

### 4. **JSX Comments**
```tsx
{/* Component description or explanation */}
<div className="container">
  {/* Loop through services and display each one */}
  {services.map(service => (
    <ServiceCard key={service.id} service={service} />
  ))}
</div>
```

## 🔍 What Each Comment Level Explains

### **Beginner Level** (You are here!)
- What each file does overall
- What each major section accomplishes
- What props components expect
- How data flows through the application

### **Intermediate Level** 
- Why certain patterns were chosen
- How components interact with each other
- Performance considerations
- Best practices being followed

### **Advanced Level**
- Architecture decisions and trade-offs
- Future extensibility considerations
- Integration points with external services

## 🚀 How to Use These Comments

### When Reading Code:
1. **Start with file header** to understand overall purpose
2. **Read section comments** to understand flow
3. **Check inline comments** for specific details
4. **Follow data flow** using the comments as a guide

### When Making Changes:
1. **Read existing comments** to understand current implementation
2. **Update comments** when you change functionality
3. **Add new comments** following the same style
4. **Keep comments accurate** - outdated comments are worse than no comments

## 📚 Learning Path

### Phase 1: Understanding Structure
- Read all the file header comments
- Understand how data flows from `/data/services.ts` to components
- See how TypeScript types in `/types/services.ts` connect everything

### Phase 2: Component Deep Dive
- Study the modular components (`ServicePricingCard`, `ServiceContentTabs`)
- Understand how they receive props and render UI
- See how they're reused across different pages

### Phase 3: Adding Features
- Use existing patterns to add new services
- Create new components following the same structure
- Extend the type definitions when needed

## 💡 Pro Tips

### Reading Unfamiliar Code:
- **Follow the imports** at the top of files to understand dependencies
- **Look for TypeScript interfaces** to understand data structures
- **Check the exports** at the bottom to see what the file provides

### Making Changes Safely:
- **TypeScript will warn you** if you break something
- **Test in development** before deploying changes
- **Follow existing patterns** rather than creating new ones

### Getting Unstuck:
- **Comments explain the "why"** behind code decisions
- **Type definitions show what data is expected**
- **File structure comments guide you to the right place for changes**

## 🎯 Remember

**Good comments explain intent, not just implementation.**

Instead of: `// Set price to 497`
We write: `// Price in dollars (no decimals needed for whole numbers)`

The code shows WHAT is happening.
The comments explain WHY and HOW it fits into the bigger picture.

This approach helps you learn the codebase faster and make changes confidently! 🚀
