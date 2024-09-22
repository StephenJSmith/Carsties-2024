"use server";

import { fetchWrapper } from "@/lib/fetchWrapper";
import { Auction, Bid, PagedResult } from "@/types";
import { revalidatePath } from 'next/cache';
import { FieldValues } from 'react-hook-form';

export async function getData(query: string): Promise<PagedResult<Auction>> {
  const url = `search${query}`;

  return await fetchWrapper.get(url);
}

export async function updateAuctionTest() {
  const data = {
    mileage: Math.floor(Math.random() * 10000) + 1,
  };

  return await fetchWrapper.put(
    "auctions/afbee524-5972-4075-8800-7d1f9d7b0a0c",
    data
  );
}

export async function createAuction(data: FieldValues) {
  return await fetchWrapper.post("auctions", data);
}

export async function getDetailedViewData(id: string): Promise<Auction> {
  const url = `auctions/${id}`;

  return await fetchWrapper.get(url);
}

export async function updateAuction(data: FieldValues, id: string) {
  const url = `auctions/${id}`;
  const res = await fetchWrapper.put(url, data);
  revalidatePath(url);

  return res;
}

export async function deleteAuction(id: string) {
  const url = `auctions/${id}`;

  return await fetchWrapper.del(url);
}

export async function getBidsForAuction(id: string): Promise<Bid[]> {
  const url = `bids/${id}`;

  return await fetchWrapper.get(url);
}

export async function placeBidForAuction(auctionId: string, amount: number) {
  const url = `bids?auctionId=${auctionId}&amount=${amount}`;
  return await fetchWrapper.post(url, {})
}
