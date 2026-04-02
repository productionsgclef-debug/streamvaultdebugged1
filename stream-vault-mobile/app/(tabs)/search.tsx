import { ScrollView, Text, View, FlatList, Pressable, Image, TextInput } from "react-native";
import { ScreenContainer } from "@/components/screen-container";
import { useColors } from "@/hooks/use-colors";
import React, { useState } from "react";

// Mock search results
const allContent = [
  { id: "1", title: "The Midnight Mystery", poster: "https://via.placeholder.com/150x225/e50914/ffffff?text=Midnight" },
  { id: "2", title: "Action Thriller", poster: "https://via.placeholder.com/150x225/e50914/ffffff?text=Action" },
  { id: "3", title: "Drama Series", poster: "https://via.placeholder.com/150x225/1a1a1a/e50914?text=Drama" },
  { id: "4", title: "Sci-Fi Adventure", poster: "https://via.placeholder.com/150x225/e50914/ffffff?text=SciFi" },
  { id: "5", title: "Comedy Special", poster: "https://via.placeholder.com/150x225/1a1a1a/e50914?text=Comedy" },
  { id: "6", title: "Horror Film", poster: "https://via.placeholder.com/150x225/333333/e50914?text=Horror" },
];

const recentSearches = ["Thriller", "Drama", "Action"];
const trendingSearches = ["Sci-Fi", "Comedy", "Mystery"];

/**
 * Content Grid Card Component
 */
function SearchResultCard({ item, onPress }: { item: any; onPress: () => void }) {
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
 * Search Chip Component
 */
function SearchChip({ label, onPress }: { label: string; onPress: () => void }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
      className="bg-surface px-4 py-2 rounded-full mr-2 mb-2"
    >
      <Text className="text-foreground text-sm">{label}</Text>
    </Pressable>
  );
}

/**
 * Search Screen
 */
export default function SearchScreen() {
  const colors = useColors();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredResults = searchQuery
    ? allContent.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const handleContentPress = (item: any) => {
    // Navigate to detail screen
    console.log("Content pressed:", item.title);
  };

  const handleSearchChipPress = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <ScreenContainer className="p-0">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        className="bg-background"
      >
        {/* Search Bar */}
        <View className="px-4 pt-6 pb-4 gap-4">
          <View className="flex-row items-center bg-surface rounded-full px-4 py-3 gap-2">
            <Text className="text-muted text-lg">🔍</Text>
            <TextInput
              placeholder="Search movies, series..."
              placeholderTextColor={colors.muted}
              value={searchQuery}
              onChangeText={setSearchQuery}
              className="flex-1 text-foreground text-base"
            />
            {searchQuery ? (
              <Pressable
                onPress={() => setSearchQuery("")}
                style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1 }]}
              >
                <Text className="text-muted text-lg">✕</Text>
              </Pressable>
            ) : null}
          </View>
        </View>

        {searchQuery ? (
          <>
            {/* Search Results */}
            <View className="px-4 pb-4">
              <Text className="text-lg font-bold text-foreground mb-4">
                Results for &quot;{searchQuery}&quot;
              </Text>
              {filteredResults.length > 0 ? (
                <View className="px-2">
                  <FlatList
                    data={filteredResults}
                    renderItem={({ item }) => (
                      <SearchResultCard
                        item={item}
                        onPress={() => handleContentPress(item)}
                      />
                    )}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    scrollEnabled={false}
                    columnWrapperStyle={{ flex: 1 }}
                  />
                </View>
              ) : (
                <View className="items-center justify-center py-12">
                  <Text className="text-muted text-base">No results found</Text>
                </View>
              )}
            </View>
          </>
        ) : (
          <>
            {/* Recent Searches */}
            <View className="px-4 pb-6">
              <Text className="text-lg font-bold text-foreground mb-3">Recent Searches</Text>
              <View className="flex-row flex-wrap">
                {recentSearches.map((search, index) => (
                  <SearchChip
                    key={index}
                    label={search}
                    onPress={() => handleSearchChipPress(search)}
                  />
                ))}
              </View>
            </View>

            {/* Trending Searches */}
            <View className="px-4">
              <Text className="text-lg font-bold text-foreground mb-3">Trending Now</Text>
              <View className="flex-row flex-wrap">
                {trendingSearches.map((search, index) => (
                  <SearchChip
                    key={index}
                    label={search}
                    onPress={() => handleSearchChipPress(search)}
                  />
                ))}
              </View>
            </View>
          </>
        )}
      </ScrollView>
    </ScreenContainer>
  );
}
