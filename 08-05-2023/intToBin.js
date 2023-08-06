function intToBinary(n) {
    if (n < 0) {
      // Handle negative numbers using two's complement
      const positiveValue = Math.abs(n);
      const binaryValue = (positiveValue >>> 0).toString(2);
      const paddedBinary = binaryValue.padStart(32, '0');
      return paddedBinary;
    } else {
      // Positive numbers can be directly converted to binary
      return n.toString(2);
    }
  }