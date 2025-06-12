# GemFactory - Internal Gem Manufacturing Platform

A comprehensive internal platform for managing gem creation workflows, from raw material processing to finished product certification. Built with modern React architecture and optimized for manufacturing operations, quality control, and production analytics.

## 🏭 Platform Overview

GemFactory is an enterprise-grade manufacturing management system designed specifically for gem creation operations:

- **Raw Material Management**: Inventory tracking and quality assessment of raw stones
- **Processing Workflows**: Automated cutting, polishing, and shaping operations
- **Quality Control**: Multi-stage inspection and certification processes
- **Production Analytics**: Real-time monitoring and performance optimization
- **Compliance Tracking**: Regulatory compliance and audit trail management

## 🏗️ Technical Architecture

### Core Technologies
- **React 18.3.1**: Modern React with Concurrent Features for real-time updates
- **TypeScript**: Type-safe development for critical manufacturing operations
- **Vite**: High-performance build system with instant HMR
- **React Router 6**: Hash-based routing for deployment flexibility
- **TanStack Query**: Advanced caching for manufacturing data synchronization

### UI & Design System
- **Tailwind CSS**: Utility-first styling for rapid UI development
- **Radix UI**: Accessible primitives for manufacturing control interfaces
- **shadcn/ui**: Enterprise-ready components with consistent design language
- **Lucide React**: Professional iconography for manufacturing operations

### Data Management & Forms
- **React Hook Form**: High-performance form handling for production data
- **Zod**: Runtime validation for critical manufacturing parameters
- **Class Variance Authority**: Type-safe component variants for status indicators

### Manufacturing-Specific Features
- **Recharts**: Production analytics and quality metrics visualization
- **Date-fns**: Precise timestamp handling for manufacturing schedules
- **Embla Carousel**: Interactive process flow visualization

## 📁 Project Structure

```
gemfactory/
├── src/
│   ├── components/              # Reusable UI components
│   │   ├── ui/                 # Base design system components
│   │   ├── manufacturing/      # Production-specific components
│   │   ├── quality/           # Quality control interfaces
│   │   └── analytics/         # Data visualization components
│   ├── pages/                  # Main application views
│   │   ├── Dashboard.tsx       # Production overview and KPIs
│   │   ├── Inventory.tsx       # Raw material management
│   │   ├── Production.tsx      # Active manufacturing processes
│   │   └── Quality.tsx         # Quality control workflows
│   ├── hooks/                  # Custom React hooks
│   │   ├── useManufacturing.ts # Production state management
│   │   ├── useQuality.ts       # Quality control operations
│   │   └── useInventory.ts     # Material tracking
│   ├── utils/                  # Manufacturing utilities
│   │   ├── gemometry.ts        # Geometric calculations for cuts
│   │   ├── quality.ts          # Quality assessment algorithms
│   │   └── scheduling.ts       # Production scheduling logic
│   ├── types/                  # TypeScript definitions
│   │   ├── manufacturing.ts    # Production process types
│   │   ├── quality.ts          # Quality standards and metrics
│   │   └── inventory.ts        # Material and product types
│   └── lib/                    # External service configurations
├── public/                     # Static manufacturing assets
├── docs/                      # Manufacturing process documentation
└── dist/                      # Production build output
```

## 🚀 Getting Started

### Prerequisites
- **Node.js**: Version 18.0.0 or higher (LTS recommended for stability)
- **npm**: Version 8.0.0 or higher (or equivalent package manager)
- **Git**: For version control and deployment automation

### Installation & Development Setup

1. **Clone the manufacturing platform**
   ```bash
   git clone https://github.com/igor-kan/gemfactory.git
   cd gemfactory
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with manufacturing system configurations
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```
   
   Platform available at: `http://localhost:8080`

### Available Scripts

#### Development Operations
- `npm run dev`: Start development server with hot reload
- `npm run build:dev`: Create development build for testing

#### Production Operations
- `npm run build`: Create optimized production build
- `npm run preview`: Preview production build locally

#### Quality Assurance
- `npm run lint`: Code quality and standards validation
- `npm run type-check`: TypeScript compilation verification
- `npm run test`: Run manufacturing workflow tests

#### Deployment Operations
- `npm run deploy`: Deploy to production environment
- `npm run predeploy`: Pre-deployment build and validation

## 🌐 Deployment Architecture

### Production Deployment (GitHub Pages)
The platform uses automated deployment with manufacturing-specific optimizations:

1. **Continuous Integration**: Automated testing on every commit
2. **Build Optimization**: Asset optimization and code splitting
3. **Quality Gates**: Automated quality checks before deployment
4. **Rollback Capability**: Quick reversion for production issues
5. **Base Path**: Configured as `/gemfactory/` for GitHub Pages subdirectory deployment
6. **HashRouter**: Used for client-side routing to avoid 404 errors on refresh

**Production URL**: [https://igor-kan.github.io/gemfactory](https://igor-kan.github.io/gemfactory)

### Enterprise Deployment
For internal manufacturing environments:

```bash
npm run build
# Deploy 'dist' contents to internal server infrastructure
```

### Environment Configuration
- **Base Path**: Configured as `/gemfactory/` for GitHub Pages subdirectory deployment
- **HashRouter**: Used for client-side routing
- **Asset Optimization**: Automatic compression and caching headers
- **Security**: Production-ready security headers and CORS policies

## 🏭 Manufacturing Features

### Production Management
1. **Workflow Orchestration**
   - Multi-stage cutting and polishing processes
   - Automated quality checkpoints at each stage
   - Real-time process monitoring and adjustment
   - Production scheduling and resource allocation

2. **Inventory Control**
   - Raw material tracking with quality grades
   - Finished product cataloging and storage
   - Automated reorder triggers for materials
   - Waste tracking and optimization analysis

3. **Quality Assurance**
   - Multi-point inspection protocols
   - Automated measurement and grading systems
   - Certification workflow management
   - Compliance documentation generation

### Analytics & Reporting
- **Production KPIs**: Throughput, efficiency, and quality metrics
- **Cost Analysis**: Material utilization and process optimization
- **Trend Analysis**: Historical performance and prediction modeling
- **Export Capabilities**: PDF reports and CSV data export

### User Experience Features
- **Real-time Updates**: Live production status and alerts
- **Mobile Responsive**: Tablet and mobile access for floor operations
- **Offline Capability**: Critical operations continue during connectivity issues
- **Role-Based Access**: Operator, supervisor, and manager permission levels

## 🛠️ Development Guidelines

### Code Organization Principles
- **Domain-Driven Design**: Features organized by manufacturing domains
- **Component Reusability**: Shared components for consistent UX
- **Type Safety**: Comprehensive TypeScript coverage for reliability
- **Performance**: Optimized for real-time manufacturing operations

### Manufacturing-Specific Patterns
- **State Management**: React Query for server state, React Context for UI state
- **Error Handling**: Graceful degradation for critical manufacturing processes
- **Validation**: Strict validation for production parameters and quality metrics
- **Monitoring**: Comprehensive logging for production troubleshooting

### Quality Standards
- **Testing Strategy**: Unit tests for business logic, integration tests for workflows
- **Code Review**: Mandatory peer review for all manufacturing logic changes
- **Documentation**: Inline documentation for complex manufacturing calculations
- **Accessibility**: WCAG 2.1 compliance for inclusive manufacturing interfaces

## 🔧 Manufacturing Workflows

### Gem Processing Pipeline
1. **Material Intake**
   - Raw stone assessment and grading
   - Digital imaging and measurement
   - Quality classification and routing

2. **Primary Processing**
   - Automated cutting with precision controls
   - Real-time measurement verification
   - Quality checkpoint validation

3. **Secondary Processing**
   - Polishing and surface finishing
   - Final dimensional verification
   - Optical clarity assessment

4. **Final Inspection**
   - Comprehensive quality evaluation
   - Certification document generation
   - Packaging and storage routing

### Quality Control Integration
- **Automated Inspection**: Computer vision for defect detection
- **Manual Verification**: Expert review for critical quality points
- **Documentation**: Complete audit trail for each manufactured gem
- **Continuous Improvement**: Quality data analysis for process optimization

## 🤝 Contributing to GemFactory

### Development Workflow
1. **Feature Planning**: Manufacturing requirements analysis
2. **Implementation**: Follow established coding patterns
3. **Testing**: Comprehensive validation including edge cases
4. **Documentation**: Update both code and process documentation
5. **Review**: Peer review with focus on manufacturing impact

### Manufacturing Domain Expertise
Contributors should understand:
- Gem cutting and polishing processes
- Quality control standards and metrics
- Manufacturing workflow optimization
- Regulatory compliance requirements

## 📋 Compliance & Standards

### Industry Standards
- **GIA Standards**: Gemological Institute of America grading protocols
- **ISO 9001**: Quality management system compliance
- **Industry Best Practices**: Adherence to gem manufacturing standards

### Data Security
- **Manufacturing Data**: Secure handling of proprietary processes
- **Quality Records**: Tamper-proof audit trails
- **Access Control**: Role-based permissions for sensitive operations

## 📝 License & Usage

This internal manufacturing platform is proprietary software for authorized use only.
Refer to internal documentation for usage guidelines and restrictions.

## 🔗 Manufacturing Resources

- **Production Dashboard**: [https://igor-kan.github.io/gemfactory](https://igor-kan.github.io/gemfactory)
- **Internal Documentation**: [Manufacturing Process Guidelines](./docs/manufacturing/)
- **Quality Standards**: [Quality Control Procedures](./docs/quality/)
- **Training Materials**: [Operator Training Resources](./docs/training/)

---

For detailed manufacturing process documentation, refer to the `/docs/manufacturing/` directory or contact the production engineering team.
