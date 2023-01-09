import React from "react";
import { Label, Input, Select, Textarea, Radio, Checkbox } from "@rebass/forms";
import { Box, Flex, Button } from "rebass";

const Permit = () => {
  return (
    <>
      <h1>PERMITTING</h1>
      <Box as="form" onSubmit={(e) => e.preventDefault()} py={3}>
        
        {/*row 1 */}
        <Flex mx={10} mb={3}>
          <Box width={1 / 4} px={1}>
            <Label htmlFor="device">Device</Label>
            <Input id="device" device="device" defaultValue="Design" />
          </Box>

          <Box width={1 / 4} px={1}>
            <Label htmlFor="qty">QTY</Label>
            <Input id="qty" qty="qty" defaultValue="0" />
          </Box>

          <Box width={1 / 4} px={1}>
            <Label htmlFor="price">Price</Label>
            <Input id="price" price="price" defaultValue="$1,500.00" />
          </Box>

          <Box width={1 / 4} px={1}>
            <Label htmlFor="subtotal">Subtotal</Label>
            <Input id="subtotal" subtotal="subtotal" defaultValue="$1,500.00" />
          </Box>

          <Box width={1 / 4} px={1}>
            <Label htmlFor="markup">Mark-up</Label>
            <Input id="markup" markup="markup" defaultValue="$450.00" />
          </Box>

          <Box width={1 / 4} px={1}>
            <Label htmlFor="total">Total</Label>
            <Input id="total" total="total" defaultValue="$1,950.00" />
          </Box>

          {/* <Box width={1/2} px={2}>
      <Label htmlFor='location'>Location</Label>
      <Select
        id='location'
        name='location'
        defaultValue='NYC'>
        <option>NYC</option>
        <option>DC</option>
        <option>ATX</option>
        <option>SF</option>
        <option>LA</option>
      </Select>
    </Box> */}
        </Flex>

        {/*row 2 */}
        <Flex mx={10} mb={3}>
          <Box width={1 / 4} px={1}>
            <Input id="device" device="device" defaultValue="AHJ" />
          </Box>

          <Box width={1 / 4} px={1}>
            <Input id="qty" qty="qty" defaultValue="0" />
          </Box>

          <Box width={1 / 4} px={1}>
            <Input id="price" price="price" defaultValue="$1,500.00" />
          </Box>

          <Box width={1 / 4} px={1}>
            <Input id="subtotal" subtotal="subtotal" defaultValue="$1,500.00" />
          </Box>

          <Box width={1 / 4} px={1}>
            <Input id="markup" markup="markup" defaultValue="$450.00" />
          </Box>

          <Box width={1 / 4} px={1}>
            <Input id="total" total="total" defaultValue="$1,950.00" />
          </Box>
        </Flex>

        {/*row 3 */}
        <Flex mx={10} mb={3}>
          <Box width={1 / 4} px={1}>
            <Input id="device" device="device" defaultValue="Inspection" />
          </Box>

          <Box width={1 / 4} px={1}>
            <Input id="qty" qty="qty" defaultValue="0" />
          </Box>

          <Box width={1 / 4} px={1}>
            <Input id="price" price="price" defaultValue="$1,500.00" />
          </Box>

          <Box width={1 / 4} px={1}>
            <Input id="subtotal" subtotal="subtotal" defaultValue="$1,500.00" />
          </Box>

          <Box width={1 / 4} px={1}>
            <Input id="markup" markup="markup" defaultValue="$450.00" />
          </Box>

          <Box width={1 / 4} px={1}>
            <Input id="total" total="total" defaultValue="$1,950.00" />
          </Box>
        </Flex>

        {/*row 4 */}
        <Flex mx={10} mb={3}>
          <Box width={1 / 4} px={1}>
            <Input id="device" device="device" defaultValue="Commissioning" />
          </Box>

          <Box width={1 / 4} px={1}>
            <Input id="qty" qty="qty" defaultValue="0" />
          </Box>

          <Box width={1 / 4} px={1}>
            <Input id="price" price="price" defaultValue="$1,500.00" />
          </Box>

          <Box width={1 / 4} px={1}>
            <Input id="subtotal" subtotal="subtotal" defaultValue="$1,500.00" />
          </Box>

          <Box width={1 / 4} px={1}>
            <Input id="markup" markup="markup" defaultValue="$450.00" />
          </Box>

          <Box width={1 / 4} px={1}>
            <Input id="total" total="total" defaultValue="$1,950.00" />
          </Box>
        </Flex>

      </Box>
    </>
  );
};

export default Permit;