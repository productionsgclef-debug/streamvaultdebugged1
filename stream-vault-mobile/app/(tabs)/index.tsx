import { ScrollView, Text, View, FlatList, Pressable, Image } from "react-native";
import { ScreenContainer } from "@/components/screen-container";

// Mock content data
const mockContent = {
  featured: {
    id: "1",
    title: "The Midnight Mystery",
    description: "A thrilling detective series",
    rating: 8.5,
    year: 2024,
    poster: "https://via.placeholder.com/300x450/e50914/ffffff?text=Featured",
  },
  trending: [
    { id: "2", title: "Action Thriller", rating: 8.2, poster: "https://via.placeholder.com/150x225/e50914/ffffff?text=Trending+1" },
    { id: "3", title: "Drama Series", rating: 7.9, poster: "https://via.placeholder.com/150x225/1a1a1a/e50914?text=Trending+2" },
    { id: "4", title: "Sci-Fi Adventure", rating: 8.7, poster: "https://via.placeholder.com/150x225/e50914/ffffff?text=Trending+3" },
    { id: "5", title: "Comedy Special", rating: 7.5, poster: "https://via.placeholder.com/150x225/1a1a1a/e50914?text=Trending+4" },
    { id: "6", title: "Horror Film", rating: 8.1, poster: "https://via.placeholder.com/150x225/333333/e50914?text=Trending+5" },
  ],
  newReleases: [
    { id: "7", title: "New Release 1", rating: 8.4, poster: "https://via.placeholder.com/150x225/1a1a1a/e50914?text=New+1" },
    { id: "8", title: "New Release 2", rating: 8.0, poster: "https://via.placeholder.com/150x225/1a1a1a/e50914?text=New+2" },
    { id: "9", title: "New Release 3", rating: 8.6, poster: "https://via.placeholder.com/150x225/1a1a1a/e50914?text=New+3" },
    { id: "10", title: "New Release 4", rating: 7.8, poster: "https://via.placeholder.com/150x225/1a1a1a/e50914?text=New+4" },
    { id: "11", title: "New Release 5", rating: 8.3, poster: "https://via.placeholder.com/150x225/1a1a1a/e50914?text=New+5" },
  ],
  continueWatching: [
    { id: "12", title: "Continue 1", progress: 65, poster: "https://via.placeholder.com/150x225/333333/e50914?text=Continue+1" },
    { id: "13", title: "Continue 2", progress: 30, poster: "https://via.placeholder.com/150x225/333333/e50914?text=Continue+2" },
    { id: "14", title: "Continue 3", progress: 85, poster: "https://via.placeholder.com/150x225/333333/e50914?text=Continue+3" },
    { id: "15", title: "Continue 4", progress: 45, poster: "https://via.placeholder.com/150x225/333333/e50914?text=Continue+4" },
    { id: "16", title: "Continue 5", progress: 20, poster: "https://via.placeholder.com/150x225/333333/e50914?text=Continue+5" },
  ],
};

/**
 * Content Card Component - Displays a single content item
 */
function ContentCard({ item, onPress }: { item: any; onPress: () => void }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.7 : 1,
          transform: [{ scale: pressed ? 0.95 : 1 }],
        },
      ]}
      className="mr-3 overflow-hidden rounded-lg"
    >
      <View className="w-32 h-48 bg-surface rounded-lg overflow-hidden relative">
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
        {/* Rating badge */}
        <View className="absolute top-2 right-2 bg-primary px-2 py-1 rounded">
          <Text className="text-white text-xs font-semibold">{item.rating}</Text>
        </View>
      </View>
      <Text className="text-foreground text-xs font-semibold mt-2 w-32" numberOfLines={1}>
        {item.title}
      </Text>
    </Pressable>
  );
}

/**
 * Continue Watching Card - Shows progress bar
 */
function ContinueWatchingCard({ item, onPress }: { item: any; onPress: () => void }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.7 : 1,
          transform: [{ scale: pressed ? 0.95 : 1 }],
        },
      ]}
      className="mr-3 overflow-hidden rounded-lg"
    >
      <View className="w-32 h-48 bg-surface rounded-lg overflow-hidden relative">
        <Image
          source={{ uri: item.poster }}
          className="w-full h-full"
          resizeMode="cover"
        />
        {/* Progress bar at bottom */}
        <View className="absolute bottom-0 w-full h-1 bg-muted">
          <View
            className="h-full bg-primary"
            style={{ width: `${item.progress}%` }}
          />
        </View>
        {/* Play button overlay */}
        <View className="absolute inset-0 items-center justify-center bg-black/30">
          <View className="w-12 h-12 rounded-full bg-primary items-center justify-center">
            <Text className="text-white text-xl">▶</Text>
          </View>
        </View>
      </View>
      <Text className="text-foreground text-xs font-semibold mt-2 w-32" numberOfLines={1}>
        {item.title}
      </Text>
    </Pressable>
  );
}

/**
 * Content Row Component - Horizontal scrollable list
 */
function ContentRow({ title, data, onItemPress }: { title: string; data: any[]; onItemPress: (item: any) => void }) {
  const isContinueWatching = title === "Continue Watching";
  return (
    <View className="gap-3">
      <Text className="text-xl font-bold text-foreground px-4">{title}</Text>
      <FlatList
        data={data}
        renderItem={({ item }) =>
          isContinueWatching ? (
            <ContinueWatchingCard item={item} onPress={() => onItemPress(item)} />
          ) : (
            <ContentCard item={item} onPress={() => onItemPress(item)} />
          )
        }
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      />
    </View>
  );
}

/**
 * Hero Banner Component
 */
function HeroBanner({ featured, onPlayPress, onInfoPress }: { featured: any; onPlayPress: () => void; onInfoPress: () => void }) {
  return (
    <View className="relative h-96 bg-surface rounded-lg overflow-hidden mb-6">
      <Image
        source={{ uri: featured.poster }}
        className="w-full h-full absolute"
        resizeMode="cover"
      />
      {/* Gradient overlay */}
      <View className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Content */}
      <View className="absolute inset-0 justify-end p-6 gap-4">
        <Text className="text-3xl font-bold text-white">{featured.title}</Text>
        <Text className="text-sm text-gray-200">{featured.description}</Text>

        {/* Action buttons */}
        <View className="flex-row gap-3">
          <Pressable
            onPress={onPlayPress}
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.8 : 1,
                transform: [{ scale: pressed ? 0.97 : 1 }],
              },
            ]}
            className="flex-1 bg-primary py-3 rounded-lg items-center justify-center flex-row gap-2"
          >
            <Text className="text-white text-lg">▶</Text>
            <Text className="text-white font-bold text-base">Play</Text>
          </Pressable>

          <Pressable
            onPress={onInfoPress}
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.8 : 1,
                transform: [{ scale: pressed ? 0.97 : 1 }],
              },
            ]}
            className="flex-1 bg-surface border border-muted py-3 rounded-lg items-center justify-center flex-row gap-2"
          >
            <Text className="text-foreground text-lg">ℹ</Text>
            <Text className="text-foreground font-bold text-base">Info</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

/**
 * Home Screen - Stream Vault
 */
export default function HomeScreen() {
  const handleContentPress = (item: any) => {
    // Navigate to browse screen
    console.log("Content pressed:", item.title);
  };

  const handlePlayPress = () => {
    // Navigate to player screen
    console.log("Play pressed");
  };

  const handleInfoPress = () => {
    // Show info
    console.log("Info button pressed");
  };

  return (
    <ScreenContainer className="p-0">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        className="bg-background"
      >
        {/* Hero Banner */}
        <View className="px-4 pt-4">
          <HeroBanner
            featured={mockContent.featured}
            onPlayPress={handlePlayPress}
            onInfoPress={handleInfoPress}
          />
        </View>

        {/* Content Rows */}
        <View className="gap-8 pb-8">
          <ContentRow
            title="Trending Now"
            data={mockContent.trending}
            onItemPress={handleContentPress}
          />
          <ContentRow
            title="New Releases"
            data={mockContent.newReleases}
            onItemPress={handleContentPress}
          />
          <ContentRow
            title="Continue Watching"
            data={mockContent.continueWatching}
            onItemPress={handleContentPress}
          />
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
