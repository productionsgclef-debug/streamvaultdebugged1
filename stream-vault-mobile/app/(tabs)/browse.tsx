import React from "react";
import { ScrollView, Text, View, FlatList, Pressable, Image } from "react-native";
import { ScreenContainer } from "@/components/screen-container";

// Mock categories
const categories = [
  { id: "1", name: "Action", icon: "🎬", color: "#e50914" },
  { id: "2", name: "Drama", icon: "🎭", color: "#e50914" },
  { id: "3", name: "Comedy", icon: "😂", color: "#e50914" },
  { id: "4", name: "Horror", icon: "👻", color: "#e50914" },
  { id: "5", name: "Sci-Fi", icon: "🚀", color: "#e50914" },
  { id: "6", name: "Romance", icon: "💕", color: "#e50914" },
  { id: "7", name: "Thriller", icon: "🔪", color: "#e50914" },
  { id: "8", name: "Documentary", icon: "📚", color: "#e50914" },
];

// Mock content for categories
const categoryContent = {
  "1": [
    { id: "101", title: "Action 1", poster: "https://via.placeholder.com/150x225/e50914/ffffff?text=Action+1" },
    { id: "102", title: "Action 2", poster: "https://via.placeholder.com/150x225/e50914/ffffff?text=Action+2" },
    { id: "103", title: "Action 3", poster: "https://via.placeholder.com/150x225/e50914/ffffff?text=Action+3" },
    { id: "104", title: "Action 4", poster: "https://via.placeholder.com/150x225/e50914/ffffff?text=Action+4" },
    { id: "105", title: "Action 5", poster: "https://via.placeholder.com/150x225/e50914/ffffff?text=Action+5" },
    { id: "106", title: "Action 6", poster: "https://via.placeholder.com/150x225/e50914/ffffff?text=Action+6" },
  ],
  "2": [
    { id: "201", title: "Drama 1", poster: "https://via.placeholder.com/150x225/1a1a1a/e50914?text=Drama+1" },
    { id: "202", title: "Drama 2", poster: "https://via.placeholder.com/150x225/1a1a1a/e50914?text=Drama+2" },
    { id: "203", title: "Drama 3", poster: "https://via.placeholder.com/150x225/1a1a1a/e50914?text=Drama+3" },
    { id: "204", title: "Drama 4", poster: "https://via.placeholder.com/150x225/1a1a1a/e50914?text=Drama+4" },
    { id: "205", title: "Drama 5", poster: "https://via.placeholder.com/150x225/1a1a1a/e50914?text=Drama+5" },
    { id: "206", title: "Drama 6", poster: "https://via.placeholder.com/150x225/1a1a1a/e50914?text=Drama+6" },
  ],
};

/**
 * Category Card Component
 */
function CategoryCard({ category, onPress }: { category: any; onPress: () => void }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.7 : 1,
          transform: [{ scale: pressed ? 0.95 : 1 }],
        },
      ]}
      className="flex-1 m-2 bg-surface rounded-lg p-6 items-center justify-center min-h-24"
    >
      <Text className="text-4xl mb-2">{category.icon}</Text>
      <Text className="text-foreground font-semibold text-center">{category.name}</Text>
    </Pressable>
  );
}

/**
 * Content Grid Card Component
 */
function ContentGridCard({ item, onPress }: { item: any; onPress: () => void }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.7 : 1,
          transform: [{ scale: pressed ? 0.95 : 1 }],
        },
      ]}
      className="flex-1 m-2 overflow-hidden rounded-lg"
    >
      <View className="w-full aspect-[3/4] bg-surface rounded-lg overflow-hidden relative">
        <Image
          source={{ uri: item.poster }}
          className="w-full h-full"
          resizeMode="cover"
        />
        {/* Play button overlay */}
        <View className="absolute inset-0 items-center justify-center bg-black/30">
          <View className="w-12 h-12 rounded-full bg-primary items-center justify-center">
            <Text className="text-white text-xl">▶</Text>
          </View>
        </View>
      </View>
      <Text className="text-foreground text-xs font-semibold mt-2" numberOfLines={1}>
        {item.title}
      </Text>
    </Pressable>
  );
}

/**
 * Browse Screen
 */
export default function BrowseScreen() {
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);

  const handleCategoryPress = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  const handleContentPress = (item: any) => {
    // Navigate to detail screen
    console.log("Content pressed:", item.title);
  };

  const contentToDisplay = selectedCategory ? categoryContent[selectedCategory as keyof typeof categoryContent] || [] : [];

  return (
    <ScreenContainer className="p-0">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        className="bg-background"
      >
        {!selectedCategory ? (
          <>
            {/* Header */}
            <View className="px-4 pt-6 pb-4">
              <Text className="text-2xl font-bold text-foreground">Browse Categories</Text>
            </View>

            {/* Categories Grid */}
            <View className="px-2">
              <FlatList
                data={categories}
                renderItem={({ item }) => (
                  <CategoryCard category={item} onPress={() => handleCategoryPress(item.id)} />
                )}
                keyExtractor={(item) => item.id}
                numColumns={2}
                scrollEnabled={false}
                columnWrapperStyle={{ flex: 1 }}
              />
            </View>
          </>
        ) : (
          <>
            {/* Back Button and Header */}
            <View className="px-4 pt-6 pb-4 flex-row items-center gap-3">
              <Pressable
                onPress={() => setSelectedCategory(null)}
                style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1 }]}
                className="w-8 h-8 items-center justify-center"
              >
                <Text className="text-primary text-xl">←</Text>
              </Pressable>
              <Text className="text-2xl font-bold text-foreground">
                {categories.find((c) => c.id === selectedCategory)?.name}
              </Text>
            </View>

            {/* Content Grid */}
            <View className="px-2 pb-8">
              <FlatList
                data={contentToDisplay}
                renderItem={({ item }) => (
                  <ContentGridCard item={item} onPress={() => handleContentPress(item)} />
                )}
                keyExtractor={(item) => item.id}
                numColumns={2}
                scrollEnabled={false}
                columnWrapperStyle={{ flex: 1 }}
              />
            </View>
          </>
        )}
      </ScrollView>
    </ScreenContainer>
  );
}
