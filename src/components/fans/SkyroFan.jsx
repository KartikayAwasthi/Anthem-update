import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Star, Zap, Volume2, Shield, ChevronDown, ChevronUp, ShoppingCart, Heart, X, ChevronLeft, ChevronRight, ZoomIn, Share2, Settings, Battery, Info } from "lucide-react";
import { useCart } from '../../contexts/CartContext';
import ColorChangeTransition from '../ColorChangeTransition';
import CartButton from '../CartButton';

// Import Skyro images
const skyroImg = "/Skyro/fan2.png";
const skyroImg1 = "/Skyro/fan1.png";
const skyroImg2 = "/Skyro/fan2.png";
const skyroImg3 = "/Skyro/fan3.png";
const skyroImg4 = "/Skyro/fan4.png";
const skyroImg5 = "/Skyro/fan5.png";

const skyroCreatives = [
  "/Skyro-creatives/1.jpg",
  "/Skyro-creatives/2.jpg",
  "/Skyro-creatives/3.jpg",
  "/Skyro-creatives/skyroinfo.jpg"
];

const skyroData = {
  name: "SKYRO",
  image: skyroImg,
  motorTypes: {
    bldc: {
      name: "BLDC Motor",
      price: "₹3,999",
      description: "The SKYRO ceiling fan combines cutting-edge BLDC motor technology with elegant design. Perfect for modern homes seeking efficiency and style.",
      features: [
        "Powerfully efficient five star rated with ultra low energy consumption",
        "High speed with high Air Delivery",
        "Smooth noiseless operation",
        "Speed control on remote for 6 speed levels",
        "Boost mode for higher Air Delivery",
        "Easy installation",
        "Aero dynamic blades for strong air flow",
        "5 yrs warranty on motors",
        "2 yrs warranty on PCB",
        "Radio frequency (RF) remote for ease of operation from any corner of the room"
      ],
      specifications: {
        "Motor Type": "BLDC (Brushless DC)",
        "Power Consumption": "34W",
        "Input Voltage": "230V AC, 50Hz",
        "Power": "34W",
        "Air Delivery": "220 CMM",
        "Speed": "375 RPM",
        "Sweep": "1200mm",
        "Warranty": "5 Years Motor, 2 Years PCB"
      }
    },
    induction: {
      name: "Induction Motor",
      price: "₹2,999",
      description: "The SKYRO with reliable induction motor offers robust performance and durability. Perfect for consistent everyday use.",
      features: [
        "Double Ball Bearing",
        "Antidust Coating Technology",
        "Superior EN3B Shaft",
        "Efficient motor having low TR",
        "High Power Factor",
        "100% Copper Winding",
        "2 yrs warranty",
        "High Speed with high Air Delivery"
      ],
      specifications: {
        "Motor Type": "Single Phase Induction",
        "Power Consumption": "54W",
        "Input Voltage": "230V AC, 50Hz",
        "Power": "54W",
        "Air Delivery": "225 CMM",
        "Speed": "375 RPM",
        "Sweep": "1200mm",
        "Warranty": "2 Years"
      }
    }
  },
  rating: 4.8,
  colors: [
    { name: "Pearl White", image: skyroImg1, code: "#FFFFFF" },
    { name: "Midnight Black", image: skyroImg2, code: "#2F2F2F" },
    { name: "Royal Blue", image: skyroImg3, code: "#4169E1" },
    { name: "Antique Gold", image: skyroImg4, code: "#D4AF37" },
    { name: "Purple", image: skyroImg5, code: "#8A2BE2" }
  ],
  itemDetails: {
    brandName: "Anthem by Emsquare Industries",
    modelName: "SKYRO",
    bldcComponents: [
      "BLDC Ceiling Fan Motor Assembly",
      "Aerodynamic Fan Blades (3 pieces)",
      "Decorative LED Canopy",
      "RF Remote Control with 6 Speed Settings",
      "Premium Mounting Hardware Kit",
      "Installation Manual",
      "Warranty Card",
      "LED Light Module"
    ],
    inductionComponents: [
      "Induction Motor Assembly",
      "Aerodynamic Fan Blades (3 pieces)",
      "Standard Canopy",
      "Wall Switch Control",
      "Standard Mounting Hardware Kit",
      "Installation Manual",
      "Warranty Card"
    ],
    manufacturerAddress: {
      company: "Emsquare Industries",
      address: "Plot No. 72, GIDC, Bethora Industrial Estate, Bethora, Ponda, Goa-403409, India",
      phone: "+91 7400440127",
      email: "info@emsquareglobal.com",
      website: "www.anthemappliances.com"
    }
  }
};

const SkyroFan = () => {
  const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState(skyroData.colors[0]);
  
  // Initialize motor type based on available options
  const getDefaultMotorType = () => {
    const availableTypes = Object.keys(skyroData.motorTypes);
    if (availableTypes.includes('bldc')) return 'bldc';
    if (availableTypes.includes('induction')) return 'induction';
    return availableTypes[0];
  };
  
  const [selectedMotorType, setSelectedMotorType] = useState(getDefaultMotorType());
  const [showColorTransition, setShowColorTransition] = useState(false);
  const [isSpecsOpen, setIsSpecsOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isItemDetailsOpen, setIsItemDetailsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  // Fullscreen image viewer states
  const [showFullscreen, setShowFullscreen] = useState(false);
  const [fullscreenImageIndex, setFullscreenImageIndex] = useState(0);

  // Get current motor data based on selection
  const getCurrentMotorData = () => {
    const currentMotor = skyroData.motorTypes[selectedMotorType];
    if (currentMotor) return currentMotor;
    
    const availableTypes = Object.keys(skyroData.motorTypes);
    return skyroData.motorTypes[availableTypes[0]] || {};
  };

  // Get dynamic quick info based on motor type
  const getQuickInfo = () => {
    const currentMotor = getCurrentMotorData();
    const motorType = selectedMotorType;
    
    if (motorType === 'bldc') {
      return [
        { icon: Zap, label: "Energy Efficient", desc: `${currentMotor.specifications?.["Power Consumption"] || "28W"} Power` },
        { icon: Volume2, label: "Silent Operation", desc: `${currentMotor.specifications?.["Speed"] || "300"} RPM` },
        { icon: Shield, label: "Long Warranty", desc: currentMotor.specifications?.["Warranty"] || "5 Years Motor" }
      ];
    } else if (motorType === 'induction') {
      return [
        { icon: Settings, label: "High Performance", desc: "Powerful Motor" },
        { icon: Zap, label: "High Air Delivery", desc: `${currentMotor.specifications?.["Air Delivery"] || "280"} CMM` },
        { icon: Shield, label: "Warranty", desc: currentMotor.specifications?.["Warranty"] || "2 Years" }
      ];
    } else {
      // Default info
      return [
        { icon: Zap, label: "Energy Efficient", desc: "Low Power" },
        { icon: Volume2, label: "Silent Operation", desc: "Quiet Performance" },
        { icon: Shield, label: "Warranty", desc: "Coverage Included" }
      ];
    }
  };

  // Get components based on selected motor type
  const getCurrentComponents = () => {
    if (selectedMotorType === 'bldc') {
      return skyroData.itemDetails.bldcComponents;
    } else if (selectedMotorType === 'induction') {
      return skyroData.itemDetails.inductionComponents;
    }
    // Default fallback
    return skyroData.itemDetails.bldcComponents || skyroData.itemDetails.inductionComponents || [];
  };

  // Handle motor type change
  const handleMotorTypeChange = (motorType) => {
    setSelectedMotorType(motorType);
  };

  // Handle add to cart
  const handleAddToCart = () => {
    const currentMotor = getCurrentMotorData();
    const cartItem = {
      id: `skyro-${selectedMotorType}`,
      name: `${skyroData.name} (${currentMotor.name})`,
      price: currentMotor.price,
      image: getCurrentImage(),
      desc: currentMotor.description,
      color: selectedColor?.name || 'Default',
      motorType: currentMotor.name
    };
    addToCart(cartItem);
    
    alert(`${skyroData.name} with ${currentMotor.name} added to cart!`);
  };

  // Handle share function
  const handleShare = async () => {
    const shareData = {
      title: `Anthem ${skyroData.name}`,
      text: `Check out this amazing ${skyroData.name} ceiling fan`,
      url: window.location.href
    };

    try {
      if (navigator.share && navigator.canShare(shareData)) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      }
    } catch (error) {
      console.log('Error sharing:', error);
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      } catch (clipboardError) {
        console.log('Clipboard error:', clipboardError);
      }
    }
  };

  const handleColorChange = (color) => {
    if (selectedColor?.name !== color.name) {
      setShowColorTransition(true);
      setTimeout(() => {
        setSelectedColor(color);
      }, 600);
    }
  };

  const getCurrentImage = () => {
    return selectedColor ? selectedColor.image : skyroData.image;
  };

  // Fullscreen image viewer functions
  const openFullscreen = (imageIndex) => {
    setFullscreenImageIndex(imageIndex);
    setShowFullscreen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeFullscreen = () => {
    setShowFullscreen(false);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    const totalImages = skyroCreatives.length;
    setFullscreenImageIndex((prev) => (prev + 1) % totalImages);
  };

  const prevImage = () => {
    const totalImages = skyroCreatives.length;
    setFullscreenImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (showFullscreen) {
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'Escape') closeFullscreen();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [showFullscreen]);

  const currentMotor = getCurrentMotorData();

  if (!skyroData) {
    return (
      <div className="bg-[#1c1c1c] text-white min-h-screen pt-24 pb-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#e49385] mb-4">Fan not found</h2>
          <p className="text-gray-400">The requested fan model could not be loaded.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#1c1c1c] text-white min-h-screen pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Back Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 text-[#e49385] hover:text-[#ba6a5a] transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Products</span>
          </button>
        </motion.div>

        {/* Fullscreen Image Viewer */}
        <AnimatePresence>
          {showFullscreen && skyroCreatives && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90"
              onClick={closeFullscreen}
            >
              {/* Header controls */}
              <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-20">
                <div className="bg-black/50 text-white text-sm px-4 py-2 rounded-full backdrop-blur-sm">
                  <span className="font-medium">{fullscreenImageIndex + 1} / {skyroCreatives.length}</span>
                </div>
                <button
                  onClick={closeFullscreen}
                  className="bg-black/50 text-white p-3 hover:bg-red-600/50 rounded-full transition-all duration-200 backdrop-blur-sm"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation arrows */}
              {skyroCreatives.length > 1 && (
                <>
                  <button
                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                    className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-4 hover:bg-[#ba6a5a]/50 rounded-full transition-all duration-200 z-20 backdrop-blur-sm"
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                    className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-4 hover:bg-[#ba6a5a]/50 rounded-full transition-all duration-200 z-20 backdrop-blur-sm"
                  >
                    <ChevronRight className="w-8 h-8" />
                  </button>
                </>
              )}

              {/* Image */}
              <motion.div
                className="relative flex items-center justify-center w-full h-full p-8"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.div
                  className="relative flex items-center justify-center rounded-lg shadow-2xl"
                >
                  <motion.img
                    key={fullscreenImageIndex}
                    src={skyroCreatives[fullscreenImageIndex]}
                    alt={`Creative ${fullscreenImageIndex + 1}`}
                    className="select-none rounded-lg max-w-[80vw] max-h-[80vh] object-contain"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    draggable={false}
                  />
                </motion.div>
              </motion.div>

              {/* Bottom instructions */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white/80 text-sm text-center z-20">
                <div className="bg-black/50 rounded-xl px-6 py-3 backdrop-blur-sm">
                  <div className="flex items-center justify-center space-x-6 text-xs">
                    <span className="flex items-center space-x-1">
                      <span className="text-[#e49385]">←→</span>
                      <span>Navigate</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <span className="text-[#e49385]">ESC</span>
                      <span>Close</span>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Main Image */}
            <div className="relative bg-gradient-to-br from-[#ffffff9a] to-[#ffffff91] rounded-2xl p-8 shadow-2xl">
              <img
                src={getCurrentImage()}
                alt={skyroData.name}
                className="w-full h-96 object-contain transition-all duration-500"
              />
              {/* Floating Action Buttons */}
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <button 
                  onClick={handleShare}
                  className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors group"
                  title="Share this fan"
                >
                  <Share2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </button>
                <button className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
              </div>
              
              {/* Localized Color Change Animation */}
              <ColorChangeTransition 
                isVisible={showColorTransition} 
                onComplete={() => setShowColorTransition(false)}
                type="fan"
                localized={true}
              />
            </div>

            {/* Color Variants */}
            {skyroData.colors && skyroData.colors.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[#e49385]">Available Colors</h3>
                <div className="flex flex-wrap gap-3">
                  {skyroData.colors.map((color, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`cursor-pointer p-3 rounded-xl border-2 transition-all duration-300 bg-[#2f2f2f] ${
                        selectedColor?.name === color.name
                          ? "border-[#ba6a5a] bg-[#ba6a5a]/10"
                          : "border-gray-600 hover:border-[#e49385]"
                      }`}
                      onClick={() => handleColorChange(color)}
                    >
                      <img
                        src={color.image}
                        alt={color.name}
                        className="w-16 h-16 object-contain"
                      />
                      <p className="text-xs text-center mt-2">{color.name}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* Right Column - Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Product Title & Rating */}
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">
                 {skyroData.name}
              </h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(skyroData.rating)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-400"
                      }`}
                    />
                  ))}
                  <span className="text-gray-300 ml-2">({skyroData.rating})</span>
                </div>
                <span className="text-green-400 text-sm">In Stock</span>
                <span className="bg-[#ba6a5a] text-white px-3 py-1 rounded-full text-sm">
                  {getCurrentMotorData().name}
                </span>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                {getCurrentMotorData().description}
              </p>
            </div>

            {/* Price */}
            <div className="bg-gradient-to-r from-[#2f2f2f] to-[#1f1f1f] rounded-xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-3xl font-bold text-[#ba6a5a]">{getCurrentMotorData().price}</span>
                  <span className="text-gray-400 line-through ml-3">₹{parseInt(getCurrentMotorData().price?.replace('₹', '') || '0') + 1000}</span>
                </div>
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                  Save ₹1000
                </span>
              </div>
            </div>

            {/* Motor Type Selection Buttons */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[#e49385]">Motor Type</h3>
              <div className="grid grid-cols-1 gap-3">
                {Object.entries(skyroData.motorTypes).map(([motorKey, motorData]) => (
                  <motion.button
                    key={motorKey}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                      selectedMotorType === motorKey
                        ? "border-[#ba6a5a] bg-[#ba6a5a]/10"
                        : "border-gray-600 hover:border-[#e49385] bg-[#2f2f2f]"
                    }`}
                    onClick={() => handleMotorTypeChange(motorKey)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {motorKey === 'bldc' ? (
                          <Battery className={`w-6 h-6 ${selectedMotorType === motorKey ? 'text-[#ba6a5a]' : 'text-gray-400'}`} />
                        ) : (
                          <Settings className={`w-6 h-6 ${selectedMotorType === motorKey ? 'text-[#ba6a5a]' : 'text-gray-400'}`} />
                        )}
                        <div>
                          <h4 className="font-semibold text-white">{motorData.name}</h4>
                          <p className="text-sm text-gray-300">{motorData.price}</p>
                        </div>
                      </div>
                      {selectedMotorType === motorKey && (
                        <div className="w-4 h-4 bg-[#ba6a5a] rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      )}
                    </div>
                    <p className="text-sm text-gray-400 mt-2">{motorData.description}</p>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <div className="flex-1">
                <CartButton 
                  product={{
                    id: `skyro-${selectedMotorType}`,
                    name: `${skyroData.name} (${getCurrentMotorData().name})`,
                    price: getCurrentMotorData().price,
                    image: getCurrentImage(),
                    desc: getCurrentMotorData().description,
                    color: selectedColor?.name || 'Default',
                    motorType: getCurrentMotorData().name
                  }}
                  className="py-4 px-6"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#2f2f2f] text-white py-4 px-6 rounded-xl font-semibold border border-[#ba6a5a] hover:bg-[#ba6a5a]/10 transition-all duration-300"
              >
                Buy Now
              </motion.button>
            </div>

            {/* Quick Info Icons */}
            <div className="grid grid-cols-3 gap-4">
              {getQuickInfo().map((info, index) => (
                <div key={index} className="text-center p-4 bg-[#2f2f2f] rounded-xl">
                  <info.icon className="w-8 h-8 text-[#ba6a5a] mx-auto mb-2" />
                  <p className="text-sm text-gray-300">{info.label}</p>
                  <p className="text-xs text-gray-500 mt-1">{info.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Key Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 bg-[#2f2f2f] rounded-xl p-6"
        >
          {/* Key Features Section */}
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-semibold text-[#e49385]">Key Features</h3>
            <motion.button
              className="flex items-center gap-2 cursor-pointer text-[#e49385] hover:text-[#ba6a5a] transition-colors"
              onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
            >
              <span className="text-lg font-semibold"></span>
              <motion.div
                animate={{ rotate: isFeaturesOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isFeaturesOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </motion.div>
            </motion.button>
          </div>
          
          <motion.div
            initial={false}
            animate={{ height: isFeaturesOpen ? "auto" : 0, opacity: isFeaturesOpen ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-4 grid grid-cols-1 gap-3">
              {getCurrentMotorData().features?.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: isFeaturesOpen ? 1 : 0, y: isFeaturesOpen ? 0 : 10 }}
                  transition={{ duration: 0.3, delay: isFeaturesOpen ? index * 0.05 : 0 }}
                  className="flex items-start gap-3 p-3 bg-[#1c1c1c] rounded-lg"
                >
                  <div className="w-2 h-2 bg-[#ba6a5a] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-200">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Technical Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-[#2f2f2f] rounded-xl p-6"
        >
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setIsSpecsOpen(!isSpecsOpen)}
          >
            <h3 className="text-2xl font-semibold text-[#e49385]">Technical Specifications</h3>
            <motion.div
              animate={{ rotate: isSpecsOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-[#e49385]"
            >
              {isSpecsOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
            </motion.div>
          </div>
          <motion.div
            initial={false}
            animate={{ height: isSpecsOpen ? "auto" : 0, opacity: isSpecsOpen ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(getCurrentMotorData().specifications || {}).map(([key, value], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: isSpecsOpen ? 1 : 0, y: isSpecsOpen ? 0 : 10 }}
                  transition={{ duration: 0.3, delay: isSpecsOpen ? index * 0.05 : 0 }}
                  className="flex justify-between items-center border-b border-[#444] pb-3"
                >
                  <span className="text-gray-400 text-sm">{key}</span>
                  <span className="text-white font-medium text-sm text-right">{value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Item Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-12 bg-[#2f2f2f] rounded-xl p-6"
        >
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setIsItemDetailsOpen(!isItemDetailsOpen)}
          >
            <h3 className="text-2xl font-semibold text-[#e49385]">Item Details</h3>
            <motion.div
              animate={{ rotate: isItemDetailsOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-[#e49385]"
            >
              {isItemDetailsOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
            </motion.div>
          </div>
          <motion.div
            initial={false}
            animate={{ height: isItemDetailsOpen ? "auto" : 0, opacity: isItemDetailsOpen ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-6 space-y-6">
              {/* Brand and Model */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex justify-between items-center border-b border-[#444] pb-3">
                  <span className="text-gray-400 text-sm">Brand Name</span>
                  <span className="text-white font-medium text-sm text-right">{skyroData.itemDetails.brandName}</span>
                </div>
                <div className="flex justify-between items-center border-b border-[#444] pb-3">
                  <span className="text-gray-400 text-sm">Model Name</span>
                  <span className="text-white font-medium text-sm text-right">{skyroData.itemDetails.modelName}</span>
                </div>
              </div>

              {/* Components */}
              <div>
                <h4 className="text-lg font-semibold text-[#e49385] mb-3">Included Components</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {getCurrentComponents().map((component, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: isItemDetailsOpen ? 1 : 0, y: isItemDetailsOpen ? 0 : 10 }}
                      transition={{ duration: 0.3, delay: isItemDetailsOpen ? index * 0.05 : 0 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 bg-[#ba6a5a] rounded-full flex-shrink-0"></div>
                      <span className="text-gray-200 text-sm">{component}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Manufacturer Details */}
              <div>
                <h4 className="text-lg font-semibold text-[#e49385] mb-3">Manufacturer & Marketed By:</h4>
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex justify-between items-start border-b border-[#444] pb-3">
                    <span className="text-gray-400 text-sm">Company</span>
                    <span className="text-white font-medium text-sm text-right">{skyroData.itemDetails.manufacturerAddress.company}</span>
                  </div>
                  <div className="flex justify-between items-start border-b border-[#444] pb-3">
                    <span className="text-gray-400 text-sm">Address</span>
                    <span className="text-white font-medium text-sm text-right max-w-xs">{skyroData.itemDetails.manufacturerAddress.address}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-[#444] pb-3">
                    <span className="text-gray-400 text-sm">Phone</span>
                    <span className="text-white font-medium text-sm text-right">{skyroData.itemDetails.manufacturerAddress.phone}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-[#444] pb-3">
                    <span className="text-gray-400 text-sm">Email</span>
                    <span className="text-white font-medium text-sm text-right">{skyroData.itemDetails.manufacturerAddress.email}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Website</span>
                    <span className="text-white font-medium text-sm text-right">{skyroData.itemDetails.manufacturerAddress.website}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Creatives Section */}
        {skyroCreatives && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12"
          >
            <h3 className="text-2xl font-semibold text-[#e49385] mb-6">
              Creative Highlights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {skyroCreatives.map((img, index) => (
                <motion.div
                  key={index}
                  className="relative rounded-xl overflow-hidden shadow-lg bg-[#2f2f2f] hover:scale-[1.02] transition-all duration-300 cursor-pointer group"
                  onClick={() => openFullscreen(index)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={img}
                      alt={`Creative ${index + 1}`}
                      className="w-full h-64 object-cover transition-all duration-300 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Overlay with zoom icon */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center rounded-xl">
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <ZoomIn className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  {/* Index badge */}
                  <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-sm">
                    <span className="font-medium">{index + 1}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default SkyroFan;
