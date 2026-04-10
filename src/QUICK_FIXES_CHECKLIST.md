# 🚀 Quick Fixes Checklist - Preferred Deals

## ⚡ URGENT - Must Fix Before Testing

### Navigation Components (2 files)
- [ ] `navigation.tsx` - Replace `onNavigate` with `useNavigate()` hook
- [ ] `footer.tsx` - Replace `onNavigate` with `useNavigate()` hook

### Info Pages (6 files) - Same fix for all
- [ ] `about-us.tsx` - Replace `onBack` with `const navigate = useNavigate(); navigate(-1)`
- [ ] `help-center.tsx` - Replace `onBack` with `useNavigate()`
- [ ] `pricing-plans.tsx` - Replace `onBack` with `useNavigate()`
- [ ] `terms-of-service.tsx` - Replace `onBack` with `useNavigate()`
- [ ] `privacy-policy.tsx` - Replace `onBack` with `useNavigate()`
- [ ] `cookie-policy.tsx` - Replace `onBack` with `useNavigate()`

### User Flow Pages (3 files)
- [ ] `saved-deals.tsx` - Replace props with `useNavigate()` and `useAuth()`
- [ ] `settings.tsx` - Replace `onBack` with `useNavigate()`, add save handlers
- [ ] `user-dashboard.tsx` - Replace `onNavigate` with `useNavigate()` and `useAuth()`

### Business Partner Flow (3 files)
- [ ] `manage-your-listing.tsx` - Update to pass hooks-based navigation
- [ ] `business-login.tsx` - Replace `onBack`/`onLogin` with hooks
- [ ] `list-your-business.tsx` - Replace `onBack`/`onGetStarted` with `useNavigate()`

### Distribution Partner Flow (2 files)
- [ ] `partner-dashboard-login.tsx` - Replace props with hooks
- [ ] `distribution-partner-dashboard.tsx` - Replace `onNavigate` with `useNavigate()`

### Dashboard Components (2 files)
- [ ] `partner-dashboard.tsx` - Replace `onNavigate` with `useNavigate()` and `useAuth()`
- [ ] `business-dashboard.tsx` - Replace `onNavigate` with hooks

### Settings/Admin (1 file)
- [ ] `white-label-platform-settings.tsx` - Replace `onBack` with `useNavigate()`

---

## 🔧 PATTERN TO APPLY

### Old Pattern (REMOVE):
```tsx
interface MyComponentProps {
  onBack: () => void;
  onNavigate: (page: string) => void;
}

export function MyComponent({ onBack, onNavigate }: MyComponentProps) {
  return (
    <Button onClick={onBack}>Back</Button>
    <Button onClick={() => onNavigate('dashboard')}>Go to Dashboard</Button>
  );
}
```

### New Pattern (USE):
```tsx
import { useNavigate } from 'react-router';
import { useAuth } from '../lib/auth-context';

export function MyComponent() {
  const navigate = useNavigate();
  const { logout, userName, savedDeals, toggleSaveDeal } = useAuth();
  
  return (
    <Button onClick={() => navigate(-1)}>Back</Button>
    <Button onClick={() => navigate('/dashboard')}>Go to Dashboard</Button>
    <Button onClick={logout}>Logout</Button>
  );
}
```

---

## 🎯 ROUTE MAPPING REFERENCE

Use these paths in `navigate()` calls:

| Old Page Name | New Route Path |
|--------------|----------------|
| `'home'` | `'/'` |
| `'directory'` | `'/directory'` |
| `'become-partner'` | `'/become-partner'` |
| `'distribution-partner'` | `'/distribution-partner'` |
| `'dashboard'` or `'user-dashboard'` | `'/dashboard'` |
| `'saved-deals'` | `'/saved-deals'` |
| `'settings'` | `'/settings'` |
| `'white-label-settings'` | `'/white-label-settings'` |
| `'list-your-business'` | `'/list-your-business'` |
| `'business/login'` or `'manage-your-listing'` | `'/business/login'` |
| `'partner/login'` or `'partner-dashboard-login'` | `'/partner/login'` |
| `'about'` | `'/about'` |
| `'help'` | `'/help'` |
| `'contact'` or `'contact-us'` | `'/contact'` |
| `'pricing'` | `'/pricing'` |
| `'terms'` | `'/terms'` |
| `'privacy'` | `'/privacy'` |
| `'cookies'` | `'/cookies'` |

---

## ✅ QUICK WINS (15 min each)

### 1. Navigation Component
**File:** `/components/navigation.tsx`  
**Change:**
- Remove `onNavigate` from props
- Add: `import { useNavigate } from 'react-router';`
- Add: `const navigate = useNavigate();`
- Replace: `handleNavigate` to use `navigate()`

### 2. Footer Component
**File:** `/components/footer.tsx`  
**Change:** Same as Navigation

### 3. All Info Pages (6 files)
**Pattern:**
```tsx
// Remove this:
interface ComponentProps {
  onBack: () => void;
}

// Add this:
import { useNavigate } from 'react-router';

export function Component() {
  const navigate = useNavigate();
  // Replace onBack with: () => navigate(-1)
}
```

---

## 🚨 BREAKING CHANGES TO WATCH

After fixing components, these won't work anymore:
- ❌ `<Navigation onNavigate={handleNavigate} ... />` in root-layout
- ❌ `<Footer onNavigate={handleNavigate} />` in root-layout
- ❌ All prop-based navigation in routes.tsx

**Solution:** Components will handle their own navigation with hooks

---

## 📝 TESTING CHECKLIST

After fixes, test these flows:

### Basic Navigation
- [ ] Click logo → goes to home
- [ ] Click "All Listings" → goes to directory
- [ ] Click "List Your Business" → goes to list-your-business
- [ ] Click "About Us" → goes to about page
- [ ] Click "Contact" → goes to contact page
- [ ] Footer links work

### User Flow
- [ ] Can browse directory
- [ ] Can view business details
- [ ] Can save/unsave deals (requires login)
- [ ] Can view saved deals page
- [ ] Can access settings
- [ ] Can logout

### Business Flow
- [ ] Can access business login
- [ ] Can signup as business
- [ ] Can view business dashboard
- [ ] Can create/edit listings
- [ ] Can logout

### Distribution Flow
- [ ] Can access partner login
- [ ] Can signup as distribution partner
- [ ] Can view distribution dashboard
- [ ] Can access white label settings
- [ ] Can logout

---

## 💡 PRO TIPS

1. **Use Find & Replace carefully**
   - Search: `onNavigate: (page: string) => void`
   - But check each instance manually

2. **Test incrementally**
   - Fix one component
   - Test it works
   - Move to next

3. **Common mistakes**
   - Forgetting to import `useNavigate`
   - Not removing props from interface
   - Not removing prop destructuring

4. **Quick verification**
   - If component has `interface XProps` with navigation props → needs fixing
   - If component imports `useNavigate` → probably already fixed

---

**Estimated Total Time:** 4-6 hours for all components  
**Difficulty:** Low (repetitive pattern)  
**Risk:** Low (easy to test and verify)  
**Impact:** HIGH (enables entire app navigation)
