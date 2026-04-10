import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import { Plus, Edit2, Trash2, Home, Utensils, Ticket, PawPrint, Car, Leaf, ShoppingBag, Heart, Briefcase, Music, Camera, Coffee, Dumbbell, Scissors, Wrench, Book } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Switch } from '../../components/ui/switch';
import { useAuth } from '../../lib/auth-context';
import { defaultCategories } from '../../data/surveyQuestions';

interface CustomCategory {
  id: string;
  name: string;
  icon: string;
  questions: CategoryQuestion[];
}

interface CategoryQuestion {
  id: string;
  question: string;
  options: string[];
}

interface DefaultCategoryConfig {
  id: string;
  enabled: boolean;
}

const availableIcons = [
  { name: 'home', Icon: Home },
  { name: 'utensils', Icon: Utensils },
  { name: 'ticket', Icon: Ticket },
  { name: 'paw', Icon: PawPrint },
  { name: 'car', Icon: Car },
  { name: 'leaf', Icon: Leaf },
  { name: 'shopping-bag', Icon: ShoppingBag },
  { name: 'heart', Icon: Heart },
  { name: 'briefcase', Icon: Briefcase },
  { name: 'music', Icon: Music },
  { name: 'camera', Icon: Camera },
  { name: 'coffee', Icon: Coffee },
  { name: 'dumbbell', Icon: Dumbbell },
  { name: 'scissors', Icon: Scissors },
  { name: 'wrench', Icon: Wrench },
  { name: 'book', Icon: Book },
];

export function CategoryManager() {
  const { propertyId } = useParams<{ propertyId: string }>();
  const navigate = useNavigate();
  const { userType } = useAuth();
  const [defaultCategoryConfig, setDefaultCategoryConfig] = useState<DefaultCategoryConfig[]>(
    defaultCategories.map(cat => ({ id: cat.id, enabled: true }))
  );
  const [customCategories, setCustomCategories] = useState<CustomCategory[]>([]);
  const [isAddingCategory, setIsAddingCategory] = useState(false);
  const [editingCategoryId, setEditingCategoryId] = useState<string | null>(null);

  // Form state for new/edit category
  const [formName, setFormName] = useState('');
  const [formIcon, setFormIcon] = useState('home');
  const [formQuestions, setFormQuestions] = useState<CategoryQuestion[]>([
    { id: '1', question: '', options: ['', ''] }
  ]);

  useEffect(() => {
    // TODO: Fetch category configuration from API
    // GET /api/partners/:propertyId/categories/config
    // This will return both default category toggles and custom categories

    // For now, using default state
  }, [propertyId]);

  // Check authorization
  if (userType !== 'distribution' && userType !== 'admin') {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="p-8 max-w-md text-center">
          <h2 className="mb-4">Not Authorized</h2>
          <p className="text-muted-foreground mb-6">
            This page is only accessible to white label admin users.
          </p>
          <Button onClick={() => navigate('/')}>Go Home</Button>
        </Card>
      </div>
    );
  }

  const handleToggleDefault = (categoryId: string) => {
    setDefaultCategoryConfig(prev =>
      prev.map(cat =>
        cat.id === categoryId ? { ...cat, enabled: !cat.enabled } : cat
      )
    );
  };

  const handleAddQuestion = () => {
    if (formQuestions.length < 3) {
      setFormQuestions(prev => [
        ...prev,
        { id: String(prev.length + 1), question: '', options: ['', ''] }
      ]);
    }
  };

  const handleUpdateQuestion = (questionId: string, field: 'question' | 'options', value: string | string[]) => {
    setFormQuestions(prev =>
      prev.map(q =>
        q.id === questionId
          ? { ...q, [field]: value }
          : q
      )
    );
  };

  const handleAddOption = (questionId: string) => {
    setFormQuestions(prev =>
      prev.map(q =>
        q.id === questionId && q.options.length < 6
          ? { ...q, options: [...q.options, ''] }
          : q
      )
    );
  };

  const handleUpdateOption = (questionId: string, optionIndex: number, value: string) => {
    setFormQuestions(prev =>
      prev.map(q =>
        q.id === questionId
          ? { ...q, options: q.options.map((opt, i) => i === optionIndex ? value : opt) }
          : q
      )
    );
  };

  const handleRemoveOption = (questionId: string, optionIndex: number) => {
    setFormQuestions(prev =>
      prev.map(q =>
        q.id === questionId && q.options.length > 2
          ? { ...q, options: q.options.filter((_, i) => i !== optionIndex) }
          : q
      )
    );
  };

  const handleSaveCategory = () => {
    if (!formName.trim()) return;

    const newCategory: CustomCategory = {
      id: editingCategoryId || `custom-${Date.now()}`,
      name: formName,
      icon: formIcon,
      questions: formQuestions.filter(q => q.question.trim() && q.options.some(opt => opt.trim())),
    };

    if (editingCategoryId) {
      setCustomCategories(prev =>
        prev.map(cat => cat.id === editingCategoryId ? newCategory : cat)
      );
      setEditingCategoryId(null);
    } else {
      setCustomCategories(prev => [...prev, newCategory]);
    }

    // Reset form
    setFormName('');
    setFormIcon('home');
    setFormQuestions([{ id: '1', question: '', options: ['', ''] }]);
    setIsAddingCategory(false);
  };

  const handleEditCategory = (category: CustomCategory) => {
    setFormName(category.name);
    setFormIcon(category.icon);
    setFormQuestions(category.questions.length > 0 ? category.questions : [{ id: '1', question: '', options: ['', ''] }]);
    setEditingCategoryId(category.id);
    setIsAddingCategory(true);
  };

  const handleDeleteCategory = (categoryId: string) => {
    setCustomCategories(prev => prev.filter(cat => cat.id !== categoryId));
  };

  const handleSaveChanges = () => {
    // TODO: Save all changes to API
    // PUT /api/partners/:propertyId/categories/config
    // Body: { defaultCategories: defaultCategoryConfig, customCategories }
    
    alert('Changes saved! (This will connect to your Rails backend)');
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="mb-2">Category Manager</h1>
          <p className="text-muted-foreground">
            Customize the categories that appear in your discovery flow
          </p>
        </div>

        {/* Default Categories */}
        <Card className="p-6 mb-6">
          <h3 className="mb-4">Default Categories</h3>
          <div className="space-y-4">
            {defaultCategories.map(category => {
              const config = defaultCategoryConfig.find(c => c.id === category.id);
              const IconComponent = availableIcons.find(i => i.name === category.icon)?.Icon || Home;
              
              return (
                <div key={category.id} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                  <div className="flex items-center gap-3">
                    <IconComponent className="w-5 h-5 text-muted-foreground" />
                    <span>{category.name}</span>
                  </div>
                  <Switch
                    checked={config?.enabled ?? true}
                    onCheckedChange={() => handleToggleDefault(category.id)}
                  />
                </div>
              );
            })}
          </div>
        </Card>

        {/* Custom Categories */}
        <Card className="p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3>Custom Categories</h3>
            {!isAddingCategory && (
              <Button onClick={() => setIsAddingCategory(true)}>
                <Plus className="w-4 h-4 mr-2" />
                Add Category
              </Button>
            )}
          </div>

          {/* Existing Custom Categories */}
          {customCategories.length > 0 && (
            <div className="space-y-3 mb-6">
              {customCategories.map(category => {
                const IconComponent = availableIcons.find(i => i.name === category.icon)?.Icon || Home;
                return (
                  <div key={category.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                    <div className="flex items-center gap-3">
                      <IconComponent className="w-5 h-5" />
                      <div>
                        <p>{category.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {category.questions.length} question{category.questions.length !== 1 ? 's' : ''}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleEditCategory(category)}
                      >
                        <Edit2 className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDeleteCategory(category.id)}
                      >
                        <Trash2 className="w-4 h-4 text-destructive" />
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Add/Edit Category Form */}
          {isAddingCategory && (
            <div className="border border-border rounded-lg p-6 bg-card">
              <h4 className="mb-4">{editingCategoryId ? 'Edit Category' : 'New Category'}</h4>

              {/* Category Name */}
              <div className="mb-6">
                <Label htmlFor="category-name">Category Name</Label>
                <Input
                  id="category-name"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  placeholder="e.g., Health & Wellness"
                  className="mt-2"
                />
              </div>

              {/* Icon Picker */}
              <div className="mb-6">
                <Label>Select Icon</Label>
                <div className="grid grid-cols-8 gap-2 mt-2">
                  {availableIcons.map(({ name, Icon }) => (
                    <button
                      key={name}
                      onClick={() => setFormIcon(name)}
                      className={`p-3 rounded-lg border-2 transition-colors ${
                        formIcon === name
                          ? 'border-foreground bg-accent'
                          : 'border-border hover:border-muted-foreground'
                      }`}
                    >
                      <Icon className="w-5 h-5 mx-auto" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Questions */}
              <div className="mb-6">
                <Label>Survey Questions (1-3)</Label>
                <div className="space-y-6 mt-3">
                  {formQuestions.map((question, qIndex) => (
                    <div key={question.id} className="border border-border rounded-lg p-4">
                      <Label className="text-sm">Question {qIndex + 1}</Label>
                      <Input
                        value={question.question}
                        onChange={(e) => handleUpdateQuestion(question.id, 'question', e.target.value)}
                        placeholder="Enter your question"
                        className="mt-2 mb-3"
                      />

                      <Label className="text-sm">Answer Options (2-6)</Label>
                      <div className="space-y-2 mt-2">
                        {question.options.map((option, oIndex) => (
                          <div key={oIndex} className="flex gap-2">
                            <Input
                              value={option}
                              onChange={(e) => handleUpdateOption(question.id, oIndex, e.target.value)}
                              placeholder={`Option ${oIndex + 1}`}
                            />
                            {question.options.length > 2 && (
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleRemoveOption(question.id, oIndex)}
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            )}
                          </div>
                        ))}
                        {question.options.length < 6 && (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleAddOption(question.id)}
                            className="w-full"
                          >
                            + Add Option
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {formQuestions.length < 3 && (
                  <Button
                    variant="outline"
                    onClick={handleAddQuestion}
                    className="mt-3"
                  >
                    + Add Another Question
                  </Button>
                )}
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <Button onClick={handleSaveCategory}>
                  {editingCategoryId ? 'Update Category' : 'Save Category'}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setIsAddingCategory(false);
                    setEditingCategoryId(null);
                    setFormName('');
                    setFormIcon('home');
                    setFormQuestions([{ id: '1', question: '', options: ['', ''] }]);
                  }}
                >
                  Cancel
                </Button>
              </div>
            </div>
          )}

          {customCategories.length === 0 && !isAddingCategory && (
            <p className="text-center text-muted-foreground py-8">
              No custom categories yet. Click "Add Category" to create one.
            </p>
          )}
        </Card>

        {/* Save Changes Button */}
        <div className="flex justify-end">
          <Button onClick={handleSaveChanges} size="lg">
            Save All Changes
          </Button>
        </div>
      </div>
    </div>
  );
}