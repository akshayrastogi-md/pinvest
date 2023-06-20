import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  useColorModeValue,
  Text,
  Container,
  chakra,
  Divider,
  HStack,
} from '@chakra-ui/react'

import { ChevronDownIcon } from '@chakra-ui/icons'

export default function StartupFAQ() {
  return (
    <Container
      maxWidth="100%"
      mb={50}
      textAlign={'center'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <chakra.h2
        fontSize={{
          base: '3xl',
          sm: '4xl'
        }}
        fontWeight="extrabold"
        mb={10}
        mt={0}
        textAlign="center"
        letterSpacing="tight"
        lineHeight="shorter"
        color="gray.900"
        _dark={{
          color: 'gray.100'
        }}
      >
        <chakra.span display="block">FAQs</chakra.span>
      </chakra.h2>
      <Flex width="100%" align={'center'} justify={'center'}>
        <Container width="100%" maxWidth="100%" m={0}>
          <Accordion
            allowMultiple
            width="100%"
            maxW="100%"
            bg="white"
            rounded="lg"
          >
            <AccordionItem>
              <AccordionButton
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                p={4}
                _hover={{ bg: 'gray.100' }}
              >
                <Text fontSize="md">What problems are you solving?</Text>
                <ChevronDownIcon fontSize="24px" />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Text textAlign={'left'}>
                  In today's digital age, the retail landscape has undergone
                  significant transformations with the rise of e-commerce
                  giants. While online shopping offers convenience, it has also
                  posed challenges for local businesses and customers. OhLocal's
                  innovative business idea aims to solve several key problems
                  that have emerged in the retail industry. Lack of Hyperlocal
                  Connectivity: With the dominance of e-commerce platforms,
                  local businesses often struggle to connect with their local
                  communities. Customers, on the other hand, may find it
                  challenging to discover and access products available in their
                  immediate vicinity. OhLocal addresses this problem by creating
                  a hyperlocal shopping model, bridging the gap between local
                  merchants and customers. Unfair Competition for Local
                  Merchants: Small and medium-sized businesses often face an
                  uphill battle when competing against large e-commerce players.
                  They struggle to offer competitive prices and reach their
                  target audience effectively. OhLocal levels the playing field
                  by empowering local merchants to offer better prices, adjust
                  prices dynamically, and tap into real-time market insights,
                  enabling them to compete more effectively. Lack of
                  Personalized Shopping Experiences: Customers crave
                  personalized shopping experiences tailored to their
                  preferences and needs. However, traditional e-commerce
                  platforms often fail to deliver this level of personalization.
                  OhLocal utilizes AI technology to provide customers with a
                  tailored shopping experience, offering product and price
                  discovery in their city while ensuring express delivery.
                  Limited Support for Local Economies: Supporting local
                  businesses is crucial for fostering vibrant local economies.
                  Unfortunately, the dominance of e-commerce platforms often
                  diverts consumer spending away from local merchants. OhLocal's
                  business idea promotes local economic growth by connecting
                  customers with local businesses, encouraging them to shop
                  within their community and contribute to the local economy.
                  Inefficient Inventory Management: Poor inventory management
                  can lead to stockouts, lost sales, and operational
                  inefficiencies for businesses. OhLocal addresses this problem
                  by offering merchants a streamlined inventory management
                  solution. This allows merchants to optimize their stock
                  levels, avoid inventory-related challenges, and maintain a
                  balance between supply and demand. By addressing these
                  critical problems, OhLocal's business idea brings immense
                  value to both customers and local merchants. It creates a
                  hyperlocal shopping ecosystem that fosters community
                  engagement, enables fair competition, offers personalized
                  experiences, supports local economies, and streamlines
                  inventory management. OhLocal's innovative approach
                  revolutionizes the retail industry, empowering local
                  businesses and enhancing the shopping experience for
                  customers.
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                p={4}
                _hover={{ bg: 'gray.100' }}
              >
                <Text fontSize="md">
                  How do people solve this problem today?
                </Text>
                <ChevronDownIcon fontSize="24px" />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Text textAlign={'left'}>
                  Currently, people try to solve the problems addressed by
                  OhLocal through various means, although they may not have
                  comprehensive solutions like OhLocal offers. Here are some
                  ways people attempt to address these problems today: Local
                  Networking: Customers often rely on word-of-mouth
                  recommendations from friends, family, or neighbors to discover
                  local businesses. They may ask for recommendations on social
                  media platforms or join local community groups to find trusted
                  merchants in their vicinity. Online Search: Customers use
                  search engines and online directories to find local
                  businesses. However, the results are often cluttered with
                  large e-commerce platforms, making it challenging to identify
                  smaller local merchants. Price Comparison: Customers typically
                  visit multiple online platforms to compare prices and find the
                  best deal. They manually search and compare prices across
                  different e-commerce websites, which can be time-consuming and
                  cumbersome. Traditional Advertising: Local merchants may
                  resort to traditional advertising methods such as print media,
                  flyers, or billboards to reach their target audience. However,
                  these methods have limited reach and may not effectively
                  target the specific local community. Inventory Management
                  Systems: Some businesses utilize inventory management systems
                  or software to track their stock levels. However, these
                  systems may lack real-time data or integration with external
                  pricing information, making it challenging to optimize
                  inventory and pricing strategies. It is important to note that
                  while these methods offer partial solutions, they do not fully
                  address the comprehensive needs of customers and local
                  businesses. OhLocal's innovative business idea provides a
                  holistic platform that combines hyperlocal connectivity,
                  personalized experiences, competitive pricing, and efficient
                  inventory management, offering a comprehensive solution to the
                  problems faced by customers and local merchants in today's
                  retail landscape.
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                p={4}
                _hover={{ bg: 'gray.100' }}
              >
                <Text fontSize="md">
                  What is your unique selling proposition?
                </Text>
                <ChevronDownIcon fontSize="24px" />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Text textAlign={'left'}>
                  OhLocal's Unique Selling Proposition (USP) lies in its ability
                  to provide a comprehensive and innovative solution to the
                  problems faced by customers and local merchants in the retail
                  industry. Here are the key elements of OhLocal's USP:
                  Hyperlocal Shopping Model: OhLocal's platform enables
                  customers to discover and access products available in their
                  immediate vicinity, bringing the concept of hyperlocal
                  shopping to the forefront. By connecting customers with local
                  businesses, OhLocal fosters community engagement and supports
                  local economies. AI-Enabled Bidding Platform: OhLocal
                  leverages AI technology to power its bidding platform,
                  offering personalized shopping experiences and real-time
                  market insights. The AI algorithms provide customers with
                  tailored product and price discovery, while also enabling
                  merchants to adjust their prices dynamically and compete
                  effectively with e-commerce giants. Competitive Pricing and
                  Express Delivery: OhLocal's USP lies in its ability to offer
                  customers better prices than traditional e-commerce platforms.
                  By tapping into local merchants' offerings and real-time
                  pricing data, OhLocal ensures competitive pricing while
                  providing express delivery through its hyperlocal networks,
                  enhancing the overall customer experience. Comprehensive
                  Merchant Solutions: OhLocal's platform goes beyond a simple
                  listing directory by providing a range of solutions for local
                  merchants. This includes inventory management tools, the
                  ability to create targeted ads, access to real-time e-commerce
                  prices for competitive pricing strategies, and even business
                  loan enablement. OhLocal aims to empower local businesses with
                  the tools they need to succeed in the modern retail landscape.
                  Customer-Centric Approach: OhLocal places a strong emphasis on
                  delivering a seamless and personalized shopping experience to
                  its customers. By understanding their preferences, OhLocal's
                  AI algorithms provide relevant recommendations, ensuring
                  customers find the products they desire, all within their
                  local community. Overall, OhLocal's USP lies in its ability to
                  bridge the gap between local merchants and customers, offering
                  a comprehensive hyperlocal shopping experience, personalized
                  recommendations, competitive pricing, and efficient inventory
                  management. By addressing the unique needs of both customers
                  and local businesses, OhLocal sets itself apart as an
                  innovative and customer-centric solution in the retail
                  industry.
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                p={4}
                _hover={{ bg: 'gray.100' }}
              >
                <Text fontSize="md">Who are you competitors</Text>
                <ChevronDownIcon fontSize="24px" />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Text textAlign={'left'}>
                  E-commerce Giants: Established e-commerce platforms such as
                  Amazon, Flipkart, and eBay can be seen as competitors. These
                  platforms have a vast customer base, extensive product
                  offerings, and well-established logistics networks. However,
                  OhLocal differentiates itself by focusing on hyperlocal
                  shopping, offering better prices, and connecting customers
                  with local merchants. Local Search Engines/Directories:
                  Companies like Yelp, Google Maps, and Yellow Pages provide
                  local business listings and customer reviews. While they
                  assist in finding local businesses, they may not offer the
                  same level of hyperlocal connectivity and personalized
                  shopping experiences that OhLocal provides. Online
                  Marketplaces: Platforms like Etsy, eBay, and Shopify enable
                  merchants to sell their products online. However, OhLocal's
                  focus on hyperlocal shopping, real-time pricing, and inventory
                  management solutions differentiates it from these broader
                  online marketplaces.
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                p={4}
                _hover={{ bg: 'gray.100' }}
              >
                <Text fontSize="md">Which industry are you targeting?why?</Text>
                <ChevronDownIcon fontSize="24px" />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Text textAlign={'left'}>
                  OhLocal primarily targets the retail industry, specifically
                  the segment of white goods. White goods encompass a range of
                  large household appliances such as refrigerators, washing
                  machines, air conditioners, and televisions. Here's why
                  OhLocal has chosen to focus on this industry: Market Size and
                  Potential: The white goods market is significant, with a high
                  demand for these products in both urban and rural areas. By
                  targeting this industry, OhLocal taps into a large customer
                  base and a substantial market opportunity. Higher Ticket Size:
                  White goods are typically higher-priced products compared to
                  smaller consumer goods. By facilitating transactions in this
                  segment, OhLocal can generate higher transaction values,
                  leading to increased revenue potential. Limited Local
                  Connectivity: Local businesses in the white goods sector often
                  face challenges in reaching out to their local communities
                  effectively. OhLocal aims to address this problem by providing
                  a hyperlocal shopping platform, connecting customers with
                  nearby white goods merchants. Price Sensitivity: Customers
                  purchasing white goods are often price-sensitive and look for
                  the best deals. OhLocal's competitive pricing strategy,
                  enabled through real-time market insights and dynamic pricing,
                  appeals to customers seeking cost-effective options. Local
                  Merchant Support: OhLocal aims to empower local merchants by
                  providing them with a comprehensive suite of tools and
                  solutions to effectively reach their target audience. This
                  targeted support contributes to the growth of local businesses
                  and strengthens the local economy. By focusing on the white
                  goods industry, OhLocal aims to disrupt the traditional retail
                  model, providing customers with a better shopping experience,
                  competitive pricing, and localized connectivity. This targeted
                  approach allows OhLocal to address specific pain points in the
                  market and deliver value to both customers and local merchants
                  within the white goods industry.
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                p={4}
                _hover={{ bg: 'gray.100' }}
              >
                <Text fontSize="md">
                  What is the market size of your solution?
                </Text>
                <ChevronDownIcon fontSize="24px" />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Text textAlign={'left'}>
                  India's white goods market has been witnessing steady growth
                  over the years, driven by factors such as increasing
                  urbanization, rising disposable incomes, and changing consumer
                  lifestyles. According to a report by India Brand Equity
                  Foundation (IBEF), the white goods market in India was valued
                  at approximately $10.74 billion in 2020 and was projected to
                  reach $21.18 billion by 2025, growing at a compound annual
                  growth rate (CAGR) of around 14.2%. Additionally, India's
                  e-commerce market has been experiencing significant growth,
                  with a rising number of consumers embracing online shopping.
                  According to a report by Statista, the Indian e-commerce
                  market was valued at approximately $74.7 billion in 2020 and
                  is expected to reach $199.3 billion by 2025, growing at a CAGR
                  of around 21.4%. OhLocal's unique proposition of hyperlocal
                  shopping, competitive pricing, and AI-enabled features
                  positions it well to tap into this market potential. By
                  connecting customers with local merchants in the white goods
                  segment, OhLocal has the opportunity to capture a meaningful
                  share of the market by offering convenience, cost savings, and
                  personalized shopping experiences.
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                p={4}
                _hover={{ bg: 'gray.100' }}
              >
                <Text fontSize="md">What are your revenue Stream</Text>
                <ChevronDownIcon fontSize="24px" />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Flex
                flexDirection={"column"}
                  alignItems="flex-start"
                  spacing={1}
                  fontSize="md"
                >
                  <Text>1. Subcription from retailers</Text>
                  <Text>2. Marketing Marketplace</Text>
                  <Text>3. Extended Warranty</Text>
                  <Text>4. EMI</Text>
                </Flex>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Container>
      </Flex>
    </Container>
  )
}
