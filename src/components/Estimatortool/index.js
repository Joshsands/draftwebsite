import { useState, useEffect } from 'react';
import { Label, Input, Select, Textarea, Radio, Checkbox } from "@rebass/forms";
import { Box, Flex } from "rebass";
import { Switch, Button } from 'evergreen-ui'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faSave, faPlus } from '@fortawesome/free-solid-svg-icons'

const blank = 0;
const FACP = 1500;
const NAC = 500;
const docBox = 300;
const DACT = 200;

const Estimatortool = () => {

  {/* ROW 1 */ }
  const [price1, setPrice1] = useState(0);
  const [count1, setCount1] = useState(0);
  const [subtotal1, setSubtotal1] = useState(0);
  const [markup1, setMarkup1] = useState(0);
  const [total1, setTotal1] = useState(0);
  const [selectedOption1, setSelectedOption1] = useState(0);
  const [markupPercent, setMarkupPercent] = useState(0.3);



  function handleOptionChange1(event) {
    let number = parseFloat(event.target.value)
    setSelectedOption1(number)
    setPrice1(number)
  }

  function handleClick1() {
    if (price1 === blank) {
      return
    }
    else {
      setCount1(count1 + 1);
      setSubtotal1((count1 + 1) * price1);
      setMarkup1((subtotal1 + price1) * markupPercent);
      setTotal1((subtotal1 + price1) + (markup1 + (price1 * markupPercent)));
    }
  }

  function minuesClick1() {
    if (price1 === blank) {
      return
    }
    else {
      setCount1(count1 - 1);
      setSubtotal1((count1 - 1) * price1);
      setMarkup1((subtotal1 - price1) * markupPercent);
      setTotal1((subtotal1 - price1) - (markup1 - (price1 * markupPercent)))
    }
  }

  const formattedSubtotal = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(subtotal1);
  const formattedMarkup = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(markup1);
  const formattedTotal = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(total1);
  const formattedPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price1);


  {/* ROW 2 */ }
  const [price2, setPrice2] = useState(0);
  const [count2, setCount2] = useState(0);
  const [subtotal2, setSubtotal2] = useState(0);
  const [markup2, setMarkup2] = useState(0);
  const [total2, setTotal2] = useState(0);
  const [selectedOption2, setSelectedOption2] = useState(0);

  function handleOptionChange2(event) {
    let number = parseFloat(event.target.value)
    setSelectedOption2(number)
    setPrice2(number)
  }

  function handleClick2() {
    if (price2 === blank) {
      return
    }
    else {
      setCount2(count2 + 1);
      setSubtotal2((count2 + 1) * price2);
      setMarkup2((subtotal2 + price2) * markupPercent);
      setTotal2((subtotal2 + price2) + (markup2 + (price2 * markupPercent)));
    }
  }


  function minuesClick2() {
    if (price2 === blank) {
      return
    }
    else {
      setCount2(count2 - 1);
      setSubtotal2((count2 - 1) * price2);
      setMarkup2((subtotal2 - price2) * markupPercent);
      setTotal2((subtotal2 - price2) - (markup2 - (price2 * markupPercent)))
    }
  }


  const formattedSubtotal2 = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(subtotal2);
  const formattedMarkup2 = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(markup2);
  const formattedTotal2 = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(total2);
  const formattedPrice2 = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price2);



  {/* TOTAL MATERIAL */ }
  const [materialTotal, setMaterialTotal] = useState([]);

  function storeMaterial() {
    setMaterialTotal(total1 + total2);
    localStorage.setItem('materialTotal', JSON.stringify(materialTotal));

    }

  // useEffect(() => {
  //   localStorage.setItem('materialTotal', JSON.stringify(materialTotal));
  // }, []);

  useEffect(() => {
    const storedMaterial = JSON.parse(localStorage.getItem('materialTotal'));
  if (storedMaterial) {
    setMaterialTotal(storedMaterial)
  }
  }, []);

console.log(materialTotal)




  const formattedMaterialTotal= new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(materialTotal);
 
  return (
    <>

<div className="d-flex flex-row">
{/* <div className="p-0 align-self-center me-1" >

<Button margin={0} appearance="primary" intent="success" onClick={recall}>
  <FontAwesomeIcon icon={ faPlus } />
</Button>
</div> */}

<div className="p-0 align-self-center me-1" >

<Button margin={0} appearance="primary" intent="success" onClick={storeMaterial}>
<FontAwesomeIcon icon={ faSave } />
</Button>
  </div>
<div className="p-0 align-self-center me-1" >

        <h1>MATERIAL: {formattedMaterialTotal}</h1>
        </div>

      </div>

      <Box as="form" onSubmit={(e) => e.preventDefault()} py={3}>

        {/*row 1 */}
        <Flex mx={10} mb={3}>
          <Box width={1 / 4} px={1}>
            <Label htmlFor="device">Device</Label>
            <Select id="device" device="device" defaultValue='0' value={selectedOption1} onChange={handleOptionChange1}>
              <option value={blank}> </option>
              <option value={FACP}>FACP</option>
              <option value={NAC}>NAC BOOSTER</option>
              <option value={docBox}>DOC BOX</option>
              <option value={DACT}>DACT</option>
            </Select>
          </Box>

          <Box width={1 / 4} px={1}>
            <Label htmlFor="qty">QTY</Label>

            <div className="d-flex flex-row">

              <div className="p-0 align-self-center me-1" >
                <Button margin={0} appearance="primary" intent="success" onClick={handleClick1}>
                  +</Button>
              </div>

              <div className="p-0 align-self-center me-1">
                <Button margin={0} appearance="primary" intent="danger" onClick={minuesClick1}>
                  -</Button>
              </div>

              <div className="align-self-center">
                <Input id="qty" qty="qty" value={count1} />
              </div>

            </div>
          </Box>

          <Box width={1 / 4} px={1}>
            <Label htmlFor="price">Price</Label>
            <Input id="price" price="price" value={formattedPrice} />
          </Box>

          <Box width={1 / 4} px={1}>
            <Label htmlFor="subtotal">Subtotal</Label>
            <Input id="subtotal" subtotal="subtotal" value={formattedSubtotal} />
          </Box>

          <Box width={1 / 4} px={1}>
            <Label htmlFor="markup">Mark-up</Label>
            <Input id="markup" markup="markup" value={formattedMarkup} />
          </Box>

          <Box width={1 / 4} px={1}>
            <Label htmlFor="total">Total</Label>
            <Input id="total" total="total" value={formattedTotal} />
          </Box>
        </Flex>

        {/*row 2 */}
        <Flex mx={10} mb={3}>
          <Box width={1 / 4} px={1}>
            <Select id="device" device="device" value={selectedOption2} onChange={handleOptionChange2}>
              <option value={blank}> </option>
              <option value={FACP}>FACP</option>
              <option value={NAC}>NAC BOOSTER</option>
              <option value={docBox}>DOC BOX</option>
              <option value={DACT}>DACT</option>
            </Select>
          </Box>

          <Box width={1 / 4} px={1}>
            <div className="d-flex flex-row">
              <div className="p-0 align-self-center me-1" >
                <Button margin={0} appearance="primary" intent="success" onClick={handleClick2}>
                  +</Button>
              </div>
              <div className="p-0 align-self-center me-1" >
                <Button margin={0} appearance="primary" intent="danger" onClick={minuesClick2}>
                  -</Button>
              </div>
              <div className="p-0">

                <Input id="qty" qty="qty" value={count2} />
              </div>
            </div>
          </Box>

          <Box width={1 / 4} px={1}>
            <Input id="price" price="price" value={formattedPrice2} />
          </Box>

          <Box width={1 / 4} px={1}>
            <Input id="subtotal" subtotal="subtotal" value={formattedSubtotal2} />
          </Box>

          <Box width={1 / 4} px={1}>
            <Input id="markup" markup="markup" value={formattedMarkup2} />
          </Box>

          <Box width={1 / 4} px={1}>
            <Input id="total" total="total" value={formattedTotal2} />
          </Box>
        </Flex>

        {/*row 3 */}
        <Flex mx={10} mb={3}>
          <Box width={1 / 4} px={1}>
            <Input id="device" device="device" defaultValue="FACP" />
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
            <Input id="device" device="device" defaultValue="FACP" />
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

        {/*row 5 */}
        <Flex mx={10} mb={3}>
          <Box width={1 / 4} px={1}>
            <Input id="device" device="device" defaultValue="FACP" />
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

        {/*row 6 */}
        <Flex mx={10} mb={3}>
          <Box width={1 / 4} px={1}>
            <Input id="device" device="device" defaultValue="FACP" />
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

        {/*row 7 */}
        <Flex mx={10} mb={3}>
          <Box width={1 / 4} px={1}>
            <Input id="device" device="device" defaultValue="FACP" />
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

        {/*row 8 */}
        <Flex mx={10} mb={3}>
          <Box width={1 / 4} px={1}>
            <Input id="device" device="device" defaultValue="FACP" />
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

        {/*row 9 */}
        <Flex mx={10} mb={3}>
          <Box width={1 / 4} px={1}>
            <Input id="device" device="device" defaultValue="FACP" />
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

        {/*row 10 */}
        <Flex mx={10} mb={3}>
          <Box width={1 / 4} px={1}>
            <Input id="device" device="device" defaultValue="FACP" />
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

        {/* <Flex mx={-2} flexWrap='wrap'>
    <Label width={[ 1/2, 1/4 ]} p={2}>
      <Radio
        id='beep'
        name='beep'
        value='beep'
        defaultChecked
      />
      Beep
    </Label>
    <Label width={[ 1/2, 1/4 ]} p={2}>
      <Radio
        id='boop'
        name='beep'
        value='boop'
      />
      Boop
    </Label>
    <Label width={[1/2, 1/4]} p={2}>
      <Checkbox
        id='remember'
        name='remember'
      />
      Remember Me
    </Label>
    <Box px={2} ml='auto'>
      <Button>
        Beep
      </Button>
    </Box>
  </Flex> */}
      </Box>
    </>
  );
};

export default Estimatortool;
