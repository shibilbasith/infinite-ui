// Tab.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import Tab from ".";
import { type TabProps } from "./types";

// Mock icons and content for demonstration
const HomeIcon = () => <span>🏠</span>;
const UserIcon = () => <span>👤</span>;
const SettingsIcon = () => <span>⚙️</span>;
const ChartIcon = () => <span>📊</span>;
const MessageIcon = () => <span>💬</span>;
const BellIcon = () => <span>🔔</span>;

const SampleContent = ({ title, description }: { title: string, description: string }) => (
  <div style={{ padding: "1rem" }}>
    <h3 style={{ margin: "0 0 1rem 0", color: "#1f2937" }}>{title}</h3>
    <p style={{ margin: 0, color: "#6b7280", lineHeight: 1.6 }}>{description}</p>
    <div style={{ marginTop: "1rem", padding: "1rem", backgroundColor: "#f9fafb", borderRadius: "0.5rem" }}>
      <p style={{ margin: 0, fontSize: "0.875rem", color: "#4b5563" }}>
        This is sample content for the {title.toLowerCase()} tab. In a real application,
        this would contain your actual tab content such as forms, data tables, charts, or other components.
      </p>
    </div>
  </div>
);

const meta: Meta<typeof Tab> = {
  title: "Components/Tab",
  component: Tab,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "A flexible tab component with multiple variants, sizes, and orientations."
      }
    }
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "pills", "underline", "bordered", "cards"],
      description: "Visual variant of the tabs"
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
      description: "Size of the tabs"
    },
    position: {
      control: { type: "select" },
      options: ["horizontal", "vertical"],
      description: "Orientation of the tabs"
    },
    fullWidth: {
      control: { type: "boolean" },
      description: "Make tabs take full width"
    },
    disabled: {
      control: { type: "boolean" },
      description: "Disable all tabs"
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes for container"
    },
    tabsClassName: {
      control: { type: "text" },
      description: "Additional CSS classes for tab list"
    },
    contentClassName: {
      control: { type: "text" },
      description: "Additional CSS classes for content area"
    }
  },
  tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<TabProps>;

// Basic tabs
export const Default: Story = {
  args: {
    tabs: [
      {
        key: "overview",
        label: "Overview",
        content: <SampleContent
          title="Overview"
          description="Get a quick summary of your dashboard with key metrics and recent activity."
        />
      },
      {
        key: "analytics",
        label: "Analytics",
        content: <SampleContent
          title="Analytics"
          description="Dive deep into your data with comprehensive analytics and reporting tools."
        />
      },
      {
        key: "reports",
        label: "Reports",
        content: <SampleContent
          title="Reports"
          description="Generate and view detailed reports with customizable filters and export options."
        />
      }
    ],
    defaultActiveTab: "overview",
    variant: "default",
    size: "medium",
    position: "horizontal"
  }
};

// With icons
export const WithIcons: Story = {
  args: {
    tabs: [
      {
        key: "home",
        label: "Home",
        icon: <HomeIcon />,
        content: <SampleContent
          title="Home Dashboard"
          description="Welcome to your home dashboard. Here you'll find an overview of all your important information."
        />
      },
      {
        key: "profile",
        label: "Profile",
        icon: <UserIcon />,
        content: <SampleContent
          title="User Profile"
          description="Manage your personal information, preferences, and account settings."
        />
      },
      {
        key: "analytics",
        label: "Analytics",
        icon: <ChartIcon />,
        content: <SampleContent
          title="Analytics Dashboard"
          description="View detailed analytics, charts, and performance metrics for your account."
        />
      },
      {
        key: "settings",
        label: "Settings",
        icon: <SettingsIcon />,
        content: <SampleContent
          title="Settings Panel"
          description="Configure your application settings, notifications, and system preferences."
        />
      }
    ],
    defaultActiveTab: "home",
    variant: "default",
    size: "medium"
  }
};

// With badges
export const WithBadges: Story = {
  args: {
    tabs: [
      {
        key: "messages",
        label: "Messages",
        icon: <MessageIcon />,
        badge: "12",
        content: <SampleContent
          title="Messages"
          description="View and manage your messages. You have 12 unread messages."
        />
      },
      {
        key: "notifications",
        label: "Notifications",
        icon: <BellIcon />,
        badge: "3",
        content: <SampleContent
          title="Notifications"
          description="Check your latest notifications. You have 3 new notifications."
        />
      },
      {
        key: "settings",
        label: "Settings",
        icon: <SettingsIcon />,
        content: <SampleContent
          title="Settings"
          description="Manage your application settings and preferences."
        />
      }
    ],
    defaultActiveTab: "messages",
    variant: "default",
    size: "medium"
  }
};

// Pills variant
export const Pills: Story = {
  args: {
    tabs: [
      {
        key: "all",
        label: "All Items",
        content: <SampleContent
          title="All Items"
          description="View all available items in your collection."
        />
      },
      {
        key: "active",
        label: "Active",
        badge: "24",
        content: <SampleContent
          title="Active Items"
          description="Items that are currently active and available for use."
        />
      },
      {
        key: "inactive",
        label: "Inactive",
        badge: "8",
        content: <SampleContent
          title="Inactive Items"
          description="Items that are currently inactive or disabled."
        />
      }
    ],
    defaultActiveTab: "all",
    variant: "pills",
    size: "medium"
  }
};

// Underline variant
export const Underline: Story = {
  args: {
    tabs: [
      {
        key: "posts",
        label: "Posts",
        badge: "156",
        content: <SampleContent
          title="Posts"
          description="All your published posts and articles."
        />
      },
      {
        key: "drafts",
        label: "Drafts",
        badge: "7",
        content: <SampleContent
          title="Drafts"
          description="Your unpublished drafts and work in progress."
        />
      },
      {
        key: "archived",
        label: "Archived",
        content: <SampleContent
          title="Archived"
          description="Posts that have been archived or removed from publication."
        />
      }
    ],
    defaultActiveTab: "posts",
    variant: "underline",
    size: "medium"
  }
};

// Bordered variant
export const Bordered: Story = {
  args: {
    tabs: [
      {
        key: "details",
        label: "Details",
        content: <SampleContent
          title="Product Details"
          description="Detailed information about the selected product including specifications and features."
        />
      },
      {
        key: "reviews",
        label: "Reviews",
        badge: "42",
        content: <SampleContent
          title="Customer Reviews"
          description="Read what customers are saying about this product."
        />
      },
      {
        key: "shipping",
        label: "Shipping",
        content: <SampleContent
          title="Shipping Information"
          description="Delivery options, costs, and estimated arrival times."
        />
      }
    ],
    defaultActiveTab: "details",
    variant: "bordered",
    size: "medium"
  }
};

// Cards variant
export const Cards: Story = {
  args: {
    tabs: [
      {
        key: "summary",
        label: "Summary",
        icon: <ChartIcon />,
        content: <SampleContent
          title="Project Summary"
          description="High-level overview of your project status and key metrics."
        />
      },
      {
        key: "team",
        label: "Team",
        icon: <UserIcon />,
        badge: "12",
        content: <SampleContent
          title="Team Members"
          description="Manage your team members and their roles in the project."
        />
      },
      {
        key: "settings",
        label: "Settings",
        icon: <SettingsIcon />,
        content: <SampleContent
          title="Project Settings"
          description="Configure project settings, permissions, and preferences."
        />
      }
    ],
    defaultActiveTab: "summary",
    variant: "cards",
    size: "medium"
  }
};

// Vertical tabs
export const Vertical: Story = {
  args: {
    tabs: [
      {
        key: "personal",
        label: "Personal Info",
        icon: <UserIcon />,
        content: <SampleContent
          title="Personal Information"
          description="Update your personal details, contact information, and profile picture."
        />
      },
      {
        key: "security",
        label: "Security",
        icon: <span>🔒</span>,
        content: <SampleContent
          title="Security Settings"
          description="Manage your password, two-factor authentication, and security preferences."
        />
      },
      {
        key: "notifications",
        label: "Notifications",
        icon: <BellIcon />,
        content: <SampleContent
          title="Notification Preferences"
          description="Control how and when you receive notifications from the application."
        />
      },
      {
        key: "billing",
        label: "Billing",
        icon: <span>💳</span>,
        content: <SampleContent
          title="Billing Information"
          description="View your billing history, update payment methods, and manage subscriptions."
        />
      }
    ],
    defaultActiveTab: "personal",
    variant: "default",
    size: "medium",
    position: "vertical"
  }
};

// Small size
export const Small: Story = {
  args: {
    tabs: [
      {
        key: "tab1",
        label: "Tab 1",
        content: <SampleContent title="Small Tab 1" description="Content for the first small tab." />
      },
      {
        key: "tab2",
        label: "Tab 2",
        badge: "5",
        content: <SampleContent title="Small Tab 2" description="Content for the second small tab." />
      },
      {
        key: "tab3",
        label: "Tab 3",
        content: <SampleContent title="Small Tab 3" description="Content for the third small tab." />
      }
    ],
    defaultActiveTab: "tab1",
    variant: "default",
    size: "small"
  }
};

// Large size
export const Large: Story = {
  args: {
    tabs: [
      {
        key: "dashboard",
        label: "Dashboard",
        icon: <HomeIcon />,
        content: <SampleContent
          title="Large Dashboard"
          description="This is a large-sized tab with comprehensive dashboard content."
        />
      },
      {
        key: "reports",
        label: "Reports",
        icon: <ChartIcon />,
        badge: "25",
        content: <SampleContent
          title="Large Reports"
          description="Detailed reporting section with large tab styling."
        />
      }
    ],
    defaultActiveTab: "dashboard",
    variant: "default",
    size: "large"
  }
};

// Full width
export const FullWidth: Story = {
  args: {
    tabs: [
      {
        key: "overview",
        label: "Overview",
        content: <SampleContent title="Overview" description="Full-width tab overview content." />
      },
      {
        key: "details",
        label: "Details",
        content: <SampleContent title="Details" description="Full-width tab details content." />
      },
      {
        key: "settings",
        label: "Settings",
        content: <SampleContent title="Settings" description="Full-width tab settings content." />
      }
    ],
    defaultActiveTab: "overview",
    variant: "default",
    size: "medium",
    fullWidth: true
  }
};

// Disabled tabs
export const Disabled: Story = {
  args: {
    tabs: [
      {
        key: "available",
        label: "Available",
        content: <SampleContent title="Available" description="This tab is available for interaction." />
      },
      {
        key: "disabled",
        label: "Disabled",
        disabled: true,
        content: <SampleContent title="Disabled" description="This tab is disabled." />
      },
      {
        key: "premium",
        label: "Premium",
        disabled: true,
        badge: "PRO",
        content: <SampleContent title="Premium" description="This tab requires a premium subscription." />
      }
    ],
    defaultActiveTab: "available",
    variant: "default",
    size: "medium"
  }
};

// All disabled
export const AllDisabled: Story = {
  args: {
    tabs: [
      {
        key: "tab1",
        label: "Tab 1",
        content: <SampleContent title="Tab 1" description="All tabs are disabled." />
      },
      {
        key: "tab2",
        label: "Tab 2",
        content: <SampleContent title="Tab 2" description="All tabs are disabled." />
      }
    ],
    defaultActiveTab: "tab1",
    variant: "default",
    size: "medium",
    disabled: true
  }
};
