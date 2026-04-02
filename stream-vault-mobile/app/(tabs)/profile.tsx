import { ScrollView, Text, View, Pressable, FlatList, Image } from "react-native";
import { ScreenContainer } from "@/components/screen-container";
import React from "react";

// Mock watchlist
const mockWatchlist = [
  { id: "1", title: "Saved 1", poster: "https://via.placeholder.com/150x225/e50914/ffffff?text=Saved+1" },
  { id: "2", title: "Saved 2", poster: "https://via.placeholder.com/150x225/1a1a1a/e50914?text=Saved+2" },
  { id: "3", title: "Saved 3", poster: "https://via.placeholder.com/150x225/333333/e50914?text=Saved+3" },
  { id: "4", title: "Saved 4", poster: "https://via.placeholder.com/150x225/e50914/ffffff?text=Saved+4" },
];

// Mock viewing history
const mockHistory = [
  { id: "101", title: "History 1", poster: "https://via.placeholder.com/150x225/e50914/ffffff?text=History+1" },
  { id: "102", title: "History 2", poster: "https://via.placeholder.com/150x225/1a1a1a/e50914?text=History+2" },
  { id: "103", title: "History 3", poster: "https://via.placeholder.com/150x225/333333/e50914?text=History+3" },
  { id: "104", title: "History 4", poster: "https://via.placeholder.com/150x225/e50914/ffffff?text=History+4" },
];

/**
 * Content Card Component
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
      </View>
      <Text className="text-foreground text-xs font-semibold mt-2 w-32" numberOfLines={1}>
        {item.title}
      </Text>
    </Pressable>
  );
}

/**
 * Menu Item Component
 */
function MenuItem({ icon, label, onPress }: { icon: string; label: string; onPress: () => void }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
      className="flex-row items-center justify-between py-4 px-4 border-b border-border"
    >
      <View className="flex-row items-center gap-3">
        <Text className="text-2xl">{icon}</Text>
        <Text className="text-foreground font-semibold">{label}</Text>
      </View>
      <Text className="text-muted text-lg">›</Text>
    </Pressable>
  );
}

/**
 * Profile Screen
 */
export default function ProfileScreen() {
  const [activeTab, setActiveTab] = React.useState<"watchlist" | "history">("watchlist");

  const handleContentPress = (item: any) => {
    // Navigate to detail screen
    console.log("Content pressed:", item.title);
  };

  return (
    <ScreenContainer className="p-0">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        className="bg-background"
      >
        {/* Profile Header */}
        <View className="px-4 pt-6 pb-8 items-center gap-4">
          <View className="w-24 h-24 rounded-full bg-primary items-center justify-center">
            <Text className="text-5xl">👤</Text>
          </View>
          <View className="items-center gap-1">
            <Text className="text-2xl font-bold text-foreground">John Viewer</Text>
            <Text className="text-muted">Premium Member</Text>
          </View>
        </View>

        {/* Tabs */}
        <View className="flex-row border-b border-border">
          <Pressable
            onPress={() => setActiveTab("watchlist")}
            style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
            className="flex-1 py-4 items-center"
          >
            <Text
              className={`font-semibold text-base ${
                activeTab === "watchlist" ? "text-primary" : "text-muted"
              }`}
            >
              Watchlist
            </Text>
            {activeTab === "watchlist" && (
              <View className="absolute bottom-0 w-full h-1 bg-primary" />
            )}
          </Pressable>

          <Pressable
            onPress={() => setActiveTab("history")}
            style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
            className="flex-1 py-4 items-center"
          >
            <Text
              className={`font-semibold text-base ${
                activeTab === "history" ? "text-primary" : "text-muted"
              }`}
            >
              History
            </Text>
            {activeTab === "history" && (
              <View className="absolute bottom-0 w-full h-1 bg-primary" />
            )}
          </Pressable>
        </View>

        {/* Content Section */}
        {activeTab === "watchlist" ? (
          <View className="px-4 py-6">
            <Text className="text-lg font-bold text-foreground mb-4">My Watchlist</Text>
            {mockWatchlist.length > 0 ? (
              <FlatList
                data={mockWatchlist}
                renderItem={({ item }) => (
                  <ContentCard item={item} onPress={() => handleContentPress(item)} />
                )}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            ) : (
              <View className="items-center justify-center py-12">
                <Text className="text-muted">No items in watchlist</Text>
              </View>
            )}
          </View>
        ) : (
          <View className="px-4 py-6">
            <Text className="text-lg font-bold text-foreground mb-4">Viewing History</Text>
            {mockHistory.length > 0 ? (
              <FlatList
                data={mockHistory}
                renderItem={({ item }) => (
                  <ContentCard item={item} onPress={() => handleContentPress(item)} />
                )}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            ) : (
              <View className="items-center justify-center py-12">
                <Text className="text-muted">No viewing history</Text>
              </View>
            )}
          </View>
        )}

        {/* Settings Section */}
        <View className="mt-8 border-t border-border">
          <Text className="text-lg font-bold text-foreground px-4 pt-6 pb-4">Settings</Text>
          <MenuItem
            icon="🎬"
            label="Playback Settings"
            onPress={() => {
              /* Navigate to settings */
            }}
          />
          <MenuItem
            icon="🔔"
            label="Notifications"
            onPress={() => {
              /* Navigate to notifications */
            }}
          />
          <MenuItem
            icon="👤"
            label="Account"
            onPress={() => {
              /* Navigate to account */
            }}
          />
          <MenuItem
            icon="❓"
            label="Help & Support"
            onPress={() => {
              /* Navigate to help */
            }}
          />
          <MenuItem
            icon="🚪"
            label="Sign Out"
            onPress={() => {
              /* Sign out */
            }}
          />
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
